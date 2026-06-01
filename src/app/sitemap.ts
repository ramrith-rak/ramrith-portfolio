import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const isProd = process.env.NODE_ENV === "production";
  const repo = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.split("/")[1]
    : "";
  const baseUrl = isProd
    ? `https://ramrith-rak.github.io${repo ? `/${repo}` : ""}`
    : "http://localhost:3000";

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...PROJECTS.map((p) => ({
      url: `${baseUrl}/projects/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
