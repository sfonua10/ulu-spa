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

const idealGroupTypes = [
  {
    id: 'corporate',
    name: 'Corporate Wellness Teams',
    description: 'Team building through shared relaxation and wellness',
    icon: '🏢',
    features: ['Team bonding', 'Stress relief', 'Employee wellness', 'Group relaxation']
  },
  {
    id: 'bridal',
    name: 'Bridal & Wedding Preparation',
    description: 'Perfect for bridal parties and wedding preparation groups',
    icon: '👰',
    features: ['Bridal parties', 'Wedding prep', 'Celebration relaxation', 'Group pampering']
  },
  {
    id: 'groomsmen',
    name: 'Groomsmen Relaxation Retreats',
    description: 'Relaxation and bonding experience for groomsmen',
    icon: '🤵',
    features: ['Bachelor parties', 'Pre-wedding relaxation', 'Group bonding', 'Stress relief']
  },
  {
    id: 'celebrations',
    name: 'Birthdays & Special Celebrations',
    description: 'Celebrate special moments with wellness and relaxation',
    icon: '🎉',
    features: ['Birthday celebrations', 'Anniversary parties', 'Special occasions', 'Memory making']
  },
  {
    id: 'friends',
    name: 'Friends\' Day Out',
    description: 'Quality time and bonding with your closest friends',
    icon: '👭',
    features: ['Friend bonding', 'Social wellness', 'Shared experiences', 'Quality time']
  },
  {
    id: 'wellness',
    name: 'Shared Wellness Rituals',
    description: 'Experience wellness and mindfulness together',
    icon: '🧘‍♀️',
    features: ['Mindfulness', 'Wellness education', 'Relaxation techniques', 'Shared healing']
  }
]

const specialEvents = [
  {
    title: 'Wedding Parties',
    description: 'Perfect for bridal parties and wedding preparation groups looking for shared relaxation',
    features: ['Bridal party treatments', 'Pre-wedding relaxation', 'Group preparation', 'Celebration wellness'],
    icon: '💒'
  },
  {
    title: 'Corporate Wellness',
    description: 'Team building through shared wellness experiences and stress management',
    features: ['Team bonding', 'Stress management', 'Employee wellness', 'Corporate retreats'],
    icon: '🏢'
  },
  {
    title: 'Couples Retreat',
    description: 'Intimate wellness experiences designed for couples seeking relaxation together',
    features: ['Couples bonding', 'Romantic wellness', 'Shared treatments', 'Intimate settings'],
    icon: '💕'
  },
  {
    title: 'Celebrations',
    description: 'Mark special occasions with wellness and relaxation experiences',
    features: ['Birthday celebrations', 'Anniversary wellness', 'Special occasions', 'Memory making'],
    icon: '🎉'
  },
  {
    title: 'Friends & Family',
    description: 'Quality bonding time through shared wellness experiences',
    features: ['Family bonding', 'Friend gatherings', 'Multi-generational wellness', 'Group experiences'],
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Special Events',
    description: 'Customized wellness experiences for unique occasions and celebrations',
    features: ['Custom experiences', 'Unique occasions', 'Personalized treatments', 'Special requests'],
    icon: '✨'
  }
]

export default function GroupBookingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    preferredDate: '',
    preferredTime: '',
    groupType: '',
    roomPreference: '',
    guestList: '',
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
      <section className="py-20 bg-gradient-to-br from-spa-gold-50 via-white to-spa-sage-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-spa-sage-100 text-spa-sage-800 text-sm font-medium mb-6">
              👥 Group Bookings 👥
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-spa-sage-800 mb-6">
              ULU Group Room
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Accommodates up to 4 guests in one tranquil space. Can be divided into two semi-private lounge suites. 
              3 additional private VIP treatment rooms available for a total capacity of 7 guests.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 text-white text-lg font-medium">
              Relax side by side. Reset deeply. Leave glowing.
            </div>
          </div>
        </div>
      </section>

      {/* Group Room Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Group Room
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our flexible group space is designed to accommodate various group sizes and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-display font-bold text-spa-sage-800 mb-6">
                Flexible Group Space
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-spa-sage-100 p-3 rounded-full">
                    <UsersIcon className="h-6 w-6 text-spa-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-sage-800 mb-2">Main Group Room</h4>
                    <p className="text-stone-600">Accommodates up to 4 guests in one tranquil space for shared relaxation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-spa-sage-100 p-3 rounded-full">
                    <SparklesIcon className="h-6 w-6 text-spa-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-sage-800 mb-2">Semi-Private Suites</h4>
                    <p className="text-stone-600">Can be divided into two semi-private lounge suites for more intimate experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-spa-sage-100 p-3 rounded-full">
                    <GiftIcon className="h-6 w-6 text-spa-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-sage-800 mb-2">Private VIP Rooms</h4>
                    <p className="text-stone-600">3 additional private VIP treatment rooms for individual attention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-spa-gold-100 p-3 rounded-full">
                    <CheckIcon className="h-6 w-6 text-spa-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-sage-800 mb-2">Total Capacity</h4>
                    <p className="text-stone-600">Maximum of 7 guests accommodated across all spaces</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 p-8 rounded-3xl">
              <h4 className="text-xl font-display font-bold text-spa-sage-800 mb-6 text-center">
                Group Booking Guidelines
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl">
                  <h5 className="font-semibold text-spa-sage-800 mb-2">For 8+ Guests</h5>
                  <p className="text-sm text-stone-600">Experience will be split into two waves to ensure optimal comfort and service quality</p>
                </div>
                <div className="bg-white p-4 rounded-2xl">
                  <h5 className="font-semibold text-spa-sage-800 mb-2">Guest List Required</h5>
                  <p className="text-sm text-stone-600">Please specify who wants group room treatment and who prefers private room service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Group Types */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Ideal for
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Every Group
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our group experiences are perfect for various occasions and group dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {idealGroupTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-spa-sage-100 hover:border-spa-gold-200"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-display font-bold text-spa-sage-800 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {type.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs font-medium bg-spa-sage-100 text-spa-sage-800 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
              Highlighted Group
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Experience Options
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular group wellness experiences tailored for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-spa-sage-100 hover:border-spa-gold-200"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-lg font-display font-bold text-spa-sage-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {event.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs font-medium bg-spa-sage-100 text-spa-sage-800 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Contact &
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Visit Us
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Ready to book your group experience? Get in touch with us to plan your perfect wellness gathering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 rounded-3xl p-8 text-center">
              <div className="bg-spa-sage-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CalendarDaysIcon className="h-8 w-8 text-spa-sage-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-3">
                Business Hours
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Monday – Saturday<br />
                10am – 8pm
              </p>
            </div>

            <div className="bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 rounded-3xl p-8 text-center">
              <div className="bg-spa-sage-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ClockIcon className="h-8 w-8 text-spa-sage-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-3">
                Phone
              </h3>
              <p className="text-stone-600 leading-relaxed">
                <a href="tel:801-528-7368" className="hover:text-spa-sage-800 transition-colors">
                  801-528-7368
                </a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 rounded-3xl p-8 text-center">
              <div className="bg-spa-sage-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <UserGroupIcon className="h-8 w-8 text-spa-sage-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-3">
                Email
              </h3>
              <p className="text-stone-600 leading-relaxed">
                <a href="mailto:uluspaofficial@gmail.com" className="hover:text-spa-sage-800 transition-colors">
                  uluspaofficial@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-spa-gold-50 to-spa-sage-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-4">
              Visit Our Location
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed">
              597 South Pleasant Grove Blvd. Suite 4<br />
              Pleasant Grove, UT 84064
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-white">
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
            <p className="text-xl text-stone-600 leading-relaxed">
              Ready to create lasting memories? Let us know your preferences and we&apos;ll create the perfect experience for your group.
            </p>
            </div>

          <div className="bg-gradient-to-br from-spa-sage-50 to-spa-gold-50 rounded-3xl p-8 shadow-soft">
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
                    <option value="7">7 people</option>
                    <option value="8+">8+ people (two waves)</option>
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
                    <option value="morning">Morning (10AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Group Type *
                  </label>
                  <select
                    name="groupType"
                    value={formData.groupType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select group type</option>
                    <option value="corporate">Corporate Wellness Teams</option>
                    <option value="bridal">Bridal & Wedding Preparation</option>
                    <option value="groomsmen">Groomsmen Relaxation Retreats</option>
                    <option value="celebrations">Birthdays & Special Celebrations</option>
                    <option value="friends">Friends' Day Out</option>
                    <option value="wellness">Shared Wellness Rituals</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    Room Preference
                  </label>
                  <select
                    name="roomPreference"
                    value={formData.roomPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select room preference</option>
                    <option value="group-room">Main Group Room (up to 4 guests)</option>
                    <option value="semi-private">Semi-Private Suites</option>
                    <option value="private-vip">Private VIP Treatment Rooms</option>
                    <option value="mixed">Mixed (some group, some private)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  Guest List & Room Preferences
                </label>
                <textarea
                  name="guestList"
                  value={formData.guestList}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please specify who wants group room treatment vs. private room service (required for groups of 4+)..."
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  Special Requests or Occasions
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Let us know if you're celebrating something special or have any specific requests..."
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <div className="text-center pt-6">
                <Button variant="luxury" size="lg" className="px-12">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Request Group Booking
                </Button>
                <p className="text-sm text-stone-600 mt-4">
                  We&apos;ll contact you within 24 hours to confirm your booking details and finalize room arrangements.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}