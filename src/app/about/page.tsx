import type { Metadata } from "next";
import PageHero from "@/components/sections/properties/PageHero";
import OurStory from "@/components/sections/about/OurStory";
import TeamSection from "@/components/sections/about/TeamSection";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import SubsidiarySection from "@/components/sections/about/SubsidiarySection";
import Partners from "@/components/sections/about/Partners";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { ABOUT_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `${COMPANY_NAME} — ${SLOGAN}. Incorporated under SECP in 2021, delivering premium developments across Haripur since 2008.`,
  openGraph: {
    title: "About Us | Dani Real Estate",
    description: `${SLOGAN} — Learn our story, leadership, and delivered projects.`,
    images: [ABOUT_IMAGES.pageHero],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={COMPANY_NAME}
        subtitle={SLOGAN}
        backgroundImage={ABOUT_IMAGES.pageHero}
      />
      <OurStory />
      <TeamSection />
      <ProjectsSection />
      <SubsidiarySection />
      <Partners />
    </>
  );
}
