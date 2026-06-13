import type { Metadata } from "next";
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
    "Chip Shots Indoor Golf is a veteran-owned golf simulator, bar and restaurant in Henderson, NV — built by the Mizell family. Find our hours, location and contact info.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Icon.flag,
    title: "Veteran-owned",
    body: "Built on service, discipline and hospitality — a place that feels like it was made for the neighborhood, because it was.",
  },
  {
    icon: Icon.users,
    title: "Family-run",
    body: `Owned and operated by ${owners}. You'll see us behind the bar and on the floor.`,
  },
  {
    icon: Icon.star,
    title: "Quality first",
    body: "Real food, real cocktails and tour-grade TrackMan tech. No corners cut.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About & Contact"
        title="A veteran-owned clubhouse in the heart of Henderson."
        intro="Chip Shots was built by the Mizell family to be the kind of place you actually want to spend an evening — great food, a real bar, and golf that's fun whether you shoot par or have never swung a club."
        image={img.exterior}
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
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Our story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                Golf for everyone. Food for its own sake.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 leading-relaxed text-muted">
                We set out to build something Henderson didn't have — a spot where
                the simulators are genuinely great, but the kitchen and bar can
                stand entirely on their own. Bring the family for burgers, bring
                the team for a tournament, or just grab a cocktail and watch the
                leaderboard.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 leading-relaxed text-muted">
                Five TrackMan bays, 500+ courses, a full kitchen and a full
                bar — open late, climate-controlled, and run by people who live
                here.
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
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Reveal>
                <p className="eyebrow text-gold-soft">Visit</p>
                <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                  Find us <Amp /> say hi.
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
                  aria-label="Chip Shots on Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon.instagram className="h-5 w-5" />
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chip Shots on Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon.facebook className="h-5 w-5" />
                </a>
                <a
                  href={business.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chip Shots on TikTok"
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
                  title="Map to Chip Shots Indoor Golf Club"
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
              Send us a note.
            </h2>
            <p className="mt-4 text-muted">
              Questions, feedback or just want to say hello? We'd love to hear
              from you.
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
