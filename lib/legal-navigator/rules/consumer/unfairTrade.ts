import { createPreparation } from "../common/createPreparation";

export function getConsumerUnfairTradePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a consumer matter involving an unfair trade practice, misleading representation or potentially deceptive business conduct.",
      "Your responses indicate that the relevant advertisements, representations, transaction records and communications should be reviewed carefully.",
      "The consultation will focus on understanding the representation or business practice involved, its impact on you as a consumer and the available legal options.",
    ],

    documents: [
      "Purchase Invoice / Bill (if applicable)",
      "Advertisement or Promotional Material",
      "Screenshots / Photographs of the Representation",
      "Product or Service Details",
      "Emails, Messages or Written Correspondence",
      "Terms & Conditions (if available)",
      "Payment / Transaction Records",
      "Complaint or Grievance Records",
      "Legal Notice or Response (if any)",
      "Any Other Supporting Evidence",
    ],

    discussionPoints: [
      "Nature of the representation or business practice",
      "Product or service involved",
      "Statements, advertisements or claims made",
      "Difference between the representation and actual product or service",
      "Financial loss or inconvenience suffered",
      "Communication with the business or service provider",
      "Evidence supporting the consumer grievance",
      "Previous complaints, notices or proceedings",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the relevant advertisements, representations and transaction records",
      "Understanding the nature of the consumer grievance",
      "Assessing the available consumer-law remedies",
      "Identifying relevant supporting evidence",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}