import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getCivilPreparation as getCivilPreparationByMatter,
} from "./civil";

export function getCivilPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getCivilPreparationByMatter(workflowAnswers);
}