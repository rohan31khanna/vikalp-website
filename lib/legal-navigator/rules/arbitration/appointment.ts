import { createPreparation } from "../common/createPreparation";

export function getArbitratorAppointmentPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding the appointment or challenge of an arbitrator.",
      "Your responses indicate that the arbitration agreement, relevant notices and communications concerning the constitution of the arbitral tribunal should be reviewed carefully.",
      "The consultation will focus on understanding the appointment process, any concerns regarding the arbitrator and the available legal or procedural options.",
    ],

    documents: [
      "Underlying Agreement / Contract",
      "Arbitration Agreement / Arbitration Clause",
      "Notice Invoking Arbitration",
      "Notice for Appointment of Arbitrator",
      "Correspondence Regarding Arbitrator Appointment",
      "Proposed Arbitrator Details (if available)",
      "Arbitrator Disclosure / Declaration (if applicable)",
      "Objections or Challenge Communication (if any)",
      "Previous Court Orders Regarding Arbitration (if applicable)",
      "Arbitration Institution Correspondence (if applicable)",
      "Any Other Relevant Arbitration Documents",
    ],

    discussionPoints: [
      "Background of the arbitration agreement",
      "Nature of the underlying dispute",
      "Terms of the arbitration clause",
      "Appointment process followed by the parties",
      "Whether an arbitrator has already been appointed",
      "Grounds for concern or challenge, if any",
      "Disclosure or conflict-of-interest issues",
      "Communication between the parties regarding appointment",
      "Any court or institutional proceedings concerning appointment",
      "Current stage of the arbitration",
      "Immediate procedural concerns or deadlines",
    ],

    consultationFocus: [
      "Reviewing the arbitration agreement and appointment documents",
      "Understanding the applicable appointment or challenge procedure",
      "Assessing the available procedural and legal options",
      "Identifying relevant documents and applicable deadlines",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}
