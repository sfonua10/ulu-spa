import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ULU Head Spa privacy policy. Learn how we collect, use, and protect your personal information when you use our services and website.",
  alternates: {
    canonical: "https://www.uluspas.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
