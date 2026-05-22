import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { ROUTES } from "@/lib/routes";

/** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.danirealstateanddeveloper.com) */
const CANONICAL_SITE = "https://www.danirealstateanddeveloper.com";

/** Must be https in production (Search Console + sitemap) */
export const SITE_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? CANONICAL_SITE;
  return raw.replace(/^http:\/\//i, "https://").replace(/\/$/, "");
})();

export const CONTACT = {
  email: "danxsaeed@gmail.com",
  phoneDisplay: "0332 5076025",
  phoneTel: "+923325076025",
  whatsappNumber: "923325076025",
  whatsappUrl: "https://wa.me/923325076025",
  whatsappMessage: encodeURIComponent(
    "Hello Dani Real Estate, I would like to inquire about your projects."
  ),
  address: "Haripur, Khyber Pakhtunkhwa, Pakistan",
  hours: "Monday – Saturday: 9 AM – 7 PM",
} as const;

export const SITE = {
  name: COMPANY_NAME,
  shortName: "Dani Real Estate",
  slogan: SLOGAN,
  url: SITE_URL,
  contact: CONTACT,
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.projects, label: "Projects" },
  { href: ROUTES.whatWeOffer, label: "What We Offer" },
  { href: ROUTES.about, label: "About Us" },
  { href: ROUTES.contact, label: "Contact" },
] as const;

export function whatsappLink(text?: string) {
  const msg = text ? encodeURIComponent(text) : CONTACT.whatsappMessage;
  return `${CONTACT.whatsappUrl}?text=${msg}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
