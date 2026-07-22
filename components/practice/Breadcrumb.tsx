"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const currentPage = pathname
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm text-gray-400"
    >
      <Link
        href="/"
        className="transition-colors hover:text-[#C8A96A]"
      >
        Home
      </Link>

      <ChevronRight size={16} className="mx-2" />

      <Link
        href="/#practice-areas"
        className="transition-colors hover:text-[#C8A96A]"
      >
        Practice Areas
      </Link>

      <ChevronRight size={16} className="mx-2" />

      <span className="text-[#C8A96A]">{currentPage}</span>
    </nav>
  );
}