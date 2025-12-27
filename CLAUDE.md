# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ULU Head Spa is a luxury spa website built with Next.js 16 and React 19, featuring a modern component architecture with Tailwind CSS v4 for styling. The application integrates with MangoMint for booking management and provides a high-end user experience with animations, video backgrounds, and interactive elements.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Core Structure
- **App Router**: Uses Next.js 13+ app directory structure
- **Component Organization**:
  - `/app/components/layout/` - Header, Footer components
  - `/app/components/sections/` - Page sections (Hero, Services, Testimonials, CTA)
  - `/app/components/ui/` - Reusable UI components and widgets
  - `/app/components/seo/` - SEO components (JsonLd structured data)
- **Pages**:
  - `/app/page.tsx` - Homepage with section components
  - `/app/services/page.tsx` - Services listing
  - `/app/memberships/page.tsx` - Membership plans
  - `/app/group-bookings/page.tsx` - Group booking information
  - `/app/about/page.tsx` - About the spa and team
  - `/app/contact/page.tsx` - Contact information and form
  - `/app/faq/page.tsx` - Frequently asked questions
  - `/app/gift-cards/page.tsx` - Gift card purchases
  - `/app/privacy/page.tsx` - Privacy Policy (legal information)
  - `/app/terms/page.tsx` - Terms of Service (legal agreement)
  - `/app/policy/page.tsx` - Booking Policy (cancellation, payment, arrival guidelines)
- **Error Handling**:
  - `/app/loading.tsx` - Loading state UI
  - `/app/error.tsx` - Error boundary component
  - `/app/not-found.tsx` - 404 page

### Configuration
Centralized configuration in `/app/constants/config.ts`:
- **COMPANY**: Name, MangoMint ID, phone, email, address, hours
- **URLS**: Booking base URL and helpers
- **SOCIAL**: Instagram, Facebook, TikTok links
- `getBookingUrl(serviceId?)` - Helper for generating MangoMint booking URLs

### Data Layer
Static data files in `/app/data/`:
- `services.ts` - Service definitions and pricing
- `testimonials.ts` - Customer testimonials
- `team.ts` - Team member information
- `about.ts` - About page content

### Typography System
Uses custom Google Fonts configured in layout.tsx:
- **Playfair Display** (`--font-playfair`) - Elegant headings and luxury branding
- **Montserrat** (`--font-montserrat`) - Primary body text and UI elements
- **Dancing Script** (`--font-dancing`) - Decorative accent text
- **Geist Mono** (`--font-geist-mono`) - Code and monospace elements

### MangoMint Integration
- **Integration Method**: Direct script integration with Company ID 904811
- **Script Setup**: Two-script approach in layout.tsx:
  - Initialization script sets `window.Mangomint.CompanyId = 904811` (beforeInteractive)
  - Main booking script loads from `https://booking.mangomint.com/app.js` (afterInteractive)
- **Booking Flow**: MangoMint handles all booking functionality through their embedded system
- **URL Helpers**: `/app/utils/mangomint-urls.ts` for generating booking links

### Analytics & SEO
- **Google Analytics**: `/app/components/GoogleAnalytics.tsx` component and `/app/lib/analytics.ts` utilities
- **Sitemap**: `/app/sitemap.ts` for dynamic sitemap generation
- **Structured Data**: `/app/components/seo/JsonLd.tsx` for JSON-LD schema markup

### State Management & Data
- **AnimationContext**: `/app/contexts/AnimationContext.tsx` for animation state management
- **No Global State**: Uses React local state and props for component communication
- **Types**: Centralized in `/app/types/index.ts` (Service, Membership, Testimonial, BookingFormData)
- **Utils**: Common utilities in `/app/lib/utils.ts` including `cn()` for conditional classes and `formatPrice()`

### Styling Architecture
- **Tailwind CSS v4**: Primary styling framework with modern features
- **Custom CSS**: `/app/styles/animations.css` for complex animations
- **Global Styles**: `/app/globals.css` for base styles and CSS variables
- **Glass Morphism**: Heavy use of backdrop-blur and glass card effects
- **Responsive Design**: Mobile-first approach with luxury aesthetic

### Key Components
- **LuxuryVideoHero**: Video background hero with floating elements
- **BookingWidget**: Integrated booking interface (connects to MangoMint)
- **FloatingBookingButton**: Persistent booking CTA throughout site
- **ParticleField**: Animated background elements for premium feel
- **AnimatedPrice/AnimatedCounter**: Number animations for pricing displays
- **GlassCard**: Reusable glass morphism card component
- **FAQAccordion**: Expandable FAQ component
- **ServiceDetailModal**: Modal for service details
- **ChatWidgetController**: Chat widget integration
- **MobileTestimonialsCarousel**: Mobile-optimized testimonial slider
- **VideoBackground**: Reusable video background component

## Development Guidelines

### Component Patterns
- Components use TypeScript with proper interface definitions
- Custom hooks in `/app/hooks/` (e.g., `useInView.ts` for scroll animations)
- Prefer composition over inheritance for component structure
- Use `cn()` utility for conditional Tailwind classes

### Environment Setup
- Requires Node.js with npm
- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Path aliases: `@/*` maps to project root

### Dependencies
Key packages:
- `@headlessui/react` - Accessible UI primitives
- `@heroicons/react` - Heroicons icon set
- `lucide-react` - Lucide icon set
- `react-icons` - Additional icons
- `clsx` + `tailwind-merge` - Class name utilities

### MangoMint Integration Notes
- Company ID: 904811 (hardcoded in layout.tsx and config.ts)
- Uses direct script integration, no environment variables needed
- All booking functionality handled by MangoMint's system
- Local service data is for display purposes only

### Legal Pages
The site includes comprehensive legal documentation to protect the business and inform customers:
- **Privacy Policy** (`/privacy`) - CCPA-compliant privacy information covering data collection, usage, third-party services (MangoMint, payment processors), cookies, user rights, and contact information
- **Terms of Service** (`/terms`) - Complete legal agreement covering booking terms, cancellation policy, payment terms, membership agreements, gift cards, health/safety disclaimers, liability limitations, conduct policies, and dispute resolution
- **Booking Policy** (`/policy`) - User-friendly booking guidelines including 48-hour cancellation policy, group booking requirements, payment methods, arrival instructions, and preparation tips
- All legal pages feature luxury spa aesthetic with GlassCard components, gradient backgrounds, and floating decorative elements
- Links to legal pages are included in the Footer component under the "Support" section
