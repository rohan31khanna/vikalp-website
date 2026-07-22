import PracticeHero from "@/components/practice/PracticeHero";
import PracticeOverview from "@/components/practice/PracticeOverview";
import PracticeServices from "@/components/practice/PracticeServices";
import WhyChoosePractice from "@/components/practice/WhyChoosePractice";
import PracticeFAQs from "@/components/practice/PracticeFAQs";
import BackToPracticeAreas from "@/components/practice/BackToPracticeAreas";
import PracticeCTA from "@/components/practice/PracticeCTA";

import type { PracticeArea } from "@/data/practiceAreas";

interface PracticePageProps {
  practice: PracticeArea;
}

export default function PracticePage({
  practice,
}: PracticePageProps) {
  if (!practice) {
    throw new Error("PracticePage received an undefined practice object.");
  }
  return (
    <>
      <PracticeHero
        title={practice.title}
        description={practice.shortDescription}
        icon={practice.icon}
      />

      <BackToPracticeAreas />

      <PracticeOverview />

      <PracticeServices
        services={practice.services}
      />

      <WhyChoosePractice />

      <PracticeFAQs
        faqs={practice.faqs}
      />

      <BackToPracticeAreas />

      <PracticeCTA />
    </>
  );
}