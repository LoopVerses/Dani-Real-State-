import type { MetadataRoute } from "next";
import { absoluteUrl, siteOrigin } from "@/lib/absolute-url";

export default function robots(): MetadataRoute.Robots {
  const host = siteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    host,
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
