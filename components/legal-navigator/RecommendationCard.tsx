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
}: RecommendationCardProps) {
  const preparationSummary =
    generatePreparationSummary(workflowAnswers);

  const preparation =
    generatePreparation(workflowAnswers);

  const documents =
    preparation?.documents ?? [];

  const discussionPoints =
    preparation?.discussionPoints ?? [];

  const consultationFocus =
    preparation?.consultationFocus ?? [];

  return (
    <section
      aria-labelledby="navigator-recommendation"
      className="w-full space-y-4 sm:space-y-5"
    >
      {/* =========================================================
          COMPLETION + INTRO
          ========================================================= */}

      <div className="space-y-2.5">
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
            text-[0.68rem]
            font-semibold
            tracking-[0.04em]
            text-emerald-800
            sm:px-3.5
            sm:text-xs
          "
        >
          <span
            aria-hidden="true"
            className="text-[0.78rem]"
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
              text-[1.55rem]
              font-semibold
              leading-[1.14]
              tracking-[-0.015em]
              text-slate-950
              sm:text-[1.9rem]
              lg:text-[2.05rem]
            "
          >
            Your consultation preparation is ready.
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-[0.82rem]
              leading-[1.35rem]
              text-slate-600
              sm:mt-2.5
              sm:text-sm
              sm:leading-6
            "
          >
            We’ve organised your Guided Discovery responses
            into a preparation brief so your consultation can
            begin with a clearer understanding of your matter.
          </p>
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
          px-4
          py-4
          shadow-[0_4px_18px_rgba(15,23,42,0.04)]
          sm:px-5
          sm:py-5
        "
      >
        {/* Accent */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            left-0
            w-[3px]
            bg-amber-500
          "
        />

        <div className="pl-1">
          <p
            className="
              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-amber-700
              sm:text-[0.68rem]
            "
          >
            Recommended Practice Area
          </p>

          <h3
            className="
              mt-1
              font-serif
              text-[1.4rem]
              font-semibold
              leading-tight
              tracking-[-0.01em]
              text-slate-950
              sm:text-[1.65rem]
            "
          >
            {recommendation.title}
          </h3>

          <p
            className="
              mt-1.5
              max-w-3xl
              text-[0.78rem]
              leading-[1.3rem]
              text-slate-600
              sm:mt-2
              sm:text-sm
              sm:leading-5
            "
          >
            {recommendation.description}
          </p>
        </div>
      </div>

      {/* =========================================================
          RESPONSE SNAPSHOT
          ========================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50/60
          p-3.5
          sm:p-4.5
        "
      >
        <div>
          <h3
            className="
              font-serif
              text-[1rem]
              font-semibold
              text-slate-950
              sm:text-[1.1rem]
            "
          >
            Your Consultation Snapshot
          </h3>

          <p
            className="
              mt-1
              text-[0.76rem]
              leading-5
              text-slate-600
              sm:text-sm
            "
          >
            Here’s what we understood from your responses.
          </p>
        </div>

        <dl
          className="
            mt-3
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
          "
        >
          {preparationSummary.map((item, index) => (
            <div
              key={item.title}
              className={`
                px-3
                py-2.5
                sm:flex
                sm:items-center
                sm:justify-between
                sm:gap-4
                sm:px-3.5
                sm:py-3

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
                  text-[0.68rem]
                  font-medium
                  text-slate-500
                  sm:text-xs
                "
              >
                {item.title}
              </dt>

              <dd
                className="
                  mt-0.5
                  text-[0.8rem]
                  font-semibold
                  leading-5
                  text-slate-900
                  sm:mt-0
                  sm:max-w-[62%]
                  sm:text-right
                  sm:text-sm
                "
              >
                {item.value}
              </dd>
            </div>
          ))}
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
          WHY WE ASK FOR CONTACT DETAILS
          ========================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-emerald-200
          bg-emerald-50/60
          px-3.5
          py-3.5
          sm:px-4
          sm:py-4
        "
      >
        <h3
          className="
            text-[0.82rem]
            font-semibold
            text-slate-900
            sm:text-sm
          "
        >
          Why We Ask for Your Contact Details
        </h3>

        <p
          className="
            mt-1
            text-[0.74rem]
            leading-[1.25rem]
            text-slate-600
            sm:text-sm
            sm:leading-5
          "
        >
          Your Guided Discovery responses, consultation
          preparation and contact details will be securely
          shared with our legal team. Reviewing this
          information in advance helps the assigned lawyer
          understand your matter before the first discussion.
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
          bg-amber-50/40
          px-3
          py-3
          sm:px-3.5
          sm:py-3.5
        "
      >
        <h3
          className="
            text-[0.72rem]
            font-semibold
            text-slate-900
            sm:text-xs
          "
        >
          Legal Disclaimer
        </h3>

        <p
          className="
            mt-1
            text-[0.7rem]
            leading-[1.2rem]
            text-slate-600
            sm:text-xs
            sm:leading-5
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
          px-3.5
          py-3.5
          sm:px-4
          sm:py-4
        "
      >
        <h3
          className="
            text-[0.82rem]
            font-semibold
            text-slate-900
            sm:text-sm
          "
        >
          What Happens Next?
        </h3>

        <ul
          className="
            mt-2
            space-y-1.5
            text-[0.74rem]
            leading-5
            text-slate-600
            sm:text-sm
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
              Review your Guided Discovery summary.
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