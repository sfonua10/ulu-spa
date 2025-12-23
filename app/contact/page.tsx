'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import ContactCard from '@/app/components/ui/ContactCard';
import ParticleField from '@/app/components/ui/ParticleField';
import FloatingElements from '@/app/components/ui/FloatingElements';

export default function ContactPage() {
  const contactInfo = {
    address: '597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064',
    phone: '(801) 528-7368',
    email: 'uluspaofficial@gmail.com',
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-500/20 via-spa-sage-500/10 to-luxury-warm-500/20" />

        {/* Particle field */}
        <ParticleField />

        {/* Floating decorative elements */}
        <FloatingElements />

        {/* Decorative blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spa-gold-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spa-sage-400/30 rounded-full blur-3xl animate-float-delayed" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-spa-gold-500" />
              <span className="text-sm font-montserrat font-medium text-spa-gold-600 uppercase tracking-wider">
                Connect With Us
              </span>
              <Sparkles className="w-5 h-5 text-spa-gold-500" />
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-stone-900 mb-6">
              Get in Touch
            </h1>

            <p className="text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
              We&apos;re here to answer your questions and help you begin your journey to ultimate relaxation
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-12">
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

      {/* Contact Cards */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-spa-cream-50/30 to-white" />

        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-spa-gold-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-spa-sage-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-spa-gold-400" />
              <Sparkles className="w-4 h-4 text-spa-gold-500" />
              <span className="text-sm font-montserrat font-medium text-spa-gold-600 uppercase tracking-widest">
                Ways to Connect
              </span>
              <Sparkles className="w-4 h-4 text-spa-gold-500" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-spa-gold-400" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-900">
              We&apos;d Love to Hear From You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Visit Us Card */}
            <ContactCard
              icon={<MapPin className="w-8 h-8" />}
              title="Visit Us"
              delay={0}
              footer={
                <p className="text-sm text-stone-600">
                  <strong className="text-stone-900">Parking:</strong> Free parking available on-site
                </p>
              }
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
            </ContactCard>

            {/* Reach Us Card */}
            <ContactCard
              icon={<Phone className="w-8 h-8" />}
              title="Reach Us"
              delay={100}
              footer={
                <p className="text-sm text-stone-600">
                  We typically respond within 24 hours
                </p>
              }
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
            </ContactCard>

            {/* Hours Card */}
            <ContactCard
              icon={<Clock className="w-8 h-8" />}
              title="Hours"
              delay={200}
              footer={
                <p className="text-sm text-stone-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  By appointment only
                </p>
              }
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
            </ContactCard>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-stone-600 font-montserrat mb-4">Ready to relax?</p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white font-montserrat font-semibold rounded-full hover:from-spa-gold-600 hover:to-spa-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book Your Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
