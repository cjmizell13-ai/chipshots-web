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

/** Dark edges and a deeper bottom, like the reels. Place inside a relative box. */
export function ReelShade({ strong = false }: { strong?: boolean }) {
  return (
    <>
      <div className="reel-vignette pointer-events-none absolute inset-0" aria-hidden />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent ${strong ? "h-3/4" : "h-1/2"}`}
        aria-hidden
      />
    </>
  );
}

/** The two-line reel caption: big tracked capitals, small line under. */
export function ReelCaption({
  title,
  sub,
  className = "",
}: {
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center text-cream ${className}`}>
      <p className="reel-title">{title}</p>
      {sub && <p className="reel-sub mt-1.5">{sub}</p>}
    </div>
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

/** The reel's last frame: monogram, a call to action, the address. */
export function ReelEndCard({
  title,
  url,
  poster,
  children,
}: {
  title: string;
  url: string;
  poster: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-black text-center text-cream">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden
        className="reel-grade absolute inset-0 -z-10 h-full w-full object-cover opacity-45 blur-[2px]"
      />
      <div className="reel-vignette absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden />
      <div className="mx-auto max-w-xl px-5 py-28 sm:py-36">
        <Monogram size={112} className="mx-auto text-cream" />
        <p className="reel-title mt-8 text-2xl sm:text-3xl">{title}</p>
        <span className="mx-auto mt-3 block h-px w-16 bg-gold" aria-hidden />
        <p className="reel-sub mt-3 text-gold-soft">{url}</p>
        <p className="reel-sub mt-6 text-cream/80">
          Monument at Calico Ridge · Henderson
        </p>
        <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-cream/55">
          1473 E Lake Mead Pkwy
        </p>
        {children && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>
        )}
      </div>
    </section>
  );
}

/**
 * A short edit: plays one shot at a time, cutting to the next when it ends,
 * with that shot's caption. Pauses off screen; holds the first frame for
 * people who turn off motion.
 */
export function ReelSequence({
  shots,
  className = "",
  captionClassName = "absolute inset-x-4 bottom-[14%]",
}: {
  shots: { src: string; poster: string; label: string; title: string; sub?: string }[];
  className?: string;
  captionClassName?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    vids.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && visible && !reduce) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, visible, reduce]);

  return (
    <div ref={wrap} className={`overflow-hidden bg-black ${className}`}>
      {shots.map((s, i) => (
        <video
          key={s.src}
          ref={(el) => {
            vids.current[i] = el;
          }}
          src={s.src}
          poster={s.poster}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          aria-label={s.label}
          onEnded={() => setActive((a) => (a + 1) % shots.length)}
          className={`reel-grade absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="reel-vignette pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent" aria-hidden />
      {shots.map((s, i) => (
        <ReelCaption
          key={s.title}
          title={s.title}
          sub={s.sub}
          className={`${captionClassName} transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
