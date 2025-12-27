import Script from "next/script";

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  phone: string;
  email?: string;
  sameAs?: string[];
}

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  phone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  image?: string;
  sameAs?: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function OrganizationSchema({
  name,
  url,
  logo,
  phone,
  email,
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      ...(email && { email }),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({
  name,
  description,
  url,
  phone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  image,
  sameAs = [],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name,
    description,
    url,
    telephone: phone,
    ...(email && { email }),
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    openingHoursSpecification: openingHours.map((hours) => {
      const [days, time] = hours.split(" ");
      const [opens, closes] = time.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split(","),
        opens,
        closes,
      };
    }),
    priceRange,
    ...(image && { image }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  services: {
    name: string;
    description: string;
    price: number;
    duration: string;
    image?: string;
    category: string;
  }[];
  providerName?: string;
  providerUrl?: string;
}

export function ServiceSchema({
  services,
  providerName = "ULU Head Spa",
  providerUrl = "https://www.uluspas.com",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "HealthAndBeautyBusiness",
          name: providerName,
          url: providerUrl,
        },
        offers: {
          "@type": "Offer",
          price: service.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        ...(service.image && {
          image: service.image.startsWith("http")
            ? service.image
            : `${providerUrl}${service.image}`,
        }),
        serviceType: service.category,
      },
    })),
  };

  return (
    <Script
      id="service-list-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
