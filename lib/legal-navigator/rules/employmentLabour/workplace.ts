import { createPreparation } from "../common/createPreparation";

export function getWorkplacePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a workplace harassment or inappropriate workplace conduct matter.",
      "Your responses indicate that the relevant workplace communications, incident records and available supporting evidence should be preserved and reviewed carefully.",
      "The consultation will focus on understanding the circumstances, steps already taken and the appropriate legal or workplace remedies available.",
    ],

    documents: [
      "Employment Agreement / Appointment Letter",
      "Workplace / HR Policies",
      "Emails or Written Communications",
      "Relevant Messages or Chats",
      "Incident Reports or Complaints",
      "HR / Employer Correspondence",
      "Witness Details (if available)",
      "Performance / Disciplinary Documents (if relevant)",
      "Internal Complaint or Grievance Records",
      "Legal Notice or Reply (if any)",
      "Any Other Supporting Evidence",
    ],

    discussionPoints: [
      "Background of the workplace issue",
      "Nature and circumstances of the alleged conduct",
      "Timeline of relevant incidents",
      "Persons involved",
      "Communication with HR, management or other authorities",
      "Internal complaint or grievance process",
      "Supporting evidence and witnesses",
      "Any retaliation or employment consequences",
      "Current status of the matter",
      "Immediate workplace or legal concerns",
    ],

    consultationFocus: [
      "Reviewing relevant employment and workplace documents",
      "Understanding the circumstances and applicable legal framework",
      "Assessing available internal and legal remedies",
      "Identifying appropriate documentation and procedural steps",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}