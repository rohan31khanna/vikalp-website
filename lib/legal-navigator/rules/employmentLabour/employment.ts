import { createPreparation } from "../common/createPreparation";

export function getEmploymentContractPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an employment contract or the terms of an employment relationship.",
      "Your responses indicate that the employment agreement, applicable workplace policies and relevant employment communications should be reviewed carefully.",
      "The consultation will focus on understanding the contractual terms, rights and obligations of the parties and available legal options."
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Offer Letter",
      "Job Description / Role Documents",
      "Salary Structure / Compensation Details",
      "Employee Handbook / HR Policies (if applicable)",
      "Confidentiality / NDA Agreement (if applicable)",
      "Non-Compete / Restrictive Covenant Documents (if applicable)",
      "Relevant Emails or Written Communications",
      "Performance or Appraisal Documents (if relevant)",
      "Any Notice or Dispute Correspondence",
      "Any Other Relevant Employment Documents"
    ],

    discussionPoints: [
      "Background of the employment relationship",
      "Nature of the employment and role",
      "Key contractual terms",
      "Salary, benefits and other employment conditions",
      "Working hours, leave and workplace policies",
      "Confidentiality or restrictive obligations",
      "Dispute regarding contractual terms, if any",
      "Communication with the employer or HR",
      "Current status of the employment relationship",
      "Desired outcome and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing the employment agreement and related documents",
      "Understanding the contractual rights and obligations",
      "Identifying potentially relevant employment law issues",
      "Assessing available legal remedies or options",
      "Discussing appropriate next steps"
    ],

    urgencyLevel: "medium",
  });
}