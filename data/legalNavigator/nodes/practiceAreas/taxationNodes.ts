import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import { NAVIGATOR, NAVIGATOR_DISCLAIMER } from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const taxationNodes: NavigatorNodes = {
  [NODE_IDS.TAXATION.MATTER]: {
    id: NODE_IDS.TAXATION.MATTER,

    type: "question",

    category: PRACTICE.TAXATION,

    step: 2,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your taxation matter?",

    subtitle:
      "Select the option that most closely matches your taxation concern.",

    options: [
      {
        id: "income-tax-matters",
        label: "Income Tax Matters",
        description:
          "Income tax returns, tax liability, deductions, compliance or other income tax-related matters.",
        icon: "💰",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "gst-indirect-tax",
        label: "GST & Indirect Tax",
        description:
          "GST registration, returns, input tax credit, tax liability, refunds or other indirect tax matters.",
        icon: "🧾",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "tax-assessment-scrutiny",
        label: "Tax Assessment / Scrutiny",
        description:
          "Tax assessment, scrutiny proceedings, examination of returns, proposed adjustments or related proceedings.",
        icon: "🔍",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "tax-appeals-litigation",
        label: "Tax Appeals & Litigation",
        description:
          "Appeals, tax disputes, litigation or challenges to assessment, adjudication or other tax-related orders.",
        icon: "⚖️",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "tax-recovery-demand",
        label: "Tax Recovery & Demand",
        description:
          "Outstanding tax demands, recovery proceedings, attachment or other tax enforcement measures.",
        icon: "📌",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "tax-notices-compliance",
        label: "Tax Notices & Compliance",
        description:
          "Tax notices, information requests, show-cause notices, filing requirements or other compliance matters.",
        icon: "📩",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "corporate-business-tax",
        label: "Corporate & Business Tax",
        description:
          "Tax matters relating to companies, LLPs, partnerships or other business and corporate entities.",
        icon: "🏢",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "international-cross-border-tax",
        label: "International Tax / Cross-Border Tax",
        description:
          "Cross-border income, foreign assets, international transactions, tax residency or related tax matters.",
        icon: "🌐",
        next: NODE_IDS.TAXATION.STAGE,
      },

      {
        id: "other-taxation-matter",
        label: "Other Taxation Matter",
        description:
          "Any other taxation matter not covered by the options above.",
        icon: "⚖️",
        next: NODE_IDS.TAXATION.STAGE,
      },
    ],
  },

  [NODE_IDS.TAXATION.STAGE]: {
    id: NODE_IDS.TAXATION.STAGE,

    type: "question",

    category: PRACTICE.TAXATION,

    step: 3,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What is the current stage of your tax matter?",

    subtitle:
      "Understanding the current stage helps us prepare your consultation appropriately.",

    options: [
      {
        id: "need-tax-advice",
        label: "Need Legal Advice",
        description:
          "I want to understand my tax position, obligations and available options.",
        icon: "💡",
        next: NODE_IDS.TAXATION.URGENCY,
      },

      {
        id: "filing-compliance-stage",
        label: "Filing / Compliance Stage",
        description:
          "I am preparing a return, filing, disclosure or other tax compliance requirement.",
        icon: "📝",
        next: NODE_IDS.TAXATION.URGENCY,
      },

      {
        id: "notice-scrutiny-stage",
        label: "Notice / Scrutiny Stage",
        description:
          "I have received a tax notice, inquiry, scrutiny communication or information request.",
        icon: "📩",
        next: NODE_IDS.TAXATION.URGENCY,
      },

      {
        id: "assessment-stage",
        label: "Assessment / Adjudication Stage",
        description:
          "An assessment, adjudication or other formal tax proceeding is underway.",
        icon: "🔍",
        next: NODE_IDS.TAXATION.URGENCY,
      },

      {
        id: "recovery-stage",
        label: "Demand / Recovery Stage",
        description:
          "A tax demand has been raised or recovery action is being initiated or pursued.",
        icon: "📌",
        next: NODE_IDS.TAXATION.URGENCY,
      },

      {
        id: "appeal-litigation-stage",
        label: "Appeal / Litigation Stage",
        description:
          "The matter is already before an appellate authority, tribunal, court or other forum.",
        icon: "🏛️",
        next: NODE_IDS.TAXATION.URGENCY,
      },
    ],
  },

  [NODE_IDS.TAXATION.URGENCY]: {
    id: NODE_IDS.TAXATION.URGENCY,

    type: "question",

    category: PRACTICE.TAXATION,

    step: 4,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "How urgent is your taxation matter?",

    subtitle:
      "This helps us prioritise your consultation appropriately.",

    options: [
      {
        id: "tax-deadline",
        label: "Upcoming Filing / Response Deadline",
        description:
          "There is an important filing, response or procedural deadline approaching.",
        icon: "📅",
        next: NODE_IDS.TAXATION.RESULT,
      },

      {
        id: "tax-demand-recovery",
        label: "Active Recovery / Enforcement",
        description:
          "A tax demand, recovery action, attachment or other enforcement measure is currently active.",
        icon: "🚨",
        next: NODE_IDS.TAXATION.RESULT,
      },

      {
        id: "tax-proceeding",
        label: "Active Tax Proceeding",
        description:
          "An assessment, scrutiny, appeal, adjudication or other proceeding is currently ongoing.",
        icon: "🏛️",
        next: NODE_IDS.TAXATION.RESULT,
      },

      {
        id: "tax-document-review",
        label: "Document Review Required",
        description:
          "A tax notice, order, return, agreement or other document requires professional review.",
        icon: "📂",
        next: NODE_IDS.TAXATION.RESULT,
      },

      {
        id: "general-tax",
        label: "General Consultation",
        description:
          "I would like legal guidance regarding my taxation matter.",
        icon: "💬",
        next: NODE_IDS.TAXATION.RESULT,
      },
    ],
  },

  [NODE_IDS.TAXATION.RESULT]: {
    id: NODE_IDS.TAXATION.RESULT,

    type: "recommendation",

    category: PRACTICE.TAXATION,

    referenceCode: "TAX",

    consultationPriority: "MEDIUM",

    title: PRACTICE.TAXATION,

    slug: "taxation",

    contactValue: PRACTICE.TAXATION,

    related: [PRACTICE.CORPORATE, PRACTICE.CIVIL],

    preparationKey: PREPARATION_KEYS.TAXATION.GENERAL,

    description:
      "Based on your responses, your matter appears to relate to Taxation. Our legal team can assist with income tax, GST and indirect tax, assessments, appeals and litigation, tax recovery, notices and compliance, corporate taxation, international tax and other taxation matters.",

    highlights: [
      "Income Tax Matters",
      "GST & Indirect Tax",
      "Tax Assessment / Scrutiny",
      "Tax Appeals & Litigation",
      "Tax Recovery & Demand",
      "Tax Notices & Compliance",
      "Corporate & Business Tax",
      "International Tax / Cross-Border Tax",
    ],

    disclaimer: NAVIGATOR_DISCLAIMER,

    estimatedDuration: "45–60 minutes",

    urgencyNote:
      "If you have an upcoming filing deadline, tax notice response, assessment proceeding, recovery action, appeal deadline or other time-sensitive tax matter, please mention the relevant details while requesting your consultation.",
  },
};