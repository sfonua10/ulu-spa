import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spa-sage': {
          50: '#f6f7f4',
          100: '#eef0e8',
          200: '#dde1d3',
          300: '#c3cab4',
          400: '#a5b091',
          500: '#8a9674',
          600: '#6f7a5a',
          700: '#5a6248',
          800: '#4a503d',
          900: '#3e4435',
        },
        'spa-stone': {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#2c2824',
          900: '#1c1917',
        },
        'spa-gold': {
          50: '#fefdf9',
          100: '#fdfaf0',
          200: '#faf5e0',
          300: '#f5ebc2',
          400: '#eddc8a',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9a7a1a',
          800: '#7d6315',
          900: '#664f12',
        },
        'spa-cream': {
          50: '#FFF8E7',
          100: '#fef6dc',
          200: '#fdeab8',
          300: '#fbda8a',
          400: '#f8c55a',
          500: '#f5b239',
          600: '#e69b1f',
          700: '#bf7f1c',
          800: '#9a651e',
          900: '#7e541d',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 4px 20px -3px rgba(0, 0, 0, 0.1), 0 15px 25px -2px rgba(0, 0, 0, 0.06)',
        'luxury': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'luxury-lg': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'gold': '0 10px 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 20px 40px rgba(212, 175, 55, 0.4)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)'
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
        'cream-gradient': 'linear-gradient(180deg, #ffffff 0%, #FFF8E7 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        'hero-pattern': 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 15px)'
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'script': ['var(--font-dancing)', 'cursive'],
        'body': ['var(--font-montserrat)', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config