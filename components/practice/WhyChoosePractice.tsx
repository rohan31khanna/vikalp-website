"use client";

import Container from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Experienced Legal Representation",
    description:
      "Practical legal advice backed by courtroom experience and strategic thinking.",
    icon: Scale,
  },
  {
    title: "Client-Centric Approach",
    description:
      "Every matter receives personal attention with transparent communication throughout the process.",
    icon: Users,
  },
  {
    title: "Ethical & Confidential",
    description:
      "We maintain the highest standards of professional ethics and complete confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "Result-Oriented Strategy",
    description:
      "Our focus is to deliver practical legal solutions aligned with each client's objectives.",
    icon: BadgeCheck,
  },
];

export default function WhyChoosePractice() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="bg-white py-20">
      <Container>
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 20 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}

          className="mx-auto max-w-3xl text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Why Choose VIKALP
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#081420]">
            Trusted Legal Guidance
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine legal knowledge, strategic thinking and a client-first
            approach to help individuals and businesses navigate legal
            challenges with confidence.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  delay: index * 0.12,
                }}

                className="
          group
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C8A96A]
          hover:shadow-2xl
        "
              >
                <div
                  className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-[#081420]
            text-[#C8A96A]
            transition-all
            duration-300
            group-hover:scale-110
          "
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#081420]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}