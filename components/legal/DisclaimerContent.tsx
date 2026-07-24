import { ShieldCheck } from "lucide-react";
import { DISCLAIMER } from "@/data/disclaimer";

type DisclaimerContentProps = {
  compact?: boolean;
};

export default function DisclaimerContent({
  compact = false,
}: DisclaimerContentProps) {
  const points = DISCLAIMER.acknowledgements;

  return (
  <div
    className={`mx-auto ${
      compact ? "max-w-none space-y-4" : "max-w-[760px] space-y-6"
    }`}
  >
      {/* Intro */}

      <p
        className={`text-gray-700 ${
          compact
            ? "text-[15px] leading-7"
            : "text-base leading-8"
        }`}
      >
        {DISCLAIMER.intro}
      </p>

      {/* Acknowledgements */}

<div className={compact ? "space-y-2.5" : "space-y-3"}>
            {points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3"
          >
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#7A5A28]"
            />

<p className="text-gray-700 text-[15px] leading-6">
                  {point}
            </p>
          </div>
        ))}
      </div>

      {/* Full Disclaimer Only */}

      {!compact && (
        <>
        <div className="my-4 h-px bg-primary/10" />
          <div className="mt-4 border-t border-primary/10 pt-4">

  <h2 className="mb-4 font-heading text-2xl font-semibold text-[#7A5A28]">
    Additional Information
  </h2>

            <div className="mt-4 space-y-3 text-gray-700">

              <p className="leading-9">
                The information contained on this website is
                intended solely for general informational
                purposes and should not be construed as legal
                advice, legal opinion or professional
                recommendation.
              </p>

              <p className="leading-9">
                Accessing this website, communicating with the
                Firm or submitting any enquiry through this
                website does not create an advocate–client
                relationship.
              </p>

              <p className="leading-9">
                Every reasonable effort has been made to ensure
                that the information published on this website
                is accurate. However, the Firm makes no
                warranties regarding completeness, accuracy or
                continued availability.
              </p>

              <p className="leading-9">
                Visitors are encouraged to obtain independent
                legal advice before acting upon any information
                available on this website.
              </p>

            </div>

          </div>
          <div className="border-t border-primary/10 pt-5">

            <p className="text-sm leading-6 text-gray-500">
              {DISCLAIMER.footer}
            </p>

          </div>
        </>
      )}
    </div>
  );
}