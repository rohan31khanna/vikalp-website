import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { PRACTICE } from "@/data/legalNavigator/practiceAreas";

import {
  getFamilyPreparation,
  getCriminalPreparation,
  getPropertyPreparation,
  getCorporatePreparation,
  getConsumerPreparation,
  getCivilPreparation,
  getBankingPreparation,
  getEmploymentLabourPreparation,
  getTaxationPreparation,
  getArbitrationPreparation,
  getIPPreparation,
  getInsolvencyPreparation,
} from "./rules";

export function generatePreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation | null {
  switch (workflowAnswers.practiceArea) {
    case PRACTICE.FAMILY:
      return getFamilyPreparation(workflowAnswers);

    case PRACTICE.CRIMINAL:
      return getCriminalPreparation(workflowAnswers);

    case PRACTICE.PROPERTY:
      return getPropertyPreparation(workflowAnswers);

    case PRACTICE.CORPORATE:
      return getCorporatePreparation(workflowAnswers);

    case PRACTICE.CONSUMER:
      return getConsumerPreparation(workflowAnswers);

    case PRACTICE.CIVIL:
      return getCivilPreparation(workflowAnswers);

    case PRACTICE.BANKING:
      return getBankingPreparation(workflowAnswers);

    case PRACTICE.EMPLOYMENT_LABOUR:
      return getEmploymentLabourPreparation(workflowAnswers);

    case PRACTICE.TAXATION:
      return getTaxationPreparation(workflowAnswers);

    case PRACTICE.ARBITRATION:
      return getArbitrationPreparation(workflowAnswers);

    case PRACTICE.IP:
      return getIPPreparation(workflowAnswers);

     case PRACTICE.INSOLVENCY:
       return getInsolvencyPreparation(workflowAnswers);

    default:
      return null;
  }
}