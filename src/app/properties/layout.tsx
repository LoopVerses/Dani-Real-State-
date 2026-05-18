import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Dani Real Estate Properties",
  description:
    "Dani Real Estate and Developers LLP property listings — redirecting to official Dani Real Estate projects in Haripur, KPK.",
  path: "/properties",
  extraKeywords: [
    "dani real estate properties",
    "dani real estate plots",
    "dani real state properties",
    "danirealstateanddeveloper properties",
  ],
});

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
