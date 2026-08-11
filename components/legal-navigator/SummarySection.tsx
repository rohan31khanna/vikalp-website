interface SummarySectionProps {
  title: string;
  icon: string;
  items?: string[];
  theme?: "white" | "slate" | "amber";
}

export default function SummarySection({
  title,
  icon,
  items = [],
  theme = "white",
}: SummarySectionProps) {
  if (!items.length) {
    return null;
  }

  const cardStyles = {
    white: "border-slate-200 bg-white",
    slate: "border-slate-200 bg-slate-50",
    amber: "border-amber-200 bg-amber-50/40",
  };

  return (
    <div
      className={`
        rounded-2xl
        border
        px-5
        py-4
        shadow-sm
        ${cardStyles[theme]}
      `}
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className="text-xl"
          aria-hidden="true"
        >
          {icon}
        </span>

        <h3 className="text-base font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span
              className="
                mt-1
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-emerald-100
                text-xs
                font-bold
                text-emerald-700
              "
            >
              ✓
            </span>

            <span className="text-sm leading-6 text-slate-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}