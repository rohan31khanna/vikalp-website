"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progress =
    totalSteps <= 1
      ? 100
      : Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div
      className="w-full"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep}
      aria-label="Legal Navigator progress"
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
          Step {currentStep} of {totalSteps}
        </span>

        <span className="text-xs font-semibold text-amber-700">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="relative h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-amber-500
            via-amber-600
            to-yellow-500
            transition-[width]
            duration-500
            ease-out
            motion-reduce:transition-none
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}