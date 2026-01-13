// A/B Testing Utilities
// Lightweight, privacy-friendly experimentation framework

export type Variant = string

export interface Experiment {
  name: string
  cookieName: string
  variants: Variant[]
  weights: number[] // Must sum to 1
}

// Experiment Configurations
export const EXPERIMENTS = {
  NEW_GUESTS_HERO_CTA: {
    name: 'new_guests_hero_cta',
    cookieName: 'ab-new-guests-hero',
    variants: ['control', 'first-timer', 'claim-gift'] as const,
    weights: [0.34, 0.33, 0.33],
  },
} as const satisfies Record<string, Experiment>

export type NewGuestsHeroCTAVariant = typeof EXPERIMENTS.NEW_GUESTS_HERO_CTA.variants[number]

/**
 * Selects a variant based on weighted random distribution
 */
export function selectVariant(variants: readonly string[], weights: number[]): string {
  const random = Math.random()
  let cumulative = 0

  for (let i = 0; i < variants.length; i++) {
    cumulative += weights[i]
    if (random < cumulative) {
      return variants[i]
    }
  }

  return variants[0]
}

/**
 * Get variant from cookie (client-side)
 */
export function getVariantFromCookie(cookieName: string): string | null {
  if (typeof document === 'undefined') return null

  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === cookieName) {
      return value
    }
  }

  return null
}

/**
 * Get the experiment variant for a specific experiment
 */
export function getExperimentVariant<T extends Experiment>(
  experiment: T
): T['variants'][number] | null {
  const variant = getVariantFromCookie(experiment.cookieName)

  // Validate variant is one of the expected values
  if (variant && (experiment.variants as readonly string[]).includes(variant)) {
    return variant as T['variants'][number]
  }

  return null
}
