import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";


export default function AboutFirm() {
  return (
    <section
      id="about"
      className="section-light pt-4 pb-10"
    >

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2 xl:gap-20">

          {/* LEFT */}

          <div>

            <SectionTitle
              title="About VIKALP"
              subtitle="Strategic legal advice built on integrity, experience and practical solutions."
            />

            <p className="mt-10 max-w-xl text-lg leading-9 text-slate-600">

              VIKALP is a modern Indian law firm committed to
              providing practical, strategic and client-focused
              legal services.

              <br /><br />

              Our approach combines legal excellence,
              commercial understanding and personalized
              attention to deliver solutions across litigation,
              advisory, corporate, civil and regulatory matters.

            </p>

            <div className="mt-10">

              <Button href="#leadership">

                Learn More

              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <Image
              src="/images/about-office.jpg"
              alt="Professional meeting space at VIKALP Law Firm"
              width={700}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </Container>

    </section>
  );
}