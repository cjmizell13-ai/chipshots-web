import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/motion";
import { ReelVideo, ReelCaption } from "@/components/ui/reel";
import type { HeroFact, HeroReel } from "@/components/ui/PlateHero";

/**
 * Interior page header built like a reel: one shot chosen for this page,
 * shown upright and sharp in its own frame beside the title, with a soft
 * glow of the same shot behind the whole header.
 */
export default function ShotHero({
  kicker,
  title,
  accent,
  intro,
  actions,
  shot,
  facts,
}: {
  kicker: string;
  title: string;
  accent?: string;
  intro?: string | string[];
  actions?: ReactNode;
  shot: HeroReel;
  facts?: HeroFact[];
}) {
  const paras = intro ? (Array.isArray(intro) ? intro : [intro]) : [];
  return (
    <section className="relative isolate overflow-hidden bg-black text-cream">
      {/* Ambient glow: the same shot, blurred and dimmed. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.poster}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-30 blur-3xl"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/40" aria-hidden />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-44 sm:px-8 sm:pt-44 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 lg:pb-16">
        <div>
          <Reveal>
            <p className="kicker text-gold-soft">{kicker}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 max-w-3xl text-balance text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl">
              {title}
              {accent && <span className="block text-gold-soft">{accent}</span>}
            </h1>
          </Reveal>
          {paras.length > 0 && (
            <Reveal delay={0.14}>
              <div className="mt-7 max-w-xl space-y-3 text-lg leading-relaxed text-cream/75">
                {paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.12}>
          <figure className="relative mx-auto aspect-[9/16] w-full max-w-[20rem] overflow-hidden bg-black shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-cream/10 lg:ml-auto lg:mr-0 lg:max-w-[min(21rem,calc((100svh-13rem)*0.5625))]">
            <ReelVideo src={shot.src} poster={shot.poster} label={shot.label} />
            <div className="reel-vignette pointer-events-none absolute inset-0" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent" aria-hidden />
            <ReelCaption title={shot.title} sub={shot.sub} className="absolute inset-x-4 bottom-[14%]" />
          </figure>
        </Reveal>
      </div>

      {facts && facts.length > 0 && (
        <dl className="mx-auto grid max-w-7xl px-5 pb-12 sm:grid-cols-3 sm:px-8">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`border-t border-cream/15 py-5 sm:py-6 ${i > 0 ? "sm:border-l sm:pl-8" : ""}`}
            >
              <dt className="eyebrow text-cream/55">{f.label}</dt>
              <dd className="font-display mt-2 text-2xl font-semibold leading-snug">{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
