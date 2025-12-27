'use client'

import {
  CalendarDaysIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { COMPANY, URLS } from '@/app/constants/config'

interface BookingWidgetProps {
  serviceName?: string
  className?: string
}

export default function BookingWidget({
  serviceName = 'Signature Scalp Massage',
  className = ''
}: BookingWidgetProps) {
  const bookingUrl = process.env.NEXT_PUBLIC_MANGOMINT_BOOKING_URL || URLS.BOOKING

  return (
    <div
      className={`bg-white rounded-3xl shadow-soft border border-spa-sage-100 p-8 max-w-md mx-auto animate-in animate-fade-in animate-slide-up ${className}`}
    >
      <div className="text-center space-y-6">
        {/* Header */}
        <div>
          <div className="flex justify-center mb-4">
            <SparklesIcon className="h-12 w-12 text-spa-sage-600" />
          </div>
          <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-2">
            Book Your Experience
          </h3>
          <p className="text-stone-600">
            Ready to transform your wellbeing? Book your {serviceName.toLowerCase()} appointment now.
          </p>
        </div>
        
        {/* Service Highlight */}
        <div className="bg-spa-sage-50 rounded-2xl p-6">
          <h4 className="font-semibold text-spa-sage-800 mb-2">{serviceName}</h4>
          <p className="text-stone-600 text-sm">
            Experience our signature head spa treatment designed to restore your nervous system and elevate your consciousness.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <CalendarDaysIcon className="h-5 w-5 text-spa-sage-600" />
            <span className="text-sm text-stone-700">Real-time availability</span>
          </div>
          <div className="flex items-center space-x-3">
            <CalendarDaysIcon className="h-5 w-5 text-spa-sage-600" />
            <span className="text-sm text-stone-700">Instant confirmation</span>
          </div>
          <div className="flex items-center space-x-3">
            <CalendarDaysIcon className="h-5 w-5 text-spa-sage-600" />
            <span className="text-sm text-stone-700">Easy rescheduling</span>
          </div>
        </div>

        {/* Booking Button */}
        <a
          href={bookingUrl}
          className="mangomint-booking-button w-full text-base py-4 bg-gradient-to-r from-spa-sage-600 to-spa-sage-700 hover:from-spa-sage-700 hover:to-spa-sage-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <CalendarDaysIcon className="h-5 w-5 mr-2" />
          Book Your Appointment
        </a>

        {/* Alternative Contact */}
        <div className="text-center">
          <p className="text-xs text-stone-500 mb-2">
            Prefer to speak with someone?
          </p>
          <a
            href={`tel:${COMPANY.PHONE_LINK}`}
            className="text-sm text-spa-sage-600 hover:text-spa-sage-700 transition-colors cursor-pointer"
          >
            Call us at {COMPANY.PHONE}
          </a>
        </div>
      </div>

      {/* MangoMint Integration Note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-stone-500">
          🥭 Powered by MangoMint
        </p>
      </div>
    </div>
  )
}