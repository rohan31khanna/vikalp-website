import { createPreparation } from "../common/createPreparation";

export function getCustodyPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding child custody arrangements.",
      "Your responses indicate that the child's welfare will be a primary consideration.",
      "The consultation will focus on custody, visitation and related legal remedies."
    ],

    documents: [
      "Child's Birth Certificate",
      "School Records",
      "Existing Custody Orders",
      "Identity Proof",
      "Relevant Communication"
    ],

    discussionPoints: [
      "Current custody arrangements",
      "Child's welfare",
      "Schooling",
      "Parenting responsibilities",
      "Urgent concerns"
    ],

    consultationFocus: [
      "Best interests of the child",
      "Existing arrangements",
      "Available legal remedies"
    ],

    urgencyLevel: "medium",
  });
}