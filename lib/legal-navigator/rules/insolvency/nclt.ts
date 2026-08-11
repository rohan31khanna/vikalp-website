import { createPreparation } from "../common/createPreparation";

export function getNCLTPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an insolvency or company law matter before the National Company Law Tribunal (NCLT).",
      "Your responses indicate that the relevant application, petition, notices, pleadings, orders and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the current stage of the NCLT proceedings, the issues involved and the appropriate legal or procedural options.",
    ],

    documents: [
      "NCLT Application / Petition",
      "NCLT Case / Filing Details",
      "Notice Issued by NCLT",
      "Reply / Counter / Written Statement",
      "Affidavits and Supporting Submissions",
      "Interim Applications (if applicable)",
      "NCLT Orders / Directions",
      "Previous Hearing Orders",
      "Loan / Financing Documents (if applicable)",
      "Invoices / Proof of Debt (if applicable)",
      "Proof of Default (if applicable)",
      "Security / Guarantee Documents (if applicable)",
      "CIRP / Liquidation Documents (if applicable)",
      "Claims / Proof of Claim Documents",
      "Resolution Plan Documents (if applicable)",
      "Correspondence with Resolution Professional / Liquidator",
      "Previous Appeal / NCLAT Orders (if any)",
      "Any Other Relevant NCLT Documents",
    ],

    discussionPoints: [
      "Background and nature of the NCLT matter",
      "Identity and role of the concerned party",
      "Nature of the application or petition",
      "Amount and nature of the debt or dispute",
      "Current stage of the NCLT proceedings",
      "Orders and directions already passed",
      "Issues currently requiring consideration",
      "Replies, pleadings or submissions already filed",
      "Evidence and supporting documents available",
      "Upcoming hearing dates or procedural deadlines",
      "Any related NCLAT, court or other proceedings",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the NCLT petition, pleadings and orders",
      "Understanding the current stage and issues in the proceedings",
      "Reviewing relevant evidence and supporting documentation",
      "Assessing available procedural and legal options",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "high",
  });
}