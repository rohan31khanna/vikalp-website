"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import useActiveSection from "@/hooks/useActiveSection";
import ContactButton from "@/components/navigation/ContactButton";
import MobileMenuButton from "@/components/navigation/MobileMenuButton";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import { scrollToSection } from "@/lib/scrollToSection";


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useActiveSection({ setActiveSection });

  useEffect(() => {
    const handleScroll = () => {
  const scrolled = window.scrollY > 120;

  setIsScrolled((prev) =>
    prev !== scrolled ? scrolled : prev
  );
};

    window.addEventListener("scroll", handleScroll, {
  passive: true,
});


    handleScroll();

    return () =>
  window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);



  return (
    <>
      <header
  id="navbar"
      
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          transition-all
          duration-300

          ${
            isScrolled
              ? "bg-[#081420]/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] border-b border-white/10 shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <Container>
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-300

              ${
                isScrolled
                ? "h-[72px]"
                : "h-24"
              }
            `}
          >
            {/* Logo */}

            <button
  type="button"
  onClick={() => {
    scrollToSection("home");
    setActiveSection("home");
  }}
  aria-label="Go to Home"
  className="cursor-pointer"
>
  <Logo />
</button>

            {/* Desktop Navigation */}

            <DesktopNavigation
              activeSection={activeSection}
            />

            {/* CTA */}

            <ContactButton />

            {/* Mobile */}

            <MobileMenuButton
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
            />
          </div>
        </Container>
      </header>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}