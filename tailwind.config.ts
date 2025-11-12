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
    },
  },
  plugins: [],
} satisfies Config