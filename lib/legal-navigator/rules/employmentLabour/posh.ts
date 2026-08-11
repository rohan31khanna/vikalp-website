import { createPreparation } from "../common/createPreparation";

export function getPOSHPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a workplace sexual harassment matter.",
      "Your responses indicate that the relevant incident records, communications, workplace policies and available supporting evidence should be preserved and reviewed carefully.",
      "The consultation will focus on understanding the circumstances, the internal complaint process and the appropriate legal or workplace remedies available.",
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Workplace / POSH Policy",
      "Incident / Complaint Details",
      "Emails or Written Communications",
      "Relevant Messages or Chats",
      "Internal Committee / ICC Correspondence",
      "Complaint Submitted to the Internal Committee (if applicable)",
      "Notice or Communication from the Internal Committee (if applicable)",
      "Witness Details (if available)",
      "Supporting Documents / Evidence",
      "HR / Employer Correspondence",
      "Any Other Relevant Documents",
    ],

    discussionPoints: [
      "Background of the workplace matter",
      "Nature and circumstances of the alleged incident",
      "Timeline of relevant events",
      "Persons involved",
      "Communication with the employer, HR or Internal Committee",
      "Whether an internal complaint has been submitted",
      "Current stage of any Internal Committee proceedings",
      "Available documentary or electronic evidence",
      "Witnesses or other relevant persons",
      "Any retaliation or employment-related consequences",
      "Immediate legal or workplace concerns",
    ],

    consultationFocus: [
      "Reviewing relevant workplace and POSH-related documents",
      "Understanding the applicable complaint and internal process",
      "Assessing available workplace and legal remedies",
      "Identifying relevant evidence and procedural requirements",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}