"use client";

import { useMemo, useState } from "react";
import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { LeadDetails } from "@/types/lead";

interface LeadCaptureProps {
  leadDetails: LeadDetails;

  setLeadDetails: Dispatch<SetStateAction<LeadDetails>>;

  onContinue: () => void;
}

export default function LeadCapture({
  leadDetails,
  setLeadDetails,
  onContinue,
}: LeadCaptureProps) {
  const [mobileTouched, setMobileTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  /**
   * Validate an Indian mobile number.
   *
   * Supported formats:
   * 9876543210
   * +91 9876543210
   * 919876543210
   */
  const isValidMobile = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length === 10) {
      return /^[6-9]\d{9}$/.test(digitsOnly);
    }

    if (digitsOnly.length === 11) {
      return /^0[6-9]\d{9}$/.test(digitsOnly);
    }

    if (digitsOnly.length === 12) {
      return /^91[6-9]\d{9}$/.test(digitsOnly);
    }

    return false;
  };

  /**
   * Validate email when provided.
   * Email is optional.
   */
  const isValidEmail = (value: string) => {
    if (!value.trim()) return true;

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value.trim()
    );
  };

  const canContinue = useMemo(() => {
    return (
      leadDetails.fullName.trim().length >= 2 &&
      isValidMobile(leadDetails.mobileNumber) &&
      leadDetails.city.trim().length >= 2 &&
      isValidEmail(leadDetails.email ?? "")
    );
  }, [
    leadDetails.fullName,
    leadDetails.mobileNumber,
    leadDetails.city,
    leadDetails.email,
  ]);

  const mobileIsInvalid =
    mobileTouched &&
    leadDetails.mobileNumber.trim().length > 0 &&
    !isValidMobile(leadDetails.mobileNumber);

  const emailIsInvalid =
    emailTouched &&
    leadDetails.email?.trim().length &&
    !isValidEmail(leadDetails.email);

  return (
    <section className="space-y-3">
      {/* ========================================================= */}
      {/* INTRO                                                     */}
      {/* ========================================================= */}

      <div className="space-y-2">
        <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-800">
          ✓ Your Consultation Preparation is Ready
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Your Consultation Preparation Is Ready
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            We've prepared a personalised consultation brief based
            on the information you shared during Guided Discovery.
            Please provide your contact details so our legal team
            can associate your preparation with your enquiry and
            review it before contacting you.
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CONTACT FORM                                              */}
      {/* ========================================================= */}

<div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm sm:p-5">        <div className="space-y-3">

          {/* Full Name */}
          <div>
            <label
              htmlFor="lead-name"
className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Full Name *
            </label>

            <input
              id="lead-name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-base
                font-medium
                text-slate-900
                placeholder:text-slate-400
                shadow-sm
                transition
                duration-200
                focus:border-amber-500
                focus:outline-none
                focus:ring-2
                focus:ring-amber-500/20
              "
              value={leadDetails.fullName}
              onChange={(event) =>
                setLeadDetails((previous) => ({
                  ...previous,
                  fullName: event.target.value,
                }))
              }
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="lead-mobile"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Mobile Number *
            </label>

            <input
              id="lead-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={12}
              placeholder="Enter your 10-digit mobile number"
              className={`
                w-full
                rounded-xl
                border
                bg-white
                px-4
                py-3
                text-base
                font-medium
                text-slate-900
                placeholder:text-slate-400
                shadow-sm
                transition
                duration-200
                focus:outline-none
                focus:ring-2
                ${
                  mobileIsInvalid
                    ? `
                      border-red-400
                      focus:border-red-500
                      focus:ring-red-500/20
                    `
                    : `
                      border-slate-300
                      focus:border-amber-500
                      focus:ring-amber-500/20
                    `
                }
              `}
              value={leadDetails.mobileNumber}
              onBlur={() => setMobileTouched(true)}
              onChange={(event) => {
                const digitsOnly = event.target.value.replace(/\D/g, "");

                setLeadDetails((previous) => ({
                  ...previous,
                  mobileNumber: digitsOnly.slice(0, 12),
                }));
              }}
            />

            {mobileIsInvalid && (
              <p className="mt-2 text-sm text-red-600">
                Please enter a valid Indian mobile number.
              </p>
            )}

            <p className="mt-1.5 text-xs text-slate-500">
              Enter a 10-digit mobile number, optionally with country
              code 91.
            </p>
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="lead-city"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              City *
            </label>

            <input
              id="lead-city"
              type="text"
              autoComplete="address-level2"
              placeholder="Enter your city"
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-base
                font-medium
                text-slate-900
                placeholder:text-slate-400
                shadow-sm
                transition
                duration-200
                focus:border-amber-500
                focus:outline-none
                focus:ring-2
                focus:ring-amber-500/20
              "
              value={leadDetails.city}
              onChange={(event) =>
                setLeadDetails((previous) => ({
                  ...previous,
                  city: event.target.value,
                }))
              }
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="lead-email"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Email Address (Optional)
            </label>

            <input
              id="lead-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className={`
                w-full
                rounded-xl
                border
                bg-white
                px-4
                py-3
                text-base
                font-medium
                text-slate-900
                placeholder:text-slate-400
                shadow-sm
                transition
                duration-200
                focus:outline-none
                focus:ring-2
                ${
                  emailIsInvalid
                    ? `
                      border-red-400
                      focus:border-red-500
                      focus:ring-red-500/20
                    `
                    : `
                      border-slate-300
                      focus:border-amber-500
                      focus:ring-amber-500/20
                    `
                }
              `}
              value={leadDetails.email ?? ""}
              onBlur={() => setEmailTouched(true)}
              onChange={(event) =>
                setLeadDetails((previous) => ({
                  ...previous,
                  email: event.target.value,
                }))
              }
            />

            {emailIsInvalid && (
              <p className="mt-2 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* WHY WE ASK                                                */}
      {/* ========================================================= */}

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-serif text-lg text-slate-900">
          Why are we asking for your contact details?
        </h3>

        <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="shrink-0 text-emerald-600">✓</span>
            <span>
              Associate your Guided Discovery responses with your enquiry.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="shrink-0 text-emerald-600">✓</span>
            <span>
              Prepare your consultation before contacting you.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="shrink-0 text-emerald-600">✓</span>
            <span>
              Avoid asking you the same questions again.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="shrink-0 text-emerald-600">✓</span>
            <span>
              Use your contact details to process this consultation request.
            </span>
          </li>
        </ul>
      </div>

      {/* ========================================================= */}
      {/* CONTINUE                                                   */}
      {/* ========================================================= */}

      <button
        type="button"
        onClick={onContinue}
        disabled={!canContinue}
        className={`
          inline-flex
          min-h-12
          w-full
          items-center
          justify-center
          rounded-xl
          px-6
          py-3
          text-sm
          font-semibold
          transition-all
          duration-200

          ${
            canContinue
              ? `
                bg-amber-600
                text-white
                shadow-sm
                hover:bg-amber-700
                hover:shadow-md
              `
              : `
                cursor-not-allowed
                bg-slate-200
                text-slate-500
              `
          }
        `}
      >
        Continue to Consultation Request
      </button>
    </section>
  );
}