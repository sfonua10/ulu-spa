export interface Service {
  id: string
  name: string
  description: string
  duration: number
  price: number
  benefits: string[]
  image?: string
}

export interface Membership {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  popular?: boolean
  sessions?: number
  validity?: string
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