import { createPreparation } from "../common/createPreparation";

export function getBankingRegulatoryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a banking, financial services or regulatory compliance matter.",
      "Your responses indicate that the relevant regulatory requirements, institutional records and communications should be reviewed carefully.",
      "The consultation will focus on understanding the regulatory issue, applicable obligations and the appropriate legal or regulatory steps."
    ],

    documents: [
      "Relevant Banking / Financial Services Agreements",
      "Licences / Registrations / Regulatory Approvals (if applicable)",
      "Compliance Policies or Internal Documents (if relevant)",
      "Bank / Financial Institution Correspondence",
      "Regulatory Notices or Communications",
      "Complaint / Grievance Records",
      "RBI / Regulatory Authority Correspondence (if applicable)",
      "Transaction or Account Records (if relevant)",
      "Legal Notices or Replies (if any)",
      "Previous Regulatory / Court / Tribunal Documents (if applicable)",
      "Any Other Relevant Compliance Documents"
    ],

    discussionPoints: [
      "Background of the regulatory or compliance matter",
      "Banking or financial service involved",
      "Nature of the regulatory issue",
      "Applicable licence, registration or compliance requirement",
      "Communications with the bank, institution or regulator",
      "Regulatory notices, directions or complaints received",
      "Compliance steps already undertaken",
      "Previous proceedings or regulatory correspondence",
      "Current status of the matter",
      "Immediate regulatory or legal concerns"
    ],

    consultationFocus: [
      "Reviewing the relevant regulatory and compliance documents",
      "Understanding the applicable legal and regulatory requirements",
      "Identifying potential compliance or procedural issues",
      "Assessing available legal and regulatory remedies",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}
