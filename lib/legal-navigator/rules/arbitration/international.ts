import { createPreparation } from "../common/createPreparation";

export function getInternationalArbitrationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an international arbitration matter involving cross-border parties, transactions or obligations.",
      "Your responses indicate that the underlying agreement, arbitration clause, governing law, seat of arbitration and relevant procedural documents should be reviewed carefully.",
      "The consultation will focus on understanding the international arbitration framework, the current stage of the matter and the available legal or procedural options."
    ],

    documents: [
      "Underlying International Agreement / Contract",
      "Arbitration Agreement / Arbitration Clause",
      "Notice Invoking Arbitration (if applicable)",
      "Arbitrator Appointment Documents",
      "Statement of Claim (if applicable)",
      "Statement of Defence / Counterclaim (if applicable)",
      "Procedural Orders / Directions",
      "Evidence and Supporting Documents",
      "Witness Statements (if applicable)",
      "International Transaction Records",
      "Correspondence Between the Parties",
      "Interim Applications / Orders (if applicable)",
      "Arbitration Award (if already issued)",
      "Foreign Court / Tribunal Documents (if applicable)",
      "Any Other Relevant International Arbitration Documents"
    ],

    discussionPoints: [
      "Background of the cross-border transaction or dispute",
      "Parties and jurisdictions involved",
      "Terms of the underlying agreement",
      "Arbitration clause and applicable governing law",
      "Seat / place of arbitration",
      "Current stage of the arbitration",
      "Appointment and constitution of the arbitral tribunal",
      "Claims, counterclaims and defences involved",
      "Evidence and documents available",
      "Procedural orders and upcoming deadlines",
      "Any interim relief or related court proceedings",
      "Recognition or enforcement concerns, if an award has been issued",
      "Immediate legal concerns and desired outcome"
    ],

    consultationFocus: [
      "Reviewing the international agreement and arbitration clause",
      "Understanding the applicable arbitration framework and procedural position",
      "Assessing available legal and procedural remedies",
      "Identifying relevant cross-border documents and evidence",
      "Understanding important procedural deadlines",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}