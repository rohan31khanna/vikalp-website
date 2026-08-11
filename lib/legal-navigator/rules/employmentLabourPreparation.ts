import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getEmploymentLabourPreparation as getEmploymentLabourPreparationByMatter,
} from "./employmentLabour";

export function getEmploymentLabourPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getEmploymentLabourPreparationByMatter(workflowAnswers);
}