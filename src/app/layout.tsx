import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipSignup from "@/components/forms/VipSignup";
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
      "Chip Shots Indoor Golf Club | Golf Simulators, Food & Bar — Henderson, NV",
    template: "%s | Chip Shots Indoor Golf Club",
  },
  description:
    "Five TrackMan simulator bays, a full bar and a full kitchen in Henderson, NV. Burgers, sandwiches, wings, shareables, cold drafts, signature cocktails and 500+ courses. Veteran-owned. Now open.",
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
    title: "Chip Shots Indoor Golf Club — Golf • Food • Drinks",
    description:
      "Five TrackMan bays, a full bar and a full kitchen in the heart of Henderson, NV.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chip Shots Indoor Golf Club — Henderson, NV",
    description: "Golf simulators, a full kitchen and a full bar. Veteran-owned.",
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub", "SportsActivityLocation"],
  name: business.name,
  description:
    "Indoor golf simulators, full bar and full kitchen in Henderson, NV.",
  url: business.website,
  telephone: business.phone,
  email: business.email,
  servesCuisine: ["American", "Burgers", "Bar food"],
  priceRange: "$$",
  acceptsReservations: true,
  hasMenu: `${business.website}/food-drink`,
  image: `${business.website}/opengraph-image`,
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
  sameAs: [business.social.instagram, business.social.facebook, business.social.tiktok],
  openingHoursSpecification: hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: "11:00",
    closes: h.day === "Friday" || h.day === "Saturday" ? "23:59" : "22:00",
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
        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1704567684030290');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1704567684030290&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
          <VipSignup />
          <Footer />
          <BackToTop />
        </BookingProvider>
      </body>
    </html>
  );
}
