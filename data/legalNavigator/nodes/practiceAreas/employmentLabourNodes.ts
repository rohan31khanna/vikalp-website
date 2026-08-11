import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import { NAVIGATOR, NAVIGATOR_DISCLAIMER } from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const employmentLabourNodes: NavigatorNodes = {
  [NODE_IDS.EMPLOYMENT_LABOUR.MATTER]: {
    id: NODE_IDS.EMPLOYMENT_LABOUR.MATTER,

    type: "question",

    category: PRACTICE.EMPLOYMENT_LABOUR,

    step: 2,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your employment or labour matter?",

    subtitle:
      "Select the option that most closely matches your workplace or employment-related concern.",

    options: [
      {
        id: "employment-contract",
        label: "Employment Contract & Terms",
        description:
          "Employment agreements, appointment terms, compensation, confidentiality or other employment conditions.",
        icon: "📄",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "termination",
        label: "Termination / Wrongful Dismissal",
        description:
          "Disputes involving termination, dismissal, resignation or separation from employment.",
        icon: "🚪",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "salary-wages",
        label: "Salary, Wages & Dues",
        description:
          "Unpaid salary, wages, bonuses, incentives, final settlement or other employment dues.",
        icon: "💰",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "workplace-harassment",
        label: "Workplace Harassment",
        description:
          "Workplace harassment, inappropriate conduct, internal complaints or related employment concerns.",
        icon: "⚠️",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "posh",
        label: "POSH / Workplace Sexual Harassment",
        description:
          "Workplace sexual harassment complaints, Internal Committee proceedings or POSH-related matters.",
        icon: "🛡️",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "employee-benefits",
        label: "Employee Benefits & Social Security",
        description:
          "PF, gratuity, employee benefits, statutory benefits or other social security-related concerns.",
        icon: "🏥",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "disciplinary",
        label: "Disciplinary Proceedings",
        description:
          "Show-cause notices, domestic enquiries, disciplinary action or workplace misconduct proceedings.",
        icon: "📋",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "industrial-dispute",
        label: "Industrial / Labour Dispute",
        description:
          "Disputes involving workers, employers, unions, retrenchment, layoff or industrial relations.",
        icon: "🏭",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "employee-employer-dispute",
        label: "Employee–Employer Dispute",
        description:
          "General disputes between an employee and employer regarding employment rights or obligations.",
        icon: "🤝",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "labour-compliance",
        label: "Labour Law Compliance",
        description:
          "Employment policies, statutory compliance, workplace regulations and labour law requirements.",
        icon: "⚖️",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "union-matter",
        label: "Trade Union / Collective Matter",
        description:
          "Trade union issues, collective bargaining or disputes involving employee groups.",
        icon: "👥",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },

      {
        id: "other-employment-labour",
        label: "Other Employment / Labour Matter",
        description:
          "Any other employment, workplace or labour-related legal issue.",
        icon: "💼",
        next: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,
      },
    ],
  },

  [NODE_IDS.EMPLOYMENT_LABOUR.STAGE]: {
    id: NODE_IDS.EMPLOYMENT_LABOUR.STAGE,

    type: "question",

    category: PRACTICE.EMPLOYMENT_LABOUR,

    step: 3,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What is the current stage of your employment matter?",

    subtitle:
      "Help us understand where your workplace or employment matter currently stands.",

    options: [
      {
        id: "seeking-advice",
        label: "Need Legal Advice",
        description:
          "I want to understand my employment or labour rights before taking further action.",
        icon: "💡",
        next: NODE_IDS.EMPLOYMENT_LABOUR.URGENCY,
      },

      {
        id: "employer-contacted",
        label: "Employer / HR Already Contacted",
        description:
          "I have already raised the issue with my employer, HR or management.",
        icon: "📞",
        next: NODE_IDS.EMPLOYMENT_LABOUR.URGENCY,
      },

      {
        id: "notice-received",
        label: "Notice / Warning Received",
        description:
          "I have received a show-cause notice, warning, termination notice or other employment communication.",
        icon: "📄",
        next: NODE_IDS.EMPLOYMENT_LABOUR.URGENCY,
      },

      {
        id: "internal-proceedings",
        label: "Internal Proceedings Ongoing",
        description:
          "An internal enquiry, disciplinary process, POSH proceeding or workplace investigation is ongoing.",
        icon: "🏢",
        next: NODE_IDS.EMPLOYMENT_LABOUR.URGENCY,
      },

      {
        id: "legal-proceedings",
        label: "Legal Proceedings Started",
        description:
          "The matter is already before a court, tribunal, labour authority or other legal forum.",
        icon: "🏛️",
        next: NODE_IDS.EMPLOYMENT_LABOUR.URGENCY,
      },
    ],
  },

  [NODE_IDS.EMPLOYMENT_LABOUR.URGENCY]: {
    id: NODE_IDS.EMPLOYMENT_LABOUR.URGENCY,

    type: "question",

    category: PRACTICE.EMPLOYMENT_LABOUR,

    step: 4,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "How urgent is your employment or labour matter?",

    subtitle:
      "This helps us prioritise your consultation appropriately.",

    options: [
      {
        id: "deadline",
        label: "Upcoming Deadline",
        description:
          "There is an upcoming response, hearing, enquiry or legal deadline.",
        icon: "📅",
        next: NODE_IDS.EMPLOYMENT_LABOUR.RESULT,
      },

      {
        id: "termination-risk",
        label: "Immediate Employment Risk",
        description:
          "There is an immediate risk of termination, disciplinary action or loss of employment.",
        icon: "🚨",
        next: NODE_IDS.EMPLOYMENT_LABOUR.RESULT,
      },

      {
        id: "financial-dues",
        label: "Salary / Financial Dues Pending",
        description:
          "Salary, wages, compensation, gratuity or other employment-related payments are pending.",
        icon: "💰",
        next: NODE_IDS.EMPLOYMENT_LABOUR.RESULT,
      },

      {
        id: "document-review",
        label: "Document Review Required",
        description:
          "An employment agreement, notice, policy or other workplace document requires legal review.",
        icon: "📂",
        next: NODE_IDS.EMPLOYMENT_LABOUR.RESULT,
      },

      {
        id: "general-employment",
        label: "General Consultation",
        description:
          "I would like legal guidance regarding my employment or labour matter.",
        icon: "💬",
        next: NODE_IDS.EMPLOYMENT_LABOUR.RESULT,
      },
    ],
  },

  [NODE_IDS.EMPLOYMENT_LABOUR.RESULT]: {
    id: NODE_IDS.EMPLOYMENT_LABOUR.RESULT,

    type: "recommendation",

    category: PRACTICE.EMPLOYMENT_LABOUR,

    referenceCode: "EMP",

    consultationPriority: "HIGH",

    title: PRACTICE.EMPLOYMENT_LABOUR,

    slug: "employment-labour-law",

    contactValue: PRACTICE.EMPLOYMENT_LABOUR,

    related: [
      PRACTICE.CORPORATE,
      PRACTICE.CIVIL,
    ],

    preparationKey: PREPARATION_KEYS.EMPLOYMENT_LABOUR.GENERAL,

    description:
      "Based on your responses, your matter appears to relate to Employment & Labour Law. Our legal team can assist with employment contracts, termination and dismissal matters, salary and wage disputes, workplace harassment, POSH matters, employee benefits, disciplinary proceedings, industrial disputes, labour compliance, trade union matters and other employment-related legal concerns.",

    highlights: [
      "Employment Contracts & Terms",
      "Termination / Wrongful Dismissal",
      "Salary, Wages & Dues",
      "Workplace Harassment",
      "POSH / Workplace Sexual Harassment",
      "Employee Benefits & Social Security",
      "Disciplinary Proceedings",
      "Industrial / Labour Disputes",
      "Employee–Employer Disputes",
      "Labour Law Compliance",
      "Trade Union / Collective Matters",
    ],

    disclaimer: NAVIGATOR_DISCLAIMER,

    estimatedDuration: "45–60 minutes",

    urgencyNote:
      "If you have received a termination notice, disciplinary notice, POSH communication or face an upcoming legal deadline, please mention the relevant details while requesting your consultation.",
  },
};