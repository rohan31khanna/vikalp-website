import { createPreparation } from "../common/createPreparation";

export function getDefaultEmploymentLabourPreparation() {
  return createPreparation({
    summary: [
      "Your responses indicate a matter relating to Employment & Labour Law.",
      "The consultation will help assess the employment relationship, relevant workplace circumstances and available legal remedies.",
      "Relevant employment records, communications and supporting documents will help the legal team understand your matter more efficiently.",
    ],

    documents: [
      "Identity Proof",
      "Employment Agreement / Appointment Letter",
      "Salary Slips / Employment Records",
      "Relevant HR / Employer Correspondence",
      "Workplace Policies (if applicable)",
      "Notices or Written Communications (if any)",
      "Supporting Evidence",
      "Previous Legal Notices or Replies (if applicable)",
      "Labour Authority / Court Documents (if applicable)",
      "Any Other Relevant Employment Documents",
    ],

    discussionPoints: [
      "Background of the employment matter",
      "Nature of the employment relationship",
      "Current workplace or employment issue",
      "Relevant employment terms and obligations",
      "Communication with the employer or HR",
      "Documents and evidence available",
      "Previous complaints or proceedings",
      "Current legal or employment status",
      "Immediate concerns",
      "Objectives of the consultation",
    ],

    consultationFocus: [
      "Understanding the facts and employment circumstances",
      "Reviewing available employment documents",
      "Identifying relevant employment and labour law issues",
      "Explaining available legal or procedural remedies",
      "Discussing appropriate next steps",
    ],

    urgencyLevel: "medium",
  });
}