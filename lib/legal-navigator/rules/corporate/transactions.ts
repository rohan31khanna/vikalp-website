import { createPreparation } from "../common/createPreparation";

export function getCorporateTransactionPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a merger, acquisition or business transaction.",
      "Your responses indicate that the proposed transaction, ownership structure and relevant business and legal documents should be carefully reviewed before proceeding.",
      "The consultation will focus on understanding the transaction structure, identifying key legal considerations and discussing the documentation and approvals that may be required.",
    ],

    documents: [
      "Company / Business Registration Documents",
      "Constitutional Documents / Incorporation Documents",
      "Shareholding and Ownership Records",
      "Existing Shareholder / Partnership Agreements (if applicable)",
      "Financial Statements or Business Records (if available)",
      "Existing Material Contracts",
      "Draft Term Sheet / Letter of Intent (if available)",
      "Due Diligence Documents (if available)",
      "Regulatory Approvals or Correspondence (if applicable)",
      "Any Other Relevant Transaction Documents",
    ],

    discussionPoints: [
      "Background and purpose of the proposed transaction",
      "Parties involved in the transaction",
      "Proposed ownership or business structure",
      "Commercial terms and transaction objectives",
      "Existing contracts, liabilities or obligations",
      "Due diligence requirements",
      "Regulatory or statutory approvals",
      "Transaction documentation and completion requirements",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the proposed transaction structure",
      "Reviewing the relevant corporate and transaction documents",
      "Identifying legal, contractual and regulatory considerations",
      "Discussing appropriate due diligence, documentation and next steps",
    ],

    urgencyLevel: "medium",
  });
}