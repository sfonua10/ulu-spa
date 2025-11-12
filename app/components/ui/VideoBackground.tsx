'use client'

import { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoSrc?: string
  fallbackImage: string
  children?: React.ReactNode
  overlay?: boolean
  overlayOpacity?: number
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function VideoBackground({
  videoSrc = '/videos/ulu-facial-site.mp4',
  fallbackImage,
  children,
  overlay = true,
  overlayOpacity = 0.3,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 640px)')
    
    setPrefersReducedMotion(mediaQuery.matches)
    setIsMobile(mobileQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMotionChange)
    mobileQuery.addEventListener('change', handleMobileChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    setHasError(false)
  }

  const handleVideoError = () => {
    setHasError(true)
    setIsVideoLoaded(false)
  }

  const shouldShowVideo = !prefersReducedMotion && !hasError && videoSrc && !isMobile

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Video Background */}
      {shouldShowVideo && (
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full min-w-full min-h-full object-cover z-0"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          preload="none"
          onCanPlay={handleVideoLoad}
          onError={handleVideoError}
          onLoadStart={() => {
            if (videoRef.current) {
              videoRef.current.poster = fallbackImage
            }
          }}
          poster={fallbackImage}
          aria-label="Ambient spa video background"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}

      {/* Fallback Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: (!shouldShowVideo || !isVideoLoaded) ? 1 : 0 
        }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full min-w-full min-h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${fallbackImage})` }}
        role="img"
        aria-label="Luxury spa environment"
      />

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}