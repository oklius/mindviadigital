import type { Metadata } from "next";
import { VentureCard } from "@/components/venture-card";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Explore the internet products and experiments being built by Mindvia Digital."
};

export default function VenturesPage() {
  return (
    <div className="space-y-12 pb-20 pt-16 sm:pt-24">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Ventures</p>
        <h1 className="font-display text-4xl font-semibold text-secondary-900 sm:text-6xl dark:text-white">
          Products we are building, testing, or quietly studying.
        </h1>
        <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          Mindvia does not sell agency services. We create, operate, and learn from our own products.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Mindvia ventures">
        {ventures.map((venture, index) => (
          <VentureCard key={venture.slug} venture={venture} index={index} />
        ))}
      </section>
    </div>
  );
}
