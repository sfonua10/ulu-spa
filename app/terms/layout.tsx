import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ULU Head Spa terms of service. Review our booking terms, cancellation policy, membership agreements, and service conditions.",
  alternates: {
    canonical: "https://www.uluspas.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
