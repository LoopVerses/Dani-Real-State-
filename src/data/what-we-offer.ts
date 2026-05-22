import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  Home,
  Landmark,
  LineChart,
  Users,
} from "lucide-react";

export type WhatWeOfferItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
};

export const WHAT_WE_OFFER_INTRO = {
  eyebrow: "What We Offer",
  title: "Complete Real Estate Solutions",
  subtitle:
    "From residential societies and commercial builds to plotting, advisory, and compliant delivery — Dani Real Estate and Developers LLP is your single partner across Haripur and KPK.",
};

export const whatWeOfferItems: WhatWeOfferItem[] = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Development",
    summary: "Master-planned housing societies and premium homes.",
    description:
      "We design and deliver residential communities that balance livability, infrastructure, and long-term value — including delivered landmarks such as China Town, Danial Gardens, and ongoing phases of Dani Hills.",
    highlights: [
      "Housing societies & gated communities",
      "4 Marla to kanal residential units",
      "Infrastructure, utilities & access roads",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Development",
    summary: "Retail, education, fuel, and mixed-use projects.",
    description:
      "Our commercial portfolio includes operational petrol facilities, retail markets, and institutional builds — executed with approvals, quality construction, and handover you can verify on the ground.",
    highlights: [
      "Retail markets & shop developments",
      "Schools and institutional facilities",
      "Petrol stations & mixed-use plots",
    ],
  },
  {
    id: "plotting",
    icon: Landmark,
    title: "Plotting & Land Development",
    summary: "Farmhouse estates and strategic plot offerings.",
    description:
      "Whether you are buying for lifestyle or investment, we structure plotting schemes with clear documentation, transparent pricing, and developments sized from boutique farmhouse land to large-scale society plots.",
    highlights: [
      "Farmhouse & boutique land schemes",
      "Kanal plotting with clear titles",
      "Phased releases for investors",
    ],
  },
  {
    id: "advisory",
    icon: LineChart,
    title: "Investment Advisory",
    summary: "Guidance for buyers, partners, and landowners.",
    description:
      "Our leadership team brings decades of on-ground experience in Haripur. We help clients evaluate projects, understand timelines, and align purchases with realistic returns — not overpromises.",
    highlights: [
      "Site visits & project walkthroughs",
      "Payment plans & documentation review",
      "Portfolio strategy for long-term holders",
    ],
  },
  {
    id: "delivery",
    icon: Users,
    title: "End-to-End Project Delivery",
    summary: "One team from concept to handover.",
    description:
      "Planning, approvals, construction coordination, marketing support, and handover — managed under one senior team so you are not juggling multiple vendors who disappear mid-sprint.",
    highlights: [
      "Planning & feasibility",
      "Construction oversight",
      "Marketing and sales support",
    ],
  },
  {
    id: "legal",
    icon: FileCheck2,
    title: "Legal & Documentation Support",
    summary: "Structured transfers and regulatory alignment.",
    description:
      "Through our group expertise and Karlugh subsidiary leadership, clients receive documentation pathways aligned with local practice — reducing surprises during transfer, society membership, or commercial leasing.",
    highlights: [
      "Sale agreements & transfer files",
      "Society bylaws & membership",
      "Coordination with counsel where required",
    ],
  },
  {
    id: "consultation",
    icon: ClipboardCheck,
    title: "Consultation & Site Planning",
    summary: "Book a viewing and scope your requirements.",
    description:
      "Start with a conversation — WhatsApp, call, or office visit in Haripur. We map your budget, timeline, and goals to the right project or custom development path before you commit capital.",
    highlights: [
      "Free initial consultation",
      "Haripur on-ground team",
      "WhatsApp-first updates during builds",
    ],
  },
];

/** First six items shown on the homepage preview */
export const whatWeOfferHomePreview = whatWeOfferItems.slice(0, 6);
