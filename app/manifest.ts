import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Statik export için gerekli.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#dc1f26",
    lang: "tr-TR",
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
    ],
  };
}
