import { createPreparation } from "../common/createPreparation";

export function getDefaultIPPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Intellectual Property.",
      "The consultation will help assess the intellectual property involved, ownership or registration status and the nature of the legal concern.",
      "Relevant IP documents, ownership records, agreements and supporting evidence can help the legal team understand your matter more efficiently.",
    ],

    documents: [
      "Details of the Intellectual Property",
      "Registration Certificate / Application Details (if applicable)",
      "Proof of Ownership / Authorship",
      "Relevant Agreements or Contracts",
      "Assignment / Licensing Documents (if applicable)",
      "Original Work / Product / Brand Materials",
      "Proof of Use / Publication / Commercialisation",
      "Relevant Correspondence",
      "Legal Notice / Reply (if any)",
      "Infringement Evidence (if applicable)",
      "Court / Tribunal / Authority Documents (if applicable)",
      "Any Other Relevant IP Documents",
    ],

    discussionPoints: [
      "Nature of the intellectual property",
      "Ownership and authorship",
      "Registration or application status",
      "Use or commercialisation of the IP",
      "Nature of the current legal concern",
      "Relevant agreements or contractual arrangements",
      "Communication with other parties or authorities",
      "Evidence and supporting documents available",
      "Any existing dispute or proceeding",
      "Current status and immediate concerns",
      "Desired outcome of the consultation",
    ],

    consultationFocus: [
      "Understanding the intellectual property and ownership position",
      "Reviewing relevant IP documents and agreements",
      "Identifying applicable intellectual property rights and remedies",
      "Assessing available registration, protection or enforcement options",
      "Identifying relevant procedural requirements and deadlines",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}