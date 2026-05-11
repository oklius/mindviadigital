import type { MetadataRoute } from "next";
import { ventures } from "@/data/ventures";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/ventures", "/about", "/contact", "/privacy", "/terms"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  const ventureRoutes = ventures.map((venture) => ({
    url: `${siteConfig.url}/ventures/${venture.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...ventureRoutes];
}
