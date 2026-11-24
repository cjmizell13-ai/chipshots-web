import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import BookButton from "@/components/BookButton";
import ReserveButton from "@/components/ReserveButton";
import UntilDate from "@/components/ui/UntilDate";
import HolidayDeals from "@/components/HolidayDeals";
import { ReelVideo, ReelEndCard } from "@/components/ui/reel";
import {
  business,
  img,
  golf,
  hours,
  liveDelivery,
  orderOnlineLive,
  promoActive,
  upcomingEvents,
  googleReviews,
} from "@/lib/site";

const rooms = [
  {
    no: "01",
    title: "Dine",
    body: "Burgers, ribs, steaks and salads from a full kitchen at lunch and dinner, and prime rib brunch on the first and third Sundays.",
    image: img.clubService,
    alt: "A server carrying plates of nachos and wings through the dining room at Chip Shots",
    href: "/food-drink",
    cta: "Menu",
  },
  {
    no: "02",
    title: "Play",
    body: `Five private TrackMan bays and ${golf.courses} courses. Clubs are on hand.`,
    image: img.clubGolfer,
    alt: "A guest mid-swing in a private TrackMan simulator bay at Chip Shots",
    href: "/golf-booking",
    cta: "The bays",
  },
  {
    no: "03",
    title: "Watch",
    body: "Screens over the bar, a TV in every bay and NFL Sunday Ticket. On weekends, breakfast is served from the first kickoff.",
    image: "/images/bar-screens.jpg",
    alt: "The bar at Chip Shots, with a game on the screen above the shelves",
    href: "/events",
    cta: "Events",
  },
];


const occasions = [
  { title: "Holiday parties", href: "/holiday-parties" },
  { title: "Corporate outings", href: "/corporate-events" },
  { title: "Birthdays", href: "/events" },
  { title: "Bachelor & bachelorette", href: "/events" },
  { title: "Client entertaining", href: "/corporate-events" },
  { title: "Full buyouts", href: "/events" },
];

const neighborhoods = ["Lake Las Vegas", "Cadence", "Tuscany", "Calico Ridge"];

function formatEventDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return {
    weekday: date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }),
    day: date.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" }),
  };
}

export default function Home() {
  const next = upcomingEvents.filter((e) => promoActive(e.date)).slice(0, 4);
  const nonPeak = golf.rates[0];

  return (
    <>
      {/* ===================================================== HERO ===== */}
      {/* One smooth loop of the bays, the kitchen and the bar behind the title:
          a wide cut on desktop, a tall cut on phones. */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black text-cream">
        <div className="absolute inset-0 -z-10">
          <ReelVideo
            src="/videos/hero/tall.mp4"
            poster="/videos/hero/tall.jpg"
            label="The bays, the kitchen and the bar at Chip Shots"
            className="md:hidden"
          />
          <ReelVideo
            src="/videos/hero/wide.mp4"
            poster="/videos/hero/wide.jpg"
            label="The bays, the kitchen and the bar at Chip Shots"
            className="hidden md:block"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/25" aria-hidden />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/80 via-black/30 to-transparent md:block" aria-hidden />

        <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-44 text-center sm:px-8 md:text-left lg:pb-14">
          <Reveal>
            <p className="kicker justify-center text-gold-soft md:justify-start">
              Henderson, Nevada · {business.address.street}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 text-[2.5rem] font-bold uppercase leading-[1.02] tracking-[0.04em] text-cream sm:text-6xl xl:text-7xl">
              Henderson&rsquo;s
              <br />
              indoor
              <br />
              <span className="text-gold-soft">golf club.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/85 md:mx-0">
              A restaurant, a bar and five private TrackMan bays on Lake Mead
              Parkway. Open to the public, every day.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <BookButton variant="gold" size="lg" withArrow />
              <ReserveButton source="home_hero" variant="ghost-light" size="lg" />
              <Link href="/food-drink" className="text-cta text-cream">
                Menu
              </Link>
            </div>
          </Reveal>

          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-3 border-t border-cream/15 md:mx-0">
            {[
              { k: "Private bays", v: String(golf.bays) },
              { k: "Rates from", v: `${nonPeak.price}`, u: nonPeak.unit },
              { k: "Open daily until", v: "10 PM" },
            ].map((f, i) => (
              <div
                key={f.k}
                className={`py-5 ${i > 0 ? "border-l border-cream/15 pl-4 sm:pl-6" : ""}`}
              >
                <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-cream/55 sm:text-[0.7rem]">{f.k}</dt>
                <dd className="font-display mt-2 text-2xl font-semibold text-cream sm:text-3xl">
                  {f.v}
                  {f.u && <span className="ml-1 text-sm font-light text-cream/60">{f.u}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================ HOLIDAY DEALS (auto-expires) ===== */}
      <HolidayDeals />

      {/* ================================================= REVIEWS ===== */}
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="kicker text-muted">From our guests</p>
              <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl">
                {googleReviews.rating}{" "}
                <span className="text-gold" aria-hidden>★★★★★</span>
                <span className="sr-only">out of 5 stars</span>
              </h2>
              <p className="mt-3 text-ink/70">
                From {googleReviews.count} reviews on Google.
              </p>
            </Reveal>
            <a
              href={googleReviews.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cta text-ink"
            >
              Read all reviews <span aria-hidden>→</span>
            </a>
          </div>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {googleReviews.quotes.map((q) => (
              <StaggerItem key={q.name}>
                <figure className="flex h-full flex-col border-t border-ink/15 pt-6">
                  <span className="text-sm tracking-[0.2em] text-gold" aria-hidden>★★★★★</span>
                  <blockquote className="font-display mt-4 flex-1 text-xl leading-snug text-ink">
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <figcaption className="eyebrow mt-5 text-ink/60">{q.name} · Google</figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================================ UNDER ONE ROOF ===== */}
      <section className="bg-black text-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="kicker text-gold-soft">01 · Under one roof</p>
            <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Dinner at the table,{" "}
              <span className="text-gold-soft">golf in the next room.</span>
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            {rooms.map((r) => (
              <StaggerItem key={r.title}>
                <div className="group relative">
                  <div className="relative aspect-[4/5] overflow-hidden bg-green-deep">
                    <Image
                      src={r.image}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="reel-grade object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />
                  </div>
                  <h3 className="font-display mt-6 text-3xl font-semibold">{r.title}</h3>
                  <p className="mt-3 text-cream/75">{r.body}</p>
                  <Link
                    href={r.href}
                    className="text-cta mt-5 text-cream after:absolute after:inset-0 after:content-['']"
                  >
                    {r.cta} <span aria-hidden>→</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================================================== THE BAYS ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="kicker text-gold-soft">02 · The bays</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Each bay is <span className="text-gold-soft">a room of its own.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              TrackMan, a full-size screen and seats for up to {golf.players}.
              Priced by the bay, not by the head, with dinner served where you
              play.
            </p>

            <dl className="mt-10 max-w-md">
              {golf.rates.map((r) => (
                <div
                  key={r.name}
                  className="flex items-baseline gap-4 border-b border-cream/10 py-4"
                >
                  <dt className="eyebrow text-cream/70">{r.name}</dt>
                  <span className="leader" aria-hidden />
                  <dd className="font-display text-2xl font-semibold">
                    {r.price}
                    <span className="ml-0.5 text-xs font-light text-cream/55">{r.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-md text-sm text-cream/50">
              Peak: {golf.rates[1].note}. Members book bay time free. The
              member rate applies only to hours beyond their plan.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <BookButton variant="gold" size="lg" withArrow />
              <Link href="/golf-booking" className="text-cta text-cream">
                Rates and details <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.bayCinematic}
                  alt="A private TrackMan bay with leather seating at Chip Shots"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="reel-grade object-cover"
                />
              </div>
              <figcaption className="mt-4 flex justify-between text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">
                <span>{golf.bays} private bays</span>
                <span>TrackMan iO</span>
                <span>{golf.courses} courses</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* =========================================== KITCHEN AND BAR ===== */}
      <section className="bg-cream text-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.clubRoom}
                alt="The dining room at Chip Shots, looking toward the bar"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="reel-grade object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-4 hidden aspect-square w-44 overflow-hidden border-8 border-cream sm:block">
              <Image
                src="/images/day-burger.jpg"
                alt="A burger with onion rings in the dining room at lunch"
                fill
                sizes="176px"
                className="reel-grade object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-muted">03 · The kitchen &amp; bar</p>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            A good table,{" "}
            <span className="text-green-soft">with or without golf.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink">
            Lunch with the kids, dinner with friends, a round after work.
          </p>
          <p className="mt-4 max-w-md text-ink/75">
            Plenty of our regulars have never booked a bay. They come for
            lunch, dinner, a drink at the bar or brunch on Sunday. The dining
            room and patio keep the same hours we do.
          </p>
          <ul className="mt-8 max-w-md">
            {[
              ["Lunch & dinner", "Daily"],
              ["Happy hour", "Mon–Fri · 3–6 PM"],
              ["Prime rib brunch", "1st & 3rd Sundays · 10 AM–1 PM"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline gap-4 border-b border-line py-3.5">
                <span className="eyebrow text-ink/70">{k}</span>
                <span className="leader" aria-hidden />
                <span className="text-sm text-ink/80">{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-7">
            <ButtonLink href="/food-drink" variant="green" size="lg" withArrow>
              Menu
            </ButtonLink>
            {orderOnlineLive && (
              <a
                href={business.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta text-ink"
              >
                Order pickup <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
      </section>

      {/* ================================================= HENDERSON ===== */}
      <section className="bg-green text-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden outline outline-1 outline-offset-[14px] outline-cream/15">
              <Image
                src="/images/day-patio.jpg"
                alt="The sunny patio at Monument at Calico Ridge, outside Chip Shots"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="reel-grade object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker text-gold-soft">04 · East Henderson</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Owned by a family{" "}
              <span className="text-gold-soft">that lives down the road.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/75">
              Chip Shots Golf Club is veteran-owned and run by the Mizell
              family.
            </p>
            <p className="mt-8 flex max-w-md flex-wrap gap-x-5 gap-y-2 text-[0.7rem] uppercase tracking-[0.2em] text-cream/55">
              {neighborhoods.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </p>
            <Link href="/about" className="text-cta mt-10 text-cream">
              Our story <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================================ PRIVATE EVENTS ===== */}
      <section className="bg-black text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="kicker text-gold-soft">05 · Private events</p>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl">
            From one bay <span className="text-gold-soft">to the whole house.</span>
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
            Every party is quoted to fit, and one person on our side looks
            after the food, the bar and the tee sheet.
          </p>
          <div className="mt-9">
            <ButtonLink href="/holiday-parties" variant="gold" size="lg" withArrow>
              Plan an event
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="border-t border-cream/15">
            {occasions.map((o, i) => (
              <li key={o.title}>
                <Link
                  href={o.href}
                  className="group flex items-baseline gap-6 border-b border-cream/15 py-5 transition-colors hover:text-gold-soft"
                >
                  <span className="text-xs tracking-[0.15em] text-gold-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-semibold text-cream group-hover:text-gold-soft">
                    {o.title}
                  </span>
                  <span className="ml-auto text-cream/40 transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
      </section>

      {/* ================================================= THIS WEEK ===== */}
      {next.length > 0 && (
        <section className="bg-green-deep text-cream">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <p className="kicker text-gold-soft">06 · On the calendar</p>
                <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl">
                  What&rsquo;s on.
                </h2>
              </Reveal>
              <Link href="/events" className="text-cta text-cream">
                Full calendar <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-12 border-t border-cream/15">
              {next.map((e) => {
                const d = formatEventDate(e.date);
                return (
                  <UntilDate key={e.date + e.title} until={e.date}>
                    <div className="grid gap-2 border-b border-cream/15 py-6 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-8">
                      <p className="eyebrow text-cream/60">
                        {d.weekday} · {d.day}
                      </p>
                      <p className="font-display text-2xl font-semibold text-cream">
                        {e.title}
                      </p>
                      <p className="text-sm text-cream/70">{e.time}</p>
                    </div>
                  </UntilDate>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================== VISIT ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="kicker text-gold-soft">07 · Visit</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Where <span className="text-gold-soft">to find us.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              At Monument at Calico Ridge, the plaza with the clock tower, set
              back from Lake Mead Parkway. Look for the striped awnings.
            </p>
            <address className="mt-8 not-italic text-cream/85">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{" "}
              {business.address.postalCode}
              <br />
              <a href={business.phoneHref} className="hover:text-gold-soft">
                {business.phone}
              </a>
            </address>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <ButtonLink href={business.mapLink} external variant="gold" size="lg" withArrow>
                Get directions
              </ButtonLink>
              {orderOnlineLive && liveDelivery.length > 0 && (
                <span className="text-sm text-cream/60">
                  Delivery on{" "}
                  {liveDelivery.map((d, i) => (
                    <span key={d.key}>
                      {i > 0 && " and "}
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream underline decoration-gold/60 underline-offset-4 hover:text-gold-soft"
                      >
                        {d.name}
                      </a>
                    </span>
                  ))}
                </span>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-cream/55">Hours</p>
            <dl className="mt-4">
              {hours.map((h) => (
                <div key={h.day} className="flex items-baseline gap-4 border-b border-cream/10 py-3.5">
                  <dt className="text-sm text-cream/85">{h.day}</dt>
                  <span className="leader" aria-hidden />
                  <dd className="text-sm text-cream/70">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden ring-1 ring-cream/10">
              <iframe
                src={business.mapEmbed}
                title="Map: Chip Shots Golf Club at Monument at Calico Ridge, Henderson"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================= END CARD ===== */}
      <ReelEndCard title="Book a bay" poster="/videos/hero/wide.jpg">
        <BookButton variant="gold" size="lg" withArrow />
        <ReserveButton source="home_endcard" variant="ghost-light" size="lg" />
      </ReelEndCard>
    </>
  );
}
