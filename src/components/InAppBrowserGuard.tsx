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
 * small sheet with an "Open in Safari" button, copy-link, and the ••• tip.
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

  const safari = target.replace(/^https:\/\//, "x-safari-https://");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(target);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Open in your browser to finish signing up"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 sm:items-center"
      onClick={() => setTarget(null)}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-cream p-6 text-green-deep shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-2xl">Open in Safari to join</p>
        <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
          Instagram and Facebook&rsquo;s built-in browser can&rsquo;t finish our
          checkout. It takes one tap to open it in Safari, and your code
          still works there.
        </p>
        <a
          href={safari}
          className="mt-5 block w-full rounded-full bg-green-deep px-5 py-3 text-center font-semibold text-cream"
        >
          Open in Safari
        </a>
        <button
          type="button"
          onClick={copy}
          className="mt-3 block w-full rounded-full border border-green-deep/30 px-5 py-3 text-center font-semibold"
        >
          {copied ? "Link copied, paste it in Safari" : "Copy link"}
        </button>
        <p className="mt-4 text-xs leading-relaxed text-green-deep/70">
          Or tap <strong>&bull;&bull;&bull;</strong> at the top right, then{" "}
          <strong>Open in external browser</strong>.
        </p>
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
  );
}
