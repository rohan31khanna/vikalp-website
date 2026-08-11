import { createPreparation } from "../common/createPreparation";

export function getDefaultArbitrationPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Arbitration & ADR.",
      "The consultation will help assess the underlying dispute, arbitration agreement, relevant procedural documents and the current stage of the matter.",
      "Providing the relevant agreement, notices, correspondence and supporting documents can help the legal team understand the matter more efficiently.",
    ],

    documents: [
      "Underlying Agreement / Contract",
      "Arbitration Agreement / Arbitration Clause",
      "Notice / Legal Notice (if any)",
      "Arbitration Correspondence",
      "Statement of Claim / Defence (if applicable)",
      "Procedural Orders / Directions (if applicable)",
      "Evidence and Supporting Documents",
      "Interim Orders / Applications (if applicable)",
      "Arbitration Award (if already issued)",
      "Court / Tribunal Documents (if applicable)",
      "Any Other Relevant Arbitration Documents",
    ],

    discussionPoints: [
      "Background of the dispute",
      "Parties involved",
      "Underlying agreement or transaction",
      "Existence and terms of the arbitration agreement",
      "Current stage of the arbitration or ADR process",
      "Notices and communications exchanged",
      "Claims, disputes or issues involved",
      "Evidence and documents available",
      "Any court, tribunal or institutional proceedings",
      "Upcoming deadlines or immediate concerns",
      "Desired outcome of the consultation",
    ],

    consultationFocus: [
      "Understanding the factual and procedural background",
      "Reviewing the arbitration agreement and relevant documents",
      "Identifying applicable arbitration or ADR procedures",
      "Assessing available legal and procedural remedies",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}