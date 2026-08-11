import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getConsumerProductsPreparation } from "./products";
import { getConsumerServicesPreparation } from "./services";
import { getConsumerMedicalPreparation } from "./medical";
import { getConsumerFinancialPreparation } from "./financial";
import { getConsumerBuilderPreparation } from "./builder";
import { getConsumerUnfairTradePreparation } from "./unfairTrade";
import { getDefaultConsumerPreparation } from "./default";

export function getConsumerPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Defective Product":
      return getConsumerProductsPreparation();

    case "Warranty & After-Sales Issues":
      return getConsumerProductsPreparation();

    case "E-commerce / Online Shopping":
      return getConsumerProductsPreparation();

    case "Deficiency in Service":
      return getConsumerServicesPreparation();

    case "Travel & Tourism Disputes":
      return getConsumerServicesPreparation();

    case "Education Service Complaints":
      return getConsumerServicesPreparation();

    case "Medical Negligence":
      return getConsumerMedicalPreparation();

    case "Banking Consumer Issues":
      return getConsumerFinancialPreparation();

    case "Insurance Claim Disputes":
      return getConsumerFinancialPreparation();

    case "Builder Consumer Complaints":
      return getConsumerBuilderPreparation();

    case "Unfair Trade Practices":
      return getConsumerUnfairTradePreparation();

    case "Other Consumer Matter":
    default:
      return getDefaultConsumerPreparation();
  }
}