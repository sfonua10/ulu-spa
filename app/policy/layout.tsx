import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Policy",
  description:
    "ULU Head Spa booking policies including 48-hour cancellation policy, payment methods, group booking requirements, and arrival guidelines.",
  alternates: {
    canonical: "https://www.uluspas.com/policy",
  },
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
