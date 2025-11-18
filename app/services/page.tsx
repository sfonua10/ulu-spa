'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { useInView, useStaggeredInView } from '../hooks/useInView'
import VideoBackground from '../components/ui/VideoBackground'
import LuxuryServiceCard from '../components/ui/LuxuryServiceCard'
import LuxuryCategoryFilter from '../components/ui/LuxuryCategoryFilter'
import FloatingBookingButton from '../components/ui/FloatingBookingButton'
import ServiceDetailModal from '../components/ui/ServiceDetailModal'
import { getMangoMintServiceUrl } from '../utils/mangomint-urls'
import { services } from '../data/services'
import {
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)

  const { ref: heroRef, isInView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: filterRef, isInView: filterInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: servicesRef, visibleItems } = useStaggeredInView<HTMLDivElement>(6, 100)
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  const filteredServices = selectedCategory === 'all'
    ? services
    : selectedCategory === 'popular'
    ? services.filter(service => service.popular)
    : services.filter(service => service.category === selectedCategory)

  // Calculate category counts
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return services.length
    if (categoryId === 'popular') return services.filter(s => s.popular).length
    return services.filter(s => s.category === categoryId).length
  }

  const categories = [
    { id: 'all', name: 'All Services', count: getCategoryCount('all') },
    { id: 'popular', name: 'Most Popular', count: getCategoryCount('popular'), icon: StarIcon },
    { id: 'head-scalp', name: 'Head & Scalp Massage', count: getCategoryCount('head-scalp') },
    { id: 'scratch-therapy', name: 'Scratch Therapy', count: getCategoryCount('scratch-therapy') },
    { id: 'facial', name: 'Facial Services', count: getCategoryCount('facial') },
    { id: 'iv-therapy', name: 'IV Therapy', count: getCategoryCount('iv-therapy') },
    { id: 'add-on', name: 'Add-On Services', count: getCategoryCount('add-on') }
  ]

  return (
    <div className="relative">

      {/* Video Hero Section */}
      <VideoBackground
        videoSrc="/videos/ulu-facial-site-optimized.mp4"
        fallbackImage="/images/hero-poster.jpg"
        className="min-h-[70vh]"
        priority={true}
      >
        <div className="flex items-center justify-center min-h-[70vh] px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Transformative Wellness
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Experience the ultimate in luxury spa treatments with our complete range of personalized wellness services
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* Services Philosophy Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-spa-sage-50/20 to-spa-gold-50/10 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute top-40 left-20 w-96 h-96 bg-spa-gold-200 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-32 w-80 h-80 bg-spa-sage-200 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '3s', animationDuration: '11s' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div
            ref={heroRef}
            className={`text-center space-y-8 ${heroInView ? 'animate-in animate-fade-in animate-slow' : 'opacity-0'}`}
          >
            {/* Decorative Top Accent */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-spa-gold-400" />
              <SparklesIcon className="w-6 h-6 text-spa-gold-500 mx-4" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-spa-gold-400" />
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-spa-sage-800 leading-tight">
              Curated Wellness Experiences
            </h2>

            {/* Decorative Script Subtitle */}
            <p className="font-script text-2xl md:text-3xl text-spa-gold-600">
              Designed for Your Unique Journey
            </p>

            {/* Philosophy Content */}
            <div className="space-y-6 text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Each service at ULU Head Spa is thoughtfully crafted to restore balance,
                promote natural healing, and awaken your inherent radiance. We believe
                that true wellness begins with personalized care—treatments designed
                specifically for your body&apos;s needs and your soul&apos;s journey.
              </p>
              <p>
                Our expert therapists blend ancient healing traditions with modern
                therapeutic techniques, creating transformative experiences that go
                beyond relaxation. From restorative scalp therapies to rejuvenating
                facials and advanced IV treatments, every service is an invitation to
                reconnect with your most vibrant self.
              </p>
              <p className="text-spa-sage-700 font-medium italic">
                Let us guide you to the perfect treatment for your unique wellness goals.
              </p>
            </div>

            {/* Decorative Bottom Accent */}
            <div className="flex items-center justify-center mt-12 pt-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-spa-gold-400 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 bg-gradient-to-br from-spa-sage-50/30 via-white to-spa-cream-50/40 overflow-hidden">
        {/* Subtle Floating Background Orbs */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-spa-gold-200 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-32 right-32 w-80 h-80 bg-spa-sage-200 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s', animationDuration: '10s' }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-spa-gold-300 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s', animationDuration: '12s' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Luxury Category Filter */}
          <div
            ref={filterRef}
            className={`mb-8 ${filterInView ? 'animate-in animate-fade-in animate-delay-200' : 'opacity-0'}`}
          >
            <LuxuryCategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              className="max-w-4xl mx-auto"
            />

            {/* Result Count Feedback */}
            <div
              role="status"
              aria-live="polite"
              className="text-center mt-4 mb-8"
            >
              <p className="text-spa-sage-600 text-sm font-medium">
                Showing{' '}
                <span className="inline-flex items-center justify-center min-w-[2ch] font-semibold text-spa-gold-600 transition-all duration-300">
                  {filteredServices.length}
                </span>
                {' '}of{' '}
                <span className="font-semibold text-spa-sage-700">
                  {services.length}
                </span>
                {' '}services
              </p>
            </div>
          </div>

          {/* Luxury Services Grid */}
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`${
                  visibleItems.has(index) ? `animate-in animate-slide-up animate-delay-${index * 100}` : 'opacity-0'
                }`}
              >
                <LuxuryServiceCard
                  service={service}
                  onBook={() => {
                    const serviceUrl = getMangoMintServiceUrl(service.name)
                    window.location.href = serviceUrl
                  }}
                  onViewDetails={() => {
                    setSelectedService(service)
                  }}
                  className="h-full luxury-hover"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-spa-gold-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            ref={ctaRef}
            className={`space-y-8 ${ctaInView ? 'animate-in animate-slide-up animate-slow' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800">
              Ready to Begin Your
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Wellness Journey?
              </span>
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Book your personalized consultation today and let our experts 
              recommend the perfect service for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_MANGOMINT_BOOKING_URL || 'https://booking.mangomint.com/904811'}
                className="mangomint-booking-button inline-block"
              >
                <Button variant="luxury" size="lg" className="px-12 w-full">
                  Book Consultation
                </Button>
              </a>
              <a href="tel:+18015287368" className="inline-block">
                <Button variant="outline" size="lg" className="px-12 w-full">
                  Call (801) 528-7368
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Booking Button */}
      <FloatingBookingButton />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onBookNow={() => {
          if (selectedService) {
            const serviceUrl = getMangoMintServiceUrl(selectedService.name)
            window.location.href = serviceUrl
          }
        }}
      />
    </div>
  )
}