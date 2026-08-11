"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

import {
  ArrowLeft,
  X,
} from "lucide-react";

interface NavigatorModalProps {
  open: boolean;

  stepTitle: string;

  stepSubtitle?: string;

  onClose: () => void;

  showExitConfirmation?: boolean;

  onCancelExit?: () => void;

  onConfirmExit?: () => void;

  children: ReactNode;

  footer?: ReactNode;

  showProgress?: boolean;

  progress?: {
    current: number;
    total: number;
  };

  canGoBack?: boolean;

  onBack?: () => void;
}

export default function NavigatorModal({
  open,
  stepTitle,
  stepSubtitle,
  showProgress = false,
  progress,
  canGoBack = false,
  onBack,
  onClose,
  showExitConfirmation = false,
  onCancelExit,
  onConfirmExit,
  children,
  footer,
}: NavigatorModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  /**
   * ---------------------------------------------------------------
   * Progress
   * ---------------------------------------------------------------
   */

  const progressPercent =
    progress && progress.total > 0
      ? Math.min(
          100,
          Math.max(
            0,
            Math.round(
              (progress.current / progress.total) * 100
            )
          )
        )
      : 0;

  /**
   * ---------------------------------------------------------------
   * Escape + keyboard focus management
   * ---------------------------------------------------------------
   */

  const handleDialogKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      /**
       * Escape
       *
       * If the exit confirmation is already visible,
       * Escape means "stay and continue".
       *
       * Otherwise it follows the normal modal close flow.
       */
      if (event.key === "Escape") {
        event.preventDefault();

        if (
          showExitConfirmation &&
          onCancelExit
        ) {
          onCancelExit();
          return;
        }

        onClose();
        return;
      }

      /**
       * Focus trap
       *
       * Keeps keyboard navigation inside the modal.
       */
      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements =
        dialog.querySelectorAll<HTMLElement>(
          [
            "button:not([disabled])",
            "a[href]",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            "[tabindex]:not([tabindex='-1'])",
          ].join(",")
        );

      const focusable = Array.from(
        focusableElements
      );

      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusable[0];
      const lastElement =
        focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    },
    [
      onClose,
      onCancelExit,
      showExitConfirmation,
    ]
  );

  /**
   * ---------------------------------------------------------------
   * Open / close lifecycle
   * ---------------------------------------------------------------
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

    /**
     * Prevent background scrolling.
     *
     * Compensate for the desktop scrollbar so the page
     * does not visually jump when the modal opens.
     */
    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    /**
     * Put initial keyboard focus inside the dialog.
     *
     * QuestionCard will subsequently move focus to the
     * current question heading when appropriate.
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
   * ---------------------------------------------------------------
   * Reset content scroll whenever the question changes
   * ---------------------------------------------------------------
   */

  useEffect(() => {
    if (!open) {
      return;
    }

    contentRef.current?.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [open, stepTitle]);

  /**
   * ---------------------------------------------------------------
   * Do not render closed modal
   * ---------------------------------------------------------------
   */

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[60]
        flex
        items-end
        justify-center
        bg-slate-950/75
        p-2
        backdrop-blur-md
        sm:items-center
        sm:p-5
        lg:p-6
      "
      onClick={onClose}
    >
      {/* =========================================================
          MODAL
          ========================================================= */}

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-navigator-title"
        aria-describedby={
          stepSubtitle
            ? "legal-navigator-description"
            : undefined
        }
        tabIndex={-1}
        onClick={(event) =>
          event.stopPropagation()
        }
        onKeyDown={handleDialogKeyDown}
        className="
          relative
          flex
          h-[calc(100dvh-0.5rem)]
          max-h-[calc(100dvh-0.5rem)]
          w-full
          flex-col
          overflow-hidden
          rounded-t-[28px]
          rounded-b-2xl
          border
          border-white/70
          bg-white
          shadow-[0_30px_100px_rgba(2,6,23,0.38)]
          outline-none

          sm:h-[min(880px,calc(100dvh-2.5rem))]
          sm:max-h-[min(880px,calc(100dvh-2.5rem))]
          sm:max-w-[980px]
          sm:rounded-[28px]
        "
      >
        {/* =======================================================
            HEADER
            ======================================================= */}

        <header
          className="
            relative
            z-30
            shrink-0
            border-b
            border-slate-200/80
            bg-slate-50/95
            px-4
            pb-3.5
            pt-3.5
            backdrop-blur-xl

            sm:px-8
            sm:pb-4.5
            sm:pt-5
            lg:px-9
          "
        >
          {/* Header row */}

          <div
            className="
              flex
              min-h-10
              items-center
              justify-between
              gap-3
            "
          >
            {/* Left side */}

            <div
              className="
                flex
                min-w-0
                items-center
                gap-2.5
                sm:gap-3
              "
            >
              {canGoBack && onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  aria-label="Go back to previous question"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-slate-700
                    shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-200
                    hover:-translate-x-0.5
                    hover:border-slate-300
                    hover:bg-slate-50
                    hover:shadow-md
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-amber-500
                    focus-visible:ring-offset-2

                    sm:h-10
                    sm:w-10
                  "
                >
                  <ArrowLeft
                    className="h-[18px] w-[18px]"
                    strokeWidth={2}
                  />
                </button>
              )}

              <div className="min-w-0">
                <h2
                  id="legal-navigator-title"
                  className="
                    truncate
                    font-serif
                    text-[1.25rem]
                    leading-none
                    tracking-[-0.01em]
                    text-slate-900

                    sm:text-[1.65rem]
                  "
                >
                  {stepTitle}
                </h2>

                {stepSubtitle && (
                  <p
                    id="legal-navigator-description"
                    className="
                      mt-1
                      hidden
                      max-w-3xl
                      truncate
                      text-[0.8rem]
                      leading-5
                      text-slate-600

                      sm:block
                      sm:text-sm
                    "
                  >
                    {stepSubtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Close */}

            <button
              type="button"
              aria-label="Close Legal Navigator"
              onClick={onClose}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                text-slate-500
                transition-all
                duration-200
                hover:bg-white
                hover:text-slate-900
                hover:shadow-sm
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-amber-500
                focus-visible:ring-offset-2

                sm:h-10
                sm:w-10
              "
            >
              <X
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </button>
          </div>

          {/* Mobile subtitle */}

          {stepSubtitle && (
            <p
              className="
                mt-2
                text-[0.78rem]
                leading-[1.15rem]
                text-slate-600
                sm:hidden
              "
            >
              {stepSubtitle}
            </p>
          )}

          {/* =====================================================
              PROGRESS
              ===================================================== */}

          {showProgress && progress && (
            <div
              className="
                mt-3
                sm:mt-3.5
              "
            >
              <div
                className="
                  mb-1.5
                  flex
                  items-center
                  justify-between
                  text-[0.72rem]
                  font-semibold
                  tracking-[0.01em]
                  text-slate-500

                  sm:mb-1.5
                  sm:text-xs
                "
              >
                <span>
                  Question {progress.current} of{" "}
                  {progress.total}
                </span>

                <span className="tabular-nums">
                  {progressPercent}%
                </span>
              </div>

              <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progressPercent}
                aria-label={`Question ${progress.current} of ${progress.total}`}
                className="
                  h-1
                  overflow-hidden
                  rounded-full
                  bg-slate-200

                  sm:h-[5px]
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-amber-500
                    shadow-[0_0_8px_rgba(245,158,11,0.22)]
                    transition-[width]
                    duration-500
                    ease-out
                  "
                  style={{
                    width: `${progressPercent}%`,
                  }}
                />
              </div>
            </div>
          )}
        </header>

        {/* =======================================================
            SCROLLABLE CONTENT
            ======================================================= */}

        <main
          ref={contentRef}
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            bg-white

            px-4
            pb-8
            pt-5

            [scrollbar-color:#cbd5e1_transparent]
            [scrollbar-width:thin]

            sm:px-8
            sm:pb-10
            sm:pt-4

            lg:px-10
            lg:pt-5
          "
        >
          {children}
        </main>

        {/* =======================================================
            OPTIONAL FOOTER
            ======================================================= */}

        {footer && (
          <footer
            className="
              relative
              z-30
              shrink-0
              border-t
              border-slate-200/80
              bg-white/95
              px-4
              pb-[calc(0.875rem+env(safe-area-inset-bottom))]
              pt-3.5
              shadow-[0_-8px_24px_rgba(15,23,42,0.06)]
              backdrop-blur-xl

              sm:px-8
              sm:py-4
              lg:px-9
            "
          >
            {footer}
          </footer>
        )}

        {/* =======================================================
            EXIT CONFIRMATION
            ======================================================= */}

        {showExitConfirmation && (
          <div
            className="
              absolute
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-slate-950/45
              p-4
              backdrop-blur-md

              sm:p-6
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="exit-confirmation-title"
              className="
                w-full
                max-w-[410px]
                rounded-[22px]
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_30px_90px_rgba(15,23,42,0.28)]

                sm:p-6
              "
            >
              <div className="mb-5">
                <h3
                  id="exit-confirmation-title"
                  className="
                    font-serif
                    text-[1.55rem]
                    leading-tight
                    tracking-[-0.01em]
                    text-slate-900
                  "
                >
                  Leave your consultation?
                </h3>

                <p
                  className="
                    mt-2.5
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  Your consultation preparation is ready,
                  but your consultation request has not been
                  completed yet. If you leave now, your
                  current information may not be submitted.
                </p>
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-2.5

                  sm:flex-row
                "
              >
                <button
                  type="button"
                  onClick={onCancelExit}
                  className="
                    inline-flex
                    min-h-11
                    flex-1
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-slate-800
                    transition-all
                    duration-200
                    hover:border-slate-400
                    hover:bg-slate-50
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-amber-500
                    focus-visible:ring-offset-2
                  "
                >
                  Stay and Continue
                </button>

                <button
                  type="button"
                  onClick={onConfirmExit}
                  className="
                    inline-flex
                    min-h-11
                    flex-1
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-600
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_4px_12px_rgba(217,119,6,0.18)]
                    transition-all
                    duration-200
                    hover:-translate-y-px
                    hover:bg-amber-700
                    hover:shadow-[0_6px_16px_rgba(217,119,6,0.22)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-amber-500
                    focus-visible:ring-offset-2
                  "
                >
                  Exit Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}