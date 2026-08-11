import { createPreparation } from "../common/createPreparation";

export function getBankingCreditCardPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a credit card dispute or related credit card matter.",
      "Your responses indicate that the card account, disputed transactions, billing records and communications with the card issuer should be reviewed carefully.",
      "The consultation will focus on understanding the nature of the dispute, the actions already taken and the available legal or regulatory remedies.",
    ],

    documents: [
      "Credit Card Statements",
      "Credit Card Account Details",
      "Disputed Transaction Records",
      "Payment Receipts / Transaction Records",
      "Bank or Credit Card Issuer Correspondence",
      "Complaint / Dispute Reference Number",
      "SMS / Email Transaction Alerts",
      "Legal Notice or Recovery Notice (if any)",
      "Previous Settlement or Payment Arrangement Documents (if applicable)",
      "Identity Proof",
      "Any Other Relevant Documents",
    ],

    discussionPoints: [
      "Background of the credit card matter",
      "Nature and amount of the disputed claim",
      "Credit card transactions and payment history",
      "Unauthorized transactions or disputed charges, if applicable",
      "Interest, penalties, fees or other charges",
      "Communication with the card issuer or bank",
      "Complaints or disputes already raised",
      "Any recovery calls, notices or legal proceedings",
      "Current status of the account",
      "Immediate financial or legal concerns",
    ],

    consultationFocus: [
      "Reviewing credit card statements and transaction records",
      "Understanding the contractual and financial position",
      "Assessing disputed charges, recovery claims or service deficiencies",
      "Identifying available legal and regulatory remedies",
      "Discussing appropriate legal options and next steps",
    ],

    urgencyLevel: "high",
  });
}