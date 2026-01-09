'use client'

import { useState, useEffect } from 'react'
import { CalendarIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { BookingButton } from './BookingButton'
import { COMPANY } from '@/app/constants/config'

interface FloatingBookingButtonProps {
  className?: string
}

export default function FloatingBookingButton({ className = '' }: FloatingBookingButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-24 right-8 z-50 flex flex-col items-end gap-3 ${className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Phone Button - appears above booking button on hover */}
      <a
        href={`tel:${COMPANY.PHONE_LINK}`}
        className={`inline-flex items-center justify-center bg-white text-spa-sage-700 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full font-semibold border border-spa-sage-200 hover:border-spa-gold-300 hover:text-spa-gold-600 group ${
          isExpanded
            ? 'opacity-100 translate-y-0 px-5 py-3'
            : 'opacity-0 translate-y-4 px-3 py-3 pointer-events-none'
        }`}
        aria-label="Call to book"
        aria-hidden={!isExpanded}
        tabIndex={isExpanded ? 0 : -1}
      >
        <PhoneIcon className="h-5 w-5 group-hover:animate-pulse" />
        <span className={`ml-2 text-sm whitespace-nowrap transition-all duration-300 ${
          isExpanded ? 'opacity-100 max-w-32' : 'opacity-0 max-w-0 overflow-hidden'
        }`}>
          {COMPANY.PHONE}
        </span>
      </a>

      {/* Main Booking Button */}
      <div className="group/book relative">
        <BookingButton
          location="floating"
          variant="default"
          size="lg"
          className="inline-flex items-center justify-center bg-gradient-to-r from-spa-sage-600 to-spa-sage-700 text-white shadow-2xl hover:from-spa-sage-700 hover:to-spa-sage-800 hover:shadow-3xl transition-all duration-300 rounded-full px-6 py-4 font-semibold cursor-pointer"
        >
          <CalendarIcon className="h-6 w-6 mr-2 stroke-2" />
          Book Now
        </BookingButton>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover/book:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-spa-sage-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            Reserve Your Escape
            <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-spa-sage-800" />
          </div>
        </div>
      </div>
    </div>
  )
}
