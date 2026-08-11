import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getTaxationPreparation as getTaxationPreparationByMatter,
} from "./taxation";

export function getTaxationPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getTaxationPreparationByMatter(workflowAnswers);
}