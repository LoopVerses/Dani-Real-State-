import type { Metadata } from "next";
import PageHero from "@/components/sections/properties/PageHero";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import Partners from "@/components/sections/about/Partners";
import { SLOGAN } from "@/data/about";
import { STOCK_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Projects",
  description: `Delivered and ongoing developments by Dani Real Estate — ${SLOGAN}`,
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
