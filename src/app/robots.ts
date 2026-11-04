import type { MetadataRoute } from "next";
import { sitio } from "@/content/sitio";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Demo: no indexar. Al publicar el sitio real, poner `modoDemo: false` y definir NEXT_PUBLIC_SITE_URL.
  if (sitio.modoDemo) return { rules: { userAgent: "*", disallow: "/" } };

  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(url ? { sitemap: `${url}/sitemap.xml` } : {}),
  };
}
