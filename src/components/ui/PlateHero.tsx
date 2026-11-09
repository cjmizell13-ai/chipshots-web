import Image from "next/image";
import type { ReactNode } from "react";

export type HeroFact = { label: string; value: string };

/**
 * Hero for the main interior pages (Dine, Play, Events). A kicker, a
 * two-tone headline, a short intro beside the page's main actions, then one
 * wide photograph that sits half on the green and half on the paper below,
 * with up to three facts under it.
 *
 * The photo is the page's largest paint, so it is preloaded.
 */
export default function PlateHero({
  kicker,
  title,
  accent,
  intro,
  actions,
  image,
  alt,
  position = "50% 50%",
  facts,
}: {
  kicker: string;
  /** First part of the headline, in cream. */
  title: string;
  /** Second part of the headline, in brass. */
  accent?: string;
  intro: string;
  /** Buttons and links shown beside the intro. */
  actions?: ReactNode;
  image: string;
  alt: string;
  /** CSS object-position for the photo, to keep its subject in the crop. */
  position?: string;
  facts?: HeroFact[];
}) {
  return (
    <section className="bg-cream">
      <div className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-36 sm:px-8 sm:pb-14 sm:pt-44">
          <p className="kicker text-gold-soft">{kicker}</p>
          <h1 className="font-display mt-6 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            {title}
            {accent && (
              <>
                {" "}
                <span className="block text-gold-soft">{accent}</span>
              </>
            )}
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <p className="max-w-xl text-lg text-cream/75">{intro}</p>
            {actions && (
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:justify-end">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* The photo straddles the edge of the green. */}
      <div className="bg-[linear-gradient(to_bottom,var(--color-green-deep)_50%,transparent_50%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative aspect-[3/2] overflow-hidden bg-green sm:aspect-[2/1] lg:aspect-[11/5]">
            <Image
              src={image}
              alt={alt}
              fill
              preload
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
              style={{ objectPosition: position }}
            />
          </div>
        </div>
      </div>

      {facts && facts.length > 0 && (
        <dl className="mx-auto grid max-w-7xl px-5 pt-3 sm:grid-cols-3 sm:px-8 sm:pt-5">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`border-b border-line py-5 sm:py-6 ${
                i > 0 ? "sm:border-l sm:pl-8" : ""
              }`}
            >
              <dt className="eyebrow text-muted">{f.label}</dt>
              <dd className="font-display mt-2 text-2xl font-semibold leading-snug text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
