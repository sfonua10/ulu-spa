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
        {/* Simplified Indicator */}
        <div
          className="absolute top-2 bottom-2 bg-spa-sage-800 rounded-full shadow-md transition-all duration-300 ease-out z-5"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            transform: 'translateZ(0)' // Hardware acceleration
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
                  relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 min-w-fit cursor-pointer
                  ${isActive 
                    ? 'text-white font-medium' 
                    : 'text-spa-sage-700 hover:text-spa-sage-900 hover:bg-white/40'
                  }
                  hover:scale-105 active:scale-95
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

    </div>
  )
}