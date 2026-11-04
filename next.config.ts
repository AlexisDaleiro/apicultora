import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Demo publicada como sitio estático (carpeta `out/`), sin servidor.
  output: "export",
  images: { unoptimized: true },
  // Una sola página con ~8 KB de CSS: va en línea para no bloquear el primer render.
  experimental: { inlineCss: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
