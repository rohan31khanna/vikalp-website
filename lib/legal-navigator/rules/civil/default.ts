import { createPreparation } from "../common/createPreparation";

export function getDefaultCivilPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Civil Litigation.",
      "The consultation will help assess the facts, relevant documents and available civil legal remedies.",
      "Providing a clear background of the matter along with relevant notices, agreements and supporting documents can help the legal team understand your case more efficiently.",
    ],

    documents: [
      "Identity Proof",
      "Relevant Agreements / Contracts (if applicable)",
      "Property or Ownership Documents (if applicable)",
      "Legal Notices or Correspondence",
      "Previous Court Orders or Case Documents (if applicable)",
      "Financial / Transaction Records (if relevant)",
      "Supporting Evidence",
      "Any Other Relevant Documents",
    ],

    discussionPoints: [
      "Background of the civil matter",
      "Parties involved",
      "Nature of the legal dispute",
      "Relevant agreements, property or financial issues",
      "Documents and evidence available",
      "Previous notices or legal proceedings",
      "Current status of the matter",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Understanding the facts and circumstances",
      "Reviewing available documents and evidence",
      "Identifying the relevant civil remedies",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}