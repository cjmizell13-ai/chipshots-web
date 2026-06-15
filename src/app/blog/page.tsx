import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { img } from "@/lib/site";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Clubhouse",
  description:
    "Local guides, golf tips and what's happening at Chip Shots Indoor Golf Club in Henderson, NV — from beating the summer heat to getting the most out of TrackMan.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="The Clubhouse"
        title="Notes from the bays."
        intro="Local guides, golf tips and what's on at Chip Shots — stuff worth knowing whether you're a scratch golfer or you've never swung a club."
        image={img.bayLounge}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} as="article">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow text-gold">{post.category}</p>
                  <h2 className="font-display mt-3 text-2xl leading-snug text-green-deep">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
                  <p className="mt-5 text-sm text-muted">
                    {formatPostDate(post.date)} · {post.readMinutes} min read
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
