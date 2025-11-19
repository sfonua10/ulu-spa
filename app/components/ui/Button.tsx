import * as React from "react"
import { cn } from "@/app/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "luxury"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spa-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
    
    const variants = {
      default: "bg-spa-gold-500 text-white hover:bg-spa-gold-600 shadow-soft hover:shadow-soft font-medium",
      outline: "border-2 border-spa-gold-500 text-spa-gold-600 hover:bg-spa-gold-500 hover:text-white font-medium",
      ghost: "text-spa-gold-600 hover:bg-spa-gold-50 hover:text-spa-gold-700 font-medium",
      luxury: "bg-gradient-to-br from-spa-gold-500 to-spa-gold-600 text-white hover:from-spa-gold-600 hover:to-spa-gold-700 hover:shadow-lg relative overflow-hidden font-semibold"
    }
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      xl: "h-14 px-8 text-lg"
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