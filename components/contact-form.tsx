"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please add your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please add a valid email.";
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = "Please write at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);

    if (!validate()) {
      return;
    }

    console.log("Mindvia contact form submission", values);
    setValues(initialValues);
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-secondary-800">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-secondary-900 dark:text-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-secondary-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-secondary-900 dark:text-white"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-secondary-900 dark:text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-secondary-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-secondary-900 dark:text-white"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-secondary-900 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="mt-2 w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-secondary-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-secondary-900 dark:text-white"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-800 sm:w-auto"
      >
        Send message
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>

      {sent ? <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Thanks. For now this logs locally, and the form is ready for a real endpoint.</p> : null}
    </form>
  );
}
