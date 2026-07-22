"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { scrollToSection } from "@/lib/scrollToSection";



export default function Hero() {
  return (
    <section id="home"
      className="section section-dark overflow-hidden">

      {/* Background Image */}

      <Image
        src="/images/hero-office.webp"
        alt="Modern law office representing VIKALP Advocates & Legal Consultants"
        fill
        priority
        quality={75}
        fetchPriority="high"
        sizes="100vw"
        className="
    object-cover
    object-center
    opacity-45
  "
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 z-0 bg-gradient-to-r
from-[#081420]/90
via-[#081420]/75
to-[#081420]/55" />

      <Container className="relative z-4 flex 
      min-h-screen
      items-center 
      pt-24 lg:pt-20
      lg:pl-6 xl:pl-8">

        <div className="max-w-3xl">

          <div className="mb-7 h-[2px] w-16 bg-[#C8A96A]" />

          <p className="mb-5 uppercase tracking-[0.35em] text-[#C8A96A]">
            Justice. Integrity. Excellence.
          </p>

          <h1
  className="
    text-5xl
    md:text-7xl
    xl:text-8xl
    font-light
    leading-tight
    text-white
  "
>
            Excellence
            <br />
            in Every
            <br />
            Argument.
          </h1>

          <p
            className="
            mt-2
            max-w-2.5xl
            text-xl
            leading-9
            text-gray-300
            "
          >
            Delivering strategic legal solutions across India for
            corporates, government institutions, financial
            organizations and individuals.
          </p>

          <div className="mt-3 flex flex-wrap gap-5">

         <Button href="#practice-areas">
  Explore Practice Areas
</Button>
            <Button href="#consultation-form">
              Book a Consultation
            </Button>

          </div>

        </div>

      </Container>
{/* Scroll Indicator */}

<button
  type="button"
  onClick={() => scrollToSection("about")}
  className="
  hidden
  lg:flex
  absolute
  bottom-8
  left-1/2
  z-10
  -translate-x-1/2
  flex-col
  items-center
  cursor-pointer
  group
"
  aria-label="Scroll to About section"
>
  {/* Mouse Outline */}

  <div
    className="
      flex
      h-12
      w-7
      justify-center
      rounded-full
      border-2
      border-white/60
      transition-colors
      duration-300
      group-hover:border-[#C8A96A]
    "
  >
    <div
      className="
        mt-2
        h-2
        w-2
        rounded-full
        bg-[#C8A96A]
        animate-scroll-wheel
        transition-all
        duration-300
        group-hover:animate-scroll-wheel-fast
      "
    />
  </div>

  <span
    className="
      mt-3
      text-xs
      uppercase
      tracking-[0.35em]
      text-white/70
      transition-colors
      duration-300
      group-hover:text-[#C8A96A]
    "
  >
    Scroll
  </span>
</button>
    </section>
  );
}