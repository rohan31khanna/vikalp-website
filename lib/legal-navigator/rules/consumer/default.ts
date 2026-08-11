import { createPreparation } from "../common/createPreparation";

export function getDefaultConsumerPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Consumer Protection.",
      "The consultation will help assess the consumer grievance, relevant documents and the circumstances surrounding the dispute.",
      "Providing purchase records, communications and other supporting documents can help the legal team understand your matter more efficiently.",
    ],

    documents: [
      "Identity Proof",
      "Purchase / Service Documents (if applicable)",
      "Invoices / Payment Records",
      "Warranty or Agreement Documents (if applicable)",
      "Relevant Emails, Messages or Correspondence",
      "Complaint or Grievance Records",
      "Legal Notices or Responses (if any)",
      "Any Other Supporting Documents",
    ],

    discussionPoints: [
      "Background of the consumer matter",
      "Product or service involved",
      "Nature of the grievance",
      "Communication with the seller or service provider",
      "Documents and evidence available",
      "Financial loss or inconvenience, if any",
      "Current status of the complaint or dispute",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the consumer grievance",
      "Reviewing available documents and evidence",
      "Identifying relevant consumer-law remedies",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}