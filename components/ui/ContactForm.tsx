"use client";

import { contactSubjects } from "@/data/contact";
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const selectedCategory = contactSubjects.find(
        (subject) => subject.title === selectedSubject
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(false);

        // Name Validation

        const trimmedName = name.trim();

        if (!trimmedName) {
            alert("Please enter your full name.");
            return;
        }

        if (trimmedName.length < 3) {
            alert("Full Name must contain at least 3 characters.");
            return;
        }

        if (trimmedName.length > 100) {
            alert("Full Name cannot exceed 100 characters.");
            return;
        }

        const nameRegex = /^[A-Za-z\s.'-]+$/;

        if (!nameRegex.test(trimmedName)) {
            alert(
                "Full Name can contain only letters, spaces, apostrophes ('), periods (.) and hyphens (-)."
            );
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation
        if (phone.length !== 10) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        // Practice Area Validation
        if (!selectedSubject) {
            alert("Please select a Practice Area.");
            return;
        }

        // Specific Service Validation
        if (!selectedService) {
            alert("Please select a Specific Service.");
            return;
        }

        // Message Validation
        if (!message.trim()) {
            alert("Please enter your message.");
            return;
        }
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setSelectedSubject("");
        setSelectedService("");
        setMessage("");
        setIsSubmitting(false);
    };



    return (
        <form
            id="consultation-form"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
        >
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"

                        className="mb-1.5 block text-sm placeholder:text-sm font-medium text-stone-900"
                    >
                        Full Name
                    </label>

                    <input
                        id="name"
                        required
                        type="text"
                        minLength={3}
                        maxLength={100}
                        autoComplete="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-amber-700"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm placeholder:text-sm font-medium text-stone-900"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        autoComplete="email"
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-amber-700"
                    />
                </div>
            </div>

            <div className="mt-4 grid gap-8 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm placeholder:text-sm font-medium text-stone-900"
                    >
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        autoComplete="tel"
                        inputMode="numeric"
                        required
                        type="tel"
                        placeholder="9876543210"
                        value={phone}
                        maxLength={10}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setPhone(value);
                        }}
                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-amber-700"
                    />
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className=" block text-sm placeholder:text-sm font-medium text-stone-900"
                    >
                        Practice Area
                    </label>

                    <select id="subject"
                        required
                        value={selectedSubject}
                        onChange={(e) => {
                            setSelectedSubject(e.target.value);
                            setSelectedService("");
                        }}
                        className="
mt-2
w-full
h-12
rounded-xl
border
border-stone-300
bg-white
px-4
text-stone-900
outline-none
transition
focus:border-amber-700
"
                    >
                        <option value="" disabled>
                            Select Practice Area
                        </option>

                        {contactSubjects.map((subject) => (
                            <option
                                key={subject.title}
                                value={subject.title}
                            >
                                {subject.title}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
            {selectedCategory && (
                <div className="mt-4">

                    <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm placeholder:text-sm font-medium text-stone-900"
                    >
                        Service Required
                    </label>

                    <select
                        id="service"
                        required
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="
mt-2
w-full
h-12
rounded-xl
border
border-stone-300
bg-white
px-4
text-stone-900
outline-none
transition
focus:border-amber-700
"
                    >
                        <option value="" disabled>
                            Select Service
                        </option>

                        {selectedCategory.services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}

                    </select>

                </div>
            )}
            <div className="mt-4">
                <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm placeholder:text-sm font-medium text-stone-900"
                >
                    Message
                </label>

                <textarea
                    id="message"
                    autoComplete="off"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us briefly about your legal matter..."
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 placeholder:text-sm outline-none transition focus:border-amber-700"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="
mt-4
rounded-full
bg-amber-700
px-10
py-3
font-semibold
placeholder:text-sm
text-white
transition
hover:bg-amber-800
disabled:cursor-not-allowed
disabled:opacity-60
disabled:hover:bg-amber-700
"
            >
                {isSubmitting ? "Sending..." : "Book a Consultation"}
            </button>
            {isSubmitted && (
                <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
                    <h3 className="font-semibold text-green-700">
                        Thank you for contacting VIKALP Advocates & Legal Consultants.
                    </h3>

                    <p className="mt-1 text-sm text-green-700">
                        Your enquiry has been received successfully.
                        One of our legal professionals will review your request and get in touch with you as soon as possible.
                    </p>
                </div>
            )}
        </form>
    );
}