'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Calendar
} from 'lucide-react';
import ContactCard from '@/app/components/ui/ContactCard';

export default function ContactPage() {
  const contactInfo = {
    address: '597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064',
    phone: '(801) 528-7368',
    email: 'uluspaofficial@gmail.com',
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-500/10 via-spa-sage-500/5 to-luxury-warm-500/10" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-stone-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 max-w-2xl mx-auto font-montserrat leading-relaxed">
            We&apos;re here to answer your questions and help you begin your wellness journey
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-spa-cream-50/30 to-white" />

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit Us Card */}
            <ContactCard
              icon={<MapPin className="w-8 h-8" />}
              title="Visit Us"
              delay={0}
            >
              <p className="font-montserrat leading-relaxed">
                {contactInfo.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-spa-gold-600 hover:text-spa-gold-700 font-medium transition-colors duration-300"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-sm text-stone-600">
                  <strong className="text-stone-900">Parking:</strong> Free parking available on-site
                </p>
              </div>
            </ContactCard>

            {/* Reach Us Card */}
            <ContactCard
              icon={<Phone className="w-8 h-8" />}
              title="Reach Us"
              delay={100}
            >
              <div className="space-y-3">
                <a
                  href={`tel:+18015287368`}
                  className="flex items-center gap-3 text-spa-gold-600 hover:text-spa-gold-700 font-medium transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-spa-gold-600 hover:text-spa-gold-700 font-medium transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-sm text-stone-600">
                  We typically respond within 24 hours
                </p>
              </div>
            </ContactCard>

            {/* Hours Card */}
            <ContactCard
              icon={<Clock className="w-8 h-8" />}
              title="Hours"
              delay={200}
            >
              <div className="space-y-2 font-montserrat">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-stone-900">Monday - Friday</span>
                  <span className="text-stone-700">9AM - 8PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-stone-900">Saturday - Sunday</span>
                  <span className="text-stone-700">10AM - 6PM</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-sm text-stone-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  By appointment only
                </p>
              </div>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative pb-24">
        <div className="relative w-full">
          <div className="relative overflow-hidden shadow-soft-xl backdrop-blur-xl border-y border-white/30">
            <div className="aspect-video">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent('597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064')}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ULU Head Spa Location"
                className="grayscale-[0.2] contrast-[1.1]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
