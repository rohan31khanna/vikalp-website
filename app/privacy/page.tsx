import type { Metadata } from "next";

import BackToHomeButton from "@/components/ui/BackToHomeButton";

export const metadata: Metadata = {
  title: "Privacy Policy | VIKALP Advocates & Legal Consultants",
  description:
    "Read the Privacy Policy of VIKALP Advocates & Legal Consultants.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Legal Information
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="leading-8 text-slate-700">
            VIKALP Advocates & Legal Consultants is committed to protecting the
            privacy and confidentiality of information shared with us through
            this website.
          </p>

          <p className="mt-6 leading-8 text-slate-700">
            A comprehensive Privacy Policy will be published before the official
            launch of the website.
          </p>

          <div className="mt-10">
            <BackToHomeButton />
          </div>
        </div>
      </section>
    </main>
  );
}