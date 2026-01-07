'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import type { Service } from '@/app/types/service'

interface LuxuryServiceCardProps {
  service: Service
  onBook?: () => void
  onViewDetails?: () => void
  className?: string
  priority?: boolean
  badgeType?: 'popular' | 'value' | 'signature' | 'booked'
}

export default function LuxuryServiceCard({
  service,
  onBook,
  onViewDetails,
  className = '',
  priority = false,
  badgeType
}: LuxuryServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={`group relative h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onViewDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onViewDetails?.()
        }
      }}
    >
      {/* Main Card */}
      <div className="relative h-full bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 cursor-pointer flex flex-col border border-white/40 hover:shadow-4xl hover:border-spa-gold-200/60">

        {/* Glass Morphism Background */}
        <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-xl" />

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-linear-to-br from-spa-gold-400/20 via-transparent to-spa-sage-400/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Hero Image */}
        {service.imageUrl && (
          <div className="relative h-64 overflow-hidden bg-linear-to-br from-spa-sage-100 to-spa-gold-50">
            <Image
              src={service.imageUrl}
              alt={`${service.name} treatment at ULU Spa`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ objectPosition: service.focusArea || 'center' }}
              onLoad={() => setImageLoaded(true)}
              priority={priority}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARUXFx0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AlTZjw3YDUZ9Kk8W0JcBuXOAOpJ4AxRRQFSlGzFZhH/9k="
            />

            {/* Shimmer overlay on hover */}
            <div className={`absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 ${
              isHovered ? 'transition-all duration-1000 translate-x-full' : 'transition-none -translate-x-full'
            }`} />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-r from-spa-sage-200 via-spa-gold-100 to-spa-sage-200 animate-pulse" />
            )}
          </div>
        )}

        {/* Corner Ribbon Badge */}
        {badgeType && (
          <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none z-20 rounded-3xl">
            <div className={`absolute top-6 right-[-32px] w-40 text-center py-2 text-xs font-bold text-white shadow-lg transform rotate-45 ${
              badgeType === 'popular' || badgeType === 'booked'
                ? 'bg-gradient-to-r from-spa-gold-500 to-spa-gold-600'
                : badgeType === 'value'
                ? 'bg-gradient-to-r from-spa-sage-600 to-spa-sage-700'
                : 'bg-gradient-to-r from-spa-gold-600 to-spa-gold-700'
            }`}>
              {badgeType === 'popular' ? 'MOST POPULAR' :
               badgeType === 'booked' ? 'MOST BOOKED' :
               badgeType === 'value' ? 'BEST VALUE' : 'SIGNATURE'}
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="relative z-10 flex-1 p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-spa-sage-900 mb-2 leading-tight group-hover:text-spa-gold-700 transition-colors duration-300">
            {service.name}
          </h3>

          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            {service.tagline || service.shortDesc}
          </p>

          {/* Highlights Preview */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="mb-4 space-y-1.5">
              {service.highlights.slice(0, 3).map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-spa-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-stone-600 leading-tight">{highlight}</span>
                </div>
              ))}
              {service.includes.length > 3 && (
                <p className="text-xs text-spa-gold-600 font-medium pl-6 pt-1 group-hover:text-spa-gold-700 transition-colors">
                  +{service.includes.length - 3} more included
                </p>
              )}
            </div>
          )}

          {/* Duration & Price */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-spa-sage-700 transition-colors duration-300 group-hover:text-spa-sage-800">
              {service.duration}
            </span>
            <span className="text-spa-gold-500 font-bold">•</span>
            <span className="text-base font-bold text-spa-gold-600 transition-colors duration-300 group-hover:text-spa-gold-700">
              ${service.price}
            </span>
          </div>
        </div>

        {/* Action Button - Sticky Footer */}
        <div className="relative z-20 bg-white/95 backdrop-blur-xl border-t border-spa-sage-200/30 p-4 sm:p-5">
          <Button
            variant="luxury"
            size="md"
            className="w-full bg-linear-to-r from-spa-gold-600 to-spa-gold-700 hover:from-spa-gold-700 hover:to-spa-gold-800 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 group/btn border border-spa-gold-700"
            onClick={(e) => {
              e.stopPropagation()
              onBook?.()
            }}
          >
            <span>Book Now</span>
            <ArrowRightIcon className="h-4 w-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Shimmer Effect */}
        <div className={`absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 ${
          isHovered ? 'transition-all duration-1000 translate-x-full' : 'transition-none -translate-x-full'
        }`} />
      </div>

      {/* 3D Shadow */}
      <div className={`absolute inset-0 bg-spa-sage-900/20 rounded-3xl transition-all duration-700 -z-10 ${
        isHovered ? 'transform translate-y-2 translate-x-2 blur-lg' : 'transform translate-y-1 translate-x-1 blur-md'
      }`} />
    </div>
  )
}