# ULU Head Spa

A luxury head spa website built with Next.js 16 and React 19, featuring an elegant design with glass morphism effects, video backgrounds, and seamless MangoMint booking integration.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, Heroicons, React Icons
- **UI Components**: Headless UI
- **Booking**: MangoMint Integration

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
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Page sections (Hero, Services, Testimonials, CTA)
│   ├── ui/            # Reusable UI components
│   └── seo/           # SEO components (JsonLd)
├── constants/         # Centralized configuration
├── contexts/          # React contexts (AnimationContext)
├── data/              # Static data (services, testimonials, team)
├── hooks/             # Custom React hooks
├── lib/               # Utilities and analytics
├── styles/            # Custom CSS animations
└── [routes]/          # Page routes (services, memberships, about, etc.)
```

## Features

- **Luxury Design**: Glass morphism, floating elements, particle effects
- **Video Backgrounds**: Full-screen hero with video support
- **MangoMint Integration**: Seamless booking and scheduling
- **Responsive**: Mobile-first design approach
- **SEO Optimized**: Sitemap, structured data (JSON-LD)
- **Analytics**: Google Analytics integration
- **Custom Typography**: Playfair Display, Montserrat, Dancing Script

## Deployment

Deploy on [Vercel](https://vercel.com) for optimal Next.js performance:

```bash
npm run build
```

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.
