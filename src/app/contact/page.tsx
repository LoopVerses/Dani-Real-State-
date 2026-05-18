import type { Metadata } from "next";
import PageHero from "@/components/sections/properties/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import MapSection from "@/components/sections/contact/MapSection";
import FAQSection from "@/components/sections/contact/FAQSection";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    `Contact Dani Real Estate in Haripur — call ${CONTACT.phoneDisplay}, email ${CONTACT.email}, or WhatsApp for site visits and project inquiries.`,
  alternates: { canonical: `${SITE_URL.replace(/\/$/, "")}/contact` },
  openGraph: {
    title: "Contact Us | Dani Real Estate",
    description:
      "Book a site visit, send an inquiry, or chat on WhatsApp with our Haripur team.",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    ],
  },
};

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
