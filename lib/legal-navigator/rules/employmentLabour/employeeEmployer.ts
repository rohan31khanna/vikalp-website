import { createPreparation } from "../common/createPreparation";

export function getEmployeeEmployerDisputePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a dispute between an employee and an employer.",
      "Your responses indicate that the employment agreement, relevant workplace records and communications between the parties should be reviewed carefully.",
      "The consultation will focus on understanding the dispute, the rights and obligations involved and the available legal remedies."
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Salary Slips / Compensation Records",
      "Relevant HR / Employer Correspondence",
      "Emails or Written Communications",
      "Performance / Attendance Records (if relevant)",
      "Warning / Show-Cause Notices (if applicable)",
      "Termination / Resignation Documents (if applicable)",
      "Leave or Service Records (if relevant)",
      "Demand Notice / Legal Notice (if any)",
      "Employer's Reply (if any)",
      "Previous Labour Authority / Court Documents (if applicable)",
      "Any Other Relevant Employment Documents"
    ],

    discussionPoints: [
      "Background of the employment relationship",
      "Nature of the dispute",
      "Employment terms and obligations of the parties",
      "Salary, benefits or other employment-related issues",
      "Relevant workplace events and communications",
      "Actions already taken by the employee or employer",
      "Internal grievance or complaint process",
      "Any notices, disciplinary action or termination involved",
      "Existing legal or labour proceedings",
      "Desired outcome and immediate concerns"
    ],

    consultationFocus: [
      "Understanding the factual background of the dispute",
      "Reviewing employment records and relevant communications",
      "Assessing applicable employment and labour law remedies",
      "Identifying relevant procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}