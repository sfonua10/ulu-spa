import * as React from "react"
import { cn } from "@/app/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "luxury"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-gold-500 text-white hover:bg-gold-600 shadow-luxury hover:shadow-luxury-lg",
      outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white",
      ghost: "text-gold-600 hover:bg-gold-50 hover:text-gold-700",
      luxury: "bg-luxury-gradient text-white hover:shadow-gold relative overflow-hidden"
    }
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }