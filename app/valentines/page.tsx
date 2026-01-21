'use client'

import { useState, useEffect } from 'react'
import { HeartIcon, CalendarDaysIcon, PhoneIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
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
          {/* Floating particles with holiday colors */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-20 left-[10%] w-3 h-3 bg-[var(--holiday-primary-300)]/40 rounded-full animate-float" />
            <div className="absolute top-40 right-[15%] w-2 h-2 bg-[var(--holiday-secondary-400)]/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-shimmer-holiday">{valentinePromo.headline}</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Book any service{' '}
              <span className="font-semibold text-white">Feb 7-14</span>
              {' '}and receive a complimentary enhancement —{' '}
              <span className="font-semibold text-white">up to ${valentinePromo.maxValue} value</span>
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

            {/* Value Badge */}
            <div className={`flex justify-center mb-10 transition-all duration-700 delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white/90 text-sm font-medium">Up to ${valentinePromo.maxValue} Value FREE</span>
              </div>
            </div>

            {/* CTA */}
            <div className={`transition-all duration-700 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={URLS.BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBookClick}
                className="inline-flex items-center gap-3 px-10 py-5 holiday-button-gradient hover:opacity-90 text-white rounded-full font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-[var(--holiday-primary-300)]/50"
              >
                <CalendarDaysIcon className="h-6 w-6" />
                Book Now
              </a>
            </div>
          </div>
        </section>
      </VideoBackground>

      {/* The Gift Section - Enhancement Options (Consolidated) */}
      <section id="gift" ref={giftRef} className="py-24 bg-gradient-to-b from-[var(--holiday-primary-50)] via-white to-[var(--holiday-primary-50)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[15%] w-48 h-48 bg-[var(--holiday-primary-200)]/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-[var(--holiday-secondary-200)]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-8 transition-all duration-700 ${giftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full holiday-badge-gradient text-white text-sm font-bold mb-6 shadow-lg border border-[var(--holiday-primary-300)]/50">
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
            <div className="bg-gradient-to-r from-[var(--holiday-primary-50)] via-[var(--holiday-primary-100)]/50 to-[var(--holiday-primary-50)] rounded-2xl p-6 border border-[var(--holiday-primary-200)]/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2" style={{ color: 'var(--holiday-primary-600)' }}>
                  <SparklesIcon className="h-5 w-5" />
                  <span className="font-semibold">Included with Every Visit:</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {valentineExtras.map((extra) => (
                    <div key={extra.title} className="flex items-center gap-2 text-spa-sage-700">
                      <HeartIcon className="h-4 w-4 holiday-text-accent" />
                      <span className="text-sm font-medium">{extra.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center font-semibold mt-3 text-sm uppercase tracking-wide" style={{ color: 'var(--holiday-primary-500)' }}>
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
                  onClick={() => {
                    trackEvent('valentine_enhancement_click', { enhancement: category.id, location: 'valentines_page' })
                    window.open(URLS.BOOKING, '_blank')
                  }}
                >
                  <div className={`relative h-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer border-2 ${
                    isHovered
                      ? 'shadow-2xl scale-[1.02] border-[var(--holiday-secondary-300)]'
                      : 'border-white/40 hover:shadow-xl'
                  }`}>
                    {/* FREE Value Ribbon Badge */}
                    <div className="absolute -top-1 -right-1 z-10">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-[var(--holiday-primary-500)] to-[var(--holiday-secondary-500)] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-lg shadow-lg">
                          ${category.value} VALUE FREE
                        </div>
                        {/* Ribbon fold effect */}
                        <div className="absolute -bottom-1.5 right-0 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-[var(--holiday-secondary-600)]" />
                      </div>
                    </div>

                    <div className="p-8 pt-10 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full holiday-button-gradient mb-6 shadow-lg">
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
                            <CheckCircleIcon className="h-5 w-5 holiday-text-accent" />
                            <span className="text-[var(--holiday-primary-600)] font-medium">{enhancement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Reveal - Choose This */}
                      <div className={`mt-6 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <div className="inline-flex items-center gap-2 font-semibold" style={{ color: 'var(--holiday-secondary-500)' }}>
                          <HeartIcon className="h-5 w-5" />
                          <span>Book Now</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Border */}
                    <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      boxShadow: `inset 0 0 30px var(--holiday-glow-color)`
                    }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recommended Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-[var(--holiday-primary-50)] via-white to-[var(--holiday-primary-50)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[15%] w-48 h-48 bg-[var(--holiday-primary-200)]/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-[var(--holiday-secondary-200)]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full holiday-badge-gradient text-white text-sm font-bold mb-6 shadow-lg border border-[var(--holiday-primary-400)]">
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
                  valentineMode={true}
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
              className="inline-flex items-center gap-2 text-spa-sage-700 hover:text-[var(--holiday-secondary-500)] font-semibold text-lg transition-colors duration-300 group"
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
        className="py-24 bg-gradient-to-br from-[var(--holiday-primary-700)] via-[var(--holiday-primary-600)] to-[var(--holiday-secondary-600)] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-[var(--holiday-primary-400)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[var(--holiday-secondary-300)]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[var(--holiday-primary-300)]/10 rounded-full blur-2xl" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full holiday-button-gradient mb-6 shadow-xl">
              <HeartIcon className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Make This Valentine&apos;s Unforgettable
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Book your Valentine&apos;s Week escape and receive your complimentary enhancement.
            </p>

            {/* Book Now Button with Enhanced Copy */}
            <a
              href={URLS.BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookClick}
              className="inline-flex flex-col items-center gap-1 px-12 py-5 holiday-button-gradient hover:opacity-90 text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-[var(--holiday-primary-300)]/50"
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
                <GiftIcon className="h-5 w-5 holiday-text-light" />
                <span>Complimentary enhancement included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 holiday-text-light" />
                <span>No codes needed</span>
              </div>
            </div>

            {/* Concierge Booking */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-3">Prefer personalized assistance?</p>
              <a
                href={`tel:${COMPANY.PHONE_LINK}`}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 holiday-text-light font-semibold transition-all duration-300 rounded-full border border-white/20 hover:border-white/30"
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
