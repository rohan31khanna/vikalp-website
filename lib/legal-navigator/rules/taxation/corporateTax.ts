import { createPreparation } from "../common/createPreparation";

export function getCorporateTaxPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a corporate or business tax matter involving a company, partnership, LLP or other business entity.",
      "Your responses indicate that the relevant business structure, tax registrations, financial records, returns, transactions and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the tax position of the business, the nature of the issue and the appropriate legal or procedural options.",
    ],

    documents: [
      "Certificate of Incorporation / Registration",
      "PAN / TAN of the Entity",
      "GST Registration Certificate (if applicable)",
      "Income Tax Returns",
      "GST Returns (if applicable)",
      "Tax Computation",
      "Audited Financial Statements",
      "Books of Accounts",
      "Bank Statements",
      "Invoices / Sales and Purchase Records",
      "TDS / TCS Records",
      "Form 26AS / Annual Information Statement (AIS)",
      "Tax Notices / Assessment Orders (if any)",
      "Tax Demand / Payment Records",
      "Related Party Transaction Records (if applicable)",
      "Board / Partner / Management Resolutions (if relevant)",
      "Previous Tax Litigation / Appeal Documents (if any)",
      "Correspondence with Tax Authorities",
      "Any Other Relevant Corporate Tax Documents",
    ],

    discussionPoints: [
      "Nature and structure of the business entity",
      "Business activities and sources of income",
      "Applicable direct and indirect tax registrations",
      "Tax return filing and compliance history",
      "Corporate tax liability and payment position",
      "TDS / TCS compliance and related obligations",
      "GST compliance and input tax credit issues, if applicable",
      "Business expenses, deductions and tax treatment",
      "Related party transactions and other significant transactions",
      "Tax notices, assessments or demands received",
      "Existing appeals, disputes or proceedings",
      "Potential financial or commercial impact",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the company's tax registrations, returns and financial records",
      "Understanding the current corporate tax position",
      "Identifying tax compliance, assessment or dispute-related issues",
      "Reviewing available representation, compliance and dispute-resolution options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "medium",
  });
}