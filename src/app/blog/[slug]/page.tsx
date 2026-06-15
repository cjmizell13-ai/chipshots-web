import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import PostBody from "@/components/ui/PostBody";
import { Icon } from "@/components/ui/icons";
import { business } from "@/lib/site";
import { getAllPosts, getPost, formatPostDate } from "@/lib/blog";

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
    </>
  );
}
