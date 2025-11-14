'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './Button'
import {
  ClockIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

interface Service {
  id: number
  icon: React.ComponentType<any>
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
  onBookNow?: () => void
  onLearnMore?: () => void
  className?: string
  priority?: boolean
}

export default function LuxuryServiceCard({
  service,
  onBookNow,
  onLearnMore,
  className = '',
  priority = false
}: LuxuryServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={`group relative h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowDetails(false)
      }}
      onClick={onLearnMore}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onLearnMore?.()
        }
      }}
    >
      {/* Main Card */}
      <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-4xl hover:border-spa-gold-200/40 perspective-1000 cursor-pointer">
        
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-xl" />

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-spa-gold-400/20 via-transparent to-spa-sage-400/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Hero Image */}
        {service.imageUrl && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-spa-sage-100 to-spa-gold-50">
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
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-1000 ${
              isHovered ? 'translate-x-full' : '-translate-x-full'
            }`} />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-200 via-spa-gold-100 to-spa-sage-200 animate-pulse" />
            )}
          </div>
        )}

        {/* Popular Badge */}
        {service.popular && (
          <div className={`absolute z-20 ${service.imageUrl ? 'top-4 right-4' : 'top-6 right-6'}`}>
            <div className="bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg most-popular-badge">
              ⭐ Most Popular
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className={`relative z-10 p-6 h-full flex flex-col transition-transform duration-700 ${
          isHovered ? 'transform translate-z-4 rotate-x-2' : ''
        }`}>

          {/* Title & Description */}
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-2 leading-tight group-hover:text-spa-gold-700 transition-colors duration-300">
              {service.name}
            </h3>

            <p className={`text-sm text-stone-600 leading-relaxed mb-5 transition-all duration-300 ${
              showDetails ? 'text-stone-700' : ''
            }`}>
              {showDetails ? service.fullDesc : service.shortDesc}
            </p>

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

            {/* Includes (always visible) */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-spa-sage-700 mb-2">Includes:</h4>
              <ul className="space-y-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center text-xs text-stone-600">
                    <CheckIcon className="h-3 w-3 text-spa-sage-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Duration & Price */}
          <div className={`flex items-center justify-between mb-6 transition-all duration-500 ${
            isHovered ? 'transform scale-105' : ''
          }`}>
            <div className="flex items-center space-x-2 text-stone-600">
              <ClockIcon className="h-5 w-5 text-spa-sage-600" />
              <span className="font-semibold text-sm">{service.duration}</span>
            </div>

            <div className="text-right">
              <div className={`text-4xl font-bold bg-gradient-to-br from-spa-gold-600 to-spa-gold-700 bg-clip-text text-transparent leading-none transition-all duration-500 ${
                isHovered ? 'scale-110' : ''
              }`}>
                ${service.price}
              </div>
              {service.priceRange && (
                <div className="text-xs text-stone-500 mt-1.5 font-medium">
                  Range: {service.priceRange}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 transition-all duration-300">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/80 backdrop-blur-sm border-2 border-spa-sage-300 text-spa-sage-800 hover:bg-spa-sage-50 hover:border-spa-sage-400 hover:text-spa-sage-900 transition-all duration-300 font-semibold"
              onClick={(e) => {
                e.stopPropagation()
                setShowDetails(!showDetails)
                onLearnMore?.()
              }}
            >
              View Details
            </Button>

            <Button
              variant="luxury"
              size="sm"
              className={`bg-gradient-to-r from-spa-gold-600 to-spa-gold-700 hover:from-spa-gold-700 hover:to-spa-gold-800 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 group/btn border-2 border-spa-gold-800 ${
                isHovered ? 'scale-105' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation()
                onBookNow?.()
              }}
            >
              <span>Book Now</span>
              <ArrowRightIcon className="h-4 w-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      </div>

      {/* 3D Shadow */}
      <div className={`absolute inset-0 bg-spa-sage-900/20 rounded-3xl transition-all duration-700 -z-10 ${
        isHovered ? 'transform translate-y-2 translate-x-2 scale-105 blur-xl' : 'transform translate-y-1 translate-x-1 blur-md'
      }`} />
    </div>
  )
}