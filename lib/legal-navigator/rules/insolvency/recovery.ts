import { createPreparation } from "../common/createPreparation";

export function getRecoveryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding debt recovery or insolvency-related recovery involving outstanding financial or operational dues, default, enforcement or recovery proceedings.",
      "Your responses indicate that the relevant loan, debt, security, demand and recovery documents should be reviewed carefully.",
      "The consultation will focus on understanding the nature and stage of the recovery matter and the appropriate legal or procedural options.",
    ],

    documents: [
      "Loan / Financing Agreements",
      "Sanction Letters",
      "Account Statements",
      "Bank Statements",
      "Proof of Outstanding Dues",
      "Proof of Default",
      "Demand Notices",
      "Recall Notices",
      "Security / Mortgage / Hypothecation Documents",
      "Guarantee Documents",
      "Security Interest / Charge Registration Details",
      "Recovery Proceedings Documents",
      "SARFAESI / DRT Documents (if applicable)",
      "NCLT / Insolvency Proceedings Documents (if applicable)",
      "Settlement / Restructuring Documents (if any)",
      "Previous Court / Tribunal Orders",
      "Correspondence with the Debtor / Creditor / Financial Institution",
      "Any Other Relevant Recovery Documents",
    ],

    discussionPoints: [
      "Background and nature of the outstanding debt",
      "Amount currently outstanding",
      "Date and nature of the default",
      "Terms of the loan or underlying transaction",
      "Security, collateral and guarantee arrangements",
      "Demand and recovery notices received or issued",
      "Previous repayment, settlement or restructuring discussions",
      "Existing recovery, DRT, SARFAESI or insolvency proceedings",
      "Any NCLT or court proceedings involving the debt",
      "Urgency of the recovery or enforcement action",
      "Commercial and financial impact",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing debt, default and security documentation",
      "Understanding the current recovery position",
      "Reviewing available recovery, settlement or insolvency-related options",
      "Assessing ongoing enforcement or tribunal proceedings",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}