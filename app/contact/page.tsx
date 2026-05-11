import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mindvia Digital about products, partnerships, feedback, or early venture conversations."
};

export default function ContactPage() {
  return (
    <div className="grid gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-[0.85fr_1.15fr]">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Contact</p>
        <h1 className="font-display text-4xl font-semibold text-secondary-900 sm:text-6xl dark:text-white">
          Tell us what you are seeing.
        </h1>
        <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          Useful feedback, early product conversations, and thoughtful collaboration notes are always welcome.
        </p>
        <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-secondary-800">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Direct email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-flex text-lg font-semibold text-primary-600 transition hover:text-primary-700 dark:text-primary-300"
          >
            {siteConfig.email}
          </a>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
