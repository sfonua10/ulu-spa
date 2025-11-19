'use client'

import React from 'react'
// import FloatingBookingButton from '@/app/components/ui/FloatingBookingButton'
import { GlassCard } from '@/app/components/ui/GlassCard'
import { CalendarDaysIcon, ClockIcon, CreditCardIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Button } from '../components/ui/Button'

export default function BookingPolicyPage() {
  const bookingUrl = 'https://booking.mangomint.com/904811'

  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-spa-gold-100/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-spa-sage-100/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-spa-gold-100/10 rounded-full blur-3xl animate-float-gentle"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-spa-sage-700 text-sm font-medium mb-8 border border-spa-sage-200 shadow-soft">
            <CalendarDaysIcon className="h-5 w-5 text-spa-gold-600" />
            <span className="uppercase tracking-wide">Policies & Guidelines</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-spa-sage-900 mb-6">
            Booking Policy
          </h1>

          <p className="font-montserrat text-xl text-spa-stone-600 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about booking, canceling, and preparing for your ULU Head Spa experience.
          </p>

          <p className="font-montserrat text-sm text-spa-stone-500 mt-6 italic">
            Last Updated: January 18, 2025
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard blur="md" opacity={0.8} className="p-6 text-center">
              <ClockIcon className="h-12 w-12 text-spa-gold-600 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-spa-sage-900 mb-2">
                Cancellation Window
              </h3>
              <p className="font-montserrat text-4xl font-bold text-spa-sage-800 mb-2">
                48 Hours
              </p>
              <p className="font-montserrat text-sm text-spa-stone-600">
                Cancel or reschedule without penalty
              </p>
            </GlassCard>

            <GlassCard blur="md" opacity={0.8} className="p-6 text-center">
              <CalendarDaysIcon className="h-12 w-12 text-spa-gold-600 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-spa-sage-900 mb-2">
                Arrival Time
              </h3>
              <p className="font-montserrat text-4xl font-bold text-spa-sage-800 mb-2">
                10-15 Min
              </p>
              <p className="font-montserrat text-sm text-spa-stone-600">
                Please arrive early to check in
              </p>
            </GlassCard>
          </div>

          {/* Booking Appointments */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <CalendarDaysIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  How to Book an Appointment
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                Scheduling your relaxation experience is easy. You can book your appointment through any of these convenient methods:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-spa-gold-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-sage-800 mb-1">Online Booking</h3>
                    <p className="text-sm leading-relaxed">
                      Book anytime, 24/7 through our secure online booking system. View real-time availability and select your preferred time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-spa-gold-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-sage-800 mb-1">Phone</h3>
                    <p className="text-sm leading-relaxed">
                      Call us at{' '}
                      <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline font-semibold">
                        (801) 528-7368
                      </a>{' '}
                      during business hours. Our team is happy to assist you with scheduling and answer any questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-spa-gold-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-sage-800 mb-1">In Person</h3>
                    <p className="text-sm leading-relaxed">
                      Visit our spa to book in person. Our reception team can help you choose the perfect services and schedule your visit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a href={bookingUrl}>
                  <Button variant="luxury" size="lg" className="px-10">
                    Book Online Now
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Cancellation Policy */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <ClockIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Cancellation & Rescheduling
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div className="bg-spa-gold-50/50 border-l-4 border-spa-gold-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-spa-sage-900 mb-2">48-Hour Notice Required</h3>
                <p className="text-sm leading-relaxed">
                  We require at least 48 hours advance notice for any cancellations or changes to your appointment. This allows us to offer the time slot to other guests.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Cancellation Fees</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm"><strong>48+ hours notice:</strong> No charge, free cancellation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm"><strong>24-48 hours notice:</strong> 50% of service fee charged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm"><strong>Less than 24 hours or no-show:</strong> 100% of service fee charged</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">How to Cancel or Reschedule</h3>
                <p className="text-sm leading-relaxed mb-3">
                  To cancel or reschedule your appointment:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Through your booking confirmation email (click the manage appointment link)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Call us at (801) 528-7368</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Log into your online booking account</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spa-sage-50/50 border border-spa-sage-200 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Understanding Our Policy:</strong> We understand that unexpected things happen. Our cancellation policy ensures that our therapists' time is valued while maintaining availability for all guests. We appreciate your understanding and cooperation.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Group Bookings */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <UserGroupIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Group Booking Policy
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                Group experiences require special arrangements. Please review our group booking guidelines:
              </p>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Advance Booking</h3>
                <p className="text-sm leading-relaxed">
                  We recommend booking group experiences at least 2-3 weeks in advance. For groups of 8 or more, please book 4-6 weeks ahead to ensure availability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Deposits</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm">50% deposit required at time of booking (non-refundable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm">Remaining balance due at time of service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm">Group minimums apply to receive group pricing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Group Cancellation Policy</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm"><strong>72+ hours notice:</strong> Deposit refunded or credited toward future booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm"><strong>Less than 72 hours:</strong> Deposit forfeited</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm">Individual cancellations within group must provide 48-hour notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600 font-bold">•</span>
                    <span className="text-sm">Final guest count required 72 hours before appointment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spa-gold-50/50 border border-spa-gold-200 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Custom Group Events:</strong> For groups of 8+, corporate events, or special occasions, please call us at{' '}
                  <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    (801) 528-7368
                  </a>{' '}
                  to discuss customized packages and arrangements.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Payment Policy */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <CreditCardIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Payment Policy
                </h2>
              </div>
            </div>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Accepted Payment Methods</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Visa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">MasterCard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">American Express</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Discover</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Debit Cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Cash</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Gift Cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Spa Credits</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Credit Card on File</h3>
                <p className="text-sm leading-relaxed">
                  A valid credit card is required to secure online bookings. Your card will only be charged if you fail to cancel within the required notice period or for no-show appointments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Gratuity</h3>
                <p className="text-sm leading-relaxed">
                  Gratuity is not included in service prices and is appreciated at your discretion. Standard gratuity is 18-20% for excellent service. Tips can be added to credit card payments or given in cash.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Pricing</h3>
                <p className="text-sm leading-relaxed">
                  All prices are subject to applicable sales tax. Prices may change without notice, but the price displayed at the time of booking will be honored. Special promotions and discounts cannot be combined unless otherwise stated.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Arrival and Preparation */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Arrival and Preparation
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Arrival Time</h3>
                <p className="text-sm leading-relaxed mb-3">
                  Please arrive 10-15 minutes before your scheduled appointment to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Complete any necessary paperwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Consult with your therapist about preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Relax and settle into the spa environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">→</span>
                    <span className="text-sm">Use restroom facilities before treatment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spa-sage-50/50 border-l-4 border-spa-sage-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-spa-sage-900 mb-2">Late Arrivals</h3>
                <p className="text-sm leading-relaxed">
                  If you arrive late, your treatment time may be shortened to accommodate the next guest. Full service fees will apply. Excessive lateness (15+ minutes) may result in rescheduling at our discretion.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">What to Bring</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Valid photo ID (for first visit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Payment method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">List of any medications or allergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spa-gold-600">✓</span>
                    <span className="text-sm">Comfortable clothing (we provide robes and slippers)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Health Considerations</h3>
                <p className="text-sm leading-relaxed">
                  Please inform us of any health conditions, injuries, allergies, or pregnancy. This information helps us provide safe, appropriate treatments tailored to your needs.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Contact CTA */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10 bg-gradient-to-br from-spa-sage-50/50 to-spa-gold-50/50 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
              Have Questions?
            </h2>
            <p className="font-montserrat text-spa-stone-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              Our team is here to help. If you have questions about our policies or need assistance with booking, please don't hesitate to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={bookingUrl}>
                <Button variant="luxury" size="lg" className="px-10">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
              </a>

              <a href="tel:+18015287368">
                <Button variant="outline" size="lg" className="px-10">
                  Call (801) 528-7368
                </Button>
              </a>
            </div>
          </GlassCard>

        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20"></div>

      {/* <FloatingBookingButton /> */}
    </main>
  )
}
