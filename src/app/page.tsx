import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/home/Hero";
import AboutSnippet from "@/components/sections/home/AboutSnippet";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import StatsSection from "@/components/sections/home/StatsSection";
import ProjectsShowcase from "@/components/sections/home/ProjectsShowcase";
import ServicesSection from "@/components/sections/home/ServicesSection";
import LeadershipPreview from "@/components/sections/home/LeadershipPreview";
import CTABanner from "@/components/sections/home/CTABanner";
import { SLOGAN, COMPANY_NAME } from "@/data/about";
import { SITE_URL } from "@/lib/site";

const Testimonials = dynamic(
  () => import("@/components/sections/home/Testimonials"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${SLOGAN}`,
  description:
    "SECP-registered real estate developers in Haripur. Residential, commercial, and flagship projects since 2008.",
  alternates: { canonical: SITE_URL.replace(/\/$/, "") || SITE_URL },
  openGraph: {
    title: COMPANY_NAME,
    description: SLOGAN,
    images: ["/images/Dani_banner.png"],
  },
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden" suppressHydrationWarning>
      <Hero />
      <AboutSnippet />
      <WhyChooseUs />
      <StatsSection />
      <ProjectsShowcase />
      <ServicesSection />
      <LeadershipPreview />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
