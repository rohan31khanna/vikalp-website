"use client";

import Link from "next/link";

import DisclaimerContent from "@/components/legal/DisclaimerContent";
import ScrollToTopOnMount from "@/components/ui/ScrollToTopOnMount";

export default function DisclaimerPage() {
  return (
    <>
      

      <main className="min-h-screen bg-stone-50">
<section className="mx-auto max-w-[860px] px-6 pt-8 pb-10 lg:pt-10 lg:pb-12">
            <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl">

            {/* Header */}

            <div className="bg-stone-50 px-8 pt-3 pb-3 text-center md:px-10">

              <h1 className="font-heading text-4xl font-semibold tracking-[0.18em] text-[#7A5A28] md:text-5xl">
                VIKALP
              </h1>

              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-gray-500">
                Advocates &amp; Legal Consultants
              </p>

              <div className="mx-auto mt-4 h-px w-16 bg-primary/30" />

              <h2 className="mt-3 font-heading text-3xl font-semibold text-[#7A5A28]">
                Disclaimer
              </h2>

            </div>

            {/* Body */}

            <div className="px-8 py-6 md:px-12">
              <DisclaimerContent />
            </div>

            {/* Footer */}

<div className="border-t border-primary/10 bg-stone-50 px-8 py-4 md:px-12">
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12">

                <Link
                  href="/"
                  className="font-medium text-[#7A5A28] transition hover:text-[#5F431D] hover:underline"
                >
                  ← Back to Home
                </Link>

                <Link
                  href="/#contact"
                  className="rounded-full bg-[#7A5A28] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5F431D]"
                >
                  Contact the Firm
                </Link>

              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}