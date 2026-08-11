import { createPreparation } from "../common/createPreparation";

export function getArbitrationInterimPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding interim or urgent relief in connection with an arbitration matter.",
      "Your responses indicate that the arbitration agreement, underlying dispute documents and evidence supporting the need for interim protection should be reviewed carefully.",
      "The consultation will focus on understanding the urgency, the asset, right or interest requiring protection and the available legal or procedural options."
    ],

    documents: [
      "Underlying Agreement / Contract",
      "Arbitration Agreement / Arbitration Clause",
      "Notice Invoking Arbitration (if applicable)",
      "Statement of Claim / Defence (if applicable)",
      "Documents Supporting the Underlying Claim",
      "Evidence Supporting the Need for Interim Relief",
      "Relevant Correspondence Between the Parties",
      "Threat / Demand / Enforcement Communications (if any)",
      "Details of Relevant Assets or Property (if applicable)",
      "Previous Interim Applications or Orders (if any)",
      "Court / Tribunal Documents (if applicable)",
      "Any Other Relevant Arbitration Documents"
    ],

    discussionPoints: [
      "Background of the underlying dispute",
      "Nature of the arbitration agreement",
      "Urgent circumstances requiring protection",
      "Right, property, asset or interest requiring protection",
      "Risk of loss, disposal, damage or other prejudice",
      "Actions threatened or already taken by the opposing party",
      "Evidence supporting the request for interim protection",
      "Whether arbitration proceedings have already commenced",
      "Whether any interim relief has already been sought",
      "Related court or tribunal proceedings",
      "Upcoming deadlines or immediate risks",
      "Desired interim relief"
    ],

    consultationFocus: [
      "Reviewing the underlying agreement and arbitration documents",
      "Understanding the circumstances requiring interim protection",
      "Assessing available interim relief mechanisms",
      "Identifying relevant evidence and procedural requirements",
      "Discussing appropriate legal options and immediate next steps"
    ],

    urgencyLevel: "high",
  });
}