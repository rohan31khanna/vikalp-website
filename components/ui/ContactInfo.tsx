import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
} from "lucide-react";


import { contact } from "@/data/contact";
import { ArrowUpRight } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="space-y-4">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                    Contact Us
                </p>

                <h2
                id="consultation-heading" 
                className="mt-4 font-heading text-5xl text-[#081420]">
                    Book a Consultation
                </h2>

                <p className="mt-4 text-lg leading-8 text-stone-600">
                    Speak with our experienced legal professionals and receive practical guidance tailored to your legal matter.
                </p>
            </div>

            <div className="space-y-4">

                <a
                    href={contact.mapUrl}
                    target="_blank"
                    aria-label="Open office location in Google Maps"
                    rel="noopener noreferrer"
                    className="group block"
                >
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-amber-700 transition-transform duration-300 group-hover:scale-110" />

                        <h3 className="font-serif text-base font-semibold text-stone-900">
                            Visit Our Office
                        </h3>
                    </div>
                    <p className="mt-3 leading-7 text-stone-600 whitespace-pre-line">
                        {contact.address}
                    </p>

                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-700 transition-all duration-300 group-hover:gap-3">
                        Get Directions
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

                    </p>
                    <hr className="mt-3 w-3/4 border-stone-200" />
                </a>
                <div className="mt-0 grid grid-cols-2 gap-3">

  {/* Speak With Us */}

  <div
    className="
group
rounded-xl
border
border-stone-200
bg-white
px-5
py-4
transition-all
duration-300
hover:-translate-y-1
hover:border-[#C8A96A]
hover:bg-[#FFFBF3]
hover:shadow-md
"
  >
    <div className="flex items-start gap-3">

      <Phone
        className="
          h-5
          w-5
          text-[#C8A96A]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <div>

        <h3 className="font-serif text-base font-semibold text-stone-900">
          Speak With Us
        </h3>

        <div className="mt-1 space-y-1">

          {contact.phones.map((phone) => (

            <a
              key={phone}
              href={`tel:${phone}`}
              aria-label={`Call ${phone}`}
              className="block break-all text-stone-600 transition-colors duration-300 hover:text-[#C8A96A]"
            >
              {phone}
            </a>

          ))}

        </div>

      </div>

    </div>
  </div>

  {/* WhatsApp */}

  <a
    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
    target="_blank"
    aria-label="Chat with us on WhatsApp"
    rel="noopener noreferrer"
    className="
group
rounded-xl
border
border-stone-200
bg-white
px-4
py-3
transition-all
duration-300
hover:-translate-y-1
hover:border-[#C8A96A]
hover:bg-[#FFF8EC]
hover:shadow-md
"
  >
    <div className="flex items-start gap-3">

      <MessageCircle
        className="
          h-5
          w-5
          text-[#C8A96A]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <div>

        <h3 className="font-serif text-base font-semibold text-stone-900">
          WhatsApp
        </h3>

        <p className="mt-1 text-stone-600">
          Chat with us instantly
        </p>

      </div>

    </div>
  </a>

  {/* Email */}

  <a
    href={`mailto:${contact.email}`}
    aria-label="Send us an email"
    className="
group
rounded-xl
border
border-stone-200
bg-white
px-4
py-3
transition-all
duration-300
hover:-translate-y-1
hover:border-[#C8A96A]
hover:bg-[#FFF8EC]
hover:shadow-md
"
  >
    <div className="flex items-start gap-3">

      <Mail
        className="
          h-5
          w-5
          text-[#C8A96A]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <div>

        <h3 className="font-serif text-base font-semibold text-stone-900">
          Email Us
        </h3>

        <p className="mt-1 text-stone-600 break-all">
          {contact.email}
        </p>

      </div>

    </div>
  </a>

  {/* Office Hours */}

  <div
    className="
group
rounded-xl
border
border-stone-200
bg-white
px-4
py-3
transition-all
duration-300
hover:-translate-y-1
hover:border-[#C8A96A]
hover:bg-[#FFF8EC]
hover:shadow-md
"
  >
    <div className="flex items-start gap-3">

      <Clock
        className="
          h-5
          w-5
          text-[#C8A96A]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <div>

        <h3 className="font-serif text-base font-semibold text-stone-900">
          Office Hours
        </h3>

        <div className="mt-1 space-y-1 text-stone-600">

          {contact.officeHours.map((line) => (

            <p key={line}>{line}</p>

          ))}

        </div>

      </div>

    </div>
  </div>

</div>
        </div>
        </div >
    );
}