import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import BookButton from "@/components/BookButton";
import ReserveButton from "@/components/ReserveButton";
import UntilDate from "@/components/ui/UntilDate";
import HolidayDeals from "@/components/HolidayDeals";
import { ReelSequence, ReelCaption, ReelShade, ReelEndCard } from "@/components/ui/reel";
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
    caption: "Full kitchen & bar",
    captionSub: "Lunch & dinner, every day",
    body: "Burgers, ribs, steaks and salads from a full kitchen at lunch and dinner, and prime rib brunch on the first and third Sundays.",
    image: img.clubService,
    alt: "A server carrying plates of nachos and wings through the dining room at Chip Shots",
    href: "/food-drink",
    cta: "Menu",
  },
  {
    no: "02",
    title: "Play",
    caption: "Every shot, measured",
    captionSub: "5 private TrackMan bays",
    body: `Five private TrackMan bays and ${golf.courses} courses. Clubs are on hand.`,
    image: img.clubGolfer,
    alt: "A guest mid-swing in a private TrackMan simulator bay at Chip Shots",
    href: "/golf-booking",
    cta: "The bays",
  },
  {
    no: "03",
    title: "Watch",
    caption: "Every game, every screen",
    captionSub: "NFL Sunday Ticket",
    body: "Screens over the bar, a TV in every bay and NFL Sunday Ticket. On weekends, breakfast is served from the first kickoff.",
    image: img.clubGuests,
    alt: "Guests at the bar watching a game at Chip Shots",
    href: "/events",
    cta: "Events",
  },
];

const reels = [
  {
    src: "/videos/home/golf.mp4",
    poster: "/videos/home/golf.jpg",
    label: "Guests swinging in a TrackMan bay and a shot landing on the course",
    title: "Play the world\u2019s great courses",
    sub: "500+ courses on 5 TrackMan bays",
  },
  {
    src: "/videos/home/food.mp4",
    poster: "/videos/home/food.jpg",
    label: "Burgers on the griddle and a finished burger",
    title: "Burgers, wings & ribs",
    sub: "Open daily for lunch & dinner",
  },
  {
    src: "/videos/home/bar.mp4",
    poster: "/videos/home/bar.jpg",
    label: "A martini pour, a citrus cocktail and an espresso martini",
    title: "Cocktails, wine & beer",
    sub: "A full bar, open every day",
  },
  {
    src: "/videos/home/wings.mp4",
    poster: "/videos/home/wings.jpg",
    label: "Wings tossed in sauce and plated",
    title: "Wings & shareables",
    sub: "Happy hour Mon\u2013Fri, 3\u20136 PM",
  },
  {
    src: "/videos/home/room.mp4",
    poster: "/videos/home/room.jpg",
    label: "The dining room and a table raising a toast",
    title: "Your new local in Henderson",
    sub: "Golf, food & drinks",
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
      {/* One shot at a time, like the reels: golf, then food, then the bar.
          Full screen on phones; a large reel frame beside the title on desktop. */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black text-cream lg:justify-center">
        {/* Phone: the edit fills the screen behind the title. */}
        <ReelSequence
          shots={reels}
          className="absolute inset-0 -z-10 lg:hidden"
          captionClassName="hidden"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/10 lg:hidden" aria-hidden />
        {/* Desktop: soft glow of the first shot behind everything. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={reels[0].poster}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 hidden h-full w-full scale-110 object-cover opacity-30 blur-3xl lg:block"
        />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black via-black/85 to-black/40 lg:block" aria-hidden />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-10 pt-44 sm:px-8 lg:grid-cols-[minmax(0,40rem)_auto] lg:justify-center lg:gap-20 lg:pb-14 lg:pt-36 xl:gap-28">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="reel-sub text-gold-soft">
                Henderson, Nevada · {business.address.street}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-[2.5rem] font-bold uppercase leading-[1.02] tracking-[0.04em] text-cream sm:text-6xl xl:text-[4.25rem]">
                Henderson&rsquo;s
                <br />
                indoor
                <br />
                <span className="text-gold-soft">golf club.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80 lg:mx-0">
                A restaurant, a bar and five private TrackMan bays on Lake Mead
                Parkway. Open to everyone, every day.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <BookButton variant="gold" size="lg" withArrow />
                <ReserveButton source="home_hero" variant="ghost-light" size="lg" />
                <Link href="/food-drink" className="text-cta text-cream">
                  Menu
                </Link>
              </div>
            </Reveal>

            <dl className="mx-auto mt-12 grid max-w-xl grid-cols-3 border-t border-cream/15 lg:mx-0">
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

          <Reveal delay={0.12} className="hidden lg:block">
            <ReelSequence
              shots={reels}
              className="relative aspect-[9/16] w-[min(25rem,calc((100svh-10rem)*0.5625))] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-cream/10"
            />
          </Reveal>
        </div>
      </section>

      {/* ============================ HOLIDAY DEALS (auto-expires) ===== */}
      <HolidayDeals />

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
                    <ReelShade />
                    <ReelCaption
                      title={r.caption}
                      sub={r.captionSub}
                      className="absolute inset-x-4 bottom-8"
                    />
                  </div>
                  <p className="mt-6 text-cream/75">{r.body}</p>
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
      <section className="bg-black text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.clubRibs}
                alt="Barbecue ribs with mashed potatoes at Chip Shots"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="reel-grade object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-4 hidden aspect-square w-44 overflow-hidden border-8 border-black sm:block">
              <Image
                src={img.foodBurger}
                alt="A bacon cheeseburger and fries at the bar"
                fill
                sizes="176px"
                className="reel-grade object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-gold-soft">03 · The kitchen &amp; bar</p>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl">
            A good table,{" "}
            <span className="text-gold-soft">with or without golf.</span>
          </h2>
          <p className="mt-6 max-w-md text-cream/75">
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
              <li key={k} className="flex items-baseline gap-4 border-b border-cream/15 py-3.5">
                <span className="eyebrow text-cream/70">{k}</span>
                <span className="leader" aria-hidden />
                <span className="text-sm text-cream/80">{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-7">
            <ButtonLink href="/food-drink" variant="gold" size="lg" withArrow>
              Menu
            </ButtonLink>
            {orderOnlineLive && (
              <a
                href={business.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta text-cream"
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
                src={img.clubPatio}
                alt="The patio and putting greens outside Chip Shots in Henderson"
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
            <div className="relative mt-10 aspect-[16/9] overflow-hidden">
              <Image
                src={img.clubDusk}
                alt="The Chip Shots storefront with striped awnings at dusk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="reel-grade object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================= END CARD ===== */}
      <ReelEndCard title="Book a bay" url="chipshotshenderson.com" poster="/videos/home/bar.jpg">
        <BookButton variant="gold" size="lg" withArrow />
        <ReserveButton source="home_endcard" variant="ghost-light" size="lg" />
      </ReelEndCard>
    </>
  );
}
