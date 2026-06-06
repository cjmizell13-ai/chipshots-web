import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Amp, AmpText } from "@/components/ui/amp";
import BookButton from "@/components/BookButton";
import Marquee from "@/components/home/Marquee";
import {
  business,
  img,
  golf,
  eventPackages,
  hoursSummary,
} from "@/lib/site";

const pillars = [
  {
    key: "play",
    eyebrow: "Play",
    title: "Five TrackMan Bays",
    body: "State-of-the-art simulators with 500+ courses, closest-to-pin games and on-screen competitions. Up to four players, clubs provided, no 6 AM tee time required.",
    image: img.bayCinematic,
    href: "/golf-booking",
    cta: "Book a Bay",
    icon: Icon.target,
  },
  {
    key: "eat",
    eyebrow: "Eat",
    title: "Smash Burgers & More",
    body: "A from-scratch kitchen turning out smash burgers, loaded shareables, wings and salads. Real food worth showing up for — golf optional.",
    image: img.foodCheesesteak,
    href: "/food-drink",
    cta: "View the Menu",
    icon: Icon.burger,
  },
  {
    key: "drink",
    eyebrow: "Drink",
    title: "Full Bar & Cocktails",
    body: "Cold drafts, an honest wine list and signature cocktails like the Transfusion and the Azalea. Happy hour weekdays, 3–6 PM — in the bays too.",
    image: img.cocktailRed,
    href: "/food-drink",
    cta: "See Drinks",
    icon: Icon.glass,
  },
];

export default function Home() {
  return (
    <>
      {/* ===================================================== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.heroBay}
            alt="A TrackMan simulator bay at Chip Shots with lounge seating"
            fill
            priority
            sizes="100vw"
            className="kenburns object-cover"
          />
          <div className="veil-green absolute inset-0" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="eyebrow text-gold-soft">
              Veteran-Owned · Henderson, NV · {business.status}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-5 max-w-4xl text-balance text-5xl font-light leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
              Golf, burgers <Amp className="text-gold" /> beer{" "}
              <span className="text-gold">under one roof.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Five TrackMan simulator bays, a full bar and a from-scratch
              kitchen in the heart of Henderson. Come for the burgers, stay for
              the game — or just the game.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink
                href={business.booking}
                external
                variant="gold"
                size="lg"
                withArrow
              >
                Book a Bay
              </ButtonLink>
              <ButtonLink href="/food-drink" variant="ghost-light" size="lg">
                View the Menu
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* =============================================== THREE PILLARS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-gold">Three reasons to come in</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 text-balance text-4xl font-light text-green-deep sm:text-5xl">
              One room. Three ways to enjoy it.
            </h2>
          </Reveal>
          <GoldRule className="mx-auto mt-7 w-40" />
        </div>

        <Stagger className="mt-16 grid gap-7 md:grid-cols-3" gap={0.12}>
          {pillars.map((p) => {
            const PillarIcon = p.icon;
            return (
              <StaggerItem key={p.key} as="article">
                <Link
                  href={p.href}
                  className="group block h-full overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep/55 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 text-green-deep shadow-sm">
                      <PillarIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-7">
                    <p className="eyebrow text-gold">{p.eyebrow}</p>
                    <h3 className="font-display mt-2 text-2xl text-green-deep">
                      <AmpText className="text-gold">{p.title}</AmpText>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-green transition-colors group-hover:text-gold">
                      {p.cta}
                      <Icon.arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ============================================ FEATURED / GOLF ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <Image
                src={img.trackmanCompetitions}
                alt="TrackMan competition leaderboard on a simulator screen"
                width={900}
                height={680}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/30 bg-green-deep/95 px-7 py-5 shadow-lg backdrop-blur sm:block">
              <p className="font-display text-4xl text-gold">{golf.courses}</p>
              <p className="eyebrow mt-1 text-cream/70">Courses</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-gold-soft">The simulators</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-balance text-4xl font-light leading-tight sm:text-5xl">
                TrackMan technology, clubhouse comfort.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg leading-relaxed text-cream/75">
                The same launch monitors the tour pros train on — measuring every
                shot to the foot. Play St Andrews at noon, run a closest-to-pin
                with friends, or take a lesson. Lounge seating, food and drinks
                come right to your bay.
              </p>
            </Reveal>

            <Stagger className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-green-soft/40 bg-green-soft/40 sm:grid-cols-3">
              {[
                { n: golf.bays, l: "Simulator bays" },
                { n: golf.players, l: "Players per bay" },
                { n: "24/7", l: "Member access" },
              ].map((s) => (
                <StaggerItem
                  key={s.l}
                  className="bg-green-deep px-6 py-7 text-center"
                >
                  <p className="font-display text-4xl text-gold">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">
                    {s.l}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap gap-4">
                <BookButton variant="gold" withArrow />
                <ButtonLink href="/golf-booking" variant="ghost-light">
                  Rates <Amp className="text-gold-soft" /> details
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ BOOKING / PROMO ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <Reveal>
            <div>
              <p className="eyebrow text-green-deep/70">Grand-opening offer</p>
              <h2 className="font-display mt-2 text-3xl text-green-deep sm:text-4xl">
                Buy one hour, get one free.
              </h2>
              <p className="mt-2 text-green-deep/80">
                Use code <span className="font-semibold">BOGO</span> at checkout
                — buy one hour, get the second free.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BookButton variant="green" size="lg" withArrow>
              Reserve Now
            </BookButton>
          </Reveal>
        </div>
      </section>

      {/* ============================================ FOOD & DRINK TEASE ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow text-gold">
                The kitchen <Amp /> bar
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-balance text-4xl font-light text-green-deep sm:text-5xl">
                Good enough to come for the food alone.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                Smash burgers, hand-breaded wings, loaded totchos and a Philly
                worth the drive — all made from scratch. Pair it with a cold
                draft, a glass of wine or a signature cocktail. Happy hour runs
                weekdays 3–6 PM.
              </p>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-3">
              {["Smash Burgers", "Wings & Tenders", "Craft Cocktails", "Cold Drafts", "Happy Hour 3–6"].map(
                (tag) => (
                  <StaggerItem
                    key={tag}
                    className="rounded-full border border-line bg-cream-2 px-4 py-2 text-sm text-green-deep"
                  >
                    <AmpText className="text-gold">{tag}</AmpText>
                  </StaggerItem>
                )
              )}
            </Stagger>
            <Reveal delay={0.1}>
              <div className="mt-9">
                <ButtonLink href="/food-drink" variant="outline" size="lg" withArrow>
                  Explore the full menu
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <Image
                  src={img.foodWings}
                  alt="A basket of saucy bone-in wings"
                  width={520}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12} className="mt-10">
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <Image
                  src={img.cocktailsHighball}
                  alt="Signature highball cocktails on the bar"
                  width={520}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ EVENTS TEASER ===== */}
      <section className="relative overflow-hidden bg-green text-cream">
        <Image
          src={img.bayRoomWide}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="veil-green-strong absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-gold-soft">
                Events <Amp /> parties
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-balance text-4xl font-light sm:text-5xl">
                Birthdays, team nights <Amp /> everything in between.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 leading-relaxed text-cream/75">
                Private bays, catered food and a full bar make Chip Shots an easy
                yes for groups. Pick a package or build your own.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {eventPackages.map((pkg) => (
              <StaggerItem
                key={pkg.name}
                as="article"
                className={`rounded-3xl border p-7 backdrop-blur ${
                  pkg.featured
                    ? "border-gold/60 bg-green-deep/70"
                    : "border-cream/15 bg-green-deep/40"
                }`}
              >
                {pkg.featured && (
                  <span className="eyebrow inline-block rounded-full bg-gold px-3 py-1 text-[0.62rem] text-green-deep">
                    Most popular
                  </span>
                )}
                <h3 className="font-display mt-3 text-2xl text-cream">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-gold-soft">{pkg.price}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-cream/75">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <Icon.check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <ButtonLink href="/events" variant="gold" size="lg" withArrow>
                Plan your event
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ VISIT / MAP ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Come see us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-balance text-4xl font-light text-green-deep sm:text-5xl">
                In the heart of Henderson.
              </h2>
            </Reveal>
            <GoldRule className="mt-7 w-32" />

            <div className="mt-8 space-y-5 text-green-deep">
              <div className="flex gap-4">
                <Icon.pin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <a
                  href={business.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline pb-0.5"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{" "}
                  {business.address.postalCode}
                </a>
              </div>
              <div className="flex gap-4">
                <Icon.clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <ul className="space-y-1">
                  {hoursSummary.map((h) => (
                    <li key={h.label} className="flex gap-3">
                      <span className="w-24 text-muted">{h.label}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <Icon.phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <a href={business.phoneHref} className="link-underline pb-0.5">
                  {business.phone}
                </a>
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap gap-4">
                <BookButton variant="gold" withArrow />
                <ButtonLink href="/about" variant="outline">
                  About us
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
              <iframe
                src={business.mapEmbed}
                title="Map to Chip Shots Indoor Golf"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
