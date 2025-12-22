import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Join ULU Head Spa membership for exclusive savings on scalp treatments, head massages, and spa services. Monthly plans starting at $109 with flexible options.",
  alternates: {
    canonical: "https://www.uluspas.com/memberships",
  },
};

export default function MembershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
