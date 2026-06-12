/** Encode public/image filenames that contain spaces or special characters */
export function publicImage(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}

/** Client final assets — /public/final_images */
export function finalImage(filename: string): string {
  return `/final_images/${encodeURIComponent(filename)}`;
}

export function finalImageNumbered(n: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8): string {
  return finalImage(`${n}.png`);
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

/** Final production images — /public/final_images/1.png–8.png */
export const FINAL_IMAGES = {
  developedLands: finalImageNumbered(1),
  houses: finalImageNumbered(2),
  farmhouses: finalImageNumbered(3),
  farmhouseLand: finalImageNumbered(4),
  architectural: finalImageNumbered(5),
  material: finalImageNumbered(6),
  amanEnclave: finalImageNumbered(7),
  anishCottages: finalImageNumbered(8),
  danialGardens: finalImageNumbered(8),
  amirGul: BOARD_MEMBER_IMAGES.amirGul,
} as const;

/** All final_images assets are 409×320 — shared card/banner frame */
export const FINAL_IMAGE_FRAME =
  "relative w-full aspect-[409/320] shrink-0 overflow-hidden bg-dark-2";

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
