// GA4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, string | number | undefined>
    ) => void;
  }
}

/**
 * Track a custom event in Google Analytics 4
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | undefined>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Pre-defined event helpers for type safety and consistency

export function trackBookNowClick(location: string) {
  trackEvent('book_now_click', { location });
}

export function trackPhoneClick(page: string) {
  trackEvent('phone_call_click', { page });
}

export function trackMembershipClick(tier: string) {
  trackEvent('membership_signup_click', { membership_tier: tier });
}

export function trackGiftCardClick(page: string) {
  trackEvent('gift_card_click', { page });
}

export function trackServiceView(serviceName: string) {
  trackEvent('service_view', { service_name: serviceName });
}

export function trackOutboundClick(url: string, location: string) {
  trackEvent('outbound_click', { url, location });
}

export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', { depth_percentage: depth });
}

export function trackIntroOfferView() {
  trackEvent('intro_offer_page_view');
}

export function trackPromoCodeCopy(code: string) {
  trackEvent('intro_offer_code_copy', { code });
}

export function trackIntroOfferBooking(location: string) {
  trackEvent('intro_offer_book_click', { location });
}
