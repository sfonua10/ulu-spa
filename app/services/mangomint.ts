// MangomMint Integration Service
// This will be connected to the actual MangomMint API later

export interface MangoMintService {
  id: string
  name: string
  duration: number
  price: number
  category: string
  description: string
}

export interface MangoMintAppointment {
  id?: string
  serviceId: string
  clientName: string
  clientEmail: string
  clientPhone?: string
  date: string
  time: string
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

export interface MangoMintClient {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  preferences?: string[]
}

// Placeholder API functions - to be replaced with actual MangomMint integration
export class MangoMintAPI {
  private static baseURL = process.env.NEXT_PUBLIC_MANGOMINT_API_URL || 'https://api.mangomint.com/v1'
  private static apiKey = process.env.MANGOMINT_API_KEY || 'demo-key'

  // Services
  static async getServices(): Promise<MangoMintService[]> {
    // TODO: Implement actual MangomMint API call
    console.log('🥭 MangomMint: Fetching services...')
    return [
      {
        id: 'mm-scalp-signature',
        name: 'Signature Scalp Massage',
        duration: 90,
        price: 180,
        category: 'signature',
        description: 'Our transformative 90-minute signature experience'
      },
      {
        id: 'mm-stress-relief',
        name: 'Stress Relief Session',
        duration: 60,
        price: 120,
        category: 'therapeutic',
        description: 'Targeted therapy for nervous system restoration'
      }
    ]
  }

  // Appointments
  static async bookAppointment(appointment: MangoMintAppointment): Promise<{ success: boolean; appointmentId?: string; error?: string }> {
    // TODO: Implement actual MangomMint booking API call
    console.log('🥭 MangomMint: Booking appointment...', appointment)
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          appointmentId: `mm-${Date.now()}`,
        })
      }, 1000)
    })
  }

  static async getAvailability(serviceId: string, date: string): Promise<string[]> {
    // TODO: Implement actual MangomMint availability API call
    console.log('🥭 MangomMint: Checking availability for', serviceId, 'on', date)
    
    // Mock available time slots
    return [
      '9:00 AM',
      '10:30 AM',
      '12:00 PM',
      '1:30 PM',
      '3:00 PM',
      '4:30 PM'
    ]
  }

  // Clients
  static async createClient(client: MangoMintClient): Promise<{ success: boolean; clientId?: string; error?: string }> {
    // TODO: Implement actual MangomMint client creation API call
    console.log('🥭 MangomMint: Creating client...', client)
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          clientId: `client-${Date.now()}`,
        })
      }, 500)
    })
  }

  static async getClient(email: string): Promise<MangoMintClient | null> {
    // TODO: Implement actual MangomMint client lookup API call
    console.log('🥭 MangomMint: Looking up client...', email)
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null) // No existing client found
      }, 300)
    })
  }

  // Memberships
  static async getMemberships() {
    // TODO: Implement actual MangomMint membership API call
    console.log('🥭 MangomMint: Fetching memberships...')
    
    return [
      { id: 'mm-essential', name: 'Essential', price: 89 },
      { id: 'mm-premium', name: 'Premium', price: 159 },
      { id: 'mm-luxury', name: 'Luxury VIP', price: 279 }
    ]
  }

  static async createMembership(membership: any): Promise<{ success: boolean; membershipId?: string; error?: string }> {
    // TODO: Implement actual MangomMint membership creation API call
    console.log('🥭 MangomMint: Creating membership...', membership)
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          membershipId: `membership-${Date.now()}`,
        })
      }, 1000)
    })
  }
}

// Utility functions for MangomMint integration
export const mangoMintUtils = {
  formatDate: (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  },

  formatTime: (time: string) => {
    return time
  },

  validateAppointment: (appointment: MangoMintAppointment) => {
    const errors: string[] = []
    
    if (!appointment.clientName) errors.push('Client name is required')
    if (!appointment.clientEmail) errors.push('Client email is required')
    if (!appointment.serviceId) errors.push('Service selection is required')
    if (!appointment.date) errors.push('Date is required')
    if (!appointment.time) errors.push('Time is required')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (appointment.clientEmail && !emailRegex.test(appointment.clientEmail)) {
      errors.push('Valid email address is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}