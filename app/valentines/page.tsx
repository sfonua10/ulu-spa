'use client'

import { useState, useEffect } from 'react'
import { HeartIcon, StarIcon, CalendarDaysIcon, PhoneIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import { useInView, useStaggeredInView } from '@/app/hooks/useInView'
import VideoBackground from '@/app/components/ui/VideoBackground'
import LuxuryServiceCard from '@/app/components/ui/LuxuryServiceCard'
import ServiceDetailModal from '@/app/components/ui/ServiceDetailModal'
import { services } from '@/app/data/services'
import { valentineEnhancements, valentineExtras, valentineRecommendedServiceIds, valentinePromo } from '@/app/data/valentines'
import { trackEvent } from '@/app/lib/analytics'
import { getMangoMintServiceUrl } from '@/app/utils/mangomint-urls'
import { URLS, COMPANY } from '@/app/constants/config'

// Get recommended services for Valentine's
const recommendedServices = services.filter(s => valentineRecommendedServiceIds.includes(s.id))

// Countdown timer hook
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate + 'T23:59:59')
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

export default function ValentinesPage() {
  const { ref: heroRef, isInView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: giftRef, isInView: giftInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const { ref: servicesRef, visibleItems: visibleServices } = useStaggeredInView<HTMLDivElement>(3, 150)
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const countdown = useCountdown(valentinePromo.endDate)

  const handleBookClick = () => {
    trackEvent('valentine_book_click', { location: 'valentines_page' })
  }

  const scrollToOffer = () => {
    document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoSrc="/videos/website-optimized.mp4"
        mobileVideoSrc="/videos/website-mobile.mp4"
        fallbackImage="/images/hero-poster.jpg"
        className="min-h-screen"
        overlayOpacity={0.45}
        videoAspectRatio={9/16}
      >
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        >
          {/* Floating particles with Valentine colors */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-20 left-[10%] w-3 h-3 bg-valentine-blush-300/40 rounded-full animate-float" />
            <div className="absolute top-40 right-[15%] w-2 h-2 bg-valentine-rose-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-[20%] w-4 h-4 bg-spa-gold-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-[25%] w-2 h-2 bg-valentine-blush-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-1/4 right-[10%] w-3 h-3 bg-valentine-rose-400/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            {/* Valentine Badge with Pulse Animation */}
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-valentine-blush-500/20 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-valentine-blush-300/40 transition-all duration-700 animate-pulse-subtle ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <HeartIcon className="h-4 w-4 text-valentine-rose-400" />
              <span className="uppercase tracking-wider">Ends Feb 14 — Limited Appointments</span>
              <HeartIcon className="h-4 w-4 text-valentine-rose-400" />
            </div>

            {/* Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-shimmer-white-once">{valentinePromo.headline}</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {valentinePromo.subheadline}
            </p>

            {/* Countdown Timer */}
            <div className={`flex justify-center gap-4 mb-8 transition-all duration-700 delay-250 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 min-w-[70px]">
                  <span className="text-3xl font-bold text-white">{countdown.days}</span>
                </div>
                <span className="text-xs text-white/60 mt-1 uppercase tracking-wider">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 min-w-[70px]">
                  <span className="text-3xl font-bold text-white">{countdown.hours}</span>
                </div>
                <span className="text-xs text-white/60 mt-1 uppercase tracking-wider">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 min-w-[70px]">
                  <span className="text-3xl font-bold text-white">{countdown.minutes}</span>
                </div>
                <span className="text-xs text-white/60 mt-1 uppercase tracking-wider">Min</span>
              </div>
            </div>

            {/* Trust Badge - Social Proof */}
            <div className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 mb-10 transition-all duration-700 delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-gold-300 font-bold">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5 text-gold-300" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">85+ Reviews</span>
              </div>
              <div className="hidden sm:block text-white/40">|</div>
              <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white/90 text-sm font-medium">Up to ${valentinePromo.maxValue} Value FREE</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Primary CTA - Book Now */}
              <a
                href={URLS.BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBookClick}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-valentine-blush-400 to-valentine-rose-400 hover:from-valentine-blush-500 hover:to-valentine-rose-500 text-white rounded-full font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-valentine-blush-300/50"
              >
                <CalendarDaysIcon className="h-6 w-6" />
                Book Now
              </a>

              {/* Secondary CTA - See Details */}
              <button
                onClick={scrollToOffer}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                <span>See the Details</span>
                <ArrowDownIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </VideoBackground>

      {/* The Gift Section - Enhancement Options (Consolidated) */}
      <section id="gift" ref={giftRef} className="py-24 bg-gradient-to-b from-valentine-blush-50 via-white to-spa-cream-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[15%] w-48 h-48 bg-valentine-blush-200/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-spa-gold-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-8 transition-all duration-700 ${giftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-valentine-blush-400 to-valentine-rose-400 text-white text-sm font-bold mb-6 shadow-lg border border-valentine-blush-300/50">
              <HeartIcon className="h-4 w-4" />
              <span className="uppercase tracking-wider">Your Valentine&apos;s Gift</span>
              <HeartIcon className="h-4 w-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-4">
              Choose Your Enhancement
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Select one complimentary experience to elevate your visit
            </p>
          </div>

          {/* Included With Every Visit Banner */}
          <div className={`mb-12 transition-all duration-700 delay-100 ${giftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-spa-gold-50 via-spa-gold-100/50 to-spa-gold-50 rounded-2xl p-6 border border-spa-gold-200/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2 text-spa-gold-700">
                  <SparklesIcon className="h-5 w-5" />
                  <span className="font-semibold">Included with Every Visit:</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {valentineExtras.map((extra) => (
                    <div key={extra.title} className="flex items-center gap-2 text-spa-sage-700">
                      <HeartIcon className="h-4 w-4 text-valentine-rose-400" />
                      <span className="text-sm font-medium">{extra.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-spa-gold-600 font-semibold mt-3 text-sm uppercase tracking-wide">
                Plus choose one enhancement below
              </p>
            </div>
          </div>

          {/* Enhancement Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {valentineEnhancements.map((category, index) => {
              const IconComponent = category.icon
              const isHovered = hoveredCard === category.id
              return (
                <div
                  key={category.id}
                  className={`transition-all duration-700 ${giftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative h-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer border-2 ${
                    isHovered
                      ? 'shadow-2xl scale-[1.02] border-valentine-rose-300'
                      : 'border-white/40 hover:shadow-xl'
                  }`}>
                    {/* FREE Value Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-valentine-rose-500 to-valentine-blush-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        ${category.value} VALUE — FREE
                      </div>
                    </div>

                    {/* Most Popular Badge */}
                    {category.mostPopular && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    <div className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-valentine-blush-400 to-valentine-rose-400 mb-6 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                        {category.tagline}
                      </p>
                      <div className="space-y-3">
                        {category.enhancements.map((enhancement) => (
                          <div key={enhancement} className="flex items-center justify-center gap-2">
                            <CheckCircleIcon className="h-5 w-5 text-valentine-rose-400" />
                            <span className="text-spa-sage-700 font-medium">{enhancement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Reveal - Choose This */}
                      <div className={`mt-6 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <div className="inline-flex items-center gap-2 text-valentine-rose-500 font-semibold">
                          <HeartIcon className="h-5 w-5" />
                          <span>Choose This</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Border */}
                    <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      boxShadow: 'inset 0 0 30px rgba(244, 114, 182, 0.2)'
                    }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recommended Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-spa-cream-50 via-white to-valentine-blush-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[15%] w-48 h-48 bg-valentine-blush-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-spa-gold-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold mb-6 shadow-gold border border-spa-gold-400">
              <HeartIcon className="h-4 w-4" />
              <span className="uppercase tracking-wider">Perfect for Valentine&apos;s</span>
              <HeartIcon className="h-4 w-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Romantic Escapes
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Our most beloved experiences for a romantic celebration — starting at $210
            </p>
          </div>

          {/* Services Grid */}
          <div ref={servicesRef} className="grid md:grid-cols-3 gap-8 mb-12">
            {recommendedServices.map((service, index) => (
              <div
                key={service.id}
                className={`transition-all duration-700 ${visibleServices.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <LuxuryServiceCard
                  service={service}
                  onBook={() => {
                    const url = getMangoMintServiceUrl(service.name)
                    trackEvent('valentine_book_click', { service: service.name, location: 'valentines_page' })
                    window.open(url, '_blank')
                  }}
                  onViewDetails={() => setSelectedService(service)}
                  className="h-full"
                  priority={index < 2}
                  badgeType={
                    service.id === 31 ? 'romantic' :   // ULU Paradise Retreat - MOST ROMANTIC
                    service.id === 30 ? 'couples' :    // Island Glow - COUPLES FAVORITE
                    service.id === 4 ? 'gift' :        // Royal Escape - PERFECT GIFT
                    undefined
                  }
                />
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-spa-sage-700 hover:text-valentine-rose-500 font-semibold text-lg transition-colors duration-300 group"
            >
              Explore all services
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={ctaRef}
        className="py-24 bg-gradient-to-br from-spa-sage-800 via-spa-sage-700 to-spa-sage-900 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-valentine-blush-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-spa-gold-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-valentine-rose-400/5 rounded-full blur-2xl" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-valentine-blush-400 to-valentine-rose-500 mb-6 shadow-xl">
              <HeartIcon className="h-10 w-10 text-white" />
            </div>

            {/* Dynamic Countdown Badge */}
            <div className="inline-block px-4 py-1 rounded-full bg-valentine-rose-500/20 text-valentine-blush-300 text-sm font-bold mb-4 border border-valentine-blush-400/30">
              {countdown.days > 0 ? `ONLY ${countdown.days} DAYS LEFT` : countdown.hours > 0 ? `ONLY ${countdown.hours} HOURS LEFT` : 'LAST CHANCE'}
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Make This Valentine&apos;s Unforgettable
            </h2>
            <p className="text-xl text-white/80 mb-4 max-w-xl mx-auto">
              Book your Valentine&apos;s Week escape and receive your complimentary enhancement.
            </p>
            <p className="text-valentine-blush-300 font-semibold mb-10">
              February 7-14 Only
            </p>

            {/* Book Now Button with Enhanced Copy */}
            <a
              href={URLS.BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookClick}
              className="inline-flex flex-col items-center gap-1 px-12 py-5 bg-gradient-to-r from-valentine-blush-400 to-valentine-rose-500 hover:from-valentine-blush-500 hover:to-valentine-rose-600 text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-valentine-blush-300/50"
            >
              <span className="flex items-center gap-3 text-xl">
                <CalendarDaysIcon className="h-6 w-6" />
                Book Your Valentine&apos;s Escape
              </span>
              <span className="text-sm text-white/90 font-normal">+ Free ${valentinePromo.maxValue} Enhancement</span>
            </a>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <GiftIcon className="h-5 w-5 text-valentine-blush-400" />
                <span>Complimentary enhancement included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-valentine-blush-400" />
                <span>No codes needed</span>
              </div>
            </div>

            {/* Concierge Booking */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-3">Prefer personalized assistance?</p>
              <a
                href={`tel:${COMPANY.PHONE_LINK}`}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-valentine-blush-300 hover:text-valentine-blush-200 font-semibold transition-all duration-300 rounded-full border border-white/20 hover:border-white/30"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Concierge Booking: {COMPANY.PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onBookNow={() => {
          if (selectedService) {
            const url = getMangoMintServiceUrl(selectedService.name)
            trackEvent('valentine_book_click', { service: selectedService.name, location: 'modal' })
            window.open(url, '_blank')
          }
        }}
      />
    </main>
  )
}
