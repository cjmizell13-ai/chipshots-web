import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "green" | "outline" | "ghost-light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,0.7,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  gold: "bg-gold text-green-deep hover:bg-gold-soft shadow-[0_10px_30px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5",
  green:
    "bg-green text-cream hover:bg-green-soft shadow-[0_10px_30px_-14px_rgba(15,42,24,0.8)] hover:-translate-y-0.5",
  outline:
    "border border-green/30 text-green hover:border-green hover:bg-green hover:text-cream",
  "ghost-light":
    "border border-cream/35 text-cream hover:bg-cream hover:text-green-deep",
};

function Arrow() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
  size = "md",
  withArrow = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {withArrow && <Arrow />}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

export function Button({
  children,
  variant = "gold",
  size = "md",
  withArrow = false,
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
} & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}
