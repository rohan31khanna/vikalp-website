import { createPreparation } from "../common/createPreparation";

export function getCorporateFormationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding business formation or startup structuring.",
      "Your responses indicate that the business structure, incorporation requirements and legal documentation should be reviewed before proceeding.",
      "The consultation will focus on understanding your proposed business, selecting the appropriate legal structure and identifying the relevant legal and compliance requirements.",
    ],

    documents: [
      "Identity Proof of Promoters / Partners",
      "Address Proof",
      "Proposed Business / Company Name",
      "Founder / Partner Details",
      "Draft Partnership / LLP / Incorporation Documents (if available)",
      "Registered Office Address Proof (if available)",
      "Proposed Business Activity Details",
      "Existing Business Agreements (if any)",
      "Any Relevant Regulatory or Licensing Documents",
    ],

    discussionPoints: [
      "Nature and proposed activities of the business",
      "Founders, partners or proposed shareholders",
      "Preferred business structure",
      "Ownership and management arrangements",
      "Capital or investment structure",
      "Incorporation or registration requirements",
      "Relevant licences or regulatory requirements",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the proposed business structure",
      "Reviewing the formation and incorporation requirements",
      "Identifying relevant legal and compliance requirements",
      "Discussing appropriate documentation and next steps",
    ],

    urgencyLevel: "medium",
  });
}