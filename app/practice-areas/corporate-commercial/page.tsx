import type { Metadata } from "next";

import PracticePage from "@/components/practice/PracticePage";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Corporate Commercial",

  description:
    "Expert corporate and commercial legal services by VIKALP Advocates & Legal Consultants. Assistance with mergers, acquisitions, contracts, and regulatory compliance.",

  alternates: {
    canonical: "/practice-areas/corporate-commercial",
  },

  openGraph: {
    title: "Corporate Commercial",
    description:
      "Expert corporate and commercial legal services by VIKALP Advocates & Legal Consultants. Assistance with mergers, acquisitions, contracts, and regulatory compliance.",
    url: "/practice-areas/corporate-commercial",
    type: "article",
  },
};

export default function CorporateCommercialPage() {
  return (
    <PracticePage
      practice={practiceAreas["corporate-commercial"]}
    />
  );
}