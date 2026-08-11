import { createPreparation } from "../common/createPreparation";

export function getInternationalTaxPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding an international or cross-border taxation matter involving income, transactions, assets, investments, services or business activities across multiple jurisdictions.",
      "Your responses indicate that the relevant residency details, cross-border transactions, tax records, agreements and supporting documents should be reviewed carefully.",
      "The consultation will focus on understanding the cross-border tax position, applicable obligations and the appropriate legal or procedural options.",
    ],

    documents: [
      "PAN / Taxpayer Details",
      "Passport / Citizenship Details (if relevant)",
      "Tax Residency Details / Certificate of Residence",
      "Income Tax Returns",
      "Foreign Income / Asset Details",
      "Foreign Bank Account Statements",
      "Foreign Investment / Securities Records",
      "Cross-Border Transaction Records",
      "Invoices / Agreements / Contracts",
      "Employment / Consulting / Service Agreements (if applicable)",
      "Double Taxation Avoidance Agreement (DTAA) Related Documents",
      "Foreign Tax Payment / Tax Credit Records",
      "Form 26AS / Annual Information Statement (AIS)",
      "Foreign Asset / Investment Disclosures",
      "Tax Notices / Assessment Orders (if any)",
      "Previous Tax Opinions / Submissions (if any)",
      "Correspondence with Tax Authorities",
      "Any Other Relevant International Tax Documents",
    ],

    discussionPoints: [
      "Background and nature of the cross-border tax matter",
      "Tax residency and relevant jurisdictions involved",
      "Nature and source of foreign or cross-border income",
      "Foreign assets, investments or bank accounts",
      "Cross-border business, employment or professional activities",
      "Applicable reporting and disclosure requirements",
      "Tax paid or payable in other jurisdictions",
      "Potential foreign tax credit or double-taxation issues",
      "Relevant agreements, contracts or transaction structures",
      "DTAA or other international tax considerations",
      "Any tax notice, assessment or dispute",
      "Financial or commercial impact of the matter",
      "Desired outcome and immediate concerns",
    ],

    consultationFocus: [
      "Reviewing residency, income and cross-border transaction documents",
      "Understanding the applicable domestic and international tax position",
      "Reviewing reporting, disclosure and foreign tax credit considerations",
      "Considering relevant DTAA and cross-border tax issues",
      "Discussing appropriate legal or procedural next steps",
    ],

    urgencyLevel: "medium",
  });
}