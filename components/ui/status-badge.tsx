import type { VentureStatus } from "@/types/venture";

const statusStyles: Record<VentureStatus, string> = {
  Available: "bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/25",
  "In beta": "bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/25",
  Experiment: "bg-primary-100 text-primary-700 ring-primary-200 dark:bg-primary-500/15 dark:text-primary-300 dark:ring-primary-500/25",
  Stealth: "bg-neutral-200 text-neutral-700 ring-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 dark:ring-neutral-600"
};

interface StatusBadgeProps {
  status: VentureStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
