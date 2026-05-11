import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { Timeline } from "@/components/timeline";
import { milestones } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Mindvia Digital works as a small venture lab building its own products."
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 pt-16 sm:pt-24">
      <AnimatedSection className="max-w-4xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">About</p>
        <h1 className="font-display text-4xl font-semibold text-secondary-900 sm:text-6xl dark:text-white">
          A digital venture lab means we build our own bets.
        </h1>
        <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          Mindvia Digital sits somewhere between a tiny holding company and an incubator. We start with a problem, ship a
          small product, listen carefully, and decide whether the idea deserves more attention.
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Experimentation", "We keep ideas small enough to test and honest enough to retire."],
          ["Privacy by design", "We ask for less data, explain why it matters, and avoid lazy tracking."],
          ["Transparency", "We prefer plain product updates over vague promises."],
          ["Long-term building", "We would rather compound trust slowly than chase loud short-term wins."]
        ].map(([title, description]) => (
          <div key={title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-secondary-800">
            <h2 className="font-display text-xl font-semibold text-secondary-900 dark:text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
        ))}
      </AnimatedSection>

      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Timeline</p>
          <h2 className="font-display text-3xl font-semibold text-secondary-900 sm:text-4xl dark:text-white">
            Early, deliberate, still moving.
          </h2>
          <p className="leading-7 text-neutral-600 dark:text-neutral-300">
            The company is young by design. We keep the operating surface small so product decisions can stay close to
            users.
          </p>
        </div>
        <Timeline items={milestones} />
      </AnimatedSection>
    </div>
  );
}
