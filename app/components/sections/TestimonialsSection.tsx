'use client'

import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Tia Joaquin',
    content: 'Ulu Spa was amazing. The hair treatment was very relaxing and the service was top notch. The space is beautiful and peaceful. Definitely going back and telling friends and family.',
    rating: 5,
    initials: 'TJ',
    timeAgo: 'a day ago',
    avatarColor: 'from-pink-400 to-pink-500',
    googleUrl: 'https://www.google.com/maps/contrib/104690577743039956370/reviews/@40.3569403,-111.7624964,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 2,
    name: 'Tai Nuusa',
    content: 'Loved ulu spa so much! I brought my SIL with me to experience this for the first time and it was soooo good! The owners were so nice and took great care of us!',
    rating: 5,
    initials: 'TN',
    timeAgo: '2 days ago',
    avatarColor: 'from-blue-400 to-blue-500',
    avatarImage: '/images/avatars/tai-nuusa-image.png',
    googleUrl: 'https://www.google.com/maps/contrib/115414944323774604826/reviews/@36.6979441,-110.0423541,5z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D',
    reviewCount: 6
  },
  {
    id: 3,
    name: 'Jackie Wright',
    content: 'Amazing!!! Indulgent & worth the self care!! Loved, loved, loved this!!!! Great price and incredible experience.',
    rating: 5,
    initials: 'JW',
    timeAgo: '4 days ago',
    avatarColor: 'from-purple-400 to-purple-500',
    googleUrl: 'https://www.google.com/maps/contrib/116909416203419356592/reviews?hl=en-US'
  },
  {
    id: 4,
    name: 'Taylen Bloomfield',
    content: 'This place was AMAZING! My boyfriend and I went and we are forever hooked. The owners were so kind and welcoming — you can tell they really care. The vibe was this perfect mix of tropical relaxation and luxury spa.',
    rating: 5,
    initials: 'TB',
    timeAgo: '6 days ago',
    avatarColor: 'from-green-400 to-green-500',
    avatarImage: '/images/avatars/taylen-bloomfield.png',
    googleUrl: 'https://www.google.com/maps/contrib/111298757679635485738/reviews?hl=en-US'
  },
  {
    id: 5,
    name: 'Katie Bates',
    content: 'Amazing relaxing head spa experience and my hair was silky soft afterwards. My only recommendation to them is to heat the room a little more because even with a blanket it was kind of chilly.',
    rating: 5,
    initials: 'KB',
    timeAgo: '2 weeks ago',
    avatarColor: 'from-indigo-400 to-indigo-500',
    avatarImage: '/images/avatars/katie-bates.png',
    googleUrl: 'https://www.google.com/maps/contrib/117333832981530617738/reviews?hl=en-US'
  },
  {
    id: 6,
    name: 'Kacey Thorne',
    content: 'This was the most relaxing spa experience I have ever had. I am going to be signing up for a membership and get my girlfriends to go too. It was incredible.',
    rating: 5,
    initials: 'KT',
    timeAgo: '2 weeks ago',
    avatarColor: 'from-orange-400 to-orange-500',
    googleUrl: 'https://www.google.com/maps/contrib/114717175870844772954/reviews?hl=en-US'
  },
  {
    id: 7,
    name: 'Mmarie Enoch',
    content: 'My daughter and I went for a 30 min express and it was soooo nice! Very peaceful, relaxing, and just a nice way to start the weekend. I will be going back for a longer session next time. The staff was very pleasant and welcoming.',
    rating: 5,
    initials: 'ME',
    timeAgo: '2 weeks ago',
    avatarColor: 'from-teal-400 to-teal-500',
    avatarImage: '/images/avatars/Mmarie-enoch.png',
    googleUrl: 'https://www.google.com/search?q=ulu+spa&oq=ulu+spa&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMTE0N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8&zx=1762927519387&no_sw_cr=1#lrd=0x874d83b2170bde21:0xb22d53820eb1c0c4,1,,,,'
  },
  {
    id: 8,
    name: 'Abigail Danielson',
    content: 'What an amazing experience from start to finish. The staff were so friendly and professional. The head spa part was phenomenal; so relaxing and calming! 10/10 will always recommend!!!',
    rating: 5,
    initials: 'AD',
    timeAgo: '3 weeks ago',
    avatarColor: 'from-red-400 to-red-500',
    googleUrl: 'https://www.google.com/search?q=ulu+spa&oq=ulu+spa&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMTE0N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8&zx=1762927519387&no_sw_cr=1#lrd=0x874d83b2170bde21:0xb22d53820eb1c0c4,1,,,,'
  },
  {
    id: 9,
    name: 'Noemi Castillo',
    content: 'Will be back for sure! Great service, quality attention and such a genuine experience.',
    rating: 5,
    initials: 'NC',
    timeAgo: '3 weeks ago',
    avatarColor: 'from-cyan-400 to-cyan-500',
    googleUrl: 'https://www.google.com/search?q=ulu+spa&oq=ulu+spa&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMTE0N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8&zx=1762927519387&no_sw_cr=1#lrd=0x874d83b2170bde21:0xb22d53820eb1c0c4,1,,,,'
  }
]

// Create arrays for the two rows
const firstRowTestimonials = testimonials.filter((_, index) => index % 2 === 0)
const secondRowTestimonials = testimonials.filter((_, index) => index % 2 === 1)

// Testimonial Card Component  
const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="testimonial-card flex-shrink-0 w-80 md:w-96 mx-4">
    <a 
      href={testimonial.googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group cursor-pointer"
      aria-label={`Read ${testimonial.name}'s review on Google`}
    >
      <div className="card-inner bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-spa-sage-100/50 transition-all duration-300 h-full relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarColor} rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md overflow-hidden`}>
              {testimonial.avatarImage ? (
                <Image
                  src={testimonial.avatarImage}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                testimonial.initials
              )}
            </div>
            <div>
              <div className="font-semibold text-spa-sage-800 text-base group-hover:text-spa-sage-900 transition-colors">
                {testimonial.name}
              </div>
              <div className="text-spa-stone-500 text-xs space-y-0.5">
                {testimonial.reviewCount && (
                  <div>{testimonial.reviewCount} reviews</div>
                )}
                <div>{testimonial.timeAgo}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xs text-spa-stone-500 font-medium bg-spa-sage-50 px-3 py-1 rounded-full">
              Google
            </div>
            <svg className="w-4 h-4 text-spa-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 text-yellow-400 drop-shadow-sm" />
          ))}
        </div>

        {/* Content */}
        <p className="text-spa-stone-700 leading-relaxed text-sm line-clamp-4">
          {testimonial.content}
        </p>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-gold-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </a>
  </div>
)

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-spa-sage-50 via-white to-spa-cream-50 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-spa-gold-100 text-spa-gold-800 text-sm font-medium mb-6">
          ⭐ Client Testimonials ⭐
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-spa-sage-800 mb-6">
          What Our Clients
          <br />
          <span className="bg-gradient-to-r from-spa-gold-600 to-spa-gold-500 bg-clip-text text-transparent">
            Are Saying
          </span>
        </h2>
        <p className="text-xl text-spa-stone-600 leading-relaxed">
          Real experiences from real people who have discovered their sanctuary at Ulu Spa.
        </p>
      </div>

      {/* Infinite Scrolling Testimonials */}
      <div className="relative py-12">
        {/* First Row - Scrolling Left */}
        <div className="testimonials-row mb-16">
          <div className="flex testimonials-scroll-left py-4">
            {[...firstRowTestimonials, ...firstRowTestimonials, ...firstRowTestimonials].map((testimonial, index) => (
              <div key={`first-${index}`} className="my-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="testimonials-row">
          <div className="flex testimonials-scroll-right py-4">
            {[...secondRowTestimonials, ...secondRowTestimonials, ...secondRowTestimonials].map((testimonial, index) => (
              <div key={`second-${index}`} className="my-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays for Seamless Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-spa-sage-50 via-spa-sage-50/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-spa-cream-50 via-spa-cream-50/50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-spa-sage-100/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2">5.0★</div>
              <div className="text-spa-stone-600 text-sm font-medium">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2">62+</div>
              <div className="text-spa-stone-600 text-sm font-medium">Google Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2">94%</div>
              <div className="text-spa-stone-600 text-sm font-medium">Return Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-spa-sage-800 mb-2">100%</div>
              <div className="text-spa-stone-600 text-sm font-medium">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}