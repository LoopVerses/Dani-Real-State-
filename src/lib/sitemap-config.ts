import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import {
  CLO_IMAGE,
  HERO_BANNERS,
  LOGO_SRC,
  ABOUT_IMAGES,
  STOCK_IMAGES,
  publicImage,
} from "@/lib/images";
import { absoluteImageUrl, absoluteUrl } from "@/lib/absolute-url";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SitemapPageConfig = {
  /** Canonical path (no hash) */
  path: string;
  name: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  /** Relative or absolute image URLs — expanded to absolute in sitemap */
  images: string[];
};

/**
 * Every indexable page — only canonical SEO slugs (no legacy redirects, no hash URLs).
 * Google: one URL per page; keywords live in meta + JSON-LD, not duplicate thin URLs.
 */
export const INDEXABLE_PAGES: SitemapPageConfig[] = [
  {
    path: ROUTES.home,
    name: "Dani Real Estate and Developers — Home",
    priority: 1,
    changeFrequency: "daily",
    images: [
      ...HERO_BANNERS.flatMap((b) => [b.src, b.mobileSrc]),
      LOGO_SRC,
    ],
  },
  {
    path: ROUTES.projects,
    name: "Dani Real Estate Projects Haripur KPK",
    priority: 0.95,
    changeFrequency: "weekly",
    images: [
      STOCK_IMAGES.projectsHero,
      STOCK_IMAGES.projectCard1,
      STOCK_IMAGES.projectCard2,
      STOCK_IMAGES.projectCard3,
      STOCK_IMAGES.projectCard4,
      STOCK_IMAGES.projectCard5,
      STOCK_IMAGES.projectCard6,
    ],
  },
  {
    path: ROUTES.whatWeOffer,
    name: "What We Offer — Dani Real Estate Haripur",
    priority: 0.92,
    changeFrequency: "weekly",
    images: [STOCK_IMAGES.projectCard4, LOGO_SRC],
  },
  {
    path: ROUTES.about,
    name: "About Dani Real Estate and Developers LLP",
    priority: 0.9,
    changeFrequency: "weekly",
    images: [
      ABOUT_IMAGES.pageHero,
      ABOUT_IMAGES.story,
      ABOUT_IMAGES.subsidiaryBanner,
      ABOUT_IMAGES.homeSnippet,
      publicImage("CEO Muhammad Saeed.jpeg"),
      publicImage("COO Imran Rasheed.jpeg"),
      publicImage("CFO Danial Saeed.jpeg"),
      publicImage("Chairman Karlugh Kamal Aman Khan.jpeg"),
      CLO_IMAGE,
    ],
  },
  {
    path: ROUTES.contact,
    name: "Contact Dani Real Estate Haripur",
    priority: 0.9,
    changeFrequency: "weekly",
    images: [STOCK_IMAGES.contactHero, LOGO_SRC],
  },
];

/**
 * Live sitemap: /public/sitemap.xml (static, valid XML — no Unsplash &amp; issues).
 * This config is used for JSON-LD navigation only.
 */
export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const builtAt = new Date();

  return INDEXABLE_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: builtAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: [...new Set(page.images.map(absoluteImageUrl))],
  }));
}

/** For JSON-LD SiteNavigationElement / ItemList */
export function sitemapNavigationItems() {
  return INDEXABLE_PAGES.map((page, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: page.name,
    item: absoluteUrl(page.path),
  }));
}
