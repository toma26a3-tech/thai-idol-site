export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { EVENTS, IDOLS, LAB_ARTICLES } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.github.io/thai-idol-site";
  const pages = ["", "/events/", "/idols/", "/lab/", "/guide/", "/admin/"].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
  const eventPages = EVENTS.map((e) => ({ url: `${base}/events/${e.slug}/`, lastModified: new Date(e.lastCheckedAt) }));
  const idolPages = IDOLS.map((i) => ({ url: `${base}/idols/${i.slug}/`, lastModified: new Date() }));
  const labPages = LAB_ARTICLES.map((a) => ({ url: `${base}/lab/${a.slug}/`, lastModified: new Date() }));
  return [...pages, ...eventPages, ...idolPages, ...labPages];
}
