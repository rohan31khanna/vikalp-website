import { createPreparation } from "../common/createPreparation";

export function getArbitrationEnforcementPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding enforcement of an arbitration award.",
      "Your responses indicate that the arbitration agreement, final award, relevant procedural documents and records concerning compliance or payment should be reviewed carefully.",
      "The consultation will focus on understanding the status of the award, steps already taken toward enforcement and the available legal or procedural options.",
    ],

    documents: [
      "Arbitration Agreement / Arbitration Clause",
      "Final Arbitration Award",
      "Interim Award (if applicable)",
      "Award Delivery / Receipt Documents",
      "Statement of Claim",
      "Statement of Defence / Counterclaim",
      "Procedural Orders / Directions",
      "Correspondence Regarding Compliance or Payment",
      "Demand / Enforcement Notice (if any)",
      "Payment or Settlement Records (if applicable)",
      "Previous Court Orders (if any)",
      "Documents Relating to Any Challenge to the Award",
      "Any Other Relevant Arbitration Documents",
    ],

    discussionPoints: [
      "Background of the arbitration",
      "Nature of the dispute and relief granted",
      "Date and terms of the arbitration award",
      "Whether the award has been complied with",
      "Amount or obligations remaining outstanding",
      "Communications with the opposing party regarding compliance",
      "Whether any challenge to the award has been filed",
      "Whether enforcement proceedings have already been initiated",
      "Any court proceedings or orders relating to the award",
      "Assets or obligations relevant to enforcement, if applicable",
      "Current status and immediate deadlines",
      "Desired outcome",
    ],

    consultationFocus: [
      "Reviewing the arbitration award and relevant procedural documents",
      "Understanding the current enforcement position",
      "Assessing available enforcement and related legal remedies",
      "Identifying relevant documents and procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}