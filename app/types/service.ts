import type { ComponentType, SVGProps } from 'react'

/**
 * Service type definition used across service-related components
 * This is the single source of truth for the Service interface
 */
export interface Service {
  id: number
  icon: ComponentType<SVGProps<SVGSVGElement>>
  name: string
  shortDesc: string
  fullDesc: string
  duration: string
  price: number
  priceRange?: string
  imageUrl?: string
  focusArea?: string
  modalFocusArea?: string
  benefits: string[]
  includes: string[]
  popular: boolean
  category: string
  // Enhanced UX fields
  tagline?: string
  highlights?: string[]
  perfectFor?: string[]
}

/**
 * Service category type for filtering
 */
export type ServiceCategory =
  | 'signature-experience'
  | 'head-scalp'
  | 'scratch-therapy'
  | 'facial'
  | 'iv-therapy'
  | 'add-on'
