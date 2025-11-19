export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  description: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'grace',
    name: 'Grace',
    title: 'Master Spa Therapist',
    specialty: 'Scalp Therapy & Relaxation',
    description: 'With exceptional attention to detail and a gentle touch, Grace creates transformative spa experiences that leave clients feeling renewed and rejuvenated.',
  },
  {
    id: 'jobi',
    name: 'Jobi',
    title: 'Senior Spa Specialist',
    specialty: 'Hair Growth Treatment',
    description: 'Known for her warm presence and expert technique, Jobi specializes in therapeutic treatments that promote healthy hair growth and deep relaxation.',
    image: '/images/team/jobi-niu.JPG',
  },
  {
    id: 'guiliana',
    name: 'Guiliana',
    title: 'Spa Wellness Expert',
    specialty: 'Stress Relief Sessions',
    description: 'Guiliana brings a holistic approach to spa therapy, combining ancient techniques with modern practices to help clients achieve ultimate relaxation.',
  },
  {
    id: 'enoch',
    name: 'Enoch',
    title: 'Head Spa Technician',
    specialty: 'Scalp Massage Therapy',
    description: 'With precise technique and intuitive care, Enoch delivers exceptional head spa experiences that address both physical and mental wellness.',
    image: '/images/team/inoke-niu.jpg',
  },
];
