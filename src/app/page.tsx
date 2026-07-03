import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Amp, AmpText } from "@/components/ui/amp";
import BookButton from "@/components/BookButton";
import Marquee from "@/components/home/Marquee";
import TrackOnClick from "@/components/TrackOnClick";
import {
  business,
  img,
  golf,
  hoursSummary,
  leagues,
  giftCardPromo,
  trivia,
} from "@/lib/site";
import { getAllPosts, formatPostDate } from "@/lib/blog";

const giftCardTotal = giftCardPromo.threshold + giftCardPromo.bonus;

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
    title: "A Full Kitchen & More",
    body: "Burgers, sandwiches, wings, loaded shareables and salads — a full kitchen turning out real food worth showing up for. Golf optional.",
    image: img.foodCheesesteak,
    href: "/food-drink",
    cta: "View the Menu",
    icon: Icon.burger,
  },
  {
    key: "drink",
    eyebrow: "Drink",
    title: "Full Bar & Cocktails",
    body: "Cold drafts, an honest wine list and signature cocktails like the Transfusion and the Azalea. Happy hour Mon–Fri, 3–6 PM — in the bays too.",
    image: img.cocktailsHighball,
    href: "/food-drink",
    cta: "See Drinks",
    icon: Icon.glass,
  },
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ===================================================== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.exterior2}
            alt="The Chip Shots Indoor Golf Club storefront in Henderson, NV"
            fill
            priority
            sizes="100vw"
            className="kenburns object-cover object-center"
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
              Golf, food <Amp className="text-white" /> drinks{" "}
              <span className="text-gold">under one roof.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Five TrackMan simulator bays, a full bar and a full kitchen in
              the heart of Henderson. Come for the food, stay for the game —
              or just the game.
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

      {/* ============================================ GIFT CARD PROMO ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:gap-8 md:text-left">
          <div>
            <p className="eyebrow text-green-deep/70">
              {giftCardPromo.occasion} · Order by {giftCardPromo.deadline}
            </p>
            <h2 className="font-display mt-1.5 text-2xl text-green-deep sm:text-3xl">
              {`Give Dad the good times — buy $${giftCardPromo.threshold}, get $${giftCardTotal}.`}
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-green-deep/80">
              {`Every $${giftCardPromo.threshold} eGift card comes with a free $${giftCardPromo.bonus} bonus card. Delivered to your inbox instantly.`}
            </p>
          </div>
          <TrackOnClick
            event="InitiateCheckout"
            params={{ content_name: "Gift card", content_category: "Father's Day", source: "home banner" }}
          >
            <ButtonLink href="/gift-cards" variant="green" size="lg" withArrow>
              Shop Gift Cards
            </ButtonLink>
          </TrackOnClick>
        </div>
      </section>

      {/* =============================================== THREE PILLARS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-gold">Three reasons to come in</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 text-balance text-4xl font-light text-green-deep sm:text-5xl">
              One building. Three ways to enjoy it.
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
                  Rates <Amp className="text-white" /> details
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================ LEAGUES ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold-soft">{leagues.eyebrow}</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  {leagues.title}
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  {leagues.intro}
                </p>
                <div className="mt-8">
                  <ButtonLink href="/league" variant="gold" size="lg" withArrow>
                    {leagues.cta}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Stagger className="grid gap-4">
              {leagues.points.map((p) => (
                <StaggerItem
                  key={p.title}
                  className="rounded-2xl border border-cream/12 bg-green-deep/60 p-6"
                >
                  <h3 className="font-display text-xl text-cream">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-cream/65">{p.desc}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============================================ FOOD & DRINK TEASE ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow text-gold">
                The kitchen <Amp className="text-gold" /> bar
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-balance text-4xl font-light text-green-deep sm:text-5xl">
                Good enough to come for the food alone.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                Burgers, wings, loaded totchos and a Philly worth
                the drive — plus sandwiches, wraps and salads. Pair it with a
                cold draft, a glass of wine or a signature cocktail. Happy hour
                runs Mon–Fri, 3–6 PM.
              </p>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-3">
              {["Burgers & Sandwiches", "Wings & Tenders", "Signature Cocktails", "Cold Drafts", "Happy Hour 3–6"].map(
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
                  src={img.foodBurger}
                  alt="A bacon cheeseburger with seasoned fries"
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
                  alt="A signature cocktail with a golf-ball garnish on the bar"
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
                yes for groups. Tell us what you're celebrating and we'll tailor
                it to your party.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <ButtonLink href="/events" variant="gold" size="lg" withArrow>
                Plan your event
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ TRIVIA NIGHT ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:gap-8 md:text-left">
          <div>
            <p className="eyebrow text-green-deep/70">
              {trivia.eyebrow} · {trivia.host}
            </p>
            <h2 className="font-display mt-1.5 text-3xl text-green-deep sm:text-4xl">
              {trivia.title} — {trivia.day}s at {trivia.time}
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-green-deep/80">
              Free to play, no sign-up — grab your team and win a $
              {trivia.prizes[0].reward.replace(/[^0-9]/g, "")} gift card.{" "}
              {trivia.note}.
            </p>
          </div>
          <ButtonLink href="/events" variant="green" size="lg" withArrow>
            Grab your team
          </ButtonLink>
        </div>
      </section>

      {/* ============================================ FROM THE BLOG ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow text-gold">From the Clubhouse</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-4 text-balance text-4xl font-light text-green-deep sm:text-5xl">
                  Local guides, golf tips & what's on.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <ButtonLink href="/blog" variant="outline" withArrow>
                Read the blog
              </ButtonLink>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-7 md:grid-cols-3" gap={0.12}>
            {latestPosts.map((post) => (
              <StaggerItem key={post.slug} as="article">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow text-gold">{post.category}</p>
                    <h3 className="font-display mt-3 text-xl leading-snug text-green-deep">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <p className="mt-5 text-sm text-muted">
                      {formatPostDate(post.date)} · {post.readMinutes} min read
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
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
                title="Map to Chip Shots Indoor Golf Club"
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
