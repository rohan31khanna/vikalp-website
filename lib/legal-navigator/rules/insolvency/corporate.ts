import { createPreparation } from "../common/createPreparation";

export function getCorporatePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a corporate insolvency matter involving a company, LLP or other corporate entity facing financial distress, payment defaults, creditor claims or restructuring concerns.",
      "Your responses indicate that the relevant corporate, financial, debt and creditor documents should be reviewed carefully to understand the current position.",
      "The consultation will focus on understanding the nature and stage of the insolvency matter and the appropriate legal or procedural options available.",
    ],

    documents: [
      "Certificate of Incorporation / Registration",
      "Memorandum and Articles of Association (if applicable)",
      "PAN / Corporate Registration Details",
      "Audited Financial Statements",
      "Balance Sheets and Profit & Loss Statements",
      "Books of Accounts / Financial Records",
      "Bank Statements",
      "Loan Agreements / Financing Documents",
      "Details of Outstanding Loans and Liabilities",
      "Security / Charge Documents",
      "Creditor Statements / Outstanding Dues",
      "Default Notices / Demand Notices",
      "Statutory Notices or Communications",
      "Board / Partner Resolutions (if applicable)",
      "Existing Restructuring / Settlement Documents",
      "Insolvency Applications / Petitions (if any)",
      "NCLT / Court Orders and Proceedings Documents (if any)",
      "Correspondence with Creditors / Financial Institutions",
      "Any Other Relevant Insolvency Documents",
    ],

    discussionPoints: [
      "Background and financial position of the corporate entity",
      "Nature and extent of financial or operational default",
      "Outstanding secured and unsecured liabilities",
      "Details of financial and operational creditors",
      "Existing security interests, charges or guarantees",
      "Previous recovery notices or enforcement actions",
      "Any restructuring, settlement or repayment discussions",
      "Whether an insolvency application has been filed or is being considered",
      "Current NCLT, court or other proceeding status",
      "Potential impact on the business and stakeholders",
      "Immediate deadlines or procedural concerns",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the corporate and financial position of the entity",
      "Understanding the nature and stage of the insolvency issue",
      "Reviewing creditor claims, defaults and relevant security documents",
      "Considering available restructuring, resolution or procedural options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}