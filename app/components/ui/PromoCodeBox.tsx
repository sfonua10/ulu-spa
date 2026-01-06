'use client'

import { useState } from 'react'
import { CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { cn } from '@/app/lib/utils'
import { trackEvent } from '@/app/lib/analytics'

interface PromoCodeBoxProps {
  code: string
  className?: string
}

export function PromoCodeBox({ code, className }: PromoCodeBoxProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      trackEvent('intro_offer_code_copy', { code })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={cn('relative', className)}>
      {/* Gold border glow */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-spa-gold-400 via-spa-gold-500 to-spa-gold-400 rounded-2xl opacity-80" />

      {/* Main container */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Code display */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-medium">Your Promo Code</p>
          <p className="text-3xl sm:text-4xl font-display font-bold text-spa-sage-800 tracking-widest">
            {code}
          </p>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300',
            copied
              ? 'bg-green-500 text-white'
              : 'bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-600 hover:to-spa-gold-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          )}
        >
          {copied ? (
            <>
              <CheckIcon className="h-5 w-5" />
              Copied!
            </>
          ) : (
            <>
              <ClipboardDocumentIcon className="h-5 w-5" />
              Copy Code
            </>
          )}
        </button>
      </div>
    </div>
  )
}
