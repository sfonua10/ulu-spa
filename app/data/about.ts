import { HeartIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Value {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    tiktok: string;
  };
}

export const founders: Founder[] = [
  {
    name: 'Jobi Niu',
    role: 'Co-Founder',
    bio: 'Passionate about bringing Polynesian wellness traditions to modern spa experiences.',
    image: '/images/founders/jobi.jpg'
  },
  {
    name: 'Enoch Niu',
    role: 'Co-Founder',
    bio: 'Dedicated to creating transformative experiences that honor cultural heritage and personal wellness.',
    image: '/images/founders/enoch.jpg'
  },
  {
    name: 'Grace Niu',
    role: 'Co-Founder',
    bio: 'Committed to helping guests find restoration, clarity, and connection through intentional care.',
    image: '/images/founders/grace.jpg'
  }
];

export const values: Value[] = [
  {
    icon: HeartIcon,
    title: 'Restoration',
    description: 'We believe in the power of intentional care to release tension and restore vitality from the scalp to the soul.'
  },
  {
    icon: SparklesIcon,
    title: 'Clarity',
    description: 'Our treatments are designed to clear the mind, bringing focus and mental clarity through specialized scalp therapy.'
  },
  {
    icon: UserGroupIcon,
    title: 'Connection',
    description: 'We honor the Polynesian tradition of wellness, creating meaningful connections between body, mind, and spirit.'
  }
];

export const contactInfo: ContactInfo = {
  address: '597 South Pleasant Grove Blvd. Suite 4, Pleasant Grove, UT 84064',
  phone: '801-528-7368',
  email: 'uluspaofficial@gmail.com',
  hours: 'Monday–Saturday, 10am–8pm',
  social: {
    instagram: '@ulu.spa',
    facebook: '@uluspaofficial',
    twitter: '@uluspaofficial',
    linkedin: '@uluspaofficial',
    tiktok: '@uluspaofficial'
  }
};

export const culturalStory = {
  heading: 'The Meaning of ULU',
  subtitle: 'A Tongan Tradition',
  description: 'In Tongan culture, "ULU" means "head"—not merely as a physical part of the body, but as the seat of wisdom, energy, and identity. Our name reflects our commitment to honoring this sacred space, where clarity begins and vitality flows.',
  philosophy: 'ULU Head Spa is more than a place for relaxation—it\'s a sanctuary for restoration. We combine ancient Polynesian wellness traditions with modern scalp therapy to create transformative experiences that nurture both body and spirit.'
};
