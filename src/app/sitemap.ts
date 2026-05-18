import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap-config";

/**
 * Dynamic sitemap.xml — canonical pages only, with image URLs for Google Image indexing.
 * Submit in Search Console: https://www.danirealstateanddeveloper.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}

/** Regenerate at most once per hour on hosting that supports ISR (optional) */
export const revalidate = 3600;
