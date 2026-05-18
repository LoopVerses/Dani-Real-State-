import type { MetadataRoute } from "next";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { PRIMARY_DOMAIN } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: "Dani Real Estate",
    description: `${SLOGAN} — Official ${PRIMARY_DOMAIN}`,
    start_url: ROUTES.home,
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#C9A84C",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
