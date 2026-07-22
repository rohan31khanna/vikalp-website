"use client";

import Link from "next/link";
export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main
  role="main"
  className="flex min-h-screen items-center justify-center bg-background px-6"
>
    <section className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-6xl font-bold text-primary">
            Something Went Wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
            An unexpected error occurred while loading this page.
            Please try again. If the problem persists,
            contact VIKALP Advocates & Legal Consultants.
        </p>

        {process.env.NODE_ENV === "development" && (
            <p className="mt-6 rounded-lg bg-muted p-4 font-mono text-sm text-destructive">
                {error.message}
            </p>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
  <button
    onClick={reset}
    className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
  >
    Try Again
  </button>

  <Link
    href="/"
    className="rounded-md border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
  >
    Return to Home
  </Link>
</div>
    </section>
</main>
    );
}