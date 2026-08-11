import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { createPreparation } from "../common/createPreparation";

export function getDefaultPropertyPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Property & Real Estate.",
      "The consultation will focus on understanding the property issue, relevant documents and the appropriate legal process.",
      "Providing relevant property records and correspondence can help the legal team assess your matter more efficiently.",
    ],

    documents: [
      "Identity Proof",
      "Property Title / Ownership Documents",
      "Sale Deed / Agreement (if applicable)",
      "Property Tax / Revenue Records (if applicable)",
      "Relevant Notices or Correspondence",
    ],

    discussionPoints: [
      "Background of the property matter",
      "Current ownership or possession status",
      "Relevant property documents",
      "Dispute or transaction details",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the facts and property records",
      "Reviewing available documents",
      "Explaining relevant legal procedures",
      "Discussing appropriate next steps",
    ],

    urgencyLevel: "medium",
  });
}