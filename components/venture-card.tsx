"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Venture } from "@/types/venture";
import { StatusBadge } from "@/components/ui/status-badge";

interface VentureCardProps {
  venture: Venture;
  index?: number;
}

export function VentureCard({ venture, index = 0 }: VentureCardProps) {
  const href = venture.link ?? `/ventures/${venture.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group flex h-full flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6 shadow-soft transition dark:border-neutral-800 dark:bg-secondary-800"
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 font-display text-lg font-semibold text-primary-600 ring-1 ring-primary-100 dark:bg-primary-500/15 dark:text-primary-300 dark:ring-primary-500/20">
            {venture.icon}
          </div>
          <StatusBadge status={venture.status} />
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold tracking-normal text-secondary-900 dark:text-white">{venture.name}</h3>
          <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">{venture.description}</p>
        </div>
      </div>

      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-4 dark:text-primary-300 dark:focus:ring-offset-secondary-800"
      >
        Learn more
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
