'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { 
  UserGroupIcon,
  CalendarDaysIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon,
  CheckIcon,
  UsersIcon,
  GiftIcon
} from '@heroicons/react/24/outline'

const groupPackages = [
  {
    id: 'couples',
    name: 'Couples Retreat',
    description: 'Intimate relaxation experience for two',
    groupSize: '2 people',
    duration: '90 minutes',
    price: 320,
    includes: [
      'Private couples suite',
      'Side-by-side treatments',
      'Champagne service',
      'Romantic ambiance',
      'Photo keepsake',
      'Extended relaxation time'
    ],
    perfect: ['Date nights', 'Anniversaries', 'Special occasions', 'Reconnecting'],
    image: '💑'
  },
  {
    id: 'friends',
    name: 'Friends Gathering',
    description: 'Perfect for birthdays, celebrations, or just quality time',
    groupSize: '3-4 people',
    duration: '75 minutes',
    price: 150,
    priceUnit: 'per person',
    includes: [
      'Shared treatment room',
      'Synchronized services',
      'Group consultation',
      'Celebration refreshments',
      'Group photo session',
      'Personalized aromatherapy'
    ],
    perfect: ['Birthdays', 'Bachelorette parties', 'Friendship celebrations', 'Stress relief'],
    image: '👭'
  },
  {
    id: 'team',
    name: 'Corporate Wellness',
    description: 'Team building through shared relaxation',
    groupSize: '5-8 people',
    duration: '60 minutes',
    price: 125,
    priceUnit: 'per person',
    includes: [
      'Large group suite',
      'Team wellness consultation',
      'Stress management session',
      'Healthy refreshments',
      'Wellness take-home kit',
      'Follow-up wellness tips'
    ],
    perfect: ['Team building', 'Quarterly retreats', 'Employee appreciation', 'Stress reduction'],
    image: '👥'
  },
  {
    id: 'family',
    name: 'Family Bonding',
    description: 'Multi-generational wellness experience',
    groupSize: '4-6 people',
    duration: '75 minutes',
    price: 140,
    priceUnit: 'per person',
    includes: [
      'Family-friendly environment',
      'Age-appropriate treatments',
      'Bonding activities',
      'Healthy snacks for all ages',
      'Family wellness education',
      'Memory photo package'
    ],
    perfect: ['Family reunions', 'Multi-generational bonding', 'Special occasions', 'Wellness education'],
    image: '👨‍👩‍👧‍👦'
  }
]

const specialEvents = [
  {
    title: 'Bridal Party Packages',
    description: 'Make your special day even more memorable with our bridal wellness packages',
    features: ['Pre-wedding stress relief', 'Group hair health treatments', 'Celebration photography', 'Champagne toast'],
    icon: '👰'
  },
  {
    title: 'Corporate Retreats',
    description: 'Enhance team productivity and morale with our corporate wellness programs',
    features: ['Team building activities', 'Stress management workshops', 'Executive packages', 'Flexible scheduling'],
    icon: '🏢'
  },
  {
    title: 'Birthday Celebrations',
    description: 'Celebrate another year of life with the gift of wellness and relaxation',
    features: ['Birthday special treatments', 'Celebration refreshments', 'Group photo sessions', 'Personalized experience'],
    icon: '🎂'
  }
]

export default function GroupBookingsPage() {
  const [selectedPackage, setSelectedPackage] = useState('friends')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    preferredDate: '',
    preferredTime: '',
    package: 'friends',
    specialRequests: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-spa-cream-50 via-white to-spa-sage-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-spa-sage-100 text-spa-sage-800 text-sm font-medium mb-6">
              👥 Share the Serenity 👥
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-spa-sage-800 mb-6">
              Group Wellness
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed">
              Share the gift of tranquility with your loved ones, colleagues, or friends. 
              Our group experiences create lasting memories while promoting collective wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Group Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Choose Your Perfect
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Group Experience
              </span>
            </h2>
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed">
              Each package is thoughtfully designed to accommodate different group dynamics 
              and create meaningful shared wellness moments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {groupPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className={`bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 h-full border ${
                  selectedPackage === pkg.id 
                    ? 'border-spa-gold-400 ring-2 ring-spa-gold-200' 
                    : 'border-spa-sage-100 hover:border-spa-sage-200'
                }`}>
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{pkg.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-spa-stone-600">{pkg.description}</p>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-spa-sage-50 rounded-2xl">
                    <div className="text-center">
                      <UsersIcon className="h-6 w-6 text-spa-sage-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-spa-sage-800">{pkg.groupSize}</div>
                    </div>
                    <div className="text-center">
                      <ClockIcon className="h-6 w-6 text-spa-sage-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-spa-sage-800">{pkg.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-spa-sage-800">${pkg.price}</div>
                      {pkg.priceUnit && <div className="text-xs text-spa-stone-600">{pkg.priceUnit}</div>}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-spa-sage-800 mb-3">Package Includes:</h4>
                    <div className="space-y-2">
                      {pkg.includes.map((item) => (
                        <div key={item} className="flex items-start space-x-2">
                          <CheckIcon className="h-4 w-4 text-spa-sage-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-spa-stone-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Perfect For */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-spa-sage-800 mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.perfect.map((occasion) => (
                        <span
                          key={occasion}
                          className="px-3 py-1 text-xs font-medium bg-spa-gold-100 text-spa-gold-800 rounded-full"
                        >
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={selectedPackage === pkg.id ? "luxury" : "outline"}
                    className="w-full"
                  >
                    {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Special Event
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed">
              Make your special occasions even more memorable with our customized event packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-spa-sage-100 hover:border-spa-gold-200"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-spa-stone-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {event.features.map((feature) => (
                      <div key={feature} className="flex items-center justify-center space-x-2">
                        <CheckIcon className="h-4 w-4 text-spa-sage-600" />
                        <span className="text-sm text-spa-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Book Your Group
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-spa-stone-600 leading-relaxed">
              Ready to create lasting memories? Let us know your preferences and we&apos;ll create the perfect experience for your group.
            </p>
            </div>

          <div className="bg-gradient-to-br from-spa-sage-50 to-spa-cream-50 rounded-3xl p-8 shadow-soft">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Group Size *
                  </label>
                  <select
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select group size</option>
                    <option value="2">2 people</option>
                    <option value="3-4">3-4 people</option>
                    <option value="5-6">5-6 people</option>
                    <option value="7-8">7-8 people</option>
                    <option value="8+">8+ people</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select time preference</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  Package Selection *
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="couples">Couples Retreat</option>
                  <option value="friends">Friends Gathering</option>
                  <option value="team">Corporate Wellness</option>
                  <option value="family">Family Bonding</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  Special Requests or Occasions
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Let us know if you're celebrating something special or have any specific requests..."
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <div className="text-center pt-6">
                <Button variant="luxury" size="lg" className="px-12">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Request Group Booking
                </Button>
                <p className="text-sm text-spa-stone-600 mt-4">
                  We&apos;ll contact you within 24 hours to confirm your booking details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}