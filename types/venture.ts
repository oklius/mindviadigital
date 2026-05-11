export type VentureStatus = "Available" | "In beta" | "Experiment" | "Stealth";

export interface Venture {
  name: string;
  slug: string;
  description: string;
  status: VentureStatus;
  icon: string;
  image?: string;
  link?: string;
  longDescription: string;
}
