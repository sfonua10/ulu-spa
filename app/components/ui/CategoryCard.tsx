'use client'

import { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

interface CategoryCardProps {
  name: string
  tagline: string
  serviceCount: number
  imageUrl: string
  onClick: () => void
  isPremium?: boolean
  priceRange?: string
}

export default function CategoryCard({
  name,
  tagline,
  serviceCount,
  imageUrl,
  onClick,
  isPremium = false,
  priceRange
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <button
      className={`group relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-spa-gold-500 focus:ring-offset-2 ${
        isPremium ? 'ring-2 ring-spa-gold-400/50 shadow-xl shadow-spa-gold-500/20' : ''
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={`${name} spa services at ULU Spa`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover transition-all duration-700 ${
          isHovered ? 'scale-110 brightness-75' : 'scale-100 brightness-90'
        } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        quality={85}
      />

      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-200 via-spa-gold-100 to-spa-sage-200 animate-pulse" />
      )}

      {/* Gradient Overlay - enhanced for premium */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isPremium
          ? 'bg-gradient-to-t from-black/85 via-black/40 to-spa-gold-900/20'
          : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'
      } ${isHovered ? 'opacity-100' : 'opacity-90'}`} />

      {/* Premium Shimmer Overlay */}
      {isPremium && (
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-spa-gold-400/20 to-transparent -skew-x-12 transition-transform duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      )}

      {/* Premium Badge - Top Left */}
      {isPremium && (
        <div className="absolute top-4 left-4 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-xs font-bold shadow-lg">
            <StarIcon className="w-3.5 h-3.5" />
            MOST LOVED
          </div>
        </div>
      )}

      {/* Service Count Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md border ${
          isPremium
            ? 'bg-spa-gold-500/30 text-white border-spa-gold-400/50'
            : 'bg-white/20 text-white border-white/30'
        }`}>
          {serviceCount} {serviceCount === 1 ? 'experience' : 'experiences'}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className={`text-2xl md:text-3xl font-display font-bold text-white mb-2 transition-transform duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-1'
        }`}>
          {name}
        </h3>
        <p className={`text-sm md:text-base text-white/80 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'
        }`}>
          {tagline}
        </p>

        {/* Price Range (if provided) */}
        {priceRange && (
          <p className={`text-sm font-medium mt-2 transition-all duration-500 ${
            isPremium ? 'text-spa-gold-300' : 'text-white/70'
          } ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
            {priceRange}
          </p>
        )}

        {/* Explore indicator */}
        <div className={`flex items-center gap-2 mt-3 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        }`}>
          <span className="text-sm font-medium text-spa-gold-400">
            {isPremium ? 'Discover' : 'Explore'}
          </span>
          <svg className="w-4 h-4 text-spa-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Hover Border Effect - enhanced for premium */}
      <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
        isPremium
          ? isHovered ? 'border-spa-gold-400' : 'border-spa-gold-400/40'
          : isHovered ? 'border-spa-gold-400/60' : 'border-transparent'
      }`} />
    </button>
  )
}
