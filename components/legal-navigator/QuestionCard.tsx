"use client";

import { useEffect, useRef } from "react";

import type {
  NavigatorOption,
  QuestionNode,
} from "@/types/legalNavigator";

interface QuestionCardProps {
  question: QuestionNode;
  onSelect: (option: NavigatorOption) => void;
}

export default function QuestionCard({
  question,
  onSelect,
}: QuestionCardProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [question.id]);

  /**
   * The opening screen uses a compact 2 × 2 layout.
   *
   * Subsequent questions use a refined single-column layout
   * designed for quick scanning and minimal scrolling,
   * especially on mobile.
   */
  const isStartScreen = question.id === "start";

  return (
    <section
      aria-labelledby={`navigator-question-${question.id}`}
      className="w-full"
    >
      {/* =====================================================
          QUESTION HEADER
      ===================================================== */}

      <div
        className={
          isStartScreen
            ? "mb-5 sm:mb-6"
            : "mb-6 sm:mb-7"
        }
      >
        <h2
          ref={headingRef}
          id={`navigator-question-${question.id}`}
          tabIndex={-1}
          className={`
            max-w-4xl
            font-serif
            font-medium
            tracking-[-0.02em]
            text-slate-950
            outline-none

            ${
              isStartScreen
                ? `
                  text-[1.65rem]
                  leading-[1.15]

                  sm:text-[2rem]
                  sm:leading-[1.15]

                  md:text-[2.2rem]
                `
                : `
                  text-[1.6rem]
                  leading-[1.17]

                  sm:text-[1.95rem]
                  sm:leading-[1.15]

                  md:text-[2.2rem]
                `
            }
          `}
        >
          {question.title}
        </h2>

        {question.subtitle && (
          <p
            className={`
              max-w-3xl
              text-slate-600

              ${
                isStartScreen
                  ? `
                    mt-2
                    text-[0.9rem]
                    leading-5

                    sm:mt-2.5
                    sm:text-[0.98rem]
                    sm:leading-6
                  `
                  : `
                    mt-2.5
                    text-[0.9rem]
                    leading-[1.4rem]

                    sm:mt-2.5
                    sm:text-[0.98rem]
                    sm:leading-6
                  `
              }
            `}
          >
            {question.subtitle}
          </p>
        )}
      </div>

      {/* =====================================================
          OPTIONS
      ===================================================== */}

      <div
        role="list"
        aria-label="Available options"
        className={
          isStartScreen
            ? "grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3"
            : "grid gap-2 sm:gap-2.5"
        }
      >
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option)}
            className={`
              group
              relative
              w-full
              overflow-hidden
              border
              border-slate-200/90
              bg-white
              text-left

              shadow-[0_1px_2px_rgba(15,23,42,0.025)]

              transition-all
              duration-200
              ease-out

              hover:-translate-y-[1px]
              hover:border-amber-300
              hover:shadow-[0_7px_20px_rgba(15,23,42,0.055)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-amber-500
              focus-visible:ring-offset-2

              active:translate-y-0
              active:scale-[0.995]

              ${
                isStartScreen
                  ? `
                    min-h-[112px]
                    rounded-2xl
                    px-3.5
                    py-3

                    sm:min-h-[116px]
                    sm:px-4
                    sm:py-3.5
                  `
                  : `
                    min-h-[82px]
                    rounded-xl
                    px-3
                    py-2.5

                    sm:min-h-[88px]
                    sm:rounded-2xl
                    sm:px-4
                    sm:py-3
                  `
              }
            `}
          >
            {/* =================================================
                LEFT ACCENT
            ================================================= */}

            <span
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                left-0
                w-[3px]
                bg-transparent

                transition-colors
                duration-200

                group-hover:bg-amber-500
              "
            />

            <span
              className={
                isStartScreen
                  ? "flex h-full items-center gap-3 sm:gap-3.5"
                  : "flex items-center gap-3 sm:gap-3.5"
              }
            >
              {/* =================================================
                  ICON
              ================================================= */}

              <span
                aria-hidden="true"
                className={`
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-amber-50
                  leading-none
                  ring-1
                  ring-amber-100

                  transition-all
                  duration-200
                  ease-out

                  group-hover:scale-[1.035]
                  group-hover:bg-amber-100
                  group-hover:ring-amber-200

                  ${
                    isStartScreen
                      ? `
                        h-10
                        w-10
                        text-[1.15rem]

                        sm:h-11
                        sm:w-11
                        sm:rounded-[0.8rem]
                        sm:text-[1.25rem]
                      `
                      : `
                        h-10
                        w-10
                        text-[1.15rem]

                        sm:h-11
                        sm:w-11
                        sm:rounded-[0.8rem]
                        sm:text-xl
                      `
                  }
                `}
              >
                {option.icon}
              </span>

              {/* =================================================
                  TEXT
              ================================================= */}

              <span className="min-w-0 flex-1">
                <span
                  className={`
                    block
                    font-semibold
                    leading-5
                    text-slate-900

                    transition-colors
                    duration-200

                    group-hover:text-slate-950

                    ${
                      isStartScreen
                        ? `
                          text-[0.92rem]

                          sm:text-[0.98rem]
                          sm:leading-5
                        `
                        : `
                          text-[0.9rem]

                          sm:text-[0.96rem]
                          sm:leading-5
                        `
                    }
                  `}
                >
                  {option.label}
                </span>

                <span
                  className={`
                    block
                    text-slate-600

                    ${
                      isStartScreen
                        ? `
                          mt-1
                          text-[0.74rem]
                          leading-[1.15rem]

                          sm:text-[0.79rem]
                          sm:leading-[1.2rem]
                        `
                        : `
                          mt-0.5
                          text-[0.72rem]
                          leading-[1.12rem]

                          sm:mt-1
                          sm:text-[0.8rem]
                          sm:leading-[1.25rem]
                        `
                    }
                  `}
                >
                  {option.description}
                </span>
              </span>

              {/* =================================================
                  ARROW
              ================================================= */}

              <span
                aria-hidden="true"
                className={`
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-50
                  text-slate-400

                  transition-all
                  duration-200
                  ease-out

                  group-hover:translate-x-1
                  group-hover:bg-amber-50
                  group-hover:text-amber-700

                  ${
                    isStartScreen
                      ? `
                        h-7
                        w-7
                        text-sm

                        sm:h-8
                        sm:w-8
                        sm:text-base
                      `
                      : `
                        h-7
                        w-7
                        text-sm

                        sm:h-8
                        sm:w-8
                        sm:text-base
                      `
                  }
                `}
              >
                <span className="-translate-y-px">→</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* =====================================================
          OPENING-SCREEN REASSURANCE
      ===================================================== */}

      {isStartScreen && (
        <p
          className="
            mt-3
            text-center
            text-[0.68rem]
            leading-5
            text-slate-400

            sm:mt-4
            sm:text-[0.72rem]
          "
        >
          <span className="font-medium text-slate-400">
            Private &amp; guided
          </span>

          <span
            aria-hidden="true"
            className="mx-2 text-slate-300"
          >
            ·
          </span>

          This process does not provide legal advice.
        </p>
      )}
    </section>
  );
}