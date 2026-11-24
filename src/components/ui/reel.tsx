"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Reel look: the same treatment as the Instagram reels.
 * Dark footage, a soft vignette, white letter-spaced capitals with a small
 * line underneath, and the CS monogram end card.
 */

/** Silent looping clip that only plays while it is on screen. */
export function ReelVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (visible && !reduce) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [visible, reduce]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={`reel-grade h-full w-full object-cover ${className}`}
    />
  );
}

/** The CS monogram in a thin double ring, drawn to sit on dark footage. */
export function Monogram({ size = 96, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Chip Shots Golf Club monogram"
      className={className}
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <text
        x="45"
        y="56"
        textAnchor="middle"
        fontSize="44"
        fill="currentColor"
        style={{ fontFamily: "var(--font-bodoni), Georgia, serif", fontWeight: 600 }}
      >
        C
      </text>
      <text
        x="57"
        y="73"
        textAnchor="middle"
        fontSize="40"
        fill="currentColor"
        style={{ fontFamily: "var(--font-bodoni), Georgia, serif", fontWeight: 600 }}
      >
        S
      </text>
    </svg>
  );
}

/** Closing call to action: a sharp photo of the sign beside the monogram. */
export function ReelEndCard({
  title,
  url,
  poster,
  children,
}: {
  title: string;
  url?: string;
  /** Photo shown beside the call to action. */
  poster: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-green-deep text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[9/10] overflow-hidden ring-1 ring-cream/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt="The Chip Shots Golf Club sign and striped awning at Monument at Calico Ridge"
            loading="lazy"
            className="reel-grade absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <Monogram size={112} className="mx-auto text-cream" />
          <p className="reel-title mt-8 text-2xl sm:text-3xl">{title}</p>
          <span className="mx-auto mt-3 block h-px w-16 bg-gold" aria-hidden />
          {url && <p className="reel-sub mt-3 text-gold-soft">{url}</p>}
          <p className="reel-sub mt-6 text-cream/80">Monument at Calico Ridge · Henderson</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-cream/55">
            1473 E Lake Mead Pkwy
          </p>
          {children && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
