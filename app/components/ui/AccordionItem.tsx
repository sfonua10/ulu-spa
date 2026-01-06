'use client'

import { useId } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/app/lib/utils'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  variant?: 'default' | 'highlighted' | 'gift-card'
  className?: string
}

export default function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  variant = 'default',
  className
}: AccordionItemProps) {
  const id = useId()
  const contentId = `accordion-content-${id}`
  const headerId = `accordion-header-${id}`

  const variantStyles = {
    default: 'bg-white border-spa-sage-100',
    highlighted: 'bg-spa-gold-50/50 border-spa-gold-200',
    'gift-card': 'bg-white/60 backdrop-blur-md border-spa-gold-200/50'
  }

  return (
    <div
      className={cn(
        'group rounded-2xl overflow-hidden hover:border-spa-gold-200 transition-all duration-300 shadow-soft border',
        variantStyles[variant],
        className
      )}
    >
      <button
        id={headerId}
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left transition-colors duration-300"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h3 className={cn(
          'text-lg md:text-xl font-semibold pr-4',
          variant === 'gift-card' ? 'font-playfair text-spa-sage-900' : 'font-display font-bold text-spa-sage-800'
        )}>
          {title}
        </h3>
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 rounded-full bg-spa-gold-100 flex items-center justify-center transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronDownIcon className="w-5 h-5 text-spa-gold-600" />
        </div>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={cn(
          'px-6 pb-6 md:px-8 md:pb-8 pt-2',
          variant === 'gift-card' && 'font-montserrat text-spa-stone-700'
        )}>
          {children}
        </div>
      </div>
    </div>
  )
}
