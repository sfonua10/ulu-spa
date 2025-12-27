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
          className="text-spa-gold-500 opacity-20"
        />
      </svg>
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
      <div className="w-96 h-96 rounded-full bg-gradient-radial from-spa-gold-200/20 to-transparent blur-3xl" />
    </div>
  )
}