import { createPreparation } from "../common/createPreparation";

export function getTheftPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a theft or robbery matter.",
      "Your responses indicate that understanding the circumstances and available evidence will be important.",
      "The consultation will focus on reviewing the facts and discussing available legal remedies."
    ],

    documents: [
      "Police Complaint or FIR (if available)",
      "Identity Proof",
      "Photographs or Videos",
      "Insurance Documents (if applicable)",
      "Witness Details (if available)",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Background of the incident",
      "Property involved",
      "Evidence available",
      "Police investigation",
      "Immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the factual background",
      "Understanding available legal remedies",
      "Identifying procedural requirements",
      "Planning the next legal steps"
    ],

    urgencyLevel: "high",
  });
}