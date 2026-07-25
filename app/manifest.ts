import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Boosta Förlag",
    short_name: "Boosta",
    description: "Kunskap som går att förstå – och använda.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e7",
    theme_color: "#cf4728",
    lang: "sv-SE",
    icons: [{ src: "/brand/boosta-mark.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
