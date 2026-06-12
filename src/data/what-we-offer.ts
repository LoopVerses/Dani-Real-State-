import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardCheck,
  HardHat,
  Home,
  Landmark,
  PackageCheck,
} from "lucide-react";
import { WHAT_WE_OFFER_IMAGES } from "@/lib/images";

export type WhatWeOfferItem = {
  id: string;
  icon: LucideIcon;
  image: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
};

export const WHAT_WE_OFFER_INTRO = {
  eyebrow: "What We Offer",
  title: "Premium Real Estate Services",
  subtitle:
    "From developed lands and elegant homes to luxury farmhouses, consultancy, and premium construction materials — Dani Real Estate delivers trusted, complete property solutions.",
};

export const whatWeOfferItems: WhatWeOfferItem[] = [
  {
    id: "developed-lands",
    icon: Landmark,
    image: WHAT_WE_OFFER_IMAGES["Developed Lands"],
    title: "Developed Lands",
    summary: "Exclusive, ready-to-build plots in prime communities.",
    description:
      "We offer carefully selected developed lands with proper planning, access, and utility alignment so you can start construction with confidence and long-term value.",
    highlights: [
      "Prime locations with development potential",
      "Ready-to-build plots with clear planning",
      "Community-focused land options",
    ],
  },
  {
    id: "houses-construction",
    icon: Building2,
    image: WHAT_WE_OFFER_IMAGES["Houses & Construction"],
    title: "Houses & Construction",
    summary: "Elegant homes crafted with precision and quality.",
    description:
      "Our construction team delivers modern homes with strong structural standards, refined finishes, and practical layouts tailored for comfort, durability, and lasting resale value.",
    highlights: [
      "End-to-end residential construction",
      "Quality workmanship and supervision",
      "Durable materials and finishing standards",
    ],
  },
  {
    id: "farmhouses",
    icon: Home,
    image: WHAT_WE_OFFER_IMAGES.Farmhouses,
    title: "Farmhouses",
    summary: "Luxury farmhouse living with comfort and privacy.",
    description:
      "We design and develop upscale farmhouse environments that balance serenity, lifestyle convenience, and premium outdoor space for family living and long-term investment appeal.",
    highlights: [
      "Luxury-oriented farmhouse planning",
      "Privacy-focused layouts and access",
      "Lifestyle and investment-ready options",
    ],
  },
  {
    id: "consultancy",
    icon: ClipboardCheck,
    image: WHAT_WE_OFFER_IMAGES.Consultancy,
    title: "Consultancy",
    summary: "Strategic expertise in planning and execution.",
    description:
      "Our consultancy services provide strategic support in architecture, planning, development, and construction decisions to help clients move from concept to delivery effectively.",
    highlights: [
      "Architecture and planning guidance",
      "Feasibility and execution strategy",
      "Construction process advisory",
    ],
  },
  {
    id: "construction-materials",
    icon: PackageCheck,
    image: WHAT_WE_OFFER_IMAGES["Construction Materials"],
    title: "Construction Materials",
    summary: "Premium-grade materials for superior reliability.",
    description:
      "We source and supply dependable, premium-grade construction materials that support structural strength, long-term performance, and high-quality finish across project types.",
    highlights: [
      "Strength and durability focused supply",
      "Reliable quality for all project scales",
      "Superior finishing material standards",
    ],
  },
  {
    id: "project-delivery",
    icon: HardHat,
    image: WHAT_WE_OFFER_IMAGES["Project Delivery"],
    title: "Project Delivery",
    summary: "Integrated execution from planning to completion.",
    description:
      "We manage planning, coordination, site execution, and delivery oversight through one accountable team to keep timelines realistic and quality consistent from start to finish.",
    highlights: [
      "Unified planning and construction flow",
      "Timeline and quality control",
      "Professional handover standards",
    ],
  },
];

/** First six items shown on the homepage preview */
export const whatWeOfferHomePreview = whatWeOfferItems.slice(0, 6);
