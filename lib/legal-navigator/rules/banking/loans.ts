import { createPreparation } from "../common/createPreparation";

export function getBankingLoanPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a loan, EMI or related lending dispute.",
      "Your responses indicate that the loan agreement, repayment history, account statements and communications with the lender should be reviewed.",
      "The consultation will focus on understanding the loan terms, the nature of the dispute and the available legal options."
    ],

    documents: [
      "Loan Agreement / Sanction Letter",
      "Repayment Schedule",
      "Loan Account Statement",
      "EMI Payment Records",
      "Bank Statements",
      "Interest / Charges Statements",
      "Restructuring or Settlement Documents (if applicable)",
      "Recovery Notices or Demand Letters (if any)",
      "Legal Notice or Reply (if any)",
      "Previous Court / Tribunal Documents (if applicable)",
      "Any Other Relevant Loan Documents"
    ],

    discussionPoints: [
      "Background of the loan",
      "Loan amount and repayment terms",
      "EMI and repayment history",
      "Interest, penalties or other charges",
      "Nature of the dispute with the lender",
      "Communications with the bank or financial institution",
      "Any default, demand or recovery action",
      "Settlement or restructuring discussions",
      "Current legal status",
      "Immediate financial or legal concerns"
    ],

    consultationFocus: [
      "Reviewing the loan agreement and account records",
      "Understanding the contractual and financial position",
      "Identifying potential issues with repayment, charges or recovery",
      "Assessing available legal or regulatory remedies",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}