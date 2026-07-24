"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
const pathname = usePathname();
const hiddenPages = [
  "/disclaimer",
  "/privacy-policy",
  "/terms",
];
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
if (hiddenPages.includes(pathname)) {
  return null;
}
    return (
        <>
            {isVisible && (
                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    aria-label="Scroll to top"
                    className="
fixed
bottom-6
right-6
z-50
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-gray-200
bg-[#B08D57]
text-white
shadow-xl
transition-all
duration-300
hover:-translate-y-1
hover:scale-110
hover:shadow-2xl
active:scale-95
focus:outline-none
focus:ring-2
focus:ring-[#B08D57]
focus:ring-offset-2
"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </>
    );
}