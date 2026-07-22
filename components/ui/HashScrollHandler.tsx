"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const id = hash.substring(1);

    requestAnimationFrame(() => {
      scrollToSection(id);
    });
  }, []);

  return null;
}