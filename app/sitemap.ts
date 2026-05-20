export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { EVENTS, FAN_ARTICLES, IDOLS, LAB_ARTICLES } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.github.io/thai-idol-site";
  const pages = ["", "/events/", "/idols/", "/lab/", "/media/", "/guide/", "/admin/"].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
  return [...pages, ...EVENTS.map((e) => ({ url: `${base}/events/${e.slug}/`, lastModified: new Date(e.lastCheckedAt) })), ...IDOLS.map((i) => ({ url: `${base}/idols/${i.slug}/`, lastModified: new Date() })), ...LAB_ARTICLES.map((a) => ({ url: `${base}/lab/${a.slug}/`, lastModified: new Date(a.updatedAt) })), ...FAN_ARTICLES.map((a) => ({ url: `${base}/media/${a.slug}/`, lastModified: new Date(a.updatedAt) }))];
}
