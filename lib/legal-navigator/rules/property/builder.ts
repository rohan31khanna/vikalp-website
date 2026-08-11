import { createPreparation } from "../common/createPreparation";

export function getBuilderPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a builder, developer or RERA-related property matter.",
      "Your responses indicate that the property documents, transaction history and issues involving the builder or developer should be reviewed.",
      "The consultation will focus on understanding the property, the commitments made by the builder or developer and the legal issues affecting the matter.",
    ],

    documents: [
      "Identity Proof",
      "Agreement to Sell / Builder-Buyer Agreement (if applicable)",
      "Allotment Letter (if applicable)",
      "Payment Receipts / Payment Records",
      "Property / Project Documents",
      "Possession Letter (if applicable)",
      "Correspondence with the Builder / Developer",
      "Previous Legal Notices or Complaints (if any)",
      "RERA Documents / Orders (if applicable)",
      "Any Other Relevant Property Documents",
    ],

    discussionPoints: [
      "Background of the property transaction",
      "Nature of the agreement with the builder or developer",
      "Payments made and current status of the transaction",
      "Possession or construction status",
      "Commitments made by the builder or developer",
      "Documents and correspondence available for review",
      "Any delay, deficiency or dispute involved",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the relevant property and builder documents",
      "Understanding the contractual and legal position",
      "Identifying potential issues relating to delay, possession or contractual obligations",
      "Discussing relevant legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}