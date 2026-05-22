import { CONTACT } from "@/lib/site";
import { PRIMARY_DOMAIN, PRIMARY_DOMAIN_WWW } from "@/lib/seo";
import { absoluteUrl } from "@/lib/absolute-url";

/** IndexNow verification key (public file at /{key}.txt) */
export const INDEXNOW_KEY = "d4n1realestatedevindex01";

export const CANONICAL_ORIGIN = `https://${PRIMARY_DOMAIN_WWW}`;

/** schema.org sameAs — official touchpoints (add social URLs here when live) */
export const SCHEMA_SAME_AS: string[] = [
  CANONICAL_ORIGIN,
  absoluteUrl("/"),
  CONTACT.whatsappUrl,
  `mailto:${CONTACT.email}`,
  `tel:${CONTACT.phoneTel}`,
];

/** Site builder / technical partner — WebSite creator in JSON-LD */
export const SITE_CREATOR = {
  "@type": "Organization" as const,
  name: "LoopVerses",
  url: "https://loopverses.com/",
  description: "Web design and development — LoopVerses.com",
};

/** Karlugh subsidiary — Organization subOrganization */
export const KARLUGH_SUB_ORGANIZATION = {
  "@type": "RealEstateAgent" as const,
  name: "Karlugh Real Estate & Property Developers LLP",
  url: CANONICAL_ORIGIN,
  areaServed: "Haripur, Khyber Pakhtunkhwa, Pakistan",
};

export type PresenceLink = {
  label: string;
  href: string;
  title: string;
  external: boolean;
  rel?: string;
};

/** Clean footer / humans.txt authority links */
export const OFFICIAL_PRESENCE_LINKS: PresenceLink[] = [
  {
    label: PRIMARY_DOMAIN,
    href: CANONICAL_ORIGIN,
    title: "Official website — Dani Real Estate and Developers LLP",
    external: false,
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsappUrl,
    title: "Contact Dani Real Estate on WhatsApp",
    external: true,
  },
  {
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    title: "Email Dani Real Estate",
    external: true,
  },
  {
    label: "LoopVerses",
    href: "https://loopverses.com/",
    title: "Website by LoopVerses",
    external: true,
    rel: "noopener noreferrer",
  },
];
