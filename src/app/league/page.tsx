import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import TrackOnClick from "@/components/TrackOnClick";
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
              Try the league before you commit — come play a free Week&nbsp;0 on us
              and see what a season at Chip Shots is all about.
            </p>
          </div>
          <TrackOnClick event="Lead" params={{ content_name: "League sign-up" }}>
            <ButtonLink href="#signup" variant="green" size="lg" withArrow>
              Reserve a preview night
            </ButtonLink>
          </TrackOnClick>
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
              Five bays, weekly play and a free Week&nbsp;0 to try it out. Each
              night has its own crowd and format — pick where you fit. Spots are
              limited, so grab yours below.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {leagues.nights.map((n) => (
            <StaggerItem
              key={n.title}
              className="flex flex-col rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex w-fit items-center rounded-full bg-green-deep px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold">
                  {n.day}
                </span>
                {n.competitive && (
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-medium uppercase tracking-wide text-green-deep">
                    <Icon.star className="h-3 w-3" />
                    Competitive
                  </span>
                )}
              </div>
              <h3 className="font-display mt-4 text-2xl text-green-deep">
                {n.title}
              </h3>
              <p className="mt-2 text-muted">{n.who}</p>
              <dl className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
                <div className="flex items-center gap-2 text-green-deep">
                  <Icon.clock className="h-4 w-4 shrink-0 text-gold" />
                  <dt className="sr-only">Tee times</dt>
                  <dd>{n.time}</dd>
                </div>
                <div className="flex items-center gap-2 text-green-deep">
                  <Icon.target className="h-4 w-4 shrink-0 text-gold" />
                  <dt className="sr-only">Format</dt>
                  <dd>{n.format}</dd>
                </div>
              </dl>
              <p className="mt-5 flex-1 text-sm font-medium text-green">
                {n.preview}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================================== NIGHT PERKS ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">{leagues.nightPerks.eyebrow}</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                {leagues.nightPerks.title}
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                {leagues.nightPerks.intro}
              </p>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {leagues.nightPerks.perks.map((p) => (
              <StaggerItem
                key={p.title}
                className="flex flex-col rounded-3xl border border-gold/40 bg-white p-8 shadow-[var(--shadow-card)]"
              >
                <Icon.glass className="h-7 w-7 text-gold" />
                <h3 className="font-display mt-4 text-2xl text-green-deep">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-muted">{p.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================================== SEASON ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-soft">{leagues.season.eyebrow}</p>
              <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                {leagues.season.title}
              </h2>
              <p className="mt-5 leading-relaxed text-cream/75">
                {leagues.season.intro}
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leagues.season.weeks.map((w) => (
              <StaggerItem
                key={w.tag}
                className={`flex flex-col rounded-2xl border p-6 ${
                  w.highlight
                    ? "border-gold bg-gold text-green-deep"
                    : "border-cream/12 bg-white/[0.04]"
                }`}
              >
                <span
                  className={`eyebrow ${
                    w.highlight ? "text-green-deep/70" : "text-gold"
                  }`}
                >
                  {w.tag}
                </span>
                {w.both ? (
                  <h3 className="font-display mt-2 text-xl">{w.both}</h3>
                ) : (
                  <div className="mt-2 space-y-2">
                    <div>
                      <span
                        className={`block text-[10px] font-semibold uppercase tracking-wider ${
                          w.highlight ? "text-green-deep/60" : "text-gold"
                        }`}
                      >
                        Open
                      </span>
                      <span className="font-display text-base">{w.open}</span>
                    </div>
                    <div>
                      <span
                        className={`block text-[10px] font-semibold uppercase tracking-wider ${
                          w.highlight ? "text-green-deep/60" : "text-gold"
                        }`}
                      >
                        Ladies / Men&rsquo;s
                      </span>
                      <span className="font-display text-base">{w.league}</span>
                    </div>
                  </div>
                )}
                <p
                  className={`mt-3 text-sm ${
                    w.highlight ? "text-green-deep/80" : "text-cream/65"
                  }`}
                >
                  {w.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-gold/40 bg-white/[0.04] p-6 sm:flex-row sm:items-center">
              <Icon.target className="h-7 w-7 shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-xl text-gold">
                  {leagues.season.sidePots.title}
                </h3>
                <p className="mt-1 text-sm text-cream/70">
                  {leagues.season.sidePots.desc}
                </p>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 border-t border-cream/12 pt-12 md:grid-cols-3">
            {leagues.ladder.map((l) => (
              <StaggerItem key={l.title} className="flex items-start gap-4">
                <Icon.star className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-xl">{l.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{l.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================================== DETAILS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Stagger className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {leagues.details.map((d) => (
            <StaggerItem key={d.label}>
              <p className="eyebrow text-gold">{d.label}</p>
              <p className="mt-2 leading-relaxed text-green-deep">{d.value}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================================== MEMBERSHIP MATH ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">{leagues.membershipMath.eyebrow}</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                {leagues.membershipMath.title}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Pay as you go */}
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8">
                <h3 className="font-display text-2xl text-green-deep">
                  {leagues.membershipMath.payg.title}
                </h3>
                <dl className="mt-6 flex-1 divide-y divide-line/70">
                  {leagues.membershipMath.payg.lines.map((line) => (
                    <div
                      key={line.label}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="text-muted">{line.label}</dt>
                      <dd className="font-display tabular-nums text-green-deep">
                        {line.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 font-display text-xl text-green-deep/70">
                  {leagues.membershipMath.payg.total}
                </p>
              </div>
            </Reveal>

            {/* Member — featured */}
            <Reveal delay={0.1}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-green-deep p-8 text-cream shadow-[var(--shadow-soft)]">
                <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-medium uppercase tracking-wide text-green-deep">
                  Best value
                </span>
                <h3 className="font-display text-2xl">
                  {leagues.membershipMath.member.title}
                </h3>
                <p className="font-display mt-1 text-3xl text-gold">
                  {leagues.membershipMath.member.price}
                </p>
                <dl className="mt-5 flex-1 divide-y divide-cream/12">
                  {leagues.membershipMath.member.lines.map((line) => (
                    <div
                      key={line.label}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <dt className="flex items-center gap-2 text-cream/80">
                        <Icon.check className="h-4 w-4 shrink-0 text-gold" />
                        {line.label}
                      </dt>
                      <dd className="font-display tabular-nums text-gold">
                        {line.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 font-display text-xl">
                  {leagues.membershipMath.member.total}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col items-start gap-5 rounded-3xl border border-gold/40 bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl leading-relaxed text-green-deep">
                {leagues.membershipMath.bottomLine}
              </p>
              <ButtonLink href="/memberships" variant="gold" size="lg" withArrow>
                See memberships
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================== PRIZES ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Play for something</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Win your night.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {leagues.prizes.map((p) => (
            <StaggerItem
              key={p.title}
              className="flex flex-col rounded-3xl border border-gold/40 bg-cream-2 p-8"
            >
              <Icon.flag className="h-7 w-7 text-gold" />
              <h3 className="font-display mt-4 text-2xl text-green-deep">
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
              <TrackOnClick event="Lead" params={{ content_name: "League sign-up" }}>
                <ButtonLink href={leagues.formLink} external variant="gold" size="lg" withArrow>
                  Open the form in a new tab
                </ButtonLink>
              </TrackOnClick>
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
