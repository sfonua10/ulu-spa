'use client'

import * as React from "react"
import { cn } from "@/app/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  blur?: 'sm' | 'md' | 'lg'
  opacity?: number
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, blur = 'md', opacity = 0.1, ...props }, ref) => {
    const blurClasses = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg'
    }

    return (
      <div
        className={cn(
          "rounded-3xl border border-white/20 shadow-soft-lg",
          blurClasses[blur],
          "backdrop-saturate-150",
          className
        )}
        style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }