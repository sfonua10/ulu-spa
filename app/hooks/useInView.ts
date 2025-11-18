import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { hasPageBeenVisited, markPageVisited } from '@/app/lib/sessionAnimations'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  respectSession?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    respectSession = true,
  } = options

  const pathname = usePathname()
  const pageAlreadyVisited = respectSession && hasPageBeenVisited(pathname)

  // If page was already visited this session, skip animations entirely
  const [isInView, setIsInView] = useState(pageAlreadyVisited)
  const [hasTriggered, setHasTriggered] = useState(pageAlreadyVisited)
  const ref = useRef<T>(null)

  useEffect(() => {
    // Mark page as visited on mount
    if (respectSession && !pageAlreadyVisited) {
      markPageVisited(pathname)
    }

    // If page was already visited, don't set up observer
    if (pageAlreadyVisited) {
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
  }, [threshold, rootMargin, triggerOnce, hasTriggered, pageAlreadyVisited, respectSession, pathname])

  return { ref, isInView, hasTriggered }
}

// Hook for multiple elements with staggered animations
export function useStaggeredInView<T extends HTMLElement = HTMLElement>(
  count: number,
  delay: number = 100,
  respectSession: boolean = true
) {
  const pathname = usePathname()
  const pageAlreadyVisited = respectSession && hasPageBeenVisited(pathname)

  // If page was already visited, show all items immediately
  const allItems = new Set(Array.from({ length: count }, (_, i) => i))
  const [visibleItems, setVisibleItems] = useState<Set<number>>(pageAlreadyVisited ? allItems : new Set())
  const ref = useRef<T>(null)

  useEffect(() => {
    // Mark page as visited on mount
    if (respectSession && !pageAlreadyVisited) {
      markPageVisited(pathname)
    }

    // If page was already visited, don't set up observer
    if (pageAlreadyVisited) {
      return
    }

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
  }, [count, delay, pageAlreadyVisited, respectSession, pathname])

  return { ref, visibleItems }
}