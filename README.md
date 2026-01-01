# ULU Head Spa

A luxury head spa website built with Next.js 16 and React 19, featuring an elegant design with glass morphism effects, video backgrounds, and seamless MangoMint booking integration.

**Live Site**: [uluspas.com](https://www.uluspas.com)

## Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **UI**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, Heroicons, React Icons
- **UI Components**: Headless UI
- **Booking**: MangoMint Integration
- **Analytics**: Google Analytics

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── api/               # API routes (feedback submission)
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Page sections (Hero, Services, Testimonials, CTA, SignatureExperiences)
│   ├── ui/            # Reusable UI components
│   └── seo/           # SEO components (JsonLd)
├── constants/         # Centralized configuration
├── contexts/          # React contexts (AnimationContext)
├── data/              # Static data (services, testimonials, team, about)
├── hooks/             # Custom React hooks
├── lib/               # Utilities and analytics
├── styles/            # Custom CSS animations
├── types/             # TypeScript type definitions
├── utils/             # Helper utilities (MangoMint URLs)
└── [routes]/          # Page routes
    ├── services/      # Services listing
    ├── memberships/   # Membership plans
    ├── group-bookings/# Group booking info
    ├── about/         # About the spa
    ├── contact/       # Contact page
    ├── faq/           # FAQ page
    ├── gift-cards/    # Gift card purchases
    ├── privacy/       # Privacy Policy
    ├── terms/         # Terms of Service
    └── policy/        # Booking Policy
```

## Features

- **Luxury Design**: Glass morphism, floating elements, particle effects
- **Video Backgrounds**: Full-screen hero with optimized video playback
- **Signature Experiences**: Premium bundled spa treatments section
- **MangoMint Integration**: Seamless booking and scheduling
- **Responsive**: Mobile-first design approach
- **SEO Optimized**: Sitemap, video sitemap, structured data (JSON-LD)
- **Analytics**: Google Analytics integration
- **Custom Typography**: Playfair Display, Montserrat, Dancing Script
- **Feedback System**: Owner feedback widget with GitHub issue integration

## Environment Variables

For the feedback system to work, set up these environment variables:

```env
GITHUB_TOKEN=your_github_token
GITHUB_REPO=owner/repo
```

## Deployment

Deploy on [Vercel](https://vercel.com) for optimal Next.js performance:

```bash
npm run build
```

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.
