'use client'

import { useState } from 'react'
import { GlassCard } from '@/app/components/ui/GlassCard'
import { Button } from '@/app/components/ui/Button'
import {
  GiftIcon,
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ChevronDownIcon,
  CakeIcon,
  HeartIcon,
  StarIcon,
  UserGroupIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

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
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold-50 to-spa-cream-50 backdrop-blur-sm text-spa-sage-700 text-sm font-medium mb-8 border border-spa-gold-200/50 shadow-soft">
            <GiftIcon className="h-5 w-5 text-spa-gold-600" />
            <span className="uppercase tracking-wide">The Perfect Present</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spa-sage-900 mb-6">
            Give the Gift Everyone Wants —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spa-gold-500 to-spa-gold-600">
              Relaxation, Reset, & Renewal
            </span>
          </h1>

          <p className="font-montserrat text-xl text-spa-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
            ULU Spa Gift Cards are more than a present — they&apos;re an experience.
            Thoughtful, flexible, and deeply relaxing, they allow your recipient to choose
            the service that best supports their mind, body, and well-being.
          </p>

          {/* Occasion Pills */}
          <p className="font-dancing text-2xl text-spa-gold-600 mb-4">
            Perfect for Any Occasion
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { icon: CakeIcon, label: 'Birthdays & Holidays' },
              { icon: HeartIcon, label: 'Anniversaries' },
              { icon: UserGroupIcon, label: 'New Parents' },
              { icon: SparklesIcon, label: 'Self-Care Reset' },
              { icon: GiftIcon, label: 'Thank You' },
              { icon: BriefcaseIcon, label: 'Employee Appreciation' },
              { icon: StarIcon, label: 'Just Because' },
            ].map((occasion) => (
              <div
                key={occasion.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-spa-gold-200/50 text-spa-sage-700 text-sm font-medium hover:bg-spa-gold-50 hover:border-spa-gold-300 transition-all duration-300"
              >
                <occasion.icon className="h-4 w-4 text-spa-gold-500" />
                <span>{occasion.label}</span>
              </div>
            ))}
          </div>
          <p className="text-spa-stone-500 italic text-lg mb-10">
            Because the best gifts aren&apos;t things — they&apos;re moments of rest.
          </p>

          <a href={giftCardPurchaseUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="luxury" size="lg" className="px-12 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <GiftIcon className="h-6 w-6 mr-3" />
              Purchase Gift Card
            </Button>
          </a>
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
              Everything you need to know about using your gift card
            </p>
          </div>

          <div className="space-y-4">
            {/* How to Use */}
            <GiftCardAccordionItem
              question="How do I use my gift card?"
              isOpen={openIndex === 0}
              onToggle={() => toggleAccordion(0)}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Redeemable toward regular-priced services or retail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Applied at checkout toward the service subtotal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>If the service exceeds the card amount, the remaining balance may be paid by card or cash</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Any unused balance remains on the card for future visits</span>
                </li>
              </ul>
            </GiftCardAccordionItem>

            {/* Deposits */}
            <GiftCardAccordionItem
              question="Can I use a gift card for deposits?"
              isOpen={openIndex === 1}
              onToggle={() => toggleAccordion(1)}
            >
              <p className="mb-4 leading-relaxed">
                Some appointments may require a non-refundable deposit to secure time with a provider.
                To keep scheduling fair and consistent:
              </p>
              <div className="bg-spa-gold-50/50 border-l-4 border-spa-gold-400 p-4 rounded-r-lg mb-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span>Deposits must be paid using a valid debit/credit card</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span><strong>Gift cards cannot be used to pay deposits or hold reservations</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span>At checkout, a gift card may be applied toward the remaining balance of the service</span>
                  </li>
                </ul>
              </div>
              <div className="bg-spa-sage-50/50 border border-spa-sage-200 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Example:</strong> If a service is $120 with a $50 deposit,
                  the $50 remains applied, and the gift card may be used toward the remaining balance at checkout.
                </p>
              </div>
            </GiftCardAccordionItem>

            {/* Combining Cards */}
            <GiftCardAccordionItem
              question="Can I combine multiple gift cards?"
              isOpen={openIndex === 2}
              onToggle={() => toggleAccordion(2)}
            >
              <p className="mb-4 leading-relaxed">
                To keep billing simple:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span><strong>One gift card may be used per guest, per visit</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Gift cards cannot be combined or split across multiple appointments</span>
                </li>
              </ul>
            </GiftCardAccordionItem>

            {/* Restrictions */}
            <GiftCardAccordionItem
              question="Are there any restrictions?"
              isOpen={openIndex === 3}
              onToggle={() => toggleAccordion(3)}
            >
              <p className="mb-4">Gift cards may not be used toward:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Discounts or promotional pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Seasonal or holiday offers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Membership pricing or monthly dues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Corporate or group rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Deposits or reservation holds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Cancellation or no-show fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Cash gratuity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Purchasing additional gift cards</span>
                </li>
              </ul>
            </GiftCardAccordionItem>

            {/* Promotional Cards */}
            <GiftCardAccordionItem
              question="What about bonus or promotional cards?"
              isOpen={openIndex === 4}
              onToggle={() => toggleAccordion(4)}
            >
              <p className="mb-4 leading-relaxed">
                ULU may offer added-value cards (e.g., &quot;Buy $100, Get $20 Free&quot;) or promotional spa credits.
                To ensure clarity:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>The bonus/promotional portion may include expiration dates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Bonus value cannot be used on discounted services or restricted categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Bonus value cannot be used toward deposits, membership pricing, corporate/group rates, or gratuity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Limit one promotional/added-value card per guest, per visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span><strong>Paid value never expires; bonus value may</strong></span>
                </li>
              </ul>
            </GiftCardAccordionItem>

            {/* Expiration */}
            <GiftCardAccordionItem
              question="Do gift cards expire?"
              isOpen={openIndex === 5}
              onToggle={() => toggleAccordion(5)}
            >
              <div className="bg-spa-sage-50/50 border-l-4 border-spa-sage-500 p-4 rounded-r-lg mb-4">
                <p className="font-semibold text-spa-sage-900 mb-2">Standard Gift Cards</p>
                <p className="leading-relaxed">
                  <strong>Purchased gift card value does not expire</strong> and will retain its full
                  value indefinitely in compliance with applicable laws.
                </p>
              </div>
              <p className="leading-relaxed text-sm">
                Note: Bonus or promotional value may have redemption windows or blackout dates,
                which will be clearly communicated at the time of purchase.
              </p>
            </GiftCardAccordionItem>

            {/* Balance Check */}
            <GiftCardAccordionItem
              question="How do I check my balance?"
              isOpen={openIndex === 6}
              onToggle={() => toggleAccordion(6)}
            >
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Balances may be checked anytime in-spa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Digital screenshots are accepted if the full card number is visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Lost or stolen cards cannot be replaced</span>
                </li>
              </ul>
              <p className="text-spa-gold-700 font-medium">
                If you have questions or would like help redeeming a gift card, our team is happy to assist.
              </p>
            </GiftCardAccordionItem>
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
              <a href={giftCardPurchaseUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="luxury" size="lg" className="px-10 shadow-lg hover:shadow-xl">
                  <GiftIcon className="h-5 w-5 mr-2" />
                  Purchase Gift Card
                </Button>
              </a>

              <a href={bookingUrl} className="mangomint-booking-button">
                <Button variant="outline" size="lg" className="px-10">
                  Book an Appointment
                </Button>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </main>
  )
}
