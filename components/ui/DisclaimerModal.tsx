"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import { DISCLAIMER } from "@/data/disclaimer";

type DisclaimerAcceptance = {
  acceptedAt: string;
  version: string;
};


export default function DisclaimerModal() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
 

  useEffect(() => {
    try {
      const saved = localStorage.getItem(DISCLAIMER.storageKey);

      if (!saved) {
        setOpen(true);
        return;
      }

      const data: DisclaimerAcceptance = JSON.parse(saved);

      if (data.version !== DISCLAIMER.version) {
        setOpen(true);
        return;
      }

      const accepted = new Date(data.acceptedAt);
      const today = new Date();

      const days =
        (today.getTime() - accepted.getTime()) /
        (1000 * 60 * 60 * 24);

      if (days >= DISCLAIMER.expiryDays) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }, []);

 useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);


  function handleProceed() {
    try {
      localStorage.setItem(
        DISCLAIMER.storageKey,
        JSON.stringify({
          acceptedAt: new Date().toISOString(),
          version: DISCLAIMER.version,
        })
      );
    } catch (error) {
      console.error(error);
    }

    setOpen(false);
  }

  if (loading || !open) {
  return null;
}

if (loading || !open) {
  return null;
}

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999]"
      >
        {/* Background */}

        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        {/* Card */}

        <div className="relative flex min-h-screen items-center justify-center p-5">

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-notice"
            className="
              w-full
              max-w-xl
              overflow-hidden
              rounded-3xl
              border
              border-primary/10
              bg-white/95
              shadow-2xl
              backdrop-blur
            "
          >
            {/* Header */}

            <div className="bg-stone-50 px-8 py-3 text-center">

              <div className="mx-auto h-px w-16 bg-primary/30" />

<h1 className="mt-3 font-heading text-3xl font-semibold tracking-[0.22em] text-[#7A5A28] md:text-4xl">                VIKALP
              </h1>

<p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-600">                Advocates &amp; Legal Consultants
              </p>

              <div className="mx-auto mt-2 h-px w-16 bg-primary/30" />

              <h2
                id="legal-notice"
                className="mt-4 font-heading text-2xl font-semibold text-[#7A5A28]"
              >
                {DISCLAIMER.title}
              </h2>

            </div>

            {/* Body */}

            <div className="px-8 py-5">

  <DisclaimerContent compact />

  <p className="mt-6 text-center text-sm text-gray-500">
  By proceeding, you acknowledge that you have read and understood this disclaimer.
</p>

</div>

            {/* Footer */}

            <div className="border-t border-primary/10 bg-stone-50 px-8 py-5">

              <div className="flex flex-col gap-5">

                <Link
  href="/disclaimer"
  scroll
  onClick={() => {
    setOpen(false);
    document.body.style.overflow = "";
  }}
  className="mx-auto text-sm font-semibold text-[#7A5A28] transition hover:text-[#5F431D] hover:underline underline-offset-4"
>
  {DISCLAIMER.link}
</Link>

                <button
                  onClick={handleProceed}
                  className="w-full rounded-full bg-[#7A5A28] py-3.5 text-base font-semibold tracking-wide text-white transition hover:bg-[#62461f]"
                >
                  {DISCLAIMER.button}
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>
    </AnimatePresence>
  );
}