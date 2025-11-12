'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from '@/app/hooks/useInView'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({ 
  from, 
  to, 
  duration = 2000, // Duration in milliseconds
  suffix = '', 
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.1, triggerOnce: true })
  const [displayValue, setDisplayValue] = useState(from)
  const frameRef = useRef<number | undefined>(undefined)
  const startTimeRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (isInView && from !== to) {
      const startTime = Date.now()
      startTimeRef.current = startTime

      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function (easeOut)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        
        const currentValue = from + (to - from) * easedProgress
        setDisplayValue(Math.round(currentValue))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate)
        } else {
          setDisplayValue(to) // Ensure we end at exactly the target value
        }
      }

      frameRef.current = requestAnimationFrame(animate)

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    }
  }, [isInView, from, to, duration])

  return (
    <span
      ref={ref}
      className={`${className} ${isInView ? 'animate-in animate-fade-in animate-slow' : 'opacity-0'}`}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}