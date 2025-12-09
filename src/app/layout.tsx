import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "SV Water Solutions - Pure Life, Pure Water",
    template: "%s | SV Water Solutions"
  },
  description: "Leading provider of water purification solutions. RO purifiers, UV systems, water softeners, spare parts, and comprehensive maintenance services. Trusted by 10,000+ customers.",
  keywords: ["water purifier", "RO system", "UV purifier", "water softener", "AMC", "spare parts", "water solutions", "water treatment", "reverse osmosis", "alkaline water"],
  authors: [{ name: "SV Water Solutions" }],
  creator: "SV Water Solutions",
  publisher: "SV Water Solutions",
  metadataBase: new URL('https://svwatersolutions.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svwatersolutions.com",
    title: "SV Water Solutions - Pure Life, Pure Water",
    description: "Leading provider of water purification solutions. Trusted by 10,000+ customers.",
    siteName: "SV Water Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SV Water Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Water Solutions - Pure Life, Pure Water",
    description: "Leading provider of water purification solutions. Trusted by 10,000+ customers.",
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
      </head>
      <body className="antialiased">
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