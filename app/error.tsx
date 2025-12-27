'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { COMPANY } from '@/app/constants/config'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-gradient-to-b from-spa-cream-50 via-white to-spa-sage-50 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Decorative elements */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-spa-sage-100 to-spa-gold-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">🌿</span>
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto bg-spa-gold-200/30 rounded-full blur-xl -z-10" />
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-sage-900 mb-4">
          Something Went Wrong
        </h1>

        <p className="font-montserrat text-lg text-spa-stone-600 mb-8 leading-relaxed">
          We apologize for the inconvenience. Our team has been notified and is working to resolve the issue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-br from-spa-sage-500 to-spa-sage-600 text-white hover:from-spa-sage-600 hover:to-spa-sage-700 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 border border-spa-sage-300 text-spa-sage-700 hover:bg-spa-sage-50"
          >
            Return Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-spa-stone-500">
          Need immediate assistance?{' '}
          <a href={`tel:${COMPANY.PHONE_LINK}`} className="text-spa-gold-600 hover:text-spa-gold-700 underline">
            Call us
          </a>
        </p>
      </div>
    </main>
  )
}
