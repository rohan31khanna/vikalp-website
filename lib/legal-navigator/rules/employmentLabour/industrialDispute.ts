import { createPreparation } from "../common/createPreparation";

export function getIndustrialDisputePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an industrial or labour dispute involving workers, an employer, union or workplace organisation.",
      "Your responses indicate that employment records, workplace communications and documents relating to the dispute should be reviewed carefully.",
      "The consultation will focus on understanding the nature of the dispute, the parties involved, the current proceedings and the available legal or procedural remedies.",
    ],

    documents: [
      "Employment / Service Records",
      "Appointment Letters or Employment Agreements",
      "Salary / Wage Records",
      "Attendance / Employment Records",
      "Union or Collective Bargaining Documents (if applicable)",
      "Demand Notice / Charter of Demands (if applicable)",
      "Employer Correspondence",
      "Show-Cause / Disciplinary Notices (if applicable)",
      "Retrenchment / Layoff / Termination Documents (if applicable)",
      "Labour Authority / Conciliation Documents (if applicable)",
      "Industrial Tribunal / Labour Court Documents (if applicable)",
      "Previous Legal Notices or Replies (if any)",
      "Any Other Relevant Labour Documents",
    ],

    discussionPoints: [
      "Background of the industrial or labour dispute",
      "Parties involved in the dispute",
      "Nature of the employment or workplace relationship",
      "Issues relating to wages, termination, retrenchment, layoff or working conditions",
      "Role of any trade union or employee association",
      "Communication and negotiations between the parties",
      "Conciliation or labour authority proceedings",
      "Any court, tribunal or other legal proceedings",
      "Current status of the dispute",
      "Immediate employment or legal concerns",
    ],

    consultationFocus: [
      "Reviewing relevant employment and labour documents",
      "Understanding the nature and legal status of the dispute",
      "Assessing applicable labour law procedures and remedies",
      "Reviewing any conciliation, tribunal or court proceedings",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}