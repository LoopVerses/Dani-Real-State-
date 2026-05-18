import PageHero from "@/components/sections/properties/PageHero";
import OurStory from "@/components/sections/about/OurStory";
import TeamSection from "@/components/sections/about/TeamSection";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import SubsidiarySection from "@/components/sections/about/SubsidiarySection";
import Partners from "@/components/sections/about/Partners";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { ABOUT_IMAGES } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Dani Real Estate and Developers",
  description: `${COMPANY_NAME} — ${SLOGAN}. Learn about Dani Real Estate, Dani Real State & Developers LLP, SECP registration, leadership, and Haripur projects since 2008.`,
  path: "/about",
  extraKeywords: [
    "dani real estate about",
    "dani real estate story",
    "dani real estate leadership",
    "dani real state developers about",
    "danirealstateanddeveloper about us",
    "dani developers llp sec",
  ],
  ogImage: ABOUT_IMAGES.pageHero,
});

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
