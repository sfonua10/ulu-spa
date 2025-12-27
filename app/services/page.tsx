'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { useInView } from '../hooks/useInView'
import VideoBackground from '../components/ui/VideoBackground'
import LuxuryServiceCard from '../components/ui/LuxuryServiceCard'
import CategoryCard from '../components/ui/CategoryCard'
import ServiceDetailModal from '../components/ui/ServiceDetailModal'
import { getMangoMintServiceUrl } from '../utils/mangomint-urls'
import { services } from '../data/services'
import {
  ArrowLeftIcon,
  SparklesIcon,
  HandRaisedIcon,
  FireIcon,
  ScissorsIcon,
  HeartIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { ServiceSchema } from '../components/seo/JsonLd'

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
    id: 'head-scalp',
    name: 'Head & Scalp Massage',
    tagline: 'Our signature head spa ritual',
    imageUrl: '/images/services/royal-escape.png'
  },
  {
    id: 'scratch-therapy',
    name: 'Scratch Therapy',
    tagline: 'Gentle, rhythmic relaxation',
    imageUrl: '/images/services/scratch-therapy.png'
  },
  {
    id: 'facial',
    name: 'Facial Services',
    tagline: 'Rejuvenate & restore your glow',
    imageUrl: '/images/services/island-renewal.jpg'
  },
  {
    id: 'iv-therapy',
    name: 'IV Therapy',
    tagline: 'Wellness from within',
    imageUrl: '/images/services/Beaty Drip IV DRIP for website.png'
  }
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)

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

  // Prepare services data for schema (excluding add-ons)
  const schemaServices = mainServices.map(s => ({
    name: s.name,
    description: s.fullDesc,
    price: s.price,
    duration: s.duration,
    image: s.imageUrl,
    category: s.category
  }))

  return (
    <div className="relative">
      {/* Service Schema for SEO */}
      <ServiceSchema services={schemaServices} />

      {/* Video Hero Section */}
      <VideoBackground
        videoSrc="/videos/ulu-facial-site-optimized.mp4"
        fallbackImage="/images/hero-poster.jpg"
        className="min-h-[50vh]"
        priority={true}
      >
        <div className="flex items-center justify-center min-h-[50vh] px-6 pt-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Choose your experience and discover your perfect treatment
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* Main Content Section */}
      <section className="relative py-16 bg-gradient-to-br from-spa-sage-50/30 via-white to-spa-cream-50/40 overflow-hidden">
        {/* Subtle Floating Background Orbs */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-spa-gold-200 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-32 right-32 w-80 h-80 bg-spa-sage-200 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s', animationDuration: '10s' }}
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
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-spa-sage-800 mb-3">
                  Choose Your Experience
                </h2>
                <p className="text-lg text-stone-600">
                  Select a category to explore our treatments
                </p>
              </div>

              {/* Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {categoryData.map((category, index) => (
                  <div
                    key={category.id}
                    className={`${
                      hasViewedCategories
                        ? '' // Already viewed, show immediately
                        : categoriesInView
                          ? 'animate-in animate-slide-up'
                          : 'opacity-0'
                    }`}
                    style={!hasViewedCategories ? { animationDelay: `${index * 100}ms` } : undefined}
                  >
                    <CategoryCard
                      name={category.name}
                      tagline={category.tagline}
                      serviceCount={getCategoryCount(category.id)}
                      imageUrl={category.imageUrl}
                      onClick={() => handleCategorySelect(category.id)}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredServices.map((service, index) => (
                  <div
                    key={service.id}
                    className={shouldAnimateServices ? 'animate-in animate-fade-in animate-slide-up' : ''}
                    style={shouldAnimateServices ? { animationDelay: `${index * 100}ms`, animationFillMode: 'both' } : undefined}
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
                      className="h-full"
                      priority={index < 2}
                      badgeType={service.popular ? 'popular' : undefined}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhance Your Visit - Add-Ons Section */}
      <section className="py-12 bg-white border-t border-spa-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-spa-sage-800 mb-2">
              Enhance Your Visit
            </h2>
            <p className="text-stone-600">
              Add these extras to any service
            </p>
          </div>

          {/* Add-ons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {addOnServices.map((addon) => {
              const IconComponent = addOnIcons[addon.name] || SparklesIcon
              return (
                <a
                  key={addon.id}
                  href={getMangoMintServiceUrl(addon.name)}
                  className="group relative bg-white hover:bg-spa-sage-50 border border-spa-sage-200 hover:border-spa-gold-300 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-50/0 to-spa-gold-100/0 group-hover:from-spa-gold-50/50 group-hover:to-spa-gold-100/30 transition-all duration-300 rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-spa-sage-100 group-hover:bg-spa-gold-100 flex items-center justify-center mb-3 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-spa-sage-600 group-hover:text-spa-gold-600 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-spa-sage-800 text-sm mb-2 group-hover:text-spa-gold-700 transition-colors duration-300 leading-tight">
                      {addon.name}
                    </h3>

                    {/* Duration & Price */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-stone-500">{addon.duration}</span>
                      <span className="w-1 h-1 rounded-full bg-spa-gold-400" />
                      <span className="font-semibold text-spa-gold-600">${addon.price}</span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-spa-gold-400 to-spa-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              )
            })}
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
                  Book Now
                </Button>
              </a>
              <a href="tel:+18015287368" className="inline-block">
                <Button variant="outline" size="lg" className="px-12 w-full">
                  Call Us
                </Button>
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
            const serviceUrl = getMangoMintServiceUrl(selectedService.name)
            window.location.href = serviceUrl
          }
        }}
      />
    </div>
  )
}
