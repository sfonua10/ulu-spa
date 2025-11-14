'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import {
  CalendarDaysIcon,
  ClockIcon,
  CheckIcon,
  UsersIcon,
  ChevronDownIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

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
    image: '/images/group-packages/couples.jpg',
    cardNumber: '01',
    faq: {
      question: 'What to expect?',
      answer: 'Your couples experience begins with a private consultation to customize your treatments. Enjoy side-by-side head spa services in our luxurious couples suite, complete with ambient lighting and soothing music. Following your treatments, unwind with champagne and light refreshments in your private relaxation area.'
    }
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
    image: '/images/group-packages/friends.jpg',
    cardNumber: '02',
    isPopular: true,
    faq: {
      question: 'What to expect?',
      answer: 'Gather your best friends for a synchronized wellness experience. Your group will enjoy treatments together in our spacious shared suite, with services timed to create a cohesive bonding experience. Celebrate with refreshments and capture memories with a professional group photo session.'
    }
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
    image: '/images/group-packages/corporate.jpg',
    cardNumber: '03',
    faq: {
      question: 'What to expect?',
      answer: 'Transform your team dynamics with our corporate wellness package. Begin with a group wellness consultation focused on stress management techniques. Your team will experience synchronized head spa treatments designed to promote relaxation and mindfulness. Each member receives a wellness kit and follow-up resources for ongoing self-care.'
    }
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
    image: '/images/group-packages/family.jpg',
    cardNumber: '04',
    faq: {
      question: 'What to expect?',
      answer: 'Bring the whole family together for a multi-generational wellness journey. Our family-friendly approach includes age-appropriate treatments tailored to each member. Engage in bonding activities designed to promote connection and wellness awareness. Conclude with healthy refreshments and a family photo package to preserve these special memories.'
    }
  }
]

const specialEvents = [
  {
    title: 'Bridal Party Packages',
    description: 'Make your special day even more memorable with our bridal wellness packages',
    features: ['Pre-wedding stress relief', 'Group hair health treatments', 'Celebration photography', 'Champagne toast'],
    gradient: 'from-pink-100 to-rose-50'
  },
  {
    title: 'Corporate Retreats',
    description: 'Enhance team productivity and morale with our corporate wellness programs',
    features: ['Team building activities', 'Stress management workshops', 'Executive packages', 'Flexible scheduling'],
    gradient: 'from-blue-100 to-indigo-50'
  },
  {
    title: 'Birthday Celebrations',
    description: 'Celebrate another year of life with the gift of wellness and relaxation',
    features: ['Birthday special treatments', 'Celebration refreshments', 'Group photo sessions', 'Personalized experience'],
    gradient: 'from-purple-100 to-violet-50'
  }
]

// Package Card Component
interface PackageCardProps {
  pkg: typeof groupPackages[0]
  isSelected: boolean
  onClick: () => void
}

function PackageCard({ pkg, isSelected, onClick }: PackageCardProps) {
  const [isFaqExpanded, setIsFaqExpanded] = useState(false)

  return (
    <div
      className={`group-card cursor-pointer h-full ${isSelected ? 'golden-glow-border active' : 'golden-glow-border'}`}
      onClick={onClick}
    >
      <div
        className={`bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 p-0 h-full border overflow-hidden ${
          isSelected
            ? 'border-spa-gold-400 ring-2 ring-spa-gold-200'
            : 'border-spa-sage-100 hover:border-spa-sage-200'
        }`}
      >
        {/* Image Header */}
        <div className="relative h-56 group-card-image">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Card Number Badge */}
          <div className="absolute top-4 right-4 card-number-badge bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-lg font-display font-bold bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
              {pkg.cardNumber}
            </span>
          </div>

          {/* Most Popular Badge */}
          {pkg.isPopular && (
            <div className="absolute top-4 left-4 most-popular-badge bg-spa-gold-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
              <SparklesIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Most Popular</span>
            </div>
          )}

          {/* Price Badge - Bottom Right of Image */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="price-highlight text-2xl font-bold text-spa-sage-800">
                ${pkg.price}
              </div>
              {pkg.priceUnit && (
                <div className="text-xs text-spa-stone-600">{pkg.priceUnit}</div>
              )}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="gold-underline text-2xl font-display font-bold text-spa-sage-800 mb-2">
              {pkg.name}
            </h3>
            <p className="text-spa-stone-600 leading-relaxed">{pkg.description}</p>
          </div>

          {/* Package Details */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-spa-sage-50 rounded-2xl">
            <div className="flex items-center space-x-3">
              <UsersIcon className="h-5 w-5 text-spa-sage-600 flex-shrink-0" />
              <div className="text-sm font-medium text-spa-sage-800">{pkg.groupSize}</div>
            </div>
            <div className="flex items-center space-x-3">
              <ClockIcon className="h-5 w-5 text-spa-sage-600 flex-shrink-0" />
              <div className="text-sm font-medium text-spa-sage-800">{pkg.duration}</div>
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
                  className="tag-shimmer px-3 py-1 text-xs font-medium bg-spa-gold-100 text-spa-gold-800 rounded-full"
                >
                  {occasion}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-6 border-t border-spa-sage-100 pt-6">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsFaqExpanded(!isFaqExpanded)
              }}
              className="w-full flex items-center justify-between text-left group/faq"
            >
              <h4 className="font-semibold text-spa-sage-800 group-hover/faq:text-spa-gold-600 transition-colors">
                {pkg.faq.question}
              </h4>
              <ChevronDownIcon className={`h-5 w-5 text-spa-sage-600 faq-icon ${isFaqExpanded ? 'expanded' : ''}`} />
            </button>
            <div
              className={`faq-content ${isFaqExpanded ? '' : 'collapsed'}`}
              style={{ maxHeight: isFaqExpanded ? '500px' : '0' }}
            >
              <p className="text-sm text-spa-stone-700 leading-relaxed pt-4">
                {pkg.faq.answer}
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button variant={isSelected ? 'luxury' : 'outline'} className="w-full">
            {isSelected ? 'Selected' : 'Select Package'}
          </Button>
        </div>
      </div>
    </div>
  )
}

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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-spa-sage-100 text-spa-sage-800 text-sm font-medium mb-6 border border-spa-sage-200">
              <UsersIcon className="h-4 w-4 text-spa-sage-600" />
              <span>Share the Serenity</span>
              <UsersIcon className="h-4 w-4 text-spa-sage-600" />
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
            {groupPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                isSelected={selectedPackage === pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
              />
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
                className="group luxury-hover bg-white rounded-3xl overflow-hidden shadow-soft border border-spa-sage-100 hover:border-spa-gold-200"
              >
                {/* Gradient Header */}
                <div className={`h-24 bg-gradient-to-br ${event.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-500/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spa-gold-400 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 -mt-8 relative">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-spa-gold-200">
                    <SparklesIcon className="h-8 w-8 text-spa-gold-600" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-3 text-center">
                    {event.title}
                  </h3>
                  <p className="text-spa-stone-600 mb-6 leading-relaxed text-center">
                    {event.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {event.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <CheckIcon className="h-4 w-4 text-spa-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-spa-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
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

          <div
            className="bg-gradient-to-br from-spa-sage-50 to-spa-cream-50 rounded-3xl p-8 shadow-soft"
          >
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
                    <option value="" disabled selected>Select group size</option>
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