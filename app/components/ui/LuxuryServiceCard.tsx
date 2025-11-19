'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './Button'
import {
  CheckIcon,
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
  benefits: string[]
  includes: string[]
  popular: boolean
  category: string
}

interface LuxuryServiceCardProps {
  service: Service
  onBook?: () => void
  onViewDetails?: () => void
  className?: string
  priority?: boolean
}

export default function LuxuryServiceCard({
  service,
  onBook,
  onViewDetails,
  className = '',
  priority = false
}: LuxuryServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showAllIncludes, setShowAllIncludes] = useState(false)

  return (
    <div
      className={`group relative h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowDetails(false)
      }}
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
      <div className={`relative h-full max-h-[85vh] sm:max-h-none bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 cursor-pointer flex flex-col ${
        service.popular
          ? 'ring-2 ring-spa-gold-500 border-2 border-spa-gold-400 hover:shadow-4xl hover:ring-spa-gold-600'
          : 'border border-white/20 hover:shadow-4xl hover:border-spa-gold-200/40'
      }`}>
        
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-xl" />

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-linear-to-br from-spa-gold-400/20 via-transparent to-spa-sage-400/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Hero Image */}
        {service.imageUrl && (
          <div className="relative h-48 overflow-hidden bg-linear-to-br from-spa-sage-100 to-spa-gold-50">
            {/* Image */}
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
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

        {/* Popular Badge - Corner Ribbon */}
        {service.popular && (
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden z-20">
            <div className="absolute top-6 right-[-32px] w-40 text-center bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-xs font-bold py-1.5 transform rotate-45 shadow-lg">
              MOST POPULAR
            </div>
          </div>
        )}

        {/* Card Content - Scrollable */}
        <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar">
          {/* Scroll fade gradient */}
          <div className="sticky top-0 h-4 bg-gradient-to-b from-white/95 to-transparent z-10 pointer-events-none" />

          {/* Inner Content Wrapper */}
          <div className="p-4 sm:p-6 pb-2">
            <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-2 leading-tight group-hover:text-spa-gold-700 transition-colors duration-300">
              {service.name}
            </h3>

            <p className={`text-sm text-stone-600 leading-relaxed mb-3 transition-all duration-300 ${
              showDetails ? 'text-stone-700' : ''
            }`}>
              {showDetails ? service.fullDesc : service.shortDesc}
            </p>

            {/* Duration & Price */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-base font-semibold text-spa-sage-700 transition-colors duration-300 group-hover:text-spa-sage-800">
                {service.duration}
              </span>
              <span className="text-spa-gold-500 font-bold">•</span>
              <span className="text-base font-bold text-spa-gold-600 transition-colors duration-300 group-hover:text-spa-gold-700">
                ${service.price}
              </span>
            </div>

            {/* Benefits Tags */}
            <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 ${
              isHovered ? 'transform translate-y-0' : 'transform translate-y-2'
            }`}>
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <span
                  key={benefit}
                  className={`px-3 py-1 text-xs font-medium bg-gradient-to-r from-spa-sage-200 to-spa-sage-300 text-spa-sage-800 rounded-full border border-spa-sage-400 shadow-sm transition-all duration-500 ${
                    isHovered ? `opacity-100 scale-102 brightness-105 animate-delay-${index * 100}` : 'opacity-90 scale-100'
                  }`}
                  style={{
                    transitionDelay: isHovered ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {benefit}
                </span>
              ))}
            </div>

            {/* Includes (collapsible on mobile) */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-spa-sage-700 mb-2">Includes:</h4>
              <ul className="space-y-1">
                {(showAllIncludes ? service.includes : service.includes.slice(0, 4)).map((item) => (
                  <li key={item} className="flex items-center text-xs text-stone-600">
                    <CheckIcon className="h-3 w-3 text-spa-sage-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {service.includes.length > 4 && !showAllIncludes && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowAllIncludes(true)
                  }}
                  className="mt-2 text-xs font-medium text-spa-gold-600 hover:text-spa-gold-700 transition-colors duration-200"
                >
                  + Show all {service.includes.length} items
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Action Button - Sticky Footer */}
        <div className="relative z-20 bg-white/95 backdrop-blur-xl border-t border-spa-sage-200/30 p-4 sm:p-6">
          <Button
            variant="luxury"
            size="md"
            className="w-full bg-gradient-to-r from-spa-gold-600 to-spa-gold-700 hover:from-spa-gold-700 hover:to-spa-gold-800 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 group/btn border-2 border-spa-gold-800"
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
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 ${
          isHovered ? 'transition-all duration-1000 translate-x-full' : 'transition-none -translate-x-full'
        }`} />
      </div>

      {/* 3D Shadow - Reduced blur for better text clarity */}
      <div className={`absolute inset-0 bg-spa-sage-900/20 rounded-3xl transition-all duration-700 -z-10 ${
        isHovered ? 'transform translate-y-2 translate-x-2 blur-lg' : 'transform translate-y-1 translate-x-1 blur-md'
      }`} />
    </div>
  )
}