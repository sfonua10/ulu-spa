'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { type Testimonial } from '@/app/data/testimonials'
import PaginationDots from './PaginationDots'
import TestimonialCard from './TestimonialCard'

interface MobileTestimonialsCarouselProps {
  testimonials: Testimonial[]
  className?: string
}

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
            <TestimonialCard testimonial={testimonial} variant="mobile" />
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
