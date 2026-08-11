import { createPreparation } from "../common/createPreparation";

export function getCorporateDisputePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a business or commercial dispute.",
      "Your responses indicate that the underlying agreements, business relationship and events leading to the dispute should be reviewed carefully.",
      "The consultation will focus on understanding the dispute, reviewing relevant documents and discussing the available legal options.",
    ],

    documents: [
      "Relevant Contract or Agreement",
      "Company / Business Registration Documents",
      "Invoices or Payment Records (if applicable)",
      "Email or Written Correspondence",
      "Legal Notices or Replies (if any)",
      "Previous Court or Tribunal Documents (if applicable)",
      "Partnership / Shareholder Documents (if applicable)",
      "Records of Relevant Business Transactions",
      "Any Other Supporting Evidence",
    ],

    discussionPoints: [
      "Background and nature of the business relationship",
      "Events leading to the dispute",
      "Contractual or business obligations involved",
      "Parties involved in the dispute",
      "Financial or commercial impact",
      "Correspondence and notices exchanged",
      "Existing litigation, proceedings or settlement discussions",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the relevant agreements and supporting evidence",
      "Understanding the contractual and commercial position",
      "Identifying available legal and dispute-resolution options",
      "Discussing appropriate next steps and possible remedies",
    ],

    urgencyLevel: "high",
  });
}