import { createPreparation } from "../common/createPreparation";

export function getConsumerFinancialPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a consumer matter involving banking, financial services or an insurance claim.",
      "Your responses indicate that the relevant account, transaction, policy and communication records should be reviewed to understand the issue.",
      "The consultation will focus on understanding the financial or insurance dispute, reviewing the available records and discussing appropriate consumer remedies.",
    ],

    documents: [
      "Bank / Insurance Account Details",
      "Relevant Bank Statements or Transaction Records",
      "Loan / Financial Service Documents (if applicable)",
      "Insurance Policy and Policy Schedule (if applicable)",
      "Claim Form and Claim-Related Documents (if applicable)",
      "Claim Rejection / Settlement Communication (if applicable)",
      "Emails, Messages or Correspondence with the Bank / Insurer",
      "Complaint or Grievance Records",
      "Legal Notice or Response (if any)",
      "Any Other Relevant Financial Documents",
    ],

    discussionPoints: [
      "Background of the banking or insurance matter",
      "Nature of the transaction, account or insurance policy involved",
      "Details of the disputed transaction, claim or service deficiency",
      "Payments, deductions or financial loss involved",
      "Communication with the bank, insurer or financial service provider",
      "Complaint or grievance process already followed",
      "Current status of the dispute",
      "Any applicable deadline or limitation concern",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the relevant financial, banking or insurance documents",
      "Understanding the nature of the consumer grievance",
      "Assessing the available consumer remedies",
      "Reviewing the complaint and communication history",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}