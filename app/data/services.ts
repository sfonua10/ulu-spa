import {
  SparklesIcon,
  HeartIcon,
  StarIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export const services = [
  // ULTIMATE ULU EXPERIENCES (3 bundles)
  {
    id: 29,
    icon: SparklesIcon,
    name: 'Golden Reset',
    tagline: 'Glow from the inside out in just one hour',
    shortDesc: 'Glow from the inside out with this signature 60-minute ULU Spa experience.',
    fullDesc: 'A refined 60-minute ritual combining therapeutic scalp care with soothing scratch therapy to release tension and restore balance. Complete your experience with a custom facial tailored to your needs — radiance-boosting, calming, or wellness-focused.',
    duration: '1 hr',
    price: 285,
    imageUrl: '/images/services/royal-escape.png',
    focusArea: 'center center',
    benefits: ['Scalp therapy', 'Scratch therapy', 'Custom facial choice'],
    highlights: [
      'Aromatherapy scalp therapy',
      'Scratch therapy for stress relief',
      'Custom facial of your choice'
    ],
    includes: [
      'Warm towel welcome',
      'Aromatherapy scalp therapy',
      'Scalp detox and exfoliation',
      'Scratch therapy for stress relief',
      'Nourishing conditioner',
      'Custom facial',
      'Hot towel wrap with cooling eye pads',
      'Farewell beverage'
    ],
    perfectFor: [
      'Busy professionals',
      'Mid-week resets',
      'First-time guests',
      'Birthday gifts'
    ],
    popular: false,
    category: 'signature-experience'
  },
  {
    id: 30,
    icon: SparklesIcon,
    name: 'Island Glow',
    tagline: '90 minutes of restoration, radiance, and calm',
    shortDesc: 'A deeply indulgent 90-minute ritual for full-body relaxation.',
    fullDesc: 'Immerse yourself in a deeply indulgent 90-minute ritual designed to relax the nervous system while restoring scalp health and skin vitality. This elevated experience blends advanced scalp therapy, extended scratch therapy, and a rejuvenating foot spa to melt away tension from head to toe. Complete your journey with a signature facial customized to your needs.',
    duration: '1 hr 30 min',
    price: 375,
    imageUrl: '/images/services/island-renewal.jpg',
    focusArea: 'center center',
    benefits: ['Extended scratch therapy', 'Foot spa ritual', 'Signature facial'],
    highlights: [
      'Extended scratch therapy',
      'Hot oil foot spa ritual',
      'Signature facial tailored to you'
    ],
    includes: [
      'Warm towel welcome',
      'Aromatherapy & red light therapy',
      'Scalp detox and exfoliation',
      'Scalp cleanse and relaxing massage',
      'Extended scratch therapy',
      'Hot oil foot spa ritual',
      'Nourishing conditioner',
      'Signature facial',
      'Hot towel wrap with cooling eye pads',
      'Light blow-dry finish',
      'Farewell beverage & light snack'
    ],
    perfectFor: [
      'Birthdays & celebrations',
      'Stress relief with visible results',
      'Scalp therapy + facial in one visit',
      'Luxury in 90 minutes'
    ],
    popular: false,
    category: 'signature-experience'
  },
  {
    id: 31,
    icon: SparklesIcon,
    name: 'ULU Paradise Retreat',
    tagline: 'A two-hour island journey into deep relaxation',
    shortDesc: 'Pure island luxury — our 2-hour ultimate escape.',
    fullDesc: 'Step into pure island luxury with our 2-hour Paradise Retreat — a beautifully curated ritual designed to calm the nervous system, restore balance, and leave you feeling renewed from head to toe. This immersive retreat blends advanced scalp therapy, extended scratch therapy, a soothing foot spa, and the grounding warmth of hot stone massage, completed with a custom facial tailored to your skin.',
    duration: '2 hr',
    price: 445,
    imageUrl: '/images/services/couple.jpg',
    focusArea: 'center center',
    benefits: ['Hot stone massage', 'Full ritual experience', 'Custom facial'],
    highlights: [
      'Extended scratch therapy',
      'Hot stone massage',
      'Custom facial for your skin'
    ],
    includes: [
      'Warm towel welcome',
      'Aromatherapy & red light therapy',
      'Scalp detox and exfoliation',
      'Scalp cleanse and extended massage',
      'Halo rinse with décolleté massage',
      'Extended scratch therapy',
      'Hot oil foot spa ritual',
      'Hot stone massage',
      'Nourishing conditioner',
      'Custom facial',
      'Hot towel wrap with cooling eye pads',
      'Light blow-dry finish',
      'Farewell beverage & light snack'
    ],
    perfectFor: [
      'Anniversaries & romantic celebrations',
      'Birthdays & special occasions',
      'Deep self-care without a half-day commitment',
      'Scalp therapy + facial together'
    ],
    popular: false,
    category: 'signature-experience'
  },
  {
    id: 32,
    icon: SparklesIcon,
    name: 'ULU Ultimate Escape',
    tagline: 'Our most comprehensive and luxurious journey',
    shortDesc: 'Our most comprehensive and luxurious 3.5-hour journey.',
    fullDesc: 'The pinnacle of relaxation at ULU Spa. This 3.5-hour immersive ritual combines complete scalp therapy, full-body scratch therapy, restorative touch, hot stone enhancement, and advanced skincare in one deeply indulgent experience. Every detail is intentional, allowing your nervous system to fully unwind while your body, skin, and scalp are renewed. This is not just a service — it\'s a transformational escape.',
    duration: '3 hr 30 min',
    price: 545,
    imageUrl: '/images/services/model.jpg',
    focusArea: 'center 20%',
    benefits: ['Full-body therapy', 'Hot stone enhancement', 'Complete renewal'],
    highlights: [
      'Full-body scratch therapy',
      'Hot stone enhancement',
      'Personalized facial'
    ],
    includes: [
      'Warm towel welcome',
      'Aromatherapy & red light therapy',
      'Full scalp detox and exfoliation',
      'Deep scalp cleanse and extended massage',
      'Halo rinse with décolleté massage',
      'Deep moisturizing hair mask with steam therapy',
      'Full-body scratch therapy',
      'Hot stone therapy',
      'Hot oil foot spa massage',
      'Exfoliating scrub & hot oil hand massage',
      'Nourishing conditioner',
      'Personalized facial',
      'Hot towel wrap with cooling eye pads',
      'Light blow-dry finish',
      'Farewell beverage & light snack'
    ],
    perfectFor: [
      'Anniversaries & milestone celebrations',
      'Once-a-year indulgence',
      'Promotions & life transitions',
      'Total body renewal'
    ],
    popular: false,
    category: 'signature-experience'
  },

  // HEAD & SCALP MASSAGE (4 services)
  {
    id: 1,
    icon: SparklesIcon,
    name: 'Island Breeze',
    tagline: 'Perfect first visit. 30 minutes of pure calm.',
    shortDesc: 'The perfect introduction to our signature scalp therapy',
    fullDesc: 'Drift into calm with Island Breeze, our signature 30-minute scalp therapy designed to refresh your mind and restore your sense of balance. Warm aromatherapy oils meet skilled fingertips as tension melts away from your scalp, neck, and shoulders. A gentle detox and cleanse revitalizes your hair, while a soothing halo rinse with light décolleté massage completes the experience. In just half an hour, you\'ll leave feeling lighter, clearer, and ready to take on whatever comes next.',
    duration: '30 min',
    price: 70,
    imageUrl: '/images/services/island-breeze.JPG',
    focusArea: 'center 50%',
    benefits: ['Stress Relief', 'Quick Relaxation', 'Scalp Health'],
    highlights: [
      'Aromatherapy scalp massage',
      'Scalp detox & cleanse',
      'Halo rinse with décolleté massage'
    ],
    includes: [
      'Aromatherapy scalp massage',
      'Scalp detox',
      'Scalp cleanse and massage',
      'Halo rinse with light décolleté massage',
      'Moisturizing conditioner',
      'Farewell beverage'
    ],
    perfectFor: [
      'Busy professionals',
      'First-time guests',
      'Mid-week stress relief',
      'Maintenance between treatments'
    ],
    popular: true,
    salesRank: 3,
    isEntryLevel: true,
    category: 'head-scalp'
  },
  {
    id: 2,
    icon: SparklesIcon,
    name: 'The Ocean Ritual',
    tagline: 'Our #1 best seller. 60 minutes of pure relaxation.',
    shortDesc: 'Our most-loved experience. Deep relaxation meets scalp renewal.',
    fullDesc: 'A calming, restorative 60-minute experience designed to gently release tension, hydrate the scalp and hair, and restore balance through soothing touch and intentional care. The Ocean Ritual delivers relaxation with lasting results.',
    duration: '60 min',
    price: 145,
    imageUrl: '/images/services/the-ocean-ritual.JPG',
    focusArea: 'center 25%',
    benefits: ['Deep Relaxation', 'Scalp Health', 'Stress Relief'],
    highlights: [
      'Extended aromatherapy massage',
      'Deep conditioning mask',
      'Hot oil hand massage'
    ],
    includes: [
      'Extended aromatherapy scalp massage',
      'Scalp detox and exfoliation',
      'Scalp cleanse and massage',
      'Halo rinse',
      'Warm deep conditioning mask',
      'Hot towel wrap',
      'Décolleté massage',
      'Exfoliating scrub & hot oil hand massage',
      'Nourishing conditioner',
      'Light blow-dry finish',
      'Farewell beverage'
    ],
    perfectFor: [
      'Monthly self-care',
      'Stress relief & mental reset',
      'Thoughtful gifts',
      'Relaxation with lasting results'
    ],
    popular: true,
    salesRank: 1,
    category: 'head-scalp'
  },
  {
    id: 3,
    icon: SparklesIcon,
    name: 'Tropical Indulge',
    tagline: 'From scalp to soul — our most luxurious scalp ritual',
    shortDesc: 'Luxurious extended scalp experience',
    fullDesc: 'Our most indulgent ritual—a head to hand rejuvenation that melts away stress and restores shine.',
    duration: '75 min',
    price: 180,
    imageUrl: '/images/services/tropical-indulge.jpg',
    focusArea: 'center 20%',
    benefits: ['Luxury Experience', 'Deep Relaxation', 'Scalp Rejuvenation'],
    highlights: [
      'Aromatherapy & red light therapy',
      'Steam therapy hair mask',
      'Hot oil hand massage'
    ],
    includes: [
      'Warm towel welcome',
      'Aromatherapy & red light therapy',
      'Scalp detox and exfoliation',
      'Scalp cleanse and massage',
      'Halo rinse with décolleté massage',
      'Deep moisturizing hair mask with steam therapy',
      'Exfoliating scrub & hot oil hand massage',
      'Nourishing conditioner',
      'Hot towel wrap with cooling eye pads',
      'Relaxation in massage chairs',
      'Light blow-dry finish',
      'Farewell beverage & light snack'
    ],
    perfectFor: [
      'Anniversaries & romantic celebrations',
      'Birthday splurges',
      '"Just because" self-care',
      'The most luxurious scalp experience'
    ],
    popular: false,
    category: 'head-scalp'
  },
  {
    id: 4,
    icon: SparklesIcon,
    name: 'Royal Escape',
    tagline: 'A complete head-to-toe reset designed to melt stress',
    shortDesc: 'Ultimate premium scalp massage experience',
    fullDesc: 'Indulge in 90 minutes of pure relaxation. This experience combines a deep scalp cleanse, nourishing massage, and soothing scratch therapy with a rejuvenating foot spa ritual. It\'s the perfect head-to-toe escape designed to melt away stress, restore balance, and leave you glowing with refreshed energy.',
    duration: '90 min',
    price: 210,
    imageUrl: '/images/services/royal-escape.png',
    focusArea: 'center center',
    benefits: ['Ultimate Relaxation', 'Premium Experience', 'Complete Wellness'],
    highlights: [
      'Aromatherapy & red light therapy',
      'Hot stone therapy',
      'Hot oil foot spa massage'
    ],
    includes: [
      'Aromatherapy & red light therapy',
      'Scalp detox and exfoliation',
      'Scalp cleanse and relaxing massage',
      'Halo rinse with décolleté massage',
      'Deep moisturizing hair mask with steam therapy',
      'Hot oil hand massage',
      'Hot oil foot spa massage',
      'Hot stone therapy',
      'Nourishing conditioner',
      'Farewell beverage & light snack'
    ],
    perfectFor: [
      'Anniversaries & birthdays',
      'Stress relief or burnout recovery',
      'First-time guests wanting the full experience',
      'Celebrating milestones'
    ],
    popular: true,
    salesRank: 2,
    category: 'head-scalp'
  },

  // SCRATCH THERAPY (4 services)
  {
    id: 5,
    icon: HeartIcon,
    name: 'Island Drift',
    tagline: 'A quick but powerful reset — in just 30 minutes',
    shortDesc: 'Gentle rhythmic scratch patterns',
    fullDesc: 'Escape into tranquility with our Island Drift Scratch Therapy, a focused 30-minute session designed to relax, reset, and reawaken your senses. Gentle scratch therapy flows across the back, scalp, arms, and legs in soothing wave-like rhythms inspired by island traditions. Feather-light brushes and sensory tools add depth to the experience, helping your body release tension and your mind drift into calm. In just 30 minutes, you\'ll leave feeling lighter, calmer, and ready to take on the rest of your day.',
    duration: '30 min',
    price: 70,
    imageUrl: '/images/services/scratch-therapy.png',
    focusArea: 'center 50%',
    benefits: ['Stress Relief', 'Comfort', 'Relaxation'],
    highlights: [
      'Gentle rhythmic scratch patterns',
      'Back and shoulder focus',
      'Optional oil infusion (+$10)'
    ],
    includes: [
      'Gentle rhythmic scratch patterns',
      'Back and shoulder focus',
      'Optional oil infusion (+$10)'
    ],
    perfectFor: [
      'A quick but powerful reset during a busy day',
      'Relieving stress, tension, or restlessness',
      'Experiencing the benefits of scratch therapy for the first time',
      'Anyone seeking a sensory-rich escape without committing to a full session'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 6,
    icon: HeartIcon,
    name: 'Heavenly Glide',
    tagline: 'A 60-minute sensory journey for full-body calm',
    shortDesc: 'Full-body sensory restoration',
    fullDesc: 'Float into a state of pure serenity with our Heavenly Glide Scratch Therapy, a 60-minute sensory journey designed to calm your nervous system and melt away stress. Gentle scratch rhythms flow seamlessly across your scalp, back, arms, and legs—mimicking the soothing pulse of ocean waves. Soft brushes, feather touches, and delicate scratch tools elevate the experience, creating a full-body escape that feels both grounding and ethereal. Immerse yourself in a blissful hour where every stroke is designed to restore balance, recharge your energy, and leave you feeling renewed from head to toe.',
    duration: '60 min',
    price: 145,
    imageUrl: '/images/services/scalp-claw.png',
    focusArea: 'center %',
    benefits: ['Deep Relaxation', 'Sensory Restoration', 'Therapeutic Touch'],
    highlights: [
      'Full-body sensory therapy',
      'Soft fan brushes & scratch tools',
      'Optional Polynesian oil (+$15)'
    ],
    includes: [
      'Full-body treatment',
      'Soft fan brushes & scratch tools',
      'Sensory restoration',
      'Optional Polynesian oil (+$15)'
    ],
    perfectFor: [
      'Deep stress relief and nervous system reset',
      'Those seeking more than a quick refresh, but not a full extended session',
      'Enhancing sleep, focus, and overall relaxation',
      'Anyone looking to indulge in a longer, more immersive sensory therapy'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 7,
    icon: HeartIcon,
    name: 'Pure Unwind',
    shortDesc: 'Extended signature scratching',
    tagline: 'Step into serenity — this is relaxation redefined.',
    fullDesc: 'Experience the ultimate reset with Pure Unwind, ULU Spa\'s signature 75-minute scratch therapy. Gentle, rhythmic scratching techniques paired with calming touch patterns melt away stress, ease tension, and quiet the mind. This deeply soothing ritual is designed to restore balance, release restlessness, and leave you feeling lighter, calmer, and completely refreshed.',
    duration: '75 min',
    price: 180,
    imageUrl: '/images/services/scratch-therapy-claw2.png',
    focusArea: 'center 45%',
    benefits: ['Ultimate Relaxation', 'Extended Therapy', 'Stress Relief'],
    highlights: [
      'Extended signature scratching',
      'Hand and arm ritual extension',
      'Optional oil infusion (+$15)'
    ],
    includes: [
      'Extended signature scratching',
      'Hand and arm ritual extension',
      'Deep relaxation',
      'Optional oil infusion (+$15)'
    ],
    perfectFor: [
      'Stress relief and anxiety reduction',
      'Easing restlessness and improving sleep quality',
      'Calming overstimulated minds (great for busy professionals & students)',
      'Athletes needing deep recovery after training or competition',
      'Anyone seeking a one-of-a-kind relaxation experience'
    ],
    popular: false,
    category: 'scratch-therapy'
  },
  {
    id: 8,
    icon: HeartIcon,
    name: 'ULU Trace',
    shortDesc: 'Immersive full-body ritual',
    tagline: 'Let the rhythmic pulse of the islands carry you away. The ULU Trace is more than a treatment—it\'s a ritual of release, renewal, and reconnection.',
    fullDesc: 'Step into the ultimate sensory escape with our ULU Trace Scratch Therapy, a deeply immersive 90-minute ritual inspired by Polynesian tradition and the rhythm of the sea. This full-body journey combines slow-wave scratch techniques, feather-light brushes, rhythmic tapping, and gentle skin drumming to awaken your senses and restore inner balance. From scalp to toes, each movement is designed to mimic ocean waves—relaxing the mind, soothing the body, and reconnecting your energy flow.',
    duration: '90 min',
    price: 210,
    imageUrl: '/images/services/scalp-massage.png',
    focusArea: 'center 40%',
    benefits: ['Premium Experience', 'Immersive Ritual', 'Ultimate Relaxation'],
    includes: [
      'Full-body scratch therapy: scalp, back, arms, legs & feet',
      'Slow-wave ocean-inspired technique for deep nervous system reset',
      'Tongan "Malu" brush technique to stimulate circulation and energy flow',
      'Rhythmic skin tapping & scratch sticks for grounding & renewal',
      'Feather touch tools & fan brushes to elevate relaxation',
      'Complimentary steam & hot towel wrap for ultimate comfort',
      'Optional: Island Rain Mist Finish – refresh & uplift',
      'Optional: Polynesian Oil Infusion (+$20)'
    ],
    perfectFor: [
      'Couples or individuals seeking a luxurious escape',
      'Stress relief, anxiety reduction, or nervous system reset',
      'Those celebrating special occasions (anniversaries, birthdays, date nights)',
      'Anyone craving a transformational sensory experience unlike anything else'
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
    fullDesc: 'A quick but effective facial designed to deeply cleanse, hydrate, and revive dull or tired skin. Perfect for a radiant boost when you\'re short on time.',
    duration: '30 min',
    price: 65,
    imageUrl: '/images/services/glow-go-express.jpg',
    focusArea: 'center top',
    benefits: ['Quick Refresh', 'Skin Glow', 'Time Efficient'],
    includes: [
      'Gentle double cleanse',
      'Targeted exfoliation for instant radiance',
      'Customized hydration mask',
      'Facial massage',
      'Finishing serum & moisturizer'
    ],
    perfectFor: [
      'A quick refresh during a busy day',
      'Lunchtime rejuvenation',
      'Pre-event pick-me-up'
    ],
    popular: false,
    category: 'facial'
  },
  {
    id: 10,
    icon: StarIcon,
    name: 'Island Renewal',
    shortDesc: 'Most popular facial',
    fullDesc: 'ULU Spa\'s signature rejuvenating facial. Blending tropical relaxation with targeted skincare, this facial deeply hydrates and restores radiance for a fresh, island-inspired glow.',
    duration: '60 min',
    price: 135,
    imageUrl: '/images/services/island-renewal.jpg',
    focusArea: 'center 50%',
    benefits: ['Deep Hydration', 'Skin Renewal', 'Natural Glow'],
    highlights: [
      'Customized hydrating mask',
      'Décolleté & scalp massage',
      'Finishing serum & SPF'
    ],
    includes: [
      'Double cleanse',
      'Exfoliation',
      'Customized hydrating mask',
      'Décolleté, scalp, neck & shoulder massage',
      'Finishing serum, moisturizer & SPF'
    ],
    popular: true,
    category: 'facial'
  },
  {
    id: 11,
    icon: StarIcon,
    name: 'Island Escape Ritual',
    shortDesc: 'Advanced anti-aging treatment',
    tagline: 'The perfect balance of results and indulgence — a tropical escape your skin will thank you for.',
    fullDesc: 'Transport your senses with our signature 75-minute ritual designed to restore your skin\'s natural radiance while melting away stress.',
    duration: '75 min',
    price: 165,
    imageUrl: '/images/services/island-escape-ritual.png',
    focusArea: 'center 20%',
    benefits: ['Anti-Aging', 'Advanced Treatment', 'Skin Transformation'],
    includes: [
      'Deep double cleanse & gentle exfoliation',
      'Targeted extractions & customized treatment for your skin\'s needs',
      'Hydro jelly or glow-boosting mask for instant luminosity',
      'Extended facial & décolleté massage with lymphatic drainage to contour and relieve tension',
      'Soothing scalp massage for ultimate relaxation',
      'Finishing skincare for long-lasting hydration and protection'
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
    price: 205,
    imageUrl: '/images/services/facial-2.png',
    focusArea: 'center 60%',
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
    imageUrl: '/images/services/model.jpg',
    focusArea: 'center 20%',
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
    focusArea: 'center 20%',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center 30%',
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
    focusArea: 'center center',
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
    focusArea: 'center center',
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
    focusArea: 'center 30%',
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
