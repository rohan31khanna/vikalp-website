import type { NavigatorNodes } from "@/types/legalNavigator";

import { NODE_IDS } from "../../workflowIds";
import { NAVIGATOR, NAVIGATOR_DISCLAIMER } from "../../constants";
import { PRACTICE } from "../../practiceAreas";
import { PREPARATION_KEYS } from "../../preparation/preparationKeys";

export const bankingNodes: NavigatorNodes = {
  [NODE_IDS.BANKING.MATTER]: {
    id: NODE_IDS.BANKING.MATTER,

    type: "question",

    category: PRACTICE.BANKING,

    step: 2,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What best describes your banking or financial matter?",

    subtitle:
      "Select the option that most closely matches your banking or finance-related concern.",

    options: [
      {
        id: "banking-dispute",
        label: "Banking Disputes & Complaints",
        description:
          "Disputes regarding banking services, charges, account operations or complaints against a bank.",
        icon: "🏦",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "loan-emi",
        label: "Loan & EMI Disputes",
        description:
          "Disputes relating to loans, EMI payments, interest, loan terms or lending practices.",
        icon: "💳",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "loan-recovery",
        label: "Loan Recovery / Bank Recovery",
        description:
          "Recovery actions, repayment disputes, recovery notices or proceedings initiated by a bank or financial institution.",
        icon: "📩",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "cheque-dishonour",
        label: "Cheque Dishonour",
        description:
          "Legal issues arising from dishonour of a cheque or related payment dispute.",
        icon: "🧾",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "unauthorized-transaction",
        label: "Unauthorized / Fraudulent Transactions",
        description:
          "Unauthorized withdrawals, card transactions, online banking fraud or other disputed financial transactions.",
        icon: "🚨",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "credit-card",
        label: "Credit Card Disputes",
        description:
          "Credit card billing, unauthorized transactions, charges, recovery or service-related disputes.",
        icon: "💳",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "account-service",
        label: "Bank Account / Service Issues",
        description:
          "Account blocking, closure, charges, transaction issues, KYC-related problems or other banking service concerns.",
        icon: "🏧",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "mortgage-security",
        label: "Mortgage / Security / Charge Matters",
        description:
          "Legal issues involving mortgages, secured loans, charges or security interests over property or assets.",
        icon: "🔐",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "debt-recovery",
        label: "Debt Recovery & Financial Claims",
        description:
          "Recovery of outstanding loans, financial dues, debts or other monetary claims.",
        icon: "💰",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "sarfaesi",
        label: "SARFAESI / Recovery Proceedings",
        description:
          "Proceedings, notices or disputes relating to secured asset enforcement and bank recovery actions.",
        icon: "⚖️",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "debt-restructuring",
        label: "Debt Restructuring / Settlement",
        description:
          "Loan restructuring, settlement negotiations, repayment arrangements or financial distress-related matters.",
        icon: "🔄",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "banking-regulatory",
        label: "Financial Regulatory / Banking Compliance",
        description:
          "Regulatory, compliance or legal issues involving banks, financial institutions or financial transactions.",
        icon: "📋",
        next: NODE_IDS.BANKING.STAGE,
      },

      {
        id: "other-banking",
        label: "Other Banking & Finance Matter",
        description:
          "Any other banking, finance or financial services legal issue.",
        icon: "🏦",
        next: NODE_IDS.BANKING.STAGE,
      },
    ],
  },

  [NODE_IDS.BANKING.STAGE]: {
    id: NODE_IDS.BANKING.STAGE,

    type: "question",

    category: PRACTICE.BANKING,

    step: 3,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "What is the current stage of your banking matter?",

    subtitle:
      "Help us understand where your matter currently stands.",

    options: [
      {
        id: "seeking-advice",
        label: "Need Legal Advice",
        description:
          "I want to understand my legal position before taking further action.",
        icon: "💡",
        next: NODE_IDS.BANKING.URGENCY,
      },

      {
        id: "bank-contacted",
        label: "Bank / Financial Institution Contacted",
        description:
          "I have already raised the issue with the bank or financial institution.",
        icon: "📞",
        next: NODE_IDS.BANKING.URGENCY,
      },

      {
        id: "notice-received",
        label: "Notice Received / Sent",
        description:
          "A recovery notice, demand notice, legal notice or other communication has been received or sent.",
        icon: "📄",
        next: NODE_IDS.BANKING.URGENCY,
      },

      {
        id: "proceedings",
        label: "Legal Proceedings Started",
        description:
          "The matter is already before a court, tribunal or other legal forum.",
        icon: "🏛️",
        next: NODE_IDS.BANKING.URGENCY,
      },

      {
        id: "recovery-action",
        label: "Recovery / Enforcement Action",
        description:
          "Recovery, enforcement or other action has already been initiated by a bank or financial institution.",
        icon: "⚠️",
        next: NODE_IDS.BANKING.URGENCY,
      },
    ],
  },

  [NODE_IDS.BANKING.URGENCY]: {
    id: NODE_IDS.BANKING.URGENCY,

    type: "question",

    category: PRACTICE.BANKING,

    step: 4,

    totalSteps: NAVIGATOR.TOTAL_STEPS,

    title: "How urgent is your banking matter?",

    subtitle:
      "This helps us prioritise your consultation appropriately.",

    options: [
      {
        id: "deadline",
        label: "Upcoming Deadline",
        description:
          "There is an upcoming response, payment, filing or legal deadline.",
        icon: "📅",
        next: NODE_IDS.BANKING.RESULT,
      },

      {
        id: "recovery-enforcement",
        label: "Immediate Recovery / Enforcement Risk",
        description:
          "There is an immediate risk of recovery, enforcement or other financial action.",
        icon: "🚨",
        next: NODE_IDS.BANKING.RESULT,
      },

      {
        id: "financial-loss",
        label: "Significant Financial Loss",
        description:
          "The matter is causing substantial financial loss or exposure.",
        icon: "📉",
        next: NODE_IDS.BANKING.RESULT,
      },

      {
        id: "document-review",
        label: "Document Review Required",
        description:
          "Banking, loan or financial documents require professional legal review.",
        icon: "📂",
        next: NODE_IDS.BANKING.RESULT,
      },

      {
        id: "general-banking",
        label: "General Consultation",
        description:
          "I would like legal guidance regarding my banking or financial matter.",
        icon: "💬",
        next: NODE_IDS.BANKING.RESULT,
      },
    ],
  },

  [NODE_IDS.BANKING.RESULT]: {
    id: NODE_IDS.BANKING.RESULT,

    type: "recommendation",

    category: PRACTICE.BANKING,

    referenceCode: "BAN",

    consultationPriority: "HIGH",

    title: PRACTICE.BANKING,

    slug: "banking-finance",

    contactValue: PRACTICE.BANKING,

    related: [
      PRACTICE.CIVIL,
      PRACTICE.CONSUMER,
      PRACTICE.CORPORATE,
    ],

    preparationKey: PREPARATION_KEYS.BANKING.GENERAL,

    description:
      "Based on your responses, your matter appears to relate to Banking & Finance. Our legal team can assist with banking disputes, loan and EMI matters, recovery proceedings, cheque dishonour, unauthorized transactions, credit card disputes, account and banking service issues, mortgage and security matters, debt recovery, SARFAESI proceedings, debt restructuring and financial regulatory matters.",

    highlights: [
      "Banking Disputes & Complaints",
      "Loan & EMI Disputes",
      "Loan Recovery / Bank Recovery",
      "Cheque Dishonour",
      "Unauthorized / Fraudulent Transactions",
      "Credit Card Disputes",
      "Bank Account / Service Issues",
      "Mortgage / Security / Charge Matters",
      "Debt Recovery & Financial Claims",
      "SARFAESI / Recovery Proceedings",
      "Debt Restructuring / Settlement",
      "Financial Regulatory / Banking Compliance",
    ],

    disclaimer: NAVIGATOR_DISCLAIMER,

    estimatedDuration: "45–60 minutes",

    urgencyNote:
      "If you have received a recovery notice, face an upcoming deadline, payment demand or enforcement action, please mention the relevant details while requesting your consultation.",
  },
};