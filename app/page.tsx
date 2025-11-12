import HeroSection from './components/sections/HeroSection'
import ServicesPreview from './components/sections/ServicesPreview'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
