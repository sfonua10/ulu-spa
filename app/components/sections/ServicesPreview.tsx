'use client'

import { useInView, useStaggeredInView } from '@/app/hooks/useInView'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
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
    <section id="services-preview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            Our Signature Services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-emerald-800 mb-6">
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
                className="p-8 h-full bg-white/95 border-emerald-100 hover:border-emerald-200 transition-colors duration-300"
                blur="sm"
                opacity={0.95}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-emerald-800 mb-4">
                  {service.name}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Duration and Price */}
                <div className="flex items-center justify-between text-sm text-stone-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-800">
                    {service.price}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                >
                  Book This Service
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div
          className="text-center mt-16"
        >
          <Button variant="luxury" size="lg" className="px-12">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}