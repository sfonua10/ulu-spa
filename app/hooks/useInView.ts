'use client'

import { useEffect, useRef, useState } from 'react'
import { useAnimationContext } from '@/app/contexts/AnimationContext'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  skipIfAnimated?: boolean // Skip animation if initial animations already played
}

export function useInView<T extends HTMLElement = HTMLElement>(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    skipIfAnimated = true,
  } = options

  const { hasInitialAnimationPlayed, markAnimationPlayed } = useAnimationContext()

  // If animations already played and skipIfAnimated is true, start as visible
  const shouldSkip = skipIfAnimated && hasInitialAnimationPlayed

  const [isInView, setIsInView] = useState(shouldSkip)
  const [hasTriggered, setHasTriggered] = useState(shouldSkip)
  const ref = useRef<T>(null)

  useEffect(() => {
    // If we're skipping animations, ensure state is set correctly
    if (shouldSkip) {
      setIsInView(true)
      setHasTriggered(true)
      return
    }

    const element = ref.current

    if (!element) return

    // Skip if already triggered and triggerOnce is true
    if (hasTriggered && triggerOnce) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)

        if (inView && !hasTriggered) {
          setHasTriggered(true)
          // Mark that initial animations have played
          markAnimationPlayed()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered, shouldSkip, markAnimationPlayed])

  return { ref, isInView, hasTriggered }
}

// Hook for multiple elements with staggered animations
export function useStaggeredInView<T extends HTMLElement = HTMLElement>(
  count: number,
  delay: number = 100,
  options: { skipIfAnimated?: boolean } = {}
) {
  const { skipIfAnimated = true } = options
  const { hasInitialAnimationPlayed, markAnimationPlayed } = useAnimationContext()

  const shouldSkip = skipIfAnimated && hasInitialAnimationPlayed

  // If skipping, initialize all items as visible
  const [visibleItems, setVisibleItems] = useState<Set<number>>(
    shouldSkip ? new Set(Array.from({ length: count }, (_, i) => i)) : new Set()
  )
  const ref = useRef<T>(null)

  useEffect(() => {
    // If skipping, ensure all items are visible
    if (shouldSkip) {
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)))
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAnimationPlayed()
          // Trigger staggered animations
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]))
            }, i * delay)
          }
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [count, delay, shouldSkip, markAnimationPlayed])

  return { ref, visibleItems }
}