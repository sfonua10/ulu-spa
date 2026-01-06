'use client'

import { useEffect, useState } from 'react'
import { StarIcon, CalendarDaysIcon, GiftIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon, BuildingOffice2Icon, UserGroupIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useInView, useStaggeredInView } from '@/app/hooks/useInView'
import { GlassCard } from '@/app/components/ui/GlassCard'
import VideoBackground from '@/app/components/ui/VideoBackground'
import LuxuryServiceCard from '@/app/components/ui/LuxuryServiceCard'
import ServiceDetailModal from '@/app/components/ui/ServiceDetailModal'
import { PhoneLink } from '@/app/components/ui/PhoneLink'
import { testimonials } from '@/app/data/testimonials'
import { services } from '@/app/data/services'
import { trackEvent } from '@/app/lib/analytics'
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


export default function NewGuestsPage() {
  const { ref: heroRef, isInView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: servicesRef, visibleItems: visibleServices } = useStaggeredInView<HTMLDivElement>(3, 150)
  const { ref: offerRef, isInView: offerInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const { ref: corporateRef, isInView: corporateInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)

  // Track page view
  useEffect(() => {
    trackEvent('new_guest_page_view')
  }, [])

  const handleBookClick = () => {
    trackEvent('new_guest_book_click', { location: 'new_guests_page' })
  }

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

            {/* CTA Button */}
            <a
              href="#services"
              className={`inline-flex items-center gap-3 px-10 py-5 bg-spa-cream-300 hover:bg-spa-cream-400 text-spa-sage-800 rounded-full font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-spa-cream-400 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <CalendarDaysIcon className="h-6 w-6" />
              Explore Our Services
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

      {/* Corporate Wellness Section - Eye-Candy Redesign */}
      <section
        id="corporate-wellness"
        ref={corporateRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Elegant Cream Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-spa-cream-50 via-spa-gold-50 to-spa-sage-100" />

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large blurred orbs for depth */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-spa-sage-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-spa-sage-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-spa-gold-200/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-spa-gold-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-spa-sage-200/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

          {/* Small floating particles */}
          <div className="hidden md:block absolute top-20 left-[15%] w-3 h-3 bg-spa-sage-400/30 rounded-full animate-float" />
          <div className="hidden md:block absolute top-40 right-[20%] w-2 h-2 bg-spa-sage-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute bottom-32 left-[30%] w-4 h-4 bg-spa-gold-300/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
          <div className="hidden md:block absolute top-1/2 right-[10%] w-2 h-2 bg-spa-gold-400/40 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
          <div className="hidden md:block absolute top-1/4 left-[40%] w-2 h-2 bg-spa-gold-300/50 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="hidden md:block absolute bottom-1/4 right-[35%] w-3 h-3 bg-spa-sage-300/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="hidden md:block absolute top-[60%] left-[10%] w-2 h-2 bg-spa-gold-400/35 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="hidden md:block absolute bottom-20 right-[25%] w-3 h-3 bg-spa-sage-400/30 rounded-full animate-float" style={{ animationDelay: '3.5s' }} />
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-spa-sage-700/10 backdrop-blur-sm text-spa-sage-700 text-sm font-bold mb-8 border border-spa-sage-300/50 transition-all duration-700 ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <BuildingOffice2Icon className="h-4 w-4" />
            <span className="uppercase tracking-wider">Corporate Wellness</span>
          </div>

          {/* Headline */}
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold text-spa-sage-800 mb-6 transition-all duration-700 delay-100 ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Bring ULU to Your Team
          </h2>

          {/* Short Subtext */}
          <p
            className={`text-xl md:text-2xl text-spa-sage-700/90 mb-16 max-w-2xl mx-auto font-light transition-all duration-700 delay-200 ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            On-site head spa experiences that transform workplace wellness
          </p>

          {/* Icon Strip - Benefits at a Glance */}
          <div
            className={`flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-16 transition-all duration-700 delay-300 ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Benefit 1: On-Site */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center border border-spa-sage-200/50 transition-transform duration-300 hover:scale-110">
                <BuildingOffice2Icon className="h-7 w-7 sm:h-8 sm:w-8 text-spa-sage-700" />
              </div>
              <span className="text-spa-sage-700 font-medium text-xs sm:text-sm">We Come to You</span>
            </div>

            {/* Benefit 2: Team Size */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center border border-spa-sage-200/50 transition-transform duration-300 hover:scale-110">
                <UserGroupIcon className="h-7 w-7 sm:h-8 sm:w-8 text-spa-sage-700" />
              </div>
              <span className="text-spa-sage-700 font-medium text-xs sm:text-sm">Any Team Size</span>
            </div>

            {/* Benefit 3: Flexible */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center border border-spa-sage-200/50 transition-transform duration-300 hover:scale-110">
                <ClockIcon className="h-7 w-7 sm:h-8 sm:w-8 text-spa-sage-700" />
              </div>
              <span className="text-spa-sage-700 font-medium text-xs sm:text-sm">Flexible Scheduling</span>
            </div>

            {/* Benefit 4: Custom */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center border border-spa-sage-200/50 transition-transform duration-300 hover:scale-110">
                <SparklesIcon className="h-7 w-7 sm:h-8 sm:w-8 text-spa-sage-700" />
              </div>
              <span className="text-spa-sage-700 font-medium text-xs sm:text-sm">Custom Packages</span>
            </div>
          </div>

          {/* Phone CTA - Primary Action */}
          <div
            className={`transition-all duration-700 delay-[400ms] ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <PhoneLink
              location="corporate_wellness"
              className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-5 sm:py-6 bg-spa-sage-700 hover:bg-spa-sage-800 text-white rounded-full font-bold text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transform hover:-translate-y-1 group"
            >
              <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7 text-spa-gold-400 group-hover:animate-pulse" />
              <span>Call: {COMPANY.PHONE}</span>
            </PhoneLink>

            {/* Supporting text */}
            <p className="mt-6 text-spa-sage-600 text-sm">
              Speak directly with our corporate wellness team
            </p>
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
