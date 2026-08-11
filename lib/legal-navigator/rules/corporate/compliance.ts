import { createPreparation } from "../common/createPreparation";

export function getCorporateCompliancePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding corporate compliance or employment and HR documentation.",
      "Your responses indicate that the relevant statutory, regulatory or business documentation should be reviewed to understand the applicable requirements.",
      "The consultation will focus on identifying the relevant compliance obligations, reviewing available records and discussing appropriate steps for maintaining or addressing compliance.",
    ],

    documents: [
      "Company / Business Registration Documents",
      "Existing Compliance Records or Filings",
      "ROC Filings / Statutory Documents (if applicable)",
      "Existing Employment Agreements or HR Policies (if applicable)",
      "Notices or Communications from Regulatory Authorities (if any)",
      "Relevant Licences or Registrations",
      "Previous Compliance Correspondence",
      "Internal Policies or Business Documents",
      "Any Other Relevant Documents",
    ],

    discussionPoints: [
      "Nature and structure of the business",
      "Current compliance requirements",
      "Existing statutory or regulatory filings",
      "Relevant employment or HR documentation, if applicable",
      "Upcoming compliance deadlines",
      "Any notices, deficiencies or regulatory concerns",
      "Documents and records currently available",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the relevant corporate and compliance documents",
      "Understanding applicable statutory or regulatory requirements",
      "Identifying potential compliance gaps or documentation requirements",
      "Discussing appropriate corrective or ongoing compliance steps",
    ],

    urgencyLevel: "medium",
  });
}