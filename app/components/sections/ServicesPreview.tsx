'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/Button'
import LuxuryServiceCard from '../ui/LuxuryServiceCard'
import ServiceDetailModal from '../ui/ServiceDetailModal'
import { getMangoMintServiceUrl } from '@/app/utils/mangomint-urls'
import { services } from '@/app/data/services'
import { CheckIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

// Get featured experience from services data (single source of truth)
const featuredExperience = services.find(s => s.id === 32)! // ULU Ultimate Escape

// Get curated services from services data with component-specific badge types
const curatedServiceIds = [4, 7, 10] // Royal Escape, Pure Unwind, Island Renewal
const badgeTypes: Record<number, 'value' | 'signature'> = {
  4: 'value',
  7: 'signature',
  10: 'signature'
}
const curatedServices = curatedServiceIds.map(id => ({
  ...services.find(s => s.id === id)!,
  badgeType: badgeTypes[id]
}))

type ServiceType = typeof services[number] & { badgeType?: 'value' | 'signature' }

export default function ServicesPreview() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)

  return (
    <section id="services-preview" className="py-24 bg-gradient-to-b from-spa-gold-50/50 via-white to-spa-sage-50/30 relative overflow-hidden">
      {/* Premium background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-spa-gold-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-spa-gold-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-spa-cream-200/40 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-spa-gold-300/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-spa-gold-300/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold mb-6 shadow-gold border border-spa-gold-400">
            <StarIconSolid className="h-4 w-4" />
            <span className="uppercase tracking-wider">Experience ULU</span>
            <StarIconSolid className="h-4 w-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
            Your Journey to Relaxation
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From our signature ultimate escape to individual treatments,
            discover the perfect experience for your needs.
          </p>
        </div>

        {/* Featured Hero Bundle */}
        <div className="mb-20">
          <div
            className="relative group cursor-pointer"
            onClick={() => setSelectedService(featuredExperience)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedService(featuredExperience)
              }
            }}
          >
            {/* Gold Gradient Border */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-spa-gold-400 via-spa-gold-500 to-spa-gold-600 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Card */}
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-72 md:h-auto md:min-h-96 overflow-hidden">
                  <Image
                    src={featuredExperience.imageUrl}
                    alt={`${featuredExperience.name} at ULU Spa`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: featuredExperience.focusArea }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                  {/* Premium Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 rounded-full shadow-gold">
                    <StarIconSolid className="h-4 w-4 text-white" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Ultimate ULU Experience
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white via-spa-gold-50/30 to-spa-cream-50/50">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-spa-gold-600 bg-spa-gold-100 px-3 py-1 rounded-full">
                      {featuredExperience.duration}
                    </span>
                    <span className="text-sm text-stone-500">•</span>
                    <span className="text-sm font-semibold text-stone-600">
                      Our Flagship Experience
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-spa-sage-800 mb-4">
                    {featuredExperience.name}
                  </h3>

                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    {featuredExperience.shortDesc}
                  </p>

                  {/* Includes */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {featuredExperience.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-spa-gold-500 flex-shrink-0" />
                        <span className="text-sm text-stone-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-4xl font-display font-bold text-spa-sage-800">
                        ${featuredExperience.price}
                      </span>
                    </div>
                    <Button
                      variant="luxury"
                      size="lg"
                      className="px-8 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-600 hover:to-spa-gold-700 shadow-gold hover:shadow-gold-lg border border-spa-gold-500"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = getMangoMintServiceUrl(featuredExperience.name)
                      }}
                    >
                      Book Experience
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider - Start Your Journey */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-spa-gold-300" />
          <span className="text-lg font-display font-medium text-spa-sage-600 tracking-wide">
            Start Your Journey
          </span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-spa-gold-300" />
        </div>

        {/* Individual Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curatedServices.map((service, index) => (
            <LuxuryServiceCard
              key={service.id}
              service={service}
              priority={index === 0}
              badgeType={service.badgeType}
              onViewDetails={() => setSelectedService(service)}
              onBook={() => {
                window.location.href = getMangoMintServiceUrl(service.name)
              }}
            />
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
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
            window.location.href = getMangoMintServiceUrl(selectedService.name)
          }}
        />
      )}
    </section>
  )
}
