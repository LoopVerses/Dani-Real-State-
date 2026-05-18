import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "../lib/sitemap-config";

/**
 * Dynamic sitemap.xml — canonical HTTPS URLs + images.
 * Submit: https://www.danirealstateanddeveloper.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}

export const dynamic = "force-static";
