import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getBankingDisputePreparation } from "./disputes";
import { getBankingLoanPreparation } from "./loans";
import { getBankingChequePreparation } from "./cheque";
import { getBankingFraudPreparation } from "./fraud";
import { getBankingCreditCardPreparation } from "./creditCard";
import { getBankingAccountPreparation } from "./accounts";
import { getBankingSecurityPreparation } from "./security";
import { getBankingRecoveryPreparation } from "./recovery";
import { getBankingSarfaesiPreparation } from "./sarfaesi";
import { getBankingRestructuringPreparation } from "./restructuring";
import { getBankingRegulatoryPreparation } from "./regulatory";
import { getDefaultBankingPreparation } from "./default";

export function getBankingPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Banking Disputes & Complaints":
      return getBankingDisputePreparation();

    case "Loan & EMI Disputes":
      return getBankingLoanPreparation();

    case "Loan Recovery / Bank Recovery":
      return getBankingRecoveryPreparation();

    case "Cheque Dishonour":
      return getBankingChequePreparation();

    case "Unauthorized / Fraudulent Transactions":
      return getBankingFraudPreparation();

    case "Credit Card Disputes":
      return getBankingCreditCardPreparation();

    case "Bank Account / Service Issues":
      return getBankingAccountPreparation();

    case "Mortgage / Security / Charge Matters":
      return getBankingSecurityPreparation();

    case "Debt Recovery & Financial Claims":
      return getBankingRecoveryPreparation();

    case "SARFAESI / Recovery Proceedings":
      return getBankingSarfaesiPreparation();

    case "Debt Restructuring / Settlement":
      return getBankingRestructuringPreparation();

    case "Financial Regulatory / Banking Compliance":
      return getBankingRegulatoryPreparation();

    case "Other Banking & Finance Matter":
    default:
      return getDefaultBankingPreparation();
  }
}