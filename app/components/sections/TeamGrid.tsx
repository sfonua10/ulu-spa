'use client';

import React from 'react';
import { teamMembers } from '@/app/data/team';
import { Sparkles } from 'lucide-react';

export default function TeamGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50/30" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-spa-gold-500" />
            <span className="text-sm font-montserrat font-medium text-spa-gold-600 uppercase tracking-wider">
              Our Expert Team
            </span>
            <Sparkles className="w-5 h-5 text-spa-gold-500" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Meet Your Wellness Specialists
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-montserrat">
            Our dedicated team of master therapists brings years of expertise and genuine care to every treatment
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl border border-white/30 shadow-soft-lg hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-3">
                {/* Image placeholder with gradient */}
                <div className="relative h-80 bg-gradient-to-br from-spa-gold-400/30 via-spa-sage-400/20 to-luxury-warm-400/30 overflow-hidden">
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-spa-gold-400/40 blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-spa-sage-400/40 blur-3xl" />
                  </div>

                  {/* Elegant silhouette placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-spa-gold-300/50 to-spa-sage-300/50 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="font-playfair text-5xl font-bold text-white/90">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-stone-900 mb-2 group-hover:text-spa-gold-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-spa-gold-600 font-montserrat font-medium text-sm uppercase tracking-wider mb-3">
                    {member.title}
                  </p>
                  <div className="mb-4 pb-4 border-b border-stone-200">
                    <p className="text-sm font-montserrat text-spa-sage-700 font-medium italic">
                      Specialty: {member.specialty}
                    </p>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed font-montserrat">
                    {member.description}
                  </p>
                </div>

                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-spa-gold-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p className="text-stone-600 font-montserrat text-lg mb-6">
            Request your preferred therapist when booking your appointment
          </p>
        </div>
      </div>
    </section>
  );
}
