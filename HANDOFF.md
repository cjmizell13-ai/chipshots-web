# Chip Shots Indoor Golf Club — Project Handoff

Paste this whole file into a new chat to continue with a different model.

## What this is
A premium marketing website for **Chip Shots Indoor Golf Club** — a golf
simulator + bar + restaurant in Henderson, NV. Veteran-owned. Now open.
Aesthetic: Augusta National–inspired (deep green + gold + cream).

## Stack
- Next.js 16.2.7 (App Router, Turbopack, RSC) + React 19 + TypeScript
- Tailwind CSS v4 (`@theme` tokens: green-deep, green, green-soft, gold,
  gold-soft, cream, cream-2, line, muted)
- `motion/react` for animation (motion, AnimatePresence, useReducedMotion)
- Fonts via next/font/google: Fraunces (display) + Inter (body)
- Single source of truth data layer: `src/lib/site.ts`
- Booking backend: YourGolfBooking iframe; BOGO promo code applied at their checkout

## Environment / workflow (IMPORTANT)
- Project lives at `~/Developer/chipshots-web`
- Node is at `~/.local/node` — every Bash command must be prefixed with:
  `export PATH="$HOME/.local/node/bin:$PATH"`
- The shell cwd resets to the Business Photos iCloud folder after each Bash call,
  so always `cd ~/Developer/chipshots-web` in the same command.
- Build: `export PATH="$HOME/.local/node/bin:$PATH" && cd ~/Developer/chipshots-web && npm run build`
- Dev preview server runs on port 3000 (Claude Preview MCP, launch.json name "dev").
- A Stop hook blocks ending a turn if code was edited while the preview server is
  running unless changes were verified in-browser.

## Deploy
- Local repo → GitHub (`git@github.com:cjmizell13-ai/chipshots-web.git`, owner cjmizell13-ai)
  → Vercel auto-deploys from `main`. Live: chipshots-web.vercel.app
- Push workflow: commit, then `git push origin main`. Vercel handles the rest.

## Key architecture decisions
- **Site-wide booking modal**: `src/components/BookingProvider.tsx` (React Context,
  `useBooking()` hook) renders the YourGolfBooking iframe in an in-page modal
  (no new tab). `src/components/BookButton.tsx` is a drop-in for server pages;
  client components call `useBooking()` directly. All "Book a Bay"/"Reserve" CTAs
  open this modal.
- **Always-on promo banner**: `src/components/AnnouncementBar.tsx` (gold strip),
  rendered inside the fixed `<header>` above the nav. Shows the BOGO grand-opening
  offer (`promoBanner` in site.ts). Only promo is BOGO — the old CMC626 "free hour"
  promo was removed.
- **Membership model** (correct, do not regress): members book their bay time FREE;
  the $30/hr rate applies ONLY to hours beyond their membership, not every booking.
- **Events**: NO pricing shown. Event packages were removed entirely from both the
  events page and the home teaser. Events handled per-request via the inquiry form.
  (`eventPackages` data was deleted from site.ts; `eventTypes` overview remains.)
- **Ampersand component** (`src/components/ui/amp.tsx`): a styled `<Amp/>` /
  `<AmpText>` that renders a classic serif italic "&" (Baskerville/Hoefler stack).
  Defaults to WHITE. On light/white card backgrounds it must be passed
  `className="text-gold"` so it stays legible; dark backgrounds use the white default.

## Brand copy rules (learned from user)
- Brand name is "Chip Shots Indoor Golf Club".
- NOT "smash burgers", NOT a "from-scratch kitchen" — say "a full kitchen".
- Food is broader than burgers: burgers, sandwiches, wings, shareables, salads, totchos, Philly.
- Say "one building", not "one room" ("under one roof" is fine).
- Signature/unique cocktails to highlight: The Transfusion, The Azalea, Peach Palmer.

## Known asset gap (OUTSTANDING)
There is NO burger photo and NO totchos photo in the repo (`public/images/`) or in
the user's ~/Business Photos library (101 files scanned). The user asked to feature
the burger as the main food photo and place totchos somewhere — BLOCKED until they
provide those two images. Current food photos: cheesesteak+pretzel (cocktail-amber.jpg),
wings (food-wings.jpg). Only hand-free cocktail photo is cocktails-highball.jpg
(cocktail-red.jpg and dining-room.jpg both have hands in frame).

## Recent commits (most recent first)
- 77a9644 Use classic white serif ampersand on dark backgrounds
- f833778 Fix mobile side menu collapsing to header height
- b9b2750 Remove event packages from events and home pages
- 90425b9 Make event package details generic and customizable
- 05fac5d Rebrand to Indoor Golf Club; broaden food/drink copy
- 907779b Remove event package pricing in favor of "Reach out for details"
- 5312431 Remove mobile sticky book-a-bay bar
- d2c8d10 Add in-page booking modal, always-on BOGO banner; drop CMC626 promo

## Notable bug fixed recently
Mobile side menu was collapsing to header height: the drawer lived inside
`<header>`, which has `backdrop-filter: blur()` when scrolled. A backdrop-filter
creates a containing block for `fixed` descendants, so the drawer's `fixed inset-0`
sized to the 124px header instead of the viewport. Fix: moved the drawer OUTSIDE
`<header>` (wrapped both in a fragment). Don't put `fixed`-to-viewport overlays
inside an element that has transform/filter/backdrop-filter.

## Status
All work is committed and pushed to main; build is green. The only open item is the
missing burger + totchos photos.
