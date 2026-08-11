import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import { NAVIGATOR, NAVIGATOR_DISCLAIMER } from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const ipNodes: NavigatorNodes = {
  [NODE_IDS.IP.MATTER]: {
    id: NODE_IDS.IP.MATTER,

    type: "question",

    category: PRACTICE.IP,

    step: 2,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your Intellectual Property matter?",

    subtitle:
      "Select the option that most closely matches your intellectual property concern.",

    options: [
      {
        id: "trademark-matters",
        label: "Trademark Matters",
        description:
          "Trademark registration, brand protection, objections, opposition or other trademark-related matters.",
        icon: "™️",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "copyright-matters",
        label: "Copyright Matters",
        description:
          "Copyright protection, ownership, registration, licensing or disputes involving creative or original works.",
        icon: "©️",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "patent-matters",
        label: "Patent Matters",
        description:
          "Patent applications, prosecution, ownership, protection or disputes involving inventions.",
        icon: "💡",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "design-protection",
        label: "Design Protection",
        description:
          "Protection, registration or enforcement of designs associated with products.",
        icon: "🎨",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "ip-infringement",
        label: "IP Infringement / Enforcement",
        description:
          "Unauthorised use or infringement of trademarks, copyrights, patents, designs or other intellectual property.",
        icon: "🛡️",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "ip-licensing",
        label: "IP Licensing / Assignment",
        description:
          "Licensing, assignment, commercialisation or transfer of intellectual property rights.",
        icon: "📄",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "ip-registration",
        label: "IP Registration / Protection",
        description:
          "Registration or formal protection of intellectual property rights.",
        icon: "🔐",
        next: NODE_IDS.IP.STAGE,
      },

      {
        id: "other-ip",
        label: "Other Intellectual Property Matter",
        description:
          "Any other intellectual property matter not covered by the options above.",
        icon: "⚖️",
        next: NODE_IDS.IP.STAGE,
      },
    ],
  },

  [NODE_IDS.IP.STAGE]: {
    id: NODE_IDS.IP.STAGE,

    type: "question",

    category: PRACTICE.IP,

    step: 3,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What is the current stage of your IP matter?",

    subtitle:
      "Understanding the current stage helps us prepare your consultation appropriately.",

    options: [
      {
        id: "need-ip-advice",
        label: "Need Legal Advice",
        description:
          "I want to understand my intellectual property rights and available options.",
        icon: "💡",
        next: NODE_IDS.IP.URGENCY,
      },

      {
        id: "registration-stage",
        label: "Registration / Application Stage",
        description:
          "An IP application has been filed or I am considering registration.",
        icon: "📝",
        next: NODE_IDS.IP.URGENCY,
      },

      {
        id: "objection-stage",
        label: "Objection / Opposition Stage",
        description:
          "An objection, examination issue, opposition or similar proceeding has arisen.",
        icon: "⚠️",
        next: NODE_IDS.IP.URGENCY,
      },

      {
        id: "infringement-stage",
        label: "Infringement / Enforcement Stage",
        description:
          "I believe my IP rights are being infringed or enforcement action is required.",
        icon: "🛡️",
        next: NODE_IDS.IP.URGENCY,
      },

      {
        id: "agreement-stage",
        label: "Agreement / Licensing Stage",
        description:
          "I need assistance with an IP licence, assignment or commercial agreement.",
        icon: "📑",
        next: NODE_IDS.IP.URGENCY,
      },

      {
        id: "proceeding-stage",
        label: "Matter Already in Proceedings",
        description:
          "The matter is already before a court, tribunal, authority or other forum.",
        icon: "🏛️",
        next: NODE_IDS.IP.URGENCY,
      },
    ],
  },

  [NODE_IDS.IP.URGENCY]: {
    id: NODE_IDS.IP.URGENCY,

    type: "question",

    category: PRACTICE.IP,

    step: 4,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "How urgent is your IP matter?",

    subtitle:
      "This helps us prioritise your consultation appropriately.",

    options: [
      {
        id: "ip-deadline",
        label: "Upcoming Filing / Response Deadline",
        description:
          "There is an important filing, response or procedural deadline.",
        icon: "📅",
        next: NODE_IDS.IP.RESULT,
      },

      {
        id: "active-infringement",
        label: "Active Infringement",
        description:
          "The unauthorised use of the intellectual property is currently continuing.",
        icon: "🚨",
        next: NODE_IDS.IP.RESULT,
      },

      {
        id: "commercial-deal",
        label: "Commercial Agreement Pending",
        description:
          "An IP licence, assignment or commercial transaction requires timely review.",
        icon: "🤝",
        next: NODE_IDS.IP.RESULT,
      },

      {
        id: "document-review",
        label: "Document Review Required",
        description:
          "An IP agreement, application, notice or other document requires professional review.",
        icon: "📂",
        next: NODE_IDS.IP.RESULT,
      },

      {
        id: "general-ip",
        label: "General Consultation",
        description:
          "I would like legal guidance regarding my intellectual property matter.",
        icon: "💬",
        next: NODE_IDS.IP.RESULT,
      },
    ],
  },

  [NODE_IDS.IP.RESULT]: {
    id: NODE_IDS.IP.RESULT,

    type: "recommendation",

    category: PRACTICE.IP,

    referenceCode: "IP",

    consultationPriority: "MEDIUM",

    title: PRACTICE.IP,

    slug: "intellectual-property",

    contactValue: PRACTICE.IP,

    related: [
      PRACTICE.CORPORATE,
      PRACTICE.CIVIL,
    ],

    preparationKey: PREPARATION_KEYS.IP.GENERAL,

    description:
      "Based on your responses, your matter appears to relate to Intellectual Property. Our legal team can assist with trademarks, copyrights, patents, design protection, IP infringement and enforcement, licensing and assignment, registration and other intellectual property matters.",

    highlights: [
      "Trademark Matters",
      "Copyright Matters",
      "Patent Matters",
      "Design Protection",
      "IP Infringement / Enforcement",
      "IP Licensing / Assignment",
      "IP Registration / Protection",
    ],

    disclaimer: NAVIGATOR_DISCLAIMER,

    estimatedDuration: "45–60 minutes",

    urgencyNote:
      "If you have an upcoming filing deadline, examination response, opposition, infringement concern or commercial agreement deadline, please mention the relevant details while requesting your consultation.",
  },
};