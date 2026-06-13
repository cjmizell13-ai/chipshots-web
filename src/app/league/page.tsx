import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { business, img, leagues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leagues & Tournaments",
  description:
    "Join a weekly TrackMan golf league at Chip Shots in Henderson, NV. Net scoring and handicaps keep every match competitive for all skill levels. Sign up below.",
  alternates: { canonical: "/league" },
};

export default function League() {
  return (
    <>
      <PageHero
        eyebrow={leagues.eyebrow}
        title={leagues.title}
        intro={leagues.intro}
        image={img.trackmanCompetitions}
      />

      {/* ============================================== PREVIEW NIGHTS ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-green-deep/70">Henderson&rsquo;s Indoor Golf League</p>
            <h2 className="font-display mt-2 text-3xl text-green-deep sm:text-4xl">
              Free Preview Nights
            </h2>
            <p className="mt-2 max-w-xl text-green-deep/80">
              Try the league before you commit — come play a preview night on us
              and see what a season at Chip Shots is all about.
            </p>
          </div>
          <ButtonLink href="#signup" variant="green" size="lg" withArrow>
            Reserve a preview night
          </ButtonLink>
        </div>
      </section>

      {/* ============================================== SCHEDULE ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Three league nights</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Pick your night.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Five bays, weekly play and a free Week&nbsp;0 preview to try it out.
              Spots are limited — grab yours below.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {leagues.nights.map((n) => (
            <StaggerItem
              key={n.title}
              className="flex flex-col rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-green-deep px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold">
                {n.day}
              </span>
              <h3 className="font-display mt-4 text-2xl text-green-deep">
                {n.title}
              </h3>
              <p className="mt-2 flex-1 text-sm font-medium text-green">
                {n.preview}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================================== POINTS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Why play in a league</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Competitive play, every week.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {leagues.points.map((p) => (
            <StaggerItem
              key={p.title}
              className="flex flex-col rounded-3xl border border-gold/40 bg-cream-2 p-8"
            >
              <h3 className="font-display text-2xl text-green-deep">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-muted">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================================== SIGN-UP FORM ===== */}
      <section id="signup" className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow text-gold">Sign up</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Save your spot in the league.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Fill out the form below and our team will be in touch with your
                league night, start date and details.
              </p>
            </Reveal>
            <GoldRule className="mx-auto mt-7 w-40" />
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-soft)]">
              <iframe
                src={leagues.form}
                title="Join a league at Chip Shots"
                loading="lazy"
                className="h-[1100px] w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-muted">Trouble with the form?</p>
              <ButtonLink href={leagues.formLink} external variant="gold" size="lg" withArrow>
                Open the form in a new tab
              </ButtonLink>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 text-green-deep"
              >
                <Icon.phone className="h-4 w-4 text-gold" />
                Or call {business.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
