'use client'

import { useInView } from '@/app/hooks/useInView'
import { BuildingOffice2Icon, UserGroupIcon, ClockIcon, SparklesIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { PhoneLink } from '@/app/components/ui/PhoneLink'
import { COMPANY } from '@/app/constants/config'

const benefits = [
  { icon: BuildingOffice2Icon, label: 'We Come to You' },
  { icon: UserGroupIcon, label: 'Any Team Size' },
  { icon: ClockIcon, label: 'Flexible Scheduling' },
  { icon: SparklesIcon, label: 'Custom Packages' },
]

export default function CorporateWellnessSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-sage-800 via-spa-sage-900 to-[#1a2e1a]" />

      {/* Animated Gradient Mesh Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-spa-gold-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-spa-gold-400/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spa-gold-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Floating Golden Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large subtle orbs */}
        <div className="absolute top-10 left-[8%] w-4 h-4 bg-spa-gold-400/30 rounded-full animate-float blur-[1px]" />
        <div className="absolute top-1/4 right-[12%] w-3 h-3 bg-spa-gold-300/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-[15%] w-5 h-5 bg-spa-gold-400/25 rounded-full animate-float blur-[1px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-[20%] w-2 h-2 bg-spa-gold-500/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-[8%] w-4 h-4 bg-spa-gold-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-[25%] w-2 h-2 bg-spa-gold-400/45 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />

        {/* Extra sparkle particles */}
        <div className="hidden md:block absolute top-20 right-[30%] w-1.5 h-1.5 bg-spa-gold-300/60 rounded-full animate-float" style={{ animationDelay: '0.8s' }} />
        <div className="hidden md:block absolute bottom-20 left-[35%] w-2 h-2 bg-spa-gold-400/35 rounded-full animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="hidden md:block absolute top-[60%] left-[5%] w-1.5 h-1.5 bg-spa-gold-500/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="hidden md:block absolute top-[40%] right-[5%] w-2 h-2 bg-spa-gold-300/40 rounded-full animate-float" style={{ animationDelay: '1.8s' }} />
        <div className="hidden md:block absolute bottom-[40%] left-[40%] w-1 h-1 bg-spa-gold-400/60 rounded-full animate-float" style={{ animationDelay: '2.2s' }} />
        <div className="hidden md:block absolute top-[15%] left-[45%] w-1.5 h-1.5 bg-spa-gold-500/45 rounded-full animate-float" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-spa-gold-500/10 backdrop-blur-sm text-spa-gold-300 text-sm font-bold mb-8 border border-spa-gold-400/30 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <BuildingOffice2Icon className="h-4 w-4" />
          <span className="uppercase tracking-wider">Corporate Wellness</span>
        </div>

        {/* Headline */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Elevate Your{' '}
          <span className="text-spa-gold-400 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Workplace
          </span>
        </h2>

        {/* Subtext */}
        <p
          className={`text-xl md:text-2xl text-white/70 mb-14 max-w-2xl mx-auto font-light transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          On-site head spa experiences that transform team wellness
        </p>

        {/* Benefits Strip - Glass Cards */}
        <div
          className={`flex flex-wrap justify-center gap-4 md:gap-6 mb-14 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className="group flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-spa-gold-400/20 transition-all duration-300 hover:bg-white/10 hover:border-spa-gold-400/40 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-spa-gold-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-spa-gold-500/20 group-hover:scale-110">
                <benefit.icon className="h-6 w-6 md:h-7 md:w-7 text-spa-gold-400 group-hover:text-spa-gold-300 transition-colors duration-300" />
              </div>
              <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {benefit.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-[400ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <PhoneLink
            location="home_corporate_wellness"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 hover:from-spa-gold-400 hover:to-spa-gold-500 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)] transform hover:-translate-y-1 group"
          >
            <PhoneIcon className="h-6 w-6 group-hover:animate-pulse" />
            <span>Call: {COMPANY.PHONE}</span>
          </PhoneLink>

          {/* Supporting text */}
          <p className="mt-6 text-white/50 text-sm">
            Speak directly with our corporate wellness team
          </p>
        </div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spa-gold-500/30 to-transparent" />
    </section>
  )
}
