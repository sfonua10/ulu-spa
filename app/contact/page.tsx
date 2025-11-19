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
  Gift,
  CreditCard
} from 'lucide-react';
import ContactCard from '@/app/components/ui/ContactCard';
import { Button } from '@/app/components/ui/Button';
// import FloatingBookingButton from '@/app/components/ui/FloatingBookingButton';
import ParticleField from '@/app/components/ui/ParticleField';
import FloatingElements from '@/app/components/ui/FloatingElements';

export default function ContactPage() {
  const contactInfo = {
    address: '597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064',
    phone: '(801) 528-7368',
    email: 'uluspaofficial@gmail.com',
    hours: {
      weekdays: 'Mon - Fri: 9AM - 8PM',
      weekends: 'Sat - Sun: 10AM - 6PM'
    }
  };

  const handleBookNow = () => {
    if (typeof window !== 'undefined' && window.Mangomint?.show) {
      window.Mangomint.show();
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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

      {/* Main Contact Cards */}
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

      {/* Interactive Map Section */}
      <section className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-spa-sage-50/30 via-white to-spa-cream-50/30" />

        {/* Title Section - Keep in container for proper alignment */}
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Find Your Way to Relaxation
            </h2>
            <p className="text-lg text-stone-600 font-montserrat">
              Located in the heart of Pleasant Grove, Utah
            </p>
          </div>
        </div>

        {/* Full Width Map Container */}
        <div className="relative w-full">
          <div className="relative overflow-hidden shadow-soft-xl backdrop-blur-xl border-y border-white/30 animate-fade-in" style={{ animationDelay: '200ms' }}>
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-spa-gold-500/10 via-spa-sage-500/5 to-luxury-warm-500/10" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-spa-gold-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-spa-sage-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Ready to Experience Ultimate Relaxation?
              </h2>
              <p className="text-xl text-stone-700 mb-12 font-montserrat">
                Book your appointment today and discover the transformative power of luxury head spa therapy
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  variant="luxury"
                  size="lg"
                  onClick={handleBookNow}
                  className="w-full sm:w-auto gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = `tel:+18015287368`}
                  className="w-full sm:w-auto gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </Button>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <a
                  href="/services"
                  className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Sparkles className="w-8 h-8 text-spa-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                    Our Services
                  </h3>
                  <p className="text-sm text-stone-600 font-montserrat">
                    Explore our luxury treatments
                  </p>
                </a>

                <a
                  href="https://clients.mangomint.com/gift-cards/uluspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Gift className="w-8 h-8 text-spa-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                    Gift Cards
                  </h3>
                  <p className="text-sm text-stone-600 font-montserrat">
                    Give the gift of relaxation
                  </p>
                </a>

                <a
                  href="/memberships"
                  className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CreditCard className="w-8 h-8 text-spa-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                    Memberships
                  </h3>
                  <p className="text-sm text-stone-600 font-montserrat">
                    Join our wellness community
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Booking Button */}
      {/* <FloatingBookingButton /> */}
    </main>
  );
}
