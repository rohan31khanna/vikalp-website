
import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import {  NAVIGATOR,   NAVIGATOR_DISCLAIMER} from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const familyNodes: NavigatorNodes = {

   [NODE_IDS.FAMILY.MATTER]: {
     id: NODE_IDS.FAMILY.MATTER,
   
     type: "question",
   
     category: PRACTICE.FAMILY,
   
     step: 2,
   
     totalSteps: NAVIGATOR.TOTAL_STEPS,
   
     title:
       "What best describes your family law matter?",
   
     subtitle:
       "Select the option that most closely matches your situation.",
   
     options: [
   
   {
     id: "marriage-registration",
   
     label: "Marriage Registration",
   
     description:
       "Registration of marriage, delayed registration, correction of records or related matrimonial documentation.",
   
     icon: "📜",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
   
       {
         id: "divorce",
         label: "Divorce / Judicial Separation",
         description:
           "Issues relating to divorce, separation or dissolution of marriage.",
         icon: "💔",
         next: NODE_IDS.FAMILY.STAGE,
       },
       {
         id: "custody",
         label: "Child Custody",
         description:
           "Custody, visitation or guardianship of children.",
         icon: "👶",
         next: NODE_IDS.FAMILY.STAGE,
       },
       {
         id: "maintenance",
         label: "Maintenance",
         description:
           "Financial support for spouse, children or parents.",
         icon: "💰",
         next: NODE_IDS.FAMILY.STAGE,
       },
   
       {
     id: "adoption",
   
     label: "Adoption",
   
     description:
       "Legal adoption of a child, adoption procedures, documentation or related family law matters.",
   
     icon: "👶",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
   {
     id: "restitution",
   
     label: "Restitution of Conjugal Rights",
   
     description:
       "Disputes relating to restoration of marital cohabitation or rights under matrimonial law.",
   
     icon: "💍",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
   
   {
     id: "annulment",
   
     label: "Annulment of Marriage",
   
     description:
       "Legal proceedings relating to declaration of a marriage as void or voidable under applicable matrimonial laws.",
   
     icon: "⚖️",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
   {
     id: "guardianship",
   
     label: "Guardianship",
   
     description:
       "Appointment of a legal guardian for a minor or other guardianship-related legal proceedings.",
   
     icon: "🛡️",
   
     next: NODE_IDS.FAMILY.STAGE,
   },{
     id: "succession",
   
     label: "Succession & Inheritance",
   
     description:
       "Legal issues relating to inheritance, succession, legal heirs or distribution of family assets.",
   
     icon: "🏛️",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
   {
     id: "senior-maintenance",
   
     label: "Senior Citizen Maintenance",
   
     description:
       "Maintenance and welfare matters involving senior citizens under applicable legal provisions.",
   
     icon: "👴",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
   {
     id: "nri-marriage",
   
     label: "NRI Marriage Disputes",
   
     description:
       "Cross-border matrimonial disputes involving Non-Resident Indians, jurisdiction or related family law matters.",
   
     icon: "🌍",
   
     next: NODE_IDS.FAMILY.STAGE,
   },
       {
         id: "domestic-violence",
         label: "Domestic Violence",
         description:
           "Protection orders, domestic abuse or related concerns.",
         icon: "🛡️",
         next: NODE_IDS.FAMILY.STAGE,
       },
       {
         id: "other-family",
         label: "Other Family Matter",
         description:
           "Any other family or matrimonial legal matter not listed above",
         icon: "⚖️",
         next: NODE_IDS.FAMILY.STAGE,
       },
     ],
   },
   
   [NODE_IDS.FAMILY.STAGE]: {
     id: NODE_IDS.FAMILY.STAGE,
   
     type: "question",
   
     category: PRACTICE.FAMILY,
   
     step: 3,
   
     totalSteps: NAVIGATOR.TOTAL_STEPS,
   
     title:
       "What is the current stage of your matter?",
   
     subtitle:
       "This helps us understand your situation before recommending the appropriate consultation.",
   
     options: [
       {
         id: "advice",
         label: "Need Legal Advice",
         description:
           "I want to understand my legal rights and available options.",
         icon: "💡",
         next: NODE_IDS.FAMILY.URGENCY,
       },
       {
         id: "negotiation",
         label: "Discussion / Negotiation",
         description:
           "Discussions are ongoing but no court proceedings have started.",
         icon: "🤝",
         next: NODE_IDS.FAMILY.URGENCY,
       },
       {
         id: "court",
         label: "Court Proceedings",
         description:
           "A case is already pending before a court.",
         icon: "🏛️",
         next: NODE_IDS.FAMILY.URGENCY,
       },
       {
         id: "notice",
         label: "Received Legal Notice",
         description:
           "I have received a notice and need legal guidance.",
         icon: "📄",
         next: NODE_IDS.FAMILY.URGENCY,
       },
     ],
   },
   
   [NODE_IDS.FAMILY.URGENCY]: {
     id: NODE_IDS.FAMILY.URGENCY,
   
     type: "question",
   
     category: PRACTICE.FAMILY,
   
     step: 4,
   
     totalSteps: NAVIGATOR.TOTAL_STEPS,
   
     title:
       "How urgent is your matter?",
   
     subtitle:
       "Understanding urgency helps us prepare for your consultation.",
   
     options: [
       {
         id: "hearing",
         label: "Upcoming Hearing",
         description:
           "There is an upcoming hearing or legal deadline.",
         icon: "📅",
         next: NODE_IDS.FAMILY.RESULT,
       },
       {
         id: "safety",
         label: "Immediate Safety Concern",
         description:
           "The matter requires urgent legal attention.",
         icon: "🚨",
         next: NODE_IDS.FAMILY.RESULT,
       },
       {
         id: "soon",
         label: "Need Guidance Soon",
         description:
           "I would like to consult a lawyer in the near future.",
         icon: "⏳",
         next: NODE_IDS.FAMILY.RESULT,
       },
       {
         id: "general",
         label: "General Consultation",
         description:
           "I am looking for legal advice and planning.",
         icon: "📘",
         next: NODE_IDS.FAMILY.RESULT,
       },
     ],
   },
   
     [NODE_IDS.FAMILY.RESULT]: {
     id: NODE_IDS.FAMILY.RESULT,
   
     type: "recommendation",
   
     category: PRACTICE.FAMILY,
   
     referenceCode: "FAM",
   
     consultationPriority: "HIGH",
   
     title: PRACTICE.FAMILY,
   
     slug: "family-law",
   
     contactValue: PRACTICE.FAMILY,
   
   preparationKey: PREPARATION_KEYS.FAMILY.GENERAL,

     description:
     "Based on your responses, your matter appears to fall within Family & Marriage law. Our legal team can assist with matrimonial disputes, divorce, child custody, maintenance, adoption, restitution of conjugal rights, marriage registration, annulment of marriage, guardianship, succession and inheritance, senior citizen maintenance, NRI marriage disputes, domestic violence matters and other family law proceedings.",
   
     highlights: [
     "Divorce & Judicial Separation",
     "Child Custody",
     "Maintenance",
     "Adoption",
     "Restitution of Conjugal Rights",
     "Marriage Registration",
     "Annulment of Marriage",
     "Guardianship",
     "Succession & Inheritance",
     "Senior Citizen Maintenance",
     "NRI Marriage Disputes",
     "Domestic Violence",
   ],
   
     related: [PRACTICE.CIVIL],
   
     disclaimer:
       NAVIGATOR_DISCLAIMER,
   
     estimatedDuration:
     "45–60 minutes",
   
     urgencyNote:
       "If there are upcoming court dates, safety concerns, or urgent family matters, please mention them while requesting your consultation.",
   },
   
   

};