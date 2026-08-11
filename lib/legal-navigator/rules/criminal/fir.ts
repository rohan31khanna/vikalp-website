import { createPreparation } from "../common/createPreparation";

export function getFirPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an FIR or police complaint.",
      "Your responses indicate that the circumstances require careful legal assessment.",
      "The consultation will focus on understanding the facts and available legal options."
    ],

    documents: [
      "Copy of FIR or Complaint",
      "Identity Proof",
      "Relevant Notices",
      "Photographs or Videos (if available)",
      "Supporting Evidence",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Sequence of events",
      "Police interaction",
      "Persons involved",
      "Available evidence",
      "Immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the factual background",
      "Understanding applicable legal provisions",
      "Identifying available legal remedies",
      "Planning the next legal steps"
    ],

    urgencyLevel: "high",
  });
}