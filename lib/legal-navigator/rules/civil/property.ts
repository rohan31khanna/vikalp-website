import { createPreparation } from "../common/createPreparation";

export function getCivilPropertyPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding possession, eviction, partition or a family property dispute.",
      "Your responses indicate that the ownership position, property records and circumstances of possession or dispute should be reviewed carefully.",
      "The consultation will focus on understanding the property history, parties involved and the appropriate civil remedies available."
    ],

    documents: [
      "Title / Ownership Documents",
      "Sale Deed / Conveyance Deed (if applicable)",
      "Property / Land Records",
      "Mutation or Revenue Records (if applicable)",
      "Property Tax / Municipal Records (if available)",
      "Partition / Family Settlement Documents (if applicable)",
      "Rent Agreement / Tenancy Documents (if applicable)",
      "Legal Notices or Court Documents (if any)",
      "Previous Court Orders (if applicable)",
      "Photographs or Other Supporting Evidence",
      "Any Other Relevant Property Documents"
    ],

    discussionPoints: [
      "Background and history of the property",
      "Ownership and possession of the property",
      "Parties involved in the dispute",
      "Current possession or tenancy status",
      "Nature of the partition, eviction or possession issue",
      "Relevant property and ownership documents",
      "Previous notices, proceedings or court orders",
      "Family relationship or joint ownership issues, if applicable",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Reviewing the available property and ownership documents",
      "Understanding the legal position regarding possession or ownership",
      "Assessing the appropriate civil remedies",
      "Identifying relevant documentation and procedural requirements",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "high",
  });
}