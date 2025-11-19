import {
  SparklesIcon,
  HeartIcon,
  StarIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export const services = [
  // HEAD & SCALP MASSAGE (4 services)
  {
    id: 1,
    icon: SparklesIcon,
    name: 'Island Breeze',
    shortDesc: 'Aromatherapy Scalp Massage',
    fullDesc: 'A refreshing 30-minute aromatherapy scalp massage featuring scalp detox, cleanse, halo rinse, and moisturizing conditioner to restore balance and promote relaxation.',
    duration: '30 min',
    price: 70,
    imageUrl: '/images/services/island-breeze.JPG',
    benefits: ['Stress Relief', 'Quick Relaxation', 'Scalp Health'],
    includes: [
      'Aromatherapy Scalp Massage',
      'Scalp Detox',
      'Scalp Cleanse and Massage',
      'Halo rinse with light décolleté',
      'Moisturizing Conditioner',
      'No Blow dry included',
      'A Farewell beverage'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 2,
    icon: SparklesIcon,
    name: 'The Ocean Ritual',
    shortDesc: 'Comprehensive head and scalp treatment',
    fullDesc: 'A luxurious 60-minute comprehensive head and scalp treatment including aromatherapy, scalp exfoliation, décolleté massage, deep moisturizing mask, hot oil hand massage, and light blow dry for complete relaxation.',
    duration: '60 min',
    price: 130,
    imageUrl: '/images/services/the-ocean-ritual.JPG',
    benefits: ['Deep Relaxation', 'Scalp Health', 'Stress Relief'],
    includes: [
      'Aromatherapy',
      'Scalp exfoliation',
      'Décolleté massage',
      'Deep moisturizing mask',
      'Hot oil hand massage',
      'Light blow dry'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 3,
    icon: SparklesIcon,
    name: 'Tropical Indulge',
    shortDesc: 'Luxurious extended scalp experience',
    fullDesc: 'An indulgent 75-minute premium scalp experience featuring warm towel welcome, red light therapy, scalp ritual, steam therapy, hand massage, and snack for ultimate rejuvenation.',
    duration: '75 min',
    price: 170,
    imageUrl: '/images/services/tropical-indulge.jpg',
    benefits: ['Luxury Experience', 'Deep Relaxation', 'Scalp Rejuvenation'],
    includes: [
      'Warm towel welcome',
      'Red light therapy',
      'Scalp ritual',
      'Steam therapy',
      'Hand massage',
      'Snack'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 4,
    icon: SparklesIcon,
    name: 'Royal Escape',
    shortDesc: 'Ultimate premium scalp massage experience',
    fullDesc: 'Our signature 90-minute royal treatment offering the ultimate in scalp massage luxury. Premium treatment with extended rituals including hot oil foot massage and farewell snack.',
    duration: '90 min',
    price: 210,
    imageUrl: '/images/services/royal-escape.png',
    benefits: ['Ultimate Relaxation', 'Premium Experience', 'Complete Wellness'],
    includes: [
      'Full royal treatment',
      'Premium aromatherapy',
      'Extended scalp rituals',
      'Hot oil foot massage',
      'Farewell snack'
    ],
    popular: true,
    category: 'head-scalp'
  },

  // SCRATCH THERAPY (4 services)
  {
    id: 5,
    icon: HeartIcon,
    name: 'Island Drift',
    shortDesc: 'Gentle rhythmic scratch patterns',
    fullDesc: 'A relaxing 30-minute scratch therapy session featuring gentle rhythmic scratch patterns focused on back and shoulders with optional oil infusion (+$10) for enhanced comfort and stress relief.',
    duration: '30 min',
    price: 70,
    imageUrl: '/images/services/scratch-therapy.png',
    benefits: ['Stress Relief', 'Comfort', 'Relaxation'],
    includes: [
      'Gentle rhythmic scratch patterns',
      'Back and shoulder focus',
      'Optional oil infusion (+$10)'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 6,
    icon: HeartIcon,
    name: 'Heavenly Glide',
    shortDesc: 'Full-body sensory restoration',
    fullDesc: 'A comprehensive 60-minute full-body sensory restoration experience using soft fan brushes and scratch tools with optional Polynesian oil (+$15) for ultimate therapeutic touch.',
    duration: '60 min',
    price: 130,
    imageUrl: '/images/services/scalp-claw.png',
    benefits: ['Deep Relaxation', 'Sensory Restoration', 'Therapeutic Touch'],
    includes: [
      'Full-body treatment',
      'Soft fan brushes & scratch tools',
      'Sensory restoration',
      'Optional Polynesian oil (+$15)'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 7,
    icon: HeartIcon,
    name: 'Pure Unwind',
    shortDesc: 'Extended signature scratching',
    fullDesc: 'A 75-minute extended signature scratching experience with hand and arm ritual extension and optional oil infusion (+$15) for ultimate relaxation and stress relief.',
    duration: '75 min',
    price: 170,
    imageUrl: '/images/services/scratch-therapy-claw2.png',
    benefits: ['Ultimate Relaxation', 'Extended Therapy', 'Stress Relief'],
    includes: [
      'Extended signature scratching',
      'Hand and arm ritual extension',
      'Deep relaxation',
      'Optional oil infusion (+$15)'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 8,
    icon: HeartIcon,
    name: 'ULU Trace',
    shortDesc: 'Immersive full-body ritual',
    fullDesc: 'Our signature 90-minute immersive full-body scratch therapy ritual including Tongan brush technique and skin drumming, with optional oil (+$20) for the ultimate therapeutic experience.',
    duration: '90 min',
    price: 210,
    imageUrl: '/images/services/scalp-massage.png',
    benefits: ['Premium Experience', 'Immersive Ritual', 'Ultimate Relaxation'],
    includes: [
      'Immersive full-body ritual',
      'Tongan brush technique',
      'Skin drumming',
      'Optional oil (+$20)'
    ],
    popular: false,
    category: 'scratch-therapy'
  },

  // FACIAL SERVICES (4 services)
  {
    id: 9,
    icon: StarIcon,
    name: 'Glow & Go Express',
    shortDesc: 'Quick refreshing facial treatment',
    fullDesc: 'A fast-paced 30-minute facial designed for busy schedules featuring double cleanse, exfoliation, enzyme mask, and cooling globes ritual while delivering maximum glow.',
    duration: '30 min',
    price: 65,
    imageUrl: '/images/services/glow-go-express.jpg',
    benefits: ['Quick Refresh', 'Skin Glow', 'Time Efficient'],
    includes: [
      'Double cleanse',
      'Exfoliation',
      'Enzyme mask',
      'Cooling globes ritual'
    ],
    popular: false,
    category: 'facial'
  },
  {
    id: 10,
    icon: StarIcon,
    name: 'Island Renewal',
    shortDesc: 'Most popular facial',
    fullDesc: 'Our most popular 60-minute facial combining customized exfoliation with deep hydration and choice of scalp or scratch therapy for complete skin renewal and rejuvenation.',
    duration: '60 min',
    price: 130,
    imageUrl: '/images/services/island-renewal.jpg',
    benefits: ['Skin Renewal', 'Deep Cleansing', 'Most Popular'],
    includes: [
      'Customized exfoliation',
      'Deep hydration',
      'Scalp or scratch therapy',
      'Full facial treatment'
    ],
    popular: true,
    category: 'facial'
  },
  {
    id: 11,
    icon: StarIcon,
    name: 'Island Escape Ritual',
    shortDesc: 'Advanced anti-aging treatment',
    fullDesc: 'A 75-minute luxury facial ritual featuring advanced anti-aging exfoliant, professional extractions, high-frequency treatment, and LED light therapy for complete skin transformation.',
    duration: '75 min',
    price: 165,
    imageUrl: '/images/services/island-escape-ritual.png',
    benefits: ['Anti-Aging', 'Advanced Treatment', 'Skin Transformation'],
    includes: [
      'Anti-aging exfoliant',
      'Professional extractions',
      'High-frequency treatment',
      'LED light therapy'
    ],
    popular: false,
    category: 'facial'
  },
  {
    id: 12,
    icon: StarIcon,
    name: 'ULU Paradise Renewal',
    shortDesc: 'Signature luxury facial',
    fullDesc: 'Our signature 90-minute luxury facial experience featuring Cell Science Anti-Aging Masque, LED therapy, and combined scalp and scratch treatment for ultimate skin care and renewal.',
    duration: '90 min',
    price: 195,
    imageUrl: '/images/services/facial-2.png',
    benefits: ['Ultimate Skin Care', 'Signature Treatment', 'Complete Renewal'],
    includes: [
      'Cell Science Anti-Aging Masque',
      'LED light therapy',
      'Combined scalp treatment',
      'Combined scratch treatment',
      'Complete relaxation'
    ],
    popular: false,
    category: 'facial'
  },

  // IV THERAPY (6 services)
  {
    id: 13,
    icon: SparklesIcon,
    name: 'ULU Glow – Beauty & Radiance',
    shortDesc: 'Beauty-focused IV drip',
    fullDesc: 'Specialized 45-minute IV therapy designed to enhance beauty and promote radiant, healthy skin from within. Beauty-focused drip with biotin, glutathione, magnesium, and zinc for skin and hair rejuvenation.',
    duration: '45 min',
    price: 195,
    imageUrl: '/images/services/Beaty Drip IV DRIP for website.png',
    benefits: ['Skin Radiance', 'Beauty Enhancement', 'Hair Health'],
    includes: [
      'Biotin',
      'Glutathione',
      'Magnesium',
      'Zinc',
      'Professional monitoring'
    ],
    popular: true,
    category: 'iv-therapy'
  },
  {
    id: 14,
    icon: SparklesIcon,
    name: 'Balance Restore',
    shortDesc: 'Energy and mood-boosting infusion',
    fullDesc: 'Comprehensive 45-minute IV therapy to restore balance and promote overall wellness. Energy and mood-boosting infusion with B12, B Complex, calcium, and magnesium for vitality.',
    duration: '45 min',
    price: 189,
    imageUrl: '/images/services/model.jpg',
    benefits: ['Energy Boost', 'Mood Enhancement', 'Wellness Balance'],
    includes: [
      'Vitamin B12',
      'B Complex vitamins',
      'Calcium',
      'Magnesium',
      'Professional care'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 15,
    icon: SparklesIcon,
    name: 'ULU Athlete Peak Performance',
    shortDesc: 'Performance-enhancement drip',
    fullDesc: 'Specialized 45-minute IV therapy designed to enhance athletic performance, reduce muscle soreness, and boost energy for active lifestyles and peak performance.',
    duration: '45 min',
    price: 195,
    imageUrl: '/images/services/scalp-massage-2.png',
    benefits: ['Performance Enhancement', 'Muscle Recovery', 'Energy Boost'],
    includes: [
      'Performance-enhancement drip',
      'Muscle soreness reduction',
      'Energy boost',
      'Recovery support'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 16,
    icon: SparklesIcon,
    name: 'Bounce Back to You',
    shortDesc: 'Postpartum recovery formulation',
    fullDesc: 'Comprehensive 45-minute IV therapy designed for postpartum recovery, addressing fatigue, hair loss, and cognitive effects to help you bounce back and feel rejuvenated.',
    duration: '45 min',
    price: 209,
    imageUrl: '/images/services/facial-30min.png',
    benefits: ['Postpartum Recovery', 'Energy Restoration', 'Hair Health'],
    includes: [
      'Postpartum recovery formulation',
      'Fatigue relief',
      'Hair loss support',
      'Cognitive support'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 17,
    icon: SparklesIcon,
    name: 'Reset Ritual',
    shortDesc: 'Headache and nausea relief',
    fullDesc: 'A complete 45-minute system reset through specialized IV therapy featuring B12, B Complex, Vitamin C, Toradol, and Zofran to relieve headaches and nausea while restoring and revitalizing your body.',
    duration: '45 min',
    price: 185,
    imageUrl: '/images/services/facial-60min.png',
    benefits: ['Headache Relief', 'Nausea Relief', 'System Reset'],
    includes: [
      'Vitamin B12',
      'B Complex vitamins',
      'Vitamin C',
      'Toradol',
      'Zofran'
    ],
    popular: false,
    category: 'iv-therapy'
  },
  {
    id: 18,
    icon: SparklesIcon,
    name: 'ULU Shield',
    shortDesc: 'Immune-boosting infusion',
    fullDesc: 'Protective 45-minute IV therapy designed to boost and support your immune system with B12, B complex, Vitamin C, magnesium, and zinc for optimal health and wellness.',
    duration: '45 min',
    price: 189,
    imageUrl: '/images/services/facial-90mins.png',
    benefits: ['Immune Support', 'Health Protection', 'Wellness Boost'],
    includes: [
      'Vitamin B12',
      'B Complex vitamins',
      'Vitamin C',
      'Magnesium',
      'Zinc'
    ],
    popular: false,
    category: 'iv-therapy'
  },

  // ADD-ON SERVICES (10 services)
  {
    id: 19,
    icon: CheckIcon,
    name: '30-min Facial',
    shortDesc: 'Facial Add-On',
    fullDesc: 'A quick 30-minute facial service featuring double cleanse, massage, enzyme mask, and cooling globes that can be added to any treatment or enjoyed as a standalone option.',
    duration: '30 min',
    price: 65,
    imageUrl: '/images/services/Facial Picture (1).png',
    benefits: ['Quick Refresh', 'Add-on Service', 'Skin Care'],
    includes: [
      'Double cleanse',
      'Facial massage',
      'Enzyme mask',
      'Cooling globes'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 20,
    icon: CheckIcon,
    name: 'Hot Stones Enhancement',
    shortDesc: 'Heated volcanic stone placement',
    fullDesc: 'Add 15 minutes of soothing heated volcanic stone placement to enhance any massage treatment with deep muscle penetration and tension relief through therapeutic heat.',
    duration: '15 min',
    price: 30,
    imageUrl: '/images/services/scalp-massage.jpg',
    benefits: ['Deep Relaxation', 'Muscle Penetration', 'Tension Relief'],
    includes: [
      'Heated volcanic stones',
      'Therapeutic heat',
      'Deep muscle penetration'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 21,
    icon: CheckIcon,
    name: 'Scratch Therapy Add-on',
    shortDesc: 'Gentle rhythmic scratch patterns',
    fullDesc: 'Add 15 minutes of specialized scratch therapy featuring gentle rhythmic scratch patterns on back and shoulders to any service for enhanced relaxation and stress relief.',
    duration: '15 min',
    price: 35,
    imageUrl: '/images/services/scalp-90.png',
    benefits: ['Stress Relief', 'Therapeutic Touch', 'Enhanced Relaxation'],
    includes: [
      'Gentle rhythmic scratch patterns',
      'Back and shoulder focus',
      'Relaxation enhancement'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 22,
    icon: CheckIcon,
    name: 'Beard Treatment',
    shortDesc: 'Professional beard care service',
    fullDesc: 'Specialized 15-20 minute beard treatment and grooming service featuring exfoliating scrub, steam therapy, shampoo, conditioner, oil, and balm application for professional beard care.',
    duration: '15-20 min',
    price: 30,
    imageUrl: '/images/services/beard-treatment.png',
    benefits: ['Beard Care', 'Professional Grooming', 'Specialized Treatment'],
    includes: [
      'Exfoliating scrub',
      'Steam therapy',
      'Shampoo & conditioner',
      'Oil & balm application'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 23,
    icon: CheckIcon,
    name: 'Hair Play',
    shortDesc: 'Creative styling and scalp stimulation',
    fullDesc: 'A relaxing 15-minute hair styling and play session featuring creative styling and therapeutic scalp stimulation through hair manipulation for stress relief.',
    duration: '15 min',
    price: 20,
    imageUrl: '/images/services/hair-play.png',
    benefits: ['Hair Care', 'Scalp Stimulation', 'Relaxation'],
    includes: [
      'Creative styling',
      'Scalp stimulation',
      'Hair manipulation therapy'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 24,
    icon: CheckIcon,
    name: 'Foot Massage',
    shortDesc: 'Therapeutic foot massage',
    fullDesc: 'Add a relaxing 15-minute foot massage featuring exfoliating scrub, hot oil treatment, and specialized massage technique with gentle pressure-point focus to enhance any service.',
    duration: '15 min',
    price: 30,
    imageUrl: '/images/services/foot-massage.png',
    benefits: ['Foot Care', 'Circulation', 'Pressure Point Relief'],
    includes: [
      'Exfoliating scrub',
      'Hot oil treatment',
      'Specialized massage',
      'Pressure point therapy'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 25,
    icon: CheckIcon,
    name: 'Hand Massage',
    shortDesc: 'Therapeutic hand massage',
    fullDesc: 'Add a relaxing 15-minute hand massage focused on palms, fingers, and forearms with gentle pressure-point technique to enhance any service.',
    duration: '15 min',
    price: 30,
    imageUrl: '/images/services/hand-massage.png',
    benefits: ['Hand Care', 'Circulation', 'Pressure Point Relief'],
    includes: [
      'Palm and finger focus',
      'Forearm massage',
      'Gentle pressure-point technique'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 26,
    icon: CheckIcon,
    name: 'Scalp Massage',
    shortDesc: 'Reflexology-based tension relief',
    fullDesc: 'A quick scalp massage add-on featuring reflexology-based tension relief focusing on head pressure points for any service.',
    duration: '10 min',
    price: 20,
    imageUrl: '/images/services/tropical-serentity.png',
    benefits: ['Scalp Health', 'Tension Relief', 'Quick Relaxation'],
    includes: [
      'Reflexology-based massage',
      'Head pressure points',
      'Tension relief'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 27,
    icon: CheckIcon,
    name: 'Full Blow Out & Style',
    shortDesc: 'Professional styling service',
    fullDesc: 'Professional blow out and styling service featuring round-brush styling with hot tools for voluminous results and a complete look.',
    duration: '30-45 min',
    price: 35,
    imageUrl: '/images/services/Facial for 30 minute package (1).png',
    benefits: ['Professional Styling', 'Voluminous Results', 'Complete Look'],
    includes: [
      'Professional round-brush blow out',
      'Hot tools styling',
      'Voluminous results'
    ],
    popular: false,
    category: 'add-on'
  },
  {
    id: 28,
    icon: CheckIcon,
    name: 'Hair Extension Removal',
    shortDesc: 'Professional extension removal',
    fullDesc: 'Safe and professional hair extension removal service featuring gentle detangling, scalp conditioning, and post-care for healthy hair.',
    duration: '30 min',
    price: 35,
    imageUrl: '/images/services/hair-extension-removal.png',
    benefits: ['Professional Removal', 'Hair Health', 'Safe Process'],
    includes: [
      'Professional removal',
      'Gentle detangling',
      'Scalp conditioning',
      'Post-care'
    ],
    popular: false,
    category: 'add-on'
  }
]
