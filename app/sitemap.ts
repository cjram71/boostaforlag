import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/bocker/",
    "/bocker/rektor-sveriges-viktigaste-chef/",
    "/bocker/skolvalet-rad-till-foraldrar/",
    "/malla-taipale/",
    "/forlaget/",
    "/media/",
    "/kontakt/",
    "/integritet/",
    "/tillganglighet/",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-07-25"),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route.startsWith("/bocker/") ? 0.8 : 0.6,
  }));
}
