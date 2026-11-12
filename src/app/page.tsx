import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import BookButton from "@/components/BookButton";
import UntilDate from "@/components/ui/UntilDate";
import {
  business,
  img,
  golf,
  hours,
  liveDelivery,
  orderOnlineLive,
  promoActive,
  upcomingEvents,
} from "@/lib/site";

const rooms = [
  {
    no: "01",
    title: "Dine",
    body: "A full kitchen that cooks like a restaurant, because it is one. Burgers, ribs, steaks and salads at lunch and dinner, and a prime rib brunch on the first and third Sundays.",
    image: img.clubService,
    alt: "A server carrying plates of nachos and wings through the dining room at Chip Shots",
    href: "/food-drink",
    cta: "See the menu",
  },
  {
    no: "02",
    title: "Play",
    body: `Five private TrackMan bays with ${golf.courses} courses. Play eighteen at a course you know, work on your wedges, or hit a few between bites. Clubs are here if you need them.`,
    image: img.clubGolfer,
    alt: "A guest mid-swing in a private TrackMan simulator bay at Chip Shots",
    href: "/golf-booking",
    cta: "See the bays",
  },
  {
    no: "03",
    title: "Watch",
    body: "Screens over the bar, a TV in every bay and NFL Sunday Ticket. Saturday and Sunday are built around the games, with breakfast from the first kickoff.",
    image: img.clubGuests,
    alt: "Guests at the bar watching a game at Chip Shots",
    href: "/events",
    cta: "What's on",
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
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-green-deep">
        <Image
          src={img.clubRoom}
          alt="The dining room and bar at Chip Shots in Henderson, Nevada"
          fill
          preload
          sizes="100vw"
          className="kenburns object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/45 to-green-deep/60" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-44 sm:px-8">
          <Reveal>
            <p className="kicker text-gold-soft">
              Henderson, Nevada · {business.address.street}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-7 max-w-4xl text-[2.7rem] font-bold uppercase leading-[1.02] tracking-[0.04em] text-cream sm:text-7xl">
              The clubhouse
              <br />
              is open <span className="text-gold-soft">to everyone.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg text-cream/75">
              A restaurant, a full bar and five private golf bays under
              one roof. No membership needed and no tee time at dawn.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <BookButton variant="gold" size="lg" withArrow />
              <ButtonLink href="/food-drink" variant="ghost-light" size="lg">
                See the menu
              </ButtonLink>
            </div>
          </Reveal>

          <dl className="mt-16 grid grid-cols-1 border-t border-cream/15 sm:grid-cols-3">
            {[
              { k: "Private bays", v: String(golf.bays) },
              { k: "Rates from", v: `${nonPeak.price}`, u: nonPeak.unit },
              { k: "Open daily until", v: "10 PM" },
            ].map((f, i) => (
              <div
                key={f.k}
                className={`py-6 sm:py-7 ${i > 0 ? "border-t border-cream/15 sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
              >
                <dt className="eyebrow text-cream/55">{f.k}</dt>
                <dd className="font-display mt-2 text-3xl font-semibold text-cream">
                  {f.v}
                  {f.u && <span className="ml-1 text-sm font-light text-cream/60">{f.u}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================ UNDER ONE ROOF ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="kicker text-muted">01 · Under one roof</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Come for dinner, a round after work,{" "}
            <span className="text-green-soft">or Sunday&rsquo;s game.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-12 md:grid-cols-3 md:gap-9">
          {rooms.map((r) => (
            <StaggerItem key={r.title}>
              <Link href={r.href} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden bg-green-deep">
                  <Image
                    src={r.image}
                    alt={r.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 border border-cream/50 bg-green-deep/40 px-2.5 py-1 text-[0.65rem] tracking-[0.2em] text-cream backdrop-blur-sm">
                    {r.no}
                  </span>
                </div>
                <h3 className="font-display mt-7 text-4xl font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-4 text-ink/75">{r.body}</p>
                <span className="text-cta mt-6 text-ink">
                  {r.cta} <span aria-hidden>→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ================================================== THE BAYS ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="kicker text-gold-soft">02 · The bays</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Your own bay. <span className="text-gold-soft">Your own tee time.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              Every bay is private, with a TrackMan launch monitor, a
              full-size screen and room for up to {golf.players} players. Food
              and drinks come to you. Bays are priced by the hour, not by the
              person.
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
              Peak: {golf.rates[1].note}. Members book bay time free; the
              member rate is only for hours beyond their plan.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <BookButton variant="gold" size="lg" withArrow>
                Check availability
              </BookButton>
              <Link href="/golf-booking" className="text-cta text-cream">
                Rates &amp; details <span aria-hidden>→</span>
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
                  className="object-cover"
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
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.clubRibs}
                alt="Barbecue ribs with mashed potatoes at Chip Shots"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-4 hidden aspect-square w-44 overflow-hidden border-8 border-cream sm:block">
              <Image
                src={img.foodBurger}
                alt="A bacon cheeseburger and fries at the bar"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-muted">03 · The kitchen &amp; bar</p>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            You don&rsquo;t need a club in your hand{" "}
            <span className="text-green-soft">to get a table.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/75">
            Plenty of our regulars have never booked a bay. They come for
            lunch, for dinner with the family, for a drink at the bar and for
            brunch on Sunday. The dining room and patio are open whenever we
            are.
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
              See the menu
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
      </section>

      {/* ================================================= HENDERSON ===== */}
      <section className="bg-green text-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden outline outline-1 outline-offset-[14px] outline-cream/15">
              <Image
                src={img.clubPatio}
                alt="The patio and putting greens outside Chip Shots in Henderson"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker text-gold-soft">04 · East Henderson</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              This side of town was missing a place like this.{" "}
              <span className="text-gold-soft">So we built it.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/75">
              Chip Shots is owned and run by the Mizell family. We are
              veteran-owned, we live here, and we opened the kind of place we
              wanted in our own neighborhood: good food, a proper bar and golf
              you can play in any weather.
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
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="kicker text-muted">05 · Private events</p>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Bring <span className="text-green-soft">the whole group.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/75">
            Reserve a bay, a few bays or the whole building. Every event is
            quoted to fit your group, with one person on our side handling the
            food, the bar and the tee sheet.
          </p>
          <div className="mt-9">
            <ButtonLink href="/holiday-parties" variant="green" size="lg" withArrow>
              Plan an event
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="border-t border-line">
            {occasions.map((o, i) => (
              <li key={o.title}>
                <Link
                  href={o.href}
                  className="group flex items-baseline gap-6 border-b border-line py-5 transition-colors hover:text-green-soft"
                >
                  <span className="text-xs tracking-[0.15em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-semibold text-ink group-hover:text-green-soft">
                    {o.title}
                  </span>
                  <span className="ml-auto text-ink/40 transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* ================================================= THIS WEEK ===== */}
      {next.length > 0 && (
        <section className="bg-cream-2">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <p className="kicker text-muted">06 · On the calendar</p>
                <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
                  What&rsquo;s on.
                </h2>
              </Reveal>
              <Link href="/events" className="text-cta text-ink">
                Full calendar <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-12 border-t border-ink/15">
              {next.map((e) => {
                const d = formatEventDate(e.date);
                return (
                  <UntilDate key={e.date + e.title} until={e.date}>
                    <div className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-8">
                      <p className="eyebrow text-ink/60">
                        {d.weekday} · {d.day}
                      </p>
                      <p className="font-display text-2xl font-semibold text-ink">
                        {e.title}
                      </p>
                      <p className="text-sm text-ink/70">{e.time}</p>
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
              Easy to find <span className="text-gold-soft">once you know.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              We&rsquo;re set back from Lake Mead Parkway, in the plaza with
              the clock tower. Look for the striped awnings.
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
            <div className="relative mt-10 aspect-[16/9] overflow-hidden">
              <Image
                src={img.clubDusk}
                alt="The Chip Shots storefront with striped awnings at dusk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
