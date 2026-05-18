/** Encode public/image filenames that contain spaces or special characters */
export function publicImage(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}

/** Homepage only — client-provided banners & CEO */
export const LOGO_SRC = publicImage("logo.png");
export const CEO_IMAGE = publicImage("CEO Muhammad Saeed.jpeg");

export const HERO_BANNERS = [
  { src: publicImage("Dani_banner.png"), alt: "Dani Real Estate — flagship development" },
  { src: publicImage("Dani_banner_2.png"), alt: "Dani Real Estate — premium residences" },
  { src: publicImage("Dani_banner_3.png"), alt: "Dani Real Estate — modern living" },
] as const;

export const HERO_AUTO_SLIDE_MS = 8000;

/** Other pages — Unsplash (homepage banners stay local) */
export const STOCK_IMAGES = {
  aboutHero:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
  projectsHero:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80&auto=format&fit=crop",
  contactHero:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop",
  projectCard1:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
  projectCard2:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop",
  projectCard3:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop",
  projectCard4:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop",
  projectCard5:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
  projectCard6:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format&fit=crop",
} as const;

export const ABOUT_IMAGES = {
  pageHero: STOCK_IMAGES.aboutHero,
  story: STOCK_IMAGES.projectCard2,
  subsidiaryBanner: STOCK_IMAGES.projectCard4,
  homeSnippet: CEO_IMAGE,
} as const;

export const IMAGE_FIT = {
  landscapeHero: "object-cover object-[center_38%]",
  landscapeCard: "object-cover object-center",
  portrait: "object-cover object-[50%_14%]",
} as const;
