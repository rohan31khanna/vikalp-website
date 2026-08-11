import { createPreparation } from "../common/createPreparation";

export function getBankingSecurityPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a mortgage, secured loan, charge or other security-related financial matter.",
      "Your responses indicate that the underlying loan documents, security documents and records relating to the secured asset should be reviewed carefully.",
      "The consultation will focus on understanding the security arrangement, the obligations involved and the available legal options or remedies."
    ],

    documents: [
      "Loan / Facility Agreement",
      "Mortgage / Security Documents",
      "Sanction Letter",
      "Repayment Schedule",
      "Loan Account Statement",
      "Title / Ownership Documents of the Secured Asset",
      "Mortgage Registration / Charge Documents (if applicable)",
      "Bank or Financial Institution Notices",
      "Demand / Recovery Notices (if any)",
      "Previous Court / Tribunal Documents (if applicable)",
      "Relevant Correspondence",
      "Any Other Relevant Security Documents"
    ],

    discussionPoints: [
      "Background of the loan or financial facility",
      "Nature of the security or mortgage",
      "Secured asset involved",
      "Loan obligations and repayment history",
      "Current outstanding amount, if applicable",
      "Creation or registration of the security",
      "Notices or enforcement actions by the lender",
      "Disputes regarding ownership, possession or security interest",
      "Previous negotiations or legal proceedings",
      "Current status and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the loan and security documents",
      "Understanding the legal position regarding the secured asset",
      "Assessing the lender's rights and available remedies",
      "Identifying potential issues relating to the mortgage, charge or security",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}