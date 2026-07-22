"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: [0.4, 1, 0.4],
              y: [0, 10, 0],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-2
        text-[#C8A96A]/70
      "
    >
      <Mouse size={28} />

      <span className="text-[11px] uppercase tracking-[0.35em]">
        Scroll
      </span>
    </motion.div>
  );
}