'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BookingButton } from '../ui/BookingButton'
import { UluLogo } from '../ui/UluLogo'
import { useHolidayTheme } from '@/app/contexts/HolidayThemeContext'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Memberships', href: '/memberships' },
  { name: 'Gift Cards', href: '/gift-cards' },
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
  const isWhiteBackgroundPage = false

  // Pages that need dark text but should keep transparent header until scrolled
  const darkTextTransparentPages = ['/faq', '/contact', '/gift-cards', '/policy']
  const isDarkTextTransparentPage = darkTextTransparentPages.includes(pathname)

  // Pages that should use stone/cream text in default mode (not scrolled)
  const stoneTextPages = ['/memberships', '/group-bookings']
  const isStoneTextPage = stoneTextPages.includes(pathname)

  // Holiday theme detection from context (auto-detected from URL)
  const { isHolidayTheme } = useHolidayTheme()

  // Helper function to check if a navigation link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
          ? (isHolidayTheme
              ? 'bg-[var(--holiday-primary-50)]/95 backdrop-blur-md shadow-lg border-b border-[var(--holiday-primary-200)]/30'
              : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-200/20')
          : 'bg-transparent'
      }`}
    >
      <nav className="grid grid-cols-2 lg:grid-cols-3 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-self-start">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-3 hover-scale">
              <UluLogo className="w-16 h-16 md:w-20 md:h-20 lg:w-[121px] lg:h-[121px]" />
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden justify-self-end">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-3 min-h-[44px] min-w-[44px] transition-colors duration-300 ${
              useDarkText
                ? isHolidayTheme
                  ? 'text-[var(--holiday-text-accent)] hover:text-[var(--holiday-primary-600)]'
                  : 'text-dark hover:text-gold-600'
                : isHolidayTheme
                  ? (isStoneTextPage ? 'text-stone-100 hover:text-[var(--holiday-text-accent)]' : 'text-white hover:text-[var(--holiday-text-accent)]')
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
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-sm xl:text-base leading-6 whitespace-nowrap transition-all duration-300 after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                  isHolidayTheme ? 'after:bg-[var(--holiday-text-accent)]' : 'after:bg-gold-300'
                } ${
                  isActive
                    ? `after:w-full font-semibold ${
                        isHolidayTheme
                          ? 'holiday-text-accent'
                          : useDarkText ? 'text-gold-600' : (isStoneTextPage ? 'text-gold-400' : 'text-gold-300')
                      }`
                    : `after:w-0 hover:after:w-full font-medium ${
                        isHolidayTheme
                          ? (useDarkText
                              ? 'holiday-text-dark holiday-text-accent-hover'
                              : 'holiday-text-light holiday-text-accent-hover')
                          : useDarkText
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
          <BookingButton
            location="header"
            variant="default"
            size="md"
            className={`group relative overflow-hidden px-8 py-4 rounded-full font-bold text-base transition-all duration-500 shadow-2xl transform hover:scale-105 backdrop-blur-sm border-2 ${
              isHolidayTheme
                ? '!bg-transparent !text-[var(--holiday-text-accent)] holiday-button-outline holiday-glow-hover'
                : 'bg-transparent hover:bg-custom-gold/10 text-custom-gold border-custom-gold hover:border-custom-gold hover:shadow-custom-gold/30'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isHolidayTheme ? 'bg-[var(--holiday-primary-400)]/5' : 'bg-custom-gold/5'
            }`}></div>
            <span className="relative z-10">
              Book Now
            </span>
          </BookingButton>
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
                <UluLogo className="w-12 h-12 md:w-14 md:h-14" />
              </div>
            </Link>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-3 min-h-[44px] min-w-[44px] transition-colors duration-300 ${
                isHolidayTheme
                  ? 'text-[var(--holiday-text-accent)] hover:text-[var(--holiday-primary-600)]'
                  : 'text-dark hover:text-gold-500'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-7 w-7 md:h-6 md:w-6 stroke-2" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root pb-24">
            <div className={`-my-6 divide-y ${isHolidayTheme ? 'divide-[var(--holiday-primary-300)]' : 'divide-gold-200'}`}>
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
                      aria-current={isActive ? 'page' : undefined}
                      className={`-mx-3 flex rounded-lg px-3 py-3 text-base leading-7 transition-colors duration-200 min-h-[44px] items-center ${
                        isActive
                          ? isHolidayTheme
                            ? 'bg-[var(--holiday-primary-100)] text-[var(--holiday-text-accent)] font-semibold border-l-4 border-[var(--holiday-secondary-400)]'
                            : 'bg-gold-50 text-gold-600 font-semibold border-l-4 border-gold-500'
                          : isHolidayTheme
                            ? 'font-medium text-[var(--holiday-text-accent)] hover:bg-[var(--holiday-primary-50)] hover:text-[var(--holiday-primary-600)]'
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
            <BookingButton
              location="mobile_menu"
              variant="default"
              size="lg"
              className={`w-full px-6 py-4 rounded-full font-bold text-center transition-all duration-300 hover:shadow-xl border-2 ${
                isHolidayTheme
                  ? 'holiday-button-gradient text-white hover:shadow-[var(--holiday-glow-color)] border-[var(--holiday-primary-400)]'
                  : 'bg-gold-500 hover:bg-gold-600 text-black hover:shadow-gold/30 border-gold-400 hover:border-gold-300'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>
                Book Now
              </span>
            </BookingButton>
          </div>
        </div>
      </div>
    </header>
  )
}