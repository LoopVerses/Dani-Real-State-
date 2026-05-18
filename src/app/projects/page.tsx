import type { Metadata } from "next";
import PageHero from "@/components/sections/properties/PageHero";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import Partners from "@/components/sections/about/Partners";
import { SLOGAN } from "@/data/about";
import { STOCK_IMAGES } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Projects",
  description: `Delivered and ongoing developments by Dani Real Estate in Haripur — ${SLOGAN}`,
  alternates: { canonical: `${SITE_URL.replace(/\/$/, "")}/projects` },
  openGraph: {
    title: "Our Projects | Dani Real Estate",
    description: `Flagship housing and commercial developments in Haripur — ${SLOGAN}`,
    images: [STOCK_IMAGES.projectsHero],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Delivered excellence & flagship developments across Haripur"
        backgroundImage={STOCK_IMAGES.projectsHero}
      />
      <ProjectsSection />
      <Partners />
    </>
  );
}
