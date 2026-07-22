"use client";

import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface PracticeFAQsProps {
  faqs: FAQ[];
}

export default function PracticeFAQs({
  faqs,
}: PracticeFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-light py-20">
      <Container>

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#081420]">
            Common Questions
          </h2>

          <div className="mt-12 space-y-5">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-[#081420]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}