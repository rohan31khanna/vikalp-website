import { createPreparation } from "../common/createPreparation";

export function getTaxRecoveryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a tax recovery or demand matter involving an outstanding tax liability, recovery proceedings, attachment, collection action or related enforcement measures.",
      "Your responses indicate that the relevant tax demand, assessment orders, payment records, notices and recovery communications should be reviewed carefully.",
      "The consultation will focus on understanding the basis and stage of the recovery proceedings and identifying the appropriate legal or procedural options.",
    ],

    documents: [
      "PAN / Taxpayer Details",
      "GSTIN / GST Registration Certificate (if applicable)",
      "Relevant Tax Returns",
      "Assessment / Adjudication Order",
      "Tax Demand Notice",
      "Outstanding Demand Details",
      "Tax Payment / Challan Records",
      "Demand Register / Outstanding Liability Details",
      "Recovery Notice / Recovery Proceedings Documents",
      "Bank Account Attachment / Garnishee Notice (if applicable)",
      "Property Attachment / Recovery Documents (if applicable)",
      "Previous Replies / Representations",
      "Appeal / Stay Application Documents (if applicable)",
      "Appeal / Tribunal / Court Orders (if any)",
      "Correspondence with Tax Authorities",
      "Financial Statements / Supporting Financial Records",
      "Any Other Relevant Recovery Documents",
    ],

    discussionPoints: [
      "Background and source of the outstanding tax demand",
      "Assessment or adjudication order giving rise to the demand",
      "Amount of tax, interest and penalty outstanding",
      "Whether the demand is disputed or accepted",
      "Payment history and amounts already deposited",
      "Recovery notices or enforcement communications received",
      "Any bank account, property or other attachment action",
      "Existing appeal, stay or other proceedings",
      "Deadlines and immediate recovery concerns",
      "Communication with the tax authorities",
      "Financial or business impact of the recovery action",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the tax demand and recovery documents",
      "Understanding the basis and current status of the outstanding liability",
      "Reviewing available response, stay, appeal or recovery-related options",
      "Assessing the impact of any attachment or enforcement action",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}