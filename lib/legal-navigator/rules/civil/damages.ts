import { createPreparation } from "../common/createPreparation";

export function getCivilDamagesPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a claim for compensation or damages arising from a civil wrong, loss or breach of obligation.",
      "Your responses indicate that the circumstances causing the loss, supporting evidence and financial impact should be reviewed carefully.",
      "The consultation will focus on understanding the basis of the claim, assessing the available civil remedies and identifying the relevant supporting documentation.",
    ],

    documents: [
      "Relevant Contract / Agreement (if applicable)",
      "Invoices / Bills / Payment Records",
      "Proof of Financial Loss or Expenses",
      "Medical Records (if applicable)",
      "Photographs, Videos or Other Evidence",
      "Correspondence Between the Parties",
      "Legal Notice or Reply (if any)",
      "Previous Court Documents or Orders (if applicable)",
      "Insurance Documents (if relevant)",
      "Any Other Supporting Documents",
    ],

    discussionPoints: [
      "Background and circumstances giving rise to the claim",
      "Nature of the loss, damage or harm suffered",
      "Parties involved",
      "Basis of the alleged civil wrong or breach",
      "Financial loss and expenses incurred",
      "Evidence available to support the claim",
      "Previous notices, negotiations or proceedings",
      "Current legal status of the matter",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the basis of the compensation or damages claim",
      "Reviewing evidence and documents supporting the loss",
      "Assessing the available civil remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}