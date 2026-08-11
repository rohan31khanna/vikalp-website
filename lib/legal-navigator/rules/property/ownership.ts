import { createPreparation } from "../common/createPreparation";

export function getPropertyOwnershipPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding property ownership, possession or related property rights.",
      "Your responses indicate that the ownership position, property records and relevant legal documents should be reviewed.",
      "The consultation will focus on understanding the property history, the parties involved and the legal issues affecting ownership or possession.",
    ],

    documents: [
      "Identity Proof",
      "Proof of Ownership / Title Documents",
      "Previous Sale Deed / Conveyance Deed (if applicable)",
      "Property / Land Records (if available)",
      "Mutation or Revenue Records (if applicable)",
      "Property Tax / Municipal Records (if available)",
      "Partition or Family Settlement Documents (if applicable)",
      "Previous Court Orders or Legal Notices (if any)",
      "Relevant Correspondence or Agreements",
      "Any Other Relevant Property Documents",
    ],

    discussionPoints: [
      "Background and history of the property",
      "Nature and ownership of the property",
      "Parties involved in the ownership or dispute",
      "Current possession and use of the property",
      "Documents available for review",
      "Any concerns regarding title, ownership or possession",
      "Previous legal proceedings, notices or disputes",
      "Immediate legal concerns",
    ],

    consultationFocus: [
      "Reviewing the available ownership and property documents",
      "Understanding the legal position regarding ownership or possession",
      "Identifying potential title, documentation or ownership issues",
      "Discussing the relevant legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}