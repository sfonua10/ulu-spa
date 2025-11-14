'use client'

import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { HeroPattern, LeafDecoration, RotatingElement } from '../ui/DecorativeElements'
import { useInView } from '@/app/hooks/useInView'
import { useState, useRef, useEffect } from 'react'

export default function HeroSection() {
  const { ref: heroRef, isInView } = useInView({ threshold: 0.2 })
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToServices = () => {
    const element = document.getElementById('services-preview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoError = () => {
    console.log('Video failed to load, showing fallback background')
    setVideoError(true)
  }

  const handleVideoLoad = () => {
    console.log('Video loaded successfully')
    setVideoLoaded(true)
  }

  useEffect(() => { 
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    
    const handleResize = () => checkMobile()
    window.addEventListener('resize', handleResize)
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause()
    }
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Get the appropriate video source
  const getVideoSource = () => {
    if (!isClient) return '/videos/ulu-facial-site.mp4' // SSR fallback
    return isMobile ? '/videos/ulu-facial-site-mobile.mov' : '/videos/ulu-facial-site.mp4'
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16"
    >
      {/* Responsive Video Background */}
      {!videoError && isClient && (
        <video
          ref={videoRef}
          key={getVideoSource()} // Force re-render when source changes
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={getVideoSource()}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadStart={() => {
            console.log(`Video loading started: ${getVideoSource()}`)
            setVideoLoaded(false)
          }}
          onCanPlay={handleVideoLoad}
          onError={handleVideoError}
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Background Image */}
      {(videoError || !videoLoaded) && (
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-spa-dark via-spa-primary to-spa-accent opacity-90 z-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3e%3cg fill="none" fill-rule="evenodd"%3e%3cg fill="%23ffffff" fill-opacity="0.1"%3e%3cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")'
          }}
        />
      )}
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Subtle bottom gradient to indicate scroll on mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent z-10 md:hidden"></div>
      
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
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 pb-12 md:pb-8 ${
            isInView ? 'animate-in animate-slide-up animate-delay-900' : 'opacity-0'
          }`}>
            <a 
              href={process.env.NEXT_PUBLIC_MANGOMINT_BOOKING_URL || 'https://booking.mangomint.com/904811'}
              className="mangomint-booking-button group relative overflow-hidden bg-transparent hover:bg-custom-gold/10 text-custom-gold px-12 py-6 rounded-full font-bold text-xl transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-custom-gold/30 transform hover:scale-105 border-2 border-custom-gold hover:border-custom-gold backdrop-blur-sm inline-block"
            >
              <div className="absolute inset-0 bg-custom-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                Book Now
              </span>
            </a>
            
            <Link 
              href="/services"
              className="group border-2 border-custom-gold/60 text-white/95 hover:bg-custom-gold/15 hover:border-custom-gold backdrop-blur-sm px-10 py-5 rounded-full font-medium text-lg transition-all duration-500 shadow-xl hover:shadow-custom-gold/20 transform hover:scale-105 inline-block"
            >
              <span className="flex items-center justify-center">
                View Services
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Hidden on mobile */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group hidden md:block ${
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