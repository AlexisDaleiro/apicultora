# Cuaderno de campo: ampliación creativa

Pedido del usuario, 2026-11-04: aplicar comparación de insectos, mapa de destino, detalles editoriales y una sección humana con imágenes generadas para esta demo de venta.

## Imágenes y origen

Generadas con la herramienta integrada `image_gen`, sin CLI/API externa ni banco de fotos. Las personas son ficticias: la imagen no documenta al equipo real. Los epígrafes de la página identifican las imágenes como ilustrativas de la propuesta.

- Originales generados: `docs/referencias/fuente/{abeja,avispa,equipo}-propuesta.png`.
- Versiones web: `public/img/{abeja,avispa,equipo}-{480,800,1200}.{avif,webp}`. Redimensionadas a 4:3 y comprimidas con Sharp. Carga diferida, dimensiones reservadas y selección según pantalla.
- Contorno de Uruguay: Natural Earth, dominio público, escala 1:110m. El sombreado es una referencia amplia del sur del país, no cobertura de atención ni ubicaciones de apiarios.
- Datos cartográficos conservados en `docs/referencias/geografia/uruguay-natural-earth.geojson` y trazado derivado en `uruguay-path.txt`.

## Fuentes de referencia

- Diferencias visuales generales: [Texas A&M, Bee Identification](https://txbeeinspection.tamu.edu/public/bee-identification/), [UW–Madison, Identifying Non-Bee Flower Visitors](https://pollinators.wisc.edu/bee-identification/non-bee-pollinators/). Los rasgos no se presentan como una clave de identificación exhaustiva. No se asigna una especie concreta a la avispa ni se afirma que todas las avispas tengan ese aspecto.
- Cartografía: [Natural Earth, Admin 0 Countries](https://www.naturalearthdata.com/downloads/110m-cultural-vectors/110m-admin-0-countries/), [datos fuente](https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson).

## Verificación

Verificación final: lint y tipos aprobados. Build/export estático aprobado con la alternativa temporal de compilación descrita en `docs/hero-panoramico.md`; `next.config.ts` se restauró sin activar esa opción. Revisión visual en 320, 375, 640, 768, 1024 y 1440 px: sin desborde, imágenes cargadas, comparación alineada en dos columnas desde tablet y apilada en móvil. Navegación móvil en una fila incluso a 320 px. Enlace del bloque del oficio al contacto comprobado; consola sin errores ni advertencias.

Capturas de la versión nueva: `docs/capturas/cuaderno-comparacion-{375,1440}.jpg`, `cuaderno-equipo-{375,1440}.jpg`, `cuaderno-reubicacion-1440.jpg`. No se repitieron las auditorías Lighthouse anteriores: sus métricas corresponden al diseño anterior.

Revisión React: los componentes nuevos son estáticos y no agregan JavaScript de cliente, hooks ni dependencias; imágenes con dimensiones reservadas, carga diferida, variantes AVIF/WebP y textos alternativos. El mapa es decorativo y su información se repite en texto.

## Prompts finales

### abeja

```text
Use case: photorealistic-natural
Asset type: editorial macro photograph for a side-by-side honeybee versus wasp visual reference on a Uruguayan beekeeping service demo website.
Primary request: a single anatomically realistic western honeybee, Apis mellifera, photographed in crisp lateral three-quarter profile on the edge of a weathered pale wood plank. Clearly visible fuzzy golden-brown thorax, fine hairs, subtle amber and brown abdominal bands, six correctly attached legs and delicate transparent wings. The bee faces left, whole insect entirely inside the frame, generously sized occupying about half the image width. Quiet shallow-focus backdrop of sage green meadow grasses, warm cream and olive earth tones, soft natural late afternoon light, restrained saturation, detailed documentary macro photography, realistic lens and texture. Landscape 4:3 composition, approximately 1600 by 1200. This will be paired with a wasp photographed at the same scale and angle.
Constraints: one bee only, no people, no honeycomb patterns, no decorative flowers, no labels, no lettering, no watermarks, no page mockup, no CGI or illustration. Neutral informative mood, no threatening presentation. Anatomically plausible and recognizable.
```

### avispa

```text
Use case: photorealistic-natural
Asset type: editorial macro photograph for a side-by-side honeybee versus wasp visual reference on a Uruguayan beekeeping service demo website.
Primary request: a single anatomically realistic common social yellowjacket-type wasp in crisp lateral three-quarter profile on the edge of a weathered pale wood plank. Clearly visible smooth nearly hairless black and yellow body, slender pinched waist between thorax and abdomen, six correctly attached slender legs, transparent folded wings, correct antennae. The wasp faces left, whole insect entirely inside frame, generously sized occupying about half the image width. Quiet shallow-focus backdrop of sage green meadow grasses, warm cream and olive earth tones, soft natural late afternoon light, restrained saturation, detailed documentary macro photography, realistic lens and texture. Landscape 4:3 composition, approximately 1600 by 1200. This will be paired with a honeybee photographed at the same scale and angle.
Constraints: one wasp only, no people, no nest or honeycomb patterns, no decorative flowers, no labels, no lettering, no watermarks, no page mockup, no CGI or illustration. Neutral informative mood, no threatening presentation. Anatomically plausible and recognizable.
```

### equipo

```text
Use case: photorealistic-natural
Asset type: landscape editorial photograph for the people / craft section of a beekeeping service website design demo. The people are fictional; this is a conceptual team image for the proposal, not a photograph of the actual business owners.
Primary request: a natural, candid portrait of two adult beekeepers, a woman and a man around 35–50 years old, sharing a quiet conversation beside a closed wooden hive in a rural meadow in southern Uruguay. Three-quarter waist-up environmental composition, both faces clearly visible with friendly thoughtful expressions, looking toward each other instead of posing at camera. Off-white practical beekeeping jackets, protective hoods resting behind their heads, the man has simple yellow work gloves resting on the closed wooden box, the woman is listening with hands naturally resting. No active exposed bees or open honeycomb when veils are down. Authentic modest outdoor work clothes, realistic skin texture and small signs of use, unforced warmth. Rural Uruguayan grassland with low trees and a couple of plain wooden apiary boxes softly out of focus in background. Soft side-lit golden afternoon, muted olive greens and paper-cream tones, restrained amber highlights. Professional documentary photography, 50mm lens feel, subtle film grain, medium depth of field, no heavy color filter. Landscape 4:3, approximately 1800 by 1350, both people entirely inside frame from waist upward with breathing room around their heads.
Constraints: exactly two fictional people, no recognizable public figures, no logos, no lettering, no watermarks, no webpage, no exaggerated studio smiles or corporate stock-photo poses. Correct natural hands, no extra fingers, no ornate props.
```
