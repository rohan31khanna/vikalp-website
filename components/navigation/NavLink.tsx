"use client";

import { scrollToSection } from "@/lib/scrollToSection";

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

export default function NavLink({
  href,
  label,
  active,
}: NavLinkProps) {
  const id = href.replace("#", "");

  return (
    <button
      type="button"
      onClick={(e) => {
  scrollToSection(id);
  e.currentTarget.blur();
}}
      className={`
        relative
        text-sm
        uppercase
        tracking-[0.22em]
        transition-all
        duration-300
        focus:outline-none
        focus-visible:outline-none
        after:absolute
        after:left-0
        after:-bottom-2
        after:h-[2px]
        after:bg-[#C8A96A]
        after:transition-all
        after:duration-300

        ${
          active
            ? "text-[#C8A96A] after:w-full"
            : "text-white/90 after:w-0 hover:text-[#C8A96A] hover:after:w-full"
        }
      `}
    >
      {label}
    </button>
  );
}