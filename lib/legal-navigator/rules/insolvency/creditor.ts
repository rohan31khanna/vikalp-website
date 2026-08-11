import { createPreparation } from "../common/createPreparation";

export function getCreditorPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a creditor matter involving recovery of dues, submission of claims, participation in insolvency proceedings or protection of creditor rights.",
      "Your responses indicate that the relevant debt records, invoices, agreements, proof of default and insolvency proceedings documents should be reviewed carefully.",
      "The consultation will focus on understanding the creditor's position, available remedies and the appropriate legal or procedural options.",
    ],

    documents: [
      "Loan / Financing Agreement (if applicable)",
      "Invoices / Purchase Orders",
      "Supply / Service Agreements",
      "Account Statements / Ledger",
      "Proof of Outstanding Dues",
      "Proof of Default",
      "Demand Notices / Recovery Communications",
      "Security / Guarantee Documents (if applicable)",
      "Correspondence with the Debtor",
      "Insolvency Application / Petition (if applicable)",
      "NCLT Orders / Proceedings Documents",
      "Public Announcement / CIRP Notice",
      "Proof of Claim / Claim Form",
      "Documents Supporting the Creditor's Claim",
      "Committee of Creditors Documents (if applicable)",
      "Resolution Plan Documents (if applicable)",
      "Liquidation Documents (if applicable)",
      "Any Other Relevant Creditor Documents",
    ],

    discussionPoints: [
      "Nature and amount of the outstanding debt",
      "Relationship between the creditor and debtor",
      "Basis and date of the debt",
      "Date and nature of default",
      "Secured or unsecured status of the creditor",
      "Availability of guarantees or other security",
      "Demand and recovery efforts already undertaken",
      "Submission and verification of insolvency claims",
      "Participation in CIRP or Committee of Creditors, if applicable",
      "Impact of any proposed resolution plan",
      "Liquidation and distribution considerations, if applicable",
      "Existing NCLT, tribunal or court proceedings",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the debt and supporting creditor documents",
      "Understanding the creditor's position and available remedies",
      "Reviewing claim submission and insolvency participation requirements",
      "Assessing recovery, resolution or liquidation-related options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}