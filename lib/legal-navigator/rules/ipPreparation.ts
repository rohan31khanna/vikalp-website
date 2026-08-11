import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getIPPreparation as getIPPreparationByMatter,
} from "./ip";

export function getIPPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getIPPreparationByMatter(workflowAnswers);
}