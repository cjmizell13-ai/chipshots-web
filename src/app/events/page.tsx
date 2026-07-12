import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import EventForm from "@/components/forms/EventForm";
import { business, img, eventTypes, trivia } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events & Parties",
  description:
    "Host birthdays, corporate team nights, leagues, bachelor/bachelorette parties and holiday gatherings at Chip Shots in Henderson, NV. Private bays, catered food and a full bar.",
  alternates: { canonical: "/events" },
};

// Weekly Trivia Night as a recurring schema.org Event — feeds Google's
// "events near me" / rich results for "trivia night Henderson" searches.
const triviaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `Trivia Night at ${business.shortName}`,
  description: `Free live trivia every ${trivia.day} at ${trivia.time}, hosted by RobotBrain. No cover, no sign-up — full kitchen and bar. 1st place wins a $50 gift card, runner-up $25.`,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  isAccessibleForFree: true,
  eventSchedule: {
    "@type": "Schedule",
    byDay: "https://schema.org/Tuesday",
    startTime: "18:00",
    scheduleTimezone: "America/Los_Angeles",
    repeatFrequency: "P1W",
  },
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
  image: `${business.website}/opengraph-image`,
  url: `${business.website}/events`,
};

export default function Events() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(triviaJsonLd) }}
      />
      <PageHero
        eyebrow="Events & Parties"
        title="The easiest yes on the group-chat."
        intro="Private bays, food from the kitchen and a full bar — under one roof and out of the heat. Tell us what you're celebrating and we'll handle the rest."
        image={img.bayRoomWide}
      />

      {/* ============================================== EVENT TYPES ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">What we host</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Built for groups of any size.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((t) => (
            <StaggerItem
              key={t.title}
              className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-deep text-gold">
                <Icon.users className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-5 text-xl text-green-deep">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-line bg-cream-2 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="font-display text-2xl text-green-deep">
                Planning a company event?
              </h3>
              <p className="mt-2 max-w-xl text-muted">
                See how Chip Shots works for corporate team building, client
                outings and holiday parties — plus corporate memberships for
                regulars.
              </p>
            </div>
            <ButtonLink href="/corporate-events" variant="green" size="lg" withArrow>
              Corporate events
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* ============================================== TRIVIA NIGHT ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold-soft">{trivia.eyebrow}</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  {trivia.title}
                </h2>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-gold">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Icon.clock className="h-5 w-5" />
                    {trivia.day} · {trivia.time}
                  </span>
                  <span className="text-cream/50">{trivia.host}</span>
                </div>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  {trivia.intro}
                </p>
                <p className="mt-6 text-xs uppercase tracking-wider text-cream/50">
                  {trivia.note}
                </p>
                <p className="mt-5 text-sm text-cream/60">
                  First time?{" "}
                  <Link
                    href="/blog/trivia-night-henderson-tuesdays"
                    className="link-underline pb-0.5 text-gold hover:text-gold-soft"
                  >
                    Here&rsquo;s how trivia night works
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-gold/25 bg-green-deep/60 p-8 shadow-[var(--shadow-soft)] sm:p-10">
                <p className="eyebrow text-center text-cream/60">— The Prizes —</p>
                <Stagger className="mt-7 grid gap-4">
                  {trivia.prizes.map((p) => (
                    <StaggerItem
                      key={p.place}
                      className="flex items-baseline gap-4"
                    >
                      <span className="font-display w-16 shrink-0 text-2xl text-gold">
                        {p.place}
                      </span>
                      <span className="font-medium text-cream">{p.label}</span>
                      <span className="mx-3 flex-1 border-b border-dotted border-gold/40" />
                      <span className="shrink-0 text-cream/90">{p.reward}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================== FORM ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-gold">Request an event</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Let's plan it.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted">
                Send us the basics and our events team will follow up with
                availability and a quote — usually within a business day.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <Image
                  src={img.trackmanActivities}
                  alt="A group enjoying a TrackMan activity together"
                  width={700}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <EventForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
