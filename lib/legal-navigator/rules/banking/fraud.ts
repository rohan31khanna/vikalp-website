import { createPreparation } from "../common/createPreparation";

export function getBankingFraudPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an unauthorized or potentially fraudulent banking or financial transaction.",
      "Your responses indicate that transaction records, account statements, communications with the bank and available evidence should be preserved and reviewed carefully.",
      "The consultation will focus on understanding the circumstances of the disputed transaction, actions already taken and the available legal or regulatory remedies.",
    ],

    documents: [
      "Bank Account Statement",
      "Transaction Details / Transaction ID",
      "SMS / Email Transaction Alerts",
      "Screenshots of the Transaction or Banking App",
      "Bank Complaint / Dispute Reference",
      "Credit / Debit Card Details or Statements (if applicable)",
      "Cyber Crime / Police Complaint (if filed)",
      "Communication with the Bank or Financial Institution",
      "Relevant Emails, Messages or Call Records",
      "Identity Proof",
      "Any Other Supporting Evidence",
    ],

    discussionPoints: [
      "Background and timeline of the disputed transaction",
      "Nature and amount of the unauthorized transaction",
      "Account, card or financial service involved",
      "How the transaction was discovered",
      "Whether the transaction was reported to the bank",
      "Response received from the bank or financial institution",
      "Complaints made to authorities or other platforms",
      "Digital or documentary evidence available",
      "Financial loss or continuing risk",
      "Immediate legal or financial concerns",
    ],

    consultationFocus: [
      "Reviewing transaction records and supporting evidence",
      "Understanding the legal and regulatory position",
      "Assessing available banking, regulatory and legal remedies",
      "Identifying appropriate complaint or recovery mechanisms",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}