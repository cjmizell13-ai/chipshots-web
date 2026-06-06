import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BookingProvider from "@/components/BookingProvider";
import { business, hours } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: {
    default:
      "Chip Shots Indoor Golf | Golf Simulators, Burgers & Bar — Henderson, NV",
    template: "%s | Chip Shots Indoor Golf",
  },
  description:
    "Five TrackMan simulator bays, a full bar and a from-scratch kitchen in Henderson, NV. Smash burgers, cold drafts, craft cocktails and 500+ courses. Veteran-owned. Now open.",
  keywords: [
    "indoor golf Henderson",
    "golf simulator Henderson NV",
    "TrackMan Henderson",
    "burgers bar Henderson",
    "Chip Shots Henderson",
    "golf bar restaurant Henderson",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.website,
    siteName: business.name,
    title: "Chip Shots Indoor Golf — Golf • Burgers • Beer",
    description:
      "Five TrackMan bays, a full bar and a from-scratch kitchen in the heart of Henderson, NV.",
    images: [{ url: "/images/hero-bay-coastal.jpg", width: 1200, height: 800, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chip Shots Indoor Golf — Henderson, NV",
    description: "Golf simulators, smash burgers and a full bar. Veteran-owned.",
    images: ["/images/hero-bay-coastal.jpg"],
  },
  alternates: { canonical: business.website },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub", "SportsActivityLocation"],
  name: business.name,
  description:
    "Indoor golf simulators, full bar and from-scratch kitchen in Henderson, NV.",
  url: business.website,
  telephone: business.phone,
  email: business.email,
  servesCuisine: ["American", "Burgers", "Bar food"],
  priceRange: "$$",
  image: `${business.website}/images/hero-bay-coastal.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  sameAs: [business.social.instagram, business.social.facebook],
  openingHoursSpecification: hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.day === "Friday" || h.day === "Saturday" ? "11:00" : "11:00",
    closes:
      h.day === "Friday" || h.day === "Saturday" ? "00:00" : "22:00",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QN5SXFND95"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QN5SXFND95');
          `}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-green-deep"
        >
          Skip to content
        </a>
        <BookingProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </BookingProvider>
      </body>
    </html>
  );
}
