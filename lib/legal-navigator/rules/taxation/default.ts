import { createPreparation } from "../common/createPreparation";

export function getDefaultTaxationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a taxation matter that does not fall clearly within the specific categories currently identified in the Legal Navigator.",
      "Your responses indicate that the relevant tax records, notices, transactions and supporting documents should be reviewed carefully to understand the nature of the matter.",
      "The consultation will focus on understanding the issue, identifying the relevant tax framework and discussing the appropriate legal or procedural options.",
    ],

    documents: [
      "PAN / Taxpayer Details",
      "GST Registration Certificate (if applicable)",
      "Relevant Tax Returns",
      "Tax Notices / Communications (if any)",
      "Assessment / Adjudication Orders (if any)",
      "Tax Demand / Payment Records (if applicable)",
      "Income / Business / Financial Records",
      "Books of Accounts / Financial Statements",
      "Invoices / Transaction Documents",
      "Bank Statements (if relevant)",
      "Previous Replies / Submissions",
      "Appeal / Litigation Documents (if applicable)",
      "Correspondence with Tax Authorities",
      "Any Other Relevant Tax Documents",
    ],

    discussionPoints: [
      "Background and nature of the taxation matter",
      "Tax authority or department involved",
      "Relevant tax period or assessment year",
      "Income, transaction or business activity involved",
      "Tax registration and filing position",
      "Notices, orders or communications received",
      "Tax, interest or penalty involved, if any",
      "Previous responses or proceedings",
      "Supporting evidence and available documentation",
      "Current stage of the matter",
      "Immediate deadlines or compliance concerns",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Understanding the nature and scope of the taxation matter",
      "Reviewing relevant tax records and supporting documents",
      "Identifying the applicable tax and procedural issues",
      "Reviewing available compliance, representation or dispute-resolution options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "medium",
  });
}