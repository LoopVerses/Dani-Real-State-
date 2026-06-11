/** Encode public/image filenames that contain spaces or special characters */
export function publicImage(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}

/** Client final assets — /public/final_images */
export function finalImage(filename: string): string {
  return `/final_images/${encodeURIComponent(filename)}`;
}

/** Navbar / brand — dark theme (default) */
export const LOGO_SRC = publicImage("logo.png");
/** Navbar / brand — light theme */
export const LOGO_LIGHT_SRC = publicImage("light_theme.png");
export const DANI_REAL_ESTATE_LOGO = publicImage("Dani Real Estate Logo.jpeg");

/** Leadership portraits — /public/Board_members_image (uniform 1–6) */
export function boardMemberImage(n: 1 | 2 | 3 | 4 | 5 | 6): string {
  return `/Board_members_image/${n}.png`;
}

export const BOARD_MEMBER_IMAGES = {
  muhammadSaeed: boardMemberImage(1),
  imranRasheed: boardMemberImage(2),
  danialSaeed: boardMemberImage(3),
  kamalAmanKhan: boardMemberImage(4),
  zarakAmanKhan: boardMemberImage(5),
  amirGul: boardMemberImage(6),
} as const;

export const HERO_BANNERS = [
  {
    src: publicImage("1.png"),
    mobileSrc: publicImage("mobile_1.png"),
    alt: "Dani Real Estate — flagship development Haripur",
  },
  {
    src: publicImage("2.png"),
    mobileSrc: publicImage("mobile_2.png"),
    alt: "Dani Real Estate — premium residences and plots",
  },
  {
    src: publicImage("3.png"),
    mobileSrc: publicImage("mobile_3.png"),
    alt: "Dani Real Estate — modern living KPK",
  },
] as const;

export const HERO_AUTO_SLIDE_MS = 8000;

/** Final production images (10) — services, projects, heroes */
export const FINAL_IMAGES = {
  developedLands: finalImage("Developed Lands.jpeg"),
  houses: finalImage("Houses.jpeg"),
  farmhouses: finalImage("Farmhouses.png"),
  farmhouseLand: finalImage("Farmhouse Land.png"),
  architectural: finalImage("Architectural.png"),
  material: finalImage("Material.jpg"),
  amanEnclave: finalImage("Aman Enclvae.png"),
  anishCottages: finalImage("Anish Cortages.jpeg"),
  danialGardens: finalImage("Danial Gardens.JPG"),
  amirGul: BOARD_MEMBER_IMAGES.amirGul,
} as const;

/** Page heroes — local final images (no Unsplash) */
export const PAGE_HERO_IMAGES = {
  about: FINAL_IMAGES.developedLands,
  projects: FINAL_IMAGES.amanEnclave,
  contact: FINAL_IMAGES.houses,
  whatWeOffer: FINAL_IMAGES.architectural,
} as const;

/** Ongoing project cards (homepage + order matches ongoingProjects in about.ts) */
export const ONGOING_PROJECT_IMAGES = [
  FINAL_IMAGES.farmhouseLand,
  FINAL_IMAGES.developedLands,
  FINAL_IMAGES.amanEnclave,
  FINAL_IMAGES.anishCottages,
  FINAL_IMAGES.farmhouses,
] as const;

export const ABOUT_IMAGES = {
  pageHero: PAGE_HERO_IMAGES.about,
  story: BOARD_MEMBER_IMAGES.muhammadSaeed,
  subsidiaryBanner: FINAL_IMAGES.amanEnclave,
  homeSnippet: DANI_REAL_ESTATE_LOGO,
} as const;

/** Full image visible on mobile and desktop — no cropping */
export const IMAGE_FIT = {
  heroBanner:
    "object-contain object-center bg-[#071E2B] md:object-cover md:object-[50%_28%] lg:object-[50%_30%]",
  heroBannerMobile: "object-contain object-center bg-[#071E2B]",
  landscapeHero: "object-contain object-center bg-dark",
  landscapeCard: "object-contain object-center bg-dark-3",
  portrait: "object-contain object-center bg-dark-2",
  serviceCard: "object-contain object-center bg-dark-2",
} as const;
