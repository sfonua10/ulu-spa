'use client'

import { useMemo, useState, useEffect } from 'react'

export default function FloatingElements() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const elements = [
    { size: 'w-2 h-2', color: 'bg-spa-sage-300', delay: 0, duration: 8 },
    { size: 'w-3 h-3', color: 'bg-spa-gold-300', delay: 1, duration: 10 },
    { size: 'w-1 h-1', color: 'bg-spa-gold-400', delay: 2, duration: 6 },
    { size: 'w-4 h-4', color: 'bg-spa-sage-200', delay: 3, duration: 12 },
    { size: 'w-2 h-2', color: 'bg-spa-gold-200', delay: 4, duration: 9 },
  ]

  const elementsWithPositions = useMemo(() => {
    if (!isMounted) return []

    return elements.map((element, index) => ({
      ...element,
      left: Math.random() * 100,
      top: Math.random() * 100,
      key: index,
    }))
  }, [isMounted])

  if (!isMounted) {
    return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elementsWithPositions.map((element) => (
        <div
          key={element.key}
          className={`absolute rounded-full opacity-60 float-gentle ${element.size} ${element.color}`}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
    </div>
  )
}