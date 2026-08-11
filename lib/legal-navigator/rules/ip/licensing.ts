import { createPreparation } from "../common/createPreparation";

export function getIPLicensingPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding the licensing, assignment or commercial use of intellectual property rights.",
      "Your responses indicate that the relevant IP ownership documents, proposed or existing agreement and commercial terms should be reviewed carefully.",
      "The consultation will focus on understanding the rights being licensed or assigned, the contractual obligations involved and the appropriate legal options."
    ],

    documents: [
      "IP Registration Certificate / Application Details (if applicable)",
      "Proof of IP Ownership",
      "Existing Licence Agreement (if applicable)",
      "Proposed Licence / Assignment Agreement",
      "Assignment Agreement (if applicable)",
      "Term Sheet / Commercial Proposal",
      "Royalty / Payment Terms",
      "Technology Transfer Documents (if applicable)",
      "Confidentiality / NDA Agreement (if applicable)",
      "Previous Licensing or Assignment Agreements",
      "Relevant Business Correspondence",
      "IP Valuation / Commercial Documents (if available)",
      "Any Other Relevant IP Documents"
    ],

    discussionPoints: [
      "Nature and ownership of the intellectual property",
      "Type of licence or assignment proposed",
      "Rights and scope being granted or transferred",
      "Territory and duration of the arrangement",
      "Exclusive or non-exclusive rights",
      "Royalty, payment and commercial terms",
      "Restrictions and permitted uses",
      "Confidentiality and protection obligations",
      "Quality control or compliance requirements, if applicable",
      "Termination and post-termination obligations",
      "Ownership of improvements or derivative works",
      "Dispute resolution and governing law",
      "Current negotiation status",
      "Desired commercial and legal outcome"
    ],

    consultationFocus: [
      "Reviewing the IP ownership and proposed contractual documents",
      "Understanding the scope of the licence or assignment",
      "Assessing important commercial and contractual terms",
      "Identifying potential risks and obligations",
      "Reviewing appropriate protections and negotiation points",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}