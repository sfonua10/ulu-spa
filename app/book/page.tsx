'use client'

import { useInView, useStaggeredInView } from '../hooks/useInView'
import BookingWidget from '../components/ui/BookingWidget'

export default function BookPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.2 })
  const { ref: expectRef, isInView: expectInView } = useInView({ threshold: 0.2 })
  const { ref: stepsRef, visibleItems } = useStaggeredInView(3, 100)
  const { ref: prepRef, isInView: prepInView } = useInView({ threshold: 0.2 })

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-spa-cream-50 via-white to-spa-sage-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={heroRef}
            className={`text-center mb-12 ${heroInView ? 'animate-in animate-slide-up animate-slow' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-spa-sage-100 text-spa-sage-800 text-sm font-medium mb-6">
              🗓️ Book Your Appointment 🗓️
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-spa-sage-800 mb-6">
              Reserve Your
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                Sanctuary Experience
              </span>
            </h1>
            <p className="text-xl text-spa-stone-600 max-w-3xl mx-auto leading-relaxed">
              Take the first step toward transformation. Our streamlined booking process 
              makes it easy to secure your personalized wellness experience.
            </p>
          </div>

          {/* Booking Widget */}
          <div className="max-w-lg mx-auto">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={expectRef}
            className={`text-center mb-16 ${expectInView ? 'animate-in animate-slide-up animate-slow' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              What to Expect
              <br />
              <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
                During Your Visit
              </span>
            </h2>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Arrival & Consultation',
                description: 'Arrive 15 minutes early for a personalized consultation to discuss your wellness goals and preferences.',
                icon: '🏃‍♀️'
              },
              {
                step: '02', 
                title: 'Your Treatment',
                description: 'Enjoy your customized scalp massage experience in our tranquil treatment rooms with premium amenities.',
                icon: '✨'
              },
              {
                step: '03',
                title: 'Relaxation & Care Tips',
                description: 'Conclude with a relaxation period and receive personalized aftercare tips to extend your wellness benefits.',
                icon: '🌱'
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className={`text-center ${
                  visibleItems.has(index) ? `animate-in animate-slide-up animate-delay-${index * 100}` : 'opacity-0'
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-spa-sage-600 font-bold text-sm mb-2">{item.step}</div>
                <h3 className="text-xl font-display font-bold text-spa-sage-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-spa-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20 bg-gradient-to-br from-spa-sage-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={prepRef}
            className={`text-center mb-12 ${prepInView ? 'animate-in animate-slide-up animate-slow' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
              Preparation Tips
            </h2>
            <p className="text-xl text-spa-stone-600 leading-relaxed">
              Simple steps to maximize your wellness experience
            </p>
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-spa-sage-100 ${
            prepInView ? 'animate-in animate-slide-up animate-delay-200' : 'opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-spa-sage-800 mb-4">Before Your Visit</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-sage-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Arrive with clean, dry hair</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-sage-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Avoid caffeine 2 hours before treatment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-sage-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Wear comfortable, loose-fitting clothing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-sage-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Silence your phone for full relaxation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-spa-sage-800 mb-4">What We Provide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-gold-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Premium organic oils & treatments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-gold-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Complimentary refreshments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-gold-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Comfortable robes & slippers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spa-gold-600 rounded-full mt-2"></div>
                    <span className="text-spa-stone-700">Take-home care instructions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}