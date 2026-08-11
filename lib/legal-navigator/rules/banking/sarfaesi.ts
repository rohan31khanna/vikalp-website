import { createPreparation } from "../common/createPreparation";

export function getBankingSarfaesiPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding SARFAESI proceedings or enforcement action initiated by a bank or financial institution.",
      "Your responses indicate that the loan records, demand notices, security documents and details of the recovery action should be reviewed carefully.",
      "The consultation will focus on understanding the stage of the recovery proceedings, the secured asset involved and the available legal remedies."
    ],

    documents: [
      "Loan / Facility Agreement",
      "Sanction Letter",
      "Loan Account Statement",
      "Demand Notice / SARFAESI Notice",
      "Possession Notice (if applicable)",
      "Sale Notice / Auction Notice (if applicable)",
      "Mortgage / Security Documents",
      "Title / Ownership Documents of the Secured Asset",
      "Repayment and Payment Records",
      "Correspondence with the Bank / Financial Institution",
      "DRT / Court Documents or Orders (if any)",
      "Any Other Relevant Recovery Documents"
    ],

    discussionPoints: [
      "Background of the loan and financial facility",
      "Outstanding dues and repayment history",
      "Nature and date of the SARFAESI notice",
      "Current stage of recovery or enforcement proceedings",
      "Secured asset and possession status",
      "Demand, possession or auction notices received",
      "Communications and representations made to the lender",
      "Previous proceedings before DRT, court or other authority",
      "Potential impact on the borrower or secured asset",
      "Immediate deadlines or enforcement concerns"
    ],

    consultationFocus: [
      "Reviewing the loan, security and recovery documents",
      "Understanding the current stage of SARFAESI proceedings",
      "Assessing the available legal remedies and procedural options",
      "Identifying relevant documents and important deadlines",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}