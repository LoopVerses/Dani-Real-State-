import { SITE_URL } from "@/lib/site";

/** Canonical site origin without trailing slash */
export function siteOrigin(): string {
  return SITE_URL.replace(/\/$/, "");
}

/** Build absolute URL for sitemap, JSON-LD, and Open Graph */
export function absoluteUrl(path = ""): string {
  const base = siteOrigin();
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Resolve relative or absolute image paths for sitemap image entries */
export function absoluteImageUrl(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return absoluteUrl(src.startsWith("/") ? src : `/${src}`);
}
