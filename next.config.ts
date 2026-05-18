import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/dani-real-estate-projects-haripur-kpk",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-dani-real-estate-and-developers-llp",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-dani-real-estate-haripur",
        permanent: true,
      },
      {
        source: "/properties",
        destination: "/dani-real-estate-projects-haripur-kpk",
        permanent: true,
      },
      {
        source: "/properties/:path*",
        destination: "/dani-real-estate-projects-haripur-kpk",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
