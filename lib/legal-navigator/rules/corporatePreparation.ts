import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getCorporatePreparation as getCorporatePreparationByMatter } from "./corporate";

export function getCorporatePreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getCorporatePreparationByMatter(workflowAnswers);
}