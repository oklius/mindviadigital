import type { Venture } from "@/types/venture";

export const ventures: Venture[] = [
  {
    name: "Dumanless",
    slug: "dumanless",
    description:
      "A privacy-focused subscription app that helps people quit smoking through small wins and honest tracking.",
    status: "Available",
    icon: "D",
    image: "/assets/dumanless-logo.png",
    imageAlt: "Dumanless logo",
    link: "https://dumanless.com",
    longDescription:
      "Dumanless helps people move away from smoking with micro-motivations, progress tracking, and a privacy-first approach. It is built for people who want steady support without handing over more personal data than necessary."
  },
  {
    name: "Pupwell",
    slug: "pupwell",
    description:
      "A mobile app for puppy training through positive reinforcement, tiny sessions, and calmer routines.",
    status: "In beta",
    icon: "P",
    image: "/assets/pupwell-dog.svg",
    imageAlt: "A playful puppy training illustration",
    longDescription:
      "Pupwell helps new dog owners train their puppies through positive reinforcement and micro-sessions. The product is built around short practice loops, gentle consistency, and progress people can actually keep up with."
  },
  {
    name: "Stealth SaaS",
    slug: "stealth-saas",
    description:
      "A future B2B software product for teams that want clearer people operations without extra admin.",
    status: "Experiment",
    icon: "S",
    image: "/assets/stealth-saas.svg",
    imageAlt: "A collaborative software workflow illustration",
    longDescription:
      "The stealth SaaS project is being researched with a focus on practical HR workflows, clean permissions, and calm software that helps teams work with less ceremony."
  }
];

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
