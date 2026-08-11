import { createPreparation } from "../common/createPreparation";

export function getUnionPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a trade union, collective bargaining or other collective employment matter.",
      "Your responses indicate that employment records, union communications and documents relating to the collective matter should be reviewed carefully.",
      "The consultation will focus on understanding the collective issue, the parties involved, the current stage of discussions or proceedings and the available legal options.",
    ],

    documents: [
      "Trade Union Registration / Recognition Documents (if applicable)",
      "Union Constitution / Rules (if relevant)",
      "Employment / Service Records",
      "Collective Bargaining Agreements (if applicable)",
      "Charter of Demands / Collective Demands",
      "Employer Correspondence",
      "Union Notices / Communications",
      "Meeting Minutes / Negotiation Records",
      "Strike / Lockout Notices (if applicable)",
      "Conciliation / Labour Authority Documents (if applicable)",
      "Labour Court / Industrial Tribunal Documents (if applicable)",
      "Previous Legal Notices or Replies (if any)",
      "Any Other Relevant Collective Employment Documents",
    ],

    discussionPoints: [
      "Background of the collective employment matter",
      "Trade union or employee group involved",
      "Nature of the collective dispute or issue",
      "Employment terms or workplace conditions involved",
      "Collective bargaining or negotiations already undertaken",
      "Charter of demands or proposals, if applicable",
      "Communication between the union and employer",
      "Conciliation, mediation or labour authority involvement",
      "Any strike, lockout or other industrial action",
      "Existing court, tribunal or labour proceedings",
      "Current status and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing relevant union and employment documents",
      "Understanding the legal position of the collective matter",
      "Assessing applicable labour law procedures and remedies",
      "Reviewing negotiation, conciliation or dispute-resolution options",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}