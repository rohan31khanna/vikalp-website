import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "./workflowIds";
import { PRACTICE } from "./practiceAreas";
import { NAVIGATOR } from "./constants";

export const contextNodes: NavigatorNodes = {
  [NODE_IDS.CONTEXT.PERSONAL]: {
    id: NODE_IDS.CONTEXT.PERSONAL,

    type: "question",

    step: 2,
    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What type of personal matter is this?",

    subtitle:
      "Choose the area that most closely matches your situation.",

    options: [
      {
        id: "family",
        label: PRACTICE.FAMILY,
        description:
          "Family, marriage, custody, maintenance and other personal family matters.",
        icon: "👨‍👩‍👧",
        next: NODE_IDS.FAMILY.MATTER,
      },

      {
        id: "property",
        label: PRACTICE.PROPERTY,
        description:
          "Property disputes, sale, purchase, builder matters, registration and ownership issues.",
        icon: "🏠",
        next: NODE_IDS.PROPERTY.MATTER,
      },

      {
        id: "consumer",
        label: PRACTICE.CONSUMER,
        description:
          "Defective products, poor services, insurance disputes, online shopping and consumer rights.",
        icon: "🛡️",
        next: NODE_IDS.CONSUMER.MATTER,
      },
    ],
  },

  [NODE_IDS.CONTEXT.BUSINESS]: {
    id: NODE_IDS.CONTEXT.BUSINESS,

    type: "question",

    step: 2,
    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What type of business or professional matter is this?",

    subtitle:
      "Choose the area that most closely matches your work, business or professional concern.",

    options: [
      {
        id: "employment-labour",
        label: PRACTICE.EMPLOYMENT_LABOUR,
        description:
          "Employment disputes, termination, wages, workplace issues, labour compliance and related matters.",
        icon: "👔",
        next: NODE_IDS.EMPLOYMENT_LABOUR.MATTER,
      },

      {
        id: "corporate",
        label: PRACTICE.CORPORATE,
        description:
          "Business formation, contracts, compliance, commercial disputes and company matters.",
        icon: "🏢",
        next: NODE_IDS.CORPORATE.MATTER,
      },

      {
        id: "banking",
        label: PRACTICE.BANKING,
        description:
          "Banking disputes, loans, recovery, fraud, credit cards, accounts and financial matters.",
        icon: "🏦",
        next: NODE_IDS.BANKING.MATTER,
      },

      {
        id: "ip",
        label: PRACTICE.IP,
        description:
          "Trademarks, copyrights, patents, designs, infringement, licensing and IP protection.",
        icon: "💡",
        next: NODE_IDS.IP.MATTER,
      },

      {
        id: "insolvency",
        label: PRACTICE.INSOLVENCY,
        description:
          "Corporate insolvency, CIRP, liquidation, creditor matters, NCLT proceedings and bankruptcy.",
        icon: "🏛️",
        next: NODE_IDS.INSOLVENCY.MATTER,
      },
    ],
  },

  [NODE_IDS.CONTEXT.DISPUTES]: {
    id: NODE_IDS.CONTEXT.DISPUTES,

    type: "question",

    step: 2,
    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What type of dispute or proceeding is involved?",

    subtitle:
      "Choose the type of legal dispute or proceeding that best matches your matter.",

    options: [
      {
        id: "civil",
        label: PRACTICE.CIVIL,
        description:
          "Money recovery, injunctions, civil disputes, appeals and other civil court matters.",
        icon: "⚖️",
        next: NODE_IDS.CIVIL.MATTER,
      },

      {
        id: "criminal",
        label: PRACTICE.CRIMINAL,
        description:
          "FIR, arrest, bail, police investigation, criminal trial and related matters.",
        icon: "🚔",
        next: NODE_IDS.CRIMINAL.MATTER,
      },

      {
        id: "arbitration",
        label: PRACTICE.ARBITRATION,
        description:
          "Arbitration, dispute resolution, arbitral proceedings, awards, enforcement and related matters.",
        icon: "⚖️",
        next: NODE_IDS.ARBITRATION.MATTER,
      },
    ],
  },

  [NODE_IDS.CONTEXT.TAX_REGULATORY]: {
    id: NODE_IDS.CONTEXT.TAX_REGULATORY,

    type: "question",

    step: 2,
    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What type of tax or regulatory matter is this?",

    subtitle:
      "Choose the area that most closely matches your requirement.",

    options: [
      {
        id: "taxation",
        label: PRACTICE.TAXATION,
        description:
          "Income tax, GST, tax notices, assessments, appeals, recovery and other taxation matters.",
        icon: "💰",
        next: NODE_IDS.TAXATION.MATTER,
      },
    ],
  },
};