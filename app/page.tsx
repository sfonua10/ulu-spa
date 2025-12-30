import { Metadata } from 'next'
import HeroSection from './components/sections/HeroSection'
import SignatureExperiences from './components/sections/SignatureExperiences'
import ServicesPreview from './components/sections/ServicesPreview'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'

export const metadata: Metadata = {
  title: "ULU Head Spa | Luxury Head Spa in Pleasant Grove, Utah",
  description: "Experience ultimate relaxation at ULU Head Spa in Pleasant Grove, UT. Premium scalp treatments, head massages, and rejuvenating spa services. Book your sanctuary experience today.",
  alternates: {
    canonical: "https://www.uluspas.com",
  },
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <SignatureExperiences />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
