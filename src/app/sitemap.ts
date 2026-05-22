import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
