import { createPreparation } from "../common/createPreparation";

export function getCorporateRestructuringPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding insolvency, business restructuring or financial difficulties affecting a business.",
      "Your responses indicate that the business's financial position, existing obligations and relevant corporate documents should be reviewed carefully.",
      "The consultation will focus on understanding the financial and legal position, identifying relevant restructuring or insolvency options and discussing appropriate next steps.",
    ],

    documents: [
      "Company / Business Registration Documents",
      "Financial Statements or Accounts",
      "Bank Statements or Financial Records",
      "List of Outstanding Debts / Creditor Details",
      "Loan or Financing Agreements",
      "Material Business Contracts",
      "Tax or Statutory Notices (if any)",
      "Existing Legal Notices or Court / Tribunal Documents",
      "Details of Assets and Liabilities",
      "Any Other Relevant Financial or Corporate Documents",
    ],

    discussionPoints: [
      "Background and current financial position of the business",
      "Nature and extent of outstanding liabilities",
      "Creditors, lenders or other parties involved",
      "Existing loans, contracts and financial obligations",
      "Business assets and ongoing operations",
      "Existing notices, claims or legal proceedings",
      "Possible restructuring or insolvency concerns",
      "Immediate legal and business concerns",
    ],

    consultationFocus: [
      "Understanding the financial and corporate position",
      "Reviewing relevant financial, contractual and legal documents",
      "Identifying potential restructuring or insolvency options",
      "Discussing appropriate legal and procedural next steps",
    ],

    urgencyLevel: "high",
  });
}