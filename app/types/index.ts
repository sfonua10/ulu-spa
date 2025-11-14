export interface Service {
  id: number
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  shortDesc: string
  fullDesc: string
  duration: string
  price: number
  priceRange?: string
  imageUrl?: string
  benefits: string[]
  includes: string[]
  popular: boolean
  category: string
}

export interface Membership {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  popular?: boolean
  bestValue?: boolean
  sessionCount: number
  sessionDuration: number
  sessionTypes: string[]
  monthlyCredit?: number
  statedValue: number
  annualSavings: number
  retailDiscount?: number
  bundleDiscount?: number
}

export interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
  image?: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes?: string
}