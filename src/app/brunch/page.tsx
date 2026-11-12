import type { Metadata } from "next";
import Link from "next/link";
import PlateHero from "@/components/ui/PlateHero";
import UntilDate from "@/components/ui/UntilDate";
import { ButtonLink } from "@/components/ui/button";
import { brunch, brunchFaqs, business, img, upcomingEvents } from "@/lib/site";

const shareTitle = "Sunday Prime Rib Brunch at Chip Shots";
const shareDescription = `${brunch.when}. ${brunch.prices}. ${brunch.drinks}.`;
// The carving-station photo, 2400 x 1350.
const shareImage = {
  url: `${business.website}${img.brunchPrimeRib}`,
  width: 2400,
  height: 1350,
  alt: "Prime rib at the brunch carving station at Chip Shots",
};

export const metadata: Metadata = {
  title: "Sunday Prime Rib Brunch in Henderson",
  description:
    "Prime rib brunch buffet at Chip Shots in Henderson, NV on the first and third Sundays, 10 AM to 1 PM. Adults $35, kids 6–12 $17, 5 and under free. Bottomless mimosas and Bloody Marys $15.",
  alternates: { canonical: "/brunch" },
  // What shows when the link is texted or posted. A page that sets openGraph
  // replaces the site-wide card whole, so every field is spelled out here.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    url: `${business.website}/brunch`,
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
};

/** "2026-11-15" to "Sunday, November 15". Built from the parts so the result
 *  never shifts a day with the reader's time zone. */
function longDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** "2026-11-15" to "Nov 15". */
function shortDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function Brunch() {
  // Every dated brunch on the calendar. Each one hides itself once its day
  // has passed (UntilDate), so this list never needs pruning by hand.
  const dates = upcomingEvents.filter((e) => /brunch/i.test(e.title));
  // The first date that takes reservations gets a button at the top of the page,
  // where people landing from an ad or a post actually look.
  const nextRsvp = dates.find((e) => e.signup);

  // Lets Google show the dates as events. Pacific time, 10 AM to 1 PM.
  const jsonLd = dates.map((e) => ({
    "@context": "https://schema.org",
    "@type": "FoodEvent",
    name: `Sunday Prime Rib Brunch at ${business.name}`,
    startDate: `${e.date}T10:00:00-08:00`,
    endDate: `${e.date}T13:00:00-08:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: e.desc,
    image: `${business.website}${img.brunchPrimeRib}`,
    location: {
      "@type": "Place",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: "US",
      },
    },
    organizer: { "@type": "Organization", name: business.name, url: business.website },
    offers: {
      "@type": "Offer",
      price: "35",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: e.signup ?? `${business.website}/brunch`,
    },
  }));

  // The brunch questions below, as FAQPage data for Google and AI search.
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brunchFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <PlateHero
        kicker="Brunch · 1st & 3rd Sundays"
        title="Prime rib brunch."
        accent="Sundays, 10 to 1."
        intro="A brunch buffet with a prime rib carving station, breakfast favorites and more, with the morning games on every screen."
        image={img.brunchPrimeRib}
        alt="Prime rib at the carving station during Sunday brunch at Chip Shots, with a slice being plated"
        actions={
          <>
            {nextRsvp?.signup && (
              <UntilDate until={nextRsvp.date}>
                <ButtonLink href={nextRsvp.signup} external variant="gold" size="lg" withArrow>
                  Reserve for {shortDay(nextRsvp.date)}
                </ButtonLink>
              </UntilDate>
            )}
            <a href="#dates" className="text-cta text-cream">
              All dates <span aria-hidden>↓</span>
            </a>
          </>
        }
        facts={[
          { label: "Buffet", value: brunch.prices },
          { label: "Add", value: brunch.drinks },
          { label: "When", value: brunch.when },
        ]}
      />

      <section id="dates" className="scroll-mt-32 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Next brunch dates
            </h2>
            <p className="mt-6 max-w-md text-ink/75">
              Brunch runs on the first and third Sundays of the month. Walk-ins
              are welcome, and a reservation holds your table.
            </p>
          </div>
          <ul className="border-t border-ink/15">
            {dates.map((e) => (
              <UntilDate key={e.date} until={e.date}>
                <li className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-ink/15 py-6">
                  <div>
                    <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {longDay(e.date)}
                    </p>
                    <p className="mt-1 text-ink/70">{e.time}</p>
                  </div>
                  {e.signup && (
                    <ButtonLink href={e.signup} external variant="green" size="lg" withArrow>
                      Reserve a table
                    </ButtonLink>
                  )}
                </li>
              </UntilDate>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-green-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-3 md:gap-10">
          <div>
            <h3 className="font-display text-2xl font-semibold">Bring the kids</h3>
            <p className="mt-3 text-cream/75">
              Kids 6 to 12 are $17, and kids 5 and under eat free.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">The games are on</h3>
            <p className="mt-3 text-cream/75">
              NFL Sunday Ticket plays on the screens over the bar and on the TV
              in every bay.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">Stay for a round</h3>
            <p className="mt-3 text-cream/75">
              Five TrackMan bays, booked by the hour.{" "}
              <Link
                href="/golf-booking"
                className="text-gold-soft underline underline-offset-4 hover:text-cream"
              >
                See bay times
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <h2 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
          Brunch questions
        </h2>
        <div className="mt-10 divide-y divide-ink/15 border-t border-ink/15">
          {brunchFaqs.map((f) => (
            <div key={f.q} className="py-7">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {f.q}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
