"use client";
import Link from "next/link";

import { ReactNode, MouseEventHandler } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {

const base =
  "inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold tracking-wide transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-xl";
  const primary =
  "bg-gradient-to-br from-[#C8A96A] via-[#D5B676] to-[#C8A96A] text-[#081420] hover:brightness-105";

  const secondary =
    "border border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#081420]";

 const buttonClassName = `${base} ${
  variant === "primary" ? primary : secondary
} ${className}`;

 if (href) {
  // Internal section scrolling
  if (href.startsWith("#")) {
    return (
      <button
        type="button"
        onClick={() => scrollToSection(href.substring(1))}
        className={buttonClassName}
      >
        {children}
      </button>
    );
  }

  // Normal page navigation
  return (
  <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  );
}

  return (
    <button
  type={type}
  disabled={disabled}
  onClick={onClick}
  className={buttonClassName}
>
  {children}
</button>
  );
}