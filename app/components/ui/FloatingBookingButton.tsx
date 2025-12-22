'use client'

import { useState, useEffect } from 'react'
import { CalendarIcon } from '@heroicons/react/24/outline'

interface FloatingBookingButtonProps {
  className?: string
}

export default function FloatingBookingButton({ className = '' }: FloatingBookingButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-24 right-8 z-50 ${className}`}>
      <button
        type="button"
        className="mangomint-booking-button inline-flex items-center justify-center bg-gradient-to-r from-spa-sage-600 to-spa-sage-700 text-white shadow-2xl hover:from-spa-sage-700 hover:to-spa-sage-800 hover:shadow-3xl transition-all duration-300 rounded-full px-6 py-4 font-semibold cursor-pointer"
      >
        <CalendarIcon className="h-6 w-6 mr-2 stroke-2" />
        Book Now
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-spa-sage-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Book Now
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-spa-sage-800" />
        </div>
      </div>
    </div>
  )
}
