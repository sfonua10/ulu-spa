'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * ChatWidgetController - Manages MangoMint chat widget visibility and theming
 * Hides chat widget on booking pages to avoid UI conflicts
 * Applies Valentine's theme on /valentines page
 */
export default function ChatWidgetController() {
  const pathname = usePathname()

  useEffect(() => {
    // Pages where chat should be hidden
    const hideChatPages: string[] = []

    // Check if current page should hide chat
    const shouldHideChat = hideChatPages.some(page =>
      pathname?.startsWith(page)
    )

    // Valentine's widget theming
    const isValentinesPage = pathname === '/valentines'

    // Set data attribute on body to control chat visibility via CSS
    if (shouldHideChat) {
      document.body.setAttribute('data-hide-chat', 'true')
    } else {
      document.body.removeAttribute('data-hide-chat')
    }

    // Set data attribute for Valentine's widget theming
    if (isValentinesPage) {
      document.body.setAttribute('data-valentine-widget', 'true')
    } else {
      document.body.removeAttribute('data-valentine-widget')
    }

    // Cleanup on unmount
    return () => {
      document.body.removeAttribute('data-hide-chat')
      document.body.removeAttribute('data-valentine-widget')
    }
  }, [pathname])

  // This component doesn't render anything
  return null
}
