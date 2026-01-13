'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CategoryCardProps {
  name: string
  tagline: string
  serviceCount: number
  imageUrl: string
  onClick: () => void
}

export default function CategoryCard({
  name,
  tagline,
  serviceCount,
  imageUrl,
  onClick
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <button
      className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-spa-gold-500 focus:ring-offset-2"
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

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-90'
      }`} />

      {/* Service Count Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
          {serviceCount} services
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

        {/* Explore indicator */}
        <div className={`flex items-center gap-2 mt-3 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        }`}>
          <span className="text-sm font-medium text-spa-gold-400">Explore</span>
          <svg className="w-4 h-4 text-spa-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
        isHovered ? 'border-spa-gold-400/60' : 'border-transparent'
      }`} />
    </button>
  )
}
