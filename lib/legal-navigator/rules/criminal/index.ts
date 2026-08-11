import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getBailPreparation } from "./bail";
import { getFirPreparation } from "./fir";
import { getCyberCrimePreparation } from "./cyberCrime";
import { getTheftPreparation } from "./theft";
import { getAssaultPreparation } from "./assault";
import { getDefaultCriminalPreparation } from "./default";

export function getCriminalPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation | null {

  switch (workflowAnswers.matter) {

    case "Bail":
      return getBailPreparation();

    case "FIR / Police Complaint":
      return getFirPreparation();

    case "Cyber Crime":
      return getCyberCrimePreparation();

    case "Theft / Robbery":
      return getTheftPreparation();

    case "Assault / Hurt":
      return getAssaultPreparation();

    default:
      return getDefaultCriminalPreparation();
  }
}