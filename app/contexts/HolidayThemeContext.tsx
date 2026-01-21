'use client'

import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import {
  HolidayConfig,
  HolidayColorPalette,
  HOLIDAYS,
  getHolidayBySlug,
  extractHolidaySlug,
} from '@/app/constants/holidays'

interface HolidayThemeContextValue {
  /** Whether a holiday theme is currently active (not default) */
  isHolidayTheme: boolean
  /** The current holiday configuration */
  holiday: HolidayConfig
  /** The color palette for the current holiday */
  colors: HolidayColorPalette
  /** Helper to get button classes based on theme */
  getButtonClasses: (variant: 'primary' | 'outline') => string
  /** Helper to get badge classes based on theme */
  getBadgeClasses: () => string
}

const HolidayThemeContext = createContext<HolidayThemeContextValue | null>(null)

/**
 * Converts holiday colors to CSS custom properties
 */
function applyHolidayThemeToDOM(colors: HolidayColorPalette): void {
  const root = document.documentElement

  // Primary colors
  root.style.setProperty('--holiday-primary-50', colors.primary[50])
  root.style.setProperty('--holiday-primary-100', colors.primary[100])
  root.style.setProperty('--holiday-primary-200', colors.primary[200])
  root.style.setProperty('--holiday-primary-300', colors.primary[300])
  root.style.setProperty('--holiday-primary-400', colors.primary[400])
  root.style.setProperty('--holiday-primary-500', colors.primary[500])
  root.style.setProperty('--holiday-primary-600', colors.primary[600])
  root.style.setProperty('--holiday-primary-700', colors.primary[700])

  // Secondary colors
  root.style.setProperty('--holiday-secondary-300', colors.secondary[300])
  root.style.setProperty('--holiday-secondary-400', colors.secondary[400])
  root.style.setProperty('--holiday-secondary-500', colors.secondary[500])
  root.style.setProperty('--holiday-secondary-600', colors.secondary[600])

  // Text colors
  root.style.setProperty('--holiday-text-light', colors.text.light)
  root.style.setProperty('--holiday-text-dark', colors.text.dark)
  root.style.setProperty('--holiday-text-accent', colors.text.accent)

  // Gradients
  root.style.setProperty('--holiday-gradient-button', colors.gradients.button)
  root.style.setProperty('--holiday-gradient-button-hover', colors.gradients.buttonHover)
  root.style.setProperty('--holiday-gradient-badge', colors.gradients.badge)
  root.style.setProperty('--holiday-gradient-shimmer', colors.gradients.shimmer)
  root.style.setProperty('--holiday-gradient-background', colors.gradients.background)

  // Effects
  root.style.setProperty('--holiday-glow-color', colors.effects.glowColor)
  root.style.setProperty('--holiday-logo-filter', colors.effects.logoFilter || 'none')

  // Logo gradient colors
  root.style.setProperty('--logo-gradient-light', colors.logo?.light || '#FFF8D5')
  root.style.setProperty('--logo-gradient-mid', colors.logo?.mid || '#DCC96E')
  root.style.setProperty('--logo-gradient-dark', colors.logo?.dark || '#AC760D')
}

/**
 * Removes holiday-specific CSS custom properties from DOM
 */
function removeHolidayThemeFromDOM(): void {
  const root = document.documentElement

  // Reset to default theme colors
  applyHolidayThemeToDOM(HOLIDAYS.default.colors)
}

interface HolidayThemeProviderProps {
  children: ReactNode
}

export function HolidayThemeProvider({ children }: HolidayThemeProviderProps) {
  const pathname = usePathname()
  const [holiday, setHoliday] = useState<HolidayConfig>(HOLIDAYS.default)

  // Detect holiday from URL path
  useEffect(() => {
    const slug = extractHolidaySlug(pathname)
    const detectedHoliday = getHolidayBySlug(slug)

    if (detectedHoliday) {
      setHoliday(detectedHoliday)
      applyHolidayThemeToDOM(detectedHoliday.colors)
    } else {
      setHoliday(HOLIDAYS.default)
      removeHolidayThemeFromDOM()
    }
  }, [pathname])

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo<HolidayThemeContextValue>(() => ({
    isHolidayTheme: holiday.id !== 'default',
    holiday,
    colors: holiday.colors,

    getButtonClasses: (variant: 'primary' | 'outline') => {
      if (holiday.id === 'default') {
        if (variant === 'primary') {
          return 'bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-600 hover:to-spa-gold-700 text-white'
        }
        return 'bg-transparent hover:bg-custom-gold/10 text-custom-gold border-custom-gold hover:border-custom-gold hover:shadow-custom-gold/30'
      }

      // Holiday theme button classes
      if (variant === 'primary') {
        return 'holiday-button-gradient text-white'
      }
      return 'holiday-button-outline'
    },

    getBadgeClasses: () => {
      if (holiday.id === 'default') {
        return 'bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white'
      }
      return 'holiday-badge-gradient text-white'
    },
  }), [holiday])

  return (
    <HolidayThemeContext.Provider value={contextValue}>
      {children}
    </HolidayThemeContext.Provider>
  )
}

/**
 * Hook to access the current holiday theme
 * @returns The holiday theme context value
 * @throws Error if used outside of HolidayThemeProvider
 */
export function useHolidayTheme(): HolidayThemeContextValue {
  const context = useContext(HolidayThemeContext)

  if (!context) {
    throw new Error('useHolidayTheme must be used within a HolidayThemeProvider')
  }

  return context
}
