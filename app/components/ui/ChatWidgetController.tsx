'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * ChatWidgetController - Manages MangoMint chat widget visibility
 * Hides chat widget on booking pages to avoid UI conflicts
 */
export default function ChatWidgetController() {
  const pathname = usePathname()

  useEffect(() => {
    // Pages where chat should be hidden
    const hideChatPages = ['/book']

    // Check if current page should hide chat
    const shouldHideChat = hideChatPages.some(page =>
      pathname?.startsWith(page)
    )

    // Set data attribute on body to control chat visibility via CSS
    if (shouldHideChat) {
      document.body.setAttribute('data-hide-chat', 'true')
    } else {
      document.body.removeAttribute('data-hide-chat')
    }

    // Cleanup on unmount
    return () => {
      document.body.removeAttribute('data-hide-chat')
    }
  }, [pathname])

  // This component doesn't render anything
  return null
}
