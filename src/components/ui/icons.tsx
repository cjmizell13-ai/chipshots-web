import type { SVGProps } from "react";

const s = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const Icon = {
  menu: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  close: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  phone: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 014.5 6a2 2 0 012-2z" /></svg>
  ),
  pin: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
  ),
  clock: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.8" /></svg>
  ),
  mail: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="M4 7l8 5.5L20 7" /></svg>
  ),
  instagram: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  facebook: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M14.5 8.5h2V5.5h-2.4C12 5.5 11 7 11 9v1.5H9v3h2V21h3v-7.5h2.2l.5-3H14V9c0-.4.2-.5.5-.5z" fill="currentColor" stroke="none" /></svg>
  ),
  tiktok: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M14 4c.3 2.2 1.6 3.7 3.8 4v2.6c-1.4.1-2.7-.3-3.8-1v4.8a4.8 4.8 0 1 1-4.8-4.8c.3 0 .5 0 .8.1v2.7a2.1 2.1 0 1 0 1.5 2V4z" fill="currentColor" stroke="none" /></svg>
  ),
  flag: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M6 21V4" /><path d="M6 4h9l-1.5 3L15 10H6" /></svg>
  ),
  burger: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M5 9c0-2.5 3-4.5 7-4.5S19 6.5 19 9z" /><path d="M5 13h14M5 13c0 2.5 3 4 7 4s7-1.5 7-4" /><path d="M6.5 11h11" /></svg>
  ),
  glass: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M7 4h10l-3.5 7v6M7 4l3.5 7M9 21h6" /><path d="M8.2 7h7.6" /></svg>
  ),
  star: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M12 4.5l2.2 4.7 5 .6-3.7 3.4 1 5-4.5-2.5L7.5 18l1-5L4.8 9.8l5-.6z" /></svg>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M5 12.5l4 4 10-10" /></svg>
  ),
  arrow: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  users: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><path d="M16 5.5a3 3 0 010 5.8M17 19a5.5 5.5 0 00-2-4.3" /></svg>
  ),
  target: (p: SVGProps<SVGSVGElement>) => (
    <svg {...s(p)}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg>
  ),
};
