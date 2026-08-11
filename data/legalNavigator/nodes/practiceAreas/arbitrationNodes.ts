import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import { NAVIGATOR, NAVIGATOR_DISCLAIMER } from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const arbitrationNodes: NavigatorNodes = {
  [NODE_IDS.ARBITRATION.MATTER]: {
    id: NODE_IDS.ARBITRATION.MATTER,

    type: "question",

    category: PRACTICE.ARBITRATION,

    step: 2,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your Arbitration & ADR matter?",

    subtitle:
      "Select the option that most closely matches your arbitration or alternative dispute resolution concern.",

    options: [
      {
        id: "commercial-arbitration",
        label: "Commercial Arbitration",
        description:
          "Arbitration arising from commercial contracts, business transactions or contractual disputes.",
        icon: "⚖️",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "arbitrator-appointment",
        label: "Arbitrator Appointment / Challenge",
        description:
          "Issues relating to appointment, replacement, independence or challenge of an arbitrator.",
        icon: "👨‍⚖️",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "arbitration-proceedings",
        label: "Arbitration Proceedings",
        description:
          "Assistance with ongoing arbitration proceedings, pleadings, evidence, hearings or procedural matters.",
        icon: "📑",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "award-challenge",
        label: "Arbitration Award Challenge",
        description:
          "Legal assistance regarding a challenge or setting aside of an arbitration award.",
        icon: "📜",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "award-enforcement",
        label: "Arbitration Award Enforcement",
        description:
          "Assistance with enforcement or recovery based on an arbitration award.",
        icon: "⚡",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "interim-relief",
        label: "Interim Relief in Arbitration",
        description:
          "Urgent protective or interim relief connected with an arbitration dispute.",
        icon: "🚨",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "domestic-arbitration",
        label: "Domestic Arbitration",
        description:
          "Arbitration matters involving parties or disputes primarily within India.",
        icon: "🇮🇳",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "international-arbitration",
        label: "International Arbitration",
        description:
          "Cross-border arbitration involving international parties, transactions or obligations.",
        icon: "🌐",
        next: NODE_IDS.ARBITRATION.STAGE,
      },

      {
        id: "other-arbitration",
        label: "Other Arbitration / ADR Matter",
        description:
          "Any other arbitration, mediation or alternative dispute resolution matter.",
        icon: "🤝",
        next: NODE_IDS.ARBITRATION.STAGE,
      },
    ],
  },

  [NODE_IDS.ARBITRATION.STAGE]: {
    id: NODE_IDS.ARBITRATION.STAGE,

    type: "question",

    category: PRACTICE.ARBITRATION,

    step: 3,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What is the current stage of your Arbitration & ADR matter?",

    subtitle:
      "Understanding the current stage helps us prepare your consultation appropriately.",

    options: [
      {
        id: "seeking-advice",
        label: "Need Legal Advice",
        description:
          "I want to understand my options before starting or taking further action.",
        icon: "💡",
        next: NODE_IDS.ARBITRATION.URGENCY,
      },

      {
        id: "notice-stage",
        label: "Notice / Invocation Stage",
        description:
          "An arbitration notice or notice invoking arbitration has been sent or received.",
        icon: "📩",
        next: NODE_IDS.ARBITRATION.URGENCY,
      },

      {
        id: "tribunal-formation",
        label: "Tribunal Appointment Stage",
        description:
          "The arbitrator or arbitral tribunal is being appointed or constituted.",
        icon: "👨‍⚖️",
        next: NODE_IDS.ARBITRATION.URGENCY,
      },

      {
        id: "proceedings-pending",
        label: "Arbitration Proceedings Ongoing",
        description:
          "The arbitration is currently ongoing before the arbitral tribunal.",
        icon: "🏛️",
        next: NODE_IDS.ARBITRATION.URGENCY,
      },

      {
        id: "award-issued",
        label: "Arbitration Award Already Issued",
        description:
          "The arbitral tribunal has already issued an award.",
        icon: "📜",
        next: NODE_IDS.ARBITRATION.URGENCY,
      },

      {
        id: "court-proceedings",
        label: "Related Court Proceedings",
        description:
          "A court proceeding relating to the arbitration is already pending.",
        icon: "⚖️",
        next: NODE_IDS.ARBITRATION.URGENCY,
      },
    ],
  },

  [NODE_IDS.ARBITRATION.URGENCY]: {
    id: NODE_IDS.ARBITRATION.URGENCY,

    type: "question",

    category: PRACTICE.ARBITRATION,

    step: 4,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "How urgent is your Arbitration & ADR matter?",

    subtitle:
      "This helps us prioritise your consultation appropriately.",

    options: [
      {
        id: "upcoming-hearing",
        label: "Upcoming Hearing / Procedural Deadline",
        description:
          "There is an upcoming arbitration hearing, filing or procedural deadline.",
        icon: "📅",
        next: NODE_IDS.ARBITRATION.RESULT,
      },

      {
        id: "interim-relief",
        label: "Immediate Interim Relief Required",
        description:
          "Urgent protection may be required to prevent immediate loss or prejudice.",
        icon: "🚨",
        next: NODE_IDS.ARBITRATION.RESULT,
      },

      {
        id: "award-deadline",
        label: "Award / Enforcement Deadline",
        description:
          "There is an important deadline relating to an arbitration award or enforcement.",
        icon: "⏳",
        next: NODE_IDS.ARBITRATION.RESULT,
      },

      {
        id: "document-review",
        label: "Document Review Required",
        description:
          "An arbitration agreement, contract, notice, award or procedural document requires legal review.",
        icon: "📂",
        next: NODE_IDS.ARBITRATION.RESULT,
      },

      {
        id: "general-arbitration",
        label: "General Consultation",
        description:
          "I would like legal guidance regarding my Arbitration & ADR matter.",
        icon: "💬",
        next: NODE_IDS.ARBITRATION.RESULT,
      },
    ],
  },

  [NODE_IDS.ARBITRATION.RESULT]: {
    id: NODE_IDS.ARBITRATION.RESULT,

    type: "recommendation",

    category: PRACTICE.ARBITRATION,

    referenceCode: "ARB",

    consultationPriority: "HIGH",

    title: PRACTICE.ARBITRATION,

    slug: "arbitration-adr",

    contactValue: PRACTICE.ARBITRATION,

    related: [
      PRACTICE.CIVIL,
      PRACTICE.CORPORATE,
    ],

    preparationKey: PREPARATION_KEYS.ARBITRATION.GENERAL,

    description:
      "Based on your responses, your matter appears to relate to Arbitration & ADR. Our legal team can assist with commercial arbitration, arbitrator appointment and challenge, arbitration proceedings, interim relief, arbitration award challenges, award enforcement, domestic arbitration, international arbitration and other alternative dispute resolution matters.",

    highlights: [
      "Commercial Arbitration",
      "Arbitrator Appointment / Challenge",
      "Arbitration Proceedings",
      "Interim Relief in Arbitration",
      "Arbitration Award Challenge",
      "Arbitration Award Enforcement",
      "Domestic Arbitration",
      "International Arbitration",
      "Alternative Dispute Resolution",
    ],

    disclaimer: NAVIGATOR_DISCLAIMER,

    estimatedDuration: "45–60 minutes",

    urgencyNote:
      "If you have an upcoming arbitration hearing, procedural deadline, award-related deadline or urgent need for interim relief, please mention the relevant details while requesting your consultation.",
  },
};