
import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import {  NAVIGATOR,   NAVIGATOR_DISCLAIMER} from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const criminalNodes: NavigatorNodes = {

    [NODE_IDS.CRIMINAL.MATTER]: {
  id: NODE_IDS.CRIMINAL.MATTER,

  type: "question",

  category: PRACTICE.CRIMINAL,

  step: 2,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What best describes your criminal law matter?",

  subtitle:
    "Choose the option that most closely matches your current situation.",

  options: [
     {
  id: "cheating-fraud",

  label: "Cheating & Fraud",

  description:
    "Matters relating to cheating, financial fraud, misrepresentation or criminal breach of trust.",

  icon: "💰",

  next: NODE_IDS.CRIMINAL.STAGE,
},
{
  id: "theft-robbery",

  label: "Theft / Robbery",

  description:
    "Offences involving theft, robbery, burglary or unlawful taking of property.",

  icon: "🔓",

  next: NODE_IDS.CRIMINAL.STAGE,
},
{
  id: "assault",

  label: "Assault / Hurt",

  description:
    "Criminal matters involving assault, physical injury or use of criminal force.",

  icon: "⚠️",

  next: NODE_IDS.CRIMINAL.STAGE,
},
{
  id: "cyber-crime",

  label: "Cyber Crime",

  description:
    "Online fraud, hacking, identity theft, cyber harassment or digital offences.",

  icon: "💻",

  next: NODE_IDS.CRIMINAL.STAGE,
},
    {
      id: "fir",
      label: "FIR / Complaint",
      description:
        "Registration of an FIR, criminal complaint or police action.",
      icon: "📝",
      next: NODE_IDS.CRIMINAL.STAGE,
    },
    {
      id: "arrest",
      label: "Arrest / Detention",
      description:
        "Arrest, detention or apprehension by law enforcement.",
      icon: "🚔",
      next: NODE_IDS.CRIMINAL.STAGE,
    },
    {
      id: "bail",
      label: "Bail",
      description:
        "Regular bail, anticipatory bail or cancellation of bail.",
      icon: "⚖️",
      next: NODE_IDS.CRIMINAL.STAGE,
    },
    {
      id: "investigation",
      label: "Police Investigation",
      description:
        "Investigation, questioning or police notices.",
      icon: "🔍",
      next: NODE_IDS.CRIMINAL.STAGE,
    },
     {
      id: "trial",
      label: "Criminal Trial",
      description:
        "Ongoing criminal trial or appeal.",
      icon: "🏛️",
      next: NODE_IDS.CRIMINAL.STAGE,
    },
   
    {
    id: "matrimonial-offences",

    label: "Matrimonial Criminal Offences",

    description:
      "Criminal complaints arising from matrimonial disputes.",

    icon:"👪",

    next: NODE_IDS.CRIMINAL.STAGE,
},
   

{
  id: "white-collar",

  label: "White Collar Crime",

  description:
    "Corporate fraud, financial offences and other economic crimes.",

  icon: "🏢",

  next: NODE_IDS.CRIMINAL.STAGE,
},{
  id: "ndps",

  label: "NDPS Matters",

  description:
    "Cases involving narcotic drugs, psychotropic substances and related offences.",

  icon: "🚫",

  next: NODE_IDS.CRIMINAL.STAGE,
},
    {
  id: "other-criminal",

  label: "Other Criminal Matter",

  description:
    "Any other criminal law matter not listed above.",

  icon: "⚖️",

  next: NODE_IDS.CRIMINAL.STAGE,
},
  ],
},

[NODE_IDS.CRIMINAL.STAGE]: {
  id: NODE_IDS.CRIMINAL.STAGE,

  type: "question",

  category: PRACTICE.CRIMINAL,

  step: 3,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What is the current stage of your matter?",

  subtitle:
    "This helps us understand how far the matter has progressed.",

  options: [
    {
      id: "before-fir",
      label: "No FIR Yet",
      description:
        "The incident has occurred but no FIR has been registered.",
      icon: "📋",
      next: NODE_IDS.CRIMINAL.URGENCY,
    },
    {
      id: "investigation-stage",
      label: "Investigation in Progress",
      description:
        "Police investigation or questioning is ongoing.",
      icon: "🔎",
      next: NODE_IDS.CRIMINAL.URGENCY,
    },
    {
      id: "court-stage",
      label: "Matter Before Court",
      description:
        "The case is pending before a criminal court.",
      icon: "🏛️",
      next: NODE_IDS.CRIMINAL.URGENCY,
    },
    {
      id: "appeal-stage",
      label: "Appeal / Revision",
      description:
        "The matter is in appeal or revision proceedings.",
      icon: "📚",
      next: NODE_IDS.CRIMINAL.URGENCY,
    },
  ],
},

[NODE_IDS.CRIMINAL.URGENCY]: {
  id: NODE_IDS.CRIMINAL.URGENCY,

  type: "question",

  category: PRACTICE.CRIMINAL,

  step: 4,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "How urgent is your matter?",

  subtitle:
    "Urgency helps us prepare for your consultation appropriately.",

  options: [
    {
      id: "arrest-risk",
      label: "Immediate Arrest Risk",
      description:
        "Urgent legal assistance is required due to possible arrest.",
      icon: "🚨",
      next: NODE_IDS.CRIMINAL.RESULT,
    },
    {
      id: "hearing",
      label: "Upcoming Hearing",
      description:
        "There is a court hearing or important legal deadline approaching.",
      icon: "📅",
      next: NODE_IDS.CRIMINAL.RESULT,
    },
    {
      id: "notice",
      label: "Police Notice Received",
      description:
        "You have received a notice or summons from the police.",
      icon: "📄",
      next: NODE_IDS.CRIMINAL.RESULT,
    },
    {
      id: "general-advice",
      label: "General Legal Advice",
      description:
        "You would like legal guidance regarding your situation.",
      icon: "💬",
      next: NODE_IDS.CRIMINAL.RESULT,
    },
  ],
},



  [NODE_IDS.CRIMINAL.RESULT]: {
  
  id: NODE_IDS.CRIMINAL.RESULT,

  type: "recommendation",

  category: PRACTICE.CRIMINAL,
  
  consultationPriority: "HIGH",

  referenceCode: "CRM",

  title: PRACTICE.CRIMINAL,

  slug: "criminal-law",

  contactValue: PRACTICE.CRIMINAL,

  preparationKey: PREPARATION_KEYS.CRIMINAL.GENERAL,

description:
"Based on your responses, your matter appears to fall within Criminal Law. Our legal team can assist with criminal complaints, FIRs, police investigations, arrest and bail matters, cheating and fraud, theft, robbery, assault, cyber crimes, matrimonial criminal offences, white-collar crimes, NDPS matters, criminal trials and other criminal proceedings.",
 
highlights: [
  "Cheating & Fraud",
  "Theft & Robbery",
  "Assault",
  "Cyber Crime",
  "FIR & Police Investigation",
  "Bail Matters",
  "Criminal Trial",
  "White Collar Crime",
  "NDPS Matters",
  "Matrimonial Criminal Offences",
],
     related: [PRACTICE.CIVIL],

  disclaimer:
  NAVIGATOR_DISCLAIMER,

  estimatedDuration:
  "45–60 minutes",

  urgencyNote:
    "If you have received a notice, summons, or have an upcoming hearing, please mention this while requesting your consultation.",
},

}