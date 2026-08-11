import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getConsumerPreparation as getConsumerPreparationByMatter,
} from "./consumer";

export function getConsumerPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getConsumerPreparationByMatter(workflowAnswers);
}