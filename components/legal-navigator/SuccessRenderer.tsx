"use client";

import { useRouter } from "next/navigation";

interface SuccessRendererProps {
  referenceNumber?: string;
  email?: string;
}

export default function SuccessRenderer({
  referenceNumber = "VK-TEMP-000001",
  email,
}: SuccessRendererProps) {
  const router = useRouter();

  return (
    <section className="space-y-5">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-emerald-100
            text-4xl
            text-emerald-600
          "
          aria-hidden="true"
        >
          ✓
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <h2
          id="consultation-success-title"
          className="
            font-serif
            text-3xl
            leading-tight
            text-slate-900
            sm:text-4xl
          "
        >
          Consultation Request Received
        </h2>

        <p className="mt-3 text-base leading-7 text-slate-600">
          Thank you for completing Guided Discovery and submitting your
          consultation request.
        </p>

        <p className="mt-2 text-base leading-7 text-slate-600">
          Your consultation preparation and contact details have been
          successfully received by VIKALP.
        </p>
      </div>

      {/* Reference Number */}
      <div
        className="
          rounded-2xl
          border
          border-amber-200
          bg-amber-50
          px-5
          py-5
          text-center
          sm:px-6
        "
      >
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-amber-700
          "
        >
          Reference Number
        </p>

        <p
          className="
            mt-1
            text-2xl
            font-bold
            tracking-wider
            text-slate-900
            sm:text-3xl
          "
        >
          {referenceNumber}
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Please keep this reference number for future communication.
        </p>
      </div>


    {!email?.trim() && (
  <div
    className="
      rounded-2xl
      border
      border-emerald-200
      bg-emerald-50
      px-5
      py-5
      sm:px-6
    "
  >
    <h3 className="font-serif text-lg text-slate-900 sm:text-xl">
      Receive Your Detailed Summary
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base">
  Enter your email address to receive your consultation reference
  number and detailed consultation summary by email.
</p>

    {/* Email input will be connected to the backend in the next phase */}
    <div className="mt-4">
      <input
        type="email"
        placeholder="Enter your email address"
        autoComplete="email"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-base
          text-slate-900
          placeholder:text-slate-400
          focus:border-amber-500
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500/20
        "
      />
    </div>

    <p className="mt-2 text-xs leading-5 text-slate-500">
This is optional. You may continue without providing an email address.
    </p>
  </div>
)}

      {/* What Happens Next */}
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-5
          sm:px-6
        "
      >
        <h3 className="font-serif text-lg text-slate-900 sm:text-xl">
          What Happens Next?
        </h3>

        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
          <li>
            ✓ Our legal team will review your Guided Discovery responses and
            consultation preparation.
          </li>

          <li>
            ✓ If additional information is required, we will contact you
            before scheduling a consultation.
          </li>

          <li>
            ✓ We will contact you using your preferred contact method wherever
            possible.
          </li>

          <li>
            ✓ Your consultation will begin with a better understanding of your
            matter, helping make the discussion more focused and productive.
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div
        className="
          rounded-2xl
          border
          border-blue-200
          bg-blue-50
          px-5
          py-4
          sm:px-6
        "
      >
        <h3 className="font-serif text-lg text-slate-900">
          Important Information
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base">
          Submission of this consultation request does not create an
          advocate–client relationship. Such a relationship is established
          only after the matter is formally accepted in accordance with
          applicable professional and legal requirements.
        </p>
      </div>

      {/* Return */}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="
            w-full
            rounded-xl
            bg-amber-600
            px-6
            py-3.5
            text-base
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:bg-amber-700
            hover:shadow-lg
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-amber-500
            focus-visible:ring-offset-2
          "
        >
          Return to Website
        </button>
      </div>
    </section>
  );
}