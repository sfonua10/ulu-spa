'use client'

import { useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { CheckIcon } from '@heroicons/react/24/outline'

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
    bestValue: false
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
    retailDiscount: 10,
    bundleDiscount: 10,
    statedValue: 155,
    annualSavings: 420,
    features: [
      '1 × 60-minute session per month',
      'Choose from 4 signature services',
      '$25 monthly spa credit',
      '10% off retail products',
      '10% off ULU Ultimate Experience bundle',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: true,
    bestValue: false
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
    retailDiscount: 10,
    bundleDiscount: 10,
    statedValue: 200,
    annualSavings: 492,
    features: [
      '1 × 75-minute session per month',
      'Choose from 4 signature services',
      '$25 monthly spa credit',
      '10% off retail products',
      '10% off ULU Ultimate Experience bundle',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: false,
    bestValue: false
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
    retailDiscount: 10,
    bundleDiscount: 10,
    statedValue: 250,
    annualSavings: 660,
    features: [
      '1 × 90-minute session per month',
      'Choose from 4 signature services',
      '$30 monthly spa credit',
      '10% off retail products',
      '10% off ULU Ultimate Experience bundle',
      'Month-to-month billing',
      'Cancel anytime'
    ],
    popular: false,
    bestValue: true
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

const benefits = [
  {
    title: 'Consistent Wellness',
    description: 'Regular sessions ensure lasting stress relief and hair health benefits',
    icon: '🌱'
  },
  {
    title: 'Significant Savings',
    description: 'Save up to 30% compared to individual session pricing',
    icon: '💰'
  },
  {
    title: 'Priority Access',
    description: 'Skip the waiting list with member-exclusive booking privileges',
    icon: '⚡'
  },
  {
    title: 'Personalized Care',
    description: 'Tailored treatments based on your wellness journey and preferences',
    icon: '✨'
  }
]

export default function MembershipsPage() {
  const handleBookMembership = () => {
    if (typeof window !== 'undefined' && window.Mangomint?.show) {
      window.Mangomint.show()
    }
  }

  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-spa-gold-50 via-white to-spa-sage-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="text-center animate-in animate-fade-in animate-slide-up animate-slow"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-spa-gold-100 text-spa-gold-800 text-sm font-medium mb-6">
              💎 Exclusive Membership Benefits 💎
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-spa-sage-800 mb-6">
              Invest in Your
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Wellness Journey
              </span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Transform your wellness routine with our membership plans designed to provide
              consistent care, significant savings, and exclusive benefits. All memberships are month-to-month with the freedom to cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberships.map((membership, index) => (
              <div
                key={membership.id}
                className="relative group animate-in animate-fade-in animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 h-full relative ${
                  membership.popular || membership.bestValue
                    ? 'ring-2 ring-spa-gold-400 border-spa-gold-200'
                    : 'border border-spa-sage-100 hover:border-spa-sage-200'
                }`}>
                  {/* Corner Ribbon Badge */}
                  {(membership.popular || membership.bestValue) && (
                    <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
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
                  <div className="space-y-4 mb-8">
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
                    className="w-full text-lg py-4 font-semibold"
                    onClick={handleBookMembership}
                  >
                    {membership.popular || membership.bestValue ? "Get Started" : "Choose Plan"}
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
          <div className="text-center mb-12 scroll-animate">
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
                  className="relative group animate-in animate-fade-in animate-slide-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 h-full relative border ${borderClasses}`}>
                    {/* Corner Ribbon Badge */}
                    <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                      <div className={`absolute top-6 right-[-32px] w-40 text-center py-2 text-xs font-bold text-white shadow-lg transform rotate-45 bg-gradient-to-r ${gradientClasses}`}>
                        {addOn.duration} MIN
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <div className="text-4xl font-bold text-spa-sage-800 mb-2">
                        ${addOn.price}
                        <span className="text-lg font-normal text-stone-600">/month</span>
                      </div>
                      <p className="text-stone-600 text-sm mb-6">
                        {addOn.description}
                      </p>
                      <Button
                        variant={addOn.duration === 90 ? "luxury" : "outline"}
                        className="w-full"
                        onClick={handleBookMembership}
                      >
                        Add to Plan
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-stone-600 italic">
              Note: Spa credits and retail discounts remain with the primary membership holder
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="text-center mb-16 scroll-animate"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Membership?
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our membership program is designed to support your long-term wellness goals 
              with exclusive benefits and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-spa-sage-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="text-center mb-16 scroll-animate"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div
            className="space-y-6 scroll-animate"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">Can I change my membership plan?</h3>
              <p className="text-stone-600">Yes, you can upgrade or downgrade your membership at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">What happens to unused spa credits?</h3>
              <p className="text-stone-600">Unused spa credits expire after 3 months, so be sure to use them for treatments, upgrades, or retail products before they expire.</p>
            </div>
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">Can I cancel my membership?</h3>
              <p className="text-stone-600">Yes! All memberships are month-to-month with the freedom to cancel anytime. No long-term commitments required.</p>
            </div>
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">What services are included?</h3>
              <p className="text-stone-600">Choose from Scalp Treatment, Scratch Therapy, Facial, or Blowout depending on your membership tier. Each session is customized to your preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="space-y-8 scroll-animate"
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
              <Button variant="luxury" size="lg" className="px-12 font-semibold">
                Start Membership
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/20 hover:text-white px-12 font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}