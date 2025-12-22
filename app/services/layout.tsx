import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our premium head spa services including scalp treatments, scratch therapy, facials, and IV therapy. Experience luxury relaxation at ULU Head Spa in Pleasant Grove, Utah.",
  alternates: {
    canonical: "https://www.uluspas.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
