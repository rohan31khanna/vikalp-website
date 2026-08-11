import { createPreparation } from "../common/createPreparation";

export function getDefaultFamilyPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Family and Marriage law.",
      "The consultation will help assess your circumstances and available legal remedies.",
      "Relevant documents and background information will help us understand your matter."
    ],

    documents: [
      "Identity Proof",
      "Marriage Certificate (if applicable)",
      "Relevant Court Orders",
      "Legal Notices or Correspondence",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Background of the matter",
      "Family relationships involved",
      "Current legal issues",
      "Immediate concerns",
      "Objectives of the consultation"
    ],

    consultationFocus: [
      "Understanding the facts",
      "Reviewing available documents",
      "Explaining legal options",
      "Discussing appropriate next steps"
    ],

    urgencyLevel: "medium",
  });
}