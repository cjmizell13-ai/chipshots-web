import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import Gallery from "@/components/Gallery";
import { business, img, golf, rangeCard, leagues, bogoUntil, promoActive } from "@/lib/site";

// Re-render daily so the date-gated BOGO section retires itself after Jul 31.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Golf & Booking — TrackMan Simulator Bays",
  description:
    "Five TrackMan simulator bays with 500+ courses in Henderson, NV. Up to four players, clubs provided. Book online — non-peak $40/hr, peak $50/hr, members book free.",
  alternates: { canonical: "/golf-booking" },
};

const features = [
  {
    icon: Icon.target,
    title: "TrackMan accuracy",
    body: "Tour-grade launch monitors measuring carry, spin, club path and more — to the foot.",
  },
  {
    icon: Icon.star,
    title: "500+ courses",
    body: "From St Andrews to Pebble Beach, plus driving range, closest-to-pin and on-screen games.",
  },
  {
    icon: Icon.users,
    title: "Up to 4 players",
    body: "Lounge seating in every bay. Clubs provided — bring friends, not your gear.",
  },
  {
    icon: Icon.glass,
    title: "Food & drinks to the bay",
    body: "Order from the full kitchen and bar without leaving your screen.",
  },
];

export default function GolfBooking() {
  return (
    <>
      <PageHero
        eyebrow="Golf & Booking"
        title="Five TrackMan bays. 500+ courses. No tee time at dawn."
        intro="Indoor golf the way it should be — climate-controlled, social, and open late. Reserve a bay below."
        image={img.bayDesertData}
      />

      {/* ============================================== QUICK BOOK ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
          <p className="text-center font-display text-xl text-green-deep sm:text-left">
            Ready to play? Reserve your bay now.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={business.booking} external variant="gold" size="lg" withArrow>
              Book a bay
            </ButtonLink>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 text-green-deep"
            >
              <Icon.phone className="h-4 w-4 text-gold" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ================================= BOGO OFFER (auto-expires) ===== */}
      {promoActive(bogoUntil) && (
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <Reveal>
            <div className="rounded-3xl border border-gold/40 bg-green-soft/25 p-8 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="eyebrow text-gold-soft">First visit</p>
                  <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
                    Your second hour is on us.
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-cream/75">
                    New to Chip Shots? Book a{" "}
                    <span className="text-gold">2-hour</span> bay, enter code{" "}
                    <span className="font-semibold text-gold">BOGO</span> at
                    checkout, and pay for just one hour. First-time guests, one
                    per guest, through July 31.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-3 rounded-2xl border border-gold/40 bg-green-deep/60 px-6 py-4">
                    <span className="text-sm uppercase tracking-wide text-cream/60">
                      Code
                    </span>
                    <span className="font-display text-3xl text-gold">BOGO</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      )}

      {/* ============================================== FEATURES ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const F = f.icon;
            return (
              <StaggerItem
                key={f.title}
                className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-deep text-gold">
                  <F className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-xl text-green-deep">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ============================================== RATES ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold-soft">Bay rates</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  Simple, by-the-hour pricing.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  Rates are per bay, per hour — split it with up to three friends.
                  Members book their bay time free, and pay just ${"30"}/hour for
                  any extra hours.
                </p>
                <div className="mt-8 rounded-2xl border border-gold/30 bg-green-soft/25 p-6">
                  <p className="eyebrow text-gold-soft">Range Card</p>
                  <p className="font-display mt-2 text-3xl text-gold">
                    {rangeCard.price}
                    <span className="ml-2 text-base font-sans text-cream/70">
                      for {rangeCard.detail}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-cream/60">
                    Pre-paid bay time at a discount — never expires.
                  </p>
                </div>
              </div>
            </Reveal>

            <Stagger className="grid gap-4">
              {golf.rates.map((r) => (
                <StaggerItem
                  key={r.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-cream/12 bg-green-deep/60 p-6"
                >
                  <div>
                    <h3 className="font-display text-xl text-cream">{r.name}</h3>
                    <p className="mt-1 text-sm text-cream/55">{r.note}</p>
                  </div>
                  <p className="shrink-0 font-display text-3xl text-gold">
                    {r.price}
                    <span className="text-base text-cream/60">{r.unit}</span>
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============================================== LEAGUES ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="eyebrow text-gold">{leagues.eyebrow}</p>
          <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
            {leagues.title}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            {leagues.intro}
          </p>
        </Reveal>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {leagues.points.map((p) => (
            <StaggerItem
              key={p.title}
              className="flex flex-col rounded-3xl border border-gold/40 bg-cream-2 p-8"
            >
              <h3 className="font-display text-2xl text-green-deep">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-muted">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.05}>
          <div className="mt-10">
            <ButtonLink href="/league" variant="outline" withArrow>
              {leagues.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* ============================================== BOOK ===== */}
      <section id="book" className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow text-gold">Reserve your bay</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Book online in seconds.
              </h2>
            </Reveal>
            <GoldRule className="mx-auto mt-7 w-40" />
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-soft)]">
              <iframe
                src={business.booking}
                title="Book a simulator bay at Chip Shots"
                loading="lazy"
                className="h-[680px] w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-muted">
                Trouble with the booking window?
              </p>
              <ButtonLink href={business.booking} external variant="gold" size="lg" withArrow>
                Open booking in a new tab
              </ButtonLink>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 text-green-deep"
              >
                <Icon.phone className="h-4 w-4 text-gold" />
                Or call {business.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================== GALLERY ===== */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <p className="eyebrow text-gold">Inside the bays</p>
          <h2 className="font-display mt-3 text-3xl font-light text-green-deep sm:text-4xl">
            Take a look around.
          </h2>
        </Reveal>
        <div className="mt-8">
          <Gallery
            images={[
              { src: img.bayLounge, alt: "Lounge seating inside a Chip Shots simulator bay" },
              { src: img.bayMoody, alt: "A Chip Shots simulator bay lit for evening play" },
              { src: img.heroBay, alt: "Wide view of a TrackMan bay mid-swing" },
              { src: img.bayDesertData, alt: "TrackMan shot data on the bay screen" },
              { src: img.bayRoomWide, alt: "The full simulator room at Chip Shots" },
              { src: img.trackmanCompetitions, alt: "On-screen competition game on a TrackMan bay" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
