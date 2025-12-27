export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated logo/spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 mx-auto border-4 border-spa-sage-200 border-t-spa-sage-500 rounded-full animate-spin" />
          <div className="absolute inset-0 w-16 h-16 mx-auto bg-spa-gold-200/30 rounded-full blur-xl -z-10 animate-pulse" />
        </div>

        <p className="font-montserrat text-spa-stone-500 text-sm tracking-wide animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  )
}
