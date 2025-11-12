'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'
import { MangoMintAPI, mangoMintUtils, type MangoMintAppointment } from '@/app/services/mangomint'
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface BookingWidgetProps {
  serviceId?: string
  serviceName?: string
  className?: string
}

export default function BookingWidget({ 
  serviceId = 'mm-scalp-signature', 
  serviceName = 'Signature Scalp Massage',
  className = ''
}: BookingWidgetProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [booking, setBooking] = useState<MangoMintAppointment>({
    serviceId,
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    date: '',
    time: '',
    notes: '',
    status: 'pending'
  })
  const [confirmationData, setConfirmationData] = useState<{ appointmentId?: string } | null>(null)
  const [errors, setErrors] = useState<string[]>([])

  const handleInputChange = (field: keyof MangoMintAppointment, value: string) => {
    setBooking(prev => ({ ...prev, [field]: value }))
    setErrors([]) // Clear errors when user starts typing
  }

  const loadAvailability = async (date: string) => {
    if (!date) return
    setLoading(true)
    try {
      const slots = await MangoMintAPI.getAvailability(serviceId, date)
      setAvailableSlots(slots)
    } catch (error) {
      console.error('Error loading availability:', error)
      setErrors(['Unable to load available time slots. Please try again.'])
    } finally {
      setLoading(false)
    }
  }

  const handleDateChange = (date: string) => {
    handleInputChange('date', date)
    setBooking(prev => ({ ...prev, time: '' })) // Reset time when date changes
    loadAvailability(date)
  }

  const handleSubmit = async () => {
    const validation = mangoMintUtils.validateAppointment(booking)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setLoading(true)
    try {
      const result = await MangoMintAPI.bookAppointment(booking)
      if (result.success) {
        setConfirmationData({ appointmentId: result.appointmentId })
        setStep(4) // Success step
      } else {
        setErrors([result.error || 'Booking failed. Please try again.'])
      }
    } catch (error) {
      console.error('Booking error:', error)
      setErrors(['An unexpected error occurred. Please try again.'])
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-2">
                Personal Information
              </h3>
              <p className="text-spa-stone-600">Tell us a bit about yourself</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  <UserIcon className="h-4 w-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={booking.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  <EnvelopeIcon className="h-4 w-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={booking.clientEmail}
                  onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  <PhoneIcon className="h-4 w-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={booking.clientPhone}
                  onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-2">
                Select Date & Time
              </h3>
              <p className="text-spa-stone-600">Choose your preferred appointment time</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                  <CalendarDaysIcon className="h-4 w-4 inline mr-2" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => handleDateChange(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              {booking.date && (
                <div>
                  <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                    <ClockIcon className="h-4 w-4 inline mr-2" />
                    Available Times *
                  </label>
                  {loading ? (
                    <div className="text-center py-4">
                      <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-spa-sage-600"></div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleInputChange('time', slot)}
                          className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                            booking.time === slot
                              ? 'bg-spa-sage-600 text-white border-spa-sage-600'
                              : 'bg-white text-spa-sage-700 border-spa-sage-200 hover:border-spa-sage-400'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-2">
                Confirm Booking
              </h3>
              <p className="text-spa-stone-600">Review your appointment details</p>
            </div>
            
            <div className="bg-spa-sage-50 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-spa-sage-800">Service:</span>
                <span className="text-spa-stone-700">{serviceName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-spa-sage-800">Date:</span>
                <span className="text-spa-stone-700">{mangoMintUtils.formatDate(booking.date)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-spa-sage-800">Time:</span>
                <span className="text-spa-stone-700">{booking.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-spa-sage-800">Client:</span>
                <span className="text-spa-stone-700">{booking.clientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-spa-sage-800">Email:</span>
                <span className="text-spa-stone-700">{booking.clientEmail}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-spa-sage-800 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                value={booking.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-spa-sage-200 focus:ring-2 focus:ring-spa-sage-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Any special requests or notes for your appointment..."
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircleIcon className="h-16 w-16 text-spa-sage-600" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-spa-stone-600 mb-4">
                Your appointment has been successfully booked.
              </p>
              <div className="bg-spa-sage-50 rounded-2xl p-6 text-left">
                <p className="text-sm text-spa-stone-600 mb-2">
                  <strong>Confirmation ID:</strong> {confirmationData?.appointmentId}
                </p>
                <p className="text-sm text-spa-stone-600">
                  We've sent a confirmation email to <strong>{booking.clientEmail}</strong> with your appointment details and preparation instructions.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-3xl shadow-soft border border-spa-sage-100 p-8 max-w-md mx-auto ${className}`}
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-spa-stone-600 mb-2">
          <span>Step {step} of 4</span>
          <span>{Math.round((step / 4) * 100)}%</span>
        </div>
        <div className="w-full bg-spa-sage-100 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-spa-sage-600 to-spa-sage-500 h-2 rounded-full"
            initial={{ width: '25%' }}
            animate={{ width: `${(step / 4) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
        >
          <div className="flex items-start space-x-2">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-red-800">
              <ul className="list-disc list-inside space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step Content */}
      {renderStep()}

      {/* Navigation Buttons */}
      {step < 4 && (
        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              className="flex-1"
            >
              Back
            </Button>
          )}
          <Button
            variant={step === 3 ? "luxury" : "default"}
            onClick={() => {
              if (step === 3) {
                handleSubmit()
              } else {
                setStep(step + 1)
              }
            }}
            disabled={loading}
            className="flex-1"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Processing...</span>
              </div>
            ) : step === 3 ? (
              'Confirm Booking'
            ) : (
              'Continue'
            )}
          </Button>
        </div>
      )}

      {step === 4 && (
        <div className="mt-8">
          <Button 
            variant="luxury" 
            onClick={() => {
              // Reset widget
              setStep(1)
              setBooking({
                serviceId,
                clientName: '',
                clientEmail: '',
                clientPhone: '',
                date: '',
                time: '',
                notes: '',
                status: 'pending'
              })
              setConfirmationData(null)
              setErrors([])
            }}
            className="w-full"
          >
            Book Another Appointment
          </Button>
        </div>
      )}

      {/* MangomMint Integration Note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-spa-stone-500">
          🥭 Powered by MangomMint Integration
        </p>
      </div>
    </motion.div>
  )
}