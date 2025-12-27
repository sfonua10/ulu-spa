'use client'

import React from 'react'
import { GlassCard } from '@/app/components/ui/GlassCard'
import { ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import FloatingBackgroundElements from '@/app/components/ui/FloatingBackgroundElements'
import { COMPANY } from '@/app/constants/config'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50">
      <FloatingBackgroundElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-spa-sage-700 text-sm font-medium mb-8 border border-spa-sage-200 shadow-soft">
            <ShieldCheckIcon className="h-5 w-5 text-spa-gold-600" />
            <span className="uppercase tracking-wide">Legal Information</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-spa-sage-900 mb-6">
            Privacy Policy
          </h1>

          <p className="font-montserrat text-xl text-spa-stone-600 leading-relaxed max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>

          <p className="font-montserrat text-sm text-spa-stone-500 mt-6 italic">
            Last Updated: January 18, 2025
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Introduction */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <LockClosedIcon className="h-8 w-8 text-spa-gold-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-4">
                  Introduction
                </h2>
                <p className="font-montserrat text-lg text-spa-stone-700 leading-relaxed">
                  ULU Head Spa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website uluspas.com and use our booking services through MangoMint. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Information We Collect */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Information We Collect
            </h2>

            <div className="space-y-6 font-montserrat text-spa-stone-700">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Personal Information</h3>
                <p className="leading-relaxed mb-3">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Book an appointment or service</li>
                  <li>Create an account through our booking system</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Contact us with inquiries or requests</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  This information may include: name, email address, phone number, mailing address, payment information, date of birth, and service preferences.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Health Information</h3>
                <p className="leading-relaxed">
                  For the safe provision of our spa services, we may collect health-related information including allergies, medical conditions, medications, and pregnancy status. This information is collected with your consent and used solely for providing appropriate treatments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Automatically Collected Information</h3>
                <p className="leading-relaxed mb-3">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Referring website and pages viewed</li>
                  <li>Time and date of access</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* How We Use Your Information */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              How We Use Your Information
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-3">
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and manage your appointments and bookings</li>
                <li>Send appointment confirmations and reminders</li>
                <li>Process payments and prevent fraud</li>
                <li>Provide customer service and respond to your inquiries</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our services and website functionality</li>
                <li>Analyze usage patterns and customer preferences</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Ensure the safety and security of our services</li>
              </ul>
            </div>
          </GlassCard>

          {/* Third-Party Services */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Third-Party Services
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">MangoMint Booking System</h3>
                <p className="leading-relaxed">
                  We use MangoMint as our booking and appointment management platform. When you book an appointment, your information is shared with and processed by MangoMint. MangoMint's privacy practices are governed by their own privacy policy, which can be found at{' '}
                  <a href="https://www.mangomint.com/privacy" className="text-spa-gold-600 hover:text-spa-gold-700 underline" target="_blank" rel="noopener noreferrer">
                    mangomint.com/privacy
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Payment Processing</h3>
                <p className="leading-relaxed">
                  Payment information is processed securely through our payment processor. We do not store complete credit card information on our servers. All payment data is encrypted and handled in compliance with PCI DSS standards.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Other Third Parties</h3>
                <p className="leading-relaxed mb-3">
                  We may share your information with other trusted third parties who assist us in operating our business, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email and SMS service providers for appointment reminders</li>
                  <li>Analytics providers to understand website usage</li>
                  <li>Marketing platforms for promotional communications</li>
                  <li>Cloud storage and hosting providers</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Cookies and Tracking */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Cookies and Tracking Technologies
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our site.
              </p>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality and booking system</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Track your browsing to provide relevant advertisements</li>
                </ul>
              </div>

              <p className="leading-relaxed">
                You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.
              </p>
            </div>
          </GlassCard>

          {/* Data Security */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Data Security and Retention
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Security Measures</h3>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">Data Retention</h3>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Typically, we retain customer records for a minimum of 3 years for business and legal purposes.
                </p>
              </div>

              <div className="bg-spa-gold-50/50 border border-spa-gold-200 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">Please Note:</strong> While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Your Rights */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Your Privacy Rights
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">California Residents (CCPA)</h3>
                <p className="leading-relaxed mb-3">
                  Under the California Consumer Privacy Act (CCPA), California residents have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Know what personal information we collect and how it's used</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li>Non-discrimination for exercising your privacy rights</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-spa-sage-800 mb-3">General Rights</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                </ul>
              </div>

              <div className="bg-spa-sage-50/50 border border-spa-sage-200 rounded-lg p-4 mt-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-spa-sage-900">To Exercise Your Rights:</strong> Contact us at{' '}
                  <a href="mailto:privacy@uluspas.com" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    privacy@uluspas.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+18015287368" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    (801) 528-7368
                  </a>
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Marketing Communications */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Marketing Communications
            </h2>

            <div className="font-montserrat text-spa-stone-700 space-y-4">
              <p className="leading-relaxed">
                With your consent, we may send you promotional emails, newsletters, and SMS messages about our services, special offers, and upcoming events. You can opt-out of marketing communications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clicking the "unsubscribe" link in any promotional email</li>
                <li>Replying "STOP" to any promotional text message</li>
                <li>Contacting us directly to update your communication preferences</li>
                <li>Adjusting your preferences in your MangoMint account</li>
              </ul>
              <p className="leading-relaxed">
                Please note that even if you opt-out of marketing communications, we will still send you transactional messages related to your appointments and bookings.
              </p>
            </div>
          </GlassCard>

          {/* Children's Privacy */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Children's Privacy
            </h2>

            <div className="font-montserrat text-spa-stone-700">
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. For minors receiving services, we require parental or guardian consent and presence.
              </p>
            </div>
          </GlassCard>

          {/* Changes to Privacy Policy */}
          <GlassCard blur="md" opacity={0.8} className="p-8 md:p-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-sage-900 mb-6">
              Changes to This Privacy Policy
            </h2>

            <div className="font-montserrat text-spa-stone-700">
              <p className="leading-relaxed mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                <li>Sending you an email notification (for significant changes)</li>
                <li>Displaying a notice on our website</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Your continued use of our services after any changes indicates your acceptance of the updated privacy policy.
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
                If you have questions or concerns about this privacy policy or our data practices, please contact us:
              </p>

              <div className="space-y-2">
                <p className="font-semibold text-spa-sage-900">ULU Head Spa</p>
                <p>
                  Email:{' '}
                  <a href="mailto:privacy@uluspas.com" className="text-spa-gold-600 hover:text-spa-gold-700 underline">
                    privacy@uluspas.com
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

              <p className="text-sm mt-6 italic">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </GlassCard>

        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </main>
  )
}
