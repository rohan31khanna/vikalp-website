import { createPreparation } from "../common/createPreparation";

export function getConsumerProductsPreparation() {
  return createPreparation({
    summary: [
      "You are seeking legal guidance regarding a consumer matter involving a product, purchase or related after-sales service.",
      "Your responses indicate that the product, transaction records and communications with the seller or service provider may be important for assessing the matter.",
      "The consultation will focus on understanding the purchase, the issue experienced and the available consumer remedies."
    ],

    documents: [
      "Purchase Invoice / Bill",
      "Warranty or Guarantee Documents (if applicable)",
      "Product Order / Delivery Details",
      "Photographs or Videos of the Product (if relevant)",
      "Emails, Messages or Communication with the Seller / Platform",
      "Refund, Replacement or Repair Records (if applicable)",
      "Payment / Transaction Records",
      "Terms & Conditions or Product Documents (if available)",
      "Consumer Complaint or Legal Notice (if any)",
      "Any Other Relevant Documents"
    ],

    discussionPoints: [
      "Details of the product and purchase",
      "Nature of the defect, deficiency or problem",
      "Date of purchase and delivery",
      "Communication with the seller, manufacturer or service provider",
      "Warranty, replacement, repair or refund history",
      "Financial loss or other inconvenience suffered",
      "Current status of the complaint or dispute",
      "Any applicable response or limitation concerns",
      "Immediate legal concerns"
    ],

    consultationFocus: [
      "Reviewing the purchase and supporting documents",
      "Understanding the nature of the consumer grievance",
      "Assessing the available consumer remedies",
      "Reviewing communications and complaint history",
      "Discussing appropriate legal options and next steps"
    ],

    urgencyLevel: "medium",
  });
}