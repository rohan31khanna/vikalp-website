import { createPreparation } from "../common/createPreparation";

export function getArbitrationAwardPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an arbitration award that may require challenge or further legal action.",
      "Your responses indicate that the arbitration agreement, arbitral award, procedural record and relevant communications should be reviewed carefully.",
      "The consultation will focus on understanding the award, the circumstances surrounding its issuance and the available legal or procedural remedies."
    ],

    documents: [
      "Arbitration Agreement / Arbitration Clause",
      "Final Arbitration Award",
      "Interim Award (if applicable)",
      "Statement of Claim",
      "Statement of Defence / Counterclaim",
      "Procedural Orders / Directions",
      "Evidence and Supporting Documents",
      "Hearing Records / Transcripts (if available)",
      "Correspondence Between the Parties",
      "Arbitrator's Orders / Directions",
      "Previous Court Orders (if any)",
      "Documents Relating to Award Delivery / Receipt",
      "Any Other Relevant Arbitration Documents"
    ],

    discussionPoints: [
      "Background of the arbitration",
      "Nature of the underlying dispute",
      "Date and contents of the arbitration award",
      "Claims and issues decided by the tribunal",
      "Procedural history of the arbitration",
      "Evidence and submissions considered",
      "Concerns regarding the award or arbitration process",
      "Whether the award has been challenged previously",
      "Whether enforcement proceedings have been initiated",
      "Related court proceedings, if any",
      "Relevant deadlines or limitation concerns",
      "Desired legal outcome"
    ],

    consultationFocus: [
      "Reviewing the arbitration award and relevant procedural record",
      "Understanding the legal and procedural position following the award",
      "Assessing available remedies in relation to the award",
      "Identifying relevant documents and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}