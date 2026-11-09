import type { Metadata } from "next";
import Script from "next/script";
import { Bodoni_Moda, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipSignup from "@/components/forms/VipSignup";
import BackToTop from "@/components/BackToTop";
import BookingProvider from "@/components/BookingProvider";
import BookingTracker from "@/components/BookingTracker";
import { business, liveDelivery, orderOnlineLive, schedule } from "@/lib/site";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: {
    default:
      "Chip Shots | Restaurant, Bar & Indoor Golf — Henderson, NV",
    template: "%s | Chip Shots Henderson",
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
    title: "Chip Shots — Golf • Food • Drinks",
    description:
      "Five TrackMan bays, a full bar and a full kitchen in the heart of Henderson, NV.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chip Shots — Henderson, NV",
    description: "Golf simulators, a full kitchen and a full bar. Veteran-owned.",
  },
  alternates: { canonical: "/" },
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/** 24h hour number to a schema.org "HH:MM" time. */
const hourLabel = (h: number) => `${String(h).padStart(2, "0")}:00`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub", "SportsActivityLocation"],
  name: business.name,
  alternateName: "Chip Shots Indoor Golf & Bar",
  description:
    "Indoor golf simulators, full bar and full kitchen in Henderson, NV.",
  url: business.website,
  telephone: business.phone,
  email: business.email,
  servesCuisine: ["American", "Burgers", "Bar food"],
  priceRange: "$$",
  acceptsReservations: true,
  hasMenu: `${business.website}/food-drink`,
  // Lets Google show an "Order online" action on the listing / rich results.
  ...(orderOnlineLive && {
    potentialAction: {
      "@type": "OrderAction",
      target: [business.orderOnline, ...liveDelivery.map((d) => d.href)].map(
        (urlTemplate) => ({
          "@type": "EntryPoint",
          urlTemplate,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        }),
      ),
      deliveryMethod: [
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
        ...(liveDelivery.length
          ? ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"]
          : []),
      ],
    },
  }),
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
  // Built from `schedule`, which is indexed by JS getDay() — 0 = Sunday. The
  // times have to come from the data: weekends open an hour earlier than the
  // weekdays, and a hardcoded pair would publish the wrong hours to Google.
  openingHoursSpecification: schedule.map((s, i) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAY_NAMES[i],
    opens: hourLabel(s.open),
    closes: hourLabel(s.close % 24),
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodoni.variable} ${lexend.variable} h-full antialiased`}
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
            // Referral-spam sessions (bot traffic posing as referrals) are
            // tagged traffic_type=internal so GA4's "Internal Traffic" data
            // filter drops them. The flag is kept for the whole session because
            // only the landing page carries the referrer.
            var spamRef = /clickbaitpays\\.me/i;
            var isSpam = false;
            try {
              isSpam = spamRef.test(document.referrer) || sessionStorage.getItem('cs_spam') === '1';
              if (isSpam) sessionStorage.setItem('cs_spam', '1');
            } catch (e) { isSpam = spamRef.test(document.referrer); }
            gtag('config', 'G-QN5SXFND95', isSpam ? { traffic_type: 'internal' } : {});
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            // Referral-spam sessions never load the pixel, so bots stay out of
            // Meta's website-visitor audiences and conversion counts. A no-op
            // fbq keeps the site's tracking calls safe. Checked here as well as
            // in gtag-init so it doesn't depend on script order.
            var fbSpam = false;
            try {
              fbSpam = /clickbaitpays\\.me/i.test(document.referrer) || sessionStorage.getItem('cs_spam') === '1';
            } catch (e) { fbSpam = /clickbaitpays\\.me/i.test(document.referrer); }
            if (fbSpam) {
              window.fbq = function(){};
            } else {
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
            }
          `}
        </Script>
        {/* Metricool tracker */}
        <Script id="metricool-tracker" strategy="afterInteractive">
          {`
            function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}
            loadScript(function(){beTracker.t({hash:"43f7e9e3fc1710397bc64b31beb1f2c9"})});
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
          <BookingTracker />
        </BookingProvider>
      </body>
    </html>
  );
}
