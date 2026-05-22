import { HERO_BANNERS } from "@/lib/images";

export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    ...HERO_BANNERS[0],
    eyebrow: "Flagship Development",
    title: "Building Landmarks",
    titleAccent: "Across Haripur",
    description:
      "Signature residences and master-planned communities crafted for families who expect more from every square foot.",
  },
  {
    ...HERO_BANNERS[1],
    eyebrow: "Premium Residences",
    title: "Designed for",
    titleAccent: "Modern Living",
    description:
      "Thoughtful plotting, bold architecture, and investment-grade developments rooted in trust since 2008.",
  },
  {
    ...HERO_BANNERS[2],
    eyebrow: "KPK & Beyond",
    title: "Guiding You",
    titleAccent: "Home",
    description:
      "From Dani Hills to Haripur Hills — Dani Real Estate delivers housing, commercial, and flagship projects at scale.",
  },
];
