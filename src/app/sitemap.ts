import type { MetadataRoute } from "next";
import { sitio } from "@/content/sitio";

export const dynamic = "force-static";

// Vacío mientras sea demo o no haya URL pública confirmada.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (sitio.modoDemo || !url) return [];
  return [{ url, changeFrequency: "yearly", priority: 1 }];
}
