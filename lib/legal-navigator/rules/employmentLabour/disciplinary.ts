import { createPreparation } from "../common/createPreparation";

export function getDisciplinaryPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a workplace disciplinary proceeding or allegation of misconduct.",
      "Your responses indicate that the employment records, disciplinary notices, enquiry documents and relevant workplace communications should be reviewed carefully.",
      "The consultation will focus on understanding the allegations, the disciplinary process followed and the available legal options."
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Show-Cause Notice",
      "Charge Sheet / Statement of Allegations (if applicable)",
      "Disciplinary Notice or Warning Letter",
      "Domestic Enquiry Documents (if applicable)",
      "Employee's Written Reply",
      "Employer / HR Correspondence",
      "Performance or Attendance Records (if relevant)",
      "Evidence Relied Upon by the Employer",
      "Witness Details / Statements (if available)",
      "Disciplinary Committee / Enquiry Reports (if applicable)",
      "Final Disciplinary Order (if already issued)",
      "Previous Legal Notices or Replies (if any)",
      "Any Other Relevant Employment Documents"
    ],

    discussionPoints: [
      "Background of the employment relationship",
      "Nature of the alleged misconduct",
      "Allegations or charges raised by the employer",
      "Show-cause notice or disciplinary communication",
      "Employee's response to the allegations",
      "Whether an internal or domestic enquiry has been initiated",
      "Evidence and witnesses involved",
      "Procedural steps already completed",
      "Any disciplinary order or proposed action",
      "Communication with HR or management",
      "Current status of the proceeding",
      "Immediate employment or legal concerns"
    ],

    consultationFocus: [
      "Reviewing the disciplinary and employment documents",
      "Understanding the allegations and applicable employment obligations",
      "Assessing the disciplinary process and available responses",
      "Identifying relevant documents and procedural requirements",
      "Discussing available legal options and appropriate next steps"
    ],

    urgencyLevel: "high",
  });
}