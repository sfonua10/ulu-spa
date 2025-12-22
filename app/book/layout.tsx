import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your luxury head spa appointment at ULU Head Spa in Pleasant Grove, Utah. Easy online scheduling for scalp treatments, massages, and wellness services.",
  alternates: {
    canonical: "https://www.uluspas.com/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
