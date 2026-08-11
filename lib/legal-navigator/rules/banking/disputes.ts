import { createPreparation } from "../common/createPreparation";

export function getBankingDisputePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a dispute or complaint involving a bank or financial institution.",
      "Your responses indicate that the banking records, transaction history and communications with the bank should be reviewed carefully.",
      "The consultation will focus on understanding the nature of the dispute, the actions already taken and the appropriate legal or regulatory remedies available.",
    ],

    documents: [
      "Bank Account Statements",
      "Relevant Bank Correspondence",
      "Complaint / Grievance Copies",
      "Transaction Records",
      "Loan or Banking Agreements (if applicable)",
      "Bank Notices or Demand Letters (if any)",
      "KYC / Account Documents (if relevant)",
      "Previous Legal Notices or Replies (if any)",
      "RBI / Ombudsman Complaint Documents (if applicable)",
      "Any Other Relevant Banking Documents",
    ],

    discussionPoints: [
      "Background of the banking dispute",
      "Nature of the dispute or complaint",
      "Bank account or financial product involved",
      "Transactions and amounts in dispute",
      "Communication with the bank or financial institution",
      "Complaints already submitted and responses received",
      "Relevant banking documents and records",
      "Any notices, recovery action or legal proceedings",
      "Immediate financial or legal concerns",
    ],

    consultationFocus: [
      "Reviewing relevant banking records and correspondence",
      "Understanding the legal position regarding the banking dispute",
      "Assessing available legal and regulatory remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}