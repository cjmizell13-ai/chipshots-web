import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { business, img, memberships } from "@/lib/site";

export const metadata: Metadata = {
  title: "Junior Golf in Henderson",
  description:
    "Junior golf for kids and teens at Chip Shots Golf Club in Henderson, NV: a youth membership, beginner-friendly TrackMan bays and kids' birthday parties, indoors. No experience needed.",
  alternates: { canonical: "/youth-golf" },
};

const whyKids = [
  {
    title: "No experience needed",
    desc: "TrackMan reads every swing, keeps score and runs simple games, so a first-timer and a junior who already plays can share a bay. Clubs are provided.",
    icon: Icon.target,
  },
  {
    title: "Safe, indoor & climate-controlled",
    desc: "Indoors and air-conditioned, with seating for parents in the bay.",
    icon: Icon.flag,
  },
  {
    title: "Instant feedback",
    desc: "TrackMan shows the result of every shot, so kids can see how they are improving.",
    icon: Icon.star,
  },
  {
    title: "Play together",
    desc: "Kids can play alongside friends, siblings or parents in the same bay.",
    icon: Icon.users,
  },
];

const youthTier = memberships.find((m) => m.tier === "Youth");

export default function YouthGolf() {
  return (
    <>
      <PageHero
        eyebrow="Junior golf"
        title="Junior golf at the club."
        intro="Indoors, for every age and skill level, with clubs provided."
        image={img.bayCinematic}
      />

      {/* ============================================== WHY KIDS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">For families</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              What to expect.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyKids.map((w) => {
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

      {/* ============================================== CHIP CREW ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold-soft">Youth membership</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  Youth membership.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  For players 18 and under who play regularly.
                </p>
                {youthTier && (
                  <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl border border-cream/15 bg-green-deep/60 px-7 py-5">
                    <span className="font-display text-3xl text-gold">
                      {youthTier.price}
                    </span>
                    <span className="text-cream/70">{youthTier.per}</span>
                    <span className="ml-2 text-sm text-cream/70">
                      {youthTier.tier}
                    </span>
                  </div>
                )}
                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/memberships" variant="gold" size="lg" withArrow>
                    See membership details
                  </ButtonLink>
                  <ButtonLink href={business.booking} external variant="ghost-light" size="lg">
                    Book a Bay
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <Image
                  src={img.trackmanActivities}
                  alt="A young player enjoying a TrackMan game in a simulator bay"
                  width={900}
                  height={680}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================== BIRTHDAYS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <Image
                src={img.foodBurger}
                alt="Burgers and fries from the kitchen, delivered to the bay"
                width={900}
                height={680}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow text-gold">Kids' birthday parties</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Kids&rsquo; birthday parties.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                Book a private bay with games anyone can play. The kitchen
                serves sliders, totchos, mini corn dogs and shakes at the bay.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8">
                <ButtonLink href="/events" variant="green" size="lg" withArrow>
                  Plan a birthday party
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================== CTA ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-green-deep sm:text-4xl">
              Book a first visit.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              Book a bay any day of the week and let them try it. Clubs
              included, no experience needed. Questions about the youth
              membership or a party? Give us a call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={business.booking} external variant="gold" size="lg" withArrow>
                Book a Bay
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="outline" size="lg">
                Call {business.phone}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
