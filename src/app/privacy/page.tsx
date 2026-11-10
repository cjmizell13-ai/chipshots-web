import type { Metadata } from "next";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Chip Shots collects when you use this website, the services that handle it, and the choices you have.",
  alternates: { canonical: "/privacy" },
};

/** Shown at the top of the page. Change it whenever the policy changes. */
const EFFECTIVE = "November 10, 2026";

const a = "text-green-deep underline underline-offset-4 hover:text-green-soft";

function Out({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={a}>
      {children}
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-9 first:pt-0">
      <h2 className="font-display text-2xl text-green-deep sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink/75">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <>
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-36 sm:px-8 sm:pt-40">
          <h1 className="font-display text-4xl font-light sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-cream/70">Effective {EFFECTIVE}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl divide-y divide-line px-5 py-16 sm:px-8 sm:py-20">
        <Section title="Who we are">
          <p>
            {business.name} is a restaurant, bar and indoor golf club at{" "}
            {business.address.full}. This policy covers{" "}
            chipshotshenderson.com. It explains what we collect when you use
            the site, which outside services handle it, and what you can ask
            us to do with it.
          </p>
        </Section>

        <Section title="What we collect">
          <p>
            <strong className="font-medium text-ink">What you send us.</strong>{" "}
            When you ask about a party or event, we collect your name, phone
            number, email address, the kind of event, the date and guest count
            if you give them, and anything you write in the message.
          </p>
          <p>
            <strong className="font-medium text-ink">
              RSVPs, tickets, bookings, orders and sign-ups.
            </strong>{" "}
            These happen on pages run by other companies, listed below. They
            collect what they need to do the job, such as your name, contact
            details and, where you pay, your payment details. Card payments
            are handled by those companies and their payment processors. We do
            not receive or store your full card number.
          </p>
          <p>
            <strong className="font-medium text-ink">
              What is collected automatically.
            </strong>{" "}
            Like most websites, this one records which pages are viewed and
            which buttons are used, the site that sent you here, your general
            location (such as city), and your device and browser type. This is
            done with cookies and similar identifiers set by the analytics and
            advertising services listed below.
          </p>
        </Section>

        <Section title="How we use it">
          <ul className="list-disc space-y-2 pl-5">
            <li>To reply to you about a party, event or question.</li>
            <li>To run the bookings, RSVPs, tickets and orders you make.</li>
            <li>
              To send emails or texts if you signed up for them. You can stop
              either at any time.
            </li>
            <li>To see how the site is used and fix what is not working.</li>
            <li>
              To measure our advertising and to show our ads to people who
              have visited the site.
            </li>
          </ul>
        </Section>

        <Section title="Services that handle your information">
          <p>We share information only with the companies that help us run the business:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-ink">Jotform</strong>: party
              and event inquiries, RSVPs and event tickets.
            </li>
            <li>
              <strong className="font-medium text-ink">YourGolfBooking</strong>:
              bay bookings and memberships.
            </li>
            <li>
              <strong className="font-medium text-ink">Toast</strong>: online
              orders, gift cards, and our email and text lists.
            </li>
            <li>
              <strong className="font-medium text-ink">DoorDash and Uber Eats</strong>:
              delivery orders placed on their apps and sites.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Google (Analytics, Ads and Maps), Meta (Facebook and
                Instagram) and Metricool
              </strong>
              : site measurement, advertising and the map on our About page.
            </li>
            <li>
              <strong className="font-medium text-ink">Vercel</strong>: hosts
              this website.
            </li>
          </ul>
          <p>
            Each of these companies has its own privacy policy that covers
            what it does with your information. We do not sell your personal
            information.
          </p>
        </Section>

        <Section title="Analytics and advertising">
          <p>
            We use Google Analytics, including its advertising features:
            remarketing, and reports on the age range, gender and interests of
            visitors as a group. We also use the Meta Pixel and Metricool.
          </p>
          <p>
            These services use first-party cookies (such as the Google
            Analytics cookie) together with third-party cookies and
            identifiers (such as Google&apos;s advertising cookies) to report
            how the site is used and to show our ads on other sites and apps.
            This means these companies may collect information about your
            activity over time and across different websites.
          </p>
          <p>You can opt out:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Google ads:{" "}
              <Out href="https://myadcenter.google.com/">My Ad Center</Out>
            </li>
            <li>
              Google Analytics:{" "}
              <Out href="https://tools.google.com/dlpage/gaoptout">
                the Analytics opt-out browser add-on
              </Out>
            </li>
            <li>
              Meta ads:{" "}
              <Out href="https://www.facebook.com/adpreferences">
                your ad preferences on Facebook
              </Out>
            </li>
            <li>
              Many advertising companies at once:{" "}
              <Out href="https://optout.networkadvertising.org/">
                the NAI opt-out page
              </Out>{" "}
              or{" "}
              <Out href="https://optout.aboutads.info/">YourAdChoices</Out>
            </li>
          </ul>
          <p>
            You can also block or delete cookies in your browser settings. The
            site still works without them. Our site does not respond to
            browser &quot;Do Not Track&quot; signals.
          </p>
        </Section>

        <Section title="Your choices">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-ink">Email.</strong> Use the
              unsubscribe link at the bottom of any email we send.
            </li>
            <li>
              <strong className="font-medium text-ink">Texts.</strong> Reply
              STOP to any text we send.
            </li>
            <li>
              <strong className="font-medium text-ink">
                See, correct or delete.
              </strong>{" "}
              Email{" "}
              <a href={`mailto:${business.email}`} className={a}>
                {business.email}
              </a>{" "}
              and tell us what you would like to see, change or have deleted.
              We may need to confirm it is you first.
            </li>
            <li>
              <strong className="font-medium text-ink">Nevada residents.</strong>{" "}
              We do not sell personal information. You may still send a
              request not to sell yours to{" "}
              <a href={`mailto:${business.email}`} className={a}>
                {business.email}
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep inquiries, RSVPs and booking records for as long as we
            need them to host your event and keep our business records. Google
            Analytics data about visits is kept for up to 14 months.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This site is not directed to children under 13, and we do not
            knowingly collect their information. Youth memberships and events
            are arranged by a parent or guardian.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we change this policy, we will post the new version on this
            page and update the effective date at the top.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            {business.name}, {business.address.full}
            <br />
            <a href={`mailto:${business.email}`} className={a}>
              {business.email}
            </a>{" "}
            ·{" "}
            <a href={business.phoneHref} className={a}>
              {business.phone}
            </a>
          </p>
        </Section>
      </div>
    </>
  );
}
