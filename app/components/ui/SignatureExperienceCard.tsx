'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline'

interface Service {
  id: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  shortDesc: string
  fullDesc: string
  duration: string
  price: number
  imageUrl?: string
  focusArea?: string
  benefits: string[]
  includes: string[]
  popular: boolean
  category: string
  // New fields for enhanced UX
  tagline?: string
  highlights?: string[]
  perfectFor?: string[]
}

interface SignatureExperienceCardProps {
  service: Service
  onBook?: () => void
  onViewDetails?: () => void
  className?: string
  priority?: boolean
}

export default function SignatureExperienceCard({
  service,
  onBook,
  onViewDetails,
  className = '',
  priority = false
}: SignatureExperienceCardProps) {
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
      {/* Gold Gradient Border */}
      <div className="absolute -inset-[2px] bg-gradient-to-br from-spa-gold-400 via-spa-gold-500 to-spa-gold-600 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Card */}
      <div className="relative h-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 cursor-pointer flex flex-col">

        {/* Premium Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-spa-gold-400/30 via-transparent to-spa-gold-400/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-50'
        }`} />

        {/* Top Badge Bar */}
        <div className="relative z-20 bg-gradient-to-r from-spa-gold-500 via-spa-gold-400 to-spa-gold-500 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarIcon className="h-4 w-4 text-spa-gold-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-spa-gold-900">
              Ultimate ULU Experience
            </span>
          </div>
          <span className="text-sm font-semibold text-spa-gold-900">
            {service.duration}
          </span>
        </div>


        {/* Hero Image */}
        {service.imageUrl && (
          <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-spa-gold-100 to-spa-cream-100">
            <Image
              src={service.imageUrl}
              alt={`${service.name} experience at ULU Spa`}
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
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-spa-gold-300/40 to-transparent -skew-x-12 ${
              isHovered ? 'transition-all duration-1000 translate-x-full' : 'transition-none -translate-x-full'
            }`} />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-spa-gold-200 via-spa-cream-100 to-spa-gold-200 animate-pulse" />
            )}
          </div>
        )}

        {/* Card Content */}
        <div className="relative z-10 flex-1 p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-spa-sage-900 mb-2 leading-tight group-hover:text-spa-gold-700 transition-colors duration-300">
            {service.name}
          </h3>

          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            {service.tagline || service.shortDesc}
          </p>

          {/* Includes Section */}
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-spa-gold-600 mb-2 block">
              Includes
            </span>
            <ul className="space-y-1.5">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-stone-700">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-spa-gold-400 to-spa-gold-500 flex items-center justify-center">
                    <CheckIcon className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-spa-gold-600">
              ${service.price}
            </span>
          </div>
        </div>

        {/* Action Button - Sticky Footer */}
        <div className="relative z-20 bg-gradient-to-r from-spa-gold-50 to-white border-t border-spa-gold-200/50 p-4 sm:p-5">
          <Button
            variant="luxury"
            size="md"
            className="w-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-600 hover:to-spa-gold-700 text-white font-bold shadow-lg hover:shadow-gold-lg transition-all duration-300 group/btn border border-spa-gold-600"
            onClick={(e) => {
              e.stopPropagation()
              onBook?.()
            }}
          >
            <span>Book This Experience</span>
            <ArrowRightIcon className="h-4 w-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Gold Shadow Effect */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-700 -z-10 ${
        isHovered
          ? 'shadow-[0_20px_50px_rgba(212,175,55,0.4)] transform translate-y-2'
          : 'shadow-[0_10px_30px_rgba(212,175,55,0.2)] transform translate-y-1'
      }`} />
    </div>
  )
}
