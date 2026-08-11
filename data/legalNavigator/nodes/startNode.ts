import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../workflowIds";
import { PRACTICE } from "../practiceAreas";
import { NAVIGATOR } from "../constants";

export const startNode: NavigatorNodes = {
  [NODE_IDS.START]: {
    id: NODE_IDS.START,

    type: "question",

    step: 1,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your legal concern?",

    subtitle:
      "Choose the option that most closely matches your situation.",

    options: [
      {
        id: "family",
        label: PRACTICE.FAMILY,
        description:
          "Divorce, child custody, maintenance, domestic violence and other family matters.",
        icon: "👨‍👩‍👧",
        next: NODE_IDS.FAMILY.MATTER,
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
        id: "property",
        label: PRACTICE.PROPERTY,
        description:
          "Property disputes, sale, purchase, builder matters, registration and ownership issues.",
        icon: "🏠",
        next: NODE_IDS.PROPERTY.MATTER,
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
        id: "consumer",
        label: PRACTICE.CONSUMER,
        description:
          "Defective products, poor services, insurance disputes, online shopping and consumer rights.",
        icon: "🛡️",
        next: NODE_IDS.CONSUMER.MATTER,
      },

      {
        id: "civil",
        label: PRACTICE.CIVIL,
        description:
          "Money recovery, injunctions, civil disputes, appeals and other civil court matters.",
        icon: "⚖️",
        next: NODE_IDS.CIVIL.MATTER,
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
        id: "employment-labour",
        label: PRACTICE.EMPLOYMENT_LABOUR,
        description:
          "Employment disputes, termination, wages, workplace issues, labour compliance and related matters.",
        icon: "👔",
        next: NODE_IDS.EMPLOYMENT_LABOUR.MATTER,
      },

      {
        id: "taxation",
        label: PRACTICE.TAXATION,
        description:
          "Income tax, GST, tax notices, assessments, appeals, recovery and other taxation matters.",
        icon: "💰",
        next: NODE_IDS.TAXATION.MATTER,
      },

      {
        id: "arbitration",
        label: PRACTICE.ARBITRATION,
        description:
          "Arbitration, dispute resolution, arbitral proceedings, awards, enforcement and related matters.",
        icon: "⚖️",
        next: NODE_IDS.ARBITRATION.MATTER,
      },

      {
        id: "intellectual-property",
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
};