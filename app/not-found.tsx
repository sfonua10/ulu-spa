import Link from 'next/link'
import { URLS } from '@/app/constants/config'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Decorative elements */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-spa-sage-100 to-spa-gold-100 rounded-full flex items-center justify-center">
            <span className="font-playfair text-6xl font-bold text-spa-sage-400">404</span>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto bg-spa-gold-200/30 rounded-full blur-xl -z-10" />
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-sage-900 mb-4">
          Page Not Found
        </h1>

        <p className="font-montserrat text-lg text-spa-stone-600 mb-8 leading-relaxed">
          The page you&apos;re looking for seems to have wandered off on its own wellness journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-br from-spa-sage-500 to-spa-sage-600 text-white hover:from-spa-sage-600 hover:to-spa-sage-700 shadow-lg hover:shadow-xl"
          >
            Return Home
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 border border-spa-sage-300 text-spa-sage-700 hover:bg-spa-sage-50"
          >
            View Services
          </Link>
        </div>

        <p className="mt-8 text-sm text-spa-stone-500">
          Looking to book?{' '}
          <a
            href={URLS.BOOKING}
            className="text-spa-gold-600 hover:text-spa-gold-700 underline"
          >
            Book an appointment
          </a>
        </p>
      </div>
    </main>
  )
}
