import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import {
  BOARD_MEMBER_IMAGES,
  FINAL_IMAGES,
  HERO_BANNERS,
  LOGO_SRC,
  ABOUT_IMAGES,
  ONGOING_PROJECT_IMAGES,
  PAGE_HERO_IMAGES,
} from "@/lib/images";
import { absoluteImageUrl, absoluteUrl } from "@/lib/absolute-url";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SitemapPageConfig = {
  path: string;
  name: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  images: string[];
};

export const INDEXABLE_PAGES: SitemapPageConfig[] = [
  {
    path: ROUTES.home,
    name: "Dani Real Estate and Developers — Home",
    priority: 1,
    changeFrequency: "daily",
    images: [...HERO_BANNERS.flatMap((b) => [b.src, b.mobileSrc]), LOGO_SRC],
  },
  {
    path: ROUTES.projects,
    name: "Dani Real Estate Projects Haripur KPK",
    priority: 0.95,
    changeFrequency: "weekly",
    images: [
      PAGE_HERO_IMAGES.projects,
      FINAL_IMAGES.danialGardens,
      ...ONGOING_PROJECT_IMAGES,
    ],
  },
  {
    path: ROUTES.whatWeOffer,
    name: "What We Offer — Dani Real Estate Haripur",
    priority: 0.92,
    changeFrequency: "weekly",
    images: [
      PAGE_HERO_IMAGES.whatWeOffer,
      FINAL_IMAGES.developedLands,
      FINAL_IMAGES.houses,
      FINAL_IMAGES.farmhouses,
      FINAL_IMAGES.architectural,
      FINAL_IMAGES.material,
      BOARD_MEMBER_IMAGES.amirGul,
      LOGO_SRC,
    ],
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
      ...Object.values(BOARD_MEMBER_IMAGES),
    ],
  },
  {
    path: ROUTES.contact,
    name: "Contact Dani Real Estate Haripur",
    priority: 0.9,
    changeFrequency: "weekly",
    images: [PAGE_HERO_IMAGES.contact, LOGO_SRC],
  },
];

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

export function sitemapNavigationItems() {
  return INDEXABLE_PAGES.map((page, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: page.name,
    item: absoluteUrl(page.path),
  }));
}
