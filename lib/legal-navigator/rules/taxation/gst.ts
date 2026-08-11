import { createPreparation } from "../common/createPreparation";

export function getGstPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a GST and indirect tax matter involving registration, returns, tax liability, input tax credit, notices, assessments, refunds or related compliance requirements.",
      "Your responses indicate that the relevant GST registration details, returns, invoices, tax records, notices and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the nature and stage of the GST issue and identifying the appropriate legal or procedural options.",
    ],

    documents: [
      "GST Registration Certificate",
      "GSTIN / Taxpayer Details",
      "GST Returns",
      "GST Invoices / Tax Invoices",
      "Purchase and Sales Records",
      "Input Tax Credit Records",
      "GSTR-2A / GSTR-2B Details",
      "Electronic Cash Ledger / Credit Ledger",
      "E-Way Bills (if applicable)",
      "E-Invoice Records (if applicable)",
      "GST Payment / Challan Details",
      "GST Notices / Show Cause Notices (if any)",
      "Assessment / Adjudication Orders (if any)",
      "Refund Application / Related Documents (if applicable)",
      "Appeal / Objection Documents (if applicable)",
      "Correspondence with GST Authorities",
      "Any Other Relevant GST Documents",
    ],

    discussionPoints: [
      "Background and nature of the GST matter",
      "GST registration status and business activities",
      "Nature of goods or services involved",
      "GST return filing and compliance history",
      "Tax liability and payment position",
      "Input tax credit claims and reconciliation",
      "Invoice, e-invoice and e-way bill requirements",
      "Any notice, scrutiny, assessment or adjudication proceeding",
      "Any disputed tax, interest or penalty",
      "Refund claim or related issue, if applicable",
      "Communication with GST authorities",
      "Commercial or financial impact of the GST matter",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing GST registration, returns and supporting records",
      "Understanding the current GST compliance and tax position",
      "Reviewing input tax credit, tax liability and documentation issues",
      "Assessing available representation, compliance or dispute-resolution options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "medium",
  });
}