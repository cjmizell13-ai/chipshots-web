import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import PostBody from "@/components/ui/PostBody";
import { Icon } from "@/components/ui/icons";
import { business } from "@/lib/site";
import {
  getAllPosts,
  getPost,
  getRelatedPosts,
  formatPostDate,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${business.website}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [`${business.website}${post.image}`],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${business.website}${post.image}`,
    mainEntityOfPage: `${business.website}/blog/${post.slug}`,
    author: { "@type": "Organization", name: business.name, url: business.website },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: { "@type": "ImageObject", url: `${business.website}${post.image}` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${post.category} · ${formatPostDate(post.date)}`}
        title={post.title}
        intro={post.excerpt}
        image={post.image}
      />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <PostBody blocks={post.body} />

        <div className="mt-16 border-t border-line pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-green-deep"
          >
            <Icon.arrow className="h-4 w-4 rotate-180" />
            Back to The Clubhouse
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-cream-2">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow text-gold">Keep reading</p>
            <h2 className="font-display mt-3 text-3xl font-light text-green-deep sm:text-4xl">
              More from the Clubhouse
            </h2>
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {related.map((r) => (
                <article key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.image}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="eyebrow text-gold">{r.category}</p>
                      <h3 className="font-display mt-3 text-xl leading-snug text-green-deep">
                        {r.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        {r.excerpt}
                      </p>
                      <p className="mt-5 text-sm text-muted">
                        {formatPostDate(r.date)} · {r.readMinutes} min read
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
