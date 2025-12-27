'use client';

import Image from 'next/image';
import { useInView } from '@/app/hooks/useInView';
import VideoBackground from '@/app/components/ui/VideoBackground';
import { GlassCard } from '@/app/components/ui/GlassCard';
// import FloatingBookingButton from '@/app/components/ui/FloatingBookingButton';
import { LeafDecoration } from '@/app/components/ui/DecorativeElements';
import {
  founders,
  culturalStory
} from '@/app/data/about';
import {
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function AboutPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 });
  const { ref: storyRef, isInView: storyInView } = useInView({ threshold: 0.2 });
  const { ref: foundersRef, isInView: foundersInView } = useInView({ threshold: 0.2 });
  const { ref: specialistsRef, isInView: specialistsInView } = useInView({ threshold: 0.2 });

  return (
    <div className="relative">
      {/* Hero Section */}
      <VideoBackground
        videoSrc="/videos/ulu-facial-site-optimized.mp4"
        fallbackImage="/images/hero-poster.jpg"
        className="min-h-[70vh]"
      >
        <section
          ref={heroRef}
          className="min-h-[70vh] flex items-center justify-center relative z-10 pt-24"
        >
          <div className={`max-w-4xl mx-auto text-center px-6 transition-all duration-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Decorative Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-in animate-fade-in animate-slow">
              <SparklesIcon className="w-5 h-5 text-spa-gold-400" />
              <span className="text-white font-medium tracking-wide">EST. 2025</span>
              <SparklesIcon className="w-5 h-5 text-spa-gold-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-in animate-slide-up animate-delay-100">
              Our Story
            </h1>

            <p className="text-3xl md:text-4xl font-script text-spa-gold-300 mb-8 animate-in animate-fade-in animate-delay-300">
              Where Wisdom Meets Wellness
            </p>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-in animate-fade-in animate-delay-500">
              Discover the meaning behind ULU and the passion that drives our commitment to your restoration
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mt-12 animate-in animate-fade-in animate-delay-700">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-spa-gold-400" />
              <SparklesIcon className="w-6 h-6 text-spa-gold-400 mx-4" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-spa-gold-400" />
            </div>
          </div>
        </section>
      </VideoBackground>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-spa-sage-100">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
        </div>
      </div>

      {/* Origin Story Section */}
      <section
        ref={storyRef}
        className="py-20 md:py-32 bg-gradient-to-br from-spa-sage-50 via-white to-spa-gold-50/10 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-spa-gold-200 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-spa-sage-200 rounded-full blur-3xl animate-float"
               style={{ animationDelay: '2s', animationDuration: '10s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
              {culturalStory.heading}
            </h2>
            <p className="text-2xl md:text-3xl font-script text-spa-gold-600">
              {culturalStory.subtitle}
            </p>
          </div>

          {/* Cultural Story Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlassCard
              blur="md"
              opacity={0.8}
              className={`p-8 md:p-10 transition-all duration-1000 delay-100 ${
                storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="absolute -top-3 -left-3">
                <LeafDecoration size={80} />
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-800 mb-4">
                Cultural Heritage
              </h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {culturalStory.description}
              </p>
            </GlassCard>

            <GlassCard
              blur="md"
              opacity={0.8}
              className={`p-8 md:p-10 transition-all duration-1000 delay-300 ${
                storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="absolute -top-3 -right-3">
                <LeafDecoration size={80} />
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-800 mb-4">
                Our Philosophy
              </h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {culturalStory.philosophy}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        ref={foundersRef}
        className="py-20 md:py-32 bg-gradient-to-br from-white via-spa-cream-50 to-spa-sage-50/30 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            foundersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The visionaries behind ULU Head Spa&apos;s commitment to restoration and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`group transition-all duration-1000 ${
                  foundersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <GlassCard blur="lg" opacity={0.6} className="overflow-hidden hover-lift">
                  {/* Founder Image */}
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-spa-sage-100 to-spa-gold-100 overflow-hidden">
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: founder.imagePosition || 'center' }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-sm border-2 border-spa-gold-300 mx-auto mb-4 flex items-center justify-center">
                            <SparklesIcon className="w-16 h-16 text-spa-gold-600" />
                          </div>
                          <p className="text-stone-500 text-sm px-6">
                            Photo coming soon
                          </p>
                        </div>
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Founder Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-display font-bold text-stone-900 mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-spa-gold-600 font-medium mb-4 tracking-wide">
                      {founder.role}
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Providers Section */}
      <section
        ref={specialistsRef}
        className="py-20 md:py-24 bg-gradient-to-br from-spa-sage-50 via-white to-spa-gold-50/10 relative"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${
            specialistsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-spa-sage-200 shadow-soft mb-8">
                <UserGroupIcon className="w-6 h-6 text-spa-gold-600" />
                <span className="text-xl font-display font-bold text-spa-sage-800">
                  Our Service Providers
                </span>
              </div>
            </div>

            {/* Growing Team Message */}
            <GlassCard blur="md" opacity={0.6} className="p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-spa-gold-100/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-spa-sage-100/30 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-spa-gold-100 to-spa-sage-100 mx-auto mb-6 flex items-center justify-center">
                  <UserGroupIcon className="w-10 h-10 text-spa-gold-600" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-stone-800 mb-4">
                  Growing Our Team
                </h3>

                <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto mb-6">
                  Our team of skilled service providers is growing! Each specialist is carefully
                  selected for their expertise, passion for wellness, and commitment to the ULU
                  experience. We take pride in training our team in both modern techniques and
                  traditional Polynesian wellness practices.
                </p>

                <p className="text-spa-gold-700 font-medium">
                  Check back soon to meet the talented individuals who will be caring for you.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-spa-sage-800 to-stone-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Experience ULU?
          </h2>
          <p className="text-spa-sage-200 text-lg mb-8">
            Book your appointment and let our team take care of you.
          </p>
          <a
            href="https://booking.mangomint.com/904811"
            className="mangomint-booking-button inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white rounded-full font-semibold hover:from-spa-gold-600 hover:to-spa-gold-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <SparklesIcon className="w-5 h-5" />
            Book Your Visit
          </a>
        </div>
      </section>
    </div>
  );
}
