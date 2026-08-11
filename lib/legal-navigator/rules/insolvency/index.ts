import type { WorkflowAnswers } from "@/types/workflowAnswers";

import { getCorporatePreparation } from "./corporate";
import { getCIRPPreparation } from "./cirp";
import { getLiquidationPreparation } from "./liquidation";
import { getRecoveryPreparation } from "./recovery";
import { getCreditorPreparation } from "./creditor";
import { getNCLTPreparation } from "./nclt";
import { getPersonalGuarantorPreparation } from "./personalGuarantor";
import { getDefaultInsolvencyPreparation } from "./default";

export function getInsolvencyPreparation(
  workflowAnswers: WorkflowAnswers
) {
  switch (workflowAnswers.matter) {
    case "Corporate Insolvency":
      return getCorporatePreparation();

    case "Corporate Insolvency Resolution / CIRP":
      return getCIRPPreparation();

    case "Liquidation":
      return getLiquidationPreparation();

    case "Debt Recovery / Insolvency Recovery":
      return getRecoveryPreparation();

    case "Creditor Matters":
      return getCreditorPreparation();

    case "NCLT Proceedings":
      return getNCLTPreparation();

    case "Personal Guarantor Matters":
      return getPersonalGuarantorPreparation();

    case "Other Insolvency / Bankruptcy Matter":
    default:
      return getDefaultInsolvencyPreparation();
  }
}