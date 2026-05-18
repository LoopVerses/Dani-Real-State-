import type { Metadata } from "next";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { SITE_URL } from "@/lib/site";

/** Production domain — matches how people search & type the brand */
export const PRIMARY_DOMAIN = "danirealstateanddeveloper.com";
export const PRIMARY_DOMAIN_WWW = `www.${PRIMARY_DOMAIN}`;

/**
 * Official display names & common misspellings for schema.org alternateName
 * and natural-language SEO (not visible keyword stuffing).
 */
export const BRAND_ALIASES = [
  COMPANY_NAME,
  "Dani Real Estate and Developers",
  "Dani Real Estate & Developers LLP",
  "Dani Real Estate & Developers",
  "Dani Real Estate and Developer",
  "Dani Real Estate and Developer LLP",
  "Dani Real Estate",
  "Dani Real State",
  "Dani Real State and Developers",
  "Dani Real State & Developers",
  "Dani Real State and Developer",
  "Dani Developers",
  "Dani Developer",
  "Dani Real Estate Developers",
  "Dani Real Estate Developer",
  "Dani Real Estate LLP",
  "Dani Real State LLP",
  "Dani Real Estate Haripur",
  "Dani Real Estate Pakistan",
  "Dani Real Estate KPK",
  "danirealstateanddeveloper",
  "danirealstateanddevelopers",
  "danirealestateanddevelopers",
  "danirealestateanddeveloper",
  "danirealstate",
  "danirealestate",
  "danirealestatedevelopers",
  "danirealstatedevelopers",
  "danidevelopers",
  "danideveloper",
  "Dani Real State Haripur",
  "Dani Developers Haripur",
  "Dani Real Estate SECP",
  "Karlugh Real Estate Dani",
] as const;

const CORE_PHRASES = [
  "dani real estate",
  "dani realestate",
  "dani real state",
  "dani real estate and developers",
  "dani real estate and developer",
  "dani real estate & developers",
  "dani real estate & developer",
  "dani real state and developers",
  "dani real state and developer",
  "dani real state & developers",
  "dani developers",
  "dani developer",
  "dani real estate developers",
  "dani real estate developer",
  "dani real state developers",
  "dani real state developer",
  "dani real estate llp",
  "dani real estate haripur",
  "dani real estate pakistan",
  "dani real estate kpk",
  "dani developers haripur",
  "dani developer haripur",
  "dani real estate projects",
  "dani real estate housing",
  "dani real estate plots",
  "dani real estate contact",
  "dani real estate official",
  "dani real estate website",
  "dani real estate company",
  "dani real estate sec",
  "dani real estate secp",
];

const COMPACT_SEARCHES = [
  "danirealestate",
  "danirealstate",
  "danirealestateanddevelopers",
  "danirealstateanddevelopers",
  "danirealstateanddeveloper",
  "danirealestateanddeveloper",
  "danirealestatedevelopers",
  "danirealstatedevelopers",
  "danirealestatedeveloper",
  "danirealstatedeveloper",
  "danidevelopers",
  "danideveloper",
  "danirealestatellp",
  "danirealstatellp",
  "danirealestateharipur",
  "danirealstateharipur",
  "danirealestatepk",
  "danirealstatepk",
  "dani realestate haripur",
  "dani realstate haripur",
  "dani real state haripur",
  "dani real estate haripur hills",
  "dani real estate aman enclave",
  "dani real estate china town haripur",
  "dani real estate danial gardens",
  "dani real estate dani hills",
];

const DOMAIN_KEYWORDS = [
  PRIMARY_DOMAIN,
  PRIMARY_DOMAIN_WWW,
  `https://${PRIMARY_DOMAIN}`,
  `https://${PRIMARY_DOMAIN_WWW}`,
  "danirealstateanddeveloper com",
  "danirealstateanddeveloper website",
  "danirealstateanddeveloper official site",
  "danirealstateanddeveloper contact",
  "danirealstateanddeveloper projects",
  "danirealstateanddevelopers com",
  "www danirealstateanddeveloper",
  "site danirealstateanddeveloper",
];

const LOCATION_KEYWORDS = [
  "real estate haripur",
  "developers haripur",
  "housing society haripur",
  "property developers kpk",
  "secp registered developers pakistan",
  "haripur hills dani",
  "aman enclave haripur",
  "karlugh real estate",
  "china town haripur dani",
  "danial gardens haripur",
];

/** 100+ search intents — meta keywords + internal SEO reference */
export const SEO_KEYWORDS: string[] = [
  ...new Set([
    ...BRAND_ALIASES.map((s) => s.toLowerCase()),
    ...CORE_PHRASES,
    ...COMPACT_SEARCHES,
    ...DOMAIN_KEYWORDS,
    ...LOCATION_KEYWORDS,
    // Extra spelling / punctuation variants
    "dani-real-estate",
    "dani-real-estate-and-developers",
    "dani real estate developers llp",
    "dani real state developers llp",
    "dani real estate & developer llp",
    "dani real estate and developers llp haripur",
    "dani real estate guiding you home",
    "muhammad saeed dani real estate",
    "dani real estate coo",
    "dani real estate board",
    "dani real estate plots haripur",
    "buy plot haripur dani",
    "dani real estate whatsapp",
    "dani real estate email",
    "dani real estate phone",
    "dani realestate developers",
    "dani realstate developers",
    "dani real state developer llp",
    "dani estate developers",
    "dani property developers",
    "dani housing developers haripur",
    "dani commercial real estate haripur",
    "dani real estate commercial",
    "dani real estate residential",
    "dani real estate investment",
    "dani real estate flagship",
    "dani real estate 2008",
    "dani real estate sec registered",
  ]),
];

export const DEFAULT_SITE_DESCRIPTION =
  "Official website of Dani Real Estate and Developers LLP — also searched as Dani Real Estate, Dani Real State & Developers, and danirealstateanddeveloper.com. SECP-registered developers in Haripur since 2008. Residential, commercial, and flagship projects across KPK. Guiding You Home.";

export const DEFAULT_OG_TITLE =
  "Dani Real Estate and Developers | Dani Real Estate | danirealstateanddeveloper";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  /** Extra keywords for this page only */
  extraKeywords?: string[];
  ogImage?: string;
};

function canonicalUrl(path = ""): string {
  const base = SITE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${base}${normalized}`;
}

/** Shared root + per-page metadata with brand-rich keywords */
export function buildPageMetadata({
  title,
  description,
  path = "",
  extraKeywords = [],
  ogImage = "/images/1.png",
}: PageMetaInput): Metadata {
  const canonical = canonicalUrl(path);
  const keywords = [...new Set([...SEO_KEYWORDS, ...extraKeywords])];

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: canonical,
      siteName: "Dani Real Estate and Developers",
      title: `${title} | Dani Real Estate`,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: COMPANY_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Dani Real Estate`,
      description,
      images: [ogImage],
    },
  };
}

export function buildRootMetadata(): Metadata {
  const base = SITE_URL.replace(/\/$/, "") || SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${COMPANY_NAME} | Dani Real Estate | ${PRIMARY_DOMAIN}`,
      template: `%s | Dani Real Estate and Developers`,
    },
    description: DEFAULT_SITE_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    applicationName: "Dani Real Estate and Developers",
    authors: [{ name: COMPANY_NAME, url: base }],
    creator: "Dani Real Estate and Developers",
    publisher: COMPANY_NAME,
    formatDetection: { email: true, telephone: true },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: base,
      siteName: "Dani Real Estate and Developers",
      title: DEFAULT_OG_TITLE,
      description: `${SLOGAN} — Official site: ${PRIMARY_DOMAIN}`,
      images: [
        {
          url: "/images/1.png",
          width: 1200,
          height: 630,
          alt: "Dani Real Estate and Developers LLP — Haripur",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_OG_TITLE,
      description: DEFAULT_SITE_DESCRIPTION,
      images: ["/images/1.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    alternates: {
      canonical: base,
      languages: { "en-PK": base, en: base },
    },
    verification: {
      google: "google47a7ea6d5ebad2ba",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.ico",
    },
    other: {
      "brand:name": COMPANY_NAME,
      "brand:domain": PRIMARY_DOMAIN,
    },
  };
}
