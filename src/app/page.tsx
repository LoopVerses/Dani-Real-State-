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
import { buildPageMetadata, DEFAULT_SITE_DESCRIPTION, PRIMARY_DOMAIN } from "@/lib/seo";

const Testimonials = dynamic(
  () => import("@/components/sections/home/Testimonials"),
  { ssr: true }
);

export const metadata: Metadata = buildPageMetadata({
  title: `${COMPANY_NAME} | ${SLOGAN}`,
  description: DEFAULT_SITE_DESCRIPTION,
  path: "",
  extraKeywords: [
    "dani real estate home",
    "dani real estate official website",
    `dani real estate ${PRIMARY_DOMAIN}`,
    "danirealstateanddeveloper homepage",
  ],
});

export default function HomePage() {
  return (
    <div className="min-w-0" suppressHydrationWarning>
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
