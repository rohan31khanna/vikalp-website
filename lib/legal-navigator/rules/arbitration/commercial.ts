import { createPreparation } from "../common/createPreparation";

export function getCommercialArbitrationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a commercial arbitration matter arising from a business or contractual dispute.",
      "Your responses indicate that the underlying agreement, arbitration clause, relevant correspondence and dispute records should be reviewed carefully.",
      "The consultation will focus on understanding the contractual dispute, the arbitration process and the available legal options."
    ],

    documents: [
      "Underlying Commercial Agreement / Contract",
      "Arbitration Clause / Arbitration Agreement",
      "Statement of Claim or Notice of Dispute (if applicable)",
      "Legal Notices and Correspondence",
      "Invoices / Payment Records (if relevant)",
      "Relevant Business Records",
      "Evidence Supporting the Claim or Defence",
      "Correspondence Between the Parties",
      "Arbitration Notices / Procedural Orders (if applicable)",
      "Previous Court Orders (if any)",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Background of the commercial relationship",
      "Nature of the contractual dispute",
      "Terms of the underlying agreement",
      "Scope and wording of the arbitration clause",
      "Claims or counterclaims involved",
      "Communication and negotiations between the parties",
      "Notice invoking arbitration, if already issued",
      "Current stage of the arbitration process",
      "Any related court proceedings",
      "Desired outcome and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the underlying agreement and arbitration clause",
      "Understanding the contractual and procedural position",
      "Assessing the available arbitration and related legal remedies",
      "Identifying relevant evidence and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}