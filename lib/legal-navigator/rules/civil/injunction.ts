import { createPreparation } from "../common/createPreparation";

export function getCivilInjunctionPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an injunction, stay order or declaration of civil rights.",
      "Your responses indicate that the underlying dispute, relevant rights and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the circumstances, the relief being sought and the appropriate civil legal remedies."
    ],

    documents: [
      "Relevant Property / Contract / Legal Documents",
      "Title or Ownership Documents (if applicable)",
      "Existing Agreements or Contracts (if applicable)",
      "Legal Notice or Reply (if any)",
      "Previous Court Orders (if applicable)",
      "Court Pleadings or Case Documents (if applicable)",
      "Photographs or Other Supporting Evidence",
      "Relevant Correspondence",
      "Details of Any Pending Proceedings",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Background and nature of the civil dispute",
      "Legal right or interest involved",
      "Conduct or action requiring protection or restraint",
      "Parties involved in the dispute",
      "Existing agreements, documents or records",
      "Previous notices or legal proceedings",
      "Urgency and potential harm if relief is not obtained",
      "Current status of the matter",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Understanding the underlying civil dispute and legal rights",
      "Reviewing relevant documents and supporting evidence",
      "Assessing the appropriate civil relief or remedy",
      "Understanding procedural requirements for seeking relief",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}