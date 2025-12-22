'use client'

import { GlassCard } from '@/app/components/ui/GlassCard'
import { Button } from '@/app/components/ui/Button'
import {
  GiftIcon,
  CreditCardIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

export default function GiftCardPolicyPage() {
  const giftCardPurchaseUrl = 'https://clients.mangomint.com/gift-cards/uluspa'
  const bookingUrl = 'https://booking.mangomint.com/904811'

  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-spa-gold-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-spa-sage-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-spa-gold-100/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-spa-sage-700 text-sm font-medium mb-8 border border-spa-sage-200 shadow-soft">
            <GiftIcon className="h-5 w-5 text-spa-gold-600" />
            <span className="uppercase tracking-wide">Gift Card Information</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-spa-sage-900 mb-6">
            Gift Cards
          </h1>

          <p className="font-montserrat text-xl text-spa-stone-600 leading-relaxed max-w-3xl mx-auto">
            ULU Spa gift cards are a thoughtful way to share relaxation and self-care.
            Give the gift of restoration to someone special.
          </p>

          <div className="mt-8">
            <a href={giftCardPurchaseUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="luxury" size="lg" className="px-10">
                <GiftIcon className="h-5 w-5 mr-2" />
                Purchase Gift Card
              </Button>
            </a>
          </div>

          <p className="font-montserrat text-sm text-spa-stone-500 mt-6 italic">
            Last Updated: December 2025
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* How Gift Cards Can Be Used */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircleIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  How Gift Cards Can Be Used
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <ul className="space-y-3 ml-4">
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
            </div>
          </GlassCard>

          {/* Deposits & Gift Cards */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <CreditCardIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Deposits & Gift Cards
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                Some appointments may require a non-refundable deposit to secure time with a provider.
                To keep scheduling fair and consistent:
              </p>

              <div className="bg-spa-gold-50/50 border-l-4 border-spa-gold-500 p-4 rounded-r-lg">
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
                  <li className="flex items-start gap-3">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span>Unused gift card value stays on the card for future services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spa-sage-50/50 border border-spa-sage-200 rounded-lg p-4 mt-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Example:</strong> If a service is $120 with a $50 deposit,
                  the $50 remains applied, and the gift card may be used toward the remaining balance at checkout.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* One Card Per Visit */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <InformationCircleIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  One Card Per Visit
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                To keep billing simple:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span><strong>One gift card may be used per guest, per visit</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-spa-gold-600 font-bold">•</span>
                  <span>Gift cards cannot be combined or split across multiple appointments</span>
                </li>
              </ul>
            </div>
          </GlassCard>

          {/* Restrictions */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <ExclamationTriangleIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Restrictions
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700">
              <p className="mb-4">Gift cards may not be used toward:</p>
              <ul className="space-y-3 ml-4">
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
            </div>
          </GlassCard>

          {/* Added-Value & Promotional Gift Cards */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <SparklesIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Added-Value & Promotional Gift Cards
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                ULU may offer added-value cards (e.g., &quot;Buy $100, Get $20 Free&quot;) or promotional spa credits.
                To ensure clarity:
              </p>

              <ul className="space-y-3 ml-4">
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
                  <span>Paid value never expires; bonus value may</span>
                </li>
              </ul>
            </div>
          </GlassCard>

          {/* Expiration */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <ClockIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Expiration Policy
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div className="bg-spa-sage-50/50 border-l-4 border-spa-sage-500 p-4 rounded-r-lg">
                <p className="font-semibold text-spa-sage-900 mb-2">Standard Gift Cards</p>
                <p className="leading-relaxed">
                  <strong>Purchased gift card value does not expire</strong> and will retain its full
                  value indefinitely in compliance with applicable laws.
                </p>
              </div>

              <p className="leading-relaxed">
                Note: Bonus or promotional value may have redemption windows or blackout dates,
                which will be clearly communicated at the time of purchase.
              </p>
            </div>
          </GlassCard>

          {/* Balance & Verification */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <CreditCardIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Balance & Verification
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <ul className="space-y-3 ml-4">
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

              <p className="text-spa-gold-700 font-medium mt-4">
                If you have questions or would like help redeeming a gift card, our team is happy to assist.
              </p>
            </div>
          </GlassCard>

          {/* CTA Section */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10 bg-gradient-to-br from-spa-sage-50/50 to-spa-gold-50/50 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
              Ready to Give the Gift of Wellness?
            </h2>
            <p className="font-montserrat text-spa-stone-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              Purchase a gift card online or visit our spa. Perfect for birthdays, holidays,
              or just because someone deserves a moment of restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={giftCardPurchaseUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="luxury" size="lg" className="px-10">
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
      <div className="h-20"></div>
    </main>
  )
}
