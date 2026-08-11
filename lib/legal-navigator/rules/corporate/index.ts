import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getCorporateFormationPreparation } from "./formation";
import { getCorporateContractsPreparation } from "./contracts";
import { getCorporateCompliancePreparation } from "./compliance";
import { getCorporateDisputePreparation } from "./disputes";
import { getCorporateRecoveryPreparation } from "./recovery";
import { getCorporateTransactionPreparation } from "./transactions";
import { getCorporateRegulatoryPreparation } from "./regulatory";
import { getCorporateIPPreparation } from "./ip";
import { getCorporateRestructuringPreparation } from "./restructuring";
import { getDefaultCorporatePreparation } from "./default";

export function getCorporatePreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Company / LLP Formation":
      return getCorporateFormationPreparation();

    case "Business Structuring & Startup Advisory":
      return getCorporateFormationPreparation();

    case "Commercial Contracts & Agreements":
      return getCorporateContractsPreparation();

    case "Contract Drafting & Review":
      return getCorporateContractsPreparation();

    case "Corporate Compliance":
      return getCorporateCompliancePreparation();

    case "Employment & HR Documentation":
      return getCorporateCompliancePreparation();

    case "Commercial Dispute":
      return getCorporateDisputePreparation();

    case "Partnership & Shareholder Disputes":
      return getCorporateDisputePreparation();

    case "Commercial Recovery & Debt Recovery":
      return getCorporateRecoveryPreparation();

    case "Mergers & Acquisitions":
      return getCorporateTransactionPreparation();

    case "Business Regulatory Approvals":
      return getCorporateRegulatoryPreparation();

    case "Intellectual Property for Businesses":
      return getCorporateIPPreparation();

    case "Insolvency & Business Restructuring":
      return getCorporateRestructuringPreparation();

    case "Other Business Matter":
    default:
      return getDefaultCorporatePreparation();
  }
}