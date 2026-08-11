"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import DisclaimerContent from "@/components/legal/DisclaimerContent";
import { DISCLAIMER } from "@/data/disclaimer";

type DisclaimerAcceptance = {
  acceptedAt: string;
  version: string;
};

export default function DisclaimerModal() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef =
    useRef<HTMLElement | null>(null);

  /**
   * ------------------------------------------------------------
   * Check existing disclaimer acceptance
   * ------------------------------------------------------------
   */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(
        DISCLAIMER.storageKey
      );

      if (!saved) {
        setOpen(true);
        return;
      }

      const data: DisclaimerAcceptance =
        JSON.parse(saved);

      if (data.version !== DISCLAIMER.version) {
        setOpen(true);
        return;
      }

      const accepted = new Date(data.acceptedAt);

      if (Number.isNaN(accepted.getTime())) {
        setOpen(true);
        return;
      }

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

  /**
   * ------------------------------------------------------------
   * Lock background scrolling while disclaimer is open
   * ------------------------------------------------------------
   */
  useEffect(() => {
    if (!open) {
      return;
    }

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const originalOverflow =
      document.body.style.overflow;

    const originalPaddingRight =
      document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    /**
     * Prevent desktop layout shift when the scrollbar
     * disappears after opening the modal.
     */
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    /**
     * Move keyboard focus into the dialog.
     */
    const frame = window.requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);

      document.body.style.overflow =
        originalOverflow;

      document.body.style.paddingRight =
        originalPaddingRight;

      previouslyFocusedRef.current?.focus({
        preventScroll: true,
      });
    };
  }, [open]);

  /**
   * ------------------------------------------------------------
   * Proceed
   * ------------------------------------------------------------
   */
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
      console.error(
        "Unable to save disclaimer acceptance:",
        error
      );
    }

    setOpen(false);
  }

  /**
   * ------------------------------------------------------------
   * Loading state
   * ------------------------------------------------------------
   */
  if (loading) {
    return null;
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="disclaimer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.22,
            ease: "easeOut",
          }}
          className="
            fixed
            inset-0
            z-[9999]
            h-[100dvh]
            w-full
            overflow-y-auto
            overscroll-contain
            bg-slate-950/40
            backdrop-blur-md
          "
        >
          {/* ====================================================
              MODAL SHELL
              ==================================================== */}

          <div
            className="
              flex
              min-h-[100dvh]
              w-full
              items-center
              justify-center

              px-3
              py-3
              [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]
              [padding-top:max(0.75rem,env(safe-area-inset-top))]

              sm:px-5
              sm:py-5
            "
          >
            <motion.div
              ref={dialogRef}
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.985,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.985,
              }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-notice"
              tabIndex={-1}
              className="
                flex
                w-full
                max-w-xl
                max-h-[calc(100dvh-1.5rem)]
                flex-col
                overflow-hidden
                rounded-[24px]
                border
                border-primary/10
                bg-white
                shadow-[0_24px_80px_rgba(15,23,42,0.30)]
                outline-none

                sm:max-h-[calc(100dvh-2.5rem)]
                sm:rounded-3xl
              "
            >
              {/* ==================================================
                  HEADER
                  ================================================== */}

              <header
  className="
    shrink-0
    border-b
    border-primary/10
    bg-stone-50
    px-6
    py-3
    text-center
    sm:px-8
    sm:py-4
  "
>
  {/* VIKALP Brand */}
  <div
    className="
      font-heading
      text-[1.15rem]
      font-semibold
      tracking-[0.32em]
      text-[#7A5A28]
      sm:text-xl
    "
  >
    VIKALP
  </div>

  <div
    className="
      mt-1
      text-[0.48rem]
      font-medium
      tracking-[0.28em]
      text-slate-500
      sm:text-[0.55rem]
    "
  >
    ADVOCATES &amp; LEGAL
  </div>

  <div
    className="
      text-[0.48rem]
      font-medium
      tracking-[0.28em]
      text-slate-500
      sm:text-[0.55rem]
    "
  >
    CONSULTANTS
  </div>

  {/* Divider */}
  <div
    aria-hidden="true"
    className="
      mx-auto
      mt-2.5
      h-px
      w-12
      bg-primary/30
    "
  />

  {/* Disclaimer title */}
  <h2
    id="legal-notice"
    className="
      mt-2.5
      font-heading
      text-lg
      font-semibold
      leading-tight
      text-[#7A5A28]

      sm:text-xl
    "
  >
    {DISCLAIMER.title}
  </h2>
</header>

              {/* ==================================================
                  SCROLLABLE BODY
                  ================================================== */}

              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  px-6
                  py-4
                  text-sm
                  [scrollbar-color:#cbd5e1_transparent]
                  [scrollbar-width:thin]

                  sm:px-8
                  sm:py-5
                  sm:text-base
                "
              >
                <DisclaimerContent compact />
              </div>

              {/* ==================================================
                  FOOTER / ACTIONS
                  ================================================== */}

              <footer
                className="
                  shrink-0
                  border-t
                  border-primary/10
                  bg-stone-50
                  px-6
                  pb-[calc(1rem+env(safe-area-inset-bottom))]
                  pt-4

                  sm:px-8
                  sm:py-5
                "
              >
                <div className="flex flex-col gap-3">
                  {/* Full disclaimer link */}

                  <Link
                    href="/disclaimer"
                    scroll
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="
                      mx-auto
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      px-2
                      text-center
                      text-sm
                      font-semibold
                      text-[#7A5A28]
                      underline-offset-4
                      transition-colors
                      duration-200
                      hover:text-[#5F431D]
                      hover:underline
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7A5A28]/40
                      focus-visible:ring-offset-2
                      rounded-md
                    "
                  >
                    {DISCLAIMER.link}
                  </Link>

                  {/* Proceed */}

                  <button
                    type="button"
                    onClick={handleProceed}
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      bg-[#7A5A28]
                      px-6
                      py-3
                      text-[0.95rem]
                      font-semibold
                      tracking-wide
                      text-white
                      shadow-[0_4px_12px_rgba(122,90,40,0.18)]
                      transition-all
                      duration-200
                      hover:-translate-y-px
                      hover:bg-[#62461f]
                      hover:shadow-[0_6px_16px_rgba(122,90,40,0.24)]
                      active:translate-y-0
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7A5A28]/50
                      focus-visible:ring-offset-2
                    "
                  >
                    {DISCLAIMER.button}
                  </button>
                </div>
              </footer>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}