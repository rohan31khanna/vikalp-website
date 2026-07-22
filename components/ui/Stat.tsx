"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  number: string;
  label: string;
  delay?: number;
  animate?: boolean;
}

export default function Stat({
  number,
  label,
  delay = 0,
  animate = true,
}: Props) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    if (!animate || !startAnimation) return;

    const target = Number(number.replace(/\D/g, ""));

    if (Number.isNaN(target)) return;

    const duration = 1200; // milliseconds
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const currentValue = Math.floor(progress * target);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame.current =
          requestAnimationFrame(updateCounter);
      }
    };

    animationFrame.current =
      requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [animate, number, startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => {
        if (!startAnimation) {
          setStartAnimation(true);
        }
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="
        flex
        cursor-default
        flex-col
        items-center
        justify-center
        space-y-4
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-105
      "
    >
      <h3
        className="
          text-4xl
          font-light
          text-[#C8A96A]
          md:text-5xl
        "
      >
        {animate
          ? `${count}${number.includes("+") ? "+" : ""}`
          : number}
      </h3>

      {label && (
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-white/70
          "
        >
          {label}
        </p>
      )}
    </motion.div>
  );
}