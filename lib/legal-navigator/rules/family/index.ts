import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getDivorcePreparation } from "./divorce";
import { getCustodyPreparation } from "./custody";
import { getMaintenancePreparation } from "./maintenance";
import { getRestitutionPreparation } from "./restitution";
import { getDefaultFamilyPreparation } from "./default";

export function getFamilyPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation | null {

  switch (workflowAnswers.matter) {

    case "Divorce":
      return getDivorcePreparation();

    case "Child Custody":
      return getCustodyPreparation();

    case "Maintenance":
      return getMaintenancePreparation();

    case "Restitution of Conjugal Rights":
      return getRestitutionPreparation();

    default:
      return getDefaultFamilyPreparation();

  }

}