'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  XMarkIcon,
  ClockIcon,
  CheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { trackServiceView, trackBookNowClick } from '@/app/lib/analytics'
import { PhoneLink } from './PhoneLink'

interface Service {
  id: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  shortDesc: string
  fullDesc: string
  duration: string
  price: number
  priceRange?: string
  imageUrl?: string
  focusArea?: string
  modalFocusArea?: string
  benefits: string[]
  includes: string[]
  popular: boolean
  category: string
  // New fields for enhanced UX
  tagline?: string
  highlights?: string[]
  perfectFor?: string[]
}

interface ServiceDetailModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
  onBookNow: () => void
}

export default function ServiceDetailModal({
  service,
  isOpen,
  onClose,
  onBookNow
}: ServiceDetailModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showFullDetails, setShowFullDetails] = useState(false)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Track service view when modal opens
  useEffect(() => {
    if (isOpen && service) {
      trackServiceView(service.name)
    }
  }, [isOpen, service])


  if (!isOpen || !service) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-white rounded-3xl shadow-2xl modal-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6 text-spa-sage-700 group-hover:text-spa-sage-900" />
        </button>

        {/* Hero Image */}
        {service.imageUrl && (
          <div className="relative h-72 md:h-96 overflow-hidden rounded-t-3xl bg-gradient-to-br from-spa-sage-100 to-spa-gold-50">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ objectPosition: service.modalFocusArea || service.focusArea || 'center' }}
              onLoad={() => setImageLoaded(true)}
              priority={true}
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARUXFx0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AlTZjw3YDUZ9Kk8W0JcBuXOAOpJ4AxRRQFSlGzFZhH/9k="
            />

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-200 via-spa-gold-100 to-spa-sage-200 animate-pulse" />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Popular Badge */}
            {service.popular && (
              <div className="absolute top-6 left-6">
                <div className="bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-xl backdrop-blur-sm border-2 border-white/20">
                  ⭐ Most Popular
                </div>
              </div>
            )}

            {/* Service Name Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-2xl mb-2">
                {service.name}
              </h2>
              <p className="text-white/90 text-lg drop-shadow-lg">
                {service.shortDesc}
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Price and Duration */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-spa-sage-100">
            <div className="flex items-center space-x-3 text-spa-sage-700">
              <ClockIcon className="h-7 w-7" />
              <span className="text-xl font-semibold">{service.duration}</span>
            </div>

            <div className="text-right">
              <div className="text-5xl font-bold bg-gradient-to-br from-spa-gold-600 to-spa-gold-700 bg-clip-text text-transparent leading-none price-count-up">
                ${service.price}
              </div>
              {service.priceRange && (
                <div className="text-sm text-stone-500 mt-2 font-medium">
                  Range: {service.priceRange}
                </div>
              )}
            </div>
          </div>

          {/* Full Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-4">
              About This Service
            </h3>
            <p className="text-stone-700 leading-relaxed text-lg">
              {service.fullDesc}
            </p>
          </div>

          {/* Perfect For Section */}
          {service.perfectFor && service.perfectFor.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-display font-bold text-spa-sage-900 mb-4 uppercase tracking-wide">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.perfectFor.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 rounded-full border border-spa-sage-200 text-spa-sage-700 text-sm font-medium hover:border-spa-gold-300 hover:bg-spa-gold-50/50 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-4 flex items-center">
              <SparklesIcon className="h-6 w-6 mr-2 text-spa-gold-600" />
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {service.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="px-4 py-3 bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 rounded-xl border-2 border-spa-sage-200 hover:border-spa-gold-300 transition-all duration-300 hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-semibold text-spa-sage-800 text-center">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Your Journey - Simplified 3-Step View */}
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-4">
              Your Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-spa-gold-100 flex items-center justify-center text-spa-gold-600 font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-spa-sage-800">Arrive & Unwind</h4>
                  <p className="text-sm text-stone-600">Warm welcome, aromatherapy, settle into relaxation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-spa-gold-100 flex items-center justify-center text-spa-gold-600 font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-spa-sage-800">Deep Restoration</h4>
                  <p className="text-sm text-stone-600">Scalp therapy, massage, and nourishing treatments</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-spa-gold-100 flex items-center justify-center text-spa-gold-600 font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-spa-sage-800">Leave Renewed</h4>
                  <p className="text-sm text-stone-600">Light styling, farewell beverage, refreshed glow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Snippet */}
          <div className="mb-8 bg-spa-sage-50 rounded-xl p-4 border border-spa-sage-100">
            <p className="text-sm text-stone-700 italic mb-2">
              &ldquo;This was the most relaxing experience I&apos;ve ever had. I left feeling like a completely new person.&rdquo;
            </p>
            <p className="text-xs text-stone-500">— Verified Client</p>
          </div>

          {/* Collapsible What's Included */}
          <div className="mb-10">
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="flex items-center justify-between w-full text-left py-3 border-b border-spa-sage-200 hover:border-spa-gold-300 transition-colors"
            >
              <span className="text-lg font-semibold text-spa-sage-800">
                See Full Treatment Details
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-spa-sage-600 transition-transform duration-300 ${showFullDetails ? 'rotate-180' : ''}`}
              />
            </button>

            {showFullDetails && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 animate-in slide-in-from-top-2 duration-200">
                {service.includes.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start space-x-2"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <CheckIcon className="h-5 w-5 text-spa-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t-2 border-spa-sage-100">
            <p className="text-sm text-stone-500 text-center mb-4">
              Have a gift card?{' '}
              <PhoneLink
                location="service_modal"
                className="text-spa-gold-600 hover:text-spa-gold-700 underline font-medium"
              >
                Call (801) 528-7368
              </PhoneLink>{' '}
              to book.
            </p>
            <button
              className="w-full inline-flex items-center justify-center py-4 px-8 rounded-full text-lg font-bold bg-gradient-to-r from-spa-gold-600 to-spa-gold-700 hover:from-spa-gold-700 hover:to-spa-gold-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-spa-gold-800 group cursor-pointer"
              onClick={() => {
                trackBookNowClick('service_modal')
                onBookNow()
                onClose()
              }}
            >
              Book Now
              <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
