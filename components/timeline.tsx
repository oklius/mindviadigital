interface TimelineItem {
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="space-y-6">
      {items.map((item, index) => (
        <li key={item.date} className="grid grid-cols-[auto_1fr] gap-4">
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:ring-primary-500/20" />
            {index < items.length - 1 ? <span className="h-full w-px bg-neutral-200 dark:bg-neutral-700" /> : null}
          </div>
          <div className="pb-6">
            <p className="font-display text-lg font-semibold text-secondary-900 dark:text-white">{item.date}</p>
            <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-300">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
