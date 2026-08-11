import { createPreparation } from "../common/createPreparation";

export function getTaxNoticePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a tax notice or compliance matter involving a communication, inquiry, notice, clarification request or other requirement issued by a tax authority.",
      "Your responses indicate that the relevant notice, filing records, supporting documents and previous communications should be reviewed carefully.",
      "The consultation will focus on understanding the nature of the notice, applicable response requirements and the appropriate legal or procedural options.",
    ],

    documents: [
      "PAN / Taxpayer Details",
      "GSTIN / GST Registration Certificate (if applicable)",
      "Relevant Tax Return(s)",
      "Tax Notice / Communication Received",
      "Show Cause Notice (if applicable)",
      "Assessment / Scrutiny Notice (if applicable)",
      "Demand Notice (if applicable)",
      "Previous Replies / Submissions",
      "Income / Business / Financial Records",
      "Books of Accounts / Financial Statements",
      "Invoices / Transaction Records",
      "Tax Payment / Challan Details",
      "Supporting Documents Relevant to the Notice",
      "Previous Orders / Proceedings Documents (if any)",
      "Correspondence with Tax Authorities",
      "Any Other Relevant Tax Documents",
    ],

    discussionPoints: [
      "Nature and background of the tax notice",
      "Tax authority or department that issued the notice",
      "Date of notice and applicable response deadline",
      "Issue or transaction referred to in the notice",
      "Tax period or assessment year involved",
      "Documents or information requested by the authority",
      "Whether a response has already been submitted",
      "Previous notices, assessments or proceedings",
      "Potential tax, interest or penalty implications",
      "Communication with the tax authority",
      "Immediate compliance or procedural concerns",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the tax notice and related communications",
      "Understanding the issue and information requested by the tax authority",
      "Reviewing relevant records and supporting documents",
      "Assessing appropriate response and representation options",
      "Discussing applicable legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}