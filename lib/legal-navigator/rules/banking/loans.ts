import type { WorkflowAnswers } from "@/types/workflowAnswers";

import { createPreparation } from "../common/createPreparation";

export function getBankingLoanPreparation(
  workflowAnswers: WorkflowAnswers
) {
  const stage = workflowAnswers.stage;
  const urgency = workflowAnswers.urgency;

  const summary = [
    "You are seeking legal guidance regarding a loan, EMI or related lending dispute.",
    "Your responses indicate that the loan agreement, repayment history, account statements and communications with the lender should be reviewed.",
    "The consultation will focus on understanding the loan terms, the nature of the dispute and the available legal options.",
  ];

  const documents = [
    "Loan Agreement / Sanction Letter",
    "Repayment Schedule",
    "Loan Account Statement",
    "EMI Payment Records",
    "Bank Statements",
    "Interest / Charges Statements",
    "Restructuring or Settlement Documents (if applicable)",
    "Recovery Notices or Demand Letters (if any)",
    "Legal Notice or Reply (if any)",
    "Previous Court / Tribunal Documents (if applicable)",
    "Any Other Relevant Loan Documents",
  ];

  const discussionPoints = [
    "Background of the loan",
    "Loan amount and repayment terms",
    "EMI and repayment history",
    "Interest, penalties or other charges",
    "Nature of the dispute with the lender",
    "Communications with the bank or financial institution",
    "Any default, demand or recovery action",
    "Settlement or restructuring discussions",
    "Current legal status",
    "Immediate financial or legal concerns",
  ];

  const consultationFocus = [
    "Reviewing the loan agreement and account records",
    "Understanding the contractual and financial position",
    "Identifying potential issues with repayment, charges or recovery",
    "Assessing available legal or regulatory remedies",
    "Discussing appropriate legal options and next steps",
  ];

  /*
   * Stage-specific preparation
   */
  if (stage === "Bank / Financial Institution Contacted") {
    summary.push(
      "As the bank or financial institution has already been contacted, the consultation should also review the communications exchanged and the response received."
    );

    documents.push(
      "Bank / Financial Institution Correspondence",
      "Complaint or Grievance Reference / Acknowledgement (if available)",
      "Response Received from the Bank / Financial Institution (if any)"
    );

    discussionPoints.push(
      "Complaints or representations already made to the lender",
      "Responses received from the bank or financial institution",
      "Any unresolved issues following communication with the lender"
    );

    consultationFocus.push(
      "Reviewing previous communications with the lender",
      "Assessing the response received and identifying appropriate next steps"
    );
  }

  if (stage === "Notice Received / Sent") {
    summary.push(
      "As a notice has been received or sent, the consultation should include a review of the notice, the underlying loan records and any response or deadline associated with it."
    );

    documents.push(
      "Recovery / Demand Notice",
      "Legal Notice or Reply",
      "Proof of Service / Delivery (if relevant)"
    );

    discussionPoints.push(
      "Nature and contents of the notice",
      "Response already provided or proposed",
      "Any deadline or action required in response to the notice"
    );

    consultationFocus.push(
      "Reviewing the notice and relevant supporting documents",
      "Assessing the appropriate response and next steps"
    );
  }

  if (stage === "Legal Proceedings Started") {
    summary.push(
      "As legal proceedings have already started, the consultation should focus on the current procedural position, documents filed and immediate legal requirements."
    );

    documents.push(
      "Court / Tribunal Case Documents",
      "Petition / Complaint / Application",
      "Written Statement / Reply / Defence (if applicable)",
      "Orders or Directions Already Passed (if applicable)"
    );

    discussionPoints.push(
      "Forum and current stage of proceedings",
      "Documents already filed",
      "Orders, directions or hearings already scheduled",
      "Immediate procedural requirements"
    );

    consultationFocus.push(
      "Reviewing the existing proceedings and filed documents",
      "Understanding the current procedural position and immediate next steps"
    );
  }

  if (stage === "Recovery / Enforcement Action") {
    summary.push(
      "As recovery or enforcement action has already been initiated, the consultation should prioritise the recovery action, relevant notices and any immediate steps or deadlines."
    );

    documents.push(
      "Recovery / Enforcement Notices",
      "Demand Letters",
      "Possession / Enforcement Documents (if applicable)",
      "Related Court / Tribunal Orders (if applicable)"
    );

    discussionPoints.push(
      "Nature of the recovery or enforcement action",
      "Notices or demands received",
      "Steps already taken by the lender",
      "Immediate response requirements"
    );

    consultationFocus.push(
      "Reviewing the recovery or enforcement action",
      "Assessing immediate legal options and response requirements"
    );
  }

  /*
   * Urgency-specific preparation
   */
  if (urgency === "Upcoming Deadline") {
    summary.push(
      "An upcoming deadline has been identified, so the consultation should prioritise the relevant notice, payment, filing or response requirement."
    );

    discussionPoints.push(
      "Upcoming deadline and required response",
      "Consequences of missing the relevant deadline"
    );

    consultationFocus.push(
      "Identifying immediate actions required before the deadline"
    );
  }

  if (urgency === "Immediate Recovery / Enforcement Risk") {
    summary.push(
      "You have indicated an immediate recovery or enforcement risk, so the consultation should prioritise the relevant recovery communications, deadlines and immediate legal options."
    );

    documents.push(
      "Recent Recovery / Enforcement Communication",
      "Recent Demand or Payment Notice (if applicable)"
    );

    discussionPoints.push(
      "Immediate recovery or enforcement risk",
      "Recent demands, notices or enforcement communications",
      "Immediate deadlines or actions requiring attention"
    );

    consultationFocus.push(
      "Prioritising immediate recovery or enforcement concerns",
      "Identifying appropriate immediate legal steps"
    );
  }

  if (urgency === "Significant Financial Loss") {
    summary.push(
      "Significant financial loss or exposure has been identified, so the consultation should assess the financial impact and available options."
    );

    discussionPoints.push(
      "Extent of financial loss or exposure",
      "Financial impact of the disputed loan or lending issue"
    );

    consultationFocus.push(
      "Assessing the financial exposure and potential legal options"
    );
  }

  if (urgency === "Document Review Required") {
    summary.push(
      "Document review has been identified as a priority, so the consultation should focus on the loan documentation, account records and relevant communications."
    );

    discussionPoints.push(
      "Documents requiring legal review",
      "Terms, charges or provisions requiring clarification"
    );

    consultationFocus.push(
      "Detailed review of the relevant loan and financial documents"
    );
  }

  if (urgency === "General Consultation") {
    summary.push(
      "The matter is currently being presented as a general consultation, allowing the legal team to first understand the background and advise on appropriate next steps."
    );
  }

  return createPreparation({
    summary,
    documents,
    discussionPoints,
    consultationFocus,
   urgencyLevel:
  urgency === "Immediate Recovery / Enforcement Risk" ||
  urgency === "Upcoming Deadline" ||
  stage === "Recovery / Enforcement Action"
    ? "high"
    : "medium",
  });
}