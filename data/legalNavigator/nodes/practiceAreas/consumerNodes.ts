
import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import {  NAVIGATOR,   NAVIGATOR_DISCLAIMER} from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const consumerNodes: NavigatorNodes = {

    [NODE_IDS.CONSUMER.MATTER]: {
  id: NODE_IDS.CONSUMER.MATTER,

  type: "question",

  category: PRACTICE.CONSUMER,

  step: 2,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What best describes your consumer dispute?",

  subtitle:
    "Choose the option that most closely matches your concern.",

  options: [
    {
      id: "defective-product",
      label: "Defective Product",
      description:
        "Product is defective, damaged or not as advertised.",
      icon: "📦",
      next: NODE_IDS.CONSUMER.STAGE,
    },
    {
      id: "deficiency-service",
      label: "Deficiency in Service",
      description:
"Deficiency or negligence in services provided by a company, institution or service provider.",
      icon: "🛠️",
      next: NODE_IDS.CONSUMER.STAGE,
    },
    {
  id: "medical-negligence",

  label: "Medical Negligence",

  description:
    "Negligent medical treatment, incorrect diagnosis, surgical negligence or deficiency in healthcare services.",

  icon: "🏥",

  next: NODE_IDS.CONSUMER.STAGE,
},

{
  id: "banking",

  label: "Banking Consumer Issues",

  description:
    "Unauthorized transactions, banking service deficiencies, loan disputes or banking complaints.",

  icon: "🏦",

  next: NODE_IDS.CONSUMER.STAGE,
},
    {
      id: "insurance",
        label: "Insurance Claim Disputes",
      description:
        "Insurance claim rejection, delay or settlement dispute.",
      icon: "🛡️",
      next: NODE_IDS.CONSUMER.STAGE,
    },
    {
  id: "warranty",

  label: "Warranty & After-Sales Issues",

  description:
    "Warranty denial, repair delays, replacement disputes or after-sales service issues.",

  icon: "🔧",

  next: NODE_IDS.CONSUMER.STAGE,
},
    {
      id: "online-shopping",
      label: "E-commerce / Online Shopping",
      description:
        "Issues relating to e-commerce platforms or online purchases.",
      icon: "🛒",
      next: NODE_IDS.CONSUMER.STAGE,
    },
    {
  id: "builder-consumer",

  label: "Builder Consumer Complaints",

  description:
    "Consumer complaints against builders relating to delayed possession, construction quality, promised amenities or other builder-related deficiencies.",
  icon: "🏗️",

  next: NODE_IDS.CONSUMER.STAGE,
},

{
  id: "unfair-trade",

  label: "Unfair Trade Practices",

  description:
    "False advertisements, misleading claims or unfair business practices affecting consumers.",

  icon: "📢",

  next: NODE_IDS.CONSUMER.STAGE,
},

{
  id: "travel",

  label: "Travel & Tourism Disputes",

  description:
    "Package tour disputes, cancellations, refunds or travel-related consumer complaints.",

  icon: "✈️",

  next: NODE_IDS.CONSUMER.STAGE,
},

{
  id: "education",

  label: "Education Service Complaints",

  description:
    "Consumer disputes involving educational institutions, coaching centres or educational services.",

  icon: "🎓",

  next: NODE_IDS.CONSUMER.STAGE,
},
    
    {
      id: "other-consumer",
      label: "Other Consumer Matter",
      description:
        "Any other consumer rights or service related issue.",
      icon: "⚖️",
      next: NODE_IDS.CONSUMER.STAGE,
    },
  ],
},

[NODE_IDS.CONSUMER.STAGE]: {
  id: NODE_IDS.CONSUMER.STAGE,

  type: "question",

  category: PRACTICE.CONSUMER,

  step: 3,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "What is the current status of your matter?",

  subtitle:
    "This helps us understand how far your dispute has progressed.",

  options: [
    {
      id: "complaint-not-made",
      label: "Complaint Not Yet Raised",
      description:
        "I have not yet contacted the seller or service provider.",
      icon: "💡",
      next: NODE_IDS.CONSUMER.URGENCY,
    },
    {
      id: "company-contacted",
      label: "Company Already Contacted",
      description:
        "I have already raised the issue with the company.",
      icon: "📞",
      next: NODE_IDS.CONSUMER.URGENCY,
    },
    {
      id: "legal-notice",
      label: "Legal Notice Sent / Received",
      description:
        "A legal notice has already been exchanged.",
      icon: "📄",
      next: NODE_IDS.CONSUMER.URGENCY,
    },
    {
      id: "consumer-commission",
      label: "Matter Before Consumer Commission",
      description:
        "The dispute is already pending before the Consumer Commission.",
      icon: "🏛️",
      next: NODE_IDS.CONSUMER.URGENCY,
    },
  ],
},

[NODE_IDS.CONSUMER.URGENCY]: {
  id: NODE_IDS.CONSUMER.URGENCY,

  type: "question",

  category: PRACTICE.CONSUMER,

  step: 4,

  totalSteps: NAVIGATOR.TOTAL_STEPS,

  title: "How urgent is your consumer matter?",

  subtitle:
    "Understanding urgency helps us prepare your consultation effectively.",

  options: [
    {
      id: "refund-deadline",
      label: "Refund / Replacement Pending",
      description:
        "Refund or replacement is urgently required.",
      icon: "💰",
      next: NODE_IDS.CONSUMER.RESULT,
    },
    {
      id: "limitation",
      label: "Approaching Limitation Period",
      description:
        "Legal time limits are approaching.",
      icon: "⏳",
      next: NODE_IDS.CONSUMER.RESULT,
    },
    {
      id: "financial-loss",
      label: "Significant Financial Loss",
      description:
        "The dispute is causing considerable financial impact.",
      icon: "📉",
      next: NODE_IDS.CONSUMER.RESULT,
    },
    {
      id: "consumer-advice",
      label: "General Legal Advice",
      description:
        "I would like legal guidance regarding my consumer rights.",
      icon: "💬",
      next: NODE_IDS.CONSUMER.RESULT,
    },
  ],
},

  [NODE_IDS.CONSUMER.RESULT]: {
  id: NODE_IDS.CONSUMER.RESULT,

  type: "recommendation",

  category: PRACTICE.CONSUMER,
  
  consultationPriority: "LOW",

  referenceCode: "CON",

  title: PRACTICE.CONSUMER,

  slug: "consumer-disputes",

  contactValue: PRACTICE.CONSUMER,

related: [
  PRACTICE.CIVIL,
],

preparationKey: PREPARATION_KEYS.CONSUMER.GENERAL,

description:
"Based on your responses, your matter appears to relate to Consumer Protection. Our legal team can assist with defective products, deficiency in services, medical negligence, insurance disputes, banking consumer issues, e-commerce complaints, builder consumer disputes, unfair trade practices, warranty claims, travel disputes, education service complaints and other consumer protection matters.",
 
highlights: [
  "Defective Products",
  "Deficiency in Service",
  "Medical Negligence",
  "Insurance Claim Disputes",
  "Banking Consumer Issues",
  "E-commerce / Online Shopping",
  "Builder Consumer Complaints",
  "Unfair Trade Practices",
  "Warranty & After-Sales Issues",
  "Travel & Tourism Disputes",
  "Education Service Complaints",
],


  disclaimer:
    NAVIGATOR_DISCLAIMER,

  estimatedDuration:
  "45–60 minutes",

  urgencyNote:
    "If there are response deadlines or limitation concerns, please mention them while requesting your consultation.",
},

    
}