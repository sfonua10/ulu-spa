'use client'

import { Button } from '../components/ui/Button'
import {
  CalendarDaysIcon,
  CheckIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  PhoneIcon,
  ArrowLongRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
import VideoBackground from '../components/ui/VideoBackground'

const groupPackages = [
  {
    id: 'wedding',
    name: 'Wedding Parties',
    description: 'Pamper the bride and her party with luxurious scalp treatments perfect for your special day preparation',
    imageUrl: '/images/services/facial-2.png',
    isPopular: false
  },
  {
    id: 'corporate',
    name: 'Corporate Wellness',
    description: 'Boost team morale and productivity with executive spa sessions and corporate wellness packages',
    imageUrl: '/images/services/scalp-massage.jpg',
    isPopular: true
  },
  {
    id: 'couples',
    name: 'Couples Retreat',
    description: 'Reconnect and unwind together in our couple\'s room with side-by-side spa treatments',
    imageUrl: '/images/services/tropical-indulge.jpg',
    isPopular: false
  },
  {
    id: 'celebrations',
    name: 'Celebrations',
    description: 'Make birthdays, anniversaries, and special occasions unforgettable with group spa experiences',
    imageUrl: '/images/services/island-renewal.jpg',
    isPopular: false
  },
  {
    id: 'friends-family',
    name: 'Friends & Family',
    description: 'Bond with loved ones over relaxing treatments in our private group spaces',
    imageUrl: '/images/services/glow-go-express.jpg',
    isPopular: false
  },
  {
    id: 'special-events',
    name: 'Special Events',
    description: 'Holiday parties, milestone celebrations, and unique gatherings tailored to your group\'s needs',
    imageUrl: '/images/services/island-escape-ritual.png',
    isPopular: false
  }
]

const specialEvents = [
  {
    title: 'Bridal Parties & Bachelorettes',
    description: 'Make your special day even more memorable with customized bridal wellness packages',
    imageUrl: '/images/services/facial-2.png',
    features: ['Pre-wedding stress relief', 'Group treatments', 'Celebration photography'],
  },
  {
    title: 'Corporate Retreats & Team Building',
    description: 'Enhance team productivity and morale with tailored corporate wellness programs',
    imageUrl: '/images/services/scalp-massage.jpg',
    features: ['Team activities', 'Stress management', 'Executive packages'],
  },
  {
    title: 'Birthday & Anniversary Celebrations',
    description: 'Celebrate milestones with the gift of wellness and shared relaxation',
    imageUrl: '/images/services/island-renewal.jpg',
    features: ['Special treatments', 'Celebration refreshments', 'Personalized experience'],
  }
]

const bookingProcess = [
  {
    step: '01',
    title: 'Choose Experience',
    description: 'Select your perfect group package',
    icon: SparklesIcon
  },
  {
    step: '02',
    title: 'Select Date & Time',
    description: 'Pick your preferred schedule',
    icon: CalendarDaysIcon
  },
  {
    step: '03',
    title: 'Complete Booking',
    description: 'Secure your group experience',
    icon: CheckIcon
  }
]

const faqs = [
  {
    question: 'How far in advance should we book?',
    answer: 'We recommend booking group experiences at least 2-3 weeks in advance to ensure availability for your preferred date and time. For larger groups or special events, 4-6 weeks advance booking is ideal.'
  },
  {
    question: 'Can we customize our group package?',
    answer: 'Absolutely! While our pre-designed packages offer excellent value, we can customize any experience to meet your specific needs. Contact us to discuss your requirements.'
  },
  {
    question: 'What if someone in our group needs to cancel?',
    answer: 'We understand plans can change. Individual cancellations within a group booking are accepted up to 48 hours before your appointment. Please notify us as soon as possible.'
  },
  {
    question: 'Are there any group discounts available?',
    answer: 'Our group packages already include special pricing. For groups of 8 or more, additional discounts may apply. Please contact us directly for large group pricing.'
  },
  {
    question: 'What should we bring or prepare?',
    answer: 'Just bring yourselves! We provide everything needed for your treatments. We recommend arriving 10 minutes early to complete any necessary paperwork and settle in.'
  }
]

export default function GroupBookingsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const bookingUrl = 'https://booking.mangomint.com/904811'

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
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-luxury-warm-200/10 rounded-full blur-2xl animate-float-reverse"></div>
        </div>

        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Group Wellness Experiences
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Create unforgettable moments together with our luxury group wellness packages
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* Group Experience Cards */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6 animate-in animate-fade-in animate-slide-up">
              Choose Your Perfect
              <span className="block mt-2 bg-linear-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Group Package
              </span>
            </h2>
            <p className="text-xl text-spa-stone-600 max-w-2xl mx-auto animate-in animate-fade-in animate-slide-up animate-delay-100">
              Each experience is thoughtfully designed for connection and relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-luxury-lg transition-all duration-500 border border-spa-sage-100 hover:border-spa-gold-200 animate-in animate-fade-in animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-4 right-4 z-10 bg-spa-gold-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-gold animate-pulse-subtle">
                    <SparklesIcon className="h-4 w-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                )}

                {/* Hero Image */}
                <div className="relative h-64 overflow-hidden bg-linear-to-br from-spa-sage-100 to-spa-gold-50">
                  <Image
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    quality={85}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:translate-x-full transition-all duration-1000 -translate-x-full" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-spa-sage-900 mb-3 leading-tight group-hover:text-spa-gold-700 transition-colors duration-300">
                    {pkg.name}
                  </h3>

                  <p className="text-spa-stone-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* CTA Button */}
                  <a href={bookingUrl} className="block">
                    <Button
                      variant="luxury"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      Book This Experience
                      <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-20 bg-linear-to-br from-spa-sage-50 via-white to-spa-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Special Event
              <span className="block mt-2 bg-linear-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Packages
              </span>
            <p className="text-xl text-spa-stone-600 max-w-2xl mx-auto">
              Celebrate life&apos;s milestones with customized wellness experiences
            </p>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <div
                key={event.title}
                className={`group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 border border-spa-sage-100 hover:border-spa-gold-200 hover:-translate-y-2 animate-in animate-fade-in animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                {/* Hero Image */}
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-spa-sage-100 to-spa-gold-50">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    quality={85}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:translate-x-full transition-all duration-1000 -translate-x-full" />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4 text-center">
                    {event.title}
                  </h3>

                  <p className="text-spa-stone-600 mb-6 text-center leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {event.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 text-spa-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-spa-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={bookingUrl} className="block">
                    <Button variant="outline" className="w-full group-hover:bg-spa-sage-50">
                      Inquire Now
                      <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Simple Booking
              <span className="block mt-2 bg-linear-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines for Desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-linear-to-r from-spa-gold-200 via-spa-gold-300 to-spa-gold-200"></div>

            {bookingProcess.map((step, index) => (
              <div
                key={step.step}
                className={`relative text-center animate-in animate-fade-in animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-soft flex items-center justify-center border-2 border-spa-gold-200 group-hover:border-spa-gold-400 transition-colors">
                    <step.icon className="h-10 w-10 text-spa-gold-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-spa-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-spa-stone-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={bookingUrl}>
              <Button
                variant="luxury"
                size="lg"
                className="px-10 shadow-luxury hover:shadow-luxury-lg"
              >
                Start Booking Now
                <ArrowLongRightIcon className="h-5 w-5 ml-3" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-linear-to-br from-spa-cream-50 via-white to-spa-sage-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-spa-sage-800 mb-4">
              Frequently Asked
              <span className="block mt-2 bg-linear-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft border border-spa-sage-100 overflow-hidden transition-all duration-300 hover:shadow-soft-lg"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-spa-sage-800 group-hover:text-spa-gold-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-spa-sage-600 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 ${
                    expandedFaq === index ? 'pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-spa-stone-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-linear-to-br from-spa-sage-800 to-spa-sage-900 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-spa-gold-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-spa-gold-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Book Your
                <span className="block mt-2 text-spa-gold-400">
                  Group Experience?
                </span>
              </h2>

              <p className="text-xl text-spa-cream-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Create lasting memories with our luxury group wellness packages.
                Book online or call us for custom arrangements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={bookingUrl}>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-spa-gold-500 hover:bg-spa-gold-600 text-spa-sage-900 px-10 py-6 text-lg font-semibold shadow-gold"
                  >
                    <CalendarDaysIcon className="h-6 w-6 mr-3" />
                    Book Online Now
                  </Button>
                </a>

                <a href="tel:+18015287368">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-spa-gold-400 text-spa-gold-400 hover:bg-spa-gold-400 hover:text-spa-sage-900 px-10 py-6 text-lg font-semibold"
                  >
                    <PhoneIcon className="h-6 w-6 mr-3" />
                    (801) 528-7368
                  </Button>
                </a>
              </div>

              <p className="text-sm text-spa-cream-300 mt-8 italic">
                For groups of 8+ or special requests, please call us directly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}