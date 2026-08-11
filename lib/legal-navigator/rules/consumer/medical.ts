import { createPreparation } from "../common/createPreparation";

export function getConsumerMedicalPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a consumer matter involving medical treatment or healthcare services.",
      "Your responses indicate that the treatment history, medical records and communications with the healthcare provider should be reviewed carefully.",
      "The consultation will focus on understanding the treatment provided, the concerns raised and the available legal options relating to the consumer grievance.",
    ],

    documents: [
      "Medical Records / Treatment Records",
      "Discharge Summary (if applicable)",
      "Prescriptions and Medical Reports",
      "Diagnostic / Test Reports",
      "Hospital or Healthcare Provider Bills",
      "Consent Forms or Treatment Documents (if available)",
      "Correspondence with the Hospital / Doctor",
      "Complaints or Legal Notices (if any)",
      "Photographs or Other Supporting Evidence (if relevant)",
      "Any Other Relevant Medical Documents",
    ],

    discussionPoints: [
      "Background and nature of the treatment",
      "Timeline of the medical treatment or events",
      "Concerns regarding the treatment or service provided",
      "Medical records and reports available",
      "Communication with the doctor, hospital or healthcare provider",
      "Financial loss or expenses involved",
      "Previous complaints, notices or proceedings",
      "Current status of the matter",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the available medical and treatment records",
      "Understanding the factual background and consumer grievance",
      "Assessing the relevant consumer-law remedies",
      "Identifying important supporting documentation",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}