import type { Venture } from "@/types/venture";

export const ventures: Venture[] = [
  {
    name: "Dumanless",
    slug: "dumanless",
    description:
      "A privacy-focused subscription app that helps people quit smoking through small wins and honest tracking.",
    status: "Available",
    icon: "D",
    link: "https://dumanless.com",
    longDescription:
      "Dumanless helps people move away from smoking with micro-motivations, progress tracking, and a privacy-first approach. It is built for people who want steady support without handing over more personal data than necessary."
  },
  {
    name: "Puppy Trainer",
    slug: "puppy-trainer",
    description:
      "An early experiment for training puppies with positive reinforcement and simple daily routines.",
    status: "Experiment",
    icon: "P",
    longDescription:
      "Puppy Trainer is currently a prototype exploring how gentle reminders, consistent cues, and positive reinforcement can help new dog owners build better habits with their puppies."
  },
  {
    name: "Stealth SaaS",
    slug: "stealth-saas",
    description:
      "A future B2B software product for teams that want clearer people operations without extra admin.",
    status: "Stealth",
    icon: "S",
    longDescription:
      "The stealth SaaS project is being researched with a focus on practical HR workflows, clean permissions, and calm software that helps teams work with less ceremony."
  }
];

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
