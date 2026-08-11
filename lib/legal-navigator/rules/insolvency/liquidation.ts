import { createPreparation } from "../common/createPreparation";

export function getLiquidationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a liquidation matter involving a corporate entity, including commencement or conduct of liquidation proceedings, distribution of assets, creditor claims or related issues.",
      "Your responses indicate that the relevant liquidation orders, financial records, creditor claims, asset details and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the current stage of liquidation and the appropriate legal or procedural options available.",
    ],

    documents: [
      "Certificate of Incorporation / Corporate Registration",
      "PAN / Corporate Details",
      "NCLT Liquidation Order",
      "Previous NCLT / Court Orders",
      "Liquidator Appointment Documents",
      "Audited Financial Statements",
      "Books of Accounts / Financial Records",
      "Bank Statements",
      "Statement of Assets and Liabilities",
      "Details of Immovable / Movable Assets",
      "Security / Charge Documents",
      "Creditor Claims and Proof of Claims",
      "List of Creditors",
      "Public Announcement / Liquidation Notices",
      "Asset Valuation Reports (if available)",
      "Sale / Auction Documents (if applicable)",
      "Distribution / Settlement Documents (if any)",
      "Correspondence with the Liquidator",
      "Any Other Relevant Liquidation Documents",
    ],

    discussionPoints: [
      "Background and reason for commencement of liquidation",
      "Current status of the liquidation proceedings",
      "Role of the concerned party in the liquidation",
      "Details of assets and liabilities of the corporate entity",
      "Creditor claims and their verification status",
      "Security interests and secured creditor rights",
      "Asset valuation, sale or auction process",
      "Distribution of liquidation proceeds",
      "Actions or decisions of the liquidator",
      "Any dispute regarding claims, assets or distribution",
      "NCLT proceedings, orders or pending applications",
      "Upcoming hearings, deadlines or procedural requirements",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing liquidation orders, claims and supporting documents",
      "Understanding the current stage and scope of liquidation proceedings",
      "Reviewing creditor, stakeholder and asset-related issues",
      "Assessing available procedural or dispute-resolution options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}