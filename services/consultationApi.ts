import type {
  ConsultationPayload,
  ConsultationSubmissionResponse,
} from "@/types/consultationPayload";

export async function submitConsultation(
  payload: ConsultationPayload
): Promise<ConsultationSubmissionResponse> {
  /**
   * Sprint 1
   *
   * Temporary implementation.
   *
   * Sprint 2:
   * Replace with Spring Boot API.
   */

  console.group(
    "Consultation Payload"
  );

  console.log(payload);

  console.groupEnd();

  return {
    success: true,

    referenceNumber:
      "VK-TEMP-000001",
  };
}