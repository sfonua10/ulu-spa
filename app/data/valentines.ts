import { HandRaisedIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/outline'

export const valentineEnhancements = [
  {
    id: 'deep-relaxation',
    name: 'Deep Relaxation',
    tagline: 'Surrender to blissful warmth as skilled hands release every ounce of tension',
    icon: HandRaisedIcon,
    enhancements: ['Hand Massage', 'Foot Spa'],
    value: 40
  },
  {
    id: 'head-tension-relief',
    name: 'Head & Tension Relief',
    tagline: 'Let waves of calm wash over you as pressure melts from head to shoulders',
    icon: SparklesIcon,
    enhancements: ['Extended Scalp Ritual', 'Heavenly Hairplay'],
    value: 40
  },
  {
    id: 'grounding-sensory',
    name: 'Grounding & Sensory',
    tagline: 'Feel grounded and renewed with warming stones and soothing sensory touches',
    icon: FireIcon,
    enhancements: ['Hot Stone Enhancement', 'Scratch Therapy'],
    value: 35
  }
]

export const valentineExtras = [
  {
    title: 'Chocolate & Sparkling Moment',
    description: 'Savor a decadent chocolate treat paired with a refreshing sparkling beverage during your visit.'
  },
  {
    title: 'Rose Petal Accents',
    description: 'Experience a calm, romantic atmosphere with delicate rose petal touches throughout your treatment.'
  }
]

export const valentineRecommendedServiceIds = [2, 4, 30, 31]

export const valentinePromo = {
  startDate: '2026-02-07',
  endDate: '2026-02-14',
  maxValue: 40,
  headline: "Gift Yourself the Glow",
  subheadline: "Book any 60+ minute service Feb 7-14 and receive a complimentary enhancement — up to $40 value"
}
