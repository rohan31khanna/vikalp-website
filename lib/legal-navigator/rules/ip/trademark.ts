import { createPreparation } from "../common/createPreparation";

export function getTrademarkPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a trademark matter involving brand names, logos, marks or other identifiers used in connection with goods or services.",
      "Your responses indicate that the relevant trademark details, ownership information, registration records and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the trademark position, the nature of the issue and the appropriate legal or procedural options."
    ],

    documents: [
      "Trademark / Brand Name Details",
      "Logo / Device Mark Artwork (if applicable)",
      "Trademark Registration Certificate (if registered)",
      "Trademark Application Details (if pending)",
      "Trademark Search / Examination Report (if available)",
      "Examination Objection / Office Communication (if any)",
      "Opposition / Counterstatement Documents (if applicable)",
      "Proof of Trademark Use",
      "Invoices / Advertisements / Marketing Materials",
      "Business Registration / Ownership Documents",
      "Assignment / Licensing Documents (if applicable)",
      "Legal Notices / Cease-and-Desist Communications (if any)",
      "Any Other Relevant Trademark Documents"
    ],

    discussionPoints: [
      "Background and ownership of the trademark",
      "Nature of the mark and goods or services involved",
      "Current registration or application status",
      "Use of the trademark and duration of use",
      "Trademark search and examination history",
      "Any objection, opposition or cancellation proceeding",
      "Potential or actual infringement by another party",
      "Communication with the other party or trademark authority",
      "Commercial impact of the trademark issue",
      "Desired outcome and immediate concerns"
    ],

    consultationFocus: [
      "Reviewing trademark ownership and registration documents",
      "Understanding the current trademark status",
      "Assessing registration, opposition or enforcement options",
      "Reviewing available evidence of trademark use and ownership",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}