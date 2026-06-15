import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import EventForm from "@/components/forms/EventForm";
import { business, img, golf, memberships } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Events & Team Building in Henderson",
  description:
    "Host your next corporate team night, client outing, off-site or holiday party at Chip Shots in Henderson, NV. Private TrackMan bays, catered food and a full bar — and games everyone can play, no golf experience required.",
  alternates: { canonical: "/corporate-events" },
};

const whyItWorks = [
  {
    title: "Everyone plays — skill doesn't matter",
    desc: "TrackMan handicaps the games and keeps score automatically, so the new hire and the VP who golfs every weekend are on even footing. Closest-to-the-pin and long-drive games get the whole room cheering, and nobody sits on the sidelines.",
    icon: Icon.target,
  },
  {
    title: "Private bays keep the team together",
    desc: `Reserve a block of our ${golf.bays} climate-controlled bays and your group stays in one place — rotating through games, talking shop or not, with no 110° parking lot and no rented gear.`,
    icon: Icon.users,
  },
  {
    title: "Food and drinks, handled",
    desc: "A full kitchen and full bar deliver burgers, shareables, cocktails and cold drafts straight to your bays. Run it as a happy-hour outing, an after-work team night, or a half-day with catering — nobody has to leave to eat.",
    icon: Icon.burger,
  },
  {
    title: "Climate-controlled, any season",
    desc: "Indoor and air-conditioned year-round, so your event isn't at the mercy of the Henderson heat or a rained-out tee time. Book with confidence months out.",
    icon: Icon.flag,
  },
];

const occasions = [
  {
    title: "Team nights & off-sites",
    desc: "Break up the quarter with something people actually look forward to — a few hours of games, food and friendly competition that gets the whole team talking.",
  },
  {
    title: "Client outings & entertaining",
    desc: "Impress clients without the stuffy steakhouse. Private bays make it easy to talk business between swings, with the bar and kitchen at your service.",
  },
  {
    title: "Sales kickoffs & celebrations",
    desc: "Hit a number worth celebrating? Toast it over a TrackMan tournament with prizes, drinks and dinner — all under one roof.",
  },
  {
    title: "Holiday parties",
    desc: "A festive, climate-controlled venue with golf, catering and a full bar makes the company holiday party an easy yes for groups of any size.",
  },
];

const corporateTiers = memberships.filter((m) => m.tier.startsWith("Corporate"));

export default function CorporateEvents() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Events"
        title="Team building that doesn't feel like team building."
        intro="Private TrackMan bays, catered food and a full bar — and games everyone can play, whether they golf or have never held a club. The easiest yes on the company calendar."
        image={img.trackmanCompetitions}
      />

      {/* ============================================== WHY IT WORKS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Why teams love it</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              The conference room never stood a chance.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyItWorks.map((w) => {
            const WhyIcon = w.icon;
            return (
              <StaggerItem
                key={w.title}
                className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-deep text-gold">
                  <WhyIcon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-xl text-green-deep">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {w.desc}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ============================================== OCCASIONS ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold-soft">What we host</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  Built for every kind of work gathering.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  From a casual team happy hour to a full sales-kickoff
                  blowout, we tailor the bays, food and format to your group.
                  Tell us the headcount and the vibe — we'll handle the rest.
                </p>
                <div className="mt-8">
                  <ButtonLink href="#inquire" variant="gold" size="lg" withArrow>
                    Request a quote
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {occasions.map((o) => (
                <StaggerItem
                  key={o.title}
                  className="rounded-2xl border border-cream/12 bg-green-deep/60 p-6"
                >
                  <h3 className="font-display text-xl text-cream">{o.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                    {o.desc}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============================================== MEMBERSHIPS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <Image
                src={img.bayRoomWide}
                alt="A private simulator bay set up for a group"
                width={900}
                height={680}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow text-gold">For regulars</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Entertain clients all year with a corporate membership.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                If your team comes back — for recurring client entertaining,
                standing team nights or a perk employees actually use — a
                corporate membership makes it easy on the budget.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4">
              {corporateTiers.map((t) => (
                <StaggerItem
                  key={t.tier}
                  className="flex items-baseline justify-between gap-4 rounded-2xl border border-line bg-cream-2 p-6"
                >
                  <div>
                    <h3 className="font-display text-xl text-green-deep">
                      {t.tier}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{t.note}</p>
                  </div>
                  <p className="shrink-0 font-display text-2xl text-green-deep">
                    {t.price}
                    <span className="text-base text-muted">{t.per}</span>
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <div className="mt-8">
                <ButtonLink href="/memberships" variant="outline" withArrow>
                  Compare all memberships
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================== INQUIRE FORM ===== */}
      <section
        id="inquire"
        className="scroll-mt-24 bg-cream-2"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-gold">Request your event</p>
                <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                  Let's plan it.
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-muted">
                  Send us the basics and our events team will follow up with
                  availability and a quote — usually within a business day.
                </p>
                <div className="mt-8 space-y-4 text-green-deep">
                  <a
                    href={business.phoneHref}
                    className="flex items-center gap-3 font-medium"
                  >
                    <Icon.phone className="h-5 w-5 text-gold" />
                    {business.phone}
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-3 font-medium"
                  >
                    <Icon.mail className="h-5 w-5 text-gold" />
                    {business.email}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <EventForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
