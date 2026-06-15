import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { business, img, memberships } from "@/lib/site";

export const metadata: Metadata = {
  title: "Youth & Junior Golf in Henderson — The Chip Crew",
  description:
    "Indoor junior golf for kids and teens in Henderson, NV. The Chip Crew youth program, beginner-friendly TrackMan simulators, kids' birthday parties and a family-friendly, climate-controlled venue. No experience needed.",
  alternates: { canonical: "/youth-golf" },
};

const whyKids = [
  {
    title: "No experience needed",
    desc: "TrackMan reads every swing, keeps score and runs easy arcade-style games, so a first-timer has just as much fun as a junior who already plays. Clubs are provided — kids just show up and swing.",
    icon: Icon.target,
  },
  {
    title: "Safe, indoor & climate-controlled",
    desc: "No 110° heat, no lost balls, no walking a course in the sun. Just a comfortable, air-conditioned room where parents can relax while kids play.",
    icon: Icon.flag,
  },
  {
    title: "A real skill, the fun way",
    desc: "Golf teaches focus, patience and good sportsmanship — and on a simulator the feedback is instant, so kids see themselves improve shot by shot without the pressure of a real course.",
    icon: Icon.star,
  },
  {
    title: "Screens off, together",
    desc: "A genuinely active way to get kids off their devices and moving — playing alongside friends, siblings or parents in the same bay.",
    icon: Icon.users,
  },
];

const youthTier = memberships.find((m) => m.tier.startsWith("Chip Crew"));

export default function YouthGolf() {
  return (
    <>
      <PageHero
        eyebrow="The Chip Crew · Youth Golf"
        title="Where Henderson's next golfers get started."
        intro="Indoor, beginner-friendly and built for all ages — junior golf at Chip Shots is the easiest way for kids and teens to fall in love with the game. No experience, no clubs and no sunburn required."
        image={img.bayCinematic}
      />

      {/* ============================================== WHY KIDS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Why families love it</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Big fun for little golfers.
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
                <p className="eyebrow text-gold-soft">The Chip Crew</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  A youth membership built for regulars.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  The Chip Crew is our membership for players 18 and under — for
                  the kid who's hooked and wants to keep coming back. It's the
                  most affordable way to turn casual swings into a real, growing
                  skill.
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
                    Book a bay
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
                The birthday they'll actually remember.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                Book a private bay and let the kids loose on games anyone can
                play — no golf skill required. The kitchen sends out sliders,
                totchos, mini corn dogs and shakes right to the bay, so all you
                have to bring is the cake. Easy to host, easy to clean up,
                impossible to forget.
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
              Bring the kids in for a swing.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              Grab a bay any day of the week and let them try it — clubs
              included, no experience needed. Questions about the Chip Crew or
              a party? Give us a call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={business.booking} external variant="gold" size="lg" withArrow>
                Book a bay
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
