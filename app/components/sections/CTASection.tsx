'use client'

import Link from 'next/link'
import { useInView } from '@/app/hooks/useInView'
import { GiftIcon } from '@heroicons/react/24/outline'
import { COMPANY } from '@/app/constants/config'
import { trackGiftCardClick } from '@/app/lib/analytics'
import { BookingLink } from '../ui/BookingButton'
import { PhoneLink } from '../ui/PhoneLink'

export default function CTASection() {
  const { ref: leftRef, isInView: leftInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: rightRef, isInView: rightInView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-warm-100 via-luxury-warm-50 to-spa-cream-50 text-spa-stone-600 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-custom-gold/20 to-luxury-warm-300/15 rounded-full blur-3xl rotate-slow" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-luxury-warm-400/20 to-custom-gold/10 rounded-full blur-3xl rotate-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-luxury-warm-300/8 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`space-y-8 ${leftInView ? 'animate-in animate-slide-right animate-slow' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 text-luxury-warm-800 text-sm font-medium mb-6 backdrop-blur-sm shadow-lg border border-custom-gold/30">
              ✨ Ready to Begin Your Journey? ✨
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              <span className="text-spa-sage-800 drop-shadow-sm">
                Your Sanctuary
              </span>
              <br />
              <span className="text-spa-gold-700 drop-shadow-sm font-extrabold">
                Awaits You
              </span>
            </h2>
            
            <p className="text-xl text-spa-stone-600 leading-relaxed font-light tracking-wide">
              Take the first step toward transformation. Book your personalized scalp massage 
              experience today and discover why thousands trust us with their wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <BookingLink
                location="cta"
                external
                className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spa-gold-500 focus-visible:ring-offset-2 bg-gradient-to-br from-spa-gold-500 to-spa-gold-600 text-white hover:from-spa-gold-600 hover:to-spa-gold-700 hover:shadow-lg relative overflow-hidden h-14 px-10 text-base transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                Book Now
              </BookingLink>
              <PhoneLink
                location="home_cta"
                className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spa-gold-500 focus-visible:ring-offset-2 text-spa-stone-600 hover:bg-spa-stone-50 hover:text-spa-stone-700 border border-spa-stone-300 hover:border-spa-stone-400 h-14 px-10 text-base transform hover:-translate-y-0.5 shadow-md backdrop-blur-sm"
              >
                Call Us
              </PhoneLink>
            </div>
          </div>

          {/* Right Content - Quick Actions */}
          <div
            ref={rightRef}
            className={`space-y-8 ${rightInView ? 'animate-in animate-slide-left animate-slow animate-delay-200' : 'opacity-0'}`}
          >
            {/* Gift Cards */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-spa-sage-200 hover:border-spa-gold-400 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-spa-gold-700 to-spa-gold-800 rounded-xl flex items-center justify-center">
                  <GiftIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-spa-sage-800 mb-2">Gift Cards Available</h3>
                  <p className="text-stone-600 mb-4">Share the gift of tranquility with loved ones.</p>
                  <a
                    href="https://clients.mangomint.com/gift-cards/uluspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackGiftCardClick('home_cta')}
                    className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spa-gold-500 focus-visible:ring-offset-2 text-spa-gold-700 hover:bg-spa-gold-50 hover:text-spa-gold-700 border border-spa-gold-500/60 hover:bg-spa-gold-500 hover:text-white hover:border-spa-gold-500 h-9 px-4 text-sm"
                  >
                    Purchase Gift Card
                  </a>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-spa-sage-200 hover:border-spa-sage-400 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-spa-sage-500 to-spa-sage-600 rounded-xl flex items-center justify-center text-white font-bold">
                  %
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-spa-sage-800 mb-2">Membership Benefits</h3>
                  <p className="text-stone-600 mb-4">Enjoy exclusive benefits with our wellness memberships.</p>
                  <Link 
                    href="/memberships"
                    className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spa-gold-500 focus-visible:ring-offset-2 text-spa-sage-700 hover:bg-spa-sage-50 hover:text-spa-sage-700 border border-spa-sage-500/60 hover:bg-spa-sage-500 hover:text-white hover:border-spa-sage-500 h-9 px-4 text-sm"
                  >
                    View Memberships
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom separator for better distinction from footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-spa-gold-400/60 via-spa-sage-300/40 to-spa-gold-400/60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spa-sage-400/30 to-transparent"></div>
    </section>
  )
}