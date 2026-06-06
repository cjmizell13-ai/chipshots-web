import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Amp, AmpText } from "@/components/ui/amp";
import BookButton from "@/components/BookButton";
import {
  img,
  foodMenu,
  foodMore,
  drafts,
  bottlesCans,
  wine,
  cocktails,
  spirits,
  happyHour,
  lunch,
  type MenuItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Food & Drink — Smash Burgers, Wings & Full Bar",
  description:
    "From-scratch smash burgers, wings, shareables and salads plus a full bar — cold drafts, wine, signature cocktails and spirits. Happy hour weekdays 3–6 PM in Henderson, NV.",
};

function SimpleList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="divide-y divide-line/70">
      {items.map((it) => (
        <li key={it.name} className="py-3">
          <div className="flex items-baseline gap-3">
            <span className="font-medium text-green-deep">{it.name}</span>
            <span className="mx-1 flex-1 border-b border-dotted border-line" />
            <span className="shrink-0 font-display text-green tabular-nums">
              {it.price}
            </span>
          </div>
          {it.desc && (
            <p className="mt-1 text-sm text-muted">{it.desc}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function FoodDrink() {
  return (
    <>
      <PageHero
        eyebrow="Food & Drink"
        title="A from-scratch kitchen and a proper bar."
        intro="Real food made to order, an honest pour and a happy hour that runs right into the bays. Golf optional."
        image={img.foodCheesesteak}
      />

      {/* ============================================== FOOD MENU ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-gold">The kitchen</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                The menu
              </h2>
            </div>
            <span className="hidden text-sm text-muted sm:block">
              Smash-style burgers · made to order
            </span>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {foodMenu.map((section) => (
            <StaggerItem
              key={section.title}
              as="article"
              className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-green-deep">
                  <AmpText className="text-gold">{section.title}</AmpText>
                </h3>
                {section.note && (
                  <span className="text-xs uppercase tracking-wider text-gold">
                    {section.note}
                  </span>
                )}
              </div>
              <div className="mt-4 divide-y divide-line/70">
                {section.items.map((it) => (
                  <div key={it.name} className="py-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-medium text-green-deep">
                        {it.name}
                      </span>
                      <span className="mx-1 flex-1 border-b border-dotted border-line" />
                      <span className="shrink-0 font-display text-green tabular-nums">
                        {it.price}
                      </span>
                    </div>
                    {it.desc && (
                      <p className="mt-1 text-sm text-muted">{it.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.05}>
          <p className="mt-10 rounded-2xl bg-cream-2 px-6 py-4 text-center text-sm text-muted">
            {foodMore}
          </p>
        </Reveal>
      </section>

      {/* ============================================== HAPPY HOUR ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <p className="eyebrow text-gold-soft">Happy hour</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  {happyHour.window}
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/75">
                  {happyHour.note}
                </p>
                <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                  <Image
                    src={img.cocktailAmber}
                    alt="An amber signature cocktail"
                    width={680}
                    height={460}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2">
              <Reveal>
                <div>
                  <h3 className="eyebrow text-gold">Drinks</h3>
                  <ul className="mt-4 divide-y divide-cream/12">
                    {happyHour.drinks.map((d) => (
                      <li key={d.name} className="py-3">
                        <div className="flex items-baseline gap-3">
                          <span className="font-medium text-cream">
                            {d.name}
                          </span>
                          <span className="mx-1 flex-1 border-b border-dotted border-cream/20" />
                          <span className="shrink-0 font-display text-gold tabular-nums">
                            {d.price}
                          </span>
                        </div>
                        {d.desc && (
                          <p className="mt-1 text-sm text-cream/55">{d.desc}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <h3 className="eyebrow text-gold">Bites</h3>
                  <ul className="mt-4 divide-y divide-cream/12">
                    {happyHour.bites.map((b) => (
                      <li key={b.name} className="flex items-baseline gap-3 py-3">
                        <span className="font-medium text-cream">{b.name}</span>
                        <span className="mx-1 flex-1 border-b border-dotted border-cream/20" />
                        <span className="shrink-0 font-display text-gold tabular-nums">
                          {b.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-gold/30 bg-green-soft/30 p-5">
                    <p className="eyebrow text-gold-soft">Lunch · {lunch.window}</p>
                    <ul className="mt-3 space-y-2 text-sm text-cream/80">
                      {lunch.combos.map((c) => (
                        <li key={c.name} className="flex justify-between gap-3">
                          <span>{c.name}</span>
                          <span className="font-display text-gold tabular-nums">
                            {c.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== DRINKS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div>
            <p className="eyebrow text-gold">The bar</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Drinks
            </h2>
          </div>
        </Reveal>

        {/* Signature cocktails — featured */}
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cocktails.map((c) => (
            <StaggerItem
              key={c.name}
              className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl text-green-deep">
                  {c.name}
                </h3>
                <span className="font-display text-green tabular-nums">
                  {c.price}
                </span>
              </div>
              {c.desc && <p className="mt-2 text-sm text-muted">{c.desc}</p>}
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="font-display text-2xl text-green-deep">On Draft</h3>
              <div className="mt-3">
                <SimpleList items={drafts} />
              </div>
              <h3 className="font-display mt-8 text-2xl text-green-deep">
                Bottles <Amp /> Cans
              </h3>
              <div className="mt-3">
                <SimpleList items={bottlesCans} />
              </div>
              <h3 className="font-display mt-8 text-2xl text-green-deep">
                Wine
              </h3>
              <div className="mt-3">
                <SimpleList items={wine} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-2xl text-green-deep">Spirits</h3>
              <div className="mt-4 space-y-7">
                {spirits.map((group) => (
                  <div key={group.type}>
                    <h4 className="eyebrow text-gold">{group.type}</h4>
                    <ul className="mt-2 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                      {group.items.map((it) => (
                        <li
                          key={it.name}
                          className="flex items-baseline gap-2 py-1.5 text-sm"
                        >
                          <span className="text-green-deep">{it.name}</span>
                          <span className="mx-1 flex-1 border-b border-dotted border-line" />
                          <span className="shrink-0 font-display text-green tabular-nums">
                            {it.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================== CTA ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl text-green-deep sm:text-4xl">
              Eat, drink <Amp className="text-green-deep/70" /> play — all in one
              place.
            </h2>
            <p className="mt-2 flex items-center justify-center gap-2 text-green-deep/80 md:justify-start">
              <Icon.glass className="h-4 w-4" />
              Food <Amp className="text-green-deep/70" /> drinks come right to
              your bay.
            </p>
          </div>
          <BookButton variant="green" size="lg" withArrow />
        </div>
      </section>
    </>
  );
}
