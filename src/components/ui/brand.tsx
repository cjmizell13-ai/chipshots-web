import Image from "next/image";
import Link from "next/link";
import { img, business } from "@/lib/site";

/**
 * Typographic wordmark lockup — crisp at any size and legible on the dark
 * green nav. Used in the header and footer.
 */
export function Wordmark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const main = tone === "light" ? "text-cream" : "text-green";
  const sub = tone === "light" ? "text-gold-soft" : "text-gold";
  return (
    <Link
      href="/"
      aria-label="Chip Shots Indoor Golf — home"
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span
        className={`font-display text-[1.55rem] sm:text-[1.7rem] font-semibold tracking-tight ${main}`}
      >
        Chip Shots
      </span>
      <span
        className={`eyebrow mt-1 flex items-center gap-2 text-[0.6rem] ${sub}`}
      >
        <span className="h-px w-4 bg-gold/70" aria-hidden />
        Indoor Golf
      </span>
    </Link>
  );
}

/**
 * The real Chip Shots crest, presented on a light "coaster" surface so the
 * shield reads as an intentional emblem. Use on cream / dark sections.
 */
export function Crest({
  size = 132,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-2xl bg-cream shadow-[0_14px_40px_-18px_rgba(20,40,25,0.5)] ring-1 ring-gold/30 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={img.logo}
        alt={`${business.name} crest`}
        width={size - 18}
        height={size - 18}
        className="h-auto w-[82%] object-contain"
      />
    </div>
  );
}
