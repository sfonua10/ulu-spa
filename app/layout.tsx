import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatWidgetController from "./components/ui/ChatWidgetController";
import { AnimationProvider } from "./contexts/AnimationContext";
import { OrganizationSchema, LocalBusinessSchema } from "./components/seo/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { COMPANY } from "./constants/config";

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
  metadataBase: new URL("https://www.uluspas.com"),
  title: {
    default: "ULU Head Spa | Luxury Head Spa in Pleasant Grove, Utah",
    template: "%s | ULU Head Spa",
  },
  description:
    "Experience the ultimate relaxation at ULU Head Spa in Pleasant Grove, UT. Premium scalp treatments, head massages, and rejuvenating spa services. Book your appointment today.",
  keywords: [
    "head spa",
    "scalp treatment",
    "head massage",
    "spa Pleasant Grove",
    "Utah spa",
    "luxury spa",
    "scalp massage",
    "relaxation",
    "wellness",
  ],
  authors: [{ name: "ULU Head Spa" }],
  creator: "ULU Head Spa",
  publisher: "ULU Head Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.uluspas.com",
    siteName: "ULU Head Spa",
    title: "ULU Head Spa | Luxury Head Spa in Pleasant Grove, Utah",
    description:
      "Experience the ultimate relaxation at ULU Head Spa. Premium scalp treatments, head massages, and rejuvenating spa services in Pleasant Grove, UT.",
    images: [
      {
        url: "/images/ulu-spa-logo.png",
        width: 1200,
        height: 630,
        alt: "ULU Head Spa - Luxury Head Spa Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@uluspaofficial",
    creator: "@uluspaofficial",
    title: "ULU Head Spa | Luxury Head Spa in Pleasant Grove, Utah",
    description:
      "Experience the ultimate relaxation at ULU Head Spa. Premium scalp treatments, head massages, and rejuvenating spa services.",
    images: ["/images/ulu-spa-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.uluspas.com",
  },
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
        {/* Structured Data - Organization & LocalBusiness */}
        <OrganizationSchema
          name="ULU Head Spa"
          url="https://www.uluspas.com"
          logo="https://www.uluspas.com/images/ulu-spa-logo.png"
          phone="+1-801-528-7368"
          sameAs={[
            "https://www.facebook.com/uluspas",
            "https://www.instagram.com/uluspas",
            "https://twitter.com/uluspaofficial",
            "https://www.tiktok.com/@uluspas",
          ]}
        />
        <LocalBusinessSchema
          name="ULU Head Spa"
          description="Experience the ultimate relaxation at ULU Head Spa. Premium scalp treatments, head massages, and rejuvenating spa services in Pleasant Grove, Utah."
          url="https://www.uluspas.com"
          phone="+1-801-528-7368"
          address={{
            streetAddress: "597 South Pleasant Grove Blvd. Suite 4",
            addressLocality: "Pleasant Grove",
            addressRegion: "UT",
            postalCode: "84062",
            addressCountry: "US",
          }}
          geo={{
            latitude: 40.3641,
            longitude: -111.7385,
          }}
          openingHours={[
            "Monday,Tuesday,Wednesday,Thursday,Friday 09:00-20:00",
            "Saturday,Sunday 10:00-18:00",
          ]}
          priceRange="$$"
          image="https://www.uluspas.com/images/ulu-spa-logo.png"
          sameAs={[
            "https://www.facebook.com/uluspas",
            "https://www.instagram.com/uluspas",
            "https://twitter.com/uluspaofficial",
            "https://www.tiktok.com/@uluspas",
          ]}
        />
        {/* MangoMint Online Booking Script */}
        <Script
          id="mangomint-booking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.Mangomint = window.Mangomint || {};
              window.Mangomint.CompanyId = ${COMPANY.MANGOMINT_ID};
              (function() {
                var s = document.createElement('script');
                s.src = 'https://booking.mangomint.com/app.js';
                document.body.appendChild(s);
              })();
            `
          }}
        />
        {/* Google Analytics */}
        <GoogleAnalytics />
        <AnimationProvider>
          <ChatWidgetController />
          <Header />
          <main>{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
