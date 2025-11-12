'use client'

import { Button } from '../ui/Button'
import { useInView } from '@/app/hooks/useInView'
import { CalendarDaysIcon, GiftIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  const { ref: leftRef, isInView: leftInView } = useInView({ threshold: 0.2 })
  const { ref: rightRef, isInView: rightInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50 text-stone-600 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-amber-300/20 rounded-full blur-3xl rotate-slow" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-300/25 to-amber-300/15 rounded-full blur-3xl rotate-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-amber-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`space-y-8 ${leftInView ? 'animate-in animate-slide-right animate-slow' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/25 to-amber-300/20 border border-amber-300/30 text-amber-200 text-sm font-medium backdrop-blur-sm shadow-lg">
              ✨ Ready to Begin Your Journey? ✨
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              <span className="text-emerald-800 drop-shadow-sm">
                Your Sanctuary
              </span>
              <br />
              <span className="text-amber-700 drop-shadow-sm font-extrabold">
                Awaits You
              </span>
            </h2>
            
            <p className="text-xl text-stone-600 leading-relaxed font-light tracking-wide">
              Take the first step toward transformation. Book your personalized scalp massage 
              experience today and discover why thousands trust us with their wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ghost" size="lg" className="text-emerald-700 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 px-8 hover-scale shadow-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
                <CalendarDaysIcon className="h-5 w-5 mr-2" />
                Book Your Experience
              </Button>
              <Button variant="ghost" size="lg" className="text-emerald-700 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 px-8 hover-scale shadow-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (801) 528-7368
              </Button>
            </div>
          </div>

          {/* Right Content - Quick Actions */}
          <div
            ref={rightRef}
            className={`space-y-6 ${rightInView ? 'animate-in animate-slide-left animate-slow animate-delay-200' : 'opacity-0'}`}
          >
            {/* Gift Cards */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-emerald-200 hover:border-amber-400 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-700 to-amber-800 rounded-xl flex items-center justify-center">
                  <GiftIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">Gift Cards Available</h3>
                  <p className="text-stone-600 mb-4">Share the gift of tranquility with loved ones.</p>
                  <Button variant="ghost" size="sm" className="text-amber-700 border-amber-600 hover:bg-amber-600 hover:text-white">
                    Purchase Gift Card
                  </Button>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                  %
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">Membership Benefits</h3>
                  <p className="text-stone-600 mb-4">Save up to 25% with our wellness memberships.</p>
                  <Button variant="ghost" size="sm" className="text-emerald-700 border-emerald-600 hover:bg-emerald-600 hover:text-white">
                    View Memberships
                  </Button>
                </div>
              </div>
            </div>

            {/* First Time Offer */}
            <div className="bg-gradient-to-r from-amber-400/25 to-amber-300/25 backdrop-blur-md rounded-2xl p-6 border border-amber-300/40 hover:border-amber-300/70 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400 text-emerald-900 text-sm font-medium mb-3">
                  🎉 First Visit Special
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">20% Off Your First Session</h3>
                <p className="text-stone-600 text-sm mb-4">New clients receive 20% off any signature service</p>
                <Button variant="luxury" size="sm" className="px-6">
                  Claim Offer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom separator for better distinction from footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/60 via-emerald-300/40 to-amber-400/60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
    </section>
  )
}