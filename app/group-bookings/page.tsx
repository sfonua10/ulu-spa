'use client'

import { Button } from '../components/ui/Button'
import {
  CalendarDaysIcon,
  ArrowRightIcon,
  PhoneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import VideoBackground from '../components/ui/VideoBackground'

const groupPackages = [
  {
    id: 'wedding',
    name: 'Wedding Parties',
    description: 'Pamper the bride and her party with luxurious scalp treatments perfect for your special day preparation',
    imageUrl: '/images/services/facial-2.png',
    objectPosition: 'center 70%',
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
    objectPosition: 'center 30%',
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
    objectPosition: 'center 30%',
    isPopular: false
  }
]

export default function GroupBookingsPage() {

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
                    style={pkg.objectPosition ? { objectPosition: pkg.objectPosition } : undefined}
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
                  <a href={bookingUrl} className="mangomint-booking-button block">
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

      {/* ULU Group Room Experience Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 animate-in animate-fade-in animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              ULU Group Room
              <span className="block mt-2 bg-linear-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed">
              Designed for connection, relaxation, and shared moments of presence — our ULU Group Room accommodates up to 4 guests together in one tranquil space. The room can also be divided into two semi-private lounge suites, perfect for couples, besties, or doubles who want to unwind side-by-side.
            </p>
          </div>

          {/* Capacity and Perfect For Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Capacity Details */}
            <div className="bg-spa-cream-50 rounded-3xl p-8 border border-spa-sage-100 shadow-soft animate-in animate-fade-in animate-slide-up animate-delay-100">
              <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-4">
                Our Capacity
              </h3>
              <p className="text-spa-stone-600 leading-relaxed mb-4">
                Alongside the group room, we offer <span className="font-semibold text-spa-sage-700">3 private VIP treatment rooms</span>, allowing us to host groups of up to <span className="font-semibold text-spa-gold-600">7 guests</span> at one time — with 4 guests together in the group suite and 3 guests experiencing their treatment in private rooms.
              </p>
              <p className="text-spa-stone-600 leading-relaxed">
                This layout creates a seamless and elevated experience for your entire group.
              </p>
            </div>

            {/* Perfect For */}
            <div className="bg-spa-cream-50 rounded-3xl p-8 border border-spa-sage-100 shadow-soft animate-in animate-fade-in animate-slide-up animate-delay-200">
              <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-4">
                Perfect For
              </h3>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Corporate wellness teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Bridal & wedding preparation groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Groomsmen relaxation retreats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Birthdays & special celebrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Friends&apos; day out & shared wellness rituals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Large Groups Callout */}
          <div className="bg-spa-gold-50/50 rounded-3xl p-8 border border-spa-gold-200 animate-in animate-fade-in animate-slide-up animate-delay-300">
            <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-4 text-center">
              Groups of 8+
            </h3>
            <p className="text-spa-stone-600 leading-relaxed text-center max-w-3xl mx-auto">
              If your group includes 8 guests or more, we invite you to enjoy your experience in two back-to-back waves, so every guest receives the full ULU experience without being rushed. <span className="font-semibold text-spa-sage-700">Calm, presence, and flow remain at the heart of the experience.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Group Booking Coordination Section */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50/50 to-spa-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 animate-in animate-fade-in animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-spa-sage-800 mb-4">
              Group Booking Coordination
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* We Assist With */}
            <div className="bg-white rounded-3xl p-8 border border-spa-sage-100 shadow-soft animate-in animate-fade-in animate-slide-up animate-delay-100">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                We will assist with:
              </h3>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Scheduling and timing for your group size</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Determining who prefers together vs. private room treatment time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Enhancements, upgrades, and celebration touches</span>
                </li>
              </ul>
            </div>

            {/* Guest List Request */}
            <div className="bg-white rounded-3xl p-8 border border-spa-sage-100 shadow-soft animate-in animate-fade-in animate-slide-up animate-delay-200">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                We kindly request a guest list noting:
              </h3>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Who would like to be in the Group Room</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Who prefers Private Room service</span>
                </li>
              </ul>
              <p className="text-spa-stone-500 mt-6 italic text-sm">
                This allows us to create a smooth, harmonious, and personalized group experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Shared Retreat Awaits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in animate-fade-in animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-spa-sage-800 mb-6">
            Your Shared Retreat Awaits
          </h2>
          <p className="text-xl text-spa-stone-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you are celebrating, reconnecting, or simply taking time to breathe, our group room was created as a place for relaxation, presence, and renewal — together.
          </p>
          <p className="text-2xl font-display text-spa-gold-600 italic">
            Relax side by side. Reset deeply. Leave glowing.
          </p>
        </div>
      </section>

      {/* Group Booking & Gift Card Policy Section */}
      <section className="py-20 bg-gradient-to-br from-spa-cream-50 to-spa-sage-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-spa-sage-800 mb-4">
              Group Booking & Gift Card Policy
            </h2>
            <p className="text-lg text-spa-stone-600">
              Important information for group reservations
            </p>
          </div>

          <div className="space-y-6">
            {/* Group Reservation Requirements */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-spa-sage-100">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                Group Reservation Requirements
              </h3>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Groups are 3 or more guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>A valid debit/credit card is required to secure appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>A non-refundable deposit may be required</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span><strong>Deposits cannot be paid using gift cards</strong></span>
                </li>
              </ul>
            </div>

            {/* Gift Card Usage for Groups */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-spa-sage-100">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                Using Gift Cards for Groups
              </h3>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Gift cards may be redeemed individually at checkout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span><strong>One gift card per guest, per visit</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Valid toward regular-priced services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Any remaining balance stays on the card for future visits</span>
                </li>
              </ul>
            </div>

            {/* Gift Card Restrictions for Groups */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-spa-sage-100">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                Gift Cards Cannot Be Used For
              </h3>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Deposits or reservation holds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Group or corporate discounted rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Seasonal or promotional pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Membership pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Cancellation fees or no-shows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Gratuity</span>
                </li>
              </ul>
            </div>

            {/* Individual Payment */}
            <div className="bg-spa-gold-50/50 rounded-2xl p-6 md:p-8 border border-spa-gold-200">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                Individual Payment
              </h3>
              <p className="text-spa-stone-600 leading-relaxed mb-4">
                Each guest in a group booking is responsible for:
              </p>
              <ul className="space-y-3 text-spa-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Their own payment method</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Their own gratuity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-500 font-bold mt-1">•</span>
                  <span>Their own gift card use</span>
                </li>
              </ul>
              <p className="text-spa-stone-600 mt-4 italic">
                Gift cards cannot be pooled or shared across guests.
              </p>
            </div>
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
                <a href={bookingUrl} className="mangomint-booking-button">
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