# Hero panorámico

Actualización: 2026-11-04 (Uruguay). Pedido del usuario: generar una imagen más grande y ocupar más ancho en el hero.

- Herramienta: generación integrada de imágenes (`image_gen`), edición con la foto original como referencia.
- Original conservado: `docs/referencias/fuente/hero-original.png` (900 × 855).
- Resultado generado: `docs/referencias/fuente/hero-panoramico.png` (1870 × 841). Se extendió el entorno horizontalmente; la parte generada no documenta el lugar real.
- Versiones web: `public/img/apicultor-panoramico-{640,960,1200,1600,1870}.{avif,webp}`. Redimensionadas y comprimidas con Sharp; sin agrandar artificialmente la salida generada.
- Escritorio: foto en las 12 columnas, hasta 1200 px visibles (antes ~588 px); epígrafe debajo y aclaración del encuadre ampliado con IA.
- Móvil (<640 px): se conserva el encuadre y las variantes originales, a sangre, para que se vean el apicultor y los panales sin recortarlos.

## Verificación

- Revisión del export estático en navegador: 320, 375, 640, 768, 1024, 1280 y 1440 px. Imágenes cargadas y sin desborde horizontal. En 1440 px la imagen mide 1200 × 540 px aproximadamente.
- Capturas: `docs/capturas/hero-panoramico-{375,768,1440}.jpg`.
- Consola del navegador: sin errores ni advertencias.
- `npm run lint` y `npm run typecheck`: aprobados.
- Build y export estático: aprobados usando temporalmente `experimental.turbopackPluginRuntimeStrategy: "forceWorkerThreads"`. Con la configuración habitual, el proceso auxiliar de Turbopack cerró antes de conectarse (exit 0) en este entorno, también fuera de la ejecución restringida. Se usó la alternativa solo para verificar; `next.config.ts` se restauró a su contenido original. No se dejó activada la opción experimental, que advierte de un posible fallo de cierre de workers con Node 24.13.1 o superior.
- No se volvieron a ejecutar las auditorías de rendimiento de la versión anterior; sus cifras no describen este hero.

## Prompt final

```text
Use case: precise-object-edit
Asset type: wide panoramic website hero image for Colmenas del Río, a beehive removal service in Uruguay.
Input image 1: edit target, the existing real photo of a beekeeper wearing a yellow protective suit removing honeycomb from an opening in a brick wall under a concrete roof eave.
Primary request: outpaint this photo horizontally to create a much wider high-resolution panorama, approximately 2400 × 1080 pixels (20:9). Preserve the original beekeeper, yellow suit, mesh veil, brick opening and visible honeycomb, textures, documentary photographic character, perspective and warm late-afternoon light. Keep the entire original scene visible in the central-right portion. Extend the building and wall naturally to the left and a little to the right, with credible construction details consistent with the reference. The beekeeper and colony must remain large and clearly readable, not tiny in a distant landscape.
Composition/framing: a single continuous landscape photograph, wide environmental view at the same low camera angle, straight rectangular edges, intended to span a website content width of 1200 CSS pixels. Place the beekeeper around the right third and the opening around the center. Natural daylight, restrained documentary detail.
Constraints: preserve only the one original beekeeper; no additional people. Do not crop the protective veil or honeycomb. No added logos, lettering, captions, borders, gradients, graphic overlays or watermarks. Do not render a webpage. Output only the completed panoramic photograph.
```
