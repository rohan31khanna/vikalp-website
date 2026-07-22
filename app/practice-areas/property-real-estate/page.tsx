import type { Metadata } from "next";

import PracticePage from "@/components/practice/PracticePage";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Property & Real Estate",

  description:
    "Expert property and real estate legal services by VIKALP Advocates & Legal Consultants. Assistance with property transactions, title issues, zoning matters, and real estate disputes.",

  alternates: {
    canonical: "/practice-areas/property-real-estate",
  },

  openGraph: {
    title: "property-real-estate",
    description:
      "Expert property and real estate legal services by VIKALP Advocates & Legal Consultants. Assistance with property transactions, title issues, zoning matters, and real estate disputes.",
    url: "/practice-areas/property-real-estate",
    type: "article",
  },
};

export default function PropertyRealEstatePage() {
  return (
    <PracticePage
      practice={practiceAreas["property-real-estate"]}
    />
  );
}