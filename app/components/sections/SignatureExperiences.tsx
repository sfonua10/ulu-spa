'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'
import SignatureExperienceCard from '../ui/SignatureExperienceCard'
import ServiceDetailModal from '../ui/ServiceDetailModal'
import { getMangoMintServiceUrl } from '@/app/utils/mangomint-urls'
import { services } from '@/app/data/services'
import { StarIcon } from '@heroicons/react/24/solid'

// Get signature experience services from the main services list
const signatureExperiences = services.filter(
  service => service.category === 'signature-experience'
)

export default function SignatureExperiences() {
  const [selectedService, setSelectedService] = useState<typeof signatureExperiences[number] | null>(null)

  return (
    <section id="signature-experiences" className="py-24 bg-gradient-to-b from-spa-gold-50/50 via-white to-spa-cream-50/40 relative overflow-hidden">
      {/* Premium gold background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-spa-gold-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-spa-gold-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-spa-cream-200/40 rounded-full blur-2xl animate-pulse-slow" />
        {/* Subtle gold lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-spa-gold-300/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-spa-gold-300/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold mb-6 shadow-gold border border-spa-gold-400">
            <StarIcon className="h-4 w-4" />
            <span className="uppercase tracking-wider">Ultimate ULU Experiences</span>
            <StarIcon className="h-4 w-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
            Curated Wellness Journeys
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Indulge in our carefully crafted multi-treatment experiences.
            Each journey combines our most beloved services for complete relaxation and renewal.
          </p>
        </div>

        {/* Experiences Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {signatureExperiences.map((service, index) => (
            <SignatureExperienceCard
              key={service.id}
              service={service}
              priority={index === 0}
              onViewDetails={() => setSelectedService(service)}
              onBook={() => {
                const serviceUrl = getMangoMintServiceUrl(service.name)
                window.location.href = serviceUrl
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/services?category=signature-experience">
            <Button
              variant="luxury"
              size="lg"
              className="px-12 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-600 hover:to-spa-gold-700 shadow-gold hover:shadow-gold-lg border border-spa-gold-500"
            >
              Explore All Experiences
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
