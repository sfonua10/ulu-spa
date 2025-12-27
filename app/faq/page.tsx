'use client';

import FAQAccordion from '@/app/components/ui/FAQAccordion';
// import FloatingBookingButton from '@/app/components/ui/FloatingBookingButton';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Mail } from 'lucide-react';

const generalFAQs = [
  {
    question: 'What is ULU Spa and what makes it unique?',
    answer: 'ULU Spa is a Polynesian-inspired luxury head spa and wellness lounge specializing in scalp treatments and rejuvenating rituals. The name represents "head" in Tongan, honoring our cultural heritage while providing premium wellness experiences. <a href="/about" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Learn more about our story</a>.',
  },
  {
    question: 'What services do you offer?',
    answer: 'The spa provides <a href="/services" class="text-spa-gold-600 hover:text-spa-gold-700 underline">head spa treatments</a>, scalp massages, steam therapies, herbal scalp detox, foot baths, decollate massages, and Scratch Therapy. Each service is designed to promote relaxation, rejuvenation, and overall wellness. <a href="/services" class="text-spa-gold-600 hover:text-spa-gold-700 underline">View all our services</a>.',
  },
  {
    question: 'Do you use natural or organic products?',
    answer: 'Yes, we prioritize clean, natural, and cruelty-free products including handcrafted options from trusted wellness brands. We carefully select products that align with our commitment to quality and sustainability.',
  },
  {
    question: 'Can I customize my treatment?',
    answer: 'Absolutely! Our service providers consult with clients beforehand to tailor sessions based on individual needs like hydration, tension relief, or scalp cleansing. We believe in personalized care that addresses your specific wellness goals. <a href="/contact" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Contact us</a> to discuss your needs.',
  },
  {
    question: 'How should I prepare for my head spa session?',
    answer: 'Please arrive with dry hair and avoid heavy styling products. If you have had recent chemical treatments, notify our staff so they can adjust care products accordingly to ensure the best results. See our full <a href="/policy" class="text-spa-gold-600 hover:text-spa-gold-700 underline">booking policy</a> for more details.',
  },
  {
    question: 'Do you accept walk-ins or is it by appointment only?',
    answer: 'ULU Spa is primarily appointment-based to ensure each guest receives dedicated time and attention. Walk-ins are welcome when availability allows, and we are happy to accommodate based on the next open appointment time. To guarantee your preferred provider and time, we recommend <a href="https://booking.mangomint.com/904811" class="text-spa-gold-600 hover:text-spa-gold-700 underline">booking in advance</a>.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require at least 24 hours\' notice for cancellations or rescheduling. Cancellations within 24 hours or no-shows may incur fees. We appreciate your understanding as this helps us serve all our clients effectively. Read our complete <a href="/policy" class="text-spa-gold-600 hover:text-spa-gold-700 underline">booking policy</a>.',
  },
  {
    question: 'Is treatment suitable for everyone?',
    answer: 'Generally yes, our treatments are suitable for most people. However, those with severe eczema or psoriasis should consult healthcare providers first. Please inform us of any skin conditions or concerns during booking.',
  },
  {
    question: 'How long are your treatment sessions?',
    answer: 'Our signature treatments are designed to be comprehensive 90-minute experiences, allowing ample time for consultation, treatment, and relaxation. We also offer 30, 60, and 75-minute options for guests with varying schedules. The full 90-minute sessions provide the most immersive and restorative experience. <a href="/services" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Browse our services</a> to find your perfect treatment.',
  },
];

const scratchTherapyFAQs = [
  {
    question: 'What is Scratch Therapy?',
    answer: 'Scratch Therapy is a soothing, sensory-driven body treatment using gentle to firm scratching motions to relieve stress and activate the parasympathetic nervous system. We use soft scratch nails, gentle brushes, and sanitized tools to create a smooth, relaxing scratch sensation—safe, soothing, and incredibly calming. Every tool is fully sanitized and selected for safety, comfort, and controlled sensory stimulation. Many guests experience ASMR-like tingling sensations and describe it as profoundly calming. <a href="/services" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Explore our Scratch Therapy services</a>.',
  },
  {
    question: 'What are the benefits?',
    answer: 'Scratch Therapy reduces anxiety, tension, insomnia, and stress. Clients often experience ASMR-like tingling sensations and deep relaxation. It\'s an effective way to decompress and restore balance to both mind and body.',
  },
  {
    question: 'Is Scratch Therapy safe for everyone?',
    answer: 'Yes, it\'s non-invasive and safe for most people. However, clients with open wounds or severe skin conditions should inform our staff before their session so we can make appropriate adjustments. <a href="/contact" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Contact us</a> if you have any concerns.',
  },
  {
    question: 'What tools or techniques are used?',
    answer: 'We use professional-grade scratch brushes, soft gloves, and sanitized tools specifically designed to simulate scratching. All tools are carefully selected for comfort, safety, and effectiveness.',
  },
  {
    question: 'What should I wear?',
    answer: 'We recommend loose, comfortable clothing. For back sessions, we provide spa wraps or modesty blankets to ensure your comfort throughout the treatment. See our <a href="/policy" class="text-spa-gold-600 hover:text-spa-gold-700 underline">booking policy</a> for arrival tips.',
  },
  {
    question: 'How long is a session?',
    answer: 'Our <a href="/services" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Scratch Therapy sessions</a> range from 30 to 90 minutes. The 30-minute Island Drift focuses on back and shoulders, the 60-minute Heavenly Glide provides full-body sensory restoration, the 75-minute Pure Unwind includes hand and arm ritual extensions, and our signature 90-minute ULU Trace offers the most immersive full-body experience with Tongan brush technique and skin drumming. Scratch Therapy can also be added as an upgrade to other services.',
  },
  {
    question: 'Can I add Scratch Therapy to another service?',
    answer: 'Yes! Scratch Therapy can be booked as a standalone service or as an add-on to our Signature Head Spa Package or Foot Bath Ritual. We\'re happy to customize your wellness experience. <a href="https://booking.mangomint.com/904811" class="text-spa-gold-600 hover:text-spa-gold-700 underline">Book your appointment</a> to discuss options.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-900 via-sage-800 to-sage-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-shimmer-once">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-800 font-montserrat max-w-2xl mx-auto">
            Find answers to common questions about our services, treatments, and policies
          </p>
        </div>
      </section>

      {/* General Questions Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              General Questions
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sage-400 to-gold-500 rounded-full"></div>
          </div>

          <FAQAccordion items={generalFAQs} />
        </div>
      </section>

      {/* Scratch Therapy Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Scratch Therapy FAQs
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-sage-400 rounded-full"></div>
            <p className="text-gray-800 font-montserrat mt-4 text-lg">
              Learn more about our signature Scratch Therapy treatment
            </p>
          </div>

          <FAQAccordion items={scratchTherapyFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-sage-800/50 to-sage-900/50 backdrop-blur-lg rounded-3xl border border-white/10 p-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-800 font-montserrat text-lg mb-8">
              We&apos;re here to help! Reach out to our team or book a consultation to learn more about how ULU Spa can enhance your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.mangomint.com/904811"
                className="mangomint-booking-button px-8 py-4 bg-gradient-to-br from-spa-gold-500 to-spa-gold-600 text-white rounded-full font-montserrat font-semibold hover:from-spa-gold-600 hover:to-spa-gold-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <CalendarDaysIcon className="h-5 w-5" />
                Book Appointment
              </a>
              <a
                href="mailto:uluspaofficial@gmail.com"
                className="px-8 py-4 bg-white text-spa-sage-900 rounded-full font-montserrat font-semibold border border-white/40 hover:bg-spa-gold-50 hover:text-spa-sage-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <FloatingBookingButton /> */}
    </main>
  );
}
