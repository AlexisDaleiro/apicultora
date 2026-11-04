# Colmenas del Río: demo de rediseño

Landing de una sola página para presentar una propuesta de rediseño a Colmenas del Río (retiro de colmenas de abejas y situaciones con avispas, Uruguay). Es una **versión de presentación**: no reemplaza ni modifica https://colmenasdelrio.com/ y se publica con `noindex`.

- Sistema visual: [DESIGN.md](DESIGN.md)
- Hechos del negocio y límites: [PRODUCT.md](PRODUCT.md)
- Medios y datos pendientes de confirmar: [docs/ENTREGA.md](docs/ENTREGA.md)
- Pruebas ejecutadas y resultados: [VERIFICATION.md](VERIFICATION.md)
- Capturas finales: [docs/capturas/](docs/capturas/)
- Ampliación creativa, imágenes generadas y prompts: [docs/cuaderno-de-campo.md](docs/cuaderno-de-campo.md)

## Requisitos

Node.js 20.9 o superior (probado con Node 24.19 y npm 11.17).

## Comandos

```bash
npm install
```

```bash
npm run dev          # desarrollo en http://localhost:3000
```

```bash
npm run build        # exportación estática en out/
```

```bash
npm run preview      # sirve out/ en http://localhost:4173 (descarga serve@14.2.4 con npx)
```

```bash
npm run typecheck && npm run lint && npm test
```

`npm test` corre los tests del armado del mensaje de WhatsApp (`src/lib/mensaje.test.ts`) con el runner nativo de Node.

`npm run typecheck` usa tipos que genera Next (`LayoutProps`); en un clon nuevo, correr `npm run build` o `npm run dev` una vez antes.

## Stack y decisiones

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, con `output: "export"`: el resultado es HTML, CSS y JS estáticos en `out/`, publicables en cualquier hosting estático. Sin backend, base de datos, autenticación ni analítica.
- **Todo el contenido se renderiza durante el build.** Las únicas islas de cliente son el preparador de mensaje (`src/components/Consulta.tsx`) y la barra de contacto móvil (`src/components/BarraContacto.tsx`).
- **Sin dependencias extra**: el acordeón es `details`/`summary` nativo, el dibujo de la lámina de reubicación es CSS (`animation-timeline: view()` dentro de `@supports`), y las imágenes responsivas usan `picture` con AVIF/WebP generados con ffmpeg. `next/image` no se usa porque su optimizador necesita servidor.
- **Fuentes** con `next/font/google` (Archivo variable con eje de ancho; Archivo itálica 400 solo para *Apis mellifera*; Source Serif 4 redonda solo en la sección de reubicación). Se descargan en el build y se sirven desde el propio sitio: el navegador no hace solicitudes a Google. Ambas familias tienen licencia SIL Open Font License 1.1.

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Teléfonos, correo, título y descripción SEO, modo demo | `src/content/sitio.ts` |
| Textos de secciones, preguntas frecuentes y pasos de reubicación | `src/app/page.tsx` (constantes `PASOS` y `PREGUNTAS` al inicio) |
| Lógica del mensaje de WhatsApp | `src/lib/mensaje.ts` (+ tests) |
| Colores, tipografía, botones, campos, movimiento | `src/app/globals.css` (tokens en `@theme`) |
| Íconos y láminas del esquema de reubicación | `src/components/graficos.tsx` |
| Fotos de comparación y del oficio | `src/components/FotoEditorial.tsx`, `public/img/{abeja,avispa,equipo}-{480,800,1200}.{avif,webp}` |
| Fotografía | Hero panorámico: `public/img/apicultor-panoramico-{640,960,1200,1600,1870}.{avif,webp}`. Móvil: `public/img/apicultor-{480,600,760,900}.{avif,webp}`. Origen y prompt: `docs/hero-panoramico.md` |
| Imagen para redes y favicon | `public/og.jpg`, `src/app/icon.png`, `src/app/apple-icon.png` |

### Contactos

Los valores están centralizados en `sitio.telefonos` y `sitio.correo`. Cada teléfono tiene tres formas: `visible` (como se muestra), `internacional` (para `tel:`) y `whatsapp` (solo dígitos, para `wa.me`). El número principal de la demo es 099 498 294; elegirlo como principal fue una decisión de la demo, no del cliente.

## Modo demo y publicación real

Con `modoDemo: true` (valor actual):

- la página lleva `<meta name="robots" content="noindex, nofollow">`;
- `robots.txt` bloquea todo y `sitemap.xml` sale vacío;
- `vercel.json` agrega la cabecera `X-Robots-Tag: noindex, nofollow` si se despliega en Vercel;
- no se declara URL canónica.

Para publicar el sitio real, cuando el cliente lo autorice:

1. Poner `modoDemo: false` en `src/content/sitio.ts`.
2. Definir `NEXT_PUBLIC_SITE_URL` con la URL definitiva. Activa `metadataBase`, la canónica, el sitemap y su referencia en `robots.txt`.
3. Quitar `vercel.json` (o su cabecera `X-Robots-Tag`).
4. Quitar la línea «Propuesta de rediseño · versión de presentación.» del pie en `src/app/page.tsx`.
5. Resolver los puntos pendientes de `docs/ENTREGA.md`.

Sin `NEXT_PUBLIC_SITE_URL`, el build avisa que `metadataBase` no está definida y, fuera de Vercel, la imagen Open Graph queda con una URL de localhost. En Vercel, Next usa `VERCEL_PROJECT_PRODUCTION_URL` o `VERCEL_BRANCH_URL` como base.
