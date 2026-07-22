import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PracticeCTA() {
  return (
    <section className="bg-[#081420] py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-white">
            Discuss Your Legal Matter With Confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Whether you are seeking legal advice, representation or strategic guidance, our team is committed to delivering practical legal solutions tailored to your needs.
          </p>

          <Link
            href="/#consultation-form"
            className="mt-10 inline-flex rounded-xl bg-[#C8A96A] px-8 py-4 font-medium text-[#081420] transition hover:opacity-90"
          >
            Schedule a Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}