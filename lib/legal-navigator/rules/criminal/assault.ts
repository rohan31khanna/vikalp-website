import { createPreparation } from "../common/createPreparation";

export function getAssaultPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an assault or hurt matter.",
      "Your responses indicate that the facts and supporting evidence will be important during consultation.",
      "The consultation will focus on understanding the incident and available legal remedies."
    ],

    documents: [
      "Medical Records (if available)",
      "Police Complaint or FIR",
      "Photographs",
      "Witness Information",
      "Identity Proof",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Sequence of events",
      "Nature of injuries",
      "Medical treatment",
      "Police involvement",
      "Immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the available evidence",
      "Understanding applicable legal provisions",
      "Discussing legal strategy",
      "Planning further legal action"
    ],

    urgencyLevel: "high",
  });
}