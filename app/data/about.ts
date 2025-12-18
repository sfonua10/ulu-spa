export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePosition?: string;
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
    image: '/images/founders/jobi-niu.webp',
    imagePosition: 'top'
  },
  {
    name: 'Enoch Niu',
    role: 'Co-Founder',
    bio: 'Dedicated to creating transformative experiences that honor cultural heritage and personal wellness.',
    image: '/images/founders/inoke-niu.webp',
    imagePosition: 'top'
  },
  {
    name: 'Grace Niu',
    role: 'Co-Founder',
    bio: 'Committed to helping guests find restoration, clarity, and connection through intentional care.',
    image: '/images/founders/grace-niu.webp',
    imagePosition: 'center'
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
