'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '../components/ui/Button'
import { useInView } from '../hooks/useInView'
import VideoBackground from '../components/ui/VideoBackground'
import LuxuryServiceCard from '../components/ui/LuxuryServiceCard'
import SignatureExperienceCard from '../components/ui/SignatureExperienceCard'
import CategoryCard from '../components/ui/CategoryCard'
import ServiceDetailModal from '../components/ui/ServiceDetailModal'
import { getMangoMintServiceUrl } from '../utils/mangomint-urls'
import { trackBookNowClick, trackOutboundClick } from '../lib/analytics'
import { BookingLink } from '../components/ui/BookingButton'
import { services } from '../data/services'
import {
  ArrowLeftIcon,
  SparklesIcon,
  HandRaisedIcon,
  FireIcon,
  ScissorsIcon,
  HeartIcon,
  UserIcon,
  PhoneIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import { StarIcon, FireIcon as FireIconSolid } from '@heroicons/react/24/solid'
import { COMPANY } from '../constants/config'

// Icon mapping for add-on services
const addOnIcons: Record<string, React.ComponentType<{className?: string}>> = {
  '30-min Facial': SparklesIcon,
  'Hot Stones Enhancement': FireIcon,
  'Scratch Therapy Add-on': HandRaisedIcon,
  'Beard Treatment': UserIcon,
  'Hair Play': SparklesIcon,
  'Foot Massage': HeartIcon,
  'Hand Massage': HandRaisedIcon,
  'Scalp Massage': SparklesIcon,
  'Full Blow Out & Style': SparklesIcon,
  'Hair Extension Removal': ScissorsIcon,
}

// Category definitions with taglines and representative images
const categoryData = [
  {
    id: 'signature-experience',
    name: 'Ultimate ULU Experiences',
    tagline: 'Curated wellness journeys',
    imageUrl: '/images/services/island-escape-ritual.png',
    isPremium: true,
    priceRange: 'From $210'
  },
  {
    id: 'head-scalp',
    name: 'Head & Scalp Massage',
    tagline: 'Our signature head spa ritual',
    imageUrl: '/images/services/royal-escape.png',
    isPremium: false,
    priceRange: 'From $70'
  },
  {
    id: 'scratch-therapy',
    name: 'Scratch Therapy',
    tagline: 'Gentle, rhythmic relaxation',
    imageUrl: '/images/services/scratch-therapy.png',
    isPremium: false,
    priceRange: 'From $65'
  },
  {
    id: 'facial',
    name: 'Facial Services',
    tagline: 'Rejuvenate & restore your glow',
    imageUrl: '/images/services/island-renewal.jpg',
    isPremium: false,
    priceRange: 'From $85'
  },
  {
    id: 'iv-therapy',
    name: 'IV Therapy',
    tagline: 'Wellness from within',
    imageUrl: '/images/services/model.jpg',
    isPremium: false,
    priceRange: 'From $199'
  }
]

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)

  // Handle URL query param for category pre-selection
  useEffect(() => {
    const category = searchParams.get('category')
    if (category && categoryData.some(c => c.id === category)) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  // Track which category services have been viewed to prevent re-animation
  const [viewedCategoryServices, setViewedCategoryServices] = useState<Set<string>>(new Set())

  // useInView already tracks hasTriggered internally, no need for separate state
  const { ref: categoriesRef, isInView: categoriesInView, hasTriggered: hasViewedCategories } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  // Handle category selection and track viewed services
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    // Mark as viewed after animation completes
    if (!viewedCategoryServices.has(categoryId)) {
      setTimeout(() => {
        setViewedCategoryServices(prev => new Set([...prev, categoryId]))
      }, 600) // Match animation duration
    }
  }

  // Determine if services should animate (first time viewing this category)
  const shouldAnimateServices = selectedCategory ? !viewedCategoryServices.has(selectedCategory) : false

  // Filter out add-ons and get services for selected category
  const mainServices = services.filter(s => s.category !== 'add-on')
  const addOnServices = services.filter(s => s.category === 'add-on')

  const filteredServices = selectedCategory
    ? mainServices.filter(service => service.category === selectedCategory)
    : []

  // Get service count for each category
  const getCategoryCount = (categoryId: string) => {
    return mainServices.filter(s => s.category === categoryId).length
  }

  // Get category name for display
  const getSelectedCategoryName = () => {
    const category = categoryData.find(c => c.id === selectedCategory)
    return category?.name || ''
  }


  return (
    <div className="relative">
      {/* Video Hero Section */}
      <VideoBackground
        videoSrc="/videos/ulu-facial-site-optimized.mp4"
        fallbackImage="/images/hero-poster.jpg"
        className="min-h-[60vh]"
        priority={true}
      >
        {/* Decorative floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-spa-gold-400/20 rounded-full blur-2xl animate-float" />
          <div className="absolute top-1/3 right-16 w-24 h-24 bg-spa-sage-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="flex items-center justify-center min-h-[60vh] px-6 pt-24">
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-spa-gold-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">5-Star Head Spa Experience</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Escape Into
              <br />
              <span className="bg-gradient-to-r from-spa-gold-300 via-spa-gold-200 to-spa-gold-300 bg-clip-text text-transparent">
                Pure Bliss
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Discover personalized treatments crafted to restore your mind, body, and spirit
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingLink
                location="services_hero"
                external
                className="inline-block"
              >
                <Button variant="luxury" size="lg" className="px-8 py-4 text-base font-bold shadow-2xl hover:shadow-spa-gold-500/25 group">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Reserve Your Escape
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </BookingLink>
              <a
                href={`tel:${COMPANY.PHONE_LINK}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 group"
              >
                <PhoneIcon className="w-5 h-5 group-hover:animate-pulse" />
                <span>{COMPANY.PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Main Content Section */}
      <section className="relative py-20 bg-gradient-to-br from-spa-sage-50/30 via-white to-spa-cream-50/40 overflow-hidden">
        {/* Enhanced Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Liquid morph blob - top left */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-spa-gold-200/20 rounded-full blur-3xl liquid-morph" />
          {/* Floating orb - right side */}
          <div
            className="absolute top-1/3 -right-10 w-72 h-72 bg-spa-sage-200/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1s', animationDuration: '12s' }}
          />
          {/* Small accent orb - center */}
          <div
            className="absolute top-1/2 left-1/4 w-48 h-48 bg-spa-gold-300/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: '3s', animationDuration: '8s' }}
          />
          {/* Bottom morph blob */}
          <div
            className="absolute -bottom-32 right-1/4 w-80 h-80 bg-spa-sage-300/15 rounded-full blur-3xl liquid-morph"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Category Selection View */}
          {!selectedCategory && (
            <div
              ref={categoriesRef}
              className={`${
                hasViewedCategories
                  ? '' // Already viewed, show immediately
                  : categoriesInView
                    ? 'animate-in animate-fade-in'
                    : 'opacity-0'
              }`}
            >
              {/* Featured Service - Most Popular */}
              <div className="mb-12">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-spa-gold-50 via-white to-spa-cream-50 border border-spa-gold-200/50 shadow-lg p-6 md:p-8">
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-spa-gold-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-spa-sage-200/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    {/* Badge */}
                    <div className="shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold shadow-lg">
                        <FireIconSolid className="w-4 h-4" />
                        Trending This Month
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-spa-sage-800 mb-1">
                        The Royal Escape
                      </h3>
                      <p className="text-stone-600 mb-2">
                        90 minutes of pure relaxation with our signature head spa treatment
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                        <span className="font-medium text-spa-sage-700">90 min</span>
                        <span className="text-spa-gold-500">•</span>
                        <span className="font-bold text-spa-gold-600 text-lg">$145</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0">
                      <BookingLink
                        location="featured_service"
                        external
                        className="inline-block"
                      >
                        <Button variant="luxury" size="md" className="px-6 py-3 shadow-lg hover:shadow-xl group whitespace-nowrap">
                          Book Now
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Button>
                      </BookingLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature Experiences - Full Width Featured */}
              {(() => {
                const signatureCategory = categoryData.find(c => c.id === 'signature-experience')
                if (!signatureCategory) return null
                return (
                  <div
                    className={`mb-10 ${
                      hasViewedCategories
                        ? ''
                        : categoriesInView
                          ? 'animate-in animate-fade-in'
                          : 'opacity-0'
                    }`}
                  >
                    <button
                      onClick={() => handleCategorySelect(signatureCategory.id)}
                      className="group relative w-full rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-spa-gold-500 focus:ring-offset-2 ring-2 ring-spa-gold-400/50 shadow-xl shadow-spa-gold-500/20"
                    >
                      {/* Full-width image with taller aspect ratio */}
                      <div className="relative aspect-[21/9] md:aspect-[3/1]">
                        <img
                          src={signatureCategory.imageUrl}
                          alt={`${signatureCategory.name} at ULU Spa`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-75"
                        />

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-spa-gold-900/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                        {/* Shimmer on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spa-gold-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      </div>

                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                        {/* Top badge */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-xs md:text-sm font-bold shadow-lg">
                            <SparklesIcon className="w-4 h-4" />
                            SIGNATURE COLLECTION
                          </span>
                        </div>

                        {/* Service count badge */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6">
                          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-spa-gold-500/30 backdrop-blur-md text-white border border-spa-gold-400/50">
                            {getCategoryCount(signatureCategory.id)} curated experiences
                          </span>
                        </div>

                        {/* Main content */}
                        <div className="max-w-2xl">
                          <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-spa-gold-100 transition-colors">
                            {signatureCategory.name}
                          </h3>
                          <p className="text-sm md:text-lg text-white/80 mb-3">
                            {signatureCategory.tagline}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="text-spa-gold-300 font-medium text-sm md:text-base">
                              {signatureCategory.priceRange}
                            </span>
                            <span className="inline-flex items-center gap-2 text-spa-gold-400 font-medium text-sm md:text-base group-hover:translate-x-1 transition-transform">
                              Explore Collection
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Gold border effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-spa-gold-400/40 group-hover:border-spa-gold-400 transition-colors duration-500" />
                    </button>
                  </div>
                )
              })()}

              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-spa-sage-800 mb-2">
                  Explore By Category
                </h2>
                <p className="text-stone-600">
                  Find the perfect treatment for you
                </p>
              </div>

              {/* Category Cards Grid - Remaining categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {categoryData
                  .filter(category => category.id !== 'signature-experience')
                  .map((category, index) => (
                  <div
                    key={category.id}
                    className={`${
                      hasViewedCategories
                        ? '' // Already viewed, show immediately
                        : categoriesInView
                          ? 'animate-in animate-slide-up'
                          : 'opacity-0'
                    }`}
                    style={!hasViewedCategories ? { animationDelay: `${(index + 1) * 100}ms` } : undefined}
                  >
                    <CategoryCard
                      name={category.name}
                      tagline={category.tagline}
                      serviceCount={getCategoryCount(category.id)}
                      imageUrl={category.imageUrl}
                      onClick={() => handleCategorySelect(category.id)}
                      isPremium={category.isPremium}
                      priceRange={category.priceRange}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Services View */}
          {selectedCategory && (
            <div>
              {/* Back Button & Category Title */}
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 text-spa-sage-600 hover:text-spa-sage-800 transition-colors duration-200 mb-4 group"
                >
                  <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span className="font-medium">Back to all services</span>
                </button>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-spa-sage-800">
                  {getSelectedCategoryName()}
                </h2>
                <p className="text-stone-600 mt-2">
                  {filteredServices.length} treatment{filteredServices.length !== 1 ? 's' : ''} available
                </p>
              </div>

              {/* Services Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
                {filteredServices.map((service, index) => (
                  <div
                    key={service.id}
                    className={shouldAnimateServices ? 'animate-in animate-fade-in animate-slide-up' : ''}
                    style={shouldAnimateServices ? { animationDelay: `${index * 100}ms`, animationFillMode: 'both' } : undefined}
                  >
                    {selectedCategory === 'signature-experience' ? (
                      <SignatureExperienceCard
                        service={service}
                        onBook={() => {
                          const url = getMangoMintServiceUrl(service.name)
                          trackBookNowClick('signature_experience_card')
                          trackOutboundClick(url, 'signature_experience_card')
                          window.open(url, '_blank')
                        }}
                        onViewDetails={() => {
                          setSelectedService(service)
                        }}
                        className="h-full"
                        priority={index < 2}
                      />
                    ) : (
                      <LuxuryServiceCard
                        service={service}
                        onBook={() => {
                          const url = getMangoMintServiceUrl(service.name)
                          trackBookNowClick('service_card')
                          trackOutboundClick(url, 'service_card')
                          window.open(url, '_blank')
                        }}
                        onViewDetails={() => {
                          setSelectedService(service)
                        }}
                        className="h-full"
                        priority={index < 2}
                        badgeType={
                          service.id === 4 ? 'value' :      // Royal Escape
                          service.id === 10 ? 'signature' : // Island Renewal
                          service.popular ? 'popular' : undefined
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Elevate Your Experience - Add-Ons Section */}
      <section className="relative py-16 bg-gradient-to-br from-spa-sage-50/50 via-spa-cream-50/30 to-spa-gold-50/40 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 right-10 w-32 h-32 bg-spa-gold-200/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-20 w-24 h-24 bg-spa-sage-200/20 rounded-full blur-xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-spa-gold-700 bg-spa-gold-100/80 rounded-full uppercase">
              Enhance Your Visit
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-spa-sage-800 mb-3">
              Make It Extra Special
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              Add these luxurious extras to any service for the ultimate pampering experience
            </p>
          </div>

          {/* Add-ons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {addOnServices.map((addon, index) => {
              const IconComponent = addOnIcons[addon.name] || SparklesIcon
              return (
                <a
                  key={addon.id}
                  href={getMangoMintServiceUrl(addon.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/80 backdrop-blur-sm hover:bg-white border border-spa-sage-200/60 hover:border-spa-gold-300 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                  onClick={() => {
                    const url = getMangoMintServiceUrl(addon.name)
                    trackBookNowClick('addon_service')
                    trackOutboundClick(url, 'addon_service')
                  }}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spa-gold-200/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with glow on hover */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-spa-sage-100 to-spa-sage-50 group-hover:from-spa-gold-100 group-hover:to-spa-gold-50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-spa-gold-200/50">
                      <IconComponent className="w-5 h-5 text-spa-sage-600 group-hover:text-spa-gold-600 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-spa-sage-800 text-sm mb-2 group-hover:text-spa-gold-700 transition-colors duration-300 leading-tight">
                      {addon.name}
                    </h3>

                    {/* Duration & Price */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-stone-500">{addon.duration}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-spa-gold-400 to-spa-gold-500" />
                      <span className="font-bold text-spa-gold-600 group-hover:text-spa-gold-700 transition-colors">${addon.price}</span>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-spa-gold-400 via-spa-gold-500 to-spa-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 left-10 w-40 h-40 bg-spa-gold-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-spa-sage-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-spa-gold-200/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            ref={ctaRef}
            className={`space-y-8 ${ctaInView ? 'animate-in animate-slide-up animate-slow' : 'opacity-0'}`}
          >
            {/* Trust indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-spa-gold-200/50 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-spa-gold-500" />
                ))}
              </div>
              <span className="text-sm font-medium text-spa-sage-700">Trusted by hundreds of guests</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800">
              Ready to Begin Your
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Wellness Journey?
              </span>
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Book your personalized consultation today and let our experts
              recommend the perfect service for your unique needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingLink
                location="services_cta"
                external
                className="inline-block"
              >
                <Button variant="luxury" size="lg" className="px-10 py-4 text-base font-bold shadow-xl hover:shadow-2xl group">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Reserve Your Escape
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </BookingLink>
              <a
                href={`tel:${COMPANY.PHONE_LINK}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-spa-sage-300 bg-white/80 backdrop-blur-sm text-spa-sage-700 font-semibold hover:bg-spa-sage-50 hover:border-spa-sage-400 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <PhoneIcon className="w-5 h-5 group-hover:animate-pulse" />
                <span>{COMPANY.PHONE}</span>
              </a>
            </div>

            {/* Reassurance text */}
            <p className="text-sm text-stone-500">
              Free cancellation up to 24 hours before your appointment
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
            trackBookNowClick('service_detail_modal')
            trackOutboundClick(url, 'service_detail_modal')
            window.open(url, '_blank')
          }
        }}
      />
    </div>
  )
}
