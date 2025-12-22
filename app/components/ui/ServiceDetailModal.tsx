'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  XMarkIcon,
  ClockIcon,
  CheckIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

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

          {/* What's Included */}
          <div className="mb-10">
            <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-4">
              What&apos;s Included
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.includes.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start space-x-3 animate-in slide-right"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckIcon className="h-6 w-6 text-spa-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t-2 border-spa-sage-100">
            <button
              className="w-full inline-flex items-center justify-center py-4 px-8 rounded-full text-lg font-bold bg-gradient-to-r from-spa-gold-600 to-spa-gold-700 hover:from-spa-gold-700 hover:to-spa-gold-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-spa-gold-800 group cursor-pointer"
              onClick={() => {
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
