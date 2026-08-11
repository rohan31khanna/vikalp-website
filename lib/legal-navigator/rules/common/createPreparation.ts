import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { NAVIGATOR_DISCLAIMER } from "@/data/legalNavigator/constants";
import { DEFAULT_CONSULTATION_BENEFITS } from "./consultationBenefits";

type PreparationContent = Omit<
  ConsultationPreparation,
  | "consultationBenefits"
  | "estimatedDuration"
  | "disclaimer"
>;

export function createPreparation(
  content: PreparationContent
): ConsultationPreparation {
  return {
    consultationBenefits: [
      ...DEFAULT_CONSULTATION_BENEFITS,
    ],

    estimatedDuration: "45–60 minutes",

    disclaimer: NAVIGATOR_DISCLAIMER,

    ...content,
  };
}