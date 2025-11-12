'use client'

// Elegant leaf decoration SVG component
export function LeafDecoration({ className = '', size = 100 }: { className?: string, size?: number }) {
  return (
    <div
      className={`absolute pointer-events-none ${className} float`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 10 Q30 30 25 50 T35 80 Q50 70 50 50 Q50 70 65 80 T75 50 Q70 30 50 10"
          fill="currentColor"
          className="text-gold-500 opacity-20"
        />
      </svg>
    </div>
  )
}

// Floating badge component
export function FloatingBadge({ 
  children, 
  className = '',
  position = { top: '20px', right: '20px' }
}: { 
  children: React.ReactNode
  className?: string
  position?: { top?: string, right?: string, left?: string, bottom?: string }
}) {
  return (
    <div
      className={`absolute bg-white p-4 rounded-full shadow-luxury ${className} float-delay`}
      style={position}
    >
      {children}
    </div>
  )
}

// Hero background pattern
export function HeroPattern() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="w-full h-full bg-hero-pattern" />
    </div>
  )
}

// Elegant rotating background element
export function RotatingElement({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className} rotate-slow`}>
      <div className="w-96 h-96 rounded-full bg-gradient-radial from-gold-200/20 to-transparent blur-3xl" />
    </div>
  )
}

// Page loader component
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white animate-in animate-fade-in">
      <div className="w-24 h-24 border-4 border-gold-200 border-t-gold-500 rounded-full loading-spinner" />
    </div>
  )
}