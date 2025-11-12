'use client'

import { useState } from 'react'
import { Button } from './Button'
import { 
  ClockIcon, 
  CheckIcon,
  StarIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

interface Service {
  id: number
  icon: React.ComponentType<any>
  name: string
  shortDesc: string
  fullDesc: string
  duration: string
  price: number
  priceRange?: string
  benefits: string[]
  includes: string[]
  popular: boolean
  category: string
}

interface LuxuryServiceCardProps {
  service: Service
  onBookNow?: () => void
  onLearnMore?: () => void
  className?: string
}

export default function LuxuryServiceCard({ 
  service, 
  onBookNow, 
  onLearnMore,
  className = '' 
}: LuxuryServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div
      className={`group relative h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowDetails(false)
      }}
    >
      {/* Main Card */}
      <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-4xl hover:border-spa-gold-200/40 perspective-1000">
        
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-xl" />
        
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-spa-gold-400/20 via-transparent to-spa-sage-400/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-6 right-6 z-20">
            <div className="bg-gradient-to-r from-spa-gold-500 to-spa-gold-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
              ⭐ Most Popular
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className={`relative z-10 p-8 h-full flex flex-col transition-transform duration-700 ${
          isHovered ? 'transform translate-z-4 rotate-x-2' : ''
        }`}>
          
          {/* Icon */}
          <div className="relative mb-6">
            <div className={`w-18 h-18 bg-gradient-to-br from-spa-sage-500 to-spa-sage-600 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-6 shadow-2xl' : ''
            }`}>
              <service.icon className="h-10 w-10 text-white" />
            </div>
            
            {/* Floating sparkles */}
            <div className={`absolute -top-2 -right-2 transition-all duration-500 ${
              isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-6 h-6 bg-spa-gold-400 rounded-full animate-ping" />
              <StarIcon className="h-4 w-4 text-spa-gold-500 absolute top-1 left-1" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold text-spa-sage-800 mb-3 group-hover:text-spa-sage-900 transition-colors">
              {service.name}
            </h3>
            
            <p className={`text-spa-stone-600 leading-relaxed mb-6 transition-all duration-300 ${
              showDetails ? 'opacity-70' : ''
            }`}>
              {showDetails ? service.fullDesc : service.shortDesc}
            </p>

            {/* Benefits Tags */}
            <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 ${
              isHovered ? 'transform translate-y-0' : 'transform translate-y-2'
            }`}>
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <span
                  key={benefit}
                  className={`px-3 py-1 text-xs font-medium bg-gradient-to-r from-spa-sage-50 to-spa-sage-100 text-spa-sage-700 rounded-full border border-spa-sage-200/50 transition-all duration-300 ${
                    isHovered ? `animate-bounce animate-delay-${index * 100}` : ''
                  }`}
                >
                  {benefit}
                </span>
              ))}
            </div>

            {/* Includes (shown on hover) */}
            {isHovered && (
              <div className="mb-6 animate-in slide-down">
                <h4 className="text-sm font-semibold text-spa-sage-700 mb-2">Includes:</h4>
                <ul className="space-y-1">
                  {service.includes.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center text-xs text-spa-stone-600">
                      <CheckIcon className="h-3 w-3 text-spa-sage-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Duration & Price */}
          <div className={`flex items-center justify-between mb-6 transition-all duration-300 ${
            isHovered ? 'transform scale-105' : ''
          }`}>
            <div className="flex items-center space-x-2 text-spa-stone-600">
              <ClockIcon className="h-5 w-5" />
              <span className="font-medium">{service.duration}</span>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-spa-sage-800 leading-none">
                ${service.price}
              </div>
              {service.priceRange && (
                <div className="text-xs text-spa-stone-500 mt-1">
                  Range: {service.priceRange}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`grid grid-cols-2 gap-3 transition-all duration-500 ${
            isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-90'
          }`}>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/50 backdrop-blur-sm border-spa-sage-200 hover:bg-spa-sage-50 hover:border-spa-sage-300 transition-all duration-300"
              onClick={() => {
                setShowDetails(!showDetails)
                onLearnMore?.()
              }}
            >
              {showDetails ? 'Less Info' : 'Learn More'}
            </Button>
            
            <Button 
              variant="luxury" 
              size="sm" 
              className="bg-gradient-to-r from-spa-sage-600 to-spa-sage-700 hover:from-spa-sage-700 hover:to-spa-sage-800 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
              onClick={onBookNow}
            >
              Book Now
              <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      </div>

      {/* 3D Shadow */}
      <div className={`absolute inset-0 bg-spa-sage-900/20 rounded-3xl transition-all duration-700 -z-10 ${
        isHovered ? 'transform translate-y-2 translate-x-2 scale-105 blur-xl' : 'transform translate-y-1 translate-x-1 blur-md'
      }`} />
    </div>
  )
}