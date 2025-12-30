/**
 * MangoMint Service URL Mappings
 * Maps service names to their specific MangoMint booking URLs with serviceId parameters
 */

import { COMPANY, URLS } from '@/app/constants/config'

export const getMangoMintServiceUrl = (serviceName: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_MANGOMINT_BOOKING_URL || URLS.BOOKING
  
  // Service name to MangoMint serviceId mapping
  const serviceIdMap: Record<string, number> = {
    // Signature Experiences
    'Golden Reset': 21,
    'Island Glow': 22,
    'ULU Paradise Retreat': 23,
    'ULU Ultimate Escape': 24,

    // Head & Scalp Massage Services
    'Island Breeze': 7,
    'The Ocean Ritual': 8,
    'Tropical Indulge': 9,
    'Royal Escape': 18,

    // Scratch Therapy Services
    'Island Drift': 15,
    'Heavenly Glide': 16,
    'Pure Unwind': 17,
    'ULU Trace': 17, // Note: Using same ID as Pure Unwind per provided URLs

    // Facial Services
    'Island Renewal': 10, // TODO: Verify correct service ID for facial service

    // IV Therapy Services
    'ULU Glow – Beauty & Radiance': 25,
    'Balance Restore': 26,
    'ULU Athlete Peak Performance': 27,
    'Bounce Back to You': 28,
    'Reset Ritual': 29,
    'ULU Shield': 33
  }
  
  const serviceId = serviceIdMap[serviceName]
  
  if (serviceId) {
    return `${baseUrl}?serviceId=${serviceId}`
  }
  
  // Return general booking URL for services without specific mapping
  return baseUrl
}

export const getMangoMintMembershipUrl = (membershipType: '30min' | '60min' | 'couple-30min' | 'couple-60min'): string => {
  const membershipIdMap: Record<string, number> = {
    '30min': 13,
    '60min': 14,
    'couple-30min': 13,
    'couple-60min': 14
  }

  const membershipId = membershipIdMap[membershipType]
  return `https://clients.mangomint.com/uluspa/memberships/${membershipId}`
}

// Re-export for convenience
export { COMPANY, URLS } from '@/app/constants/config'