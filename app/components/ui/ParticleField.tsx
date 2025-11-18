'use client'

import { useMemo, useState, useEffect } from 'react'

interface ParticleFieldProps {
  particleCount?: number
  className?: string
}

export default function ParticleField({ particleCount = 50, className = '' }: ParticleFieldProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const particles = useMemo(() => {
    if (!isMounted) return []

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  }, [particleCount, isMounted])

  if (!isMounted) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-spa-sage-300/30 to-spa-gold-300/30 bubble-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}