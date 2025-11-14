import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | ULU Head Spa',
  description: 'Find answers to common questions about ULU Spa services, treatments, booking policies, and our specialty Scratch Therapy.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
