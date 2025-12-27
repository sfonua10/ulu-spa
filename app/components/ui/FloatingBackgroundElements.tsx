// Reusable floating background decorations for page backgrounds
// Used in legal pages (policy, privacy, terms) and other pages

interface FloatingBackgroundElementsProps {
  className?: string
}

export default function FloatingBackgroundElements({
  className = ''
}: FloatingBackgroundElementsProps) {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-spa-gold-100/20 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-spa-sage-100/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-spa-gold-100/10 rounded-full blur-3xl animate-float-gentle" />
    </div>
  )
}
