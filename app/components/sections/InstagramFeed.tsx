'use client';

import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';

export default function InstagramFeed() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-spa-gold-50/20 to-white" />

      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-spa-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-spa-sage-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-spa-gold-500" />
            <span className="text-sm font-montserrat font-medium text-spa-gold-600 uppercase tracking-wider">
              Follow Our Journey
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Connect With Us on Instagram
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-montserrat mb-12">
            Join our community and stay inspired with relaxation tips, treatment highlights, and wellness insights
          </p>

          {/* Instagram Handle Badge */}
          <a
            href="https://www.instagram.com/ulu.spa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold-500 to-spa-sage-500 text-white font-montserrat font-semibold shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 hover:scale-105 mb-8"
          >
            <Instagram className="w-5 h-5" />
            <span>@ulu.spa</span>
          </a>

          {/* CTA Button */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <a
              href="https://www.instagram.com/ulu.spa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="luxury" size="lg" className="gap-2">
                <Instagram className="w-5 h-5" />
                Follow Us on Instagram
              </Button>
            </a>
            <p className="mt-6 text-sm text-stone-500 font-montserrat">
              Share your ULU experience with{' '}
              <span className="font-semibold text-spa-gold-600">#ULUHeadSpa</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
