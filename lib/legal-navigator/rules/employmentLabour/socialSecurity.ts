import { createPreparation } from "../common/createPreparation";

export function getEmployeeBenefitsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding employee benefits or statutory social security entitlements.",
      "Your responses indicate that employment records, contribution records and relevant benefit documents should be reviewed carefully.",
      "The consultation will focus on understanding the entitlement, the records available and the appropriate legal or administrative remedies."
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Salary Slips",
      "Employee ID / Employment Records",
      "PF / EPF Account or Contribution Records",
      "UAN Details (if applicable)",
      "Gratuity Records / Service Details",
      "ESI Records (if applicable)",
      "Bank Statements / Payment Records",
      "Employer / HR Correspondence",
      "Benefit Claim or Application Documents",
      "Rejection / Delay Communication (if applicable)",
      "Previous Complaint or Authority Correspondence",
      "Any Other Relevant Employment Documents"
    ],

    discussionPoints: [
      "Background of the employment relationship",
      "Nature of the benefit or statutory entitlement involved",
      "Length of employment and relevant service period",
      "Salary and contribution details",
      "PF, gratuity, ESI or other applicable benefits",
      "Records maintained by the employer or relevant authority",
      "Claims or applications already submitted",
      "Reasons for rejection, delay or non-payment, if any",
      "Communication with the employer or relevant authority",
      "Current status and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing employment and benefit records",
      "Understanding the relevant statutory entitlement",
      "Assessing available administrative and legal remedies",
      "Identifying required documentation and procedural steps",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}