import { createPreparation } from "../common/createPreparation";

export function getCorporateRegulatoryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding business licences, regulatory approvals or government permissions.",
      "Your responses indicate that the applicable regulatory requirements, existing approvals and supporting business documents should be reviewed.",
      "The consultation will focus on identifying the relevant approvals, understanding the applicable requirements and discussing the appropriate steps for obtaining or addressing them.",
    ],

    documents: [
      "Business / Company Registration Documents",
      "Existing Licences or Registrations",
      "Previous Regulatory Approvals",
      "Applications or Forms Submitted to Authorities (if applicable)",
      "Notices or Communications from Government Authorities (if any)",
      "Business Premises / Address Documents",
      "Relevant Agreements or Supporting Documents",
      "Previous Compliance Records (if available)",
      "Any Other Relevant Regulatory Documents",
    ],

    discussionPoints: [
      "Nature and activities of the business",
      "Licence, registration or approval required",
      "Current status of the application or approval",
      "Relevant government or regulatory authority",
      "Existing licences or permissions",
      "Upcoming regulatory deadlines",
      "Any notices, objections or regulatory concerns",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the applicable regulatory requirements",
      "Reviewing existing approvals and supporting documents",
      "Identifying required licences, permissions or compliance steps",
      "Discussing appropriate steps for obtaining or addressing regulatory approvals",
    ],

    urgencyLevel: "medium",
  });
}