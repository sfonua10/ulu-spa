import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options

  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
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
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isInView, hasTriggered }
}

// Hook for multiple elements with staggered animations
export function useStaggeredInView<T extends HTMLElement = HTMLElement>(
  count: number,
  delay: number = 100
) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [count, delay])

  return { ref, visibleItems }
}