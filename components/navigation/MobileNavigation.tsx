import { X } from "lucide-react";
import { navigation } from "@/data/navigation";
import Button from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";
import Image from "next/image";

interface MobileNavigationProps {
    isOpen: boolean;
    onClose: () => void;
    activeSection: string;
}

export default function MobileNavigation({
    isOpen,
    onClose,
    activeSection,
}: MobileNavigationProps) {
    const MENU_CLOSE_DELAY = 180;
    return (
        <div
  className={`
    fixed
    inset-0
    z-[100]
    overflow-hidden
    bg-gradient-to-b
    from-[#081420]
    via-[#0B1A29]
    to-[#081420]

    ${
      isOpen
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }
  `}
>

  {/* Background Watermark */}

  <Image
    src="/images/scales-watermark.svg"
    alt=""
    aria-hidden="true"
    width={420}
    height={420}
    priority={false}
    className="
      pointer-events-none
      select-none
      absolute
      left-[68%]
      top-[48%]
      rotate-[-10deg]
      -translate-x-1/2
      -translate-y-1/2
      opacity-[0.015]
      w-[480px]
      md:w-[420px]
    "
  />
            {/* Mobile Navigation */}


            <div className="relative z-10 flex h-full flex-col overflow-y-auto px-8">

                {/* Header */}
                <div className="flex items-start justify-between border-b border-white/5 py-7">

                    <div>
                        <h2 className="text-[1.5rem] font-light tracking-[0.18em] text-white">
                            VIKALP
                        </h2>

                        <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-[#C8A96A]">
                            Advocates & Legal Consultants
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close navigation menu"
                        className="
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-white/10
bg-white/[0.06]
backdrop-blur-md
shadow-[0_8px_30px_rgba(0,0,0,0.35)]
text-white/70
transition-all
duration-300
hover:scale-105
hover:border-[#C8A96A]
hover:bg-white/10
hover:text-[#C8A96A]
"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Navigation */}
                <div className="flex flex-col">

                    <div
  className="
    flex-1
    overflow-y-auto
    pt-4
  "
>

                        <nav
  aria-label="Mobile navigation"
  className="space-y-4 text-center"
>

                            {navigation.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();

                                        onClose();

                                        setTimeout(() => {
                                            scrollToSection(item.id);
                                        }, MENU_CLOSE_DELAY);
                                    }}
                                    style={{
                                        transitionDelay: isOpen
                                            ? `${index * 75}ms`
                                            : "0ms",
                                    }}
                                    className={`
  block
  text-[1.40rem] sm:text-[2rem]
  font-light
  uppercase
  tracking-[0.18em]
  transition-all
  duration-500
  ease-out

  ${isOpen
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-4 opacity-0"
                                        }

  ${activeSection === item.id
                                            ? "text-[#C8A96A]"
                                            : "text-white hover:text-[#C8A96A]"
                                        }
`}
                                >
                                    {item.label}
                                </a>
                            ))}

                        </nav>
                    </div>
                    {/* Contact Info */}
                    <div className="  border-t border-white/10 pt-8 pb-8">
<div className="flex justify-center">
  <Button
    className="
      w-full
      max-w-[250px]
      shadow-[0_8px_30px_rgba(200,169,106,0.28)]
      hover:shadow-[0_12px_40px_rgba(200,169,106,0.40)]
    "
    onClick={() => {
      onClose();

      setTimeout(() => {
        scrollToSection("consultation-form");
      }, MENU_CLOSE_DELAY);
    }}
  >
    Book a Consultation
  </Button>
</div>
  <a
    href="tel:+911234567890"
    className="
      mt-3
      block
      text-center
      text-base
      text-white/80
      transition-colors
      hover:text-[#C8A96A]
    "
  >
    Call: +91 12345 67890
  </a>

</div>
                </div>
            </div>
        </div>
    );
}