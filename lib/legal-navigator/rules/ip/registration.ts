import { createPreparation } from "../common/createPreparation";

export function getIPRegistrationPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding registration or formal protection of intellectual property rights.",
      "Your responses indicate that the relevant intellectual property, ownership information and proposed registration details should be reviewed carefully.",
      "The consultation will focus on understanding the appropriate protection route, registration requirements and the steps involved in securing the relevant intellectual property rights.",
    ],

    documents: [
      "Details of the Intellectual Property",
      "Trademark / Brand Name / Logo (if applicable)",
      "Copyrighted Work / Creative Material (if applicable)",
      "Patent Specification / Technical Description (if applicable)",
      "Design Drawings / Product Images (if applicable)",
      "Proof of Ownership / Authorship",
      "Applicant / Entity Details",
      "Prior Registration / Application Details (if any)",
      "Prior Use / Publication / Commercialisation Records",
      "Assignment / Ownership Documents (if applicable)",
      "Examination / Office Communications (if applicable)",
      "Previous Search Reports (if available)",
      "Any Other Relevant IP Documents",
    ],

    discussionPoints: [
      "Nature of the intellectual property requiring protection",
      "Ownership and authorship details",
      "Applicant or business entity details",
      "Current registration or application status",
      "Prior use, publication or commercialisation",
      "Previous searches or applications",
      "Relevant registration or filing history",
      "Potential objections or conflicts with existing rights",
      "Ownership, assignment or licensing arrangements",
      "Commercial purpose of the intellectual property",
      "Relevant filing or procedural deadlines",
      "Desired protection and outcome",
    ],

    consultationFocus: [
      "Identifying the appropriate intellectual property protection route",
      "Reviewing ownership and supporting documents",
      "Understanding registration and filing requirements",
      "Assessing potential objections or procedural issues",
      "Identifying relevant documentation and deadlines",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "medium",
  });
}