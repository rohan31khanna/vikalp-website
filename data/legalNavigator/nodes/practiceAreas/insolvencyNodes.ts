import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import { NAVIGATOR, NAVIGATOR_DISCLAIMER } from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const insolvencyNodes: NavigatorNodes = {
  [NODE_IDS.INSOLVENCY.MATTER]: {
    id: NODE_IDS.INSOLVENCY.MATTER,

    type: "question",

    category: PRACTICE.INSOLVENCY,

    step: 2,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your insolvency matter?",

    subtitle:
      "Select the option that most closely matches your insolvency or bankruptcy concern.",

    options: [
      {
        id: "corporate-insolvency",
        label: "Corporate Insolvency",
        description:
          "Insolvency or restructuring matters involving a company, LLP or other corporate entity.",
        icon: "🏢",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "cirp-matters",
        label: "Corporate Insolvency Resolution / CIRP",
        description:
          "Matters relating to initiation, admission, conduct or resolution of Corporate Insolvency Resolution Process.",
        icon: "⚖️",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "liquidation",
        label: "Liquidation",
        description:
          "Liquidation proceedings, resolution plan failure, distribution of assets or related liquidation matters.",
        icon: "📋",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "recovery",
        label: "Debt Recovery / Insolvency Recovery",
        description:
          "Recovery of outstanding debts, defaults, enforcement or insolvency-related recovery proceedings.",
        icon: "💰",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "creditor-matters",
        label: "Creditor Matters",
        description:
          "Rights, claims, recovery, representation or other matters involving financial or operational creditors.",
        icon: "📑",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "nclt-matters",
        label: "NCLT Proceedings",
        description:
          "Applications, petitions, hearings or other insolvency and company law proceedings before the NCLT.",
        icon: "🏛️",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "personal-guarantor",
        label: "Personal Guarantor Matters",
        description:
          "Insolvency or recovery proceedings involving personal guarantors of corporate debt.",
        icon: "👤",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },

      {
        id: "other-insolvency",
        label: "Other Insolvency / Bankruptcy Matter",
        description:
          "Any other insolvency or bankruptcy matter not covered by the options above.",
        icon: "⚖️",
        next: NODE_IDS.INSOLVENCY.STAGE,
      },
    ],
  },

  [NODE_IDS.INSOLVENCY.STAGE]: {
    id: NODE_IDS.INSOLVENCY.STAGE,

    type: "question",

    category: PRACTICE.INSOLVENCY,

    step: 3,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What is the current stage of your insolvency matter?",

    subtitle:
      "Understanding the current stage helps us prepare your consultation appropriately.",

    options: [
      {
        id: "need-insolvency-advice",
        label: "Need Legal Advice",
        description:
          "I want to understand my rights, obligations and available insolvency or recovery options.",
        icon: "💡",
        next: NODE_IDS.INSOLVENCY.URGENCY,
      },

      {
        id: "pre-proceedings",
        label: "Pre-Proceedings / Default Stage",
        description:
          "A payment default or financial difficulty has arisen but formal insolvency proceedings have not yet commenced.",
        icon: "⚠️",
        next: NODE_IDS.INSOLVENCY.URGENCY,
      },

      {
        id: "application-stage",
        label: "Application / Admission Stage",
        description:
          "An insolvency application or petition has been filed or is being considered for filing.",
        icon: "📝",
        next: NODE_IDS.INSOLVENCY.URGENCY,
      },

      {
        id: "cirp-stage",
        label: "CIRP / Resolution Stage",
        description:
          "Corporate Insolvency Resolution Process is underway and the matter is progressing through the resolution process.",
        icon: "🔄",
        next: NODE_IDS.INSOLVENCY.URGENCY,
      },

      {
        id: "liquidation-stage",
        label: "Liquidation Stage",
        description:
          "The entity is undergoing liquidation or related proceedings.",
        icon: "📋",
        next: NODE_IDS.INSOLVENCY.URGENCY,
      },

      {
        id: "proceeding-stage",
        label: "Matter Already in Proceedings",
        description:
          "The matter is already before the NCLT, appellate authority, court or another forum.",
        icon: "🏛️",
        next: NODE_IDS.INSOLVENCY.URGENCY,
      },
    ],
  },

  [NODE_IDS.INSOLVENCY.URGENCY]: {
    id: NODE_IDS.INSOLVENCY.URGENCY,

    type: "question",

    category: PRACTICE.INSOLVENCY,

    step: 4,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "How urgent is your insolvency matter?",

    subtitle:
      "This helps us prioritise your consultation appropriately.",

    options: [
      {
        id: "insolvency-deadline",
        label: "Upcoming Filing / Response Deadline",
        description:
          "There is an important application, response, claim or procedural deadline approaching.",
        icon: "📅",
        next: NODE_IDS.INSOLVENCY.RESULT,
      },

      {
        id: "active-recovery",
        label: "Active Recovery / Enforcement",
        description:
          "Recovery, enforcement, possession, attachment or another urgent action is currently underway.",
        icon: "🚨",
        next: NODE_IDS.INSOLVENCY.RESULT,
      },

      {
        id: "active-proceeding",
        label: "Active NCLT / Court Proceeding",
        description:
          "An insolvency, recovery, liquidation or related proceeding is currently ongoing.",
        icon: "🏛️",
        next: NODE_IDS.INSOLVENCY.RESULT,
      },

      {
        id: "document-review",
        label: "Document Review Required",
        description:
          "An insolvency notice, demand, agreement, order or other document requires professional review.",
        icon: "📂",
        next: NODE_IDS.INSOLVENCY.RESULT,
      },

      {
        id: "general-insolvency",
        label: "General Consultation",
        description:
          "I would like legal guidance regarding my insolvency or bankruptcy matter.",
        icon: "💬",
        next: NODE_IDS.INSOLVENCY.RESULT,
      },
    ],
  },

  [NODE_IDS.INSOLVENCY.RESULT]: {
    id: NODE_IDS.INSOLVENCY.RESULT,

    type: "recommendation",

    category: PRACTICE.INSOLVENCY,

    referenceCode: "INS",

    consultationPriority: "HIGH",

    title: PRACTICE.INSOLVENCY,

    slug: "insolvency-bankruptcy",

    contactValue: PRACTICE.INSOLVENCY,

    related: [PRACTICE.CORPORATE, PRACTICE.BANKING, PRACTICE.CIVIL],

    preparationKey: PREPARATION_KEYS.INSOLVENCY.GENERAL,

    description:
      "Based on your responses, your matter appears to relate to Insolvency & Bankruptcy. Our legal team can assist with corporate insolvency, CIRP, liquidation, debt recovery, creditor matters, NCLT proceedings, personal guarantor matters and related insolvency issues.",

    highlights: [
      "Corporate Insolvency",
      "Corporate Insolvency Resolution / CIRP",
      "Liquidation",
      "Debt Recovery / Insolvency Recovery",
      "Creditor Matters",
      "NCLT Proceedings",
      "Personal Guarantor Matters",
    ],

    disclaimer: NAVIGATOR_DISCLAIMER,

    estimatedDuration: "45–60 minutes",

    urgencyNote:
      "If you have an upcoming NCLT filing or hearing, insolvency application deadline, creditor claim deadline, recovery action or other time-sensitive proceeding, please mention the relevant details while requesting your consultation.",
  },
};