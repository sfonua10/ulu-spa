'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'
import { 
  CalendarIcon, 
  PhoneIcon, 
  XMarkIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline'

interface FloatingBookingButtonProps {
  className?: string
}

export default function FloatingBookingButton({ className = '' }: FloatingBookingButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
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

  const bookingUrl = process.env.NEXT_PUBLIC_MANGOMINT_BOOKING_URL || 'https://booking.mangomint.com/904811'

  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 mb-4 space-y-3 animate-in slide-up">
          {/* Book Appointment */}
          <a
            href={bookingUrl}
            className="mangomint-booking-button bg-white/95 backdrop-blur-xl text-spa-sage-800 border border-white/20 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 px-6 py-3 rounded-full group flex items-center cursor-pointer"
            onClick={() => setIsExpanded(false)}
          >
            <CalendarIcon className="h-6 w-6 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform stroke-2" />
            Book Appointment
          </a>

          {/* Call Now */}
          <Button
            variant="outline"
            className="bg-white/95 backdrop-blur-xl border-spa-sage-200 text-spa-sage-800 shadow-xl hover:bg-spa-sage-50 hover:shadow-2xl transition-all duration-300 px-6 py-3 rounded-full group"
            onClick={() => {
              window.open('tel:(801)528-7368', '_self')
            }}
          >
            <PhoneIcon className="h-6 w-6 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform stroke-2" />
            Call (801) 528-7368
          </Button>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative">
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-spa-gold-400 to-spa-sage-500 rounded-full animate-ping opacity-20" />
        
        {/* Main button */}
        <Button
          variant="luxury"
          size="lg"
          className={`
            relative bg-gradient-to-r from-spa-sage-600 to-spa-sage-700 text-white shadow-2xl 
            hover:from-spa-sage-700 hover:to-spa-sage-800 hover:shadow-4xl
            transition-all duration-500 rounded-full p-4
            ${isExpanded ? 'rotate-45' : 'hover:rotate-6 hover:scale-110'}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <XMarkIcon className="h-6 w-6 stroke-2" />
          ) : (
            <>
              <SparklesIcon className="h-6 w-6 mr-2 stroke-2" />
              <span className="font-semibold">Book Now</span>
            </>
          )}
        </Button>

        {/* Floating sparkles */}
        {!isExpanded && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-spa-gold-300 rounded-full animate-ping`}
                style={{
                  left: `${50 + Math.cos(i * 90 * Math.PI / 180) * 25}%`,
                  top: `${50 + Math.sin(i * 90 * Math.PI / 180) * 25}%`,
                  animationDelay: `${i * 500}ms`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        )}

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-spa-sage-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
              Quick booking & contact
              <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-spa-sage-800" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}