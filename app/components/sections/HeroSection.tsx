'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { HeroPattern, LeafDecoration, RotatingElement } from '../ui/DecorativeElements'
import AnimatedCounter from '../ui/AnimatedCounter'
import { useInView } from '@/app/hooks/useInView'

export default function HeroSection() {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.2 })

  const scrollToServices = () => {
    const element = document.getElementById('services-preview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16"
    >
      {/* Direct Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onError={(e) => console.log('Video error:', e)}
      >
        <source src="/videos/ulu-facial-site.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-20 z-10">
        <HeroPattern />
        <LeafDecoration className="top-[10%] left-[5%]" size={100} />
        <LeafDecoration className="bottom-[10%] right-[5%]" size={120} />
        
        <RotatingElement className="-top-48 -left-48" />
        <RotatingElement className="-bottom-48 -right-48" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        {/* Main Content */}
        <div className={`space-y-12 ${isInView ? 'animate-in animate-fade-in animate-slow' : 'opacity-0'}`}>
          {/* Script Subtitle */}
          <p className={`text-2xl md:text-3xl font-script mb-6 drop-shadow-sm tracking-wide ${
            isInView ? 'animate-in animate-fade-in animate-delay-300' : 'opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-gold-300 via-gold-200 to-gold-300 bg-clip-text text-transparent">
              Sanctuary of
            </span>
          </p>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-2xl ${
            isInView ? 'animate-in animate-slide-up animate-delay-500' : 'opacity-0'
          }`}>
            Luxury{' '}
            <span className="block relative bg-gradient-to-r from-gold-300 via-gold-200 to-gold-300 bg-clip-text text-transparent">
              Scalp Massage
            </span>
          </h1>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-light tracking-wide ${
            isInView ? 'animate-in animate-slide-up animate-delay-700' : 'opacity-0'
          }`}>
            ULU is your escape into tranquility, specializing in luxurious scalp massage 
            experiences that melt away stress and restore balance. Every session is designed to 
            calm the nervous system, stimulate healthy hair growth, and awaken your inner glow.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 ${
            isInView ? 'animate-in animate-slide-up animate-delay-900' : 'opacity-0'
          }`}>
            <div className="group relative overflow-hidden bg-transparent hover:bg-custom-gold/10 text-custom-gold px-12 py-6 rounded-full font-bold text-xl transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-custom-gold/30 transform hover:scale-105 border-2 border-custom-gold hover:border-custom-gold backdrop-blur-sm">
              <div className="absolute inset-0 bg-custom-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                Book Now
              </span>
            </div>
            
            <button className="group border-2 border-custom-gold/60 text-white/95 hover:bg-custom-gold/15 hover:border-custom-gold backdrop-blur-sm px-10 py-5 rounded-full font-medium text-lg transition-all duration-500 shadow-xl hover:shadow-custom-gold/20 transform hover:scale-105">
              <span className="flex items-center justify-center">
                View Services
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group ${
          isInView ? 'animate-in animate-fade-in animate-delay-1200' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-gold-300 transition-all duration-500 backdrop-blur-sm bg-black/20 hover:bg-black/30 px-4 py-3 rounded-2xl border border-white/10 hover:border-gold-300/40 animate-bounce hover:animate-none group-hover:scale-105">
          <span className="text-sm font-medium drop-shadow-sm tracking-wide">Discover More</span>
          <ChevronDownIcon className="h-5 w-5 drop-shadow-sm group-hover:translate-y-0.5 transition-transform duration-300" />
        </div>
      </button>
    </section>
  )
}