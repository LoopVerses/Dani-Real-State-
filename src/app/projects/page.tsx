import PageHero from "@/components/sections/properties/PageHero";
import ProjectsSection from "@/components/sections/about/ProjectsSection";
import Partners from "@/components/sections/about/Partners";
import { SLOGAN } from "@/data/about";
import { STOCK_IMAGES } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Dani Real Estate Projects — Haripur & KPK",
  description: `Projects by Dani Real Estate and Developers LLP — Dani Real Estate, Dani Real State Developers, danirealstateanddeveloper. Haripur Hills, Aman Enclave, China Town & more. ${SLOGAN}`,
  path: "/projects",
  extraKeywords: [
    "dani real estate projects",
    "dani real estate haripur hills",
    "dani real estate aman enclave",
    "dani developers projects haripur",
    "danirealstateanddeveloper projects",
    "dani real state projects",
  ],
  ogImage: STOCK_IMAGES.projectsHero,
});

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
