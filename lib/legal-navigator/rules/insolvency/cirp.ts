import { createPreparation } from "../common/createPreparation";

export function getCIRPPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a Corporate Insolvency Resolution Process (CIRP) matter involving initiation, admission, conduct, participation or resolution of corporate insolvency proceedings.",
      "Your responses indicate that the relevant default records, creditor documents, insolvency applications, NCLT proceedings and supporting evidence should be reviewed carefully.",
      "The consultation will focus on understanding the current stage of the CIRP, the parties involved and the appropriate legal or procedural options.",
    ],

    documents: [
      "Corporate Registration / Incorporation Documents",
      "PAN / Corporate Details",
      "Financial Statements",
      "Books of Accounts / Financial Records",
      "Loan Agreements / Financing Documents",
      "Proof of Default",
      "Bank Statements",
      "Demand Notices",
      "Section 7 / Section 9 / Section 10 Application Documents (if applicable)",
      "Supporting Affidavits / Written Submissions",
      "NCLT Filing Documents",
      "NCLT Orders / Admission Orders (if any)",
      "Public Announcement / CIRP Notices (if applicable)",
      "Claims Submitted by Creditors",
      "Proof of Claim Documents",
      "Committee of Creditors (CoC) Related Documents",
      "Resolution Plans / Resolution Applicant Documents (if applicable)",
      "Correspondence with the Resolution Professional",
      "Any Other Relevant CIRP Documents",
    ],

    discussionPoints: [
      "Background and nature of the corporate default",
      "Identity and role of the concerned party",
      "Amount and nature of the debt or default",
      "Date and evidence of default",
      "Basis for initiating or participating in CIRP",
      "Current status of the NCLT proceedings",
      "Claims submitted and their verification status",
      "Role and participation in the Committee of Creditors, if applicable",
      "Actions or decisions of the Resolution Professional",
      "Resolution plan and resolution applicant considerations",
      "Potential impact on creditors, company or stakeholders",
      "Upcoming hearings, filings or procedural deadlines",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the default, debt and CIRP documentation",
      "Understanding the current stage of the Corporate Insolvency Resolution Process",
      "Reviewing rights, obligations and available procedural options",
      "Assessing relevant NCLT filings, claims and proceedings",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}