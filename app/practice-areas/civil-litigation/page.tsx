import type { Metadata } from "next";

import PracticePage from "@/components/practice/PracticePage";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Civil Litigation",

  description:
    "Expert civil litigation services by VIKALP Advocates & Legal Consultants. Representation in civil suits, recovery matters, property disputes, injunctions and appeals.",

  alternates: {
    canonical: "/practice-areas/civil-litigation",
  },

  openGraph: {
    title: "Civil Litigation",
    description:
      "Expert civil litigation services by VIKALP Advocates & Legal Consultants. Representation in civil suits, recovery matters, property disputes, injunctions and appeals.",
    url: "/practice-areas/civil-litigation",
    type: "article",
  },
};

export default function CivilLitigationPage() {
  return (
    <PracticePage
      practice={practiceAreas["civil-litigation"]}
    />
  );
}