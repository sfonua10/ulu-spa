'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AnimationContextType {
  hasInitialAnimationPlayed: boolean
  markAnimationPlayed: () => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

const STORAGE_KEY = 'ulu-animations-played'

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [hasInitialAnimationPlayed, setHasInitialAnimationPlayed] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Check sessionStorage on mount (only runs client-side)
    try {
      const played = sessionStorage.getItem(STORAGE_KEY) === 'true'
      setHasInitialAnimationPlayed(played)
    } catch {
      // sessionStorage not available (private browsing, etc.)
    }
    setIsHydrated(true)
  }, [])

  const markAnimationPlayed = () => {
    setHasInitialAnimationPlayed(true)
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // sessionStorage not available
    }
  }

  // During SSR/hydration, assume animations haven't played (allows first load animations)
  const contextValue: AnimationContextType = {
    hasInitialAnimationPlayed: isHydrated ? hasInitialAnimationPlayed : false,
    markAnimationPlayed
  }

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimationContext() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimationContext must be used within an AnimationProvider')
  }
  return context
}
