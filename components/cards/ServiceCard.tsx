"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  delay = 0,
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={href}
      className="group block h-full focus-visible:outline-none"
    >
      <motion.article
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 30 }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay,
        }}
        className="
          group
          flex
          h-full
          flex-col
          cursor-pointer
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C8A96A]
          hover:shadow-2xl
          group-focus-visible:border-[#C8A96A]
          group-focus-visible:shadow-2xl
        "
      >
        <div
          className="
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-[#081420]
            text-[var(--gold-dark)]
            transition-all
            duration-300
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        <h3
          className="
            mb-4
            text-2xl
            font-semibold
            text-[#081420]
            transition-colors
            duration-300
            group-hover:text-[#C8A96A]
          "
        >
          {title}
        </h3>

        <p className="leading-8 text-gray-600">
          {description}
        </p>

        <div
          className="
            mt-auto
            inline-flex
            items-center
            gap-3
            pt-8
            text-[var(--gold-dark)]
            transition-all
            duration-300
            group-hover:gap-5
          "
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </motion.article>
    </Link>
  );
}