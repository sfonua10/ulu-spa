'use client'

import { trackPhoneClick } from '@/app/lib/analytics'
import { COMPANY } from '@/app/constants/config'
import { cn } from '@/app/lib/utils'

interface PhoneLinkProps {
  location: string
  className?: string
  children: React.ReactNode
  showIcon?: boolean
}

export function PhoneLink({
  location,
  className,
  children,
  showIcon = false,
}: PhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(location)
  }

  return (
    <a
      href={`tel:${COMPANY.PHONE_LINK}`}
      className={cn(className)}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
