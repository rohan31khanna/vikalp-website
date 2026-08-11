import { createPreparation } from "../common/createPreparation";

export function getIncomeTaxPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an income tax matter involving tax liability, returns, assessment, notices, disputes or related compliance requirements.",
      "Your responses indicate that the relevant income details, tax records, filings, notices and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the nature of the income tax issue, the current tax position and the appropriate legal or procedural options.",
    ],

    documents: [
      "PAN Card / Taxpayer Details",
      "Income Tax Return(s)",
      "Computation of Income",
      "Form 16 / Form 16A (if applicable)",
      "Form 26AS / Annual Information Statement (AIS)",
      "Tax Deducted at Source (TDS) Details",
      "Income / Salary / Business / Professional Records",
      "Bank Statements",
      "Investment / Capital Gains Documents (if applicable)",
      "Previous Assessment Orders (if any)",
      "Income Tax Notices / Communications (if any)",
      "Tax Demand / Challan Details (if applicable)",
      "Appeal / Objection Documents (if applicable)",
      "Relevant Correspondence with the Income Tax Department",
      "Any Other Relevant Tax Documents",
    ],

    discussionPoints: [
      "Background and nature of the income tax matter",
      "Taxpayer status and relevant financial activities",
      "Income earned and applicable sources of income",
      "Income tax return filing history",
      "Tax computation and payment position",
      "TDS, Form 26AS and AIS reconciliation",
      "Any notice, assessment or communication received",
      "Existing tax demand or disputed tax liability",
      "Previous proceedings, appeals or representations",
      "Communication with the Income Tax Department",
      "Commercial or financial impact of the matter",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing income tax records and supporting documents",
      "Understanding the taxpayer's current tax position",
      "Identifying the nature and stage of the tax issue",
      "Reviewing applicable compliance, representation or dispute-resolution options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "medium",
  });
}