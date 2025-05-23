// components/ContactForm.tsx
"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error: ", error);
    }
  };

  return (
    <>
      <SectionTitle preTitle="Contact Us">
        We're always looking for animals to help
      </SectionTitle>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
        {isSubmitted ? (
          <h2 className="text-2xl font-semibold text-center text-green-600">
            Thank you for your message! We'll get back to you soon.
          </h2>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-inherit text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-inherit text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-inherit text-gray-900"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactForm;
