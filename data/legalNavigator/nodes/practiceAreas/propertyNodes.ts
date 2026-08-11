
import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import {  NAVIGATOR,   NAVIGATOR_DISCLAIMER} from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const propertyNodes: NavigatorNodes = {
    [NODE_IDS.PROPERTY.MATTER]: {
  id: NODE_IDS.PROPERTY.MATTER,

  type: "question",

  category: PRACTICE.PROPERTY,

  step: 2,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What best describes your property matter?",

  subtitle:
    "Choose the option that most closely matches your legal issue.",

  options: [
    {
  id: "property-purchase-sale",

  label: "Property Purchase & Sale",

  description:
    "Legal assistance for buying, selling or transferring residential, commercial or agricultural property.",

  icon: "🏠",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "property-disputes",

  label: "Property Disputes",

  description:
    "Disputes relating to ownership, possession, boundaries or rights over immovable property.",

  icon: "⚖️",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "title-verification",

  label: "Title Verification & Due Diligence",

  description:
    "Verification of ownership, title documents and legal due diligence before property transactions.",

  icon: "📑",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "builder-rera",

  label: "Builder / RERA Disputes",

  description:
    "Disputes involving builders, delayed possession, construction defects or matters under RERA.",

  icon: "🏗️",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "landlord-tenant",

  label: "Landlord–Tenant Matters",

  description:
    "Legal issues relating to tenancy, eviction, rent agreements or landlord–tenant disputes.",

  icon: "🏘️",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "partition",

  label: "Partition & Family Property",

  description:
    "Partition of ancestral or jointly owned property and disputes among family members.",

  icon: "🏡",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "mutation",

  label: "Mutation & Revenue Records",

  description:
    "Mutation proceedings, revenue records, land records and related property documentation.",

  icon: "🗂️",

  next: NODE_IDS.PROPERTY.STAGE,
},{
  id: "lease-agreement",

  label: "Lease & Property Agreements",

  description:
    "Preparation, review and enforcement of lease deeds, sale deeds and other property agreements.",

  icon: "📝",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "encroachment",

  label: "Encroachment & Possession",

  description:
    "Encroachment issues, illegal possession and recovery of possession of immovable property.",

  icon: "🚧",

  next: NODE_IDS.PROPERTY.STAGE,
},
{
  id: "property-documentation",

  label: "Property Documentation",

  description:
    "Preparation, verification and registration of property-related legal documents.",

  icon: "📜",

  next: NODE_IDS.PROPERTY.STAGE,
},
    {
      id: "other-property",
      label: "Other Property Matter",
      description:
        "Any other property or real estate related issue.",
      icon: "⚖️",
      next: NODE_IDS.PROPERTY.STAGE,
    },
  ],
},

[NODE_IDS.PROPERTY.STAGE]: {
  id: NODE_IDS.PROPERTY.STAGE,

  type: "question",

  category: PRACTICE.PROPERTY,

  step: 3,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What is the current stage of your matter?",

  subtitle:
    "Understanding the current stage helps us prepare for your consultation.",

  options: [
    {
      id: "planning",
      label: "Need Legal Advice",
      description:
        "I need legal guidance before proceeding.",
      icon: "💡",
      next: NODE_IDS.PROPERTY.URGENCY,
    },
    {
      id: "documents",
      label: "Document Verification",
      description:
        "Property documents require legal verification or review.",
      icon: "📂",
      next: NODE_IDS.PROPERTY.URGENCY,
    },
    {
      id: "dispute",
      label: "Dispute Already Exists",
      description:
        "There is already a dispute with another party.",
      icon: "⚔️",
      next: NODE_IDS.PROPERTY.URGENCY,
    },
    {
      id: "court",
      label: "Matter Before Court",
      description:
        "A property case is already pending before a court or authority.",
      icon: "🏛️",
      next: NODE_IDS.PROPERTY.URGENCY,
    },
  ],
},

[NODE_IDS.PROPERTY.URGENCY]: {
  id: NODE_IDS.PROPERTY.URGENCY,

  type: "question",

  category: PRACTICE.PROPERTY,

  step: 4,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "How urgent is your property matter?",

  subtitle:
    "This helps us understand how quickly legal assistance may be required.",

  options: [
    {
      id: "registration-deadline",
      label: "Registration Deadline",
      description:
        "There is an upcoming registration or legal deadline.",
      icon: "📅",
      next: NODE_IDS.PROPERTY.RESULT,
    },
    {
      id: "illegal-possession",
      label: "Possession / Encroachment",
      description:
        "There is an immediate issue regarding possession or encroachment.",
      icon: "🚨",
      next: NODE_IDS.PROPERTY.RESULT,
    },
    {
      id: "builder-delay",
      label: "Builder Delay",
      description:
        "The builder or developer is delaying possession or commitments.",
      icon: "🏗️",
      next: NODE_IDS.PROPERTY.RESULT,
    },
    {
      id: "general-property",
      label: "General Consultation",
      description:
        "I would like legal advice regarding my property matter.",
      icon: "💬",
      next: NODE_IDS.PROPERTY.RESULT,
    },
  ],
},

  [NODE_IDS.PROPERTY.RESULT]: {
  id: NODE_IDS.PROPERTY.RESULT,

  type: "recommendation",

  category: PRACTICE.PROPERTY,

  referenceCode: "PRO",

  consultationPriority: "MEDIUM",

  title: PRACTICE.PROPERTY,

  slug: "property-real-estate",

  contactValue: PRACTICE.PROPERTY,

  highlights: [
  "Property Purchase & Sale",
  "Property Disputes",
  "Title Verification & Due Diligence",
  "Builder / RERA Disputes",
  "Landlord–Tenant Matters",
  "Partition & Family Property",
  "Mutation & Revenue Records",
  "Lease & Property Agreements",
  "Encroachment & Possession",
  "Property Documentation",
],

preparationKey: PREPARATION_KEYS.PROPERTY.GENERAL,

description:
"Based on your responses, your matter appears to relate to Property & Real Estate. Our legal team can assist with property transactions, title verification, builder and RERA disputes, landlord–tenant matters, partition of family property, mutation, lease agreements, encroachment, property documentation and other real estate legal matters.",

  related: [PRACTICE.CIVIL],

  disclaimer:
  NAVIGATOR_DISCLAIMER,

  estimatedDuration:
  "45–60 minutes",

  urgencyNote:
    "If you have received a legal notice or there are important upcoming dates, please mention this while requesting your consultation.",
},
}