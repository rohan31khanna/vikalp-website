"use client";

import { usePathname } from "next/navigation";
import DisclaimerModal from "./DisclaimerModal";

export default function DisclaimerGate() {
  const pathname = usePathname();

  if (pathname === "/disclaimer") {
    return null;
  }

  return <DisclaimerModal />;
}