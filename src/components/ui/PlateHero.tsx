import Image from "next/image";
import type { ReactNode } from "react";
import { ReelVideo, ReelCaption } from "@/components/ui/reel";

export type HeroReel = { src: string; poster: string; label: string; title: string; sub?: string };

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
  reels,
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
  /** Up to three reel clips; when given they replace the photo. */
  reels?: HeroReel[];
}) {
  return (
    <section className="bg-green-deep pb-10 text-cream sm:pb-14">
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
      <div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {reels && reels.length > 0 ? (
            <div className="grid aspect-[4/5] grid-cols-1 gap-[3px] overflow-hidden bg-black sm:aspect-[2/1] md:grid-cols-3 lg:aspect-[11/5]">
              {reels.slice(0, 3).map((r, i) => (
                <div key={r.src} className={`relative overflow-hidden ${i > 0 ? "hidden md:block" : ""}`}>
                  <ReelVideo src={r.src} poster={r.poster} label={r.label} />
                  <div className="reel-vignette pointer-events-none absolute inset-0" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" aria-hidden />
                  <ReelCaption title={r.title} sub={r.sub} className="absolute inset-x-4 bottom-8" />
                </div>
              ))}
            </div>
          ) : (
          <div className="relative aspect-[3/2] overflow-hidden bg-green sm:aspect-[2/1] lg:aspect-[11/5]">
            <Image
              src={image}
              alt={alt}
              fill
              preload
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="reel-grade object-cover"
              style={{ objectPosition: position }}
            />
          </div>
          )}
        </div>
      </div>

      {facts && facts.length > 0 && (
        <dl className="mx-auto grid max-w-7xl px-5 pt-3 sm:grid-cols-3 sm:px-8 sm:pt-5">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`border-b border-cream/15 py-5 sm:py-6 ${
                i > 0 ? "sm:border-l sm:border-cream/15 sm:pl-8" : ""
              }`}
            >
              <dt className="eyebrow text-cream/55">{f.label}</dt>
              <dd className="font-display mt-2 text-2xl font-semibold leading-snug text-cream">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
