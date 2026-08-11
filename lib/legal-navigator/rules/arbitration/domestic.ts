import { createPreparation } from "../common/createPreparation";

export function getDomesticArbitrationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a domestic arbitration matter in India.",
      "Your responses indicate that the underlying agreement, arbitration clause, procedural documents and relevant evidence should be reviewed carefully.",
      "The consultation will focus on understanding the domestic arbitration process, the current stage of the matter and the available legal or procedural options."
    ],

    documents: [
      "Underlying Agreement / Contract",
      "Arbitration Agreement / Arbitration Clause",
      "Notice Invoking Arbitration (if applicable)",
      "Arbitrator Appointment Documents",
      "Statement of Claim (if applicable)",
      "Statement of Defence / Counterclaim (if applicable)",
      "Procedural Orders / Directions",
      "Evidence and Supporting Documents",
      "Witness Statements (if applicable)",
      "Arbitration Correspondence",
      "Interim Orders / Applications (if applicable)",
      "Arbitration Award (if already issued)",
      "Related Court Orders / Proceedings (if any)",
      "Any Other Relevant Arbitration Documents"
    ],

    discussionPoints: [
      "Background of the underlying dispute",
      "Nature of the contractual or commercial relationship",
      "Terms of the arbitration agreement",
      "Parties involved in the arbitration",
      "Current stage of the arbitration",
      "Appointment and constitution of the arbitral tribunal",
      "Claims, counterclaims or defences involved",
      "Evidence and documents available",
      "Procedural orders and upcoming deadlines",
      "Any interim relief or related court proceedings",
      "Whether an arbitration award has already been issued",
      "Immediate concerns and desired outcome"
    ],

    consultationFocus: [
      "Reviewing the arbitration agreement and relevant documents",
      "Understanding the current stage of the domestic arbitration",
      "Assessing applicable procedural requirements and available remedies",
      "Identifying relevant evidence and important deadlines",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}