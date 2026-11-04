import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { sitio } from "@/content/sitio";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Itálica real solo para el nombre científico (*Apis mellifera*): instancia estática, sin precarga.
const archivoItalica = Archivo({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-archivo-italica",
  display: "swap",
  preload: false,
});

// Solo en la sección de reubicación (declaración, numerales y epígrafe): no se precarga.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-source-serif",
  display: "swap",
  preload: false,
});

const urlPublica = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  // Sin URL de publicación confirmada no se declara canónica.
  metadataBase: urlPublica ? new URL(urlPublica) : undefined,
  ...(urlPublica && !sitio.modoDemo ? { alternates: { canonical: "/" } } : {}),
  title: sitio.seo.titulo,
  description: sitio.seo.descripcion,
  robots: sitio.modoDemo ? { index: false, follow: false, googleBot: { index: false, follow: false } } : undefined,
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: sitio.nombre,
    title: sitio.seo.titulo,
    description: sitio.seo.descripcion,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Colmenas del Río. Retiro de colmenas y nidos de avispas." }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f2f0e8",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-UY" className={`${archivo.variable} ${archivoItalica.variable} ${sourceSerif.variable} antialiased`}>
      <body>
        <noscript>
          <style>{".requiere-js{display:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
