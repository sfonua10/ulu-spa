'use client'

import React from 'react'
import { GlassCard } from '@/app/components/ui/GlassCard'
import { DocumentTextIcon, ScaleIcon } from '@heroicons/react/24/outline'
import FloatingBackgroundElements from '@/app/components/ui/FloatingBackgroundElements'
import { COMPANY } from '@/app/constants/config'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50">
      <FloatingBackgroundElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-spa-sage-700 text-sm font-medium mb-8 border border-spa-sage-200 shadow-soft">
            <ScaleIcon className="h-5 w-5 text-spa-gold-600" />
            <span className="uppercase tracking-wide">Legal Agreement</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-spa-sage-900 mb-6">
            Terms of Service
          </h1>

          <p className="font-montserrat text-xl text-spa-stone-600 leading-relaxed max-w-3xl mx-auto">
            Please read these terms carefully before using our services or booking an appointment.
          </p>

          <p className="font-montserrat text-sm text-spa-stone-500 mt-6 italic">
            Last Updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Agreement to Terms */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <DocumentTextIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Agreement to Terms
                </h2>
                <p className="font-montserrat text-lg text-spa-stone-700 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and ULU Head Spa ("Company," "we," "us," or "our") concerning your access to and use of our website (uluspas.com) and our spa services. By accessing our website, booking an appointment, or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access our website or use our services.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Booking and Appointments */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Booking and Appointments
            </h2>

            <div className="space-y-6 font-montserrat text-spa-stone-700">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Booking Process</h3>
                <p className="leading-relaxed mb-3">
                  Appointments can be booked online through our MangoMint booking system, by phone at (801) 528-7368, or in person. By booking an appointment, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Arrive on time for your scheduled appointment</li>
                  <li>Notify us of any health conditions, allergies, or concerns</li>
                  <li>Comply with our policies and staff instructions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Appointment Confirmation</h3>
                <p className="leading-relaxed">
                  You will receive a confirmation via email and/or SMS after booking. It is your responsibility to ensure the contact information provided is accurate. We are not liable for missed appointments due to incorrect contact information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Arrival Time</h3>
                <p className="leading-relaxed">
                  Please arrive 10-15 minutes before your scheduled appointment to complete any necessary paperwork and prepare for your service. Late arrivals may result in shortened treatment time or rescheduling at our discretion, and full charges will apply.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Cancellation and Rescheduling */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Cancellation and Rescheduling Policy
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div className="bg-spa-gold-50/50 border border-spa-gold-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-spa-sage-900 mb-2">24-Hour Cancellation Policy</p>
                <p className="text-sm leading-relaxed">
                  We require at least 24 hours advance notice for cancellations or changes to appointments. Cancellations made with less than 24 hours notice will be charged 50% of the service fee.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">No-Show Policy</h3>
                <p className="leading-relaxed">
                  Failure to show up for a scheduled appointment without prior cancellation will result in a charge of 100% of the scheduled service fee. Repeated no-shows may result in a requirement for prepayment for future bookings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Rescheduling</h3>
                <p className="leading-relaxed">
                  You may reschedule your appointment without penalty if done at least 24 hours in advance. We will do our best to accommodate your preferred date and time, subject to availability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Group Bookings</h3>
                <p className="leading-relaxed mb-3">
                  Special cancellation policies apply to group bookings:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>72-hour advance notice required for changes or cancellations</li>
                  <li>50% deposit required at time of booking (non-refundable)</li>
                  <li>Individual cancellations within a group must be made 24 hours in advance</li>
                  <li>Final guest count must be confirmed 72 hours prior</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Payment Terms */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Payment Terms
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Accepted Payment Methods</h3>
                <p className="leading-relaxed mb-3">
                  We accept the following payment methods:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Major credit cards (Visa, MasterCard, American Express, Discover)</li>
                  <li>Debit cards</li>
                  <li>Gift cards and spa credits</li>
                  <li>Cash (in-person only)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Pricing</h3>
                <p className="leading-relaxed">
                  All prices are listed in USD and are subject to change without notice. Prices displayed at the time of booking will be honored. Sales tax will be added to all services where applicable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Gratuity</h3>
                <p className="leading-relaxed">
                  Gratuity is not included in service prices and is at your discretion. Tips can be added to credit card payments or given in cash directly to your service provider.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Refunds</h3>
                <p className="leading-relaxed">
                  Refunds are provided only in cases of service cancellation by us or if you are dissatisfied with your service due to our error. All refund requests must be made within 24 hours of service. Refunds will be processed to the original payment method within 5-10 business days.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Deposits</h3>
                <p className="leading-relaxed">
                  Certain services may require a deposit at the time of booking. Deposits will be applied toward the final service cost. Deposits are non-refundable for cancellations made with less than 24 hours notice.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Membership Terms */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Membership Terms
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                Membership packages are offered on a monthly subscription basis with the following terms:
              </p>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Auto-Renewal</h3>
                <p className="leading-relaxed">
                  Memberships automatically renew on a monthly basis and will be charged to your designated payment method on file. You must provide 30 days written notice to cancel your membership.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Credits and Expiration</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Monthly credits do not roll over to the following month</li>
                  <li>Unused credits expire at the end of each membership period</li>
                  <li>Credits are non-transferable and cannot be redeemed for cash</li>
                  <li>Members must book appointments to use their credits</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Cancellation</h3>
                <p className="leading-relaxed">
                  Memberships require a 3-month minimum commitment. After the initial 3-month period, you may cancel with 30 days written notice. Refunds are not provided for partial months.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Membership Benefits</h3>
                <p className="leading-relaxed">
                  Membership benefits, including discounts and priority booking, are subject to change. Members will be notified of any changes at least 30 days in advance.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Gift Cards */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Gift Card Terms
            </h2>

            <div className="font-montserrat text-spa-stone-700">
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Gift cards are non-refundable and cannot be redeemed for cash except where required by law</li>
                <li>Gift cards do not expire and retain their full value indefinitely</li>
                <li>Lost or stolen gift cards cannot be replaced</li>
                <li>Gift cards can be used for all services and products</li>
                <li>Multiple gift cards can be combined for a single transaction</li>
                <li>Gift card balances can be checked online or by phone</li>
                <li>Gift cards are transferable and make excellent gifts</li>
              </ul>
            </div>
          </GlassCard>

          {/* Health and Safety */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Health, Safety, and Liability
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Health Disclosure</h3>
                <p className="leading-relaxed">
                  You agree to disclose any health conditions, allergies, medications, injuries, or pregnancy that may affect your treatment. Failure to disclose relevant health information may result in injury, and we are not liable for adverse reactions resulting from undisclosed conditions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Contraindications</h3>
                <p className="leading-relaxed">
                  Certain conditions may prevent you from receiving specific treatments. We reserve the right to refuse service if we believe a treatment may be harmful to you. In such cases, we will work with you to find alternative services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Assumption of Risk</h3>
                <p className="leading-relaxed">
                  By receiving spa services, you acknowledge that there are inherent risks, including but not limited to allergic reactions, discomfort, or minor irritation. You assume all risks associated with receiving spa treatments.
                </p>
              </div>

              <div className="bg-spa-sage-50/50 border border-spa-sage-200 rounded-lg p-4">
                <h3 className="font-semibold text-spa-sage-900 mb-2">Limitation of Liability</h3>
                <p className="text-sm leading-relaxed">
                  To the fullest extent permitted by law, ULU Head Spa and its employees are not liable for any injuries, damages, or losses arising from your use of our services. Our total liability shall not exceed the amount paid for the service in question.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Minors</h3>
                <p className="leading-relaxed">
                  Services for individuals under 18 years of age require parental or legal guardian consent. A parent or guardian must be present during the entire service for clients under 16.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Conduct and Etiquette */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Client Conduct and Spa Etiquette
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed mb-3">
                To ensure a peaceful and relaxing environment for all guests, we ask that you:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Silence or turn off mobile phones and electronic devices</li>
                <li>Speak in quiet, respectful tones</li>
                <li>Respect the privacy and space of other guests</li>
                <li>Follow all instructions provided by spa staff</li>
                <li>Refrain from bringing outside food or beverages</li>
                <li>Maintain personal hygiene and cleanliness</li>
              </ul>

              <div className="bg-spa-gold-50/50 border border-spa-gold-200 rounded-lg p-4 mt-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Zero Tolerance Policy:</strong> We have a zero-tolerance policy for inappropriate behavior, harassment, or disrespect toward staff or other guests. We reserve the right to terminate services immediately without refund for violations of this policy.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Photography and Content */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Photography and Content Rights
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Your Content</h3>
                <p className="leading-relaxed">
                  By providing photos, testimonials, or reviews, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content for marketing and promotional purposes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Photography Policy</h3>
                <p className="leading-relaxed">
                  We may take photographs or videos during events or for promotional purposes. If you do not wish to be photographed, please inform staff. Personal photography is permitted in designated areas only and must not disturb other guests.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Our Intellectual Property</h3>
                <p className="leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of ULU Head Spa and protected by copyright law. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Modifications and Updates */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Modifications to Services and Terms
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our services or website at any time without notice. We may also update these Terms from time to time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the updated Terms.
              </p>

              <p className="leading-relaxed">
                For significant changes, we will make reasonable efforts to notify you via email or through a notice on our website.
              </p>
            </div>
          </GlassCard>

          {/* Dispute Resolution */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Dispute Resolution and Governing Law
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Dispute Resolution</h3>
                <p className="leading-relaxed mb-3">
                  If you have a complaint or dispute, please contact us first to seek resolution:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: support@uluspas.com</li>
                  <li>Phone: (801) 528-7368</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  We will make every effort to resolve disputes amicably. If we cannot reach a resolution, any legal action must be brought in the state or federal courts located in Utah.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Arbitration</h3>
                <p className="leading-relaxed">
                  For claims under $10,000, you agree to resolve disputes through binding arbitration rather than in court, unless you opt out within 30 days of first using our services by sending written notice to the address below.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Severability */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Severability and Entire Agreement
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>

              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and ULU Head Spa regarding your use of our services and supersede any prior agreements.
              </p>
            </div>
          </GlassCard>

          {/* Contact Information */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10 bg-gradient-to-br from-spa-sage-50/50 to-spa-gold-50/50">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Contact Us
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
              </p>

              <div className="space-y-2">
                <p className="font-semibold text-spa-sage-900">ULU Head Spa</p>
                <p>
                  Email:{' '}
                  <a href="mailto:support@uluspas.com" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    support@uluspas.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    (801) 528-7368
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://www.uluspas.com" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    www.uluspas.com
                  </a>
                </p>
              </div>

              <div className="bg-white/60 border border-spa-sage-200 rounded-lg p-4 mt-6">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Acknowledgment:</strong> By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </GlassCard>

        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </main>
  )
}
