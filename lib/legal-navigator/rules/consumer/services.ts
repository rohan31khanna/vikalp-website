import { createPreparation } from "../common/createPreparation";

export function getConsumerServicesPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a consumer dispute involving a service provider or service-related deficiency.",
      "Your responses indicate that the service arrangement, payments, communications and records relating to the service should be reviewed.",
      "The consultation will focus on understanding the deficiency or dispute, assessing the available consumer remedies and discussing appropriate legal steps.",
    ],

    documents: [
      "Service Agreement / Terms of Service (if available)",
      "Invoice / Payment Receipts",
      "Booking or Service Confirmation",
      "Emails, Messages or Written Correspondence",
      "Complaint Raised with the Service Provider (if any)",
      "Refund / Cancellation Records (if applicable)",
      "Legal Notice or Response (if any)",
      "Photographs or Other Supporting Evidence (if relevant)",
      "Relevant Service Records or Reports",
      "Any Other Relevant Documents",
    ],

    discussionPoints: [
      "Nature of the service and arrangement",
      "Details of the deficiency or problem experienced",
      "Date and circumstances of the service",
      "Payments made and financial impact",
      "Communication with the service provider",
      "Complaint, cancellation, refund or resolution attempts",
      "Current status of the dispute",
      "Any notice, deadline or proceeding already involved",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the service-related documents and correspondence",
      "Understanding the nature of the consumer grievance",
      "Assessing available consumer remedies",
      "Reviewing the complaint and resolution history",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}