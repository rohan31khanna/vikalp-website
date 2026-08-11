import { createPreparation } from "../common/createPreparation";

export function getRestitutionPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding restoration of matrimonial cohabitation.",
      "Your responses indicate that reconciliation through legal remedies may be appropriate.",
      "The consultation will focus on understanding the circumstances of separation and available legal options."
    ],

    documents: [
      "Marriage Certificate",
      "Identity Proof",
      "Address Proof",
      "Evidence of Separation (if available)",
      "Relevant Correspondence Between Spouses"
    ],

    discussionPoints: [
      "Circumstances leading to separation",
      "Attempts at reconciliation",
      "Current marital status",
      "Communication between spouses",
      "Desired legal outcome"
    ],

    consultationFocus: [
      "Eligibility for filing a petition",
      "Available legal remedies",
      "Procedural requirements"
    ],

    urgencyLevel: "medium",
  });
}