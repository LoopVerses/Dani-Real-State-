import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/dani-real-estate-projects-haripur-kpk",
        permanent: true,
      },
      {
        source: "/what-we-offer",
        destination: "/what-we-offer-dani-real-estate-haripur",
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
