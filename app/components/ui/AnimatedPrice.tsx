'use client'

import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface AnimatedPriceProps {
  price: number
  priceRange?: string
  duration?: number
  className?: string
}

export default function AnimatedPrice({ 
  price, 
  priceRange, 
  duration = 1000,
  className = '' 
}: AnimatedPriceProps) {
  const [displayPrice, setDisplayPrice] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { ref, isInView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (!isInView) return

    setIsAnimating(true)
    
    const startTime = Date.now()
    const startPrice = displayPrice

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOutCubic(progress)
      
      const currentPrice = Math.floor(startPrice + (price - startPrice) * easedProgress)
      setDisplayPrice(currentPrice)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }, [isInView, price, duration, displayPrice])

  return (
    <div ref={ref} className={`text-right ${className}`}>
      <div className={`text-3xl font-bold text-spa-sage-800 leading-none transition-all duration-300 ${
        isAnimating ? 'scale-110 text-spa-gold-600' : ''
      }`}>
        <span className="inline-block">$</span>
        <span className={`inline-block tabular-nums ${
          isAnimating ? 'animate-pulse' : ''
        }`}>
          {displayPrice.toLocaleString()}
        </span>
      </div>
      
      {priceRange && (
        <div className={`text-xs text-stone-500 mt-1 transition-all duration-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          Range: {priceRange}
        </div>
      )}
      
      {/* Price highlight effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-spa-gold-400/20 via-spa-gold-300/30 to-spa-gold-400/20 rounded-lg transition-all duration-300 -z-10 ${
        isAnimating ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
      }`} />
    </div>
  )
}