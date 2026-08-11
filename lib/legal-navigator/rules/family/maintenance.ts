import { createPreparation } from "../common/createPreparation";

export function getMaintenancePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding financial maintenance.",
      "Your responses indicate that financial support and legal entitlement should be assessed.",
      "The consultation will focus on available remedies and supporting documentation."
    ],

    documents: [
      "Income Proof",
      "Bank Statements",
      "Marriage Certificate",
      "Expense Details",
      "Relevant Court Documents"
    ],

    discussionPoints: [
      "Financial dependency",
      "Current expenses",
      "Income details",
      "Existing court proceedings"
    ],

    consultationFocus: [
      "Maintenance eligibility",
      "Financial documentation",
      "Legal remedies"
    ],

    urgencyLevel: "medium",
  });
}