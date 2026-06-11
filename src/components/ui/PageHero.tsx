import Image from "next/image";
import { Reveal, GoldRule } from "@/components/ui/motion";
import { AmpText } from "@/components/ui/amp";

/**
 * Shared banner for interior pages — dark green photo header with eyebrow,
 * title and optional intro. Keeps every page visually consistent.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-green-deep">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="veil-green absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44">
        <Reveal>
          <p className="eyebrow text-gold-soft">
            <AmpText className="text-white">{eyebrow}</AmpText>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-4xl font-light leading-tight text-cream sm:text-6xl">
            <AmpText className="text-white">{title}</AmpText>
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl leading-relaxed text-cream/75">{intro}</p>
          </Reveal>
        )}
        <GoldRule className="mt-8 w-32" />
      </div>
    </section>
  );
}
