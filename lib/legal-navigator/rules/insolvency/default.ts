import { createPreparation } from "../common/createPreparation";

export function getDefaultInsolvencyPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an insolvency or bankruptcy matter that does not fall clearly within the specific categories currently identified in the Legal Navigator.",
      "Your responses indicate that the relevant financial, debt, creditor, recovery and insolvency proceedings documents should be reviewed carefully.",
      "The consultation will focus on understanding the nature and stage of the matter and identifying the appropriate legal or procedural options.",
    ],

    documents: [
      "Corporate / Personal Identification Documents",
      "Loan / Financing Documents (if applicable)",
      "Financial Statements / Income Records",
      "Bank Statements",
      "Account Statements / Ledger",
      "Proof of Outstanding Dues",
      "Proof of Default",
      "Demand / Recovery Notices",
      "Security / Guarantee Documents",
      "Insolvency Application / Petition (if any)",
      "NCLT / NCLAT / Court Orders (if any)",
      "CIRP / Liquidation Documents (if applicable)",
      "Creditor Claim Documents (if applicable)",
      "Resolution / Settlement Documents (if any)",
      "Correspondence with Creditors / Resolution Professional / Liquidator",
      "Any Other Relevant Insolvency Documents",
    ],

    discussionPoints: [
      "Background and nature of the insolvency matter",
      "Identity and role of the concerned party",
      "Nature and amount of the debt or liability",
      "Details of any default",
      "Creditors, borrowers or other parties involved",
      "Security, guarantees or collateral involved",
      "Recovery or enforcement action already taken",
      "Current insolvency or bankruptcy proceeding status",
      "NCLT, NCLAT, court or other forum involvement",
      "Documents and evidence currently available",
      "Upcoming deadlines or procedural concerns",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Understanding the nature and scope of the insolvency matter",
      "Reviewing relevant financial, debt and proceeding documents",
      "Identifying the applicable insolvency or recovery issues",
      "Reviewing available legal and procedural options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}