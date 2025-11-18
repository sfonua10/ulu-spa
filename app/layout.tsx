import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatWidgetController from "./components/ui/ChatWidgetController";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "ULU Head Spa - Transform Your Gathering Into Pure Bliss",
  description: "Exclusive group experience designed for connection, relaxation, and shared moments of presence. Our ULU Group Room accommodates up to 4 guests in one tranquil space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical video assets for immediate playback */}
        <link
          rel="preload"
          as="video"
          href="/videos/ulu-facial-site-optimized.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="video"
          href="/videos/ulu-facial-site-mobile.mp4"
          type="video/mp4"
        />
      </head>
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${playfairDisplay.variable} ${dancingScript.variable} antialiased`}
      >
        {/* MangoMint Online Booking Script */}
        <Script
          id="mangomint-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.Mangomint = window.Mangomint || {}; window.Mangomint.CompanyId = 904811;`
          }}
        />
        <Script
          src="https://booking.mangomint.com/app.js"
          strategy="afterInteractive"
          id="mangomint-booking-script"
          async
        />
        <ChatWidgetController />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
