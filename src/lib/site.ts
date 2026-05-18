import { COMPANY_NAME, SLOGAN } from "@/data/about";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(text?: string) {
  const msg = text ? encodeURIComponent(text) : CONTACT.whatsappMessage;
  return `${CONTACT.whatsappUrl}?text=${msg}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
