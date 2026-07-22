import Link from "next/link";
import FooterNavLink from "@/components/navigation/FooterNavLink"

import {
    footerNavigation,
    footerPracticeAreas,
    footerContact,
    footerDescription,
} from "@/data/footer";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                <FooterNavLink
    href="#home"
    className="
        cursor-pointer
        text-4xl
        font-bold
        tracking-[0.35em]
        text-white
        hover:text-white
    "
>
    VIKALP
</FooterNavLink>

                        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-amber-400 focus-visible:outline-none">
                            Advocates & Legal Consultants
                        </p>

                        <p className="mt-6 leading-7 text-slate-300">
                            {footerDescription}
                        </p>
                    </div>
                    <nav aria-label="Footer navigation">
    <h3 className="text-lg font-semibold tracking-wide text-white">
        Quick Links
    </h3>

    <ul className="mt-4 space-y-4">
        {footerNavigation.map((item) => (
            <li key={item.label}>
                <FooterNavLink href={item.href}>
    {item.label}
</FooterNavLink>
            </li>
        ))}
    </ul>
</nav>
                    <div>
                        <h3 className="text-lg font-semibold tracking-wide text-white">
                            Practice Areas
                        </h3>

                        <ul className="mt-4 space-y-4">
                            {footerPracticeAreas.map((area) => (
                                <li
                                    key={area}
                                    className="text-slate-300"
                                >
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold tracking-wide text-white">
                            Contact
                        </h3>

                        <address className="mt-5 space-y-5 not-italic">

                            <div>
                                <p className="font-medium text-white">
                                    Address
                                </p>

                                <a
    href={footerContact.mapLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 block text-slate-300 transition hover:text-amber-400 focus-visible:outline-none focus-visible:text-amber-400 focus-visible:outline-none
focus-visible:text-amber-400
focus-visible:ring-2
focus-visible:ring-amber-400/40
focus-visible:ring-offset-2
focus-visible:ring-offset-slate-900"
>
    {footerContact.address}
</a>
                            </div>

                            <div>
                                <p className="font-medium text-white">
                                    Phone
                                </p>

                                <div className="mt-2 space-y-1">
                                    {footerContact.phones.map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/\s/g, "")}`}
                                            className="block text-slate-300 transition hover:text-amber-400 focus-visible:outline-none
focus-visible:text-amber-400
focus-visible:ring-2
focus-visible:ring-amber-400/40
focus-visible:ring-offset-2
focus-visible:ring-offset-slate-900"
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="font-medium text-white">
                                    Email
                                </p>

                                <a
                                    href={`mailto:${footerContact.email}`}
                                    className="mt-2 block text-slate-300 transition hover:text-amber-400 focus-visible:outline-none
focus-visible:text-amber-400
focus-visible:ring-2
focus-visible:ring-amber-400/40
focus-visible:ring-offset-2
focus-visible:ring-offset-slate-900"
                                >
                                    {footerContact.email}
                                </a>
                            </div>

                        </address>
                    </div>
                </div>
                <div className="mt-16 border-t border-slate-700 pt-8">
                    <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 md:flex-row md:text-left">

                        <p>
                            © {new Date().getFullYear()} VIKALP Advocates & Legal Consultants.
                            All Rights Reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 md:justify-end">

    <Link
        href="/privacy"
        className="transition hover:text-amber-400 focus-visible:outline-none focus-visible:text-amber-400"
    >
        Privacy Policy
    </Link>

    <Link
        href="/terms"
        className="transition hover:text-amber-400 focus-visible:outline-none focus-visible:text-amber-400"
    >
        Terms of Use
    </Link>

    <Link
        href="/disclaimer"
        className="transition hover:text-amber-400 focus-visible:outline-none focus-visible:text-amber-400"
    >
        Disclaimer
    </Link>

</div>

                    </div>

                </div>
            </div>
        </footer>
    );
}