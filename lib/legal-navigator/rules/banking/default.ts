import { createPreparation } from "../common/createPreparation";

export function getDefaultBankingPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Banking & Finance.",
      "The consultation will help assess the financial transaction, relevant banking records and the circumstances surrounding your matter.",
      "Providing relevant agreements, account records, correspondence and supporting documents can help the legal team understand your matter more efficiently.",
    ],

    documents: [
      "Identity Proof",
      "Relevant Banking / Financial Agreements",
      "Bank Account Statements",
      "Loan / Transaction Records (if applicable)",
      "Bank or Financial Institution Correspondence",
      "Notices or Demand Letters (if any)",
      "Complaint / Grievance Records (if applicable)",
      "Previous Court / Tribunal / Regulatory Documents (if any)",
      "Supporting Evidence",
      "Any Other Relevant Financial Documents",
    ],

    discussionPoints: [
      "Background of the banking or financial matter",
      "Bank, financial institution or other party involved",
      "Nature of the financial issue or dispute",
      "Relevant transactions, accounts or financial arrangements",
      "Documents and records available",
      "Communication with the bank or financial institution",
      "Previous complaints, notices or proceedings",
      "Current status of the matter",
      "Financial impact or potential loss",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the facts and financial circumstances",
      "Reviewing available banking and financial documents",
      "Identifying relevant legal or regulatory remedies",
      "Understanding procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}