import Link from "next/link";
import { ArrowRight, Mail, Rocket, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { VentureCard } from "@/components/venture-card";
import { ventures } from "@/data/ventures";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 pt-12 sm:pt-16 lg:space-y-32 lg:pt-24">
      <AnimatedSection className="grid min-h-[72vh] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 dark:border-primary-500/25 dark:bg-primary-500/10 dark:text-primary-300">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Venture lab for small, useful internet products
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-normal text-secondary-900 sm:text-6xl lg:text-7xl dark:text-white">
              We build internet products. Some fail. Some scale. We keep building.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl dark:text-neutral-300">
              Mindvia Digital is a tiny holding company for experiments we believe deserve to exist, from consumer apps
              to focused B2B software.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#ventures"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-white dark:text-secondary-900 dark:hover:bg-primary-100 dark:focus:ring-offset-secondary-900"
            >
              Our ventures
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-secondary-900 transition hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-secondary-800 dark:text-white dark:hover:text-primary-300 dark:focus:ring-offset-secondary-900"
            >
              Contact us
              <Mail aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4" aria-label="Mindvia operating rhythm">
          {["Experiment", "Build", "Learn", "Repeat"].map((word, index) => (
            <div
              key={word}
              className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-5 py-4 text-secondary-900 shadow-soft dark:border-neutral-800 dark:bg-secondary-800 dark:text-white"
            >
              <span className="font-display text-2xl font-semibold">{word}</span>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">0{index + 1}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="ventures" className="space-y-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Ventures</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-secondary-900 sm:text-4xl dark:text-white">
              Things on the bench
            </h2>
          </div>
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:gap-3 dark:text-primary-300"
          >
            View all ventures
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ventures.map((venture, index) => (
            <VentureCard key={venture.slug} venture={venture} index={index} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-72 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-soft dark:border-neutral-800 dark:bg-secondary-800">
          <Rocket aria-hidden="true" className="h-28 w-28 text-primary-500" strokeWidth={1.4} />
        </div>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Founder note</p>
          <h2 className="font-display text-3xl font-semibold text-secondary-900 sm:text-4xl dark:text-white">
            Small team. Direct feedback. Real shipping.
          </h2>
          <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            We are a small team of builders based in London and Istanbul. We like ideas that can be tested quickly,
            explained plainly, and improved with real users rather than pitch-deck theatre.
          </p>
          <p className="leading-7 text-neutral-600 dark:text-neutral-300">
            The model is simple: build our own products, learn from the market, keep what earns trust, and retire what
            does not.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="rounded-lg border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-secondary-800 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Contact</p>
            <h2 className="font-display text-3xl font-semibold text-secondary-900 sm:text-4xl dark:text-white">
              Users, collaborators, thoughtful investors: say hello.
            </h2>
            <p className="max-w-2xl leading-7 text-neutral-600 dark:text-neutral-300">
              We are especially interested in clear feedback, product partnerships, and early conversations around the
              areas we are exploring.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-800"
          >
            {siteConfig.email}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
