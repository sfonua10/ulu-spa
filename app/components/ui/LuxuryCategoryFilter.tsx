'use client'

import { useState, useRef, useEffect } from 'react'

interface Category {
  id: string
  name: string
  icon?: React.ComponentType<any>
  count?: number
}

interface LuxuryCategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
  className?: string
}

export default function LuxuryCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  className = ''
}: LuxuryCategoryFilterProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonsRef.current[selectedCategory]
      if (activeButton && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const buttonRect = activeButton.getBoundingClientRect()
        
        setIndicatorStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width
        })
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [selectedCategory])

  const setButtonRef = (categoryId: string) => (el: HTMLButtonElement | null) => {
    buttonsRef.current[categoryId] = el
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background Glass Container */}
      <div 
        ref={containerRef}
        className="relative bg-white/60 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl p-2 overflow-hidden"
      >
        {/* Animated Indicator */}
        <div
          className="absolute top-2 bottom-2 bg-gradient-to-r from-spa-sage-600 to-spa-sage-700 rounded-full shadow-lg transition-all duration-500 ease-out z-10"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            transform: 'translateZ(0)' // Hardware acceleration
          }}
        />

        {/* Glow Effect */}
        <div
          className="absolute top-2 bottom-2 bg-gradient-to-r from-spa-gold-400/30 to-spa-sage-400/30 rounded-full blur-sm transition-all duration-500 ease-out z-0"
          style={{
            left: indicatorStyle.left - 4,
            width: indicatorStyle.width + 8,
          }}
        />

        {/* Category Buttons */}
        <div className="relative z-20 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => {
            const isActive = selectedCategory === category.id
            
            return (
              <button
                key={category.id}
                ref={setButtonRef(category.id)}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 min-w-fit
                  ${isActive 
                    ? 'text-white shadow-lg' 
                    : 'text-spa-sage-700 hover:text-spa-sage-800 hover:bg-white/30'
                  }
                  transform hover:scale-105 active:scale-95
                `}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  {category.icon && <category.icon className="h-4 w-4" />}
                  <span>{category.name}</span>
                  {category.count !== undefined && (
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-spa-sage-100 text-spa-sage-600'
                    }`}>
                      {category.count}
                    </span>
                  )}
                </span>

                {/* Hover shimmer effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  rounded-full transition-all duration-500 opacity-0 hover:opacity-100
                  transform translate-x-[-100%] hover:translate-x-[100%]
                `} />
              </button>
            )
          })}
        </div>
      </div>

      {/* Floating particles around active category */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-spa-gold-400 rounded-full animate-ping transition-opacity duration-300 ${
              selectedCategory ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              left: `${indicatorStyle.left + indicatorStyle.width / 2 + Math.cos(i * 60 * Math.PI / 180) * 40}px`,
              top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 15}px`,
              animationDelay: `${i * 200}ms`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  )
}