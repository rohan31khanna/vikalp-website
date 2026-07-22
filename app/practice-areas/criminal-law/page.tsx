import type { Metadata } from "next";

import PracticePage from "@/components/practice/PracticePage";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Criminal Law",

  description:
    "Expert criminal law services by VIKALP Advocates & Legal Consultants. Representation in criminal cases, defense strategies, and legal proceedings.",

  alternates: {
    canonical: "/practice-areas/criminal-law",
  },

  openGraph: {
    title: "Criminal Law",
    description:
      "Expert criminal law services by VIKALP Advocates & Legal Consultants. Representation in criminal cases, defense strategies, and legal proceedings.",
    url: "/practice-areas/criminal-law",
    type: "article",
  },
};

export default function CriminalLawPage() {
  return (
    <PracticePage
      practice={practiceAreas["criminal-law"]}
    />
  );
}