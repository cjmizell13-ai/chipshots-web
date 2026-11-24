import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/motion";
import { ReelVideo } from "@/components/ui/reel";
import type { HeroFact, HeroReel } from "@/components/ui/PlateHero";

/**
 * Interior page header: one shot chosen for the page plays quietly behind the
 * title (a wide cut on desktop, a tall cut on phones), with the site's own
 * type on top.
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
      <div className="absolute inset-0 -z-10">
        <ReelVideo src={shot.src} poster={shot.poster} label={shot.label} className="md:hidden" />
        <ReelVideo
          src={shot.wideSrc ?? shot.src}
          poster={shot.widePoster ?? shot.poster}
          label={shot.label}
          className="hidden md:block"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/35 to-black/10" aria-hidden />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/75 via-black/25 to-transparent md:block" aria-hidden />

      <div className="mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-44 sm:px-8 sm:pb-16">
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
            <div className="mt-6 max-w-xl space-y-3 text-lg leading-relaxed text-cream/85">
              {paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>
          </Reveal>
        )}
        {facts && facts.length > 0 && (
          <dl className="mt-12 grid max-w-4xl border-t border-cream/15 sm:grid-cols-3">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`py-5 ${i > 0 ? "border-t border-cream/15 sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
              >
                <dt className="eyebrow text-cream/55">{f.label}</dt>
                <dd className="font-display mt-2 text-2xl font-semibold leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
