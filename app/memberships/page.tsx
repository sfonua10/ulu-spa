'use client'

import { useInView, useStaggeredInView } from '../hooks/useInView'
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { 
  CheckIcon, 
  XMarkIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const memberships = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'Perfect for newcomers to regular wellness',
    price: {
      monthly: 89,
      annually: 890
    },
    sessions: 2,
    validity: '1 month',
    features: [
      '2 signature scalp massages per month',
      '10% discount on additional services',
      'Basic stress relief session included',
      'Online booking priority',
      'Email wellness tips',
      'Complimentary consultation'
    ],
    notIncluded: [
      'Premium service access',
      'Group session discounts',
      'Gift card bonuses',
      'VIP booking privileges'
    ],
    popular: false,
    color: 'sage',
    icon: SparklesIcon
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'The most popular choice for regular wellness',
    price: {
      monthly: 159,
      annually: 1590
    },
    sessions: 4,
    validity: '1 month',
    features: [
      '4 signature scalp massages per month',
      '20% discount on all additional services',
      'Access to premium treatments',
      'Priority booking privileges',
      'Complimentary stress relief session monthly',
      'Personal wellness consultation',
      'Wellness newsletter & tips',
      '15% discount on group bookings',
      'Monthly aromatherapy selection',
      'Flexible session rollover (up to 2)'
    ],
    notIncluded: [
      'VIP concierge service',
      'Unlimited guest privileges'
    ],
    popular: true,
    color: 'gold',
    icon: StarIcon
  },
  {
    id: 'luxury',
    name: 'Luxury VIP',
    description: 'Ultimate wellness experience for spa enthusiasts',
    price: {
      monthly: 279,
      annually: 2790
    },
    sessions: 8,
    validity: '1 month',
    features: [
      '8 signature treatments per month',
      '25% discount on all services',
      'Unlimited access to all treatments',
      'VIP concierge booking service',
      'Complimentary couples session monthly',
      'Personal wellness coach',
      'Exclusive member events access',
      'Guest privileges (2 complimentary sessions)',
      'Premium aromatherapy collection',
      'Flexible session banking (up to 4)',
      'Birthday celebration package',
      'First access to new treatments'
    ],
    notIncluded: [],
    popular: false,
    color: 'cream',
    icon: StarIcon
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
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState('premium')

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-spa-cream-50 via-white to-spa-sage-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your wellness routine with our membership plans designed to provide 
              consistent care, significant savings, and exclusive benefits.
            </p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white rounded-full p-1 shadow-soft border border-spa-sage-100"
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-spa-sage-600 text-white shadow-soft'
                    : 'text-spa-sage-600 hover:bg-spa-sage-50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                  billingCycle === 'annually'
                    ? 'bg-spa-sage-600 text-white shadow-soft'
                    : 'text-spa-sage-600 hover:bg-spa-sage-50'
                }`}
              >
                Annually
                <span className="absolute -top-2 -right-2 bg-spa-gold-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 h-full relative overflow-hidden ${
                  membership.popular 
                    ? 'ring-2 ring-spa-gold-400 border-spa-gold-200' 
                    : 'border border-spa-sage-100 hover:border-spa-sage-200'
                }`}>
                  {/* Popular Badge */}
                  {membership.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-glow">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${
                      membership.color === 'gold' 
                        ? 'from-spa-gold-500 to-spa-gold-600' 
                        : membership.color === 'cream'
                        ? 'from-spa-cream-500 to-spa-cream-600'
                        : 'from-spa-sage-500 to-spa-sage-600'
                    }`}>
                      <membership.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-2">
                      {membership.name}
                    </h3>
                    <p className="text-spa-stone-600">
                      {membership.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-spa-sage-800 mb-2">
                      ${billingCycle === 'monthly' ? membership.price.monthly : Math.floor(membership.price.annually / 12)}
                      <span className="text-lg font-normal text-spa-stone-600">/month</span>
                    </div>
                    {billingCycle === 'annually' && (
                      <div className="text-spa-stone-600 text-sm">
                        ${membership.price.annually} billed annually
                      </div>
                    )}
                    <div className="text-spa-gold-600 font-medium mt-2">
                      {membership.sessions} sessions included
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {membership.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckIcon className="h-5 w-5 text-spa-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-spa-stone-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {membership.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3 opacity-50">
                        <XMarkIcon className="h-5 w-5 text-spa-stone-400 flex-shrink-0 mt-0.5" />
                        <span className="text-spa-stone-500 text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={membership.popular ? "luxury" : "outline"}
                    className="w-full text-lg py-4"
                    onClick={() => setSelectedPlan(membership.id)}
                  >
                    {membership.popular ? "Get Started" : "Choose Plan"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Membership?
              </span>
            </h2>
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our membership program is designed to support your long-term wellness goals 
              with exclusive benefits and personalized care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-spa-sage-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-spa-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">Can I change my membership plan?</h3>
              <p className="text-spa-stone-600">Yes, you can upgrade or downgrade your membership at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">What happens to unused sessions?</h3>
              <p className="text-spa-stone-600">Premium and Luxury members can roll over unused sessions. Essential members sessions expire monthly, but we offer flexible rescheduling.</p>
            </div>
            <div className="bg-spa-sage-50 rounded-2xl p-6">
              <h3 className="font-semibold text-spa-sage-800 mb-2">Can I cancel my membership?</h3>
              <p className="text-spa-stone-600">Yes, you can cancel anytime with 30 days notice. Annual members receive a prorated refund for unused months.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-800 to-spa-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-spa-gold-400 to-spa-cream-300 bg-clip-text text-transparent">
                Your Wellness?
              </span>
            </h2>
            <p className="text-xl text-spa-sage-200 leading-relaxed">
              Start your membership today and take the first step toward lasting wellness. 
              Your future self will thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" className="px-12">
                Start Membership
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10 px-12">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}