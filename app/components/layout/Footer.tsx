'use client'

import Link from 'next/link'
import { useStaggeredInView } from '@/app/hooks/useInView'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { COMPANY, SOCIAL } from '@/app/constants/config'

const footerLinks = {
  services: [
    { name: 'Scalp Massage Therapy', href: '/services' },
    { name: 'Hair Growth Treatment', href: '/services' },
    { name: 'Stress Relief Session', href: '/services' },
    { name: 'Group Experiences', href: '/group-bookings' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Booking Policy', href: '/policy' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
}

const contactInfo = {
  address: COMPANY.ADDRESS,
  phone: COMPANY.PHONE,
  email: COMPANY.EMAIL,
  hours: {
    weekdays: COMPANY.HOURS.WEEKDAYS,
    weekends: COMPANY.HOURS.WEEKENDS
  }
}

const socialLinks = [
  { name: 'Facebook', href: SOCIAL.FACEBOOK, icon: FaFacebook },
  { name: 'Instagram', href: SOCIAL.INSTAGRAM, icon: FaInstagram },
  { name: 'TikTok', href: SOCIAL.TIKTOK, icon: FaTiktok },
]

export default function Footer() {
  const { ref: footerRef, visibleItems } = useStaggeredInView<HTMLDivElement>(6, 100)

  return (
    <footer className="bg-spa-sage-900 text-spa-sage-50 relative">
      {/* Top border for better separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spa-sage-700 to-transparent"></div>
      <div ref={footerRef} className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Section */}
          <div className={`lg:col-span-1 ${
            visibleItems.has(0) ? 'animate-in animate-slide-up animate-delay-100' : 'opacity-0'
          }`}>
            <h3 className="text-3xl font-display font-bold text-spa-sage-50 mb-4 tracking-wide">
              Ulu Spa
            </h3>
            <p className="text-spa-sage-200 leading-relaxed mb-6">
              Your sanctuary of luxury scalp massage. Experience stress relief,
              promote hair growth, and find your inner peace with our holistic approach.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name}`}
                    className="text-spa-sage-200 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Links */}
          <div className={`${
            visibleItems.has(1) ? 'animate-in animate-slide-up animate-delay-200' : 'opacity-0'
          }`}>
            <h4 className="text-lg font-bold text-spa-sage-50 mb-4 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-spa-sage-200 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={`${
            visibleItems.has(2) ? 'animate-in animate-slide-up animate-delay-300' : 'opacity-0'
          }`}>
            <h4 className="text-lg font-bold text-spa-sage-50 mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-spa-sage-200 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-spa-sage-200 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className={`${
            visibleItems.has(3) ? 'animate-in animate-slide-up animate-delay-400' : 'opacity-0'
          }`}>
            <h4 className="text-lg font-bold text-spa-sage-50 mb-4 tracking-wide">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-spa-sage-200 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${
            visibleItems.has(4) ? 'animate-in animate-slide-up animate-delay-500' : 'opacity-0'
          }`}>
            <h4 className="text-lg font-bold text-spa-sage-50 mb-4 tracking-wide">Contact Us</h4>
            <div className="space-y-3 text-spa-sage-200">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>{contactInfo.hours.weekdays}</div>
                  <div>{contactInfo.hours.weekends}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 pt-8 border-t border-spa-sage-800 ${
          visibleItems.has(5) ? 'animate-in animate-fade-in animate-delay-600' : 'opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-spa-sage-300">
              © {new Date().getFullYear()} Ulu Spa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-spa-sage-300">
              {footerLinks.support.slice(2).map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}