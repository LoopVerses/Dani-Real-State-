import type { Metadata } from "next";
import PageHero from "@/components/sections/properties/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import MapSection from "@/components/sections/contact/MapSection";
import FAQSection from "@/components/sections/contact/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dani Real Estate & Developers. Schedule a consultation or visit our Clifton office.",
  openGraph: {
    title: "Contact Us | Dani Real Estate",
    description:
      "Contact our team for property inquiries, viewings, and consultations.",
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
        subtitle="We're here to help you find your perfect property"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600"
      />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </>
  );
}
