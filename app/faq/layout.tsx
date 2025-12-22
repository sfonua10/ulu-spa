import { Metadata } from 'next';
import { FAQSchema } from '@/app/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about ULU Head Spa services, booking, memberships, and policies. Find answers about our scalp treatments and wellness services.',
  alternates: {
    canonical: 'https://www.uluspas.com/faq',
  },
};

const faqData = [
  {
    question: 'What is ULU Spa and what makes it unique?',
    answer: 'ULU Spa is a Polynesian-inspired luxury head spa and wellness lounge specializing in scalp treatments and rejuvenating rituals. The name represents "head" in Tongan, honoring our cultural heritage while providing premium wellness experiences.',
  },
  {
    question: 'What services do you offer?',
    answer: 'The spa provides head spa treatments, scalp massages, steam therapies, herbal scalp detox, foot baths, decollate massages, and Scratch Therapy. Each service is designed to promote relaxation, rejuvenation, and overall wellness.',
  },
  {
    question: 'Do you use natural or organic products?',
    answer: 'Yes, we prioritize clean, natural, and cruelty-free products including handcrafted options from trusted wellness brands. We carefully select products that align with our commitment to quality and sustainability.',
  },
  {
    question: 'Can I customize my treatment?',
    answer: 'Absolutely! Our therapists consult with clients beforehand to tailor sessions based on individual needs like hydration, tension relief, or scalp cleansing. We believe in personalized care that addresses your specific wellness goals.',
  },
  {
    question: 'How should I prepare for my head spa session?',
    answer: 'Please arrive with dry hair and avoid heavy styling products. If you have had recent chemical treatments, notify our staff so they can adjust care products accordingly to ensure the best results.',
  },
  {
    question: 'Do you accept walk-ins or is it by appointment only?',
    answer: 'ULU Spa is by appointment only to ensure personalized care and minimal wait times. We recommend booking in advance to secure your preferred time slot.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require at least 24 hours notice for cancellations or rescheduling. Cancellations within 24 hours or no-shows may incur fees. We appreciate your understanding as this helps us serve all our clients effectively.',
  },
  {
    question: 'What is Scratch Therapy?',
    answer: 'Scratch Therapy is a soothing, sensory-driven body treatment using gentle to firm scratching motions to relieve stress and activate the parasympathetic nervous system. It creates a deeply relaxing experience that many find profoundly calming.',
  },
  {
    question: 'What are the benefits of Scratch Therapy?',
    answer: 'Scratch Therapy reduces anxiety, tension, insomnia, and stress. Clients often experience ASMR-like tingling sensations and deep relaxation. It is an effective way to decompress and restore balance to both mind and body.',
  },
];

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQSchema faqs={faqData} />
      {children}
    </>
  );
}
