import { createPreparation } from "../common/createPreparation";

export function getBankingChequePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a cheque dishonour or cheque-related payment dispute.",
      "Your responses indicate that the cheque, underlying transaction, bank return records and communications between the parties should be reviewed carefully.",
      "The consultation will focus on understanding the circumstances of the dishonour, the relevant documents and the available legal remedies."
    ],

    documents: [
      "Dishonoured Cheque",
      "Cheque Return Memo / Bank Return Memo",
      "Bank Account Statement",
      "Underlying Agreement / Transaction Documents",
      "Invoices / Bills / Payment Records",
      "Legal Demand Notice (if any)",
      "Reply to Legal Notice (if any)",
      "Proof of Delivery / Receipt of Notice",
      "Previous Court Documents or Orders (if applicable)",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Background of the transaction",
      "Amount and purpose of the cheque",
      "Date of issuance and presentation",
      "Reason for cheque dishonour",
      "Communication between the parties",
      "Demand notice or other legal correspondence",
      "Payments or settlement attempts after dishonour",
      "Previous legal proceedings, if any",
      "Current status of the matter",
      "Any applicable deadlines or immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the cheque and bank return records",
      "Understanding the underlying financial transaction",
      "Reviewing relevant notices and supporting documents",
      "Identifying available legal remedies and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}