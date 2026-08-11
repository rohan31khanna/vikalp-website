import { createPreparation } from "../common/createPreparation";

export function getTerminationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding termination, dismissal or separation from employment.",
      "Your responses indicate that the employment records, termination communication and relevant workplace correspondence should be reviewed carefully.",
      "The consultation will focus on understanding the circumstances of the separation, applicable employment obligations and available legal options."
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Termination / Dismissal Letter",
      "Show-Cause Notice (if applicable)",
      "Resignation Letter (if applicable)",
      "Salary Slips / Salary Records",
      "HR / Employer Correspondence",
      "Performance Reviews or Warning Letters (if relevant)",
      "Disciplinary / Enquiry Documents (if applicable)",
      "Leave / Attendance Records (if relevant)",
      "Full & Final Settlement Documents (if applicable)",
      "Previous Legal Notices or Replies (if any)",
      "Any Other Relevant Employment Documents"
    ],

    discussionPoints: [
      "Background of the employment relationship",
      "Circumstances leading to the termination or separation",
      "Nature and date of the termination",
      "Notice period and contractual termination terms",
      "Warnings, disciplinary action or performance-related issues",
      "Communication with the employer or HR",
      "Salary, benefits or final settlement pending",
      "Whether any internal grievance or appeal was raised",
      "Any legal notice or proceedings already initiated",
      "Desired outcome and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the employment agreement and termination documents",
      "Understanding the circumstances and contractual position",
      "Assessing relevant employment and labour law issues",
      "Identifying available legal remedies or procedural options",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}