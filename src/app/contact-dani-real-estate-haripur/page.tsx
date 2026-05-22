import PageHero from "@/components/sections/properties/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import MapSection from "@/components/sections/contact/MapSection";
import FAQSection from "@/components/sections/contact/FAQSection";
import { CONTACT } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { buildPageMetadata, PRIMARY_DOMAIN } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Dani Real Estate Haripur",
  description: `Contact Dani Real Estate and Developers in Haripur — ${CONTACT.phoneDisplay}, ${CONTACT.email}, WhatsApp. Official ${PRIMARY_DOMAIN}.`,
  path: ROUTES.contact,
  extraKeywords: [
    "contact dani real estate haripur",
    "dani real estate phone haripur",
    "danirealstateanddeveloper contact",
    "dani real estate whatsapp haripur",
  ],
  ogImage: "/images/logo.png",
  ogImageAlt: "Contact Dani Real Estate — Haripur",
});

export default function ContactDaniRealEstatePage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We're here to help you find your perfect property in Haripur & KPK"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600"
      />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </>
  );
}
