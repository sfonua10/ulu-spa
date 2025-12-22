'use client'

import { Button } from '../components/ui/Button'
import { CheckIcon } from '@heroicons/react/24/outline'
import VideoBackground from '../components/ui/VideoBackground'
import { useInView } from '../hooks/useInView'

const memberships = [
  {
    id: 'express',
    name: 'Express Membership',
    description: 'Quick refreshing sessions for busy schedules',
    price: 109,
    sessionCount: 2,
    sessionDuration: 30,
    sessionTypes: ['Scalp', 'Scratch', 'Blowout'],
    statedValue: 140,
    annualSavings: 372,
    features: [
      '2 × 30-minute sessions per month',
      'Choose from Scalp, Scratch, or Blowout',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: false,
    bestValue: false,
    mangomintUrl: 'https://clients.mangomint.com/uluspa/memberships/13'
  },
  {
    id: 'classic',
    name: 'Classic Island Signature',
    description: 'The perfect balance of luxury and value',
    price: 120,
    sessionCount: 1,
    sessionDuration: 60,
    sessionTypes: ['Scalp Treatment', 'Scratch Therapy', 'Facial', 'Blowout'],
    monthlyCredit: 25,
    statedValue: 155,
    annualSavings: 420,
    features: [
      '1 × 60-minute session per month',
      'Choose from 4 signature services',
      '$25 monthly spa credit',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: true,
    bestValue: false,
    mangomintUrl: 'https://clients.mangomint.com/uluspa/memberships/12'
  },
  {
    id: 'deluxe',
    name: 'Tropical Deluxe',
    description: 'Extended sessions for deeper relaxation',
    price: 159,
    sessionCount: 1,
    sessionDuration: 75,
    sessionTypes: ['Scalp Treatment', 'Scratch Therapy', 'Facial', 'Blowout'],
    monthlyCredit: 25,
    statedValue: 200,
    annualSavings: 492,
    features: [
      '1 × 75-minute session per month',
      'Choose from 4 signature services',
      '$25 monthly spa credit',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: false,
    bestValue: false,
    mangomintUrl: 'https://clients.mangomint.com/uluspa/memberships/11'
  },
  {
    id: 'vip',
    name: 'ULU VIP Membership',
    description: 'Ultimate luxury and maximum savings',
    price: 195,
    sessionCount: 1,
    sessionDuration: 90,
    sessionTypes: ['Scalp Treatment', 'Scratch Therapy', 'Facial', 'Blowout'],
    monthlyCredit: 30,
    statedValue: 250,
    annualSavings: 660,
    features: [
      '1 × 90-minute session per month',
      'Choose from 4 signature services',
      '$30 monthly spa credit',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: false,
    bestValue: true,
    mangomintUrl: 'https://clients.mangomint.com/uluspa/memberships/10'
  }
]

const familyAddOns = [
  {
    id: 'family-60',
    duration: 60,
    price: 109,
    description: 'Additional 60-minute session for family members'
  },
  {
    id: 'family-75',
    duration: 75,
    price: 150,
    description: 'Additional 75-minute session for family members'
  },
  {
    id: 'family-90',
    duration: 90,
    price: 185,
    description: 'Additional 90-minute session for family members'
  }
]

export default function MembershipsPage() {
  // Use React hooks for scroll animations instead of direct DOM manipulation
  const { ref: familyHeaderRef, isInView: familyHeaderInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  return (
    <div className="pb-16">
      {/* Image Hero Section */}
      <VideoBackground
        videoSrc=""
        fallbackImage="/images/services/tropical-serentity.png"
        className="min-h-[60vh] relative"
        overlay={true}
        overlayOpacity={0.3}
        priority={true}
      >
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-spa-gold-100/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-spa-sage-100/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-luxury-warm-200/10 rounded-full blur-2xl animate-float-reverse"></div>
        </div>

        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Membership Plans
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Invest in your wellness journey with exclusive benefits and significant savings
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberships.map((membership, index) => (
              <div
                key={membership.id}
                className="relative group animate-in animate-fade-in animate-slide-up hover-lift overflow-hidden rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 h-full relative flex flex-col ${
                  membership.popular || membership.bestValue
                    ? 'ring-2 ring-spa-gold-500 border-2 border-spa-gold-400'
                    : 'border border-spa-sage-100 hover:border-spa-sage-200'
                }`}>
                  {/* Corner Ribbon Badge */}
                  {(membership.popular || membership.bestValue) && (
                    <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none rounded-3xl">
                      <div className={`absolute top-6 right-[-32px] w-40 text-center py-2 text-xs font-bold text-white shadow-lg transform rotate-45 ${
                        membership.popular
                          ? 'bg-gradient-to-r from-spa-gold-500 to-spa-gold-600'
                          : 'bg-gradient-to-r from-spa-sage-600 to-spa-sage-700'
                      }`}>
                        {membership.popular ? 'MOST POPULAR' : 'BEST VALUE'}
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-2">
                      {membership.name}
                    </h3>
                    <p className="text-stone-600">
                      {membership.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-spa-sage-800 mb-2">
                      ${membership.price}
                      <span className="text-lg font-normal text-stone-600">/month</span>
                    </div>
                    <div className="space-y-1 mt-3">
                      <div className="text-stone-600 text-sm">
                        Value: ${membership.statedValue}
                      </div>
                      <div className="text-spa-gold-600 font-semibold text-sm">
                        Annual savings: ${membership.annualSavings}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 flex-grow">
                    {membership.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckIcon className="h-5 w-5 text-spa-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant={membership.popular || membership.bestValue ? "luxury" : "outline"}
                    className="w-full text-lg py-4 font-semibold mt-8"
                    onClick={() => membership.mangomintUrl && (window.location.href = membership.mangomintUrl)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Add-On Section */}
      <section className="py-16 bg-gradient-to-br from-spa-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={familyHeaderRef}
            className={`text-center mb-12 transition-all duration-700 ${
              familyHeaderInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Family Add-On
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Memberships
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Add additional sessions for family members. Credits and perks remain with primary membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {familyAddOns.map((addOn, index) => {
              // Define gradient colors based on tier
              const gradientClasses =
                addOn.duration === 60
                  ? 'from-spa-sage-600 to-spa-sage-700'
                  : addOn.duration === 75
                  ? 'from-spa-sage-600 to-spa-gold-500'
                  : 'from-spa-gold-500 to-spa-gold-600'

              const borderClasses =
                addOn.duration === 90
                  ? 'ring-2 ring-spa-gold-400/50 border-spa-gold-200'
                  : addOn.duration === 75
                  ? 'border-spa-sage-200 hover:border-spa-gold-300'
                  : 'border-spa-sage-100 hover:border-spa-sage-200'

              return (
                <div
                  key={addOn.id}
                  className="relative group animate-in animate-fade-in animate-slide-up hover-lift overflow-hidden rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 h-full relative border flex flex-col ${borderClasses}`}>
                    {/* Corner Ribbon Badge */}
                    <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none rounded-2xl">
                      <div className={`absolute top-6 right-[-32px] w-40 text-center py-2 text-xs font-bold text-white shadow-lg transform rotate-45 bg-gradient-to-r ${gradientClasses}`}>
                        {addOn.duration} MIN
                      </div>
                    </div>

                    <div className="text-center mt-4 flex-grow flex flex-col">
                      <div className="text-4xl font-bold text-spa-sage-800 mb-2">
                        ${addOn.price}
                        <span className="text-lg font-normal text-stone-600">/month</span>
                      </div>
                      <p className="text-stone-600 text-sm mb-6 flex-grow">
                        {addOn.description}
                      </p>
                      <a
                        href="https://booking.mangomint.com/904811"
                        className="mangomint-booking-button block"
                      >
                        <Button
                          variant={addOn.duration === 90 ? "luxury" : "outline"}
                          className="w-full"
                        >
                          Add to Plan
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-stone-600 italic">
              Note: Spa credits remain with the primary membership holder
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            ref={ctaRef}
            className={`space-y-8 transition-all duration-700 ${
              ctaInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-spa-gold-400 to-spa-gold-300 bg-clip-text text-transparent">
                Your Wellness?
              </span>
            </h2>
            <p className="text-xl text-spa-sage-200 leading-relaxed">
              Start your membership today and take the first step toward lasting wellness. 
              Your future self will thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.mangomint.com/904811"
                className="mangomint-booking-button"
              >
                <Button
                  variant="luxury"
                  size="lg"
                  className="px-12 font-semibold"
                >
                  Start Membership
                </Button>
              </a>
              <a href="tel:+18015287368">
                <Button variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/20 hover:text-white px-12 font-semibold w-full">
                  Call for Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}