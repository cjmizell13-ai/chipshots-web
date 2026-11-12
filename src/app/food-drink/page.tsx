import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlateHero from "@/components/ui/PlateHero";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { AmpText } from "@/components/ui/amp";
import BookButton from "@/components/BookButton";
import ReserveButton from "@/components/ReserveButton";
import OrderOptions from "@/components/OrderOptions";
import UntilDate from "@/components/ui/UntilDate";
import OnWeekday from "@/components/ui/OnWeekday";
import MenuNav, { type MenuNavItem } from "@/components/menu/MenuNav";
import TodayFeature from "@/components/menu/TodayFeature";
import {
  business,
  img,
  orderOnlineLive,
  weekFeatures,
  brunch,
  upcomingEvents,
  promoActive,
  foodMenu,
  foodMore,
  foodAdvisory,
  dessertsNote,
  shakes,
  shakes21,
  drafts,
  pitchers,
  bottlesCans,
  wine,
  wineBottles,
  cocktails,
  spirits,
  happyHour,
  type MenuItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Food & Drink — Breakfast All Day, Burgers, Wings & Full Bar",
  description:
    "The full Chip Shots menu: breakfast all day, burgers, ribs, salmon, wings, shareables and salads, plus drafts, wine, signature cocktails and spirits. Happy hour Mon–Fri 3–6 PM and prime rib brunch on the first and third Sundays in Henderson, NV.",
  alternates: { canonical: "/food-drink" },
};

// Short anchor id and bar label for each printed-menu section.
const sectionNav: Record<string, MenuNavItem> = {
  "Breakfast All Day": { id: "breakfast", label: "Breakfast" },
  Shareables: { id: "shareables", label: "Shareables" },
  "Salads & Wraps": { id: "salads", label: "Salads" },
  Soups: { id: "soups", label: "Soups" },
  "Wings & Tenders": { id: "wings", label: "Wings" },
  "Signature Burgers": { id: "burgers", label: "Burgers" },
  Classics: { id: "classics", label: "Classics" },
  Handhelds: { id: "handhelds", label: "Handhelds" },
  "A La Carte Sides": { id: "sides", label: "Sides" },
  "Kids Meals": { id: "kids", label: "Kids" },
};

const slug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const navFor = (title: string): MenuNavItem =>
  sectionNav[title] ?? { id: slug(title), label: title };

const navItems: MenuNavItem[] = [
  ...foodMenu.map((s) => navFor(s.title)),
  { id: "shakes", label: "Shakes" },
  { id: "week", label: "This week" },
  { id: "happy-hour", label: "Happy hour" },
  { id: "cocktails", label: "Cocktails" },
  { id: "beer", label: "Beer" },
  { id: "wine", label: "Wine" },
  { id: "spirits", label: "Spirits" },
];

const plates = [
  { src: img.dineWings, alt: "Glazed bone-in wings with celery, carrots and a draft beer on the bar", caption: "Bone-in wings" },
  { src: img.dineTotchos, alt: "Loaded tater tots with nacho cheese, bacon, green onion and ranch", caption: "Loaded Totchos" },
  { src: img.dineSliders, alt: "Three cheeseburger sliders with a stack of onion rings", caption: "Slider Trio" },
  { src: img.dineShake, alt: "A hand-spun shake with whipped cream and chocolate drizzle", caption: "Hand-spun shakes" },
];

const pours = [
  { src: img.barEspressoMartini, alt: "An espresso martini on the marble bar at Chip Shots", caption: "Espresso Martini" },
  { src: img.barMule, alt: "A mule in a copper mug with a lime wheel", caption: "A mule, in copper" },
];

function formatDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** One menu line: name, dotted leader, price, with the description under it. */
function Row({
  item,
  tone = "light",
  number,
}: {
  item: MenuItem;
  tone?: "light" | "dark";
  number?: string;
}) {
  const dark = tone === "dark";
  return (
    <li
      className={`flex gap-4 border-b py-4 ${dark ? "border-cream/12" : "border-line"}`}
    >
      {number && (
        <span
          className={`w-6 shrink-0 pt-[0.45rem] text-[0.65rem] tracking-[0.16em] ${dark ? "text-cream/45" : "text-muted"}`}
        >
          {number}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <span
            className={`font-display text-[1.3rem] font-semibold leading-snug ${dark ? "text-cream" : "text-ink"}`}
          >
            {item.name}
          </span>
          <span className="leader min-w-5" aria-hidden />
          <span
            className={`shrink-0 text-[0.95rem] tabular-nums ${dark ? "text-gold-soft" : "text-ink/85"}`}
          >
            {item.price}
          </span>
        </div>
        {item.desc && (
          <p
            className={`mt-1.5 max-w-[48ch] text-[0.92rem] leading-relaxed ${dark ? "text-cream/60" : "text-ink/65"}`}
          >
            {item.desc}
          </p>
        )}
      </div>
    </li>
  );
}

/** A menu section: its name in a left rail that stays put while the section
 *  scrolls past, and its lines beside it. */
function MenuBlock({
  id,
  title,
  note,
  blurb,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  blurb?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-36 gap-x-16 gap-y-5 border-t border-ink/15 py-12 lg:grid-cols-[14rem_1fr]"
    >
      <header className="lg:sticky lg:top-40 lg:self-start">
        <h3 className="font-display text-3xl font-semibold leading-tight text-ink">
          <AmpText className="text-green-soft">{title}</AmpText>
        </h3>
        {note && <p className="eyebrow mt-3 text-muted">{note}</p>}
        {blurb && (
          <p className="mt-3 text-sm leading-relaxed text-ink/65">{blurb}</p>
        )}
      </header>
      <div>{children}</div>
    </section>
  );
}

export default function FoodDrink() {
  const brunchDates = upcomingEvents.filter(
    (e) => /brunch/i.test(e.title) && promoActive(e.date),
  );
  // Draft beers and their pitchers are listed in the same order.
  const draftRows =
    drafts.length === pitchers.length
      ? drafts.map((d, i) => ({ ...d, pitcher: pitchers[i].price }))
      : null;
  const spiritCount = spirits.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PlateHero
        kicker="Dine · Open daily"
        title="A restaurant first."
        accent="No tee time needed."
        intro="Lunch, dinner and a full bar every day, with brunch on the first and third Sundays. You don't have to book a bay to get a table."
        image={img.dineBurgerBar}
        alt="A bacon cheeseburger and seasoned fries on the bar at Chip Shots"
        position="50% 30%"
        actions={
          <>
            {orderOnlineLive && (
              <ButtonLink href="#order" variant="gold" size="lg" withArrow>
                Order to go
              </ButtonLink>
            )}
            <ReserveButton source="dine_hero" variant="ghost-light" size="lg" />
            <a href="#breakfast" className="text-cta text-cream">
              Read the menu <span aria-hidden>↓</span>
            </a>
          </>
        }
        facts={[
          { label: "Open", value: "Mon–Fri 11 AM · Sat & Sun 10 AM" },
          { label: "Happy hour", value: happyHour.window },
          { label: "Prime rib brunch", value: brunch.when },
        ]}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <TodayFeature />
      </div>

      <div className="mt-10">
        <MenuNav items={navItems} />

        {/* =========================================== THE KITCHEN ===== */}
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 sm:pt-24">
          <Reveal>
            <p className="kicker text-muted">01 · The kitchen</p>
            <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              One menu,{" "}
              <span className="text-green-soft">lunch through dinner.</span>
            </h2>
            <p className="mt-6 max-w-xl text-ink/75">
              Breakfast all day, burgers, plates from the grill and plenty to
              share. Everything here is served in the dining room, at the bar,
              on the patio and in the bays.
            </p>
          </Reveal>

          <div className="mt-14">
            {foodMenu.map((section) => {
              const nav = navFor(section.title);
              return (
                <MenuBlock
                  key={section.title}
                  id={nav.id}
                  title={section.title}
                  note={section.note}
                  blurb={section.blurb}
                >
                  <ul className="grid gap-x-14 md:grid-cols-2">
                    {section.items.map((it) => (
                      <Row key={it.name} item={it} />
                    ))}
                  </ul>
                </MenuBlock>
              );
            })}

            <MenuBlock id="shakes" title="Shakes & Desserts">
              <div className="grid gap-x-14 md:grid-cols-2">
                <div>
                  <p className="eyebrow pb-1 text-muted">Hand-spun</p>
                  <ul>
                    {shakes.map((it) => (
                      <Row key={it.name} item={it} />
                    ))}
                  </ul>
                </div>
                <div className="mt-8 md:mt-0">
                  <p className="eyebrow pb-1 text-muted">Spiked · 21+</p>
                  <ul>
                    {shakes21.map((it) => (
                      <Row key={it.name} item={it} />
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-ink/75">
                <span className="font-display text-[1.3rem] font-semibold text-ink">
                  Desserts
                </span>{" "}
                <span className="ml-2">{dessertsNote}</span>
              </p>
            </MenuBlock>

            <div className="border-t border-ink/15 pt-6 text-sm text-ink/60">
              <p>{foodMore}</p>
              <p className="mt-2 max-w-3xl text-xs">{foodAdvisory}</p>
            </div>
          </div>
        </div>

        {/* ============================================== PLATES ===== */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-24 pt-10 sm:gap-6 sm:px-8 lg:grid-cols-4">
          {plates.map((p) => (
            <figure key={p.caption}>
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-2">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* ====================================== THROUGH THE WEEK ===== */}
        <section id="week" className="scroll-mt-32 bg-cream-2">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
            <Reveal>
              <p className="kicker text-muted">02 · Through the week</p>
              <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
                Something on,{" "}
                <span className="text-green-soft">every day.</span>
              </h2>
            </Reveal>

            <ol className="mt-12 border-t border-ink/15">
              {weekFeatures.map((f) => (
                <li
                  key={f.day}
                  className="grid gap-x-8 gap-y-1 border-b border-ink/15 py-5 sm:grid-cols-[10rem_15rem_1fr] sm:items-baseline"
                >
                  <p className="eyebrow flex items-center gap-3 text-ink/60">
                    {f.day}
                    <OnWeekday dow={f.dow}>
                      <span className="inline-flex items-center gap-1.5 text-green">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                        Today
                      </span>
                    </OnWeekday>
                  </p>
                  <p className="font-display text-2xl font-semibold text-ink">
                    {f.headline}
                  </p>
                  <p className="text-[0.95rem] text-ink/75">
                    {f.detail}
                    {f.also && (
                      <span className="mt-0.5 block text-ink/55">{f.also}</span>
                    )}
                  </p>
                </li>
              ))}
            </ol>

            {/* Brunch */}
            <div className="mt-20 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
              <figure>
                <div className="relative aspect-[16/9] overflow-hidden bg-green-deep">
                  <Image
                    src={img.brunchPrimeRib}
                    alt="Prime rib at the carving station during Sunday brunch at Chip Shots, with a slice being plated"
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                  The carving station at Sunday brunch
                </figcaption>
              </figure>
              <div>
                <h3 className="font-display text-4xl font-semibold leading-[1.1] text-ink">
                  <Link href="/brunch" className="hover:text-green-soft">
                    {brunch.title}
                  </Link>
                </h3>
                <dl className="mt-6">
                  {[
                    ["When", brunch.when],
                    ["Buffet", brunch.prices],
                    ["Add", brunch.drinks],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-ink/15 py-3.5"
                    >
                      <dt className="eyebrow w-16 text-ink/60">{k}</dt>
                      <dd className="text-[0.95rem] text-ink/85">{v}</dd>
                    </div>
                  ))}
                </dl>
                {brunchDates.length > 0 && (
                  <p className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-ink/85">
                    <span className="eyebrow text-ink/60">Next dates</span>
                    {brunchDates.map((e) => (
                      <UntilDate key={e.date} until={e.date}>
                        <span className="font-display text-xl font-semibold">
                          {e.signup ? (
                            <a
                              href={e.signup}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-gold decoration-1 underline-offset-[6px] hover:text-green-soft"
                            >
                              {formatDay(e.date)}
                            </a>
                          ) : (
                            formatDay(e.date)
                          )}
                        </span>
                      </UntilDate>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================== HAPPY HOUR ===== */}
        <section id="happy-hour" className="scroll-mt-32 bg-green-deep text-cream">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="kicker text-gold-soft">03 · Happy hour</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
                Monday to Friday,{" "}
                <span className="text-gold-soft">three to six.</span>
              </h2>
              <p className="mt-6 max-w-md text-cream/70">{happyHour.note}</p>
              <p className="mt-8 border-y border-cream/12 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-cream/70">
                {happyHour.lateWindow}
              </p>
              <Link
                href="/blog/happy-hour-henderson-guide"
                className="text-cta mt-8 text-cream"
              >
                Our guide to happy hour <span aria-hidden>→</span>
              </Link>
              <figure className="mt-12 hidden max-w-sm lg:block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.barHighball}
                    alt="Two pink highballs with cherry and orange on the bar at Chip Shots"
                    fill
                    sizes="384px"
                    className="object-cover"
                    style={{ objectPosition: "50% 62%" }}
                  />
                </div>
              </figure>
            </Reveal>

            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow pb-1 text-gold-soft">Drinks</p>
                <ul>
                  {happyHour.drinks.map((d) => (
                    <Row key={d.name} item={d} tone="dark" />
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow pb-1 text-gold-soft">Bites</p>
                <ul>
                  {happyHour.bites.map((b) => (
                    <Row key={b.name} item={b} tone="dark" />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================== THE BAR ===== */}
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pt-28">
          <Reveal>
            <p className="kicker text-muted">04 · The bar</p>
            <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Cocktails, cold drafts{" "}
              <span className="text-green-soft">and a deep back bar.</span>
            </h2>
          </Reveal>

          <div className="mt-14">
            <section
              id="cocktails"
              className="grid scroll-mt-36 gap-x-16 gap-y-8 border-t border-ink/15 py-12 lg:grid-cols-[1fr_19rem]"
            >
              <div>
                <h3 className="font-display text-3xl font-semibold text-ink">
                  Cocktails
                </h3>
                <ol className="mt-4 grid gap-x-14 md:grid-cols-2">
                  {cocktails.map((c, i) => (
                    <Row
                      key={c.name}
                      item={c}
                      number={String(i + 1).padStart(2, "0")}
                    />
                  ))}
                </ol>
              </div>
              <div className="grid grid-cols-2 gap-4 self-start lg:grid-cols-1 lg:gap-8">
                {pours.map((p) => (
                  <figure key={p.caption}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-cream-2">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 304px, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                      {p.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <MenuBlock id="beer" title="Beer">
              <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
                <div>
                  {draftRows ? (
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-line">
                          <th className="eyebrow pb-3 font-normal text-muted">On draft</th>
                          <th className="eyebrow w-16 pb-3 text-right font-normal text-muted">Glass</th>
                          <th className="eyebrow w-20 pb-3 text-right font-normal text-muted">Pitcher</th>
                        </tr>
                      </thead>
                      <tbody>
                        {draftRows.map((d) => (
                          <tr key={d.name} className="border-b border-line align-baseline">
                            <td className="py-4">
                              <span className="font-display text-[1.3rem] font-semibold leading-snug text-ink">
                                {d.name}
                              </span>
                              {d.desc && (
                                <span className="mt-1 block text-[0.92rem] text-ink/65">
                                  {d.desc}
                                </span>
                              )}
                            </td>
                            <td className="py-4 text-right text-[0.95rem] tabular-nums text-ink/85">
                              {d.price}
                            </td>
                            <td className="py-4 text-right text-[0.95rem] tabular-nums text-ink/85">
                              {d.pitcher}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <>
                      <p className="eyebrow pb-1 text-muted">On draft</p>
                      <ul>
                        {drafts.map((it) => (
                          <Row key={it.name} item={it} />
                        ))}
                      </ul>
                      <p className="eyebrow pb-1 pt-8 text-muted">Pitchers</p>
                      <ul>
                        {pitchers.map((it) => (
                          <Row key={it.name} item={it} />
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div>
                  <p className="eyebrow pb-1 text-muted">Bottles &amp; cans</p>
                  <ul>
                    {bottlesCans.map((it) => (
                      <Row key={it.name} item={it} />
                    ))}
                  </ul>
                </div>
              </div>
            </MenuBlock>

            <MenuBlock id="wine" title="Wine">
              <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
                <div>
                  <p className="eyebrow pb-1 text-muted">By the glass</p>
                  <ul>
                    {wine.map((it) => (
                      <Row key={it.name} item={it} />
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow pb-1 text-muted">By the bottle</p>
                  <ul>
                    {wineBottles.map((it) => (
                      <Row key={it.name} item={it} />
                    ))}
                  </ul>
                </div>
              </div>
            </MenuBlock>

            <MenuBlock
              id="spirits"
              title="Spirits"
              note={`${spiritCount} on the back bar`}
            >
              <details className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-baseline gap-4 py-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[1.3rem] font-semibold text-ink">
                    The full list
                  </span>
                  <span className="text-sm text-ink/65">
                    {spirits.map((g) => g.type.split(" ")[0]).join(" · ")}
                  </span>
                  <span
                    className="ml-auto text-ink/50 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="grid gap-x-14 gap-y-10 pb-10 pt-4 md:grid-cols-2">
                  {spirits.map((group) => (
                    <div key={group.type}>
                      <p className="eyebrow border-b border-line pb-3 text-muted">
                        <AmpText className="text-muted">{group.type}</AmpText>
                      </p>
                      <ul>
                        {group.items.map((it) => (
                          <li
                            key={it.name}
                            className="flex items-baseline gap-3 border-b border-line/70 py-2.5 text-[0.95rem]"
                          >
                            <span className="text-ink">{it.name}</span>
                            <span className="leader min-w-5" aria-hidden />
                            <span className="shrink-0 tabular-nums text-ink/85">
                              {it.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            </MenuBlock>
          </div>
        </div>
      </div>

      {/* ================================================== TO GO ===== */}
      <OrderOptions source="food_drink" kicker="05 · To go" />

      {/* ================================================== CLOSE ===== */}
      <section className="bg-green text-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Dinner first.{" "}
              <span className="text-gold-soft">Then a round.</span>
            </h2>
            <p className="mt-5 max-w-md text-cream/75">
              Book a bay for after dinner, or have dinner brought to you
              while you play.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-7">
            <BookButton variant="gold" size="lg" withArrow />
            <a
              href={business.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cta text-cream"
            >
              Get directions <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
