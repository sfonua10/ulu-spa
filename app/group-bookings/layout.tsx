import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Bookings",
  description:
    "Book group spa experiences at ULU Head Spa. Perfect for bridal parties, corporate events, birthdays, and special occasions. Private room for up to 4 guests.",
  alternates: {
    canonical: "https://www.uluspas.com/group-bookings",
  },
};

export default function GroupBookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
