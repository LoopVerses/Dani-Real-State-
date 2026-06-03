import PageHero from "@/components/sections/properties/PageHero";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import { SLOGAN } from "@/data/about";
import { PAGE_HERO_IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Dani Real Estate Projects Haripur KPK",
  description: `Dani Real Estate and Developers projects in Haripur, KPK — Haripur Hills, Aman Enclave, China Town, Danial Gardens. ${SLOGAN}`,
  path: ROUTES.projects,
  extraKeywords: [
    "dani real estate projects haripur",
    "dani real estate projects kpk",
    "danirealstateanddeveloper projects",
    "dani real state projects haripur pakistan",
  ],
  ogImage: "/images/2.png",
  ogImageAlt: "Dani Real Estate projects — Haripur, KPK",
});

export default function DaniRealEstateProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Delivered excellence & flagship developments across Haripur"
        backgroundImage={PAGE_HERO_IMAGES.projects}
      />
      <ProjectsSection />
    </>
  );
}
