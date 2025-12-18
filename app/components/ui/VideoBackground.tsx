'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  videoSrc?: string
  mobileVideoSrc?: string
  fallbackImage: string
  children?: React.ReactNode
  overlay?: boolean
  overlayOpacity?: number
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  priority?: boolean
  videoAspectRatio?: number  // Video's width/height ratio (e.g., 9/16 = 0.5625 for portrait)
}

export default function VideoBackground({
  videoSrc = '/videos/ulu-facial-site-optimized.mp4',
  mobileVideoSrc = '/videos/ulu-facial-site-mobile.mp4',
  fallbackImage,
  children,
  overlay = true,
  overlayOpacity = 0.3,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  priority = false,
  videoAspectRatio
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [dynamicScale, setDynamicScale] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playAttemptsRef = useRef(0)
  const maxPlayAttempts = 5
  const hasAttemptedPlayRef = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 640px)')

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Set initial values
    setPrefersReducedMotion(mediaQuery.matches)
    setIsMobile(mobileQuery.matches)

    mediaQuery.addEventListener('change', handleMotionChange)
    mobileQuery.addEventListener('change', handleMobileChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  // Calculate dynamic scale for portrait videos on desktop
  useEffect(() => {
    if (!videoAspectRatio || isMobile) {
      setDynamicScale(1)
      return
    }

    const calculateScale = () => {
      const viewportAspectRatio = window.innerWidth / window.innerHeight
      const scale = viewportAspectRatio / videoAspectRatio
      setDynamicScale(Math.max(scale, 1))  // Never scale below 1
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [videoAspectRatio, isMobile])

  // Attempt to play the video with retry logic
  const attemptPlay = async () => {
    if (!videoRef.current || playAttemptsRef.current >= maxPlayAttempts || isPlaying) {
      if (playAttemptsRef.current >= maxPlayAttempts && !isPlaying) {
        setShowPlayButton(true)
      }
      return
    }

    try {
      playAttemptsRef.current++

      // Ensure video is muted for autoplay to work
      videoRef.current.muted = true

      // Try to set currentTime to trigger load
      if (videoRef.current.readyState >= 2) {
        videoRef.current.currentTime = 0.01
      }

      const playPromise = videoRef.current.play()

      if (playPromise !== undefined) {
        await playPromise
        setIsPlaying(true)
        setShowPlayButton(false)
        playAttemptsRef.current = 0 // Reset on success
        console.log('Video playing successfully')
      }
    } catch (error) {
      console.log(`Play attempt ${playAttemptsRef.current} failed:`, error)

      // Try again after a short delay
      if (playAttemptsRef.current < maxPlayAttempts) {
        setTimeout(() => {
          attemptPlay()
        }, 300 * playAttemptsRef.current) // Increasing delay with each attempt
      } else {
        // Show play button if all attempts failed
        setShowPlayButton(true)
      }
    }
  }

  // Handle when video can play through
  const handleCanPlay = () => {
    console.log('Video can play')
    setIsVideoLoaded(true)
    setHasError(false)

    // Attempt to play once video can play
    if (autoPlay && !prefersReducedMotion && !hasAttemptedPlayRef.current) {
      hasAttemptedPlayRef.current = true
      // Small delay to ensure everything is ready
      setTimeout(() => {
        attemptPlay()
      }, 100)
    }
  }

  // Handle video errors
  const handleVideoError = () => {
    console.error('Video failed to load')
    setHasError(true)
    setIsVideoLoaded(false)
    setShowPlayButton(false)
  }

  // Manual play when user clicks the play button
  const handleManualPlay = async () => {
    if (!videoRef.current) return

    try {
      // Remove muted for user-initiated play (better experience)
      videoRef.current.muted = false
      await videoRef.current.play()
      setIsPlaying(true)
      setShowPlayButton(false)
    } catch (error) {
      // Fallback to muted if unmuted play fails
      try {
        videoRef.current.muted = true
        await videoRef.current.play()
        setIsPlaying(true)
        setShowPlayButton(false)
      } catch (mutedError) {
        console.error('Manual play failed:', mutedError)
      }
    }
  }

  // Initial page load trigger - more aggressive approach
  useEffect(() => {
    if (!autoPlay || prefersReducedMotion) return

    // Show video container after a short delay (like the ULU Spas example)
    const showVideoTimer = setTimeout(() => {
      setShowVideo(true)
    }, 500)

    // Attempt initial play after page settles
    const initialPlayTimer = setTimeout(() => {
      if (videoRef.current && !isPlaying && !hasAttemptedPlayRef.current) {
        console.log('Initial play attempt triggered')
        hasAttemptedPlayRef.current = true
        attemptPlay()
      }
    }, 1500) // Wait 1.5 seconds after page load

    return () => {
      clearTimeout(showVideoTimer)
      clearTimeout(initialPlayTimer)
    }
  }, [autoPlay, prefersReducedMotion])

  // Effect to handle video initialization and various triggers
  useEffect(() => {
    if (!videoRef.current || prefersReducedMotion || hasError || !showVideo) return

    const video = videoRef.current

    // Force a play attempt when video element is ready
    const handleLoadedData = () => {
      console.log('Video data loaded')
      if (autoPlay && !isPlaying) {
        setTimeout(() => attemptPlay(), 200)
      }
    }

    // Handle when metadata is loaded
    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded')
      setIsVideoLoaded(true)
    }

    // Handle play event
    const handlePlay = () => {
      console.log('Video started playing')
      setIsPlaying(true)
      setShowPlayButton(false)
    }

    // Handle pause event
    const handlePause = () => {
      console.log('Video paused')
      // If video pauses unexpectedly and we want it playing, try again
      if (autoPlay && !video.ended && video.readyState >= 2) {
        setTimeout(() => {
          if (video.paused && !document.hidden) {
            attemptPlay()
          }
        }, 500)
      }
    }

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('canplay', handleCanPlay)

    // Also attempt play on window focus (helps with tab switching)
    const handleFocus = () => {
      if (autoPlay && video.paused) {
        attemptPlay()
      }
    }

    const handleVisibilityChange = () => {
      if (!document.hidden && autoPlay && video.paused) {
        attemptPlay()
      }
    }

    window.addEventListener('focus', handleFocus)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Intersection Observer to play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && autoPlay && video.paused) {
            console.log('Video in view, attempting play')
            attemptPlay()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(video)

    // Trigger play on first user interaction (mobile fallback)
    const handleFirstInteraction = () => {
      if (video.paused && autoPlay) {
        attemptPlay()
      }
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.removeEventListener('click', handleFirstInteraction)
    }

    document.addEventListener('touchstart', handleFirstInteraction, { once: true })
    document.addEventListener('click', handleFirstInteraction, { once: true })

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('canplay', handleCanPlay)
      window.removeEventListener('focus', handleFocus)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.removeEventListener('click', handleFirstInteraction)
      observer.disconnect()
    }
  }, [autoPlay, prefersReducedMotion, hasError, showVideo, isPlaying])

  // Determine which video source to use
  const currentVideoSrc = isMobile && mobileVideoSrc ? mobileVideoSrc : videoSrc

  // Should show video (not hiding on mobile anymore)
  const shouldShowVideo = !prefersReducedMotion && !hasError && currentVideoSrc && showVideo

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Always show fallback image initially */}
      <div className={`absolute top-0 left-0 w-full h-full z-0`}>
        <Image
          src={fallbackImage}
          alt="Luxury spa environment"
          fill
          className="object-cover"
          priority={priority}
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARUXFx0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AlTZjw3YDUZ9Kk8W0JcBuXOAOpJ4AxRRQFSlGzFZhH/9k="
        />
      </div>

      {/* Video Background */}
      {shouldShowVideo && (
        <>
          <video
            ref={videoRef}
            className={`absolute top-0 left-0 w-full h-full min-w-full min-h-full object-cover z-10 transition-opacity duration-1000 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            controls={controls}
            playsInline
            preload="auto" // Aggressive loading
            onCanPlay={handleCanPlay}
            onError={handleVideoError}
            poster={fallbackImage}
            aria-label="Ambient spa video background"
            style={{
              transform: dynamicScale > 1 ? `scale(${dynamicScale})` : undefined,
              willChange: isPlaying ? 'auto' : 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <source src={currentVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button Overlay (shown when autoplay fails) */}
          {showPlayButton && !isPlaying && (
            <button
              onClick={handleManualPlay}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 transition-opacity hover:bg-black/50"
              aria-label="Play video"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl transform transition-transform hover:scale-110">
                <svg
                  className="w-12 h-12 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </>
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-20"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-20" />

      {/* Content */}
      <div className="relative z-30 h-full">
        {children}
      </div>
    </div>
  )
}