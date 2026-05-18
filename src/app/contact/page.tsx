import PageHero from "@/components/sections/properties/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import MapSection from "@/components/sections/contact/MapSection";
import FAQSection from "@/components/sections/contact/FAQSection";
import { CONTACT } from "@/lib/site";
import { buildPageMetadata, PRIMARY_DOMAIN } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Dani Real Estate and Developers",
  description: `Contact Dani Real Estate, Dani Real State & Developers, or ${PRIMARY_DOMAIN} — call ${CONTACT.phoneDisplay}, email ${CONTACT.email}, or WhatsApp for Haripur site visits and inquiries.`,
  path: "/contact",
  extraKeywords: [
    "dani real estate contact",
    "dani real estate phone number",
    "dani real estate email",
    "dani real estate whatsapp",
    "danirealstateanddeveloper contact",
    "dani developers contact haripur",
    "dani real state contact",
  ],
  ogImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
});

export default function ContactPage() {
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
