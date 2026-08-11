import { createPreparation } from "../common/createPreparation";

export function getBankingAccountPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a bank account or banking service-related issue.",
      "Your responses indicate that the account records, relevant transactions and communications with the bank should be reviewed carefully.",
      "The consultation will focus on understanding the nature of the account or service issue, the actions already taken and the available legal or regulatory remedies.",
    ],

    documents: [
      "Bank Account Statements",
      "Account Opening / KYC Documents (if relevant)",
      "Relevant Transaction Records",
      "Bank Correspondence",
      "Complaint / Grievance Reference",
      "Account Blocking / Closure Notice (if applicable)",
      "KYC or Verification Correspondence (if applicable)",
      "Payment or Transfer Records",
      "Legal Notice or Reply (if any)",
      "Previous Court / Regulatory Documents (if applicable)",
      "Any Other Relevant Banking Documents",
    ],

    discussionPoints: [
      "Background of the account or banking service issue",
      "Nature of the problem affecting the account",
      "Relevant transactions or account activity",
      "Account blocking, freezing or closure, if applicable",
      "KYC, verification or documentation issues",
      "Charges, deductions or disputed banking services",
      "Communication with the bank or financial institution",
      "Complaints already submitted and responses received",
      "Current status of the account",
      "Immediate financial or legal concerns",
    ],

    consultationFocus: [
      "Reviewing account records and relevant banking documents",
      "Understanding the legal and contractual position",
      "Assessing available banking and regulatory remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}