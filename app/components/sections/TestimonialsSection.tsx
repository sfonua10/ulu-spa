'use client'

import React from 'react'
import { testimonials } from '@/app/data/testimonials'
import MobileTestimonialsCarousel from '@/app/components/ui/MobileTestimonialsCarousel'
import TestimonialCard from '@/app/components/ui/TestimonialCard'

// Create balanced arrays for the two rows with more variety (Desktop)
// Using a larger selection to avoid visible repetition
const firstRowTestimonials = testimonials.slice(0, 12) // First 12 testimonials
const secondRowTestimonials = testimonials.slice(10, 22) // Different 12 testimonials with slight overlap

// Select best testimonials for mobile (longer, more descriptive reviews)
const mobileTestimonials = testimonials
  .filter(t => t.content.length > 80)
  .slice(0, 6)

export default function TestimonialsSection() {
  // Simple component with CSS-driven seamless infinite scroll
  // 2x duplication + -50% transform = no visible resets

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-warm-50 via-white to-luxury-warm-100 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16 px-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 text-luxury-warm-800 text-sm font-medium mb-6 backdrop-blur-sm shadow-lg border border-custom-gold/30">
          ⭐ Client Testimonials ⭐
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6 tracking-tight leading-[1.1]">
          What Our Clients
          <br />
          <span className="bg-gradient-to-r from-custom-gold to-custom-gold/80 bg-clip-text text-transparent">
            Are Saying
          </span>
        </h2>
        <p className="text-xl text-stone-600 leading-[1.7] font-light tracking-wide">
          Real experiences from real people who have discovered their sanctuary at Ulu Spa.
        </p>
      </div>

      {/* Mobile-first Stats - ABOVE testimonials on mobile */}
      <div className="md:hidden max-w-6xl mx-auto px-6 mb-8">
        <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-4 shadow-soft border border-white/30">
          <div className="flex justify-around text-center">
            <div>
              <div className="text-2xl font-bold text-spa-sage-800">5.0★</div>
              <div className="text-xs text-stone-500">Google</div>
            </div>
            <div className="w-px bg-spa-sage-200" />
            <div>
              <div className="text-2xl font-bold text-spa-sage-800">85+</div>
              <div className="text-xs text-stone-500">Reviews</div>
            </div>
            <div className="w-px bg-spa-sage-200" />
            <div>
              <div className="text-2xl font-bold text-custom-gold">94%</div>
              <div className="text-xs text-stone-500">Return</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel - Single Row, Swipe Only */}
      <div className="md:hidden py-8">
        <MobileTestimonialsCarousel testimonials={mobileTestimonials} />
      </div>

      {/* Desktop Infinite Scrolling Testimonials */}
      <div className="hidden md:block relative py-12">
        {/* First Row - Scrolling Left */}
        <div className="testimonials-row mb-4">
          <div className="flex testimonials-scroll-left py-4">
            {Array(2).fill(null).map((_, setIndex) =>
              firstRowTestimonials.map((testimonial, index) => (
                <div key={`first-${setIndex}-${index}`} className="my-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))
            ).flat()}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="testimonials-row">
          <div className="flex testimonials-scroll-right py-4">
            {Array(2).fill(null).map((_, setIndex) =>
              secondRowTestimonials.map((testimonial, index) => (
                <div key={`second-${setIndex}-${index}`} className="my-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))
            ).flat()}
          </div>
        </div>

        {/* Enhanced Gradient Overlays for Seamless Effect */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-luxury-warm-50 via-luxury-warm-50/60 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-luxury-warm-100 via-luxury-warm-100/60 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Stats Section - Desktop only (mobile shows above testimonials) */}
      <div className="hidden md:block max-w-6xl mx-auto px-6">
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-soft border border-white/30 luxury-shadow-transition">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2 tracking-tight drop-shadow-sm">5.0★</div>
              <div className="text-stone-600 text-sm font-medium tracking-wide">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2 tracking-tight drop-shadow-sm">85+</div>
              <div className="text-stone-600 text-sm font-medium tracking-wide">Google Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2 tracking-tight drop-shadow-sm">94%</div>
              <div className="text-stone-600 text-sm font-medium tracking-wide">Return Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-custom-gold mb-2 tracking-tight drop-shadow-sm">100%</div>
              <div className="text-stone-600 text-sm font-medium tracking-wide">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}