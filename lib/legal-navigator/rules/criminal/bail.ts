import { createPreparation } from "../common/createPreparation";

export function getBailPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a bail-related matter.",
      "Your responses indicate that timely legal assessment may be important depending on the stage of the proceedings.",
      "The consultation will focus on understanding the facts, applicable legal provisions and available legal remedies."
    ],

    documents: [
      "FIR (if available)",
      "Arrest Memo or Police Documents",
      "Court Orders (if any)",
      "Identity Proof",
      "Relevant Notices or Summons",
      "Any Supporting Documents"
    ],

    discussionPoints: [
      "Background of the incident",
      "Current status of the proceedings",
      "Police investigation or arrest details",
      "Immediate legal concerns",
      "Objectives of the consultation"
    ],

    consultationFocus: [
      "Understanding the facts of the matter",
      "Reviewing available documents",
      "Explaining available legal remedies",
      "Discussing the appropriate next legal steps"
    ],

    urgencyLevel: "high",
  });
}