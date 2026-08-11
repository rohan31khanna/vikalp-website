import { createPreparation } from "../common/createPreparation";

export function getAssessmentPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a tax assessment or scrutiny matter involving examination of tax returns, income, transactions, deductions, claims or other tax-related information.",
      "Your responses indicate that the relevant assessment notices, tax returns, financial records and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the stage and nature of the assessment or scrutiny proceedings and the appropriate legal or procedural options.",
    ],

    documents: [
      "PAN Card / Taxpayer Details",
      "Income Tax Return(s)",
      "Computation of Income",
      "Assessment / Scrutiny Notice",
      "Notice under Relevant Income Tax Provisions (if applicable)",
      "Form 26AS / Annual Information Statement (AIS)",
      "Bank Statements",
      "Books of Accounts / Financial Statements",
      "Invoices / Bills / Transaction Records",
      "Supporting Documents for Deductions or Exemptions",
      "Investment / Capital Gains Documents (if applicable)",
      "Previous Assessment Orders (if any)",
      "Tax Demand Notice (if any)",
      "Responses / Submissions Already Filed",
      "Correspondence with the Tax Department",
      "Any Other Relevant Assessment Documents",
    ],

    discussionPoints: [
      "Background and nature of the assessment or scrutiny",
      "Tax return and financial information under review",
      "Reason or issue identified in the assessment proceedings",
      "Details of notices received and applicable deadlines",
      "Income, deductions, exemptions or transactions under scrutiny",
      "Documents and explanations already submitted",
      "Any proposed addition, disallowance or adjustment",
      "Tax, interest or penalty implications",
      "Previous assessment history, if any",
      "Communication with the assessing authority",
      "Current stage of the proceedings",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing assessment and scrutiny notices",
      "Examining the relevant tax records and supporting evidence",
      "Understanding the issues raised by the tax authority",
      "Reviewing available response and representation options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}