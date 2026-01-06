'use client'

import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { cn } from '@/app/lib/utils'
import type { Testimonial } from '@/app/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'desktop' | 'mobile'
  className?: string
}

export default function TestimonialCard({
  testimonial,
  variant = 'desktop',
  className
}: TestimonialCardProps) {
  const isDesktop = variant === 'desktop'

  return (
    <div className={cn(
      isDesktop ? 'testimonial-card testimonial-luxury-hover flex-shrink-0 w-64 md:w-96 mx-4' : 'mobile-testimonial-card mx-2',
      className
    )}>
      <a
        href={testimonial.googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'block h-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-spa-sage-400 focus:ring-opacity-50 rounded-2xl',
          isDesktop && 'transition-shadow duration-300'
        )}
        aria-label={`Read ${testimonial.name}'s review on Google`}
      >
        <div className={cn(
          'bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 h-full relative overflow-hidden',
          isDesktop ? 'card-inner luxury-shadow-transition p-4 md:p-6 min-h-[280px] md:min-h-0' : 'card-inner p-5'
        )}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarColor} rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md overflow-hidden`}>
                {testimonial.avatarImage ? (
                  <Image
                    src={testimonial.avatarImage}
                    alt={`Profile photo of ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                ) : (
                  testimonial.initials
                )}
              </div>
              <div>
                <div className={cn(
                  'font-medium text-spa-sage-800 text-base tracking-wide',
                  isDesktop && 'group-hover:text-spa-sage-900 transition-colors duration-500 drop-shadow-sm golden-accent-line'
                )}>
                  {testimonial.name}
                </div>
                <div className={cn(
                  'text-stone-500 text-xs font-light tracking-wider',
                  isDesktop && 'space-y-0.5'
                )}>
                  {isDesktop && testimonial.reviewCount && (
                    <div>{testimonial.reviewCount} reviews</div>
                  )}
                  <div>{testimonial.timeAgo}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-xs text-stone-500 font-medium bg-spa-sage-50 px-3 py-1 rounded-full tracking-wide">
                Google
              </div>
              {isDesktop && (
                <svg className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center space-x-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  'h-4 w-4 text-yellow-400 drop-shadow-sm',
                  isDesktop && 'star-breathing'
                )}
                style={isDesktop ? { '--star-index': i } as React.CSSProperties : undefined}
              />
            ))}
          </div>

          {/* Content */}
          <p className={cn(
            'text-stone-700 font-light tracking-wide',
            isDesktop ? 'leading-[1.65] text-base md:text-sm line-clamp-4' : 'leading-[1.7] text-base line-clamp-5'
          )}>
            {testimonial.content}
          </p>

          {/* Hover Effect Overlay - Desktop only */}
          {isDesktop && (
            <div className="absolute inset-0 bg-gradient-to-t from-spa-gold-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          )}
        </div>
      </a>
    </div>
  )
}
