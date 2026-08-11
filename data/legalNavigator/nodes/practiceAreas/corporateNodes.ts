
import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import {  NAVIGATOR,   NAVIGATOR_DISCLAIMER} from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const corporateNodes: NavigatorNodes = {
    
[NODE_IDS.CORPORATE.MATTER]: {
  id: NODE_IDS.CORPORATE.MATTER,

  type: "question",

  category: PRACTICE.CORPORATE,

  step: 2,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What best describes your business legal requirement?",

  subtitle:
    "Select the option that most closely matches your business matter.",

  options: [
    {
      id: "company-formation",
      label: "Company / LLP Formation",
      description:
        "Business incorporation, LLP registration, partnership or startup formation.",
      icon: "🚀",
      next: NODE_IDS.CORPORATE.STAGE,
    },
    {
  id: "startup-advisory",

  label: "Business Structuring & Startup Advisory",

  description:
    "Legal guidance for startups, founders, business structuring and choosing the appropriate business entity.",

  icon: "💡",

  next: NODE_IDS.CORPORATE.STAGE,
},
    {
      id: "commercial-contract",
      label: "Commercial Contracts & Agreements",
      description:
"Drafting, reviewing and negotiating commercial contracts, vendor agreements, service agreements and other business legal documents.",
      icon: "📑",
      next: NODE_IDS.CORPORATE.STAGE,
    },
    {
  id: "contract-drafting",

  label: "Contract Drafting & Review",

  description:
    "Preparation, review and negotiation of commercial contracts, service agreements, NDAs and other legal documents.",

  icon: "📄",

  next: NODE_IDS.CORPORATE.STAGE,
},
    {
      id: "compliance",
      label: "Corporate Compliance",
      description:
        "ROC filings, statutory compliance and regulatory requirements.",
      icon: "📋",
      next: NODE_IDS.CORPORATE.STAGE,
    },
    {
  id: "employment-hr",

  label: "Employment & HR Documentation",

  description:
    "Employment agreements, HR policies, confidentiality agreements and workplace legal documentation.",

  icon: "👥",

  next: NODE_IDS.CORPORATE.STAGE,
},
    {
      id: "business-dispute",
      label: "Commercial Dispute",
      description:
        "Business disputes, breach of contract or recovery matters.",
      icon: "⚖️",
      next: NODE_IDS.CORPORATE.STAGE,
    },
    {
  id: "shareholder-dispute",

  label: "Partnership & Shareholder Disputes",

  description:
    "Disputes among partners, shareholders, directors or management relating to business operations.",

  icon: "🤝",

  next: NODE_IDS.CORPORATE.STAGE,
},

{
  id: "commercial-recovery",

  label: "Commercial Recovery & Debt Recovery",

  description:
    "Recovery of outstanding payments, commercial dues and contractual claims.",

  icon: "💰",

  next: NODE_IDS.CORPORATE.STAGE,
},
{
  id: "mergers",

  label: "Mergers & Acquisitions",

  description:
    "Legal assistance for mergers, acquisitions, business restructuring and investment transactions.",

  icon: "🔄",

  next: NODE_IDS.CORPORATE.STAGE,
},

{
  id: "regulatory",

  label: "Business Regulatory Approvals",

  description:
"Business licences, registrations, statutory approvals, government permissions and regulatory compliance matters.",

  icon: "📋",

  next: NODE_IDS.CORPORATE.STAGE,
},

{
  id: "ip-business",

  label: "Intellectual Property for Businesses",

  description:
    "Trademark, copyright, brand protection and intellectual property matters for businesses.",

  icon: "💼",

  next: NODE_IDS.CORPORATE.STAGE,
},

{
  id: "insolvency",

  label: "Insolvency & Business Restructuring",

  description:
    "Corporate insolvency, restructuring, business recovery and related legal matters.",

  icon: "🏢",

  next: NODE_IDS.CORPORATE.STAGE,
},
    {
      id: "other-corporate",
      label: "Other Business Matter",
      description:
        "Any other corporate or commercial legal issue.",
      icon: "🏢",
      next: NODE_IDS.CORPORATE.STAGE,
    },
  ],
},

[NODE_IDS.CORPORATE.STAGE]: {
  id: NODE_IDS.CORPORATE.STAGE,

  type: "question",

  category: PRACTICE.CORPORATE,

  step: 3,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What is the current stage of your business matter?",

  subtitle:
    "Help us understand where your matter currently stands.",

  options: [
    {
      id: "planning",
      label: "Planning Stage",
      description:
        "Seeking legal guidance before taking business decisions.",
      icon: "💡",
      next: NODE_IDS.CORPORATE.URGENCY,
    },
    {
      id: "document-review",
      label: "Agreement Review",
      description:
        "Existing agreements require legal review.",
      icon: "📄",
      next: NODE_IDS.CORPORATE.URGENCY,
    },
    {
      id: "ongoing-dispute",
      label: "Business Dispute",
      description:
        "A dispute with another business or party already exists.",
      icon: "🤝",
      next: NODE_IDS.CORPORATE.URGENCY,
    },
    {
      id: "legal-proceedings",
      label: "Legal Proceedings",
      description:
        "The matter is already before a court or tribunal.",
      icon: "🏛️",
      next: NODE_IDS.CORPORATE.URGENCY,
    },
  ],
},

[NODE_IDS.CORPORATE.URGENCY]: {
  id: NODE_IDS.CORPORATE.URGENCY,

  type: "question",

  category: PRACTICE.CORPORATE,

  step: 4,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "How urgent is your business matter?",

  subtitle:
    "This helps us prioritise your consultation appropriately.",

  options: [
    {
      id: "deadline",
      label: "Compliance Deadline",
      description:
        "There is an upcoming legal or regulatory deadline.",
      icon: "📅",
      next: NODE_IDS.CORPORATE.RESULT,
    },
    {
      id: "contract-signing",
      label: "Agreement Signing",
      description:
        "A contract needs immediate legal review before execution.",
      icon: "✍️",
      next: NODE_IDS.CORPORATE.RESULT,
    },
    {
      id: "litigation-risk",
      label: "Immediate Legal Risk",
      description:
        "Immediate legal advice is required to avoid business loss.",
      icon: "🚨",
      next: NODE_IDS.CORPORATE.RESULT,
    },
    {
      id: "general-business",
      label: "General Consultation",
      description:
        "Looking for legal guidance regarding my business.",
      icon: "💬",
      next: NODE_IDS.CORPORATE.RESULT,
    },
  ],
},

  [NODE_IDS.CORPORATE.RESULT]: {
  id: NODE_IDS.CORPORATE.RESULT,

  type: "recommendation",

  category: PRACTICE.CORPORATE,

  referenceCode: "COR",

  consultationPriority: "MEDIUM",

  title: PRACTICE.CORPORATE,

  slug: "corporate-commercial",

related: [
  PRACTICE.CIVIL,
],
  contactValue: PRACTICE.CORPORATE,

  preparationKey: PREPARATION_KEYS.CORPORATE.GENERAL,

description:
"Based on your responses, your matter appears to relate to Business & Corporate Law. Our legal team can assist with business formation, startup advisory, commercial contracts, corporate compliance, employment documentation, partnership and shareholder disputes, commercial recovery, mergers and acquisitions, regulatory approvals, intellectual property matters and business restructuring.",

highlights: [
  "Business Formation",
  "Startup Advisory",
  "Commercial Contracts & Agreements",
  "Corporate Compliance",
  "Employment & HR Documentation",
  "Partnership & Shareholder Disputes",
  "Commercial Recovery & Debt Recovery",
  "Business Regulatory Approvals",
  "Intellectual Property",
  "Mergers & Acquisitions",
  "Business Restructuring",
],

  disclaimer:
    NAVIGATOR_DISCLAIMER,

  estimatedDuration:
    "45–60 minutes",

  urgencyNote:
    "If there are regulatory deadlines, contract expirations, or ongoing disputes, please mention them while requesting your consultation.",
},

}