// Centralized configuration constants
// These values are used across the site - update here to change everywhere

export const SITE = {
  BASE_URL: 'https://www.uluspas.com',
} as const

export const COMPANY = {
  NAME: 'ULU Head Spa',
  MANGOMINT_ID: 904811,
  PHONE: '(801) 528-7368',
  PHONE_LINK: '+18015287368',
  EMAIL: 'uluspaofficial@gmail.com',
  ADDRESS: '597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064',
  HOURS: {
    WEEKDAYS: 'Monday - Friday: 9AM - 8PM',
    WEEKENDS: 'Saturday - Sunday: 10AM - 6PM',
    DISPLAY: 'Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM',
    LEGACY: 'Monday–Saturday, 10am–8pm', // For backwards compatibility
  },
} as const

export const URLS = {
  BOOKING_BASE: 'https://booking.mangomint.com',
  get BOOKING() {
    return `${this.BOOKING_BASE}/${COMPANY.MANGOMINT_ID}`
  },
  GIFT_CARDS: 'https://clients.mangomint.com/gift-cards/uluspa',
  MEMBERSHIPS_BASE: 'https://clients.mangomint.com/uluspa/memberships',
} as const

export const SOCIAL = {
  INSTAGRAM: 'https://www.instagram.com/ulu.spa/',
  FACEBOOK: 'https://www.facebook.com/uluspaofficial',
  TIKTOK: 'https://www.tiktok.com/@uluspaofficial',
} as const

// Helper to generate MangoMint booking URL with optional service ID
export function getBookingUrl(serviceId?: number): string {
  if (serviceId) {
    return `${URLS.BOOKING_BASE}/${COMPANY.MANGOMINT_ID}?serviceId=${serviceId}`
  }
  return URLS.BOOKING
}
