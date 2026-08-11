import { createPreparation } from "../common/createPreparation";

export function getConsumerBuilderPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a consumer matter involving a builder or real estate developer.",
      "Your responses indicate that the agreement, payment records, project status and communications with the builder should be reviewed carefully.",
      "The consultation will focus on understanding the builder-related grievance, reviewing the available documents and discussing appropriate consumer remedies and legal options.",
    ],

    documents: [
      "Builder-Buyer Agreement / Sale Agreement",
      "Allotment Letter (if applicable)",
      "Payment Receipts / Bank Statements",
      "Property Booking or Purchase Documents",
      "Possession Letter (if applicable)",
      "Project / Property Documents",
      "Correspondence with the Builder / Developer",
      "Promised Specifications / Brochures (if available)",
      "Legal Notice or Complaint Records (if any)",
      "RERA Documents / Orders (if applicable)",
      "Any Other Relevant Property Documents",
    ],

    discussionPoints: [
      "Background of the property transaction",
      "Details of the agreement with the builder or developer",
      "Payments made and current payment status",
      "Construction and possession status",
      "Delay, deficiency or deviation from promised commitments",
      "Communication with the builder or developer",
      "Amenities, specifications or representations involved",
      "Previous complaints, notices or proceedings",
      "Financial impact and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the builder-buyer agreement and supporting documents",
      "Understanding the nature of the consumer grievance",
      "Assessing available consumer-law remedies",
      "Reviewing payment, possession and communication records",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}