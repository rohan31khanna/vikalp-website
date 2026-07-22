"use client";

import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function FooterNavLink({
  href,
  children,
  className = "",
}: Props) {
  if (href.startsWith("#")) {
    return (
      <button
        type="button"
        onClick={() => scrollToSection(href.substring(1))}
        className={`text-slate-300 transition hover:text-amber-400 focus-visible:outline-none
  focus-visible:text-amber-400
  focus-visible:ring-2
  focus-visible:ring-amber-400/40
  focus-visible:ring-offset-2
  focus-visible:ring-offset-slate-900
  rounded-sm ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`text-slate-300 transition hover:text-amber-400 focus-visible:outline-none
  focus-visible:text-amber-400
  focus-visible:ring-2
  focus-visible:ring-amber-400/40
  focus-visible:ring-offset-2
  focus-visible:ring-offset-slate-900
  rounded-sm ${className}`}
    >
      {children}
    </Link>
  );
}