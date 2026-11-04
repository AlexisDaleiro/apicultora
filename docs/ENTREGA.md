# Entrega: medios y datos a confirmar

Registro de lo que usa la demo y de lo que el cliente debe confirmar antes de publicar. La página pública no muestra estas notas.

## Inventario de medios

| Archivo | Origen | Carácter | Texto alternativo | Permiso pendiente |
| --- | --- | --- | --- | --- |
| `public/img/apicultor-{480,600,760,900}.{avif,webp}` | Derivados de `https://colmenasdelrio.com/_astro/hero.sprEmAM-_Z1UghaI.webp` (900 × 855), descargada el 2026-11-03. Original sin tocar en `docs/referencias/fuente/`. Solo se reescaló y recomprimió (ffmpeg, lanczos); sin cambios de color, recorte ni retoque. | Fotografía real publicada por la empresa | «Apicultor con traje de protección amarillo retirando panales de una abertura en una pared de ladrillo, bajo un alero.» | Confirmar autoría de la foto y permiso para usarla en la web nueva y en redes. La web actual da crédito de diseño a un tercero; la autoría de la foto no figura. |
| `public/img/apicultor-panoramico-{640,960,1200,1600,1870}.{avif,webp}` | Ampliación horizontal con `image_gen` de la foto original, pedida por el usuario el 2026-11-04. Fuente generada 1870 × 841 en `docs/referencias/fuente/hero-panoramico.png`; prompt en `docs/hero-panoramico.md`. | Imagen con entorno ampliado mediante IA; la extensión no documenta el lugar real. Se usa desde 640 px y se aclara en el epígrafe. | Mismo texto alternativo que la original | Mismo permiso de la fotografía de referencia |
| Láminas del esquema de reubicación (`src/components/graficos.tsx`) | Dibujo vectorial propio de esta propuesta | Ilustración conceptual (así lo dice el epígrafe) | Decorativas (`aria-hidden`); la información está en el texto de cada paso | Ninguno |
| `public/og.jpg` (1200 × 630) | Composición propia: firma tipográfica, titular y la fotografía real | Imagen para redes | `og:image:alt` «Colmenas del Río. Retiro de colmenas y nidos de avispas.» | Mismo permiso que la fotografía |
| `src/app/icon.png`, `src/app/apple-icon.png` | Monograma «CR» propio de la propuesta | Favicon propuesto, no logotipo oficial | No aplica | Aprobación del cliente si se adopta como marca |
| Ícono de WhatsApp | Trazado de Simple Icons (CC0) | Marca de terceros, solo para reconocer el canal | Oculto; el enlace tiene texto | Ninguno |
| Fuentes Archivo y Source Serif 4 | Google Fonts vía `next/font`, servidas desde el sitio | Tipografías | No aplica | Ninguno (SIL OFL 1.1) |

El hero panorámico incluye una ampliación generada con IA solicitada por el usuario. En móvil se conserva la fotografía original. Las fotos de referencia de abeja, avispa y oficio también fueron generadas por pedido del usuario el 2026-11-04; ver `docs/cuaderno-de-campo.md`. No se usaron imágenes de bancos de fotos.

### Ampliación visual para la demo

| Archivo | Origen y uso |
| --- | --- |
| `public/img/{abeja,avispa}-{480,800,1200}.{avif,webp}` | Dos macros generadas con `image_gen`, rotuladas como referencias ilustrativas. No representan ejemplares documentados ni una guía exhaustiva de identificación. Originales en `docs/referencias/fuente/` y prompts en `docs/cuaderno-de-campo.md`. |
| `public/img/equipo-{480,800,1200}.{avif,webp}` | Escena generada con dos personas ficticias para presentar el oficio. No muestra al equipo real de la empresa; así se identifica en el texto alternativo y el epígrafe. Se podrá reemplazar por material real del cliente. |
| `MapaDestino` en `src/components/graficos.tsx` | Contorno vectorial de Uruguay derivado de Natural Earth (dominio público, 1:110m). El sombreado representa el sur del país como destino general; no muestra ubicaciones concretas ni cobertura comercial. |

## Datos comerciales a confirmar

| Tema | Estado en la demo | A confirmar con el cliente |
| --- | --- | --- |
| Teléfonos y correo | 099 498 294, 099 205 608, leomenoni14@gmail.com, verificados en el sitio actual el 2026-11-03 | Que sigan vigentes y cuál prefiere como principal (la demo eligió 099 498 294) |
| WhatsApp | Enlaces `wa.me` a ambos números. El sitio actual muestra el ícono de WhatsApp junto a los teléfonos | Que ambos números tengan WhatsApp activo. No se verificó: no se enviaron mensajes |
| Zona de atención | No se publica; se pide «Consultanos por tu localidad» | Localidades o departamentos que atienden |
| Reubicación | «Las colonias rústicas de abejas que se reubican se trasladan a apiarios trazabilizados, en distintos predios del sur de Uruguay», según palabras del cliente | Qué significa «trazabilizados» para poder explicarlo sin exagerar; si se puede decir más del proceso |
| Avispas | «La forma de intervenir se define según cada caso» | Cómo describen ellos la intervención con avispas |
| Pasos de la reubicación (colonia, retiro y traslado, apiario) | Redactados como orientación general | Que el orden y las palabras sean correctos |
| Precio y presupuesto | «Depende de cada situación. Consultanos por tu caso.» | Si cobran la visita o el presupuesto |
| Trayectoria | No se usa. El sitio actual dice «9 años de experiencia» sin fecha | Año de inicio, si quieren mostrarlo |
| Clientes empresa | No se usa. El sitio actual menciona «empresas en general» | Si quieren una línea para empresas, predios o edificios |
| Horarios, tiempos de respuesta, seguros | No se mencionan | Solo agregar con datos confirmados |
| Nombre y marca | Firma tipográfica «Colmenas del Río» y monograma «CR» propuestos | Si existe logotipo vectorial o se aprueba la propuesta |
| Dominio | Sin canónica ni sitemap en la demo | URL definitiva para activar `NEXT_PUBLIC_SITE_URL` |
