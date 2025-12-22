import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ULU Head Spa in Pleasant Grove, Utah. Visit us at 597 South Pleasant Grove Blvd. Suite 4, or call (801) 528-7368. Open Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM.",
  alternates: {
    canonical: "https://www.uluspas.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
