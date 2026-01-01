'use client'

import { useState } from 'react'
import { GlassCard } from '@/app/components/ui/GlassCard'
import { Button } from '@/app/components/ui/Button'
import { useInView } from '@/app/hooks/useInView'
import Image from 'next/image'
import {
  GiftIcon,
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ChevronDownIcon,
  CakeIcon,
  HeartIcon,
  UserGroupIcon,
  BriefcaseIcon,
  StarIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import { trackGiftCardClick, trackBookNowClick } from '@/app/lib/analytics'

// Gift Card FAQ Accordion Item
function GiftCardAccordionItem({
  question,
  children,
  isOpen,
  onToggle
}: {
  question: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="group bg-white/60 backdrop-blur-md rounded-2xl border border-spa-gold-200/50 overflow-hidden hover:border-spa-gold-300/70 transition-all duration-300 shadow-soft">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-playfair font-semibold text-spa-sage-900 pr-4">
          {question}
        </h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-spa-gold-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon className="w-5 h-5 text-spa-gold-600" />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-6 pt-2 font-montserrat text-spa-stone-700">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function GiftCardPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const giftCardPurchaseUrl = 'https://clients.mangomint.com/gift-cards/uluspa'
  const bookingUrl = 'https://booking.mangomint.com/904811'

  const { ref: occasionsRef, isInView: occasionsInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const benefits = [
    {
      icon: ClockIcon,
      title: 'Never Expires',
      description: 'Gift card value stays valid forever'
    },
    {
      icon: SparklesIcon,
      title: 'Any Service',
      description: 'Redeemable toward all treatments & retail'
    },
    {
      icon: CreditCardIcon,
      title: 'Balance Rolls Over',
      description: 'Unused value stays for future visits'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Instant Delivery',
      description: 'Digital cards sent immediately'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-spa-gold-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-spa-sage-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-spa-gold-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-spa-sage-100/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-spa-sage-900 mb-6">
                Give the Gift Everyone Wants —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spa-gold-500 to-spa-gold-600">
                  Relaxation, Reset, & Renewal
                </span>
              </h1>

              <p className="font-montserrat text-lg md:text-xl text-spa-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                ULU Spa Gift Cards are more than a present — they&apos;re an experience.
                Thoughtful, flexible, and deeply relaxing, they allow your recipient to choose
                the service that best supports their mind, body, and well-being.
              </p>

              <a href={giftCardPurchaseUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackGiftCardClick('gift_cards_hero')}>
                <Button variant="luxury" size="lg" className="px-12 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <GiftIcon className="h-6 w-6 mr-3" />
                  Purchase Gift Card
                </Button>
              </a>

              <p className="mt-4 font-montserrat text-sm text-spa-stone-500 text-center lg:text-left">
                Redeeming?{' '}
                <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 font-medium">
                  Call (801) 528-7368
                </a>{' '}
                to book
              </p>
            </div>

            {/* Right: Badge + Gift Card Image */}
            <div className="flex flex-col items-center order-first lg:order-last">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold-50 to-spa-cream-50 backdrop-blur-sm text-spa-sage-700 text-sm font-medium mb-6 border border-spa-gold-200/50 shadow-soft">
                <GiftIcon className="h-5 w-5 text-spa-gold-600" />
                <span className="uppercase tracking-wide">The Perfect Present</span>
              </div>
              <div className="gift-card-3d-container max-w-md w-full">
                <div className="gift-card-3d" style={{ aspectRatio: '500/315' }}>
                  {/* Front */}
                  <div className="gift-card-face">
                    <Image
                      src="/images/gift-card-front.png"
                      alt="ULU Head Spa Gift Card - The Ultimate Gift of Relaxation"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  {/* Back */}
                  <div className="gift-card-face gift-card-back">
                    <Image
                      src="/images/gift-card-back.png"
                      alt="ULU Head Spa Gift Card - Back"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Any Occasion */}
      <section ref={occasionsRef} className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl border border-spa-gold-100/50 p-8 md:p-12 text-center">
            <h2
              className={`font-dancing text-4xl md:text-5xl pb-1 mb-12 transition-all duration-700 ${
                occasionsInView ? 'opacity-100 translate-y-0 text-shimmer-gold' : 'opacity-0 translate-y-4'
              }`}
            >
              Perfect for Any Occasion
            </h2>

            <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-12 ${occasionsInView ? 'stagger-animation' : ''}`}>
              {[
                { icon: CakeIcon, label: 'Birthdays & Holidays' },
                { icon: HeartIcon, label: 'Anniversaries' },
                { icon: UserGroupIcon, label: 'New Parents' },
                { icon: GiftIcon, label: 'Thank You' },
                { icon: BriefcaseIcon, label: 'Employee Appreciation' },
                { icon: StarIcon, label: 'Just Because' },
              ].map((occasion) => (
                <div
                  key={occasion.label}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default hover-glow transition-all duration-300 hover:scale-105 hover:bg-white/50"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-spa-gold-100 to-spa-gold-50 flex items-center justify-center shadow-sm">
                    <occasion.icon className="h-7 w-7 text-spa-gold-600" />
                  </div>
                  <span className="font-montserrat text-spa-sage-800 font-medium">
                    {occasion.label}
                  </span>
                </div>
              ))}
            </div>

            <p
              className={`font-dancing text-2xl md:text-3xl text-spa-gold-600 drop-shadow-sm transition-all duration-700 delay-700 ${
                occasionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Because the best gifts aren&apos;t things — they&apos;re moments of rest.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="relative py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard
                key={index}
                blur="md"
                opacity={0.7}
                className="p-6 text-center hover:scale-105 transition-transform duration-300 border-spa-gold-100/50"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-spa-gold-100 to-spa-gold-50 flex items-center justify-center">
                  <benefit.icon className="h-7 w-7 text-spa-gold-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-spa-sage-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="font-montserrat text-sm text-spa-stone-600">
                  {benefit.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-3">
              Gift Card Details
            </h2>
            <p className="font-montserrat text-spa-stone-600">
              Quick answers about using your gift card
            </p>
          </div>

          <div className="space-y-4">
            {/* How to Use Your Gift Card */}
            <GiftCardAccordionItem
              question="How do I use my gift card?"
              isOpen={openIndex === 0}
              onToggle={() => toggleAccordion(0)}
            >
              <p className="mb-4 leading-relaxed">
                To book with a gift card, call us at{' '}
                <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline font-semibold">(801) 528-7368</a>.
                Our team will apply your gift card toward the required deposit, and any remaining balance will be credited at checkout.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Redeemable toward regular-priced services or retail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>One gift card per guest, per visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Unused balance stays on your card for future visits</span>
                </li>
              </ul>
            </GiftCardAccordionItem>

            {/* Expiration */}
            <GiftCardAccordionItem
              question="Do gift cards expire?"
              isOpen={openIndex === 1}
              onToggle={() => toggleAccordion(1)}
            >
              <p className="mb-4 leading-relaxed">
                <strong>Purchased gift card value never expires</strong> and retains its full value indefinitely.
              </p>
              <p className="leading-relaxed text-spa-stone-600">
                Promotional or bonus gift cards (e.g., &quot;Buy $100, Get $20 Free&quot;) may have expiration dates on the bonus portion.
                Any terms will be clearly communicated at the time of purchase.
              </p>
            </GiftCardAccordionItem>

            {/* Balance Check */}
            <GiftCardAccordionItem
              question="How do I check my balance?"
              isOpen={openIndex === 2}
              onToggle={() => toggleAccordion(2)}
            >
              <p className="mb-3 leading-relaxed">
                Check your balance anytime in-spa or by calling{' '}
                <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline font-semibold">(801) 528-7368</a>.
                Digital screenshots are accepted if the full card number is visible.
              </p>
              <p className="text-sm text-spa-stone-600">
                Note: Lost or stolen cards cannot be replaced.
              </p>
            </GiftCardAccordionItem>
          </div>

          {/* Link to Full Policy */}
          <div className="mt-8 text-center">
            <a
              href="/policy#gift-cards"
              className="inline-flex items-center gap-2 font-montserrat text-spa-gold-600 hover:text-spa-gold-700 font-medium transition-colors duration-200"
            >
              View complete gift card policy
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <GlassCard blur="md" opacity={0.8} className="p-10 md:p-12 bg-gradient-to-br from-spa-sage-50/50 to-spa-gold-50/50 text-center border-spa-gold-200/30">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-spa-gold-200 to-spa-gold-100 flex items-center justify-center">
              <GiftIcon className="h-10 w-10 text-spa-gold-600" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
              Ready to Give the Gift of Wellness?
            </h2>
            <p className="font-montserrat text-spa-stone-700 leading-relaxed mb-8 max-w-xl mx-auto">
              Purchase a gift card online or visit our spa. Perfect for birthdays, holidays,
              or just because someone deserves a moment of restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={giftCardPurchaseUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackGiftCardClick('gift_cards_cta')}>
                <Button variant="luxury" size="lg" className="px-12">
                  <GiftIcon className="h-5 w-5 mr-2" />
                  Buy Gift Card
                </Button>
              </a>

              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mangomint-booking-button" onClick={() => trackBookNowClick('gift_cards')}>
                <Button variant="outline" size="lg" className="px-12">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>

            <p className="text-sm text-spa-stone-600 mt-6">
              Have a gift card?{' '}
              <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline font-medium">
                Call (801) 528-7368
              </a>{' '}
              to book your appointment.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </main>
  )
}
