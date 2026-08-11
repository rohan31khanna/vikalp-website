import { createPreparation } from "../common/createPreparation";

export function getAppealsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a tax appeal or litigation matter arising from an assessment, demand, penalty, adjudication order or other tax-related decision.",
      "Your responses indicate that the relevant order, notices, tax records, previous submissions and supporting evidence should be reviewed carefully.",
      "The consultation will focus on understanding the disputed issues, the current stage of proceedings and the appropriate legal or procedural options available.",
    ],

    documents: [
      "PAN / Taxpayer Details",
      "Relevant Income Tax / GST Registration Details",
      "Tax Return(s)",
      "Assessment / Adjudication Order",
      "Demand Notice",
      "Penalty Order (if applicable)",
      "Show Cause Notice (if applicable)",
      "Notices / Communications from Tax Authorities",
      "Previous Replies / Written Submissions",
      "Supporting Financial Records",
      "Books of Accounts / Financial Statements",
      "Invoices / Transaction Documents",
      "Tax Payment / Challan Details",
      "Previous Appeal / Tribunal Orders (if any)",
      "Court / Tribunal / Authority Proceedings Documents (if any)",
      "Correspondence with Tax Authorities",
      "Any Other Relevant Tax Litigation Documents",
    ],

    discussionPoints: [
      "Background and nature of the tax dispute",
      "Order, assessment or decision being challenged",
      "Issues and grounds of disagreement",
      "Tax, interest or penalty amount involved",
      "Notices and deadlines applicable to the matter",
      "Replies or submissions already made",
      "Evidence and documents supporting the taxpayer's position",
      "Previous appeal, revision or litigation history",
      "Current stage and forum of proceedings",
      "Any interim protection or stay requirement",
      "Financial or commercial impact of the dispute",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the disputed tax order and related documents",
      "Understanding the grounds and scope of the tax dispute",
      "Assessing available appeal, representation or litigation options",
      "Reviewing supporting evidence and previous submissions",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}