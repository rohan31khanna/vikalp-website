import { createPreparation } from "../common/createPreparation";

export function getCivilAppealsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an appeal or revision arising from an existing civil court judgment or order.",
      "Your responses indicate that the judgment, order, pleadings and relevant case records should be reviewed carefully before determining the appropriate legal course.",
      "The consultation will focus on understanding the existing proceedings, the grounds for challenge and the applicable procedural requirements."
    ],

    documents: [
      "Copy of Judgment / Order",
      "Case / Suit Number and Court Details",
      "Plaint / Written Statement (if available)",
      "Relevant Applications and Replies",
      "Evidence / Documents Relied Upon in the Case",
      "Previous Interim Orders (if applicable)",
      "Certified Copy of Judgment / Order (if available)",
      "Legal Notice or Correspondence (if relevant)",
      "Previous Appeal / Revision Documents (if any)",
      "Any Other Relevant Court Documents"
    ],

    discussionPoints: [
      "Background of the original civil case",
      "Court and case details",
      "Nature of the judgment or order being challenged",
      "Issues or grounds giving rise to the proposed challenge",
      "Previous proceedings and orders",
      "Relevant evidence and documents",
      "Current procedural status",
      "Any upcoming limitation or filing deadline",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Reviewing the judgment, order and relevant case records",
      "Understanding the grounds and procedural position",
      "Assessing the available appellate or revisional remedies",
      "Identifying relevant documents and filing requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}