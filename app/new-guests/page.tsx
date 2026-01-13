'use client'

import { useEffect, useState } from 'react'
import { StarIcon, CalendarDaysIcon, GiftIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useInView, useStaggeredInView } from '@/app/hooks/useInView'
import { GlassCard } from '@/app/components/ui/GlassCard'
import VideoBackground from '@/app/components/ui/VideoBackground'
import LuxuryServiceCard from '@/app/components/ui/LuxuryServiceCard'
import ServiceDetailModal from '@/app/components/ui/ServiceDetailModal'
import { testimonials } from '@/app/data/testimonials'
import { services } from '@/app/data/services'
import { trackEvent, trackExperimentView, trackExperimentConversion } from '@/app/lib/analytics'
import { EXPERIMENTS, getExperimentVariant, type NewGuestsHeroCTAVariant } from '@/app/lib/ab-testing'
import { getMangoMintServiceUrl } from '@/app/utils/mangomint-urls'
import { URLS, COMPANY } from '@/app/constants/config'

// Complimentary enhancement options for new guests
const enhancements = [
  { name: 'Hot Stone Enhancement', value: 30 },
  { name: 'Foot Massage', value: 30 },
  { name: 'Hand Massage', value: 30 },
  { name: 'Scalp Massage Add-On', value: 20 },
]

// Select the best testimonials for first-timers (condensed to 3)
const selectedTestimonials = testimonials.filter(t =>
  t.content.toLowerCase().includes('first') ||
  t.content.toLowerCase().includes('relax') ||
  t.content.toLowerCase().includes('amazing') ||
  t.content.length > 150
).slice(0, 3)

// Get recommended services for first-timers from the services data
// The Ocean Ritual (id: 2), Royal Escape (id: 4), Heavenly Glide (id: 6)
const recommendedServiceIds = [2, 4, 6]
const recommendedServices = services.filter(s => recommendedServiceIds.includes(s.id))


// CTA configuration for each variant
const CTA_VARIANTS: Record<NewGuestsHeroCTAVariant, { text: string; icon: 'calendar' | 'sparkles' | 'gift' }> = {
  'control': { text: 'Explore Our Services', icon: 'calendar' },
  'first-timer': { text: 'See First-Timer Favorites', icon: 'sparkles' },
  'claim-gift': { text: 'Claim Your Welcome Gift', icon: 'gift' },
}

export default function NewGuestsPage() {
  const { ref: heroRef, isInView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: servicesRef, visibleItems: visibleServices } = useStaggeredInView<HTMLDivElement>(3, 150)
  const { ref: offerRef, isInView: offerInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)
  const [variant, setVariant] = useState<NewGuestsHeroCTAVariant>('control')

  // Get A/B test variant and track views
  useEffect(() => {
    const experimentVariant = getExperimentVariant(EXPERIMENTS.NEW_GUESTS_HERO_CTA)
    if (experimentVariant) {
      setVariant(experimentVariant)
      trackExperimentView(EXPERIMENTS.NEW_GUESTS_HERO_CTA.name, experimentVariant)
    }
    trackEvent('new_guest_page_view')
  }, [])

  const handleBookClick = () => {
    trackEvent('new_guest_book_click', { location: 'new_guests_page' })
    trackExperimentConversion(EXPERIMENTS.NEW_GUESTS_HERO_CTA.name, variant, 'book_click')
  }

  const handleHeroCTAClick = () => {
    trackExperimentConversion(EXPERIMENTS.NEW_GUESTS_HERO_CTA.name, variant, 'hero_cta_click')
  }

  // Get the current CTA config based on variant
  const ctaConfig = CTA_VARIANTS[variant]
  const CTAIcon = ctaConfig.icon === 'calendar' ? CalendarDaysIcon
    : ctaConfig.icon === 'sparkles' ? SparklesIcon
    : GiftIcon

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoSrc="/videos/website-optimized.mp4"
        mobileVideoSrc="/videos/website-mobile.mp4"
        fallbackImage="/images/hero-poster.jpg"
        className="min-h-screen"
        overlayOpacity={0.4}
        videoAspectRatio={9/16}
      >
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-20 left-[10%] w-3 h-3 bg-spa-gold-300/40 rounded-full animate-float" />
            <div className="absolute top-40 right-[15%] w-2 h-2 bg-spa-gold-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-[20%] w-4 h-4 bg-spa-gold-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-[25%] w-2 h-2 bg-spa-gold-300/40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/30 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <GiftIcon className="h-4 w-4 text-spa-gold-300" />
              <span className="uppercase tracking-wider">New Guest Welcome</span>
            </div>

            {/* Headline */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-shimmer-white-once">New to Head Spa?</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-2xl md:text-3xl font-display mb-6 transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-shimmer-white-once">Your First Visit Includes a Complimentary Enhancement</span>
            </p>

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
                <span className="text-white/90 text-sm font-medium">94% Return Clients</span>
              </div>
            </div>

            {/* CTA Button - A/B Tested */}
            <a
              href="#services"
              onClick={handleHeroCTAClick}
              className={`inline-flex items-center gap-3 px-10 py-5 bg-spa-cream-300 hover:bg-spa-cream-400 text-spa-sage-800 rounded-full font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-spa-cream-400 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <CTAIcon className="h-6 w-6" />
              {ctaConfig.text}
            </a>
          </div>

        </section>
      </VideoBackground>

      {/* Recommended Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white via-spa-cream-50 to-spa-gold-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[15%] w-48 h-48 bg-spa-gold-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-spa-gold-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold mb-6 shadow-gold border border-spa-gold-400">
              <CalendarDaysIcon className="h-4 w-4" />
              <span className="uppercase tracking-wider">First-Timer Favorites</span>
              <CalendarDaysIcon className="h-4 w-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Curated for You
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Our most loved experiences for first-time guests
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
                    trackEvent('new_guest_book_click', { service: service.name, location: 'new_guests_page' })
                    window.open(url, '_blank')
                  }}
                  onViewDetails={() => setSelectedService(service)}
                  className="h-full"
                  priority={index < 2}
                  badgeType={
                    service.id === 2 ? 'popular' :  // Ocean Ritual - "Most Popular"
                    service.id === 4 ? 'value' :    // Royal Escape - "Best Value"
                    undefined                        // Heavenly Glide - no badge
                  }
                />
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-spa-sage-700 hover:text-spa-gold-600 font-semibold text-lg transition-colors duration-300 group"
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-spa-gold-50/30 via-spa-cream-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-stone-600">
              Discover why guests return again and again
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {selectedTestimonials.map((testimonial) => (
              <GlassCard key={testimonial.id} className="p-6" opacity={0.7} blur="lg">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-spa-gold-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-700 leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-spa-sage-800">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.timeAgo}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Gift + CTA Section (Merged) */}
      <section
        id="offer"
        ref={offerRef}
        className="py-24 bg-gradient-to-br from-spa-sage-800 via-spa-sage-700 to-spa-sage-900 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-spa-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-spa-gold-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-spa-gold-500/5 rounded-full blur-2xl" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-700 ${offerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-spa-gold-400 to-spa-gold-600 mb-6 shadow-xl">
              <GiftIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Your Welcome Gift
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              As a new guest, your first visit includes a complimentary enhancement — choose one of the following:
            </p>

            {/* Enhancement Options */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {enhancements.map((enhancement) => (
                <GlassCard key={enhancement.name} className="p-5 text-left" opacity={0.1} blur="lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold">{enhancement.name}</p>
                      <p className="text-spa-gold-300 text-sm">A ${enhancement.value} value</p>
                    </div>
                    <CheckCircleIcon className="h-6 w-6 text-spa-gold-400" />
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* How it works */}
            <p className="text-white/60 text-sm mb-8">
              Simply mention it&apos;s your first visit when booking or arriving. We&apos;ll take care of the rest.
            </p>

            {/* Book Now Button */}
            <a
              href={URLS.BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookClick}
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-600 hover:to-spa-gold-700 text-white rounded-full font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-spa-gold-400"
            >
              <CalendarDaysIcon className="h-6 w-6" />
              Book Your First Visit
            </a>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <GiftIcon className="h-5 w-5 text-spa-gold-400" />
                <span>Complimentary enhancement included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-spa-gold-400" />
                <span>No codes needed</span>
              </div>
            </div>

            {/* Elegant phone contact */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-3">Questions? We&apos;d love to hear from you.</p>
              <a
                href={`tel:${COMPANY.PHONE_LINK}`}
                className="inline-flex items-center gap-2 text-spa-gold-300 hover:text-spa-gold-200 font-medium transition-colors duration-300"
              >
                <PhoneIcon className="h-4 w-4" />
                {COMPANY.PHONE}
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
            trackEvent('new_guest_book_click', { service: selectedService.name, location: 'modal' })
            window.open(url, '_blank')
          }
        }}
      />
    </main>
  )
}
