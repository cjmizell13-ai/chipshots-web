import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlateHero from "@/components/ui/PlateHero";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import BookButton from "@/components/BookButton";
import EventForm from "@/components/forms/EventForm";
import UntilDate from "@/components/ui/UntilDate";
import {
  business,
  img,
  brunch,
  happyHour,
  trivia,
  eventSpaces,
  eventTypes,
  upcomingEvents,
  upcomingEventsIntro,
  promoActive,
  type ScheduledEvent,
} from "@/lib/site";

// Dates are plain YYYY-MM-DD; parse at noon UTC so the month/day/weekday
// never shift across a timezone boundary.
function dateParts(ymd: string) {
  const d = new Date(`${ymd}T12:00:00Z`);
  const fmt = (o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", { ...o, timeZone: "UTC" }).format(d);
  return {
    day: fmt({ month: "short", day: "numeric" }),
    weekday: fmt({ weekday: "short" }),
    monthYear: fmt({ month: "long", year: "numeric" }),
  };
}

// Groups the (date-sorted) events under month headings like "November 2026".
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
    "What's on at Chip Shots in Henderson, NV: trivia, prime rib brunch, tastings and holiday events. Plus private events from one bay to a full buyout, with food from our kitchen and a full bar.",
  alternates: { canonical: "/events" },
};

// The standing week, so there is always something to point to between the
// dated events. Times come from the same data the other pages use.
const everyWeek: [string, string][] = [
  ["Trivia", `${trivia.day}s · ${trivia.time.replace(/\s*–\s*/, "–")}`],
  ["Happy hour", happyHour.window],
  ["The Night Cap", happyHour.lateWindow.split(" · ").slice(1).join(" · ")],
  ["Prime rib brunch", brunch.when],
  ["College football", "Saturdays"],
  ["NFL Sunday Ticket", "Sundays"],
];

export default function Events() {
  // Past dates are dropped at build time, and each row also hides itself the
  // day after its date, so the list stays current between deploys.
  const months = byMonth(upcomingEvents.filter((e) => promoActive(e.date)));

  return (
    <>
      <PlateHero
        kicker="Events · Public and private"
        title="What's on,"
        accent="and how to host your own."
        intro="Trivia on Tuesdays, prime rib brunch on the first and third Sundays, and a calendar of one-off nights in between. For private events, every booking is quoted to fit your group."
        image={img.clubDining}
        alt="A server taking an order at a full table in the dining room at Chip Shots"
        position="50% 40%"
        actions={
          <>
            <ButtonLink href="#inquire" variant="gold" size="lg" withArrow>
              Plan a private event
            </ButtonLink>
            <a href="#calendar" className="text-cta text-cream">
              The calendar <span aria-hidden>↓</span>
            </a>
          </>
        }
        facts={[
          { label: "Trivia", value: "Tuesdays, 6:30 PM" },
          { label: "Prime rib brunch", value: "1st & 3rd Sundays" },
          { label: "Private events", value: "One bay to the whole building" },
        ]}
      />

      {/* ================================================ CALENDAR ===== */}
      <section
        id="calendar"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
      >
        <Reveal>
          <p className="kicker text-muted">01 · On the calendar</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            The next <span className="text-green-soft">few weeks.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75">{upcomingEventsIntro}</p>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_21rem] lg:gap-20">
          <div>
            {months.map((group) => (
              <UntilDate
                key={group.label}
                until={group.events[group.events.length - 1].date}
              >
                <div className="mb-14 last:mb-0">
                  <h3 className="eyebrow border-b border-ink/15 pb-4 text-ink/60">
                    {group.label}
                  </h3>
                  <ul>
                    {group.events.map((e) => {
                      const { day, weekday } = dateParts(e.date);
                      return (
                        <UntilDate key={e.date + e.title} until={e.date}>
                          <li className="grid gap-x-8 gap-y-2 border-b border-ink/15 py-6 sm:grid-cols-[7.5rem_1fr]">
                            <p className="eyebrow text-ink/60 sm:pt-2.5">
                              {weekday} · {day}
                            </p>
                            <div>
                              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                                <h4 className="font-display text-2xl font-semibold text-ink">
                                  {e.title}
                                </h4>
                                <p className="text-sm text-ink/70">{e.time}</p>
                              </div>
                              <p className="mt-2 max-w-2xl whitespace-pre-line text-[0.95rem] text-ink/70">
                                {e.desc}
                              </p>
                              {e.signup && (
                                <a
                                  href={e.signup}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-cta mt-4 text-ink"
                                >
                                  {e.signupLabel ?? "Sign up"}{" "}
                                  <span aria-hidden>→</span>
                                </a>
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
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden bg-green-deep">
                <Image
                  src={img.brunchPrimeRib}
                  alt="Prime rib at the carving station during Sunday brunch at Chip Shots"
                  fill
                  sizes="(min-width: 1024px) 336px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "38% 50%" }}
                />
              </div>
              <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                Sunday brunch · {brunch.prices.split(" · ")[0]}
              </figcaption>
            </figure>
            <p className="eyebrow mt-10 text-muted">Every week</p>
            <dl className="mt-3 border-t border-ink/15">
              {everyWeek.map(([k, v]) => (
                <div key={k} className="border-b border-ink/15 py-3.5">
                  <dt className="font-display text-xl font-semibold text-ink">
                    {k}
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink/65">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ========================================== PRIVATE EVENTS ===== */}
      <section id="private" className="scroll-mt-24 bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end lg:gap-20">
            <Reveal>
              <p className="kicker text-gold-soft">02 · Private events</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
                A bay, a few bays,{" "}
                <span className="text-gold-soft">or the whole building.</span>
              </h2>
              <p className="mt-6 max-w-md text-cream/70">
                Every event is quoted to fit your group, with one person on
                our side handling the food, the bar and the tee sheet. Nobody
                needs to know how to golf.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[16/9] overflow-hidden outline outline-1 outline-offset-[12px] outline-cream/15">
                <Image
                  src={img.clubPatio}
                  alt="The patio and putting greens outside Chip Shots in Henderson"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ul className="mt-20 grid gap-x-10 gap-y-12 border-t border-cream/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {eventSpaces.map((s, i) => (
              <li key={s.name}>
                <p className="eyebrow text-gold-soft">{s.size}</p>
                <h3 className="font-display mt-3 text-3xl font-semibold">
                  {s.name}
                </h3>
                <p className="mt-3 text-[0.95rem] text-cream/70">{s.desc}</p>
                {i === 0 && (
                  <div className="mt-5">
                    <BookButton variant="ghost-light" size="md">
                      Book a bay
                    </BookButton>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ul className="mt-20 border-t border-cream/15">
            {eventTypes.map((t) => {
              const row = (
                <>
                  <span className="font-display text-2xl font-semibold sm:w-80 sm:shrink-0">
                    {t.title}
                  </span>
                  <span className="text-[0.95rem] text-cream/65">{t.desc}</span>
                  {t.href && (
                    <span
                      className="ml-auto hidden text-cream/50 transition-transform group-hover:translate-x-1 sm:block"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </>
              );
              const cls =
                "group flex flex-col gap-x-8 gap-y-1 border-b border-cream/15 py-5 sm:flex-row sm:items-baseline";
              return (
                <li key={t.title}>
                  {t.href ? (
                    <Link
                      href={t.href}
                      className={`${cls} transition-colors hover:text-gold-soft`}
                    >
                      {row}
                    </Link>
                  ) : (
                    <div className={cls}>{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================================================= INQUIRE ===== */}
      <section
        id="inquire"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="kicker text-muted">03 · Inquire</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
                Tell us about <span className="text-green-soft">your event.</span>
              </h2>
              <p className="mt-6 max-w-sm text-ink/75">
                Send the basics and we&rsquo;ll reply with availability and a
                quote, usually within a business day.
              </p>
              <dl className="mt-8 max-w-sm">
                <div className="flex items-baseline gap-4 border-b border-ink/15 py-3.5">
                  <dt className="eyebrow text-ink/60">Call</dt>
                  <span className="leader" aria-hidden />
                  <dd>
                    <a href={business.phoneHref} className="text-ink hover:text-green-soft">
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 border-b border-ink/15 py-3.5">
                  <dt className="eyebrow text-ink/60">Email</dt>
                  <span className="leader" aria-hidden />
                  <dd>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-ink hover:text-green-soft"
                    >
                      {business.email}
                    </a>
                  </dd>
                </div>
              </dl>
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
