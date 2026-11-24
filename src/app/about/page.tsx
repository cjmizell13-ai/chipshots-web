import type { Metadata } from "next";
import { shot } from "@/lib/reels";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Amp } from "@/components/ui/amp";
import BookButton from "@/components/BookButton";
import ContactForm from "@/components/forms/ContactForm";
import { business, img, hours, owners } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Contact",
  description:
    "Chip Shots Golf Club is a veteran-owned restaurant, bar and indoor golf club in Henderson, NV, run by the Mizell family. Hours, location and contact.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Icon.flag,
    title: "Veteran-owned",
    body: "Owned by a veteran family that lives in Henderson.",
  },
  {
    icon: Icon.users,
    title: "Family-run",
    body: `Owned and operated by ${owners}. You'll see us behind the bar and on the floor.`,
  },
  {
    icon: Icon.star,
    title: "TrackMan bays",
    body: "Five private bays with TrackMan iO and 500+ courses.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A family club in Henderson."
        intro="Chip Shots Golf Club is veteran-owned and run by Mark and Roseanne Mizell, who live in Henderson."
        image={img.exterior}
        shot={shot.about}
      />

      {/* ============================================== STORY ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <Image
                src={img.diningRoom}
                alt="The dining room and bar at Chip Shots"
                width={900}
                height={680}
                className="reel-grade h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Our story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                The place we wanted to spend our evenings.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 leading-relaxed text-muted">
                We opened in 2026 with a full kitchen, a proper bar and five
                TrackMan bays. Families come for dinner, teams book the bays,
                and plenty of guests come only for a drink.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 leading-relaxed text-muted">
                Five TrackMan bays, 500+ courses, a full kitchen and a full
                bar, run by people who live here.
              </p>
            </Reveal>
            <GoldRule className="mt-7 w-32" />
          </div>
        </div>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((v) => {
            const V = v.icon;
            return (
              <StaggerItem
                key={v.title}
                className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-deep text-gold">
                  <V className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-xl text-green-deep">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ============================================== VISIT + HOURS ===== */}
      <section id="visit" className="scroll-mt-24 bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Reveal>
                <p className="eyebrow text-gold-soft">Visit</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  Visit.
                </h2>
              </Reveal>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <Icon.pin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <a
                    href={business.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream/90"
                  >
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.region}{" "}
                    {business.address.postalCode}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Icon.phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <a href={business.phoneHref} className="hover:text-cream/90">
                    {business.phone}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Icon.mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <a href={`mailto:${business.email}`} className="hover:text-cream/90">
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="eyebrow text-gold">Hours</h3>
                <ul className="mt-4 divide-y divide-cream/12">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 py-2.5 text-sm"
                    >
                      <span className="text-cream/70">{h.day}</span>
                      <span className="font-medium text-cream">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chip Shots Golf Club on Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon.instagram className="h-5 w-5" />
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chip Shots Golf Club on Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon.facebook className="h-5 w-5" />
                </a>
                <a
                  href={business.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chip Shots Golf Club on TikTok"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon.tiktok className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8">
                <BookButton variant="gold" withArrow />
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-cream/15 shadow-[var(--shadow-soft)]">
                <iframe
                  src={business.mapEmbed}
                  title="Map to Chip Shots Golf Club"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[420px] w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================== CONTACT FORM ===== */}
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-gold">Get in touch</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Contact us.
            </h2>
            <p className="mt-4 text-muted">
              Send a question or feedback and we will get back to you.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
