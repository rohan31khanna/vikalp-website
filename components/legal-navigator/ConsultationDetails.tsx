"use client";

import { useState } from "react";

import type {
  ContactMethod,
  PreferredTime,
  ConsultationRequestFormData,
} from "@/types/consultation";

interface ConsultationRequestProps {
  onSubmit: (
    data: ConsultationRequestFormData
  ) => void;
}

const INITIAL_FORM: ConsultationRequestFormData = {
  preferredContactMethod: "phone",
  preferredContactTime: "anytime",
  additionalInformation: "",
};

export default function ConsultationRequest({
  onSubmit,
}: ConsultationRequestProps) {
  const [form, setForm] =
    useState<ConsultationRequestFormData>(
      INITIAL_FORM
    );

  const updateField = <
    K extends keyof ConsultationRequestFormData
  >(
    field: K,
    value: ConsultationRequestFormData[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <form
      className="space-y-5 pb-2"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(form);
      }}
    >
      {/* ===================================================== */}
      {/* INTRODUCTION                                          */}
      {/* ===================================================== */}

      <section>
        <h3 className="text-lg font-semibold text-slate-900">
          Consultation Preferences
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-slate-600">
          Your contact details have already been received
          and securely linked with your Guided Discovery.
          You may optionally provide the following
          preferences to help our legal team prepare before
          contacting you.
        </p>
      </section>

      {/* ===================================================== */}
      {/* PREPARATION STATUS                                    */}
      {/* ===================================================== */}

      <div
        className="
          rounded-xl
          border
          border-blue-200
          bg-blue-50
          px-4
          py-3
          text-sm
          leading-6
          text-slate-700
        "
      >
        <span
          className="mr-2 font-semibold text-emerald-600"
          aria-hidden="true"
        >
          ✓
        </span>

        Your consultation preparation has already been
        attached to your enquiry.
      </div>

      {/* ===================================================== */}
      {/* CONTACT PREFERENCES                                   */}
      {/* ===================================================== */}

      <section className="grid gap-4 md:grid-cols-2">
        {/* Contact Method */}

        <div>
          <label
            htmlFor="preferred-contact-method"
            className="
              mb-1.5
              block
              text-sm
              font-medium
              text-slate-700
            "
          >
            Preferred Contact Method
          </label>

          <select
            id="preferred-contact-method"
            value={form.preferredContactMethod}
            onChange={(event) =>
              updateField(
                "preferredContactMethod",
                event.target.value as ContactMethod
              )
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-sm
              font-medium
              text-slate-900
              shadow-sm
              outline-none
              transition
              focus:border-amber-500
              focus:ring-2
              focus:ring-amber-200
            "
          >
            <option value="phone">
              Phone Call
            </option>

            <option value="whatsapp">
              WhatsApp
            </option>

            <option value="email">
              Email
            </option>
          </select>
        </div>

        {/* Contact Time */}

        <div>
          <label
            htmlFor="preferred-contact-time"
            className="
              mb-1.5
              block
              text-sm
              font-medium
              text-slate-700
            "
          >
            Preferred Contact Time
          </label>

          <select
            id="preferred-contact-time"
            value={form.preferredContactTime}
            onChange={(event) =>
              updateField(
                "preferredContactTime",
                event.target.value as PreferredTime
              )
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-sm
              font-medium
              text-slate-900
              shadow-sm
              outline-none
              transition
              focus:border-amber-500
              focus:ring-2
              focus:ring-amber-200
            "
          >
            <option value="anytime">
              Anytime
            </option>

            <option value="morning">
              Morning
            </option>

            <option value="afternoon">
              Afternoon
            </option>

            <option value="evening">
              Evening
            </option>
          </select>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ADDITIONAL INFORMATION                                */}
      {/* ===================================================== */}

      <section>
        <label
          htmlFor="additionalInformation"
          className="
            mb-1.5
            block
            text-sm
            font-medium
            text-slate-700
          "
        >
          Additional Information (Optional)
        </label>

        <textarea
          id="additionalInformation"
          rows={3}
          maxLength={1000}
          value={form.additionalInformation}
          onChange={(event) =>
            updateField(
              "additionalInformation",
              event.target.value
            )
          }
          placeholder="If there is anything else you would like our legal team to know before contacting you, you may mention it here."
          className="
            w-full
            resize-y
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-sm
            leading-6
            text-slate-900
            placeholder:text-slate-400
            shadow-sm
            outline-none
            transition
            focus:border-amber-500
            focus:ring-2
            focus:ring-amber-200
          "
        />

        <div className="mt-1 text-right text-xs text-slate-400">
          {form.additionalInformation.length}/1000
        </div>
      </section>

      {/* ===================================================== */}
      {/* SUBMISSION NOTICE                                     */}
      {/* ===================================================== */}

      <div
        className="
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-3
        "
      >
        <p className="text-sm leading-6 text-slate-600">
          By submitting this request, you confirm that
          the information provided is accurate to the best
          of your knowledge. A member of our legal team
          will review your consultation request and
          contact you using your preferred method where
          possible.
        </p>
      </div>

      {/* ===================================================== */}
      {/* SUBMIT                                                */}
      {/* ===================================================== */}

      <button
        type="submit"
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
          transition
          hover:bg-amber-700
          hover:shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500
          focus:ring-offset-2
        "
      >
        Send Consultation Request
      </button>
    </form>
  );
}