import { useEffect } from "react";


interface UseActiveSectionProps {
  setActiveSection: (section: string) => void;
}

export default function useActiveSection({
  setActiveSection,
}: UseActiveSectionProps) {
  useEffect(() => {
    const sections = [
      "#home",
      "#about",
      "#practice-areas",
      "#leadership",
      "#knowledge",
      "#contact",
    ];

    const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // If we're at the bottom of the page, Contact is active
  if (window.scrollY + windowHeight >= documentHeight - 10) {
    setActiveSection("contact");
    return;
  }

  const scrollY = window.scrollY + 200;

  let active = "home";

  sections.forEach((id) => {
    const element = document.querySelector(id) as HTMLElement | null;

    if (!element) return;

    if (scrollY >= element.offsetTop) {
      active = id.replace("#", "");
    }
  });

  setActiveSection(active);
};
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);
}