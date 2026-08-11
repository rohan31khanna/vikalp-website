import { createPreparation } from "../common/createPreparation";

export function getCopyrightPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a copyright matter involving original creative, literary, artistic, software or other protected works.",
      "Your responses indicate that the relevant work, ownership records, creation history and supporting evidence should be reviewed carefully.",
      "The consultation will focus on understanding the copyright position, the nature of the issue and the appropriate legal or procedural options.",
    ],

    documents: [
      "Copy of the Copyrighted Work",
      "Creation / Development Records",
      "Copyright Registration Certificate (if registered)",
      "Copyright Application Details (if pending)",
      "Proof of Ownership / Authorship",
      "Employment / Work-for-Hire Agreement (if applicable)",
      "Assignment Agreement (if applicable)",
      "Licence Agreement (if applicable)",
      "Publication / Distribution Records",
      "Invoices / Commercialisation Records (if relevant)",
      "Website / Online Publication Records (if applicable)",
      "Infringement Evidence (if applicable)",
      "Legal Notices / Cease-and-Desist Communications (if any)",
      "Any Other Relevant Copyright Documents",
    ],

    discussionPoints: [
      "Background and nature of the copyrighted work",
      "Authorship and ownership of the work",
      "Date and circumstances of creation",
      "Current use, publication or commercialisation of the work",
      "Copyright registration status, if any",
      "Licensing, assignment or ownership arrangements",
      "Nature of the alleged infringement or dispute",
      "Use of the work by the other party",
      "Evidence supporting ownership or infringement",
      "Communication with the other party",
      "Commercial or other impact of the dispute",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the copyrighted work and ownership documents",
      "Understanding the current copyright position",
      "Assessing registration, licensing or enforcement options",
      "Reviewing available evidence of authorship, ownership and use",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}