import { createPreparation } from "../common/createPreparation";

export function getDesignPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding protection, registration or enforcement of a design associated with a product.",
      "Your responses indicate that the design details, ownership information, registration records and supporting evidence should be reviewed carefully.",
      "The consultation will focus on understanding the design protection position, the current stage of the matter and the appropriate legal or procedural options.",
    ],

    documents: [
      "Design Drawings / Representations",
      "Images or Photographs of the Product",
      "Design Registration Certificate (if registered)",
      "Design Application Details (if pending)",
      "Design Number / Filing Details",
      "Product Specifications",
      "Proof of Ownership / Authorship",
      "Assignment Agreement (if applicable)",
      "Employment / Design Creation Agreement (if applicable)",
      "Licensing Documents (if applicable)",
      "Prior Publication / Commercialisation Records",
      "Evidence of Alleged Design Infringement (if applicable)",
      "Legal Notices / Correspondence (if any)",
      "Any Other Relevant Design Documents",
    ],

    discussionPoints: [
      "Background and nature of the design",
      "Designer and ownership details",
      "Current registration or application status",
      "Filing date and relevant application history",
      "Nature of the product incorporating the design",
      "Whether the design has been publicly disclosed or commercially used",
      "Ownership, assignment or licensing arrangements",
      "Potential or actual infringement by another party",
      "Evidence supporting ownership or infringement",
      "Communication with the other party or relevant authority",
      "Commercial impact of the design dispute",
      "Relevant deadlines or procedural concerns",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the design representations and ownership documents",
      "Understanding the current design protection status",
      "Assessing available registration or enforcement options",
      "Reviewing evidence relating to ownership, use or infringement",
      "Identifying relevant procedural requirements and deadlines",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}