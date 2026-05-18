import type { MetadataRoute } from "next";
import { absoluteUrl, siteOrigin } from "@/lib/absolute-url";

export default function robots(): MetadataRoute.Robots {
  const base = siteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: base,
  };
}
