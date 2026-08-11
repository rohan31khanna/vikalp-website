import { createPreparation } from "../common/createPreparation";

export function getCivilRecoveryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding recovery of money, unpaid dues, loans or another financial claim.",
      "Your responses indicate that the underlying transaction, payment records and supporting documents should be reviewed to understand the basis of the recovery claim.",
      "The consultation will focus on understanding the amount claimed, the parties involved and the available civil remedies for recovery."
    ],

    documents: [
      "Relevant Agreement / Contract (if applicable)",
      "Loan Documents (if applicable)",
      "Invoices / Bills / Payment Records",
      "Bank Statements or Transaction Records",
      "Account / Ledger Statements",
      "Acknowledgement of Debt or Outstanding Dues (if available)",
      "Legal Notice or Reply (if any)",
      "Previous Court Orders or Proceedings (if applicable)",
      "Relevant Email / Written Correspondence",
      "Any Other Supporting Documents"
    ],

    discussionPoints: [
      "Background of the financial transaction",
      "Amount claimed and basis of the claim",
      "Payment history and outstanding dues",
      "Parties involved in the transaction",
      "Relevant agreements and financial records",
      "Demands, notices or correspondence exchanged",
      "Previous settlement or recovery attempts",
      "Current legal status of the matter",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Reviewing the relevant agreements and financial records",
      "Understanding the basis of the recovery claim",
      "Assessing the available civil remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}