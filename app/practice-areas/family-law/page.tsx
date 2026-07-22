import type { Metadata } from "next";

import PracticePage from "@/components/practice/PracticePage";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Family Law",

  description:
    "Expert family law services by VIKALP Advocates & Legal Consultants. Representation in divorce, child custody, domestic violence, and prenuptial agreements.",

  alternates: {
    canonical: "/practice-areas/family-law",
  },

  openGraph: {
    title: "Family Law",
    description:
      "Expert family law services by VIKALP Advocates & Legal Consultants. Representation in divorce, child custody, domestic violence, and prenuptial agreements.",
    url: "/practice-areas/family-law",
    type: "article",
  },
};

export default function FamilyLawPage() {
  return (
    <PracticePage
      practice={practiceAreas["family-law"]}
    />
  );
}