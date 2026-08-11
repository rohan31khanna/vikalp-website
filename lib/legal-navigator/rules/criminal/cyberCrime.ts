import { createPreparation } from "../common/createPreparation";

export function getCyberCrimePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a cyber crime matter.",
      "Your responses indicate that electronic records and digital evidence may be important.",
      "The consultation will focus on understanding the incident and preserving relevant information."
    ],

    documents: [
      "Screenshots",
      "Emails or Messages",
      "Transaction Details (if applicable)",
      "Complaint Copies",
      "Identity Proof",
      "Any Supporting Evidence"
    ],

    discussionPoints: [
      "Nature of the cyber incident",
      "Timeline of events",
      "Available electronic evidence",
      "Authorities already contacted",
      "Immediate concerns"
    ],

    consultationFocus: [
      "Reviewing available digital evidence",
      "Understanding legal options",
      "Discussing procedural steps",
      "Planning further legal action"
    ],

    urgencyLevel: "high",
  });
}