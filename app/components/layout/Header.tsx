'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Memberships', href: '/memberships' },
  { name: 'Cards', href: 'https://clients.mangomint.com/gift-cards/uluspa', external: true },
  { name: 'Groups', href: '/group-bookings' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Pages that have white backgrounds and need dark navigation by default
  const whiteBackgroundPages: string[] = []
  const isWhiteBackgroundPage = whiteBackgroundPages.includes(pathname)

  // Pages that need dark text but should keep transparent header until scrolled
  const darkTextTransparentPages = ['/faq', '/contact']
  const isDarkTextTransparentPage = darkTextTransparentPages.includes(pathname)

  // Pages that should use stone/cream text in default mode (not scrolled)
  const stoneTextPages = ['/memberships', '/group-bookings']
  const isStoneTextPage = stoneTextPages.includes(pathname)

  // Helper function to check if a navigation link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine if we should use dark styling for header background (scrolled or white background pages)
  const useDarkStyling = scrolled || isWhiteBackgroundPage

  // Determine if we should use dark text (scrolled, white background pages, or dark text transparent pages)
  const useDarkText = scrolled || isWhiteBackgroundPage || isDarkTextTransparentPage

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 animate-in animate-slide-down py-3 md:py-4 lg:py-5 ${
        useDarkStyling 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-200/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="grid grid-cols-2 lg:grid-cols-3 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-self-start">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-3 hover-scale">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-[121px] lg:h-[121px]">
                <Image
                  src="/images/logo/ulu-logo.png"
                  alt="ULU Spa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden justify-self-end">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-3 min-h-[44px] min-w-[44px] transition-colors duration-300 ${
              useDarkText
                ? 'text-dark hover:text-gold-600'
                : (isStoneTextPage ? 'text-stone-100 hover:text-gold-200' : 'text-white hover:text-gold-300')
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-7 w-7 md:h-6 md:w-6 stroke-2" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-center justify-self-center">
          <div className="flex gap-x-6 xl:gap-x-10">
          {navigation.map((item) => {
            const isActive = isActiveLink(item.href)
            return (
            <div key={item.name}>
              <Link
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`relative text-sm xl:text-base leading-6 whitespace-nowrap transition-all duration-300 after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-gold-300 after:transition-all after:duration-300 ${
                  isActive
                    ? `after:w-full font-semibold ${
                        useDarkText ? 'text-gold-600' : (isStoneTextPage ? 'text-gold-400' : 'text-gold-300')
                      }`
                    : `after:w-0 hover:after:w-full font-medium ${
                        useDarkText
                          ? 'text-dark/90 hover:text-gold-600'
                          : (isStoneTextPage ? 'text-stone-100 hover:text-gold-200' : 'text-white/90 hover:text-gold-300')
                      }`
                }`}
              >
                {item.name}
              </Link>
            </div>
            )
          })}
          </div>
        </div>

        <div className="hidden lg:flex justify-self-end">
          <button
            type="button"
            className="mangomint-booking-button group relative overflow-hidden bg-transparent hover:bg-custom-gold/10 text-custom-gold px-8 py-4 rounded-full font-bold text-base transition-all duration-500 shadow-2xl hover:shadow-custom-gold/30 transform hover:scale-105 border-2 border-custom-gold hover:border-custom-gold backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-custom-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">
              Book Now
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`fixed inset-0 z-50 w-full min-h-screen overflow-y-auto bg-white px-6 py-6 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ height: '100dvh' }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 md:w-14 md:h-14">
                  <Image
                    src="/images/logo/ulu-logo.png"
                    alt="ULU Spa Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-3 text-dark hover:text-gold-500 min-h-[44px] min-w-[44px] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-7 w-7 md:h-6 md:w-6 stroke-2" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root pb-24">
            <div className="-my-6 divide-y divide-gold-200">
              <div className="space-y-1 py-6">
                {navigation.map((item, index) => {
                  const isActive = isActiveLink(item.href)
                  return (
                  <div
                    key={item.name}
                    className={`animate-in animate-slide-right animate-delay-${Math.min(index + 1, 5)}00`}
                  >
                    <Link
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`-mx-3 flex rounded-lg px-3 py-3 text-base leading-7 transition-colors duration-200 min-h-[44px] items-center ${
                        isActive
                          ? 'bg-gold-50 text-gold-600 font-semibold border-l-4 border-gold-500'
                          : 'font-medium text-dark hover:bg-cream-50 hover:text-gold-500'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Fixed Bottom Book Now Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>
            <button
              type="button"
              className="mangomint-booking-button w-full bg-gold-500 hover:bg-gold-600 text-black px-6 py-4 rounded-full font-bold text-center transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 border-2 border-gold-400 hover:border-gold-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>
                Book Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}