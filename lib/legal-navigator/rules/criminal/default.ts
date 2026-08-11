import { createPreparation } from "../common/createPreparation";

export function getDefaultCriminalPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Criminal Law.",
      "The consultation will help assess the facts and available legal remedies.",
      "Relevant documents and a clear timeline of events will assist in understanding your matter."
    ],

    documents: [
      "Identity Proof",
      "Relevant Police Documents (if available)",
      "Court Orders or Notices (if applicable)",
      "Supporting Evidence",
      "Any Previous Legal Correspondence",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Background of the matter",
      "Current legal status",
      "Relevant evidence",
      "Immediate concerns",
      "Objectives of the consultation"
    ],

    consultationFocus: [
      "Understanding the facts",
      "Reviewing available documents",
      "Explaining legal procedures",
      "Discussing appropriate next steps"
    ],

    urgencyLevel: "high",
  });
}