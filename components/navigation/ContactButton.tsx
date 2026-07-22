import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";

export default function ContactButton() {
  return (
    <button
  type="button"
  onClick={() => scrollToSection("contact")}
      className="
        hidden xl:flex
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        rounded-md
        border-2
        border-[#C8A96A]
        min-w-[240px]
        px-10
        py-3
        xl:ml-12 
        text-sm
        font-medium
        uppercase
        tracking-[0.12em]
        text-[#C8A96A]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#C8A96A]
        hover:text-[#081420]
      "
    >
      Book A Consultation
      <ArrowRight size={16} />
    </button>
  );
}