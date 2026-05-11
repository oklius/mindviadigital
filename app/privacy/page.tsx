import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Mindvia Digital privacy policy and commitment to GDPR-aware product building."
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl space-y-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Privacy</p>
      <h1 className="font-display text-4xl font-semibold text-secondary-900 dark:text-white">Privacy policy</h1>
      <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        Mindvia Digital builds products with privacy as a product requirement, not an afterthought. We aim to collect
        only the information needed to run, support, and improve our products.
      </p>
      <p className="leading-7 text-neutral-600 dark:text-neutral-300">
        When a product needs personal data, we explain why, keep access limited, and design for GDPR-aware handling from
        the start. Product-specific privacy details may be published separately as each venture grows.
      </p>
      <p className="leading-7 text-neutral-600 dark:text-neutral-300">
        For privacy questions, data requests, or concerns, contact{" "}
        <a className="font-semibold text-primary-600 dark:text-primary-300" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
    </article>
  );
}
