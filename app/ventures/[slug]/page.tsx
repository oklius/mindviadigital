import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { getVenture, ventures } from "@/data/ventures";

interface VentureDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export function generateMetadata({ params }: VentureDetailPageProps): Metadata {
  const venture = getVenture(params.slug);

  if (!venture) {
    return {
      title: "Venture not found"
    };
  }

  return {
    title: venture.name,
    description: venture.description
  };
}

export default function VentureDetailPage({ params }: VentureDetailPageProps) {
  const venture = getVenture(params.slug);

  if (!venture) {
    notFound();
  }

  return (
    <article className="pb-20 pt-16 sm:pt-24">
      <Link
        href="/ventures"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:gap-3 dark:text-primary-300"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to ventures
      </Link>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-secondary-800">
          <div className="relative flex h-28 w-full items-center justify-center rounded-lg bg-primary-50 p-4 ring-1 ring-primary-100 dark:bg-white dark:ring-primary-500/20">
            {venture.image ? (
              <Image
                src={venture.image}
                alt={venture.imageAlt ?? `${venture.name} visual`}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-contain p-4"
              />
            ) : (
              <span className="font-display text-2xl font-semibold text-primary-600 dark:text-primary-300">{venture.icon}</span>
            )}
          </div>
          <div className="mt-6">
            <StatusBadge status={venture.status} />
          </div>
          <p className="mt-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{venture.description}</p>
          {venture.link ? (
            <a
              href={venture.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:gap-3 dark:text-primary-300"
            >
              Visit product
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : null}
        </aside>

        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">Venture</p>
          <h1 className="font-display text-5xl font-semibold text-secondary-900 sm:text-6xl dark:text-white">
            {venture.name}
          </h1>
          <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">{venture.longDescription}</p>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-secondary-800">
            <h2 className="font-display text-2xl font-semibold text-secondary-900 dark:text-white">What happens next</h2>
            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">
              This page is intentionally lightweight for now. As the product matures, Mindvia can add screenshots,
              changelogs, privacy notes, and more detailed product updates here.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
