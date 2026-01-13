import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { EXPERIMENTS, selectVariant } from '@/app/lib/ab-testing'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // A/B testing for /new-guests page
  if (pathname === '/new-guests') {
    const experiment = EXPERIMENTS.NEW_GUESTS_HERO_CTA
    const existingVariant = request.cookies.get(experiment.cookieName)

    if (!existingVariant) {
      const variant = selectVariant(experiment.variants, experiment.weights)
      const response = NextResponse.next()

      response.cookies.set(experiment.cookieName, variant, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: false, // Allow client-side reading for React components
        sameSite: 'lax',
        path: '/',
      })

      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/new-guests'],
}
