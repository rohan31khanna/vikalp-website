import type { WorkflowAnswers } from "@/types/workflowAnswers";

import { getIncomeTaxPreparation } from "./incomeTax";
import { getGstPreparation } from "./gst";
import { getAssessmentPreparation } from "./assessment";
import { getAppealsPreparation } from "./appeals";
import { getTaxRecoveryPreparation } from "./taxRecovery";
import { getTaxNoticePreparation } from "./taxNotice";
import { getCorporateTaxPreparation } from "./corporateTax";
import { getInternationalTaxPreparation } from "./internationalTax";
import { getDefaultTaxationPreparation } from "./default";

export function getTaxationPreparation(
  workflowAnswers: WorkflowAnswers
) {
  switch (workflowAnswers.matter) {
    case "Income Tax Matters":
      return getIncomeTaxPreparation();

    case "GST & Indirect Tax":
      return getGstPreparation();

    case "Tax Assessment / Scrutiny":
      return getAssessmentPreparation();

    case "Tax Appeals & Litigation":
      return getAppealsPreparation();

    case "Tax Recovery & Demand":
      return getTaxRecoveryPreparation();

    case "Tax Notices & Compliance":
      return getTaxNoticePreparation();

    case "Corporate & Business Tax":
      return getCorporateTaxPreparation();

    case "International Tax / Cross-Border Tax":
      return getInternationalTaxPreparation();

    case "Other Taxation Matter":
    default:
      return getDefaultTaxationPreparation();
  }
}