import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ULU Head Spa's story, our Polynesian heritage, and our founders. Discover how we bring traditional wellness practices to Pleasant Grove, Utah.",
  alternates: {
    canonical: "https://www.uluspas.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
