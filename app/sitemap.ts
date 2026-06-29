import type { MetadataRoute } from "next";
import { getAllSlugs } from "./lib/pages";
import { getAllPosts } from "./lib/posts";
import { SITE } from "./site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = getAllSlugs().map((slug) => {
    const path = slug === "" ? "" : `/${slug}`;
    const isHome = slug === "";
    const isService = slug.startsWith("dich-vu");
    return {
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : isService ? 0.8 : 0.6,
    } as MetadataRoute.Sitemap[number];
  });

  const posts = getAllPosts().map((post) => ({
    url: `${SITE.url}/kien-thuc/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...pages,
    {
      url: `${SITE.url}/kien-thuc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts,
  ];
}
