import { createPreparation } from "../common/createPreparation";

export function getCorporateIPPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding intellectual property protection or an IP-related business matter.",
      "Your responses indicate that the relevant intellectual property, ownership position and supporting business records should be reviewed.",
      "The consultation will focus on understanding the intellectual property involved, identifying potential protection or enforcement requirements and discussing appropriate legal options.",
    ],

    documents: [
      "Existing Trademark / Brand Details",
      "Trademark or IP Registration Documents (if available)",
      "Logo, Brand Name or Other IP Material",
      "Copyrighted Material or Creative Work (if applicable)",
      "IP Assignment / Licensing Agreements (if applicable)",
      "Business Registration Documents",
      "Previous IP Applications or Correspondence",
      "Legal Notices or Objections (if any)",
      "Evidence of Infringement or Unauthorised Use (if applicable)",
      "Any Other Relevant IP Documents",
    ],

    discussionPoints: [
      "Nature of the intellectual property involved",
      "Ownership and creation of the IP",
      "Current registration or protection status",
      "Use of the brand, work or intellectual property",
      "Existing licences, assignments or commercial arrangements",
      "Potential infringement or unauthorised use",
      "Previous applications, objections, notices or disputes",
      "Business objectives and immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the intellectual property and ownership position",
      "Reviewing available registration and supporting documents",
      "Identifying appropriate protection, enforcement or commercialisation options",
      "Discussing relevant legal steps and next actions",
    ],

    urgencyLevel: "medium",
  });
}