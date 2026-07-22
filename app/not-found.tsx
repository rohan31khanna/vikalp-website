import Link from "next/link";

export default function NotFound() {
    return (
    <main
  className="flex min-h-screen items-center justify-center bg-background px-6"
  role="main"
>
        <section className="mx-auto max-w-2xl text-center">
    <h1 className="font-serif text-8xl font-bold text-primary">
        404
    </h1>

    <h2 className="mt-6 font-serif text-4xl font-semibold text-foreground">
        Page Not Found
    </h2>

    <p className="mt-4 text-lg leading-8 text-muted-foreground">
        The page you are looking for may have been moved, deleted, or the URL
        might be incorrect. Please return to the homepage or contact our team
        if you need legal assistance.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
            Return to Home
        </Link>

        <Link
    href="/#contact"
    className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
>
    Contact Us
</Link>
    </div>
</section>
    </main>
);
}