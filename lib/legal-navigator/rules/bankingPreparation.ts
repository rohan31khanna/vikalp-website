import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import {
  getBankingPreparation as getBankingPreparationByMatter,
} from "./banking";

export function getBankingPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return getBankingPreparationByMatter(workflowAnswers);
}