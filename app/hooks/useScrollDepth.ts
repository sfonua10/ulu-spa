'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepth } from '@/app/lib/analytics'

const THRESHOLDS = [25, 50, 75, 100]

export function useScrollDepth() {
  const firedThresholds = useRef<Set<number>>(new Set())
  const pathname = usePathname()

  // Reset thresholds on route change
  useEffect(() => {
    firedThresholds.current = new Set()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0

      for (const threshold of THRESHOLDS) {
        if (scrollPercentage >= threshold && !firedThresholds.current.has(threshold)) {
          firedThresholds.current.add(threshold)
          trackScrollDepth(threshold)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])
}
