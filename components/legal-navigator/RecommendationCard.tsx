"use client";

import type { RecommendationNode } from "@/types/legalNavigator";
import type { WorkflowAnswers } from "@/types/workflowAnswers";

import { generatePreparation } from "@/lib/legal-navigator/generatePreparation";
import { generatePreparationSummary } from "@/lib/legal-navigator/generatePreparationSummary";

import SummarySection from "@/components/legal-navigator/SummarySection";

interface RecommendationCardProps {
  recommendation: RecommendationNode;

  workflowAnswers: WorkflowAnswers;

  onLearnMore: () => void;

  onContact: () => void;
}

export default function RecommendationCard({
  recommendation,
  workflowAnswers,
  onLearnMore,
  onContact,
}: RecommendationCardProps) {
  const preparationSummary =
    generatePreparationSummary(workflowAnswers);

  const preparation =
    generatePreparation(workflowAnswers);

console.log("WORKFLOW ANSWERS DEBUG:", workflowAnswers);
console.log("PRACTICE AREA DEBUG:", workflowAnswers.practiceArea);
console.log("MATTER DEBUG:", workflowAnswers.matter);
console.log("PREPARATION DEBUG:", preparation);

  const documents =
    preparation?.documents ?? [];

  const discussionPoints =
    preparation?.discussionPoints ?? [];

  const consultationFocus =
    preparation?.consultationFocus ?? [];

  return (
    <section
      aria-labelledby="navigator-recommendation"
      className="w-full space-y-5 sm:space-y-6"
    >
      {/* =========================================================
          COMPLETION + INTRO
          ========================================================= */}

      <div className="space-y-3">
        {/* Completion indicator */}

        <div
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-emerald-200
            bg-emerald-50
            px-3
            py-1
            text-[0.72rem]
            font-semibold
            tracking-wide
            text-emerald-800
            sm:px-3.5
            sm:text-xs
          "
        >
          <span
            aria-hidden="true"
            className="text-[0.8rem]"
          >
            ✓
          </span>

          Guided Discovery Complete
        </div>

        <div>
          <h2
            id="navigator-recommendation"
            className="
              max-w-3xl
              font-serif
              text-[1.7rem]
              font-semibold
              leading-[1.14]
              tracking-[-0.015em]
              text-slate-900

              sm:text-3xl
              lg:text-[2.05rem]
            "
          >
            Your Personalised Consultation
            Preparation is Ready
          </h2>

          <p
            className="
              mt-2.5
              max-w-3xl
              text-[0.9rem]
              leading-6
              text-slate-600

              sm:mt-3
              sm:text-base
              sm:leading-7
            "
          >
            Based on the information you've shared during
            Guided Discovery, we've prepared a personalised
            consultation brief to help you understand the
            next steps and enable our legal team to prepare
            before your first discussion.
          </p>

          <p
            className="
              mt-2
              text-[0.82rem]
              font-medium
              leading-5
              text-slate-500
            "
          >
            Please review the information below before
            continuing.
          </p>
        </div>
      </div>

      {/* =========================================================
          PREPARATION READY
          ========================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-emerald-200
          bg-emerald-50/80
          p-4

          sm:p-5
        "
      >
        <div className="flex items-start gap-3.5">
          <div
            aria-hidden="true"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-white
              text-xl
              shadow-sm
              ring-1
              ring-emerald-100

              sm:h-11
              sm:w-11
              sm:text-2xl
            "
          >
            🛡️
          </div>

          <div className="min-w-0">
            <h3
              className="
                text-[0.96rem]
                font-semibold
                leading-5
                text-slate-900

                sm:text-lg
                sm:leading-6
              "
            >
              Your Consultation Preparation Has Been
              Organised
            </h3>

            <p
              className="
                mt-1.5
                text-[0.8rem]
                leading-5
                text-slate-600

                sm:mt-2
                sm:text-sm
                sm:leading-6
              "
            >
              Your Guided Discovery responses have been
              organised into a structured consultation brief.
              Your assigned legal team can review this
              information before your initial discussion,
              helping make your consultation more focused and
              efficient.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          RECOMMENDED PRACTICE AREA
          ========================================================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-amber-200
          bg-gradient-to-br
          from-amber-50
          via-white
          to-white
          p-5
          shadow-[0_4px_18px_rgba(15,23,42,0.04)]

          sm:p-6
        "
      >
        {/* Subtle accent */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            bg-amber-500/80
          "
        />

        <p
          className="
            text-[0.68rem]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-amber-700

            sm:text-xs
          "
        >
          Recommended Practice Area
        </p>

        <h3
          className="
            mt-1.5
            font-serif
            text-[1.45rem]
            font-semibold
            leading-tight
            tracking-[-0.01em]
            text-slate-900

            sm:text-2xl
          "
        >
          {recommendation.title}
        </h3>

        <p
          className="
            mt-2
            text-[0.82rem]
            leading-5
            text-slate-600

            sm:mt-3
            sm:text-sm
            sm:leading-6
          "
        >
          {recommendation.description}
        </p>
      </div>

      {/* =========================================================
          RESPONSE SUMMARY
          ========================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50/70
          p-4

          sm:p-5
        "
      >
        <div>
          <h3
            className="
              text-[0.98rem]
              font-semibold
              text-slate-900

              sm:text-lg
            "
          >
            Summary of Your Responses
          </h3>

          <p
            className="
              mt-1.5
              text-[0.8rem]
              leading-5
              text-slate-600

              sm:text-sm
              sm:leading-6
            "
          >
            This consultation preparation summarises the
            information you shared during Guided Discovery
            and highlights the documents, discussion points
            and practical considerations that may help you
            prepare for your initial consultation.
          </p>
        </div>

        <dl
          className="
            mt-4
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
          "
        >
          {preparationSummary.map(
            (item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  flex-col
                  gap-1.5
                  px-3.5
                  py-3

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-4
                  sm:px-4

                  ${
                    index !==
                    preparationSummary.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }
                `}
              >
                <dt
                  className="
                    text-[0.76rem]
                    font-medium
                    text-slate-500

                    sm:text-sm
                  "
                >
                  {item.title}
                </dt>

                <dd
                  className="
                    text-[0.88rem]
                    font-semibold
                    leading-5
                    text-slate-900

                    sm:max-w-[60%]
                    sm:text-right
                  "
                >
                  {item.value}
                </dd>
              </div>
            )
          )}
        </dl>
      </div>

      {/* =========================================================
          PREPARATION DETAILS
          ========================================================= */}
      <div className="space-y-2.5 sm:space-y-3">
        <SummarySection
          title="Key Insights From Your Responses"
          icon="📋"
          items={preparation?.summary ?? []}
          theme="white"
        />

        <SummarySection
          title="Helpful Documents to Keep Ready (If Available)"
          icon="📄"
          items={documents}
          theme="slate"
        />

        <SummarySection
          title="Topics Likely to Be Discussed"
          icon="💬"
          items={discussionPoints}
          theme="white"
        />

        <SummarySection
          title="Consultation Focus"
          icon="🎯"
          items={consultationFocus}
          theme="amber"
        />
      </div>

      {/* =========================================================
          CONTACT DETAILS EXPLANATION
          ========================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-emerald-200
          bg-emerald-50/70
          p-4

          sm:p-5
        "
      >
        <h3
          className="
            text-[0.95rem]
            font-semibold
            text-slate-900

            sm:text-base
          "
        >
          Why We Ask for Your Contact Details
        </h3>

        <p
          className="
            mt-1.5
            text-[0.8rem]
            leading-5
            text-slate-600

            sm:text-sm
            sm:leading-6
          "
        >
          Your Guided Discovery responses, consultation
          preparation and contact details will be securely
          shared with our legal team. Reviewing this
          information in advance enables the assigned lawyer
          to better understand your matter before the first
          discussion, making your consultation more focused
          and efficient.
        </p>
      </div>

      {/* =========================================================
          LEGAL DISCLAIMER
          ========================================================= */}

      <div
        className="
          rounded-xl
          border
          border-amber-200
          bg-amber-50/50
          p-3.5

          sm:p-4
        "
      >
        <h3
          className="
            text-[0.8rem]
            font-semibold
            text-slate-900

            sm:text-sm
          "
        >
          Legal Disclaimer
        </h3>

        <p
          className="
            mt-1.5
            text-[0.76rem]
            leading-5
            text-slate-600

            sm:text-sm
            sm:leading-6
          "
        >
          This consultation preparation has been generated
          solely from the information you provided during
          Guided Discovery. It is intended to help you prepare
          for an initial consultation and should not be
          interpreted as legal advice or as creating an
          advocate–client relationship.
        </p>
      </div>

      {/* =========================================================
          WHAT HAPPENS NEXT
          ========================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-4

          sm:p-5
        "
      >
        <h3
          className="
            text-[0.95rem]
            font-semibold
            text-slate-900

            sm:text-base
          "
        >
          What Happens Next?
        </h3>

        <ul
          className="
            mt-2.5
            space-y-1.5
            text-[0.8rem]
            leading-5
            text-slate-600

            sm:text-sm
            sm:leading-6
          "
        >
          <li className="flex gap-2">
            <span
              aria-hidden="true"
              className="shrink-0 font-semibold text-emerald-600"
            >
              ✓
            </span>
            <span>
              Review your Guided Discovery Summary.
            </span>
          </li>

          <li className="flex gap-2">
            <span
              aria-hidden="true"
              className="shrink-0 font-semibold text-emerald-600"
            >
              ✓
            </span>
            <span>
              Submit your consultation request.
            </span>
          </li>

          <li className="flex gap-2">
            <span
              aria-hidden="true"
              className="shrink-0 font-semibold text-emerald-600"
            >
              ✓
            </span>
            <span>
              Our legal team reviews your responses before
              contacting you.
            </span>
          </li>

          <li className="flex gap-2">
            <span
              aria-hidden="true"
              className="shrink-0 font-semibold text-emerald-600"
            >
              ✓
            </span>
            <span>
              Your consultation begins with a better
              understanding of your matter.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}