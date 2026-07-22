import Link from "next/link";

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-md bg-amber-500 px-6 py-3 font-medium text-slate-900 transition hover:bg-amber-400"
    >
      ← Back to Home
    </Link>
  );
}