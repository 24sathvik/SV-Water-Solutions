import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ScrollToTop from "@/components/ScrollToTop";
import WaterBubbles from "@/components/WaterBubbles";

export const metadata: Metadata = {
  title: {
    default: "SV Water Solutions - Best Water Purifiers in Jangaon, Telangana",
    template: "%s | SV Water Solutions"
  },
  description: "Leading provider of Aquaguard water purifiers & RO systems in Jangaon, Telangana. Trusted by 5,000+ customers. Free installation, AMC plans, spare parts & 24/7 service. Call +91 8297612490",
  keywords: ["water purifier Jangaon", "RO system Telangana", "Aquaguard dealer", "UV purifier", "water softener", "AMC plans", "water purifier service", "best water purifier", "RO repair Jangaon", "water treatment Telangana"],
  authors: [{ name: "SV Water Solutions" }],
  creator: "SV Water Solutions",
  publisher: "SV Water Solutions",
  metadataBase: new URL('https://svwatersolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://svwatersolutions.com",
    title: "SV Water Solutions - Best Water Purifiers in Jangaon, Telangana",
    description: "Leading provider of Aquaguard water purifiers & RO systems. Trusted by 5,000+ customers. Free installation & service.",
    siteName: "SV Water Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SV Water Solutions - Water Purifiers in Jangaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Water Solutions - Best Water Purifiers in Jangaon",
    description: "Leading provider of Aquaguard water purifiers & RO systems. Trusted by 5,000+ customers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SV Water Solutions',
  description: 'Leading provider of Aquaguard water purifiers & RO systems in Jangaon, Telangana',
  url: 'https://svwatersolutions.com',
  telephone: '+91-8297612490',
  email: 'Sathish9110732830@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jangaon',
    addressRegion: 'Telangana',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.12685,
    longitude: 79.13824
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00'
    }
  ],
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '5000'
  },
  sameAs: [
    'https://www.facebook.com/svwatersolutions',
    'https://www.instagram.com/svwatersolutions'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Jangaon" />
        <meta name="geo.position" content="17.12685;79.13824" />
        <meta name="ICBM" content="17.12685, 79.13824" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="4e943672-acce-44e4-b1e1-f86b890d294c"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <WaterBubbles />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        <ScrollToTop />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
