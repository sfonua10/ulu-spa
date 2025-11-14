'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const announceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonsRef.current[selectedCategory]
      if (activeButton && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const buttonRect = activeButton.getBoundingClientRect()

        setIndicatorStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
          top: buttonRect.top - containerRect.top,
          height: buttonRect.height
        })
      }
    }

    updateIndicator()
    // Use requestAnimationFrame for smoother updates
    const handleResize = () => {
      requestAnimationFrame(updateIndicator)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [selectedCategory])

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent, currentCategoryId: string) => {
    const currentIndex = categories.findIndex(cat => cat.id === currentCategoryId)
    let newIndex = currentIndex

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1
        break
      case 'ArrowRight':
        e.preventDefault()
        newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = categories.length - 1
        break
      default:
        return
    }

    const newCategory = categories[newIndex]
    onCategoryChange(newCategory.id)

    // Focus the new button
    setTimeout(() => {
      buttonsRef.current[newCategory.id]?.focus()
    }, 0)
  }, [categories, onCategoryChange])

  // Handle category change with screen reader announcement
  const handleCategoryChange = useCallback((categoryId: string) => {
    onCategoryChange(categoryId)

    // Announce to screen readers
    const category = categories.find(cat => cat.id === categoryId)
    if (announceRef.current && category) {
      announceRef.current.textContent = `Filtering by ${category.name}${category.count ? `, showing ${category.count} services` : ''}`
    }
  }, [categories, onCategoryChange])

  const setButtonRef = (categoryId: string) => (el: HTMLButtonElement | null) => {
    buttonsRef.current[categoryId] = el
  }

  return (
    <div className={`relative ${className}`}>
      {/* Screen reader announcements */}
      <div
        ref={announceRef}
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />

      {/* Background Glass Container */}
      <div
        ref={containerRef}
        role="tablist"
        aria-label="Service categories filter"
        className="relative backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden bg-white/80 border border-spa-gold-200/30 p-2"
      >
        {/* Enhanced Luxury Indicator with Gold Gradient - Now supports multi-row */}
        <div
          className="absolute rounded-full shadow-luxury transition-all duration-500 ease-spring z-5"
          style={{
            left: indicatorStyle.left,
            top: indicatorStyle.top,
            width: indicatorStyle.width,
            height: indicatorStyle.height,
            background: 'linear-gradient(135deg, #5b6962 0%, #4a5850 50%, #3d4942 100%)',
            boxShadow: '0 4px 20px rgba(184, 151, 82, 0.25), 0 0 30px rgba(184, 151, 82, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: 'translateZ(0)', // Hardware acceleration
            willChange: 'left, width, top, height'
          }}
        >
          {/* Gold accent border on indicator */}
          <div className="absolute inset-0 rounded-full border border-spa-gold-400/20" />
        </div>

        {/* Category Buttons - Responsive Multi-Row Wrap Layout */}
        <div className="relative z-20 flex flex-wrap justify-center gap-2 sm:gap-3 px-1 py-1">
          {categories.map((category, index) => {
            const isActive = selectedCategory === category.id

            return (
              <button
                key={category.id}
                ref={setButtonRef(category.id)}
                onClick={() => handleCategoryChange(category.id)}
                onKeyDown={(e) => handleKeyDown(e, category.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`services-panel-${category.id}`}
                aria-label={`${category.name}${category.count ? `, ${category.count} services` : ''}`}
                tabIndex={isActive ? 0 : -1}
                className={`
                  relative rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap
                  px-3 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3
                  text-sm sm:text-base
                  min-h-[44px] sm:min-h-[48px]
                  ${isActive
                    ? 'text-white font-semibold'
                    : 'text-spa-sage-700 hover:text-spa-sage-900 hover:bg-white/40'
                  }
                  hover:scale-105 active:scale-95
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spa-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white/50
                `}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  {category.icon && <category.icon className="h-4 w-4" aria-hidden="true" />}
                  <span>{category.name}</span>
                  {category.count !== undefined && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-spa-sage-100 text-spa-sage-700'
                      }`}
                      aria-label={`${category.count} services`}
                    >
                      {category.count}
                    </span>
                  )}
                </span>

                {/* Enhanced hover shimmer effect */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                    rounded-full transition-all duration-700 opacity-0 hover:opacity-100
                    transform translate-x-[-100%] hover:translate-x-[100%]
                    pointer-events-none
                  `}
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}