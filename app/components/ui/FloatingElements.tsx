'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  const elements = [
    { size: 'w-2 h-2', color: 'bg-spa-sage-300', delay: 0, duration: 8 },
    { size: 'w-3 h-3', color: 'bg-spa-gold-300', delay: 1, duration: 10 },
    { size: 'w-1 h-1', color: 'bg-spa-cream-400', delay: 2, duration: 6 },
    { size: 'w-4 h-4', color: 'bg-spa-sage-200', delay: 3, duration: 12 },
    { size: 'w-2 h-2', color: 'bg-spa-gold-200', delay: 4, duration: 9 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full opacity-60 ${element.size} ${element.color}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}