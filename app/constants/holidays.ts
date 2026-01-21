/**
 * Holiday Theme Configuration
 *
 * Centralized configuration for holiday-themed pages.
 * Adding a new holiday requires only adding a config entry here and creating the page.
 */

export type HolidayId = 'default' | 'valentines' | 'stpatricks' | 'july4th' | 'easter' | 'christmas';

export interface HolidayColorPalette {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  };
  secondary: {
    300: string;
    400: string;
    500: string;
    600: string;
  };
  text: {
    light: string;
    dark: string;
    accent: string;
  };
  gradients: {
    button: string;
    buttonHover: string;
    badge: string;
    shimmer: string;
    background: string;
  };
  effects: {
    glowColor: string;
    logoFilter?: string;
  };
  logo?: {
    light: string;
    mid: string;
    dark: string;
  };
}

export interface HolidayConfig {
  id: HolidayId;
  slug: string;
  name: string;
  colors: HolidayColorPalette;
}

/**
 * Holiday configurations with full color palettes
 */
export const HOLIDAYS: Record<HolidayId, HolidayConfig> = {
  // Default spa gold theme
  default: {
    id: 'default',
    slug: '',
    name: 'Default',
    colors: {
      primary: {
        50: '#fefdf9',
        100: '#fdfaf0',
        200: '#faf5e0',
        300: '#f5ebc2',
        400: '#eddc8a',
        500: '#D4AF37',
        600: '#B8941F',
        700: '#9a7a1a',
      },
      secondary: {
        300: '#f5ebc2',
        400: '#eddc8a',
        500: '#D4AF37',
        600: '#B8941F',
      },
      text: {
        light: '#f5ebc2',
        dark: '#9a7a1a',
        accent: '#D4AF37',
      },
      gradients: {
        button: 'linear-gradient(to right, #D4AF37, #B8941F)',
        buttonHover: 'linear-gradient(to right, #B8941F, #9a7a1a)',
        badge: 'linear-gradient(to right, #D4AF37, #B8941F)',
        shimmer: 'linear-gradient(90deg, #f5ebc2 0%, #f5ebc2 30%, #FFFFFF 50%, #f5ebc2 70%, #f5ebc2 100%)',
        background: 'linear-gradient(to bottom, #fefdf9, #faf5e0)',
      },
      effects: {
        glowColor: 'rgba(212, 175, 55, 0.3)',
        logoFilter: 'none',
      },
      logo: {
        light: '#FFF8D5',
        mid: '#DCC96E',
        dark: '#AC760D',
      },
    },
  },

  // Valentine's Day - Soft luxury pink
  valentines: {
    id: 'valentines',
    slug: 'valentines',
    name: "Valentine's Day",
    colors: {
      primary: {
        50: '#fdf8f9',
        100: '#fcf1f4',
        200: '#f9e3ea',
        300: '#f4ccd8',
        400: '#ecaabf',
        500: '#e085a3',
        600: '#d66b8f',
        700: '#c44d75',
      },
      secondary: {
        300: '#f4ccd8',
        400: '#f687a1',
        500: '#ec4874',
        600: '#d63d66',
      },
      text: {
        light: '#f4ccd8',
        dark: '#c44d75',
        accent: '#f687a1',
      },
      gradients: {
        button: 'linear-gradient(to right, #ecaabf, #f687a1)',
        buttonHover: 'linear-gradient(to right, #e085a3, #ec4874)',
        badge: 'linear-gradient(to right, #ec4874, #e085a3)',
        shimmer: 'linear-gradient(90deg, #f4ccd8 0%, #f4ccd8 30%, #FFFFFF 50%, #f4ccd8 70%, #f4ccd8 100%)',
        background: 'linear-gradient(to bottom, #fdf8f9, #f9e3ea)',
      },
      effects: {
        glowColor: 'rgba(244, 114, 182, 0.2)',
        logoFilter: 'sepia(20%) saturate(150%) hue-rotate(-10deg) brightness(1.05)',
      },
      logo: {
        light: '#fcf1f4',
        mid: '#f687a1',
        dark: '#c44d75',
      },
    },
  },

  // St. Patrick's Day - Irish green
  stpatricks: {
    id: 'stpatricks',
    slug: 'st-patricks',
    name: "St. Patrick's Day",
    colors: {
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
      },
      secondary: {
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
      },
      text: {
        light: '#86efac',
        dark: '#15803d',
        accent: '#22c55e',
      },
      gradients: {
        button: 'linear-gradient(to right, #4ade80, #22c55e)',
        buttonHover: 'linear-gradient(to right, #22c55e, #16a34a)',
        badge: 'linear-gradient(to right, #22c55e, #16a34a)',
        shimmer: 'linear-gradient(90deg, #86efac 0%, #86efac 30%, #FFFFFF 50%, #86efac 70%, #86efac 100%)',
        background: 'linear-gradient(to bottom, #f0fdf4, #bbf7d0)',
      },
      effects: {
        glowColor: 'rgba(34, 197, 94, 0.3)',
        logoFilter: 'sepia(20%) saturate(200%) hue-rotate(80deg) brightness(1.05)',
      },
    },
  },

  // 4th of July - Patriotic red/blue
  july4th: {
    id: 'july4th',
    slug: 'fourth-of-july',
    name: '4th of July',
    colors: {
      primary: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
      },
      secondary: {
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
      },
      text: {
        light: '#fca5a5',
        dark: '#b91c1c',
        accent: '#ef4444',
      },
      gradients: {
        button: 'linear-gradient(to right, #ef4444, #3b82f6)',
        buttonHover: 'linear-gradient(to right, #dc2626, #2563eb)',
        badge: 'linear-gradient(to right, #ef4444, #3b82f6)',
        shimmer: 'linear-gradient(90deg, #fca5a5 0%, #FFFFFF 25%, #93c5fd 50%, #FFFFFF 75%, #fca5a5 100%)',
        background: 'linear-gradient(to bottom, #fef2f2, #eff6ff)',
      },
      effects: {
        glowColor: 'rgba(239, 68, 68, 0.3)',
        logoFilter: 'sepia(20%) saturate(200%) hue-rotate(-30deg) brightness(1.05)',
      },
    },
  },

  // Easter - Soft pastel purple/pink
  easter: {
    id: 'easter',
    slug: 'easter',
    name: 'Easter',
    colors: {
      primary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
      },
      secondary: {
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
      },
      text: {
        light: '#d8b4fe',
        dark: '#7e22ce',
        accent: '#a855f7',
      },
      gradients: {
        button: 'linear-gradient(to right, #c084fc, #a855f7)',
        buttonHover: 'linear-gradient(to right, #a855f7, #9333ea)',
        badge: 'linear-gradient(to right, #a855f7, #9333ea)',
        shimmer: 'linear-gradient(90deg, #d8b4fe 0%, #d8b4fe 30%, #FFFFFF 50%, #d8b4fe 70%, #d8b4fe 100%)',
        background: 'linear-gradient(to bottom, #faf5ff, #e9d5ff)',
      },
      effects: {
        glowColor: 'rgba(168, 85, 247, 0.3)',
        logoFilter: 'sepia(20%) saturate(150%) hue-rotate(230deg) brightness(1.05)',
      },
    },
  },

  // Christmas - Red and green
  christmas: {
    id: 'christmas',
    slug: 'christmas',
    name: 'Christmas',
    colors: {
      primary: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#dc2626',
        600: '#b91c1c',
        700: '#991b1b',
      },
      secondary: {
        300: '#86efac',
        400: '#4ade80',
        500: '#16a34a',
        600: '#15803d',
      },
      text: {
        light: '#fca5a5',
        dark: '#991b1b',
        accent: '#dc2626',
      },
      gradients: {
        button: 'linear-gradient(to right, #dc2626, #b91c1c)',
        buttonHover: 'linear-gradient(to right, #b91c1c, #991b1b)',
        badge: 'linear-gradient(to right, #dc2626, #16a34a)',
        shimmer: 'linear-gradient(90deg, #fca5a5 0%, #FFFFFF 25%, #86efac 50%, #FFFFFF 75%, #fca5a5 100%)',
        background: 'linear-gradient(to bottom, #fef2f2, #f0fdf4)',
      },
      effects: {
        glowColor: 'rgba(220, 38, 38, 0.3)',
        logoFilter: 'sepia(20%) saturate(200%) hue-rotate(-30deg) brightness(1.05)',
      },
    },
  },
};

/**
 * Get holiday config by URL slug
 * @param slug - The URL path segment (e.g., 'valentines', 'st-patricks')
 * @returns The holiday config or null if not found
 */
export function getHolidayBySlug(slug: string): HolidayConfig | null {
  const holiday = Object.values(HOLIDAYS).find(h => h.slug === slug);
  return holiday || null;
}

/**
 * Get holiday config by ID
 * @param id - The holiday ID
 * @returns The holiday config or default if not found
 */
export function getHolidayById(id: HolidayId): HolidayConfig {
  return HOLIDAYS[id] || HOLIDAYS.default;
}

/**
 * Extract holiday slug from pathname
 * @param pathname - The URL pathname (e.g., '/valentines', '/st-patricks/offers')
 * @returns The extracted slug or empty string
 */
export function extractHolidaySlug(pathname: string): string {
  // Get the first path segment after the leading slash
  const segments = pathname.split('/').filter(Boolean);
  return segments[0] || '';
}
