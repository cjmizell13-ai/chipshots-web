import type { MetadataRoute } from "next";
import { business } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.website;
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/food-drink", priority: 0.9, changeFrequency: "monthly" },
    { path: "/golf-booking", priority: 0.9, changeFrequency: "monthly" },
    { path: "/league", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gift-cards", priority: 0.7, changeFrequency: "monthly" },
    { path: "/memberships", priority: 0.8, changeFrequency: "monthly" },
    { path: "/events", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
