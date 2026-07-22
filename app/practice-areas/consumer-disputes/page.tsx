import type { Metadata } from "next";

import PracticePage from "@/components/practice/PracticePage";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Consumer Disputes",

  description:
    "Expert consumer dispute resolution services by VIKALP Advocates & Legal Consultants. Representation in consumer protection cases, warranty claims, and unfair trade practice matters.",

  alternates: {
    canonical: "/practice-areas/consumer-disputes",
  },

  openGraph: {
    title: "Consumer Disputes",
    description:
      "Expert consumer dispute resolution services by VIKALP Advocates & Legal Consultants. Representation in consumer protection cases, warranty claims, and unfair trade practice matters.",
    url: "/practice-areas/consumer-disputes",
    type: "article",
  },
};

export default function ConsumerDisputePage() {
  return (
    <PracticePage
      practice={practiceAreas["consumer-disputes"]}
    />
  );
}