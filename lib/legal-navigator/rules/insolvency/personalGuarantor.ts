import { createPreparation } from "../common/createPreparation";

export function getPersonalGuarantorPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a personal guarantor matter connected with corporate debt, loan obligations, recovery proceedings or insolvency proceedings.",
      "Your responses indicate that the relevant guarantee documents, loan records, demand notices, recovery proceedings and supporting financial documents should be reviewed carefully.",
      "The consultation will focus on understanding the guarantor's position, the stage of proceedings and the appropriate legal or procedural options.",
    ],

    documents: [
      "Personal Guarantee Deed",
      "Loan / Financing Agreement",
      "Sanction Letter",
      "Loan Account Statement",
      "Proof of Outstanding Debt",
      "Proof of Default",
      "Demand / Recall Notice",
      "Guarantee Invocation Notice",
      "Security / Collateral Documents",
      "Correspondence with the Creditor / Financial Institution",
      "Recovery Proceedings Documents",
      "DRT / SARFAESI Documents (if applicable)",
      "NCLT / Insolvency Proceedings Documents",
      "Personal Insolvency / Bankruptcy Application Documents (if applicable)",
      "Court / Tribunal Orders",
      "Settlement / Restructuring Documents (if any)",
      "Financial Statements / Asset-Liability Details",
      "Any Other Relevant Guarantor Documents",
    ],

    discussionPoints: [
      "Background and nature of the personal guarantee",
      "Principal borrower and underlying loan obligation",
      "Amount of debt and current outstanding liability",
      "Terms and scope of the guarantee",
      "Invocation of the guarantee",
      "Demand, recovery or enforcement action",
      "Security or collateral available to the creditor",
      "Relationship between the corporate borrower and guarantor",
      "Existing insolvency, NCLT, DRT or court proceedings",
      "Potential impact on the guarantor's assets and finances",
      "Settlement, restructuring or other resolution discussions",
      "Upcoming deadlines, hearings or recovery actions",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the guarantee and underlying loan documents",
      "Understanding the guarantor's legal and financial position",
      "Reviewing recovery and insolvency proceedings involving the guarantor",
      "Assessing available response, settlement or procedural options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}