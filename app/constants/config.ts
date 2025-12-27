// Centralized configuration constants
// These values are used across the site - update here to change everywhere

export const COMPANY = {
  NAME: 'ULU Head Spa',
  MANGOMINT_ID: 904811,
  PHONE: '(801) 528-7368',
  PHONE_LINK: '+18015287368',
  EMAIL: 'uluspaofficial@gmail.com',
  ADDRESS: '597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064',
  HOURS: 'Monday–Saturday, 10am–8pm',
} as const

export const URLS = {
  BOOKING_BASE: 'https://booking.mangomint.com',
  get BOOKING() {
    return `${this.BOOKING_BASE}/${COMPANY.MANGOMINT_ID}`
  },
} as const

export const SOCIAL = {
  INSTAGRAM: 'https://www.instagram.com/ulu.spa/',
  FACEBOOK: 'https://www.facebook.com/uluspaofficial',
  TIKTOK: 'https://www.tiktok.com/@uluspaofficial',
} as const

// Helper to generate MangoMint booking URL with optional service ID
export function getBookingUrl(serviceId?: number): string {
  if (serviceId) {
    return `${URLS.BOOKING_BASE}/${COMPANY.MANGOMINT_ID}#services/${serviceId}`
  }
  return URLS.BOOKING
}
