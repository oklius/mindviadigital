import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Mindvia Digital terms of service overview."
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl space-y-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Terms</p>
      <h1 className="font-display text-4xl font-semibold text-secondary-900 dark:text-white">Terms of service</h1>
      <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        These terms are a placeholder for Mindvia Digital Ltd and its product portfolio. Product-specific terms should be
        added before a venture handles payments, user accounts, or regulated workflows.
      </p>
      <p className="leading-7 text-neutral-600 dark:text-neutral-300">
        Until then, use this site for general information only. Nothing here creates a client, partnership, investment,
        or employment relationship.
      </p>
      <p className="leading-7 text-neutral-600 dark:text-neutral-300">
        Questions can be sent to{" "}
        <a className="font-semibold text-primary-600 dark:text-primary-300" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
    </article>
  );
}
