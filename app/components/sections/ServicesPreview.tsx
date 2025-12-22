'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'
import LuxuryServiceCard from '../ui/LuxuryServiceCard'
import ServiceDetailModal from '../ui/ServiceDetailModal'
import { getMangoMintServiceUrl } from '@/app/utils/mangomint-urls'
import {
  SparklesIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

// Popular services from the main services list
const popularServices = [
  {
    id: 4,
    icon: SparklesIcon,
    name: 'Royal Escape',
    shortDesc: 'Ultimate 90-minute royal treatment',
    fullDesc: 'Our signature 90-minute royal treatment offering the ultimate in scalp massage luxury and relaxation. Experience the pinnacle of our head spa services with comprehensive scalp care and therapeutic massage.',
    duration: '90 min',
    price: 210,
    imageUrl: '/images/services/royal-escape.png',
    benefits: ['Ultimate Relaxation', 'Premium Experience', 'Complete Wellness'],
    includes: [
      'Extended 90-minute treatment',
      'Comprehensive scalp analysis',
      'Deep tissue scalp massage',
      'Aromatherapy experience',
      'Hot towel treatment',
      'Scalp detox and cleanse',
      'Moisturizing mask',
      'Light blow dry'
    ],
    popular: false,
    category: 'head-scalp',
    badgeType: 'signature' as const
  },
  {
    id: 10,
    icon: StarIcon,
    name: 'Island Renewal',
    shortDesc: 'Rejuvenating facial treatment',
    fullDesc: 'A full hour facial treatment focused on skin renewal and rejuvenation with island-inspired techniques. Our expert aestheticians combine traditional island wisdom with modern skincare science.',
    duration: '60 min',
    price: 130,
    imageUrl: '/images/services/island-renewal.jpg',
    benefits: ['Skin Renewal', 'Deep Cleansing', 'Rejuvenation'],
    includes: [
      'Deep facial cleansing',
      'Exfoliation treatment',
      'Custom facial mask',
      'Face and neck massage',
      'Moisturizing treatment',
      'Eye treatment',
      'Décolleté care'
    ],
    popular: false,
    category: 'facial',
    badgeType: 'value' as const
  },
  {
    id: 13,
    icon: SparklesIcon,
    name: 'ULU Glow – Beauty & Radiance',
    shortDesc: 'Beauty-enhancing IV therapy',
    fullDesc: 'Specialized IV therapy designed to enhance beauty and promote radiant, healthy skin from within. This powerful infusion delivers essential vitamins and nutrients directly to your bloodstream for maximum absorption and immediate results.',
    duration: '45 min',
    price: 195,
    imageUrl: '/images/services/Beaty Drip IV DRIP for website.png',
    benefits: ['Skin Radiance', 'Beauty Enhancement', 'Hydration'],
    includes: [
      'Vitamin C infusion',
      'Biotin complex',
      'Glutathione boost',
      'Hydration therapy',
      'Antioxidant blend',
      'Mineral replenishment',
      'Consultation with specialist'
    ],
    popular: false,
    category: 'iv-therapy',
    badgeType: 'popular' as const
  },
  {
    id: 7,
    icon: HeartIcon,
    name: 'Pure Unwind',
    shortDesc: 'Extended signature scratching',
    fullDesc: 'A 75-minute extended signature scratching experience with hand and arm ritual extension and optional oil infusion (+$15) for ultimate relaxation and stress relief. We use soft scratch nails, gentle brushes, and sanitized tools to create a smooth, relaxing scratch sensation.',
    duration: '75 min',
    price: 170,
    imageUrl: '/images/services/scratch-therapy-claw2.png',
    benefits: ['Ultimate Relaxation', 'Sensory Therapy', 'Stress Relief'],
    includes: [
      'Extended signature scratching',
      'Hand and arm ritual extension',
      'Soft fan brushes & scratch tools',
      'Deep relaxation',
      'Optional oil infusion (+$15)'
    ],
    popular: false,
    category: 'scratch-therapy',
    badgeType: 'signature' as const
  }
]

export default function ServicesPreview() {
  const [selectedService, setSelectedService] = useState<typeof popularServices[number] | null>(null)

  return (
    <section id="services-preview" className="py-24 bg-gradient-to-b from-spa-sage-50/40 via-white to-spa-gold-50/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-spa-gold-200 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-spa-sage-200 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-spa-gold-300 rounded-full blur-xl animate-pulse-slow" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-spa-gold-600 text-white text-sm font-medium mb-6 backdrop-blur-sm shadow-luxury border border-spa-gold-300/50">
            Our Signature Services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
            Tailored Experiences for 
            <br />
            Your Perfect Sanctuary
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Each service is carefully designed to address your unique needs, 
            whether you&apos;re seeking stress relief, hair growth support, or simply a moment of pure tranquility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularServices.map((service, index) => (
            <LuxuryServiceCard
              key={service.id}
              service={service}
              priority={index === 0}
              badgeType={service.badgeType}
              onViewDetails={() => setSelectedService(service)}
              onBook={() => {
                const serviceUrl = getMangoMintServiceUrl(service.name)
                window.location.href = serviceUrl
              }}
            />
          ))}
        </div>

        {/* View All Services CTA */}
        <div
          className="text-center mt-20 relative"
        >
          <Link href="/services">
            <Button variant="luxury" size="lg" className="px-12 shadow-luxury hover:shadow-luxury-lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          onBookNow={() => {
            const serviceUrl = getMangoMintServiceUrl(selectedService.name)
            window.location.href = serviceUrl
          }}
        />
      )}
    </section>
  )
}