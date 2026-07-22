"use client";

import { useState } from "react";

export default function useCountUp() {
  const [count, setCount] = useState(0);

  const startCount = (
    target: number,
    duration = 1200
  ) => {
    const steps = 40;
    const increment = Math.ceil(target / steps);
    const interval = duration / steps;

    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setCount(current);
    }, interval);
  };

  return {
    count,
    startCount,
  };
}