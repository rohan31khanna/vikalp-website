"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/practice/Breadcrumb";
import ScrollIndicator from "@/components/practice/ScrollIndicator";
import { practiceIcons, PracticeIcon } from "@/lib/practiceIcons";


interface PracticeHeroProps {
  title: string;
  description: string;
  icon: PracticeIcon;
}

export default function PracticeHero({
    title,
    description,
    icon,
}: PracticeHeroProps) {

const Icon = practiceIcons[icon];
    return (
        <section className="relative overflow-hidden bg-[#081420] min-h-[calc(100svh-6rem)] pt-28 pb-12 md:pt-32 md:pb-16">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,169,106,0.12),_transparent_45%)]" />
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C8A96A]/20 to-transparent" />

            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C8A96A]/20 to-transparent" />
            <Container>
                <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

                    <div>

                        <Breadcrumb />


                        <h1 className="mt-6 font-serif text-5xl leading-tight text-white md:text-6xl">
                            {title}
                        </h1>

                        <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
                            {description}
                        </p>

                        <div className="mt-10">
                            <Link
                                href="/#contact"
                                className="
        inline-flex
        rounded-xl
        border
        border-[#C8A96A]
        px-8
        py-4
        font-medium
        text-[#C8A96A]
        transition-all  
        hover:bg-[#C8A96A]
        hover:text-[#081420]
      "
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center">

  <div
    className="
      flex
      h-[420px]
      w-[420px]
      items-center
      justify-center
      rounded-full
      border
      border-[#C8A96A]/20
      bg-gradient-to-br
      from-[#C8A96A]/5
      to-transparent
    "
  >

    <div
      className="
        flex
        h-[300px]
        w-[300px]
        items-center
        justify-center
        rounded-full
        border
        border-[#C8A96A]/20
      "
    >

      <Icon
  size={170}
  strokeWidth={1}
  className="text-[#C8A96A]/15"
/>

    </div>

  </div>

</div>
                    </div>
                    
            </Container>
            <ScrollIndicator />
        </section>
    );
}