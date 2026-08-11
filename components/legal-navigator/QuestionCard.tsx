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

  return (
    <section
      aria-labelledby="navigator-question"
      className="w-full"
    >
      {/* Question */}
      <div className="mb-5 sm:mb-7">
        <h2
          id="navigator-question"
          ref={headingRef}
          tabIndex={-1}
          className="
            max-w-3xl
            text-[1.65rem]
            font-serif
            font-semibold
            leading-[1.15]
            tracking-[-0.015em]
            text-slate-900
            outline-none
            sm:text-3xl
            lg:text-[2.15rem]
          "
        >
          {question.title}
        </h2>

        {question.subtitle && (
          <p
            className="
              mt-2.5
              max-w-2xl
              text-[0.92rem]
              leading-6
              text-slate-600
              sm:mt-3
              sm:text-base
              sm:leading-7
            "
          >
            {question.subtitle}
          </p>
        )}
      </div>

      {/* Options */}
      <div
        role="list"
        aria-label="Available options"
        className="grid gap-2.5 sm:gap-3"
      >
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option)}
            className="
              group
              relative
              w-full
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3.5
              py-3.5
              text-left
              shadow-[0_1px_2px_rgba(15,23,42,0.03)]
              transition-all
              duration-200

              hover:-translate-y-[1px]
              hover:border-amber-400
              hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-amber-500
              focus-visible:ring-offset-2

              active:scale-[0.995]

              sm:rounded-2xl
              sm:px-4
              sm:py-4
            "
          >
            {/* Left Accent */}
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

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Icon */}
              <span
                aria-hidden="true"
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-amber-50
                  text-[1.35rem]
                  leading-none
                  ring-1
                  ring-amber-100
                  transition-transform
                  duration-200
                  group-hover:scale-[1.04]

                  sm:h-12
                  sm:w-12
                  sm:rounded-[0.85rem]
                  sm:text-2xl
                "
              >
                {option.icon}
              </span>

              {/* Text */}
              <span className="min-w-0 flex-1">
                <span
                  className="
                    block
                    text-[0.96rem]
                    font-semibold
                    leading-5
                    text-slate-900
                    transition-colors
                    duration-200
                    group-hover:text-amber-700
                    sm:text-base
                    sm:leading-6
                  "
                >
                  {option.label}
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[0.8rem]
                    leading-[1.3rem]
                    text-slate-600
                    sm:mt-1.5
                    sm:text-sm
                    sm:leading-5
                  "
                >
                  {option.description}
                </span>
              </span>

              {/* Arrow */}
              <span
                aria-hidden="true"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-50
                  text-base
                  text-slate-400
                  transition-all
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:bg-amber-50
                  group-hover:text-amber-700

                  sm:h-9
                  sm:w-9
                  sm:text-lg
                "
              >
                <span className="-translate-y-px">→</span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}