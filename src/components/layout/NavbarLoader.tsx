"use client";

import dynamic from "next/dynamic";
import NavbarSkeleton from "@/components/layout/NavbarSkeleton";

const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  ssr: false,
  loading: () => <NavbarSkeleton />,
});

export default function NavbarLoader() {
  return <Navbar />;
}
