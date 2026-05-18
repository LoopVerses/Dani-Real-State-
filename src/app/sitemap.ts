import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const lastModified = new Date();

  const entries: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: ROUTES.home, priority: 1, changeFrequency: "weekly" },
    { path: ROUTES.projects, priority: 0.95, changeFrequency: "weekly" },
    { path: ROUTES.about, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.contact, priority: 0.9, changeFrequency: "monthly" },
  ];

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
