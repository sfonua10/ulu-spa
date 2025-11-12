'use client'

import { useEffect, useRef } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speed: number
  direction: number
  opacity: number
  hue: number
}

interface SpaBubblesProps {
  bubbleCount?: number
  className?: string
}

export default function SpaBubbles({ bubbleCount = 30, className = '' }: SpaBubblesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const bubblesRef = useRef<Bubble[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize bubbles
    const initBubbles = () => {
      bubblesRef.current = Array.from({ length: bubbleCount }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: Math.random() * 40 + 10,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        hue: 160 + Math.random() * 40, // Sage green to blue-green range
      }))
    }

    initBubbles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current.forEach((bubble) => {
        // Update position
        bubble.y -= bubble.speed
        bubble.x += bubble.direction

        // Reset bubble when it goes off screen
        if (bubble.y + bubble.size < 0) {
          bubble.y = canvas.height + bubble.size
          bubble.x = Math.random() * canvas.width
        }

        // Keep bubbles within horizontal bounds
        if (bubble.x < -bubble.size) bubble.x = canvas.width + bubble.size
        if (bubble.x > canvas.width + bubble.size) bubble.x = -bubble.size

        // Create gradient for bubble
        const gradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        )

        gradient.addColorStop(0, `hsla(${bubble.hue}, 60%, 80%, ${bubble.opacity})`)
        gradient.addColorStop(0.7, `hsla(${bubble.hue}, 50%, 70%, ${bubble.opacity * 0.6})`)
        gradient.addColorStop(1, `hsla(${bubble.hue}, 40%, 60%, 0)`)

        // Draw bubble
        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fill()

        // Add shimmer effect
        const shimmerGradient = ctx.createLinearGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          bubble.x + bubble.size * 0.3,
          bubble.y + bubble.size * 0.3
        )
        shimmerGradient.addColorStop(0, 'transparent')
        shimmerGradient.addColorStop(0.5, `hsla(${bubble.hue + 30}, 80%, 90%, ${bubble.opacity * 0.3})`)
        shimmerGradient.addColorStop(1, 'transparent')

        ctx.fillStyle = shimmerGradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size * 0.7, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [bubbleCount])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  )
}