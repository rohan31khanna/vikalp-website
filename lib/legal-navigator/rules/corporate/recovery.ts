import { createPreparation } from "../common/createPreparation";

export function getCorporateRecoveryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding recovery of outstanding business payments or commercial dues.",
      "Your responses indicate that the underlying transaction, contractual obligations and payment records should be reviewed to understand the basis of the recovery claim.",
      "The consultation will focus on assessing the outstanding amount, reviewing supporting documents and discussing appropriate legal recovery options.",
    ],

    documents: [
      "Relevant Contract or Agreement",
      "Invoices / Bills",
      "Payment Records",
      "Ledger or Account Statements",
      "Purchase Orders / Work Orders (if applicable)",
      "Delivery or Service Records (if applicable)",
      "Email or Written Correspondence",
      "Legal Notices or Replies (if any)",
      "Acknowledgement of Outstanding Dues (if available)",
      "Any Other Supporting Documents",
    ],

    discussionPoints: [
      "Background of the commercial transaction",
      "Nature and amount of the outstanding dues",
      "Contractual payment terms",
      "Payments already received, if any",
      "Supporting invoices and account records",
      "Correspondence regarding the outstanding amount",
      "Previous demands, notices or recovery attempts",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing contracts, invoices and payment records",
      "Understanding the basis of the recovery claim",
      "Assessing available legal recovery options",
      "Discussing appropriate next steps for recovery",
    ],

    urgencyLevel: "high",
  });
}