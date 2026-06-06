import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { Icon } from "@/components/ui/icons";
import EventForm from "@/components/forms/EventForm";
import { img, eventTypes, eventPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events & Parties",
  description:
    "Host birthdays, corporate team nights, leagues, bachelor/bachelorette parties and holiday gatherings at Chip Shots in Henderson, NV. Private bays, catered food and a full bar.",
};

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events & Parties"
        title="The easiest yes on the group-chat."
        intro="Private bays, food from the kitchen and a full bar — under one roof and out of the heat. Tell us what you're celebrating and we'll handle the rest."
        image={img.bayRoomWide}
      />

      {/* ============================================== EVENT TYPES ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">What we host</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Built for groups of any size.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((t) => (
            <StaggerItem
              key={t.title}
              className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-deep text-gold">
                <Icon.users className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-5 text-xl text-green-deep">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================================== PACKAGES ===== */}
      <section className="relative overflow-hidden bg-green-deep text-cream">
        <Image
          src={img.diningRoom}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="veil-green-strong absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow text-gold-soft">Packages</p>
              <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                Pick a package, or build your own.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {eventPackages.map((pkg) => (
              <StaggerItem
                key={pkg.name}
                as="article"
                className={`flex flex-col rounded-3xl border p-7 backdrop-blur ${
                  pkg.featured
                    ? "border-gold/60 bg-green-soft/25"
                    : "border-cream/15 bg-green-deep/50"
                }`}
              >
                {pkg.featured && (
                  <span className="eyebrow inline-block w-fit rounded-full bg-gold px-3 py-1 text-[0.62rem] text-green-deep">
                    Most popular
                  </span>
                )}
                <h3 className="font-display mt-3 text-2xl text-cream">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-gold-soft">{pkg.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-cream/75">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <Icon.check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.05}>
            <p className="mt-10 text-center text-sm text-cream/55">
              Packages are starting points — we'll tailor food, drink and timing
              to your group.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================== FORM ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-gold">Request an event</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Let's plan it.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted">
                Send us the basics and our events team will follow up with
                availability and a quote — usually within a business day.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <Image
                  src={img.trackmanActivities}
                  alt="A group enjoying a TrackMan activity together"
                  width={700}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <EventForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
