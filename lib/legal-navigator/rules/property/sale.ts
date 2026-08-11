import { createPreparation } from "../common/createPreparation";

export function getPropertySalePreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a property transaction or property agreement.",
      "Your responses indicate that the transaction, documentation and legal position should be reviewed before proceeding.",
      "The consultation will focus on understanding the property, reviewing the relevant documents and identifying the appropriate legal steps."
    ],

    documents: [
      "Identity Proof",
      "Proof of Ownership / Title Documents",
      "Previous Sale Deed or Conveyance Deed (if applicable)",
      "Agreement to Sell / Sale Agreement (if applicable)",
      "Property Tax / Municipal Records (if available)",
      "Encumbrance Certificate or relevant title records (if available)",
      "Previous Legal Notices or Correspondence (if any)",
      "Any Other Relevant Property Documents"
    ],

    discussionPoints: [
      "Background of the property transaction",
      "Nature and ownership of the property",
      "Current status of the transaction or agreement",
      "Documents available for review",
      "Any concerns regarding title, ownership or encumbrances",
      "Registration or completion requirements",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Reviewing the relevant property documents",
      "Understanding the legal position and transaction requirements",
      "Identifying potential title or documentation issues",
      "Discussing appropriate legal steps before proceeding"
    ],

    urgencyLevel: "medium",
  });
}