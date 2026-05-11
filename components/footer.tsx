import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-secondary-900">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-10 text-sm text-neutral-600 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8 dark:text-neutral-300">
        <div className="space-y-4">
          <p className="font-display text-base font-semibold text-secondary-900 dark:text-white">Mindvia Digital</p>
          <p className="max-w-2xl">
            Mindvia Digital Ltd, registered in England and Wales No: 12345678, registered office: 71-75 Shelton Street,
            London WC2H 9JQ.
          </p>
          <p className="max-w-2xl">
            We build with privacy, transparency, and long-term trust in mind. Product data should earn its place.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <Link className="transition hover:text-primary-600 dark:hover:text-primary-300" href="/privacy">
            Privacy policy
          </Link>
          <Link className="transition hover:text-primary-600 dark:hover:text-primary-300" href="/terms">
            Terms of service
          </Link>
          <a className="transition hover:text-primary-600 dark:hover:text-primary-300" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <p>© 2026 Mindvia Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
