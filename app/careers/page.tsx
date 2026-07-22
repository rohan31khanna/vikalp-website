import type { Metadata } from "next";
import BackToHomeButton from "@/components/ui/BackToHomeButton";

export const metadata: Metadata = {
  title: "Careers | VIKALP Advocates & Legal Consultants",
  description:
    "Explore career opportunities at VIKALP Advocates & Legal Consultants.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Join Our Team
          </p>

          <h1 className="mt-1 text-5xl font-bold text-white">
            Careers
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6">
        <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Build Your Legal Career with VIKALP
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            We are always interested in connecting with talented legal
            professionals, interns, researchers, and administrative
            professionals who are passionate about delivering high-quality legal
            services.
          </p>

          <p className="mt-6 leading-8 text-slate-700">
            If you would like to be considered for future opportunities, please
            send your résumé along with a brief cover letter to:
          </p>

          <a
            href="mailto:careers@vikalplegal.com"
            className="mt-6 inline-block font-semibold text-amber-600 hover:text-amber-500"
          >
            careers@vikalplegal.com
          </a>

          <div className="mt-10">
            <BackToHomeButton />
          </div>
        </div>
      </section>
    </main>
  );
}