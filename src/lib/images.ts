/** Encode public/image filenames that contain spaces or special characters */
export function publicImage(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}

/** Client final assets — /public/final_images */
export function finalImage(filename: string): string {
  return `/final_images/${encodeURIComponent(filename)}`;
}

/** Leadership portraits — /public/Board_members_image */
export function boardMemberImage(filename: string): string {
  return `/Board_members_image/${encodeURIComponent(filename)}`;
}

/** Navbar / brand — dark theme (default) */
export const LOGO_SRC = publicImage("logo.png");
/** Navbar / brand — light theme */
export const LOGO_LIGHT_SRC = publicImage("light_theme.png");
export const DANI_REAL_ESTATE_LOGO = publicImage("Dani Real Estate Logo.jpeg");

export const BOARD_MEMBER_IMAGES = {
  muhammadSaeed: boardMemberImage("Muhammad Saeed.png"),
  imranRasheed: boardMemberImage("COO Imran Rasheed.png"),
  danialSaeed: boardMemberImage("CFO Danial Saeed.png"),
  kamalAmanKhan: boardMemberImage("Chairman Karlugh Kamal Aman Khan.png"),
  zarakAmanKhan: boardMemberImage("Muhammad Zarak Aman Khan CLO.png"),
  amirGul: boardMemberImage("Amir Gull advisory_board_member.png"),
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

/** Final production images — filenames match project/service titles */
export const FINAL_IMAGES = {
  developedLands: finalImage("Developed Lands.png"),
  houses: finalImage("Houses.png"),
  farmhouses: finalImage("Farmhouse Land.png"),
  farmhouseLand: finalImage("Farmhouse Land.png"),
  architectural: finalImage("Architectural.png"),
  material: finalImage("Material.png"),
  amanEnclave: finalImage("Aman Enclvae.png"),
  anishCottages: finalImage("Anish Cortages.png"),
  danialGardens: finalImage("Danial Gardens.png"),
  amirGul: finalImage("Amir Gul.png"),
} as const;

/** All final_images assets are 409×320 — shared card/banner frame */
export const FINAL_IMAGE_FRAME =
  "relative w-full aspect-[409/320] shrink-0 overflow-hidden bg-dark-2";

/** Page heroes — matched to page content */
export const PAGE_HERO_IMAGES = {
  about: FINAL_IMAGES.developedLands,
  projects: FINAL_IMAGES.amanEnclave,
  contact: FINAL_IMAGES.houses,
  whatWeOffer: FINAL_IMAGES.architectural,
} as const;

/**
 * Ongoing project cards — order matches ongoingProjects in about.ts:
 * Dani Hills Phase 2, Haripur Hills, Aman Enclave, Anish Cottages, Premium Farmhouse Estate
 */
export const ONGOING_PROJECT_IMAGES = [
  FINAL_IMAGES.farmhouseLand,
  FINAL_IMAGES.developedLands,
  FINAL_IMAGES.amanEnclave,
  FINAL_IMAGES.anishCottages,
  FINAL_IMAGES.farmhouseLand,
] as const;

export const ABOUT_IMAGES = {
  pageHero: PAGE_HERO_IMAGES.about,
  subsidiaryBanner: FINAL_IMAGES.amanEnclave,
  homeSnippet: DANI_REAL_ESTATE_LOGO,
} as const;

/** Premium Real Estate Services — image filename matched to card title */
export const WHAT_WE_OFFER_IMAGES = {
  "Developed Lands": finalImage("Developed Lands.png"),
  "Houses & Construction": finalImage("Houses.png"),
  Farmhouses: finalImage("Farmhouse Land.png"),
  Consultancy: finalImage("Architectural.png"),
  "Construction Materials": finalImage("Material.png"),
  "Project Delivery": finalImage("Danial Gardens.png"),
} as const;

/** Card grids — full image visible without cropping */
export const IMAGE_FIT = {
  /** Homepage hero — cover frame, focal point upper area (banner text) */
  heroBanner: "object-cover object-[50%_22%] lg:object-[50%_26%]",
  heroBannerMobile: "object-cover object-[50%_14%] sm:object-[50%_18%]",
  landscapeHero: "object-cover object-center",
  bannerCover: "object-cover object-center",
  landscapeCard: "object-cover object-center",
  portrait: "object-contain object-center bg-dark-2",
  serviceCard: "object-cover object-center",
  finalImageCard: "object-cover object-center",
} as const;
