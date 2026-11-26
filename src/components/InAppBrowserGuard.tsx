"use client";

import { useEffect, useState } from "react";

/**
 * Instagram and Facebook open links in their own in-app browser. YourGolfBooking's
 * signup and checkout break there (Google sign-in is blocked, the login and basket
 * can drop between our site and YGB, and bank card checks may not load).
 *
 * When this site is opened inside one of those apps, a tap on any
 * yourgolfbooking.com link is caught and the visitor is sent to their real
 * browser instead: Android hands the link to Chrome directly; iPhone gets a
 * sheet pointing at the app's ••• menu (Open in external browser) plus copy-link,
 * because Instagram blocks links that try to open Safari directly.
 * Every other browser is untouched.
 */
const IN_APP = /FBAN|FBAV|FB_IAB|FBIOS|FB4A|Instagram|Messenger/i;

export default function InAppBrowserGuard() {
  const [target, setTarget] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    // ?inapp_test=ios|android previews the behaviour from a normal browser
    const test = new URLSearchParams(window.location.search).get("inapp_test");
    if (!IN_APP.test(ua) && !test) return;
    const android = test ? test === "android" : /Android/i.test(ua);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.hasAttribute("data-inapp-skip")) return;
      const href = a.href;
      if (!/yourgolfbooking\.com/i.test(href)) return;
      e.preventDefault();
      if (android) {
        const noScheme = href.replace(/^https?:\/\//, "");
        window.location.href =
          `intent://${noScheme}#Intent;scheme=https;package=com.android.chrome;` +
          `S.browser_fallback_url=${encodeURIComponent(href)};end`;
        return;
      }
      setCopied(false);
      setTarget(href);
    };
    // capture phase so it runs before the link opens; tracking listeners still fire
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!target) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href.split("?")[0]);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  // Instagram/Facebook on iPhone block buttons that try to open Safari, so the
  // sheet sits at the top and points at the app's own ••• menu, which does work.
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Open in your browser to finish signing up"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 p-4 pt-3"
      onClick={() => setTarget(null)}
    >
      <div className="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="mb-2 flex justify-end pr-2 text-cream" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M8 50 C 20 40, 34 30, 46 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M34 10 L46 10 L46 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="rounded-3xl bg-cream p-6 text-green-deep shadow-xl">
          <p className="font-display text-2xl">Two taps to join</p>
          <p className="mt-2 text-sm leading-relaxed text-green-deep/80">
            Instagram&rsquo;s built-in browser can&rsquo;t finish our checkout.
            Open this page in Safari instead:
          </p>
          <ol className="mt-4 space-y-3 text-base">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-deep text-sm font-semibold text-cream">1</span>
              <span>Tap <strong className="tracking-widest">&bull;&bull;&bull;</strong> at the <strong>top right</strong> of your screen</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-deep text-sm font-semibold text-cream">2</span>
              <span>Tap <strong>Open in external browser</strong> (or <strong>Open in Safari</strong>)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-deep text-sm font-semibold text-cream">3</span>
              <span>Tap <strong>Join online</strong> again. Code <strong>BLACKFRIDAY</strong> still works.</span>
            </li>
          </ol>
          <button
            type="button"
            onClick={copy}
            className="mt-5 block w-full rounded-full border border-green-deep/30 px-5 py-3 text-center font-semibold"
          >
            {copied ? "Copied. Paste it into Safari" : "Or copy the link"}
          </button>
          <a
            href={target}
            data-inapp-skip=""
            className="mt-4 block text-center text-xs text-green-deep/60 underline"
            onClick={() => setTarget(null)}
          >
            Continue here anyway
          </a>
        </div>
      </div>
    </div>
  );
}
