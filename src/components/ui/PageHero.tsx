import Image from "next/image";
import { Reveal } from "@/components/ui/motion";
import { AmpText } from "@/components/ui/amp";
import ShotHero from "@/components/ui/ShotHero";
import type { HeroReel } from "@/components/ui/PlateHero";

/**
 * Shared banner for interior pages — dark green photo header with eyebrow,
 * title and optional intro. Keeps every page visually consistent.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  shot,
}: {
  eyebrow: string;
  title: string;
  /** One paragraph, or several. */
  intro?: string | string[];
  image: string;
  /** One reel shot chosen for this page; when given, the header is built around it. */
  shot?: HeroReel;
}) {
  if (shot) {
    return <ShotHero kicker={eyebrow} title={title} intro={intro} shot={shot} />;
  }
  return (
    <section className="relative overflow-hidden bg-green-deep">
        <Image
          src={image}
          alt=""
          fill
          preload
          sizes="100vw"
          className="reel-grade object-cover opacity-55"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/70 to-black/40" />
      <div className="reel-vignette pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-44 sm:px-8 sm:pb-20 sm:pt-52">
        <Reveal>
          <p className="kicker text-gold-soft">
            <AmpText className="text-white">{eyebrow}</AmpText>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] text-cream sm:text-6xl">
            <AmpText className="text-white">{title}</AmpText>
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.14}>
            <div className="mt-5 max-w-xl space-y-3 leading-relaxed text-cream/75">
              {(Array.isArray(intro) ? intro : [intro]).map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Reveal>
        )}
        
      </div>
    </section>
  );
}
