import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import EventForm from "@/components/forms/EventForm";
import UntilDate from "@/components/ui/UntilDate";
import {
  img,
  eventTypes,
  upcomingEvents,
  upcomingEventsIntro,
  type ScheduledEvent,
} from "@/lib/site";

// Dates are plain YYYY-MM-DD; parse at noon UTC so the month/day/weekday
// never shift across a timezone boundary.
function dateParts(ymd: string) {
  const d = new Date(`${ymd}T12:00:00Z`);
  const fmt = (o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", { ...o, timeZone: "UTC" }).format(d);
  return {
    month: fmt({ month: "short" }),
    day: fmt({ day: "numeric" }),
    weekday: fmt({ weekday: "long" }),
    monthYear: fmt({ month: "long", year: "numeric" }),
  };
}

// Groups the (date-sorted) events under month headings like "October 2026".
function byMonth(events: ScheduledEvent[]) {
  const groups: { label: string; events: ScheduledEvent[] }[] = [];
  for (const e of events) {
    const label = dateParts(e.date).monthYear;
    const last = groups[groups.length - 1];
    if (last?.label === label) last.events.push(e);
    else groups.push({ label, events: [e] });
  }
  return groups;
}

export const metadata: Metadata = {
  title: "Events & Parties",
  description:
    "Host birthdays, corporate team nights, leagues, bachelor/bachelorette parties and holiday gatherings at Chip Shots in Henderson, NV. Private bays, catered food and a full bar.",
  alternates: { canonical: "/events" },
};

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events & Parties"
        title="Good Times. Great Company. Unforgettable Gatherings."
        intro={[
          "From private celebrations and corporate outings to trivia nights, cocktail classes and community events, there\u2019s always a reason to get together at Chip Shots.",
          "Enjoy great food, a full bar, indoor golf and a spacious patio — all in one place.",
        ]}
        image={img.bayRoomWide}
      />

      {/* ============================================== UPCOMING ===== */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Upcoming events at Chip Shots</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              More than just golf!
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {upcomingEventsIntro}
            </p>
          </div>
        </Reveal>
        {byMonth(upcomingEvents).map((group) => (
          <UntilDate
            key={group.label}
            until={group.events[group.events.length - 1].date}
          >
            <div className="mt-12">
              <h3 className="eyebrow text-gold">{group.label}</h3>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {group.events.map((e) => {
                  const { month, day, weekday } = dateParts(e.date);
                  return (
                    <UntilDate key={e.date + e.title} until={e.date}>
                      <li className="flex gap-5 rounded-3xl border border-gold/35 bg-cream-2 p-6">
                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-green-deep text-cream">
                          <span className="text-[0.65rem] uppercase tracking-widest text-gold">
                            {month}
                          </span>
                          <span className="font-display text-2xl leading-none">
                            {day}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-display text-xl text-green-deep">
                            {e.title}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-gold">
                            {weekday} · {e.time}
                          </p>
                          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
                            {e.desc}
                          </p>
                          {e.signup && (
                            <div className="mt-4">
                              <ButtonLink
                                href={e.signup}
                                external
                                variant="green"
                                size="md"
                                withArrow
                              >
                                {e.signupLabel ?? "Sign up"}
                              </ButtonLink>
                            </div>
                          )}
                        </div>
                      </li>
                    </UntilDate>
                  );
                })}
              </ul>
            </div>
          </UntilDate>
        ))}
      </section>

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
