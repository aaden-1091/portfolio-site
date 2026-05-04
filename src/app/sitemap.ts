import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aarondenetto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies: MetadataRoute.Sitemap = projects.map((p) => ({
    url:             `${BASE_URL}/work/${p.slug}`,
    lastModified:    new Date('2026-04-01'),
    changeFrequency: "monthly",
    priority:        0.9,
  }));

  return [
    {
      url:             BASE_URL,
      lastModified:    new Date('2026-05-01'),
      changeFrequency: "monthly",
      priority:        1,
    },
    {
      url:             `${BASE_URL}/cv`,
      lastModified:    new Date('2026-05-01'),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    ...caseStudies,
  ];
}
