import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getArbitrationPreparation as getArbitrationPreparationByMatter,
} from "./arbitration";

export function getArbitrationPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getArbitrationPreparationByMatter(workflowAnswers);
}