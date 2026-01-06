'use client'

import { Button } from './Button'
import { trackBookNowClick, trackOutboundClick } from '@/app/lib/analytics'
import { URLS } from '@/app/constants/config'
import { cn } from '@/app/lib/utils'

interface BookingButtonProps {
  location: string
  serviceId?: number
  serviceName?: string
  variant?: 'default' | 'outline' | 'ghost' | 'luxury'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function BookingButton({
  location,
  serviceId,
  serviceName,
  variant = 'luxury',
  size = 'lg',
  className,
  children,
  onClick,
}: BookingButtonProps) {
  const bookingUrl = serviceId
    ? `${URLS.BOOKING}?serviceId=${serviceId}`
    : URLS.BOOKING

  const handleClick = () => {
    trackBookNowClick(location)
    trackOutboundClick(bookingUrl, location)
    onClick?.()
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('mangomint-booking-button', className)}
      onClick={handleClick}
      data-serviceid={serviceId}
      data-servicename={serviceName}
    >
      {children}
    </Button>
  )
}

interface BookingLinkProps {
  location: string
  serviceId?: number
  serviceName?: string
  className?: string
  children: React.ReactNode
  external?: boolean
}

export function BookingLink({
  location,
  serviceId,
  serviceName,
  className,
  children,
  external = false,
}: BookingLinkProps) {
  const bookingUrl = serviceId
    ? `${URLS.BOOKING}?serviceId=${serviceId}`
    : URLS.BOOKING

  const handleClick = () => {
    trackBookNowClick(location)
    trackOutboundClick(bookingUrl, location)
  }

  return (
    <a
      href={bookingUrl}
      className={cn('mangomint-booking-button', className)}
      onClick={handleClick}
      data-serviceid={serviceId}
      data-servicename={serviceName}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}
