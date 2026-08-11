import { createPreparation } from "../common/createPreparation";

export function getCivilContractsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding enforcement of a contract or a dispute arising from contractual obligations.",
      "Your responses indicate that the agreement, performance obligations and relevant communications should be reviewed carefully.",
      "The consultation will focus on understanding the contractual relationship, identifying the issues involved and discussing the appropriate civil remedies."
    ],

    documents: [
      "Original Contract / Agreement",
      "Amendments or Addendums (if applicable)",
      "Invoices / Payment Records",
      "Proof of Performance or Non-Performance",
      "Relevant Email / Written Correspondence",
      "Legal Notice or Reply (if any)",
      "Termination or Breach Notice (if applicable)",
      "Previous Court Documents or Orders (if any)",
      "Supporting Documents / Evidence",
      "Any Other Relevant Contract Documents"
    ],

    discussionPoints: [
      "Background and purpose of the agreement",
      "Parties and contractual obligations",
      "Performance of the contractual obligations",
      "Nature of the alleged breach or non-performance",
      "Payments and financial obligations",
      "Correspondence between the parties",
      "Previous notices, negotiations or settlement attempts",
      "Current legal status of the matter",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Reviewing the agreement and supporting documents",
      "Understanding the contractual rights and obligations",
      "Assessing the available civil remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}