import { createPreparation } from "../common/createPreparation";

export function getBankingRestructuringPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding restructuring, settlement or revised repayment arrangements for a loan or financial obligation.",
      "Your responses indicate that the loan terms, outstanding dues, repayment history and communications with the lender should be reviewed carefully.",
      "The consultation will focus on understanding the financial position, available restructuring or settlement options and the appropriate legal steps."
    ],

    documents: [
      "Loan / Facility Agreement",
      "Sanction Letter",
      "Loan Account Statement",
      "Repayment Schedule",
      "Bank Statements",
      "Outstanding Dues Statement",
      "Previous Restructuring / Settlement Offers (if any)",
      "Financial Statements / Income Records (if relevant)",
      "Bank or Financial Institution Correspondence",
      "Demand / Recovery Notices (if any)",
      "Previous Legal Notices or Court Documents (if applicable)",
      "Any Other Relevant Financial Documents"
    ],

    discussionPoints: [
      "Background of the loan or financial obligation",
      "Current outstanding amount",
      "Repayment history and reasons for difficulty, if applicable",
      "Current loan status and account position",
      "Previous restructuring or settlement discussions",
      "Offers or proposals made by the lender",
      "Financial circumstances relevant to repayment",
      "Recovery notices or proceedings, if any",
      "Security or collateral involved, if applicable",
      "Desired outcome and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the loan and financial records",
      "Understanding the current repayment and recovery position",
      "Assessing available restructuring or settlement options",
      "Reviewing relevant lender communications and documentation",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}