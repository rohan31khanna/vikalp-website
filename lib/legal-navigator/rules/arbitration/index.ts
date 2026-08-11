import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getCommercialArbitrationPreparation } from "./commercial";
import { getArbitratorAppointmentPreparation } from "./appointment";
import { getArbitrationProceedingsPreparation } from "./proceedings";
import { getArbitrationAwardPreparation } from "./award";
import { getArbitrationEnforcementPreparation } from "./enforcement";
import { getArbitrationInterimPreparation } from "./interim";
import { getDomesticArbitrationPreparation } from "./domestic";
import { getInternationalArbitrationPreparation } from "./international";
import { getDefaultArbitrationPreparation } from "./default";

export function getArbitrationPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Commercial Arbitration":
      return getCommercialArbitrationPreparation();

    case "Arbitrator Appointment / Challenge":
      return getArbitratorAppointmentPreparation();

    case "Arbitration Proceedings":
      return getArbitrationProceedingsPreparation();

    case "Arbitration Award Challenge":
      return getArbitrationAwardPreparation();

    case "Arbitration Award Enforcement":
      return getArbitrationEnforcementPreparation();

    case "Interim Relief in Arbitration":
      return getArbitrationInterimPreparation();

    case "Domestic Arbitration":
      return getDomesticArbitrationPreparation();

    case "International Arbitration":
      return getInternationalArbitrationPreparation();

    case "Other Arbitration / ADR Matter":
    default:
      return getDefaultArbitrationPreparation();
  }
}