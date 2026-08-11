"use client";

import { Scale } from "lucide-react";

import { useNavigatorContext } from "./NavigatorProvider";

export default function FloatingButton() {
  const { open } = useNavigatorContext();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={open}
        aria-label="Find the Right Practice Area"
        className="
          group
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#A67C52]
          text-white
          shadow-xl
          transition-all
          duration-200
          hover:scale-105
          hover:bg-[#8C6845]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-amber-500
          focus-visible:ring-offset-2
        "
      >
        <Scale
          size={22}
          strokeWidth={2}
        />

        <span
          className="
            pointer-events-none
            absolute
            right-16
            top-1/2
            hidden
            -translate-y-1/2
            whitespace-nowrap
            rounded-lg
            bg-slate-900
            px-3
            py-2
            text-xs
            font-medium
            text-white
            opacity-0
            shadow-lg
            transition-opacity
            duration-200
            group-hover:opacity-100
            lg:block
          "
        >
          Find the Right Practice Area
        </span>
      </button>
    </div>
  );
}