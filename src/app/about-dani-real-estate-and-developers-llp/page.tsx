import PageHero from "@/components/sections/properties/PageHero";
import OurStory from "@/components/sections/about/OurStory";
import TeamSection from "@/components/sections/about/TeamSection";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import SubsidiarySection from "@/components/sections/about/SubsidiarySection";
import Partners from "@/components/sections/about/Partners";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { ABOUT_IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Dani Real Estate and Developers LLP",
  description: `${COMPANY_NAME} — ${SLOGAN}. SECP-registered Dani Real Estate & Developers in Haripur since 2008. Leadership, story, and delivered projects.`,
  path: ROUTES.about,
  extraKeywords: [
    "about dani real estate and developers llp",
    "dani real estate developers haripur",
    "danirealstateanddeveloper about",
    "dani real state and developers llp",
  ],
  ogImage: ABOUT_IMAGES.pageHero,
});

export default function AboutDaniRealEstatePage() {
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
