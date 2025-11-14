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
import {
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const services = [
  // Head & Scalp Massage
  {
    id: 1,
    icon: SparklesIcon,
    name: 'Island Breeze',
    shortDesc: 'Quick relaxing head and scalp massage',
    fullDesc: 'A refreshing 30-minute head and scalp massage designed to provide quick relief and relaxation.',
    duration: '30 min',
    price: 70,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
    benefits: ['Stress Relief', 'Quick Relaxation', 'Scalp Health'],
    includes: [
      'Scalp massage',
      'Pressure point therapy',
      'Essential oils'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 2,
    icon: SparklesIcon,
    name: 'The Ocean Ritual',
    shortDesc: 'Comprehensive head and scalp treatment',
    fullDesc: 'A full hour of therapeutic head and scalp massage combining relaxation techniques with scalp health benefits.',
    duration: '60 min',
    price: 125,
    priceRange: '$120-$130',
    imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=600&fit=crop',
    benefits: ['Deep Relaxation', 'Scalp Health', 'Stress Relief'],
    includes: [
      'Full scalp treatment',
      'Aromatherapy',
      'Pressure point therapy',
      'Relaxation techniques'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 3,
    icon: SparklesIcon,
    name: 'Tropical Indulge',
    shortDesc: 'Luxurious extended scalp experience',
    fullDesc: 'An indulgent 75-minute scalp massage experience with premium treatments and deep relaxation.',
    duration: '75 min',
    price: 165,
    priceRange: '$160-$170',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    benefits: ['Luxury Experience', 'Deep Relaxation', 'Scalp Rejuvenation'],
    includes: [
      'Extended scalp massage',
      'Premium oils',
      'Hot towel treatment',
      'Relaxation time'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 4,
    icon: SparklesIcon,
    name: 'Royal Escape',
    shortDesc: 'Ultimate premium scalp massage experience',
    fullDesc: 'Our signature 90-minute royal treatment offering the ultimate in scalp massage luxury and relaxation.',
    duration: '90 min',
    price: 202,
    priceRange: '$195-$210',
    imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop',
    benefits: ['Ultimate Relaxation', 'Premium Experience', 'Complete Wellness'],
    includes: [
      'Full royal treatment',
      'Premium aromatherapy',
      'Extended relaxation',
      'Complimentary refreshments'
    ],
    popular: true,
    category: 'head-scalp'
  },
  // Scratch Therapy
  {
    id: 5,
    icon: HeartIcon,
    name: 'Island Drift',
    shortDesc: 'Gentle scratch therapy session',
    fullDesc: 'A relaxing 30-minute scratch therapy session designed to provide comfort and stress relief.',
    duration: '30 min',
    price: 67,
    priceRange: '$65-$70',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop',
    benefits: ['Stress Relief', 'Comfort', 'Relaxation'],
    includes: [
      'Gentle scratch therapy',
      'Relaxation techniques'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 6,
    icon: HeartIcon,
    name: 'Heavenly Glide',
    shortDesc: 'Full hour of therapeutic scratch therapy',
    fullDesc: 'A comprehensive scratch therapy session providing deep relaxation and stress relief.',
    duration: '60 min',
    price: 125,
    priceRange: '$120-$130',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop',
    benefits: ['Deep Relaxation', 'Stress Relief', 'Therapeutic Touch'],
    includes: [
      'Full scratch therapy session',
      'Relaxation techniques',
      'Stress relief'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 7,
    icon: HeartIcon,
    name: 'Pure Unwind',
    shortDesc: 'Extended scratch therapy experience',
    fullDesc: 'A 75-minute comprehensive scratch therapy session for ultimate relaxation and stress relief.',
    duration: '75 min',
    price: 164,
    priceRange: '$159-$170',
    imageUrl: 'https://images.unsplash.com/photo-1591343395082-e120087f4521?w=800&h=600&fit=crop',
    benefits: ['Ultimate Relaxation', 'Stress Relief', 'Extended Therapy'],
    includes: [
      'Extended scratch therapy',
      'Deep relaxation',
      'Stress relief techniques'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 8,
    icon: HeartIcon,
    name: 'ULU Trace',
    shortDesc: 'Premium 90-minute scratch therapy',
    fullDesc: 'Our signature scratch therapy experience offering 90 minutes of therapeutic touch and deep relaxation.',
    duration: '90 min',
    price: 202,
    priceRange: '$195-$210',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
    benefits: ['Premium Experience', 'Deep Therapeutic Touch', 'Ultimate Relaxation'],
    includes: [
      'Premium scratch therapy',
      'Extended relaxation',
      'Therapeutic techniques'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  // Facial Services
  {
    id: 9,
    icon: StarIcon,
    name: 'Glow & Go Express',
    shortDesc: 'Quick refreshing facial treatment',
    fullDesc: 'A fast-paced 30-minute facial designed for busy schedules while delivering maximum glow.',
    duration: '30 min',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
    benefits: ['Quick Refresh', 'Skin Glow', 'Time Efficient'],
    includes: [
      'Express facial',
      'Skin analysis',
      'Quick treatments'
    ],
    popular: false,
    category: 'facial'
  },
  {
    id: 10,
    icon: StarIcon,
    name: 'Island Renewal',
    shortDesc: 'Comprehensive facial rejuvenation',
    fullDesc: 'A full hour facial treatment focused on skin renewal and rejuvenation with island-inspired techniques.',
    duration: '60 min',
    price: 130,
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop',
    benefits: ['Skin Renewal', 'Deep Cleansing', 'Rejuvenation'],
    includes: [
      'Full facial treatment',
      'Deep cleansing',
      'Moisturizing',
      'Skin analysis'
    ],
    popular: true,
    category: 'facial'
  },
  {
    id: 11,
    icon: StarIcon,
    name: 'Island Escape Ritual',
    shortDesc: 'Luxurious extended facial experience',
    fullDesc: 'A 75-minute luxury facial ritual combining multiple treatments for complete skin transformation.',
    duration: '75 min',
    price: 165,
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop',
    benefits: ['Luxury Experience', 'Complete Skin Care', 'Deep Treatment'],
    includes: [
      'Extended facial treatment',
      'Multiple skin therapies',
      'Relaxation time'
    ],
    popular: false,
    category: 'facial'
  },
  {
    id: 12,
    icon: StarIcon,
    name: 'ULU Paradise Renewal',
    shortDesc: 'Ultimate premium facial experience',
    fullDesc: 'Our signature 90-minute facial experience offering the ultimate in skin care and rejuvenation.',
    duration: '90 min',
    price: 195,
    imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
    benefits: ['Ultimate Skin Care', 'Premium Experience', 'Complete Renewal'],
    includes: [
      'Premium facial treatments',
      'Advanced skin therapies',
      'Complete relaxation'
    ],
    popular: false,
    category: 'facial'
  },
  // IV Therapy
  {
    id: 13,
    icon: SparklesIcon,
    name: 'ULU Glow – Beauty & Radiance',
    shortDesc: 'IV therapy for beauty and radiant skin',
    fullDesc: 'Specialized IV therapy designed to enhance beauty and promote radiant, healthy skin from within.',
    duration: '45 min',
    price: 195,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    benefits: ['Skin Radiance', 'Beauty Enhancement', 'Hydration'],
    includes: [
      'IV vitamin therapy',
      'Beauty enhancement vitamins',
      'Professional monitoring'
    ],
    popular: true,
    category: 'iv-therapy'
  },
  {
    id: 14,
    icon: SparklesIcon,
    name: 'Balance Restore',
    shortDesc: 'IV therapy for overall wellness balance',
    fullDesc: 'Comprehensive IV therapy to restore balance and promote overall wellness and vitality.',
    duration: '45 min',
    price: 189,
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
    benefits: ['Wellness Balance', 'Energy Restoration', 'Vitality'],
    includes: [
      'Balancing IV therapy',
      'Essential vitamins',
      'Professional care'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 15,
    icon: SparklesIcon,
    name: 'ULU Athlete Peak Performance',
    shortDesc: 'IV therapy for athletic performance',
    fullDesc: 'Specialized IV therapy designed to enhance athletic performance and support active lifestyles.',
    duration: '45 min',
    price: 195,
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    benefits: ['Performance Enhancement', 'Recovery Support', 'Energy Boost'],
    includes: [
      'Performance IV therapy',
      'Athletic support vitamins',
      'Recovery enhancement'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 16,
    icon: SparklesIcon,
    name: 'Bounce Back to You',
    shortDesc: 'IV therapy for recovery and rejuvenation',
    fullDesc: 'Comprehensive IV therapy to help you bounce back from fatigue and feel rejuvenated.',
    duration: '45 min',
    price: 209,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    benefits: ['Recovery', 'Rejuvenation', 'Energy Restoration'],
    includes: [
      'Recovery IV therapy',
      'Rejuvenating vitamins',
      'Energy enhancement'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 17,
    icon: SparklesIcon,
    name: 'Reset Ritual',
    shortDesc: 'IV therapy for complete system reset',
    fullDesc: 'A complete system reset through specialized IV therapy to restore and revitalize your body.',
    duration: '45 min',
    price: 185,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['System Reset', 'Revitalization', 'Restoration'],
    includes: [
      'Reset IV therapy',
      'Revitalizing nutrients',
      'Complete care'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 18,
    icon: SparklesIcon,
    name: 'ULU Shield',
    shortDesc: 'IV therapy for immune system support',
    fullDesc: 'Protective IV therapy designed to boost and support your immune system for optimal health.',
    duration: '45 min',
    price: 189,
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
    benefits: ['Immune Support', 'Health Protection', 'Wellness Boost'],
    includes: [
      'Immune support IV therapy',
      'Protective vitamins',
      'Health monitoring'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  // Add-On Services
  {
    id: 19,
    icon: CheckIcon,
    name: '30-min Facial',
    shortDesc: 'Quick facial add-on service',
    fullDesc: 'A quick 30-minute facial service that can be added to any treatment.',
    duration: '30 min',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop',
    benefits: ['Quick Refresh', 'Add-on Service', 'Skin Care'],
    includes: [
      'Express facial',
      'Basic skin care'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 20,
    icon: CheckIcon,
    name: 'Hot Stones Enhancement',
    shortDesc: 'Relaxing hot stone therapy add-on',
    fullDesc: 'Add soothing hot stone therapy to enhance any massage treatment.',
    duration: '15 min',
    price: 30,
    imageUrl: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop',
    benefits: ['Deep Relaxation', 'Heat Therapy', 'Enhanced Experience'],
    includes: [
      'Hot stone application',
      'Therapeutic heat'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 21,
    icon: CheckIcon,
    name: 'Scratch Therapy Add-on',
    shortDesc: 'Additional scratch therapy enhancement',
    fullDesc: 'Add 15 minutes of specialized scratch therapy to any service.',
    duration: '15 min',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1629902412043-cf1e5c7e37a8?w=800&h=600&fit=crop',
    benefits: ['Stress Relief', 'Therapeutic Touch', 'Enhanced Relaxation'],
    includes: [
      'Scratch therapy session',
      'Relaxation enhancement'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 22,
    icon: CheckIcon,
    name: 'Beard Treatment',
    shortDesc: 'Professional beard care service',
    fullDesc: 'Specialized beard treatment and grooming service for men.',
    duration: '15-20 min',
    price: 27,
    priceRange: '$25-$30',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop',
    benefits: ['Beard Care', 'Grooming', 'Specialized Treatment'],
    includes: [
      'Beard treatment',
      'Professional grooming'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 23,
    icon: CheckIcon,
    name: 'Hair Play',
    shortDesc: 'Relaxing hair styling service',
    fullDesc: 'A relaxing hair styling and play session for stress relief.',
    duration: '15 min',
    price: 20,
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    benefits: ['Hair Care', 'Relaxation', 'Styling'],
    includes: [
      'Hair styling',
      'Relaxing treatment'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 24,
    icon: CheckIcon,
    name: 'Foot Massage',
    shortDesc: 'Therapeutic foot massage add-on',
    fullDesc: 'Add a relaxing foot massage to enhance any service.',
    duration: '15 min',
    price: 27,
    priceRange: '$25-$30',
    imageUrl: 'https://images.unsplash.com/photo-1598966739654-5e9ff72faa0d?w=800&h=600&fit=crop',
    benefits: ['Foot Care', 'Relaxation', 'Circulation'],
    includes: [
      'Foot massage',
      'Pressure point therapy'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 25,
    icon: CheckIcon,
    name: 'Hand Massage',
    shortDesc: 'Therapeutic hand massage add-on',
    fullDesc: 'Add a relaxing hand massage to enhance any service.',
    duration: '15 min',
    price: 27,
    priceRange: '$25-$30',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
    benefits: ['Hand Care', 'Relaxation', 'Circulation'],
    includes: [
      'Hand massage',
      'Pressure point therapy'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 26,
    icon: CheckIcon,
    name: 'Scalp Massage',
    shortDesc: 'Quick scalp massage add-on',
    fullDesc: 'A quick scalp massage add-on for any service.',
    duration: '10 min',
    price: 20,
    imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=600&fit=crop',
    benefits: ['Scalp Health', 'Quick Relaxation', 'Add-on Service'],
    includes: [
      'Scalp massage',
      'Quick treatment'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 27,
    icon: CheckIcon,
    name: 'Full Blow Out & Style',
    shortDesc: 'Complete hair styling service',
    fullDesc: 'Professional blow out and styling service for a complete look.',
    duration: '30-45 min',
    price: 32,
    priceRange: '$30-$35',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop',
    benefits: ['Professional Styling', 'Complete Look', 'Hair Care'],
    includes: [
      'Professional blow out',
      'Complete styling'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 28,
    icon: CheckIcon,
    name: 'Hair Extension Removal',
    shortDesc: 'Professional extension removal service',
    fullDesc: 'Safe and professional hair extension removal service.',
    duration: '30 min',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1562004760-acb00610b1d0?w=800&h=600&fit=crop',
    benefits: ['Professional Removal', 'Hair Care', 'Safe Process'],
    includes: [
      'Extension removal',
      'Hair care'
    ],
    popular: false,
    category: 'add-on'
  }
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedService, setSelectedService] = useState<any>(null)

  const { ref: heroRef, isInView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: filterRef, isInView: filterInView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: servicesRef, visibleItems } = useStaggeredInView<HTMLDivElement>(6, 100)
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory)

  // Calculate category counts
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return services.length
    return services.filter(s => s.category === categoryId).length
  }

  const categories = [
    { id: 'all', name: 'All Services', count: getCategoryCount('all') },
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
        videoSrc="/videos/ulu-facial-site.mp4"
        fallbackImage="/images/hero-fallback.svg"
        className="min-h-[70vh] mb-16"
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                  onBookNow={() => {
                    const serviceUrl = getMangoMintServiceUrl(service.name)
                    window.location.href = serviceUrl
                  }}
                  onLearnMore={() => {
                    setSelectedService(service)
                  }}
                  className="h-full luxury-hover"
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
              <Button variant="outline" size="lg" className="px-12">
                Call (801) 528-7368
              </Button>
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