import { createPreparation } from "../common/createPreparation";

export function getDivorcePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding dissolution of marriage.",
      "Your responses indicate that divorce-related legal remedies should be explored.",
      "The consultation will focus on understanding your circumstances and available legal options."
    ],

    documents: [
      "Marriage Certificate",
      "Identity Proof",
      "Address Proof",
      "Previous Court Orders (if any)",
      "Relevant Correspondence or Notices"
    ],

    discussionPoints: [
      "Background of the marriage",
      "Current legal issues",
      "Children (if applicable)",
      "Financial arrangements",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Legal options available",
      "Required documentation",
      "Possible timelines"
    ],

    urgencyLevel: "medium",
  });
}