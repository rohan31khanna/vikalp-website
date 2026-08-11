import type { WorkflowAnswers } from "@/types/workflowAnswers";

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

export function generateDocuments(
  workflowAnswers: WorkflowAnswers,
  fallback: string[]
): string[] {
  const practice = workflowAnswers.practiceArea;

  switch (practice) {
    case "Family & Marriage":
      return (
        getFamilyPreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Criminal Law":
      return (
        getCriminalPreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Property & Real Estate":
      return (
        getPropertyPreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Business & Corporate":
      return (
        getCorporatePreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Consumer Protection":
      return (
        getConsumerPreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Civil Litigation":
      return (
        getCivilPreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Banking & Finance":
      return (
        getBankingPreparation(workflowAnswers)?.documents ?? fallback
      );

    case "Employment & Labour":
      return (
        getEmploymentLabourPreparation(workflowAnswers)?.documents ??
        fallback
      );

    case "Taxation":
      return (
        getTaxationPreparation(workflowAnswers)?.documents ?? fallback
      );

      case "Arbitration & ADR":
  return (
    getArbitrationPreparation(workflowAnswers)?.documents ?? fallback
  );

case "Intellectual Property":
  return (
    getIPPreparation(workflowAnswers)?.documents ?? fallback
  );

case "Insolvency & Bankruptcy":
  return (
    getInsolvencyPreparation(workflowAnswers)?.documents ?? fallback
  );

    default:
      return fallback;
  }
}