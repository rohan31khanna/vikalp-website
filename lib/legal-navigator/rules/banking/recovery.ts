import { createPreparation } from "../common/createPreparation";

export function getBankingRecoveryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding recovery of a loan, outstanding debt or other financial claim.",
      "Your responses indicate that the underlying financial documents, repayment history and communications between the parties should be reviewed carefully.",
      "The consultation will focus on understanding the outstanding claim, recovery actions already taken and the appropriate legal remedies available.",
    ],

    documents: [
      "Loan / Facility Agreement (if applicable)",
      "Sanction Letter / Loan Documents",
      "Loan Account Statement",
      "Repayment Schedule",
      "Bank Statements / Payment Records",
      "Outstanding Dues / Account Statement",
      "Demand or Recovery Notice",
      "Legal Notice or Reply (if any)",
      "Security / Guarantee Documents (if applicable)",
      "Previous Court / Tribunal Documents (if applicable)",
      "Settlement or Restructuring Documents (if any)",
      "Any Other Relevant Financial Documents",
    ],

    discussionPoints: [
      "Background of the loan or financial transaction",
      "Amount outstanding and basis of the claim",
      "Repayment history and defaults",
      "Communications and demands made between the parties",
      "Recovery notices or other recovery actions",
      "Security, guarantee or collateral involved",
      "Previous settlement or restructuring discussions",
      "Existing court, tribunal or recovery proceedings",
      "Current status of the recovery matter",
      "Immediate financial or legal concerns",
    ],

    consultationFocus: [
      "Reviewing the financial and loan records",
      "Understanding the basis and status of the recovery claim",
      "Assessing available recovery and legal remedies",
      "Identifying relevant documents and procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}