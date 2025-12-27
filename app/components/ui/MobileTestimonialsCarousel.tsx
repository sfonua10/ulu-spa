'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { type Testimonial } from '@/app/data/testimonials'
import PaginationDots from './PaginationDots'

interface MobileTestimonialsCarouselProps {
  testimonials: Testimonial[]
  className?: string
}

// Mobile-optimized testimonial card
const MobileTestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mobile-testimonial-card mx-2">
    <a
      href={testimonial.googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-spa-sage-400 focus:ring-opacity-50 rounded-2xl"
      aria-label={`Read ${testimonial.name}'s review on Google`}
    >
      <div className="card-inner bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/20 h-full relative overflow-hidden">
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
              <div className="font-medium text-spa-sage-800 text-base tracking-wide">
                {testimonial.name}
              </div>
              <div className="text-stone-500 text-xs font-light tracking-wider">
                {testimonial.timeAgo}
              </div>
            </div>
          </div>
          <div className="text-xs text-stone-500 font-medium bg-spa-sage-50 px-3 py-1 rounded-full tracking-wide">
            Google
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon
              key={i}
              className="h-4 w-4 text-yellow-400 drop-shadow-sm"
            />
          ))}
        </div>

        {/* Content - more lines on mobile */}
        <p className="text-stone-700 leading-[1.7] text-base line-clamp-5 font-light tracking-wide">
          {testimonial.content}
        </p>
      </div>
    </a>
  </div>
)

export default function MobileTestimonialsCarousel({
  testimonials,
  className = ''
}: MobileTestimonialsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTouching, setIsTouching] = useState(false)

  // Track scroll position to update current index
  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isTouching) return

    const container = carouselRef.current
    const scrollLeft = container.scrollLeft
    const cardWidth = container.offsetWidth * 0.85 + 16 // 85vw + gap
    const newIndex = Math.round(scrollLeft / cardWidth)

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex)
    }
  }, [currentIndex, testimonials.length, isTouching])

  // Scroll to specific index when dot is clicked
  const scrollToIndex = useCallback((index: number) => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const cardWidth = container.offsetWidth * 0.85 + 16 // 85vw + gap
    const targetScroll = index * cardWidth

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
    setCurrentIndex(index)
  }, [])

  // Handle touch events
  const handleTouchStart = () => {
    setIsTouching(true)
    if (carouselRef.current) {
      carouselRef.current.classList.add('is-touching')
    }
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
    if (carouselRef.current) {
      carouselRef.current.classList.remove('is-touching')
    }
    // Update index after touch ends
    setTimeout(handleScroll, 100)
  }

  // Set up scroll listener
  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className={className}
      role="region"
      aria-label="Customer testimonials"
      aria-roledescription="carousel"
    >
      <div
        ref={carouselRef}
        className="mobile-testimonials-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
          >
            <MobileTestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      <PaginationDots
        total={testimonials.length}
        current={currentIndex}
        onDotClick={scrollToIndex}
      />
    </div>
  )
}
