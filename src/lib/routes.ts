/**
 * SEO-friendly URL slugs — keyword-rich paths for search indexing.
 * Legacy short paths 301 → these via next.config + page redirects.
 */
export const ROUTES = {
  home: "/",
  projects: "/dani-real-estate-projects-haripur-kpk",
  about: "/about-dani-real-estate-and-developers-llp",
  contact: "/contact-dani-real-estate-haripur",
  leadership: "/about-dani-real-estate-and-developers-llp#leadership",
} as const;

/** Previous URLs — kept only for redirects */
export const LEGACY_ROUTES = {
  projects: "/projects",
  about: "/about",
  contact: "/contact",
  properties: "/properties",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
