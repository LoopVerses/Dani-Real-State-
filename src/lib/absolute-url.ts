import { SITE_URL } from "@/lib/site";

const CANONICAL_ORIGIN = "https://www.danirealstateanddeveloper.com";

/** Always HTTPS + www — fixes sitemap/SEO when hosting env uses http */
export function siteOrigin(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL ?? CANONICAL_ORIGIN).replace(
    /\/$/,
    ""
  );

  try {
    const parsed = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    parsed.protocol = "https:";
    if (!parsed.hostname.startsWith("www.") && parsed.hostname.includes("danirealstate")) {
      parsed.hostname = `www.${parsed.hostname.replace(/^www\./, "")}`;
    }
    return parsed.origin;
  } catch {
    return CANONICAL_ORIGIN;
  }
}

/** Build absolute URL for sitemap, JSON-LD, and Open Graph */
export function absoluteUrl(path = ""): string {
  const base = siteOrigin();
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Resolve relative or absolute image paths for sitemap image entries */
export function absoluteImageUrl(src: string): string {
  if (src.startsWith("https://")) return src;
  if (src.startsWith("http://")) return src.replace("http://", "https://");
  return absoluteUrl(src.startsWith("/") ? src : `/${src}`);
}
