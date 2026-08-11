import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../workflowIds";
import { NAVIGATOR } from "../constants";

export const startNode: NavigatorNodes = {
  [NODE_IDS.START]: {
    id: NODE_IDS.START,

    type: "question",

    step: 1,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "Let’s start with your situation.",

    subtitle:
      "Choose the path that feels closest to your situation. You don’t need to know the exact legal category — we’ll guide you from here.",

    options: [
      {
        id: "personal",
        label: "Personal & Family",
        description:
          "Family, property, consumer and other personal legal matters.",
        icon: "👤",
        next: NODE_IDS.CONTEXT.PERSONAL,
      },

      {
        id: "business",
        label: "Business & Professional",
        description:
          "Business, employment, finance, intellectual property and professional matters.",
        icon: "💼",
        next: NODE_IDS.CONTEXT.BUSINESS,
      },

      {
        id: "disputes",
        label: "Disputes & Proceedings",
        description:
          "Civil, criminal, arbitration and other legal disputes or proceedings.",
        icon: "⚖️",
        next: NODE_IDS.CONTEXT.DISPUTES,
      },

      {
        id: "tax-regulatory",
        label: "Tax & Regulatory",
        description:
          "Taxation, compliance, notices, assessments and regulatory matters.",
        icon: "🧾",
        next: NODE_IDS.CONTEXT.TAX_REGULATORY,
      },
    ],
  },
};