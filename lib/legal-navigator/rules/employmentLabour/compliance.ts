import { createPreparation } from "../common/createPreparation";

export function getLabourCompliancePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding employment or labour law compliance requirements.",
      "Your responses indicate that workplace policies, employment records and applicable statutory compliance documents should be reviewed carefully.",
      "The consultation will focus on understanding the applicable compliance requirements, identifying potential gaps and discussing appropriate legal steps."
    ],

    documents: [
      "Employee / Employment Records",
      "Employment Agreements / Appointment Letters",
      "HR Policies and Employee Handbook",
      "Salary / Wage Records",
      "Attendance and Leave Records",
      "Statutory Registers / Compliance Records (if applicable)",
      "PF / ESI / Gratuity Records (if applicable)",
      "Internal Workplace Policies",
      "Labour Authority Notices or Correspondence (if any)",
      "Previous Compliance Reports / Audit Documents (if applicable)",
      "Legal Notices or Regulatory Communications (if any)",
      "Any Other Relevant Compliance Documents"
    ],

    discussionPoints: [
      "Nature and size of the organisation",
      "Workforce and employment structure",
      "Applicable employment and labour compliance requirements",
      "Existing HR policies and employment documentation",
      "Salary, wage and statutory benefit compliance",
      "PF, ESI, gratuity or other applicable statutory obligations",
      "Working hours, leave and workplace policies",
      "Internal compliance procedures and record keeping",
      "Any notices, inspections or regulatory communications",
      "Identified compliance gaps or immediate concerns"
    ],

    consultationFocus: [
      "Reviewing employment and labour compliance documents",
      "Understanding applicable statutory requirements",
      "Identifying potential compliance gaps",
      "Reviewing workplace policies and documentation",
      "Discussing appropriate corrective and compliance steps"
    ],

    urgencyLevel: "medium",
  });
}