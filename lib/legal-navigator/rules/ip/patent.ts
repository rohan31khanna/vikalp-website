import { createPreparation } from "../common/createPreparation";

export function getPatentPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a patent matter involving an invention, patent application, granted patent or related intellectual property rights.",
      "Your responses indicate that the invention details, ownership records, filing history and relevant technical or legal documents should be reviewed carefully.",
      "The consultation will focus on understanding the patent position, the current stage of the matter and the appropriate legal or procedural options.",
    ],

    documents: [
      "Invention / Technical Description",
      "Patent Application",
      "Patent Specification / Claims",
      "Drawings / Technical Diagrams (if applicable)",
      "Patent Application Number / Filing Details",
      "Patent Registration / Grant Certificate (if granted)",
      "Prior Art / Patent Search Reports (if available)",
      "Patent Examination Report / Office Communication (if applicable)",
      "Response to Examination Report (if any)",
      "Inventor Details",
      "Assignment / Ownership Documents",
      "Employment / Invention Assignment Agreement (if applicable)",
      "Patent Licensing Documents (if applicable)",
      "Prior Publication / Commercialisation Records (if relevant)",
      "Infringement Evidence (if applicable)",
      "Legal Notices / Correspondence (if any)",
      "Any Other Relevant Patent Documents",
    ],

    discussionPoints: [
      "Background and nature of the invention",
      "Inventor and ownership details",
      "Patent application or registration status",
      "Filing date and relevant application history",
      "Technical scope and claims of the invention",
      "Prior art or existing similar inventions",
      "Examination or objection history",
      "Assignment, licensing or ownership arrangements",
      "Potential or actual patent infringement",
      "Commercial use or exploitation of the invention",
      "Communication with the Patent Office or other parties",
      "Relevant deadlines or procedural concerns",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing the patent application, specification and ownership documents",
      "Understanding the current patent status and procedural position",
      "Assessing available patent registration, prosecution or enforcement options",
      "Reviewing relevant technical and supporting evidence",
      "Identifying important procedural requirements and deadlines",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}