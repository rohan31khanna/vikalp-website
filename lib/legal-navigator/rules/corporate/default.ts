import { createPreparation } from "../common/createPreparation";

export function getDefaultCorporatePreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Business & Corporate Law.",
      "The consultation will help assess the business circumstances, relevant documents and applicable legal requirements.",
      "Providing relevant business records, agreements and correspondence can help the legal team understand your matter more efficiently.",
    ],

    documents: [
      "Business / Company Registration Documents",
      "Relevant Contracts or Agreements",
      "Financial or Transaction Records (if applicable)",
      "Licences or Regulatory Documents (if applicable)",
      "Legal Notices or Correspondence (if any)",
      "Relevant Corporate Records",
      "Any Other Supporting Documents",
    ],

    discussionPoints: [
      "Background of the business matter",
      "Parties or businesses involved",
      "Relevant contracts, transactions or obligations",
      "Current legal or commercial position",
      "Documents and records available",
      "Any existing dispute, notice or regulatory concern",
      "Immediate business or legal concerns",
    ],

    consultationFocus: [
      "Understanding the facts and business circumstances",
      "Reviewing available corporate and commercial documents",
      "Identifying relevant legal and regulatory considerations",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}