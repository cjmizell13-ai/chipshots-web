import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { business } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-green-deep text-cream">
      <div className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-5 pb-24 pt-44 text-center sm:px-8">
        <p className="eyebrow text-gold-soft">Out of bounds</p>
        <h1 className="font-display mt-4 text-5xl font-light sm:text-6xl">
          That one sailed the green.
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-cream/75">
          The page you&rsquo;re after doesn&rsquo;t exist — it may have moved,
          or the link was mistyped. Take a drop and play on.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/" variant="gold" size="lg" withArrow>
            Back to the clubhouse
          </ButtonLink>
          <ButtonLink href={business.booking} external variant="ghost-light" size="lg">
            Book a bay
          </ButtonLink>
        </div>
        <p className="mt-10 text-sm text-cream/55">
          Looking for something specific?{" "}
          <Link href="/food-drink" className="link-underline pb-0.5 text-gold hover:text-gold-soft">
            The menu
          </Link>
          {" · "}
          <Link href="/league" className="link-underline pb-0.5 text-gold hover:text-gold-soft">
            Club nights
          </Link>
          {" · "}
          <Link href="/faq" className="link-underline pb-0.5 text-gold hover:text-gold-soft">
            FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
