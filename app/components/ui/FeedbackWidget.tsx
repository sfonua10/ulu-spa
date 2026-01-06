'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MessageSquare, X, Image, Trash2, Plus } from 'lucide-react'

type FeedbackType = 'bug' | 'feature' | 'general'

interface Screenshot {
  file: File
  preview: string
}

const MAX_SCREENSHOTS = 3
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const STORAGE_KEY = 'ulu-feedback-enabled'
const FEEDBACK_SECRET = 'ulu-owner'

export default function FeedbackWidget() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState<FeedbackType>('general')
  const [description, setDescription] = useState('')
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Check URL param and localStorage on mount
  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setIsEnabled(true)
    }

    // Check for URL param
    const urlParams = new URLSearchParams(window.location.search)
    const feedbackKey = urlParams.get('showFeedback')

    if (feedbackKey === FEEDBACK_SECRET) {
      // Enable feedback mode
      localStorage.setItem(STORAGE_KEY, 'true')
      setIsEnabled(true)

      // Remove the param from URL without page reload
      urlParams.delete('showFeedback')
      const newUrl = urlParams.toString()
        ? `${window.location.pathname}?${urlParams.toString()}`
        : window.location.pathname
      window.history.replaceState({}, '', newUrl)
    }

    setIsHydrated(true)
  }, [])

  // Focus modal when opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const disableFeedback = () => {
    localStorage.removeItem(STORAGE_KEY)
    setIsEnabled(false)
  }

  const addScreenshot = (file: File) => {
    if (screenshots.length >= MAX_SCREENSHOTS) {
      alert(`Maximum ${MAX_SCREENSHOTS} screenshots allowed`)
      return
    }
    if (file.size > MAX_FILE_SIZE) {
      alert('File size must be under 5MB')
      return
    }
    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed')
      return
    }

    const preview = URL.createObjectURL(file)
    setScreenshots((prev) => [...prev, { file, preview }])
  }

  const removeScreenshot = (index: number) => {
    setScreenshots((prev) => {
      const updated = [...prev]
      URL.revokeObjectURL(updated[index].preview)
      updated.splice(index, 1)
      return updated
    })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    files.forEach((file) => addScreenshot(file))
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => addScreenshot(file))
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items
    if (!items) return

    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile()
        if (file) {
          addScreenshot(file)
        }
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!description.trim()) return

    setIsSubmitting(true)
    try {
      // Convert screenshots to base64
      const screenshotData: string[] = []
      for (const screenshot of screenshots) {
        const base64 = await fileToBase64(screenshot.file)
        screenshotData.push(base64)
      }

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          description,
          page: pathname,
          screenshots: screenshotData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit feedback')
      }

      setShowSuccess(true)
      setDescription('')
      setType('general')
      screenshots.forEach((s) => URL.revokeObjectURL(s.preview))
      setScreenshots([])

      setTimeout(() => {
        setShowSuccess(false)
        setIsOpen(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to submit feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowSuccess(false)
    setDescription('')
    setType('general')
    screenshots.forEach((s) => URL.revokeObjectURL(s.preview))
    setScreenshots([])
  }

  // Don't render anything until hydrated or if not enabled
  if (!isHydrated || !isEnabled) {
    return null
  }

  return (
    <>
      {/* Desktop Feedback Button - Vertical on Left */}
      <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-3 shadow-lg hover:shadow-xl transition-all rounded-r-lg border border-l-0 border-gray-200 cursor-pointer group"
        >
          <div
            className="flex flex-col items-center gap-1"
            style={{ writingMode: 'vertical-rl' }}
          >
            <div className="flex items-center gap-1">
              <MessageSquare
                className="w-4 h-4 text-spa-gold-600"
                style={{ writingMode: 'initial' as never }}
              />
              <span className="text-sm font-medium">Feedback</span>
            </div>
          </div>
        </button>
        {/* Disable button */}
        <button
          onClick={disableFeedback}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors opacity-0 group-hover:opacity-100"
          title="Disable feedback mode"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Mobile/Tablet Feedback Button - Horizontal at Bottom Right */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50 group">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-2 shadow-lg hover:shadow-xl transition-all rounded-lg border border-gray-200 cursor-pointer flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-spa-gold-600" />
          <span className="text-sm font-medium">Feedback</span>
        </button>
        {/* Disable button */}
        <button
          onClick={disableFeedback}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          title="Disable feedback mode"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Feedback form"
            onKeyDown={(e) => {
              if (e.key === 'Escape') handleClose()
            }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden relative outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {showSuccess ? (
              <div className="p-8 text-center">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-playfair">
                  Thank you!
                </h2>
                <p className="text-gray-600">
                  Your feedback has been submitted as a GitHub issue.
                </p>
              </div>
            ) : (
              <>
                <div className="p-6 overflow-y-auto max-h-[70vh]">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4 font-playfair">
                    Send Feedback
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Feedback Type
                      </label>
                      <div className="flex gap-2">
                        {(['general', 'bug', 'feature'] as const).map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setType(t)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                              type === t
                                ? 'bg-spa-gold-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What would you like to share?
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onPaste={handlePaste}
                        placeholder="Tell us what you noticed..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spa-gold-500 focus:border-spa-gold-500 resize-none"
                        rows={4}
                        required
                      />
                    </div>

                    {/* Screenshot Upload */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Screenshots (optional)
                      </label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                        id="screenshot-input"
                      />

                      {/* Show drop zone when under max, hide when at max */}
                      {screenshots.length < MAX_SCREENSHOTS ? (
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
                            isDragging
                              ? 'border-spa-gold-500 bg-spa-gold-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {screenshots.length === 0 ? (
                            /* No images - show standard upload prompt */
                            <label
                              htmlFor="screenshot-input"
                              className="cursor-pointer block text-center"
                            >
                              <Image className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                              <p className="text-sm text-gray-600">
                                Drag & drop, paste, or{' '}
                                <span className="text-spa-gold-600 hover:underline">
                                  click to upload
                                </span>
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                Max {MAX_SCREENSHOTS} images, 5MB each
                              </p>
                            </label>
                          ) : (
                            /* 1-2 images - show thumbnails inside drop zone with add button */
                            <div>
                              <div className="flex gap-2 flex-wrap">
                                {screenshots.map((screenshot, index) => (
                                  <div
                                    key={index}
                                    className="relative group w-20 h-20 rounded-lg overflow-hidden border border-gray-200"
                                  >
                                    <img
                                      src={screenshot.preview}
                                      alt={`Screenshot ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removeScreenshot(index)}
                                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                    >
                                      <Trash2 className="w-5 h-5 text-white" />
                                    </button>
                                  </div>
                                ))}
                                {/* Add button */}
                                <label
                                  htmlFor="screenshot-input"
                                  className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 hover:border-spa-gold-500 hover:bg-spa-gold-50 cursor-pointer flex items-center justify-center transition-colors"
                                >
                                  <Plus className="w-6 h-6 text-gray-400" />
                                </label>
                              </div>
                              <p className="text-xs text-gray-400 mt-2 text-center">
                                Or drag & drop more images
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Max images reached - show only thumbnails, no upload zone */
                        <div className="flex gap-2 flex-wrap">
                          {screenshots.map((screenshot, index) => (
                            <div
                              key={index}
                              className="relative group w-20 h-20 rounded-lg overflow-hidden border border-gray-200"
                            >
                              <img
                                src={screenshot.preview}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removeScreenshot(index)}
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                              >
                                <Trash2 className="w-5 h-5 text-white" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !description.trim()}
                      className="w-full py-3 px-4 bg-spa-gold-600 text-white font-medium rounded-lg hover:bg-spa-gold-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                  </form>
                </div>

                <div className="px-6 pb-4 text-center">
                  <p className="text-xs text-gray-400">
                    Page: {pathname}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// Helper function to convert File to base64
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
  })
}
