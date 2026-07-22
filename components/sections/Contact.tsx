import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
    return (
        <section
            id="contact"
            className="section-light pt-2 pb-8"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-start gap-6 lg:grid-cols-2">
                    <ContactInfo  />
                    <div className="lg:mt-6">
                    <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}