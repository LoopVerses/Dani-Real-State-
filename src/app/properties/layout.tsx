import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse premium residential, commercial, and plot listings across Karachi, Lahore, and Islamabad.",
  openGraph: {
    title: "Properties | Dani Real Estate",
    description:
      "Browse premium residential, commercial, and plot listings across Pakistan.",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    ],
  },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
