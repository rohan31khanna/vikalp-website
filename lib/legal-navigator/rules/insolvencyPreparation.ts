import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getInsolvencyPreparation as getInsolvencyPreparationByMatter,
} from "./insolvency";

export function getInsolvencyPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getInsolvencyPreparationByMatter(workflowAnswers);
}