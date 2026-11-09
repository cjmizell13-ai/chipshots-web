import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlateHero from "@/components/ui/PlateHero";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import BookButton from "@/components/BookButton";
import Gallery from "@/components/Gallery";
import { business, img, golf, bayWeek, rangeCard, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Golf & Booking — TrackMan Simulator Bays",
  description:
    "Five private TrackMan simulator bays with 500+ courses in Henderson, NV. Up to four players, clubs included. Book online: non-peak $40/hr, peak $50/hr, members book free.",
  alternates: { canonical: "/golf-booking" },
};

const inEveryBay = [
  {
    title: "TrackMan iO",
    body: "A tour-grade launch monitor that reads carry, spin, club path and ball speed on every shot.",
  },
  {
    title: "A room of your own",
    body: `Each bay is private, with lounge seating, its own screen and room for up to ${golf.players} players.`,
  },
  {
    title: "Dinner at the bay",
    body: "Order from the full kitchen and bar. A server brings it to you, so nobody misses a turn.",
  },
  {
    title: "Clubs included",
    body: "Use ours at no charge, or bring your own. Come straight from work if you like.",
  },
];

const waysToPlay = [
  ["A full round", "Eighteen holes, or a quick nine"],
  ["The range", "Every club in the bag, with the numbers"],
  ["Closest to the pin", "One shot each, closest wins"],
  ["On-screen games", "For the non-golfers in the group"],
];

// The questions people ask before booking a bay, pulled from the site FAQ so
// the answers stay the same in both places.
const bayQuestions = [
  "Do I need to know how to golf?",
  "How much does a bay cost?",
  "How many people can play in one bay?",
  "Do you provide golf clubs?",
  "Do I need a reservation, or can I walk in?",
  "Is there a membership?",
];

export default function GolfBooking() {
  const [nonPeak, peak, member] = golf.rates;
  const questions = bayQuestions
    .map((q) => faqs.find((f) => f.q === q))
    .filter((f): f is (typeof faqs)[number] => Boolean(f));

  return (
    <>
      <PlateHero
        kicker={`Play · ${golf.bays} private bays`}
        title="Your own bay."
        accent="Your own tee time."
        intro="Five private TrackMan bays, priced by the hour for the whole bay. Food and drinks come to you."
        image={img.clubGolfer}
        alt="A guest lining up a drive in a private TrackMan bay at Chip Shots"
        position="50% 55%"
        actions={
          <>
            <BookButton variant="gold" size="lg" withArrow>
              Check availability
            </BookButton>
            <a href="#rates" className="text-cta text-cream">
              Rates <span aria-hidden>↓</span>
            </a>
          </>
        }
        facts={[
          { label: "Private bays", value: String(golf.bays) },
          { label: "Per bay, per hour", value: `From ${nonPeak.price}` },
          { label: "Players per bay", value: `Up to ${golf.players}` },
        ]}
      />

      {/* =================================================== RATES ===== */}
      <section
        id="rates"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="kicker text-muted">01 · Rates</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Priced by the hour,{" "}
              <span className="text-green-soft">not by the person.</span>
            </h2>
            <p className="mt-6 max-w-md text-ink/75">
              One price covers the bay for up to {golf.players} players, clubs
              included. Split it however you like.
            </p>

            <dl className="mt-10 max-w-md">
              {[nonPeak, peak, member].map((r) => (
                <div
                  key={r.name}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <dt className="eyebrow text-ink/70">{r.name}</dt>
                  <span className="leader" aria-hidden />
                  <dd className="font-display text-3xl font-semibold text-ink">
                    {r.price}
                    <span className="ml-0.5 text-xs font-light text-ink/55">
                      {r.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-md text-sm text-ink/60">
              Members book bay time free and pay the member rate for hours
              beyond their plan.{" "}
              <Link
                href="/memberships"
                className="text-ink underline decoration-gold decoration-1 underline-offset-4 hover:text-green-soft"
              >
                See memberships
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <table className="w-full border-collapse text-left">
              <caption className="eyebrow pb-4 text-left text-muted">
                When each rate applies
              </caption>
              <thead>
                <tr className="border-y border-ink/15">
                  <th className="eyebrow py-3 pr-4 font-normal text-ink/60">Day</th>
                  <th className="eyebrow py-3 pr-4 font-normal text-ink/60">
                    Peak · {peak.price}
                  </th>
                  <th className="eyebrow py-3 font-normal text-ink/60">
                    Non-peak · {nonPeak.price}
                  </th>
                </tr>
              </thead>
              <tbody>
                {bayWeek.map((d) => (
                  <tr key={d.days} className="border-b border-ink/15 align-baseline">
                    <th
                      scope="row"
                      className="font-display py-4 pr-4 text-lg font-semibold text-ink sm:text-xl"
                    >
                      {d.days}
                    </th>
                    <td className="py-4 pr-4 text-[0.95rem] text-ink/85">{d.peak}</td>
                    <td className="py-4 text-[0.95rem] text-ink/85">
                      {d.nonPeak || <span className="text-ink/35">None</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="mt-6 space-y-2 text-sm text-ink/65">
              <li>
                A booking that runs across both is priced by the half hour.
              </li>
              <li>
                Up to four golfers in a bay, and up to six people with
                spectators. Bigger groups book a second bay.
              </li>
            </ul>

            <div className="mt-10 border-t border-ink/15 pt-6">
              <p className="eyebrow text-muted">Range Card</p>
              <p className="mt-3 text-ink/85">
                <span className="font-display text-2xl font-semibold text-ink">
                  {rangeCard.price}
                </span>{" "}
                buys {rangeCard.detail}. No membership needed, and it never
                expires.
              </p>
              <a
                href={rangeCard.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta mt-5 text-ink"
              >
                Buy a Range Card <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* In every bay */}
        <ul className="mt-24 grid gap-x-10 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {inEveryBay.map((f) => (
            <li key={f.title}>
              <h3 className="font-display text-2xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-[0.95rem] text-ink/70">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================= COURSES ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.bayCoastalChairs}
                  alt="A coastal hole on the screen of a private bay, seen from two leather club chairs"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex justify-between text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">
                <span>TrackMan iO</span>
                <span>{golf.courses} courses</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker text-gold-soft">02 · The courses</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              {golf.courses} courses,{" "}
              <span className="text-gold-soft">
                from St Andrews to Pebble Beach.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              Play a course you know from television, work through your bag on
              the range, or keep it light with a game. TrackMan keeps score and
              handicaps the games, so first-timers and regulars can play in
              the same group.
            </p>
            <dl className="mt-10 max-w-md">
              {waysToPlay.map(([k, v]) => (
                <div
                  key={k}
                  className="grid gap-x-6 border-b border-cream/10 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline"
                >
                  <dt className="font-display text-xl font-semibold">{k}</dt>
                  <dd className="text-sm text-cream/65">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ==================================================== BOOK ===== */}
      <section id="book" className="scroll-mt-24 bg-cream-2">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="kicker text-muted">03 · Book a bay</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
                Reserve <span className="text-green-soft">your bay.</span>
              </h2>
              <p className="mt-6 max-w-sm text-ink/75">
                Pick a bay, a day and a time, and the open bays show right
                away. Walk-ins are welcome whenever a bay is free, but booking
                ahead is the sure way to get the time you want.
              </p>
              <dl className="mt-8 max-w-sm">
                <div className="flex items-baseline gap-4 border-b border-ink/15 py-3.5">
                  <dt className="eyebrow text-ink/60">Call</dt>
                  <span className="leader" aria-hidden />
                  <dd>
                    <a
                      href={business.phoneHref}
                      className="text-ink hover:text-green-soft"
                    >
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 border-b border-ink/15 py-3.5">
                  <dt className="eyebrow text-ink/60">Groups &amp; parties</dt>
                  <span className="leader" aria-hidden />
                  <dd>
                    <Link href="/events#inquire" className="text-ink hover:text-green-soft">
                      Ask for a quote
                    </Link>
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <ButtonLink
                  href={business.booking}
                  external
                  variant="outline"
                  size="md"
                  withArrow
                >
                  Open booking in a new tab
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-line bg-white">
              <iframe
                src={business.booking}
                title="Book a simulator bay at Chip Shots"
                loading="lazy"
                className="h-[720px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ GOOD TO KNOW ===== */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="kicker text-muted">04 · Good to know</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Before you <span className="text-green-soft">tee off.</span>
            </h2>
            <Link href="/faq" className="text-cta mt-8 text-ink">
              All questions <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <dl className="border-t border-ink/15">
            {questions.map((f) => (
              <div key={f.q} className="border-b border-ink/15 py-6">
                <dt className="font-display text-2xl font-semibold text-ink">
                  {f.q}
                </dt>
                <dd className="mt-3 max-w-2xl text-[0.95rem] text-ink/75">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================================================= GALLERY ===== */}
      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <p className="kicker text-muted">Inside the bays</p>
        <div className="mt-8">
          <Gallery
            images={[
              { src: img.bayLounge, alt: "Lounge seating inside a Chip Shots simulator bay" },
              { src: img.bayMoody, alt: "A Chip Shots simulator bay lit for evening play" },
              { src: img.heroBay, alt: "Wide view of a TrackMan bay with a coastal course on screen" },
              { src: img.bayDesertData, alt: "TrackMan shot data on the bay screen" },
              { src: img.bayRoomWide, alt: "The TrackMan activity menu on a bay screen" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
