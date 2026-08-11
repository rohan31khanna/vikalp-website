import { createPreparation } from "../common/createPreparation";

export function getIPInfringementPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding alleged infringement or unauthorised use of intellectual property rights.",
      "Your responses indicate that the relevant IP rights, ownership records, evidence of use or infringement and communications between the parties should be reviewed carefully.",
      "The consultation will focus on understanding the IP rights involved, the nature of the alleged infringement and the appropriate legal or enforcement options.",
    ],

    documents: [
      "IP Registration Certificate / Application Details (if applicable)",
      "Trademark / Copyright / Patent / Design Documents",
      "Proof of Ownership / Authorship",
      "Assignment or Licensing Documents (if applicable)",
      "Original Work / Product / Brand Materials",
      "Screenshots / Photographs / Copies Showing Alleged Infringement",
      "Website / Social Media / Online Marketplace Records (if applicable)",
      "Invoices / Sales Records / Commercialisation Evidence",
      "Cease-and-Desist Notice / Legal Notice (if any)",
      "Reply to Legal Notice (if any)",
      "Correspondence Between the Parties",
      "Evidence of Prior Use or Adoption",
      "Court / Tribunal / Authority Documents (if applicable)",
      "Any Other Relevant IP Documents",
    ],

    discussionPoints: [
      "Nature of the intellectual property right involved",
      "Ownership and registration status",
      "Background of the alleged infringement",
      "How and when the alleged infringement was discovered",
      "Nature and extent of the unauthorised use",
      "Identity of the person or organisation allegedly infringing the rights",
      "Evidence supporting ownership and infringement",
      "Commercial impact or potential loss",
      "Communication with the other party",
      "Whether a legal notice has already been issued",
      "Whether any court, tribunal or authority proceeding has started",
      "Immediate enforcement concerns",
      "Desired outcome",
    ],

    consultationFocus: [
      "Reviewing the relevant IP rights and ownership documents",
      "Understanding the nature and scope of the alleged infringement",
      "Assessing available enforcement and legal remedies",
      "Reviewing evidence supporting ownership and infringement",
      "Identifying relevant procedural requirements and deadlines",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}