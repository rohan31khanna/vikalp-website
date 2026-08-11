import { createPreparation } from "../common/createPreparation";

export function getCorporateContractsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a commercial contract or business agreement.",
      "Your responses indicate that the agreement should be reviewed carefully before execution, renewal or further performance.",
      "The consultation will focus on understanding the commercial arrangement, identifying important contractual provisions and discussing appropriate legal steps.",
    ],

    documents: [
      "Draft or Executed Agreement",
      "Previous Versions / Amendments (if applicable)",
      "Statement of Work / Scope of Services (if applicable)",
      "Invoices or Payment Records (if relevant)",
      "Relevant Email or Written Correspondence",
      "Notices of Breach or Termination (if any)",
      "Company / Business Details",
      "Related Agreements or Supporting Documents",
      "Any Other Relevant Contract Documents",
    ],

    discussionPoints: [
      "Background and purpose of the agreement",
      "Parties involved in the contract",
      "Key commercial obligations",
      "Payment terms and performance requirements",
      "Important contractual rights and responsibilities",
      "Termination, renewal or breach provisions",
      "Disputes or concerns already arising from the agreement",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the relevant agreement and supporting documents",
      "Identifying important contractual obligations and potential concerns",
      "Understanding available contractual and legal options",
      "Discussing appropriate steps before execution or further action",
    ],

    urgencyLevel: "medium",
  });
}