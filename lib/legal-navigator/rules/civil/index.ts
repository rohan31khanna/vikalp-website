import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getCivilRecoveryPreparation } from "./recovery";
import { getCivilInjunctionPreparation } from "./injunction";
import { getCivilPropertyPreparation } from "./property";
import { getCivilContractsPreparation } from "./contracts";
import { getCivilAppealsPreparation } from "./appeals";
import { getCivilDamagesPreparation } from "./damages";
import { getDefaultCivilPreparation } from "./default";

export function getCivilPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Money Recovery":
      return getCivilRecoveryPreparation();

    case "Injunction & Stay Orders":
      return getCivilInjunctionPreparation();

    case "Declaration & Civil Rights":
      return getCivilInjunctionPreparation();

    case "Possession & Eviction":
      return getCivilPropertyPreparation();

    case "Partition Suits":
      return getCivilPropertyPreparation();

    case "Family Property Disputes":
      return getCivilPropertyPreparation();

    case "Specific Performance":
      return getCivilContractsPreparation();

    case "Contractual Disputes":
      return getCivilContractsPreparation();

    case "Appeals & Revisions":
      return getCivilAppealsPreparation();

    case "Compensation & Damages":
      return getCivilDamagesPreparation();

    case "General Civil Dispute":
      return getDefaultCivilPreparation();

    case "Other Civil Matter":
    default:
      return getDefaultCivilPreparation();
  }
}