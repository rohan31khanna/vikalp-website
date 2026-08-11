"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ConsultationDetails from "./ConsultationDetails";
import NavigatorModal from "./NavigatorModal";
import QuestionCard from "./QuestionCard";
import RecommendationCard from "./RecommendationCard";
import SuccessRenderer from "./SuccessRenderer";
import { useNavigatorContext } from "./NavigatorProvider";
import { buildConsultationPayload } from "@/lib/legal-navigator/buildConsultationPayload";
import { submitConsultation } from "@/services/consultationApi";
import type { ConsultationRequestFormData } from "@/types/consultation";
import LeadCapture from "./LeadCapture";

const MODAL_CONTENT = {
  question: {
    title: "Guided Discovery",
    subtitle:
      "Answer a few questions so we can understand your legal matter.",
  },

  preparation: {
    title: "Consultation Preparation Brief",
    subtitle:
      "Review your personalised consultation preparation before continuing.",
  },

  lead: {
    title: "Continue Your Consultation",
    subtitle:
      "Provide your contact details to unlock your consultation request and help our legal team prepare before contacting you.",
  },

  request: {
    title: "Consultation Details",
    subtitle:
      "Provide a few additional details to help us prepare for your consultation.",
  },

  success: {
    title: "Request Received",
    subtitle:
      "Your consultation request has been received successfully.",
  },
} as const;

export default function LegalNavigator() {
  const router = useRouter();

  const [showExitConfirmation, setShowExitConfirmation] =
    useState(false);

  const [referenceNumber, setReferenceNumber] =
  useState<string | null>(null);

  const {
    isOpen,
    close,

    view,

    goNext,
    goBack,
    goToLead,
    goToRequest,
    goToSuccess,

    history,

    workflowAnswers,

    leadDetails,

    setLeadDetails,

    question,
    recommendation,

    progress,
  } = useNavigatorContext();

  /*
   * Exit confirmation is only required once the visitor
   * has completed Guided Discovery and entered the
   * consultation preparation/request flow.
   *
   * Questions can be exited directly.
   */
  const canConfirmExit =
    view === "preparation" ||
    view === "lead" ||
    view === "request";

  /*
   * Close / exit request from NavigatorModal.
   *
   * Before consultation preparation:
   * close immediately.
   *
   * During consultation preparation/request:
   * show confirmation first.
   */
  const handleRequestClose = () => {
    if (!canConfirmExit) {
      setShowExitConfirmation(false);
      close();
      return;
    }

    setShowExitConfirmation(true);
  };

  /*
   * User chooses to stay inside the consultation.
   */
  const handleCancelExit = () => {
    setShowExitConfirmation(false);
  };

  /*
   * User confirms that they want to leave.
   */
  const handleConfirmExit = () => {
    setShowExitConfirmation(false);
    close();
  };

  /*
   * Make sure stale confirmation state never survives
   * after the Navigator has been closed.
   */
  useEffect(() => {
    if (!isOpen) {
      setShowExitConfirmation(false);
    }
  }, [isOpen]);

  /*
   * View the relevant practice area.
   *
   * This is an intentional navigation action, so we
   * close the Navigator directly without showing the
   * exit confirmation.
   */
  const handleViewPracticeArea = () => {
    if (!recommendation) {
      return;
    }

    setShowExitConfirmation(false);
    close();

    router.push(
      `/practice-areas/${recommendation.slug}`
    );
  };

  /*
   * Submit the final consultation request.
   */
  const handleConsultationRequest = async (
    form: ConsultationRequestFormData
  ) => {
    if (!recommendation) {
      return;
    }

    try {
      const payload = buildConsultationPayload({
        recommendation,
        workflowAnswers,
        leadDetails,
        consultationDetails: form,
      });

      const response = await submitConsultation(payload);

setReferenceNumber(response.referenceNumber);
setShowExitConfirmation(false);
goToSuccess();
    } catch (error) {
      console.error(
        "Unable to submit consultation.",
        error
      );

      alert(
        "Unable to submit your consultation request. Please try again."
      );
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <NavigatorModal
      open={isOpen}
onClose={view === "success" ? close : handleRequestClose}
      showExitConfirmation={showExitConfirmation}
      onCancelExit={handleCancelExit}
      onConfirmExit={handleConfirmExit}
      stepTitle={MODAL_CONTENT[view].title}
      stepSubtitle={MODAL_CONTENT[view].subtitle}
      showProgress={view === "question"}
      progress={{
        current: progress + 1,
        total: 5,
      }}
      canGoBack={
  view !== "success" &&
  (history.length > 0 || view !== "question")
}
      onBack={goBack}
      footer={
  view === "preparation" && recommendation ? (
    <div className="flex w-full gap-3">
      <button
        type="button"
        onClick={goToLead}
        className="
          inline-flex
          flex-1
          items-center
          justify-center
          rounded-xl
          border
          border-slate-300
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-slate-800
          shadow-sm
          transition-all
          duration-200
          hover:border-slate-400
          hover:bg-slate-50
          hover:shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500/30
        "
      >
        Continue with My Consultation
      </button>

      <button
        type="button"
        onClick={handleViewPracticeArea}
        className="
          inline-flex
          flex-1
          items-center
          justify-center
          rounded-xl
          bg-amber-600
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-md
          transition-all
          duration-200
          hover:bg-amber-700
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500/30
        "
      >
        View Practice Area
      </button>
    </div>
  ) : null
}
    >
      <div className="space-y-6">
        {/* Question */}

        {view === "question" &&
          question && (
            <QuestionCard
              question={question}
              onSelect={(option) =>
                goNext(option)
              }
            />
          )}

        {/* Consultation Preparation */}

        {view === "preparation" &&
          recommendation && (
            <RecommendationCard
              recommendation={recommendation}
              workflowAnswers={workflowAnswers}
              onLearnMore={
                handleViewPracticeArea
              }
              onContact={goToLead}
            />
          )}

        {/* Lead Capture */}

        {view === "lead" && (
          <LeadCapture
            leadDetails={leadDetails}
            setLeadDetails={setLeadDetails}
            onContinue={goToRequest}
          />
        )}

        {/* Consultation Details */}

        {view === "request" && (
          <ConsultationDetails
            onSubmit={
              handleConsultationRequest
            }
          />
        )}

        {/* Success */}

        {view === "success" && (
  <SuccessRenderer
    referenceNumber={referenceNumber ?? "VK-TEMP-000001"}
    email={leadDetails.email}
  />
)}
      </div>
    </NavigatorModal>
  );
}