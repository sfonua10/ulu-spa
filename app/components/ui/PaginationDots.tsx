'use client'

interface PaginationDotsProps {
  total: number
  current: number
  onDotClick?: (index: number) => void
  className?: string
}

export default function PaginationDots({
  total,
  current,
  onDotClick,
  className = ''
}: PaginationDotsProps) {
  if (total <= 1) return null

  return (
    <div
      className={`pagination-dots ${className}`}
      role="tablist"
      aria-label="Testimonial navigation"
    >
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={`pagination-dot ${index === current ? 'active' : ''}`}
          onClick={() => onDotClick?.(index)}
          role="tab"
          aria-selected={index === current}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  )
}
