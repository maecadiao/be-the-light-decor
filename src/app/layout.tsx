import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/layout/FloatingCallButton";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bethelightdecor.com"),
  title: {
    default: "Be The Light Decor | Outdoor Lighting in Southeast Louisiana",
    template: "%s | Be The Light Decor",
  },
  description:
    "Professional landscape lighting, holiday displays, and event lighting serving Southeast Louisiana. Local. Trusted. Family Owned.",
  keywords: [
    "outdoor lighting",
    "landscape lighting",
    "holiday lighting",
    "event lighting",
    "Louisiana",
    "Covington",
    "Mandeville",
    "New Orleans",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bethelightdecor.com",
    siteName: "Be The Light Decor",
    title: "Be The Light Decor | Outdoor Lighting in Southeast Louisiana",
    description:
      "Professional landscape lighting, holiday displays, and event lighting serving Southeast Louisiana. Local. Trusted. Family Owned.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Be The Light Decor — Professional Outdoor Lighting in Southeast Louisiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Be The Light Decor | Outdoor Lighting in Southeast Louisiana",
    description:
      "Professional landscape lighting, holiday displays, and event lighting serving Southeast Louisiana.",
    images: ["/images/hero-bg.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bethelightdecor.com/#business",
      "name": "Be The Light Decor",
      "description":
        "Professional outdoor lighting company serving Southeast Louisiana. Landscape lighting, holiday displays, permanent lighting, event lighting, and commercial lighting.",
      "url": "https://bethelightdecor.com",
      "telephone": "+15043896555",
      "email": "admin@bethelightdecor.com",
      "foundingDate": "2015",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Covington",
        "addressRegion": "LA",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.4754,
        "longitude": -90.1007,
      },
      "areaServed": [
        "Covington, LA", "Mandeville, LA", "Madisonville, LA",
        "Slidell, LA", "New Orleans, LA", "Metairie, LA",
        "Kenner, LA", "Baton Rouge, LA", "Hammond, LA",
        "Lacombe, LA", "Biloxi, MS", "Gulfport, MS",
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00",
        },
      ],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Outdoor Lighting Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscape Lighting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Holiday Lighting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Permanent Lighting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Lighting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Lighting" } },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "109",
        "bestRating": "5",
      },
      "image": "https://bethelightdecor.com/images/hero-bg.jpg",
    },
    {
      "@type": "WebSite",
      "@id": "https://bethelightdecor.com/#website",
      "url": "https://bethelightdecor.com",
      "name": "Be The Light Decor",
      "publisher": { "@id": "https://bethelightdecor.com/#business" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1a1a1a] font-body antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67fd69739b7e540175575d33"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
