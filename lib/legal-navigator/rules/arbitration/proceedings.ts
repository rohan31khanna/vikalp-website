import { createPreparation } from "../common/createPreparation";

export function getArbitrationProceedingsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding ongoing arbitration proceedings.",
      "Your responses indicate that the arbitration agreement, pleadings, procedural orders and evidence relating to the dispute should be reviewed carefully.",
      "The consultation will focus on understanding the current stage of the arbitration, the issues involved and the appropriate procedural and legal options."
    ],

    documents: [
      "Underlying Agreement / Contract",
      "Arbitration Agreement / Arbitration Clause",
      "Notice Invoking Arbitration",
      "Statement of Claim (if applicable)",
      "Statement of Defence / Counterclaim (if applicable)",
      "Arbitrator Appointment Documents",
      "Procedural Orders / Directions",
      "Evidence and Supporting Documents",
      "Witness Statements (if applicable)",
      "Correspondence Between the Parties",
      "Arbitration Hearing Notices / Schedules",
      "Previous Interim Orders or Court Orders (if any)",
      "Any Other Relevant Arbitration Documents"
    ],

    discussionPoints: [
      "Background of the underlying dispute",
      "Nature of the claims and counterclaims",
      "Terms of the arbitration agreement",
      "Current stage of the arbitration",
      "Pleadings already filed",
      "Evidence and documents relied upon",
      "Procedural directions and deadlines",
      "Interim applications or relief sought",
      "Previous hearings or procedural orders",
      "Related court or tribunal proceedings, if any",
      "Immediate procedural concerns",
      "Desired outcome of the arbitration"
    ],

    consultationFocus: [
      "Reviewing the arbitration agreement and procedural documents",
      "Understanding the current stage and procedural position",
      "Reviewing the claims, defence and available evidence",
      "Identifying relevant procedural requirements and deadlines",
      "Discussing appropriate legal strategy and next steps"
    ],

    urgencyLevel: "high",
  });
}