'use client'

import { useInView, useStaggeredInView } from '@/app/hooks/useInView'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { getMangoMintServiceUrl } from '@/app/utils/mangomint-urls'
import { 
  SparklesIcon, 
  HeartIcon, 
  UserGroupIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'

// Popular services from the main services list
const popularServices = [
  {
    id: 4,
    icon: SparklesIcon,
    name: 'Royal Escape',
    description: 'Our signature 90-minute royal treatment offering the ultimate in scalp massage luxury and relaxation.',
    duration: '90 min',
    price: '$202',
    benefits: ['Ultimate Relaxation', 'Premium Experience', 'Complete Wellness']
  },
  {
    id: 10,
    icon: StarIcon,
    name: 'Island Renewal',
    description: 'A full hour facial treatment focused on skin renewal and rejuvenation with island-inspired techniques.',
    duration: '60 min',
    price: '$130',
    benefits: ['Skin Renewal', 'Deep Cleansing', 'Rejuvenation']
  },
  {
    id: 13,
    icon: SparklesIcon,
    name: 'ULU Glow – Beauty & Radiance',
    description: 'Specialized IV therapy designed to enhance beauty and promote radiant, healthy skin from within.',
    duration: '45 min',
    price: '$195',
    benefits: ['Skin Radiance', 'Beauty Enhancement', 'Hydration']
  }
]

export default function ServicesPreview() {
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
            <div
              key={service.id}
              className="group"
            >
              <GlassCard 
                className="p-8 h-full bg-white/95 border-spa-sage-200 hover:border-spa-gold-400/60 transition-all duration-500 hover:shadow-luxury-lg hover:scale-[1.02] hover:bg-white"
                blur="sm"
                opacity={0.95}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-spa-gold-600 to-spa-gold-700 rounded-2xl mb-6 group-hover:scale-110 group-hover:shadow-gold transition-all duration-500 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-3 group-hover:text-spa-gold-700 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1.5 text-xs font-medium bg-spa-gold-50 text-spa-gold-700 rounded-full border border-spa-gold-200/50 group-hover:bg-spa-gold-100 transition-colors duration-300"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Duration and Price */}
                <div className="flex items-center justify-between text-sm text-stone-600 mb-8">
                  <div className="flex items-center space-x-2 font-medium">
                    <ClockIcon className="h-4 w-4 text-spa-gold-600" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-spa-sage-800 font-display">
                    {service.price}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    const serviceUrl = getMangoMintServiceUrl(service.name)
                    window.location.href = serviceUrl
                  }}
                >
                  Book This Service
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div
          className="text-center mt-20 relative"
        >
          <Button variant="luxury" size="lg" className="px-12 shadow-luxury hover:shadow-luxury-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}