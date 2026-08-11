
import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import {  NAVIGATOR,   NAVIGATOR_DISCLAIMER} from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const civilNodes: NavigatorNodes = {
    [NODE_IDS.CIVIL.MATTER]: {
  id: NODE_IDS.CIVIL.MATTER,

  type: "question",

  category: PRACTICE.CIVIL,

  step: 2,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What best describes your civil litigation matter?",

  subtitle:
    "Select the option that most closely matches your legal issue.",

  options: [
    {
      id: "money-recovery",
      label: "Money Recovery",
      description:
        "Recovery of unpaid money, loans, dues or financial claims.",
      icon: "💰",
      next: NODE_IDS.CIVIL.STAGE,
    },
   {
  id: "injunction",

  label: "Injunction & Stay Orders",

  description:
    "Temporary or permanent injunctions, stay orders and preventive civil relief.",

  icon: "🛑",

  next: NODE_IDS.CIVIL.STAGE,
},
    {
      id: "civil-dispute",
      label: "General Civil Dispute",
      description:
        "General civil disputes between individuals, businesses or organisations not covered elsewhere",
      icon: "⚖️",
      next: NODE_IDS.CIVIL.STAGE,
    },
    {
  id: "appeal",

  label: "Appeals & Revisions",

  description:
    "Appeals, revisions or challenges against civil court judgments and orders.",

  icon: "📚",

  next: NODE_IDS.CIVIL.STAGE,
},
    {
  id: "declaration",

  label: "Declaration & Civil Rights",

  description:
    "Suits seeking declaration of legal rights, ownership or legal status.",

  icon: "📜",

  next: NODE_IDS.CIVIL.STAGE,
},
{
  id: "specific-performance",

  label: "Specific Performance",

  description:
    "Enforcement of contractual obligations through civil court proceedings.",

  icon: "📄",

  next: NODE_IDS.CIVIL.STAGE,
},{
  id: "possession",

  label: "Possession & Eviction",

  description:
    "Recovery of possession, eviction and related civil proceedings.",

  icon: "🏠",

  next: NODE_IDS.CIVIL.STAGE,
},{
  id: "partition",

  label: "Partition Suits",

  description:
    "Civil suits relating to partition of jointly owned property.",

  icon: "🏡",

  next: NODE_IDS.CIVIL.STAGE,
},{
  id: "contract-dispute",

  label: "Contractual Disputes",

  description:
    "Civil disputes arising from breach of agreements or contractual obligations.",

  icon: "📑",

  next: NODE_IDS.CIVIL.STAGE,
},{
  id: "damages",

  label: "Compensation & Damages",

  description:
    "Claims for financial compensation arising from civil wrongs or breach of obligations.",

  icon: "💵",

  next: NODE_IDS.CIVIL.STAGE,
},{
  id: "family-property",

  label: "Family Property Disputes",

  description:
    "Civil disputes relating to ancestral or jointly owned family property.",

  icon: "👨‍👩‍👧",

  next: NODE_IDS.CIVIL.STAGE,
},
    {
      id: "other-civil",
      label: "Other Civil Matter",
      description:
        "Any other civil litigation matter.",
      icon: "📄",
      next: NODE_IDS.CIVIL.STAGE,
    },
  ],
},

[NODE_IDS.CIVIL.STAGE]: {
  id: NODE_IDS.CIVIL.STAGE,

  type: "question",

  category: PRACTICE.CIVIL,

  step: 3,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What is the current stage of your matter?",

  subtitle:
    "Understanding the present stage helps us prepare for your consultation.",

  options: [
    {
      id: "legal-advice",
      label: "Need Legal Advice",
      description:
        "I want to understand my legal rights before proceeding.",
      icon: "💡",
      next: NODE_IDS.CIVIL.URGENCY,
    },
    {
      id: "notice-stage",
      label: "Legal Notice Stage",
      description:
        "A legal notice has been sent or received.",
      icon: "📩",
      next: NODE_IDS.CIVIL.URGENCY,
    },
    {
      id: "court-pending",
      label: "Case Pending Before Court",
      description:
        "The matter is already pending before a civil court.",
      icon: "🏛️",
      next: NODE_IDS.CIVIL.URGENCY,
    },
    {
      id: "judgment",
      label: "Judgment Already Passed",
      description:
        "The court has already passed an order or judgment.",
      icon: "📜",
      next: NODE_IDS.CIVIL.URGENCY,
    },
  ],
},

[NODE_IDS.CIVIL.URGENCY]: {
  id: NODE_IDS.CIVIL.URGENCY,

  type: "question",

  category: PRACTICE.CIVIL,

  step: 4,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "How urgent is your matter?",

  subtitle:
    "This helps us prioritise your consultation appropriately.",

  options: [
    {
      id: "upcoming-hearing",
      label: "Upcoming Court Hearing",
      description:
        "There is an upcoming hearing or important deadline.",
      icon: "📅",
      next: NODE_IDS.CIVIL.RESULT,
    },
    {
      id: "interim-relief",
      label: "Immediate Interim Relief Required",
      description:
        "Urgent court intervention may be required.",
      icon: "🚨",
      next: NODE_IDS.CIVIL.RESULT,
    },
    {
      id: "document-review",
      label: "Document Review Required",
      description:
        "Legal documents require professional review.",
      icon: "📂",
      next: NODE_IDS.CIVIL.RESULT,
    },
    {
      id: "general-civil",
      label: "General Consultation",
      description:
        "I would like legal guidance regarding my civil matter.",
      icon: "💬",
      next: NODE_IDS.CIVIL.RESULT,
    },
  ],
},


  [NODE_IDS.CIVIL.RESULT]: {
  id: NODE_IDS.CIVIL.RESULT,

  type: "recommendation",

  category: PRACTICE.CIVIL,

  referenceCode: "CIV",

  consultationPriority: "HIGH",

  title: PRACTICE.CIVIL,


related: [
  PRACTICE.PROPERTY,
  PRACTICE.CORPORATE,
],

  slug: "civil-litigation",

  contactValue: PRACTICE.CIVIL,

  preparationKey: PREPARATION_KEYS.CIVIL.GENERAL,

description:
"Based on your responses, your matter appears to relate to Civil Litigation. Our legal team can assist with money recovery, injunctions, declaration suits, contractual disputes, specific performance, possession and eviction matters, partition suits, compensation claims, family property disputes, civil appeals and other civil proceedings.",

  highlights: [
  "Money Recovery",
  "General Civil Litigation",
  "Declaration & Civil Rights",
  "Injunction & Stay Orders",
  "Specific Performance",
  "Possession & Eviction",
  "Partition Suits",
  "Contractual Disputes",
  "Compensation & Damages",
  "Family Property Disputes",
  "Appeals & Revisions",
],

  disclaimer:
    NAVIGATOR_DISCLAIMER,

  estimatedDuration:
    "45–60 minutes",

  urgencyNote:
    "If you have received a legal notice or there are upcoming court dates, please mention this while requesting your consultation.",
},

}