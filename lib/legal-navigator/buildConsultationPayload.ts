import type { RecommendationNode } from "@/types/legalNavigator";
import type {
  ConsultationPayload,
  DiscoveryAnswerPayload,
} from "@/types/consultationPayload";
import type { ConsultationRequestFormData } from "@/types/consultation";
import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { LeadDetails } from "@/types/lead";
import { nodes } from "@/data/legalNavigator/nodes";

import { generatePreparation } from "./generatePreparation";

interface BuildPayloadParams {
  recommendation: RecommendationNode;

  workflowAnswers: WorkflowAnswers;

  leadDetails: LeadDetails;

  consultationDetails: ConsultationRequestFormData;
}

export function buildConsultationPayload({
  recommendation,
  workflowAnswers,
  leadDetails,
  consultationDetails,
}: BuildPayloadParams): ConsultationPayload {
  const preparation =
    generatePreparation(workflowAnswers);

  if (!preparation) {
    throw new Error(
      "Unable to generate consultation preparation."
    );
  }

  const discoveryAnswers: DiscoveryAnswerPayload[] =
  Object.entries(workflowAnswers.answers).map(
    ([questionId, answer]) => {
      const node =
        nodes[
          questionId as keyof typeof nodes
        ];

      return {
        questionId,

        question:
          node?.type === "question"
            ? node.title
            : questionId,

        optionId: answer.id,

        answer: answer.label,
      };
    }
  );

  return {
    contact: {
      fullName:
        leadDetails.fullName,

      phoneNumber:
        leadDetails.mobileNumber,

      email:
        leadDetails.email,

      city:
        leadDetails.city,

      preferredContactMethod:
        consultationDetails.preferredContactMethod,

      preferredContactTime:
        consultationDetails.preferredContactTime,

      additionalInformation:
        consultationDetails.additionalInformation,
    },

    discoveryAnswers,

    recommendation: {
      practiceArea:
        recommendation.contactValue,

      title:
        recommendation.title,

      slug:
        recommendation.slug,
    },

    preparation: {
      summary:
        preparation.summary,

      consultationBenefits:
        preparation.consultationBenefits,

      documents:
        preparation.documents,

      discussionPoints:
        preparation.discussionPoints,

      consultationFocus:
        preparation.consultationFocus,

      disclaimer:
        preparation.disclaimer,

      estimatedDuration:
        preparation.estimatedDuration,

      urgencyLevel:
        preparation.urgencyLevel,
    },

    metadata: {
      source: "guided-discovery",

      submittedAt:
        new Date().toISOString(),

      version: "1.0.0",
    },
  };
}