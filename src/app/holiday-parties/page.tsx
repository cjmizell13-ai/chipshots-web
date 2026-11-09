import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import EventForm from "@/components/forms/EventForm";
import { business, img, golf } from "@/lib/site";

export const metadata: Metadata = {
  title: "Holiday Parties in Henderson",
  description:
    "Book your office or group holiday party at Chip Shots in Henderson, NV. Private TrackMan bays, food from our kitchen and a full bar for groups of 10 to full private buyouts of 100+. No golf experience needed.",
  alternates: { canonical: "/holiday-parties" },
};

const packages = [
  {
    name: "A few bays",
    size: "Small groups, about 8 to 12 guests",
    items: [
      "2 to 3 private TrackMan bays",
      "Shareables from our kitchen, served to your bays",
      "Full bar service at the bays",
    ],
  },
  {
    name: "The bays",
    size: "Team parties, about 12 to 25 guests",
    items: [
      `Up to all ${golf.bays} bays for your group`,
      "A spread from our kitchen for the whole team",
      "Bar service, plus tables in the dining room for mingling",
    ],
  },
  {
    name: "The whole building",
    size: "Full private buyout, groups of 100+",
    items: [
      "The whole venue: every bay, the dining room, the bar and the patio",
      "Food and drinks planned around your headcount",
      "Closest-to-the-pin and long-drive contests for the room",
    ],
  },
];

const whyItWorks = [
  {
    title: "Nobody needs to golf",
    desc: "TrackMan keeps score and handicaps the games, so first-timers and regular golfers play together. Plenty of guests come for the food, the bar and the company.",
    icon: Icon.users,
  },
  {
    title: "One place, one bill",
    desc: "Golf, food and a full bar under one roof. No shuttling between a venue, a caterer and a bar tab.",
    icon: Icon.burger,
  },
  {
    title: "Easy for the planner",
    desc: "Tell us your headcount, date and budget. We'll come back with options and pricing, and handle the setup on the day.",
    icon: Icon.flag,
  },
];

export default function HolidayParties() {
  return (
    <>
      <PageHero
        eyebrow="Holiday Parties"
        title="Holiday parties, done properly."
        intro="Private TrackMan bays, food from our kitchen and a full bar, for groups of 10 up to full private buyouts of 100+. Family- and veteran-owned, right on Lake Mead Pkwy in Henderson."
        image={img.bayRoomWide}
      />

      {/* ============================================== PACKAGES ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Party options</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Every party is quoted to fit. Here is how most groups use the space.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Every party is quoted to your group, so send us a headcount and a
              date or two and we'll reply with options and pricing.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <StaggerItem
              key={p.name}
              className="flex flex-col rounded-3xl border border-gold/35 bg-cream-2 p-8"
            >
              <p className="eyebrow text-gold">{p.name}</p>
              <h3 className="font-display mt-2 text-2xl text-green-deep">
                {p.size}
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Icon.flag className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href="#inquire" variant="green" size="md" withArrow>
                  Request a quote
                </ButtonLink>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================================== WHY ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-soft">Why groups book us</p>
              <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                Why groups book here.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {whyItWorks.map((w) => {
              const WhyIcon = w.icon;
              return (
                <StaggerItem
                  key={w.title}
                  className="rounded-3xl border border-cream/15 bg-cream/5 p-7"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-green-deep">
                    <WhyIcon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-xl">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">
                    {w.desc}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============================================== FORM ===== */}
      <section
        id="inquire"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-gold">Request a quote</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Ask about your date.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted">
                Choose "Holiday Party," add your headcount and a date or two,
                and we'll reply with options and pricing, usually within a
                business day. Prefer to talk? Call {business.phone}.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <Image
                  src={img.trackmanActivities}
                  alt="A group playing a TrackMan competition game"
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
