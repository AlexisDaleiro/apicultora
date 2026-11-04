---
name: Colmenas del Río
description: Retiro de colmenas de abejas y nidos de avispas en Uruguay, presentado como una publicación documental de campo.
colors:
  paper: "#F2F0E8"
  paper-raised: "#FBFAF5"
  paper-press: "#E7E4D9"
  ink: "#202723"
  muted: "#60665B"
  rule: "#D6D8CD"
  control: "#7C8273"
  olive: "#3D4A36"
  olive-deep: "#2F3A29"
  olive-text: "#C9CDB9"
  olive-rule: "#66735C"
  oxide: "#A1442F"
  wax: "#E8C9A0"
  ink-text: "#C3C7BB"
  ink-rule: "#3E4741"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.625rem, 1.15rem + 6.3vw, 7rem)"
    fontWeight: 760
    lineHeight: 0.93
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2.9vw, 3.75rem)"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.35rem + 1.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 80"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.45vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  statement:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "clamp(1.25rem, 1rem + 0.9vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.35
  species:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
rounded:
  sm: "4px"
  focus: "2px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "2.5rem"
  column-gap: "1.5rem"
  section: "6rem"
  section-md: "9rem"
  touch: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.25rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.olive-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.25rem"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.paper-press}"
  field:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.875rem"
    height: "3rem"
  option-tile:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 0.75rem"
    height: "3rem"
  option-tile-checked:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.paper}"
  mobile-contact-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.75rem 1rem"
---

# Design System: Colmenas del Río

## Overview

**Creative North Star: "La publicación de campo"**

Un oficio especialista presentado como una publicación documental: la tipografía arma la página, la única fotografía real se trata como un documento y la reubicación de las abejas se explica con una sola lámina dibujada. Papel claro, tinta casi negra, un oliva profundo para la acción principal y la doble página de reubicación, y un óxido que solo marca (punto final del titular, subrayados al pasar, foco). Nada de sombras, nada de tarjetas ilustradas, nada de texturas de panal.

Objetivos de experiencia, en orden: quien encontró una colonia o un nido, con el teléfono en una mano y sin saber qué insecto es, tiene que poder escribir por WhatsApp o llamar sin leer ni bajar; después entender que no hace falta identificar el insecto; después ver la diferencia entre abejas y avispas; y por último saber adónde van las colonias reubicadas. Quien administra un predio o una empresa tiene que leer seriedad de especialista, no un folleto de control de plagas ni una tienda de miel.

Diferencias deliberadas respecto de la demo anterior (rechazada; captura en `docs/referencias/demo-anterior-1440.png`): el fondo verde petróleo pasa a papel `#F2F0E8`; los acentos amarillos desaparecen (el único amarillo de la página es el traje de la foto); no hay patrón de panal ni hexágonos; la foto ya no se recorta en hexágono, se muestra rectangular y entera; no hay abejitas ni apiarios ilustrados de adorno; los bloques de servicio ilustrados se reemplazan por dos columnas tipográficas separadas por una línea fina. La única ilustración es la lámina conceptual de reubicación, rotulada como tal.

**Key Characteristics:**
- Papel, tinta y oliva; óxido solo como marca editorial y foco.
- Archivo condensada y pesada para títulos; Source Serif 4 solo dentro de la sección de reubicación.
- Líneas de tinta de 1 y 2 px como estructura; filetes finos como divisores.
- Una fotografía de referencia, rectangular, con epígrafe y crédito; desde 640 px se usa su ampliación panorámica con IA solicitada por el usuario.
- Una lámina de tres paneles que comparten suelo y recorrido, y se dibuja al entrar en vista.
- Esquinas de 4 px, sin sombras, plano.

## Colors

Paleta de imprenta sobre papel: tinta verdosa casi negra, un oliva de campo para actuar y un óxido de sello para marcar.

### Primary
- **Oliva de campo** (olive): fondo del botón principal y de toda la sección de reubicación. Sobre papel 8.25:1; papel sobre oliva 8.25:1.
- **Oliva hondo** (olive-deep): hover del botón principal y relleno de los volúmenes en la lámina (cavidad, caja, colmenas). Papel sobre oliva hondo 10.47:1.

### Secondary
- **Óxido de sello** (oxide): solo marcas editoriales y foco. Punto final del h1, guion de la nota «No necesitás saber…», subrayado al pasar en navegación, enlaces y preguntas, cursor de texto (`caret-color`) y anillo de foco sobre fondos claros. Sobre papel 5.44:1. Sobre oliva da 1.52:1: por eso nunca es el color de foco en superficies oscuras.
- **Cera** (wax): anillo de foco dentro de `.sobre-oliva` y `.sobre-tinta`. Sobre oliva 5.96:1, sobre tinta 9.66:1.

### Neutral
- **Papel** (paper): fondo de página, `theme-color` y fondo de la barra móvil.
- **Papel alzado** (paper-raised): fondo de campos, opciones y vista previa del mensaje. Gris apagado sobre él 5.66:1.
- **Papel prensado** (paper-press): hover del botón secundario y fondo de reserva de la foto mientras carga. Tinta sobre él 11.99:1.
- **Tinta** (ink): texto, líneas estructurales de 1 y 2 px, borde del botón secundario y fondo del pie. Sobre papel 13.38:1.
- **Gris apagado** (muted): texto secundario, epígrafes, `dt`, respuestas de preguntas. Sobre papel 5.19:1.
- **Borde de control** (control): borde de campos, opciones y vista previa. Sobre papel 3.47:1 y sobre papel alzado 3.79:1 (cumple 3:1 de componentes no textuales).
- **Filete** (rule): divisores decorativos. Sobre papel 1.26:1.
- **Texto sobre oliva** (olive-text): texto secundario, numerales y epígrafe de la sección de reubicación; trazo punteado del recorrido. Sobre oliva 5.79:1.
- **Filete sobre oliva** (olive-rule): divisores dentro de la sección oliva. Decorativo.
- **Texto sobre tinta** (ink-text): texto secundario del pie. Sobre tinta 8.87:1.
- **Filete sobre tinta** (ink-rule): línea final del pie. Decorativo.

Pares medidos (WCAG 2.x, verificados contra los valores de `globals.css`):

| Texto o trazo | Fondo | Relación | Uso |
| --- | --- | --- | --- |
| ink | paper | 13.38 | texto principal |
| olive | paper | 8.25 | — |
| oxide | paper | 5.44 | marcas, foco |
| muted | paper / paper-raised | 5.19 / 5.66 | texto secundario |
| control | paper / paper-raised | 3.47 / 3.79 | borde de control |
| rule | paper | 1.26 | solo decorativo |
| paper | olive | 8.25 | botón principal, sección oliva |
| olive-text | olive | 5.79 | secundario sobre oliva |
| wax | olive / ink | 5.96 / 9.66 | foco en fondos oscuros |
| oxide | olive | 1.52 | prohibido |
| ink-text | ink | 8.87 | secundario del pie |
| paper | olive-deep | 10.47 | hover principal |
| ink | paper-press | 11.99 | hover secundario |

### Named Rules
**The Sello Rule.** El óxido marca, no rellena: nunca es fondo, nunca es texto corrido, nunca botón. Si una pantalla tiene más óxido que un punto, un guion y un subrayado, sobra.

**The Filete Rule.** El filete (`rule`, 1.26:1) nunca es el único límite de un control. Todo campo, opción o caja interactiva usa `control` o `ink`.

**The Foco Oscuro Rule.** Toda superficie oscura nueva lleva `.sobre-oliva` o `.sobre-tinta` para que el foco pase a cera; el óxido no se ve sobre oliva.

## Typography

**Display Font:** Archivo variable con eje `wdth` (con ui-sans-serif, system-ui)
**Body Font:** Archivo variable, ancho normal
**Serif:** Source Serif 4, solo redonda (con ui-serif, Georgia)
**Itálica:** Archivo itálica 400, instancia estática, solo para el nombre científico

**Character:** Una grotesca condensada y pesada que se lee como titular de diario técnico, con la misma familia a ancho normal para el texto; la serif aparece solo como voz de la sección documental de reubicación.

### Hierarchy
- **Display** (760, `font-stretch: 80%`, clamp 2.625rem → 7rem, interlineado 0.93, -0.025em): solo el h1. Su punto final va en óxido.
- **Headline** (760, 80%, clamp 1.875rem → 3.75rem, 1, -0.02em): todos los h2 de sección.
- **Title** (700, 80%, clamp 1.75rem → 2.5rem, 1.05, -0.015em): h3 «Abejas» y «Avispas».
- **Título menor** (700, 85%, 1.375rem a 1.875rem, interlineado 1.25): títulos de pasos, título del preparador de mensaje, frase de la franja «¿No sabés qué insecto es?».
- **Pregunta** (600, ancho normal, 1.1875rem / md 1.375rem, 1.375): resumen de cada pregunta frecuente.
- **Lead** (400, clamp 1.125rem → 1.375rem, 1.45): texto de apoyo junto a cada h2, medida 34–38ch.
- **Body** (400, clamp 1.0625rem → 1.1875rem, 1.6): texto corrido, medida 36–52ch; respuestas hasta 60ch.
- **Label / meta** (400 o 600, 0.875rem, 1.45): folio, epígrafes, ayudas de campo, estado de copia, títulos del pie.
- **Declaración serif** (Source Serif 4 400, clamp 1.25rem → 1.75rem, 1.35): solo la declaración de reubicación. Numerales de pasos en serif 1.125rem 400 `olive-text`; epígrafe de la lámina en serif 0.875rem.
- **Firma** (Archivo, `font-stretch: 78%`, interlineado 1, -0.01em): «Colmenas» 800 + «del Río» 400; 1.3125rem / md 1.4375rem en el encabezado, 1.5rem en el pie. Es una propuesta, no un logotipo oficial.
- **Botones** 600, 1.0625rem, 1.2. **Navegación** 500.

Corte de títulos: `text-wrap: balance` en h1–h3; `text-wrap: pretty` en `p`, `li` y `dd`. Los títulos no se cortan a mano con `<br>`; en el pie, «Foto: Colmenas del Río.» va con `white-space: nowrap`. Teléfonos con `tabular-nums`.

### Named Rules
**The Serif Confinada Rule.** Source Serif 4 vive solo dentro de `#reubicacion` (declaración, numerales, epígrafe de la lámina). Fuera de ahí, todo epígrafe y toda nota es Archivo.

**The Itálica Real Rule.** La única itálica es *Apis mellifera* con `.nombre-cientifico` (Archivo itálica real, `font-synthesis: none`). No se usa itálica para énfasis.

**The Ancho Rule.** Condensación solo en títulos: 80% para h1–h3, 85% para títulos menores, 78% para la firma. El texto corrido va siempre a ancho normal.

## Layout

Contenedor `.contenedor`: ancho máximo 80rem, centrado, márgenes laterales 1.25rem, 2rem desde 40rem y 2.5rem desde 64rem. Puntos de corte de Tailwind: sm 40rem, md 48rem, lg 64rem. Grilla de 12 columnas con separación de 1.5rem desde md (desde lg en contacto y preguntas). Debe funcionar a 320 px y 200 % de zoom.

**Encabezado.** Móvil: firma y botón WhatsApp en una fila, navegación en una segunda fila con filete superior. lg: firma, navegación alineada a la derecha y botón en una sola fila. Debajo, el **folio**: una franja entre dos líneas de tinta de 1 px, texto meta, «Colmenas del Río · Uruguay» a la izquierda y el tema en gris a la derecha.

**Primera pantalla.** Móvil: h1, apoyo, acciones apiladas, nota y foto original a sangre (se come los márgenes del contenedor por debajo de sm), epígrafe debajo. Desde sm se usa la imagen panorámica. md: h1 en las 12 columnas; abajo, apoyo y nota a la izquierda y acciones a la derecha; luego, foto en las 12 columnas. lg: h1 en columnas 1–8 y acciones en 9–12 en la misma fila; debajo, la foto ocupa las 12 columnas (hasta 1200 px), con el epígrafe debajo.

**Ritmo de secciones.** Cada sección se separa con `mt-24` (6rem) y `md:mt-36` (9rem); el cierre termina con 6rem / md 8rem. Las secciones sobre papel abren con una línea de tinta de 2 px y 1.5rem de aire (2.5rem en el cierre). Patrón de cabecera: h2 en columnas 1–6 y lead en 8–12. La sección de reubicación es una banda oliva a ancho completo con 5rem / md 7rem de relleno vertical.

**Lámina.** Móvil: tres pasos apilados con 3rem entre sí. md: tres columnas sin separación; cada panel cancela con margen negativo el relleno derecho de su columna (2rem, lg 3rem) para que los tres dibujos se toquen y lean como una sola lámina.

**Móvil.** Objetivos táctiles mínimos de 44 px (`min-h-11`); botones de 48 px. Por debajo de 48rem, `scroll-padding-bottom: 6rem` deja libre la barra de contacto fija; `scroll-padding-top: 1.5rem` siempre.

## Elevation & Depth

Plano. No hay `box-shadow` en ningún lugar. La profundidad se arma con tono y línea: papel alzado para controles, papel prensado para hover, la banda oliva y el pie en tinta como cambios de plano, y líneas de tinta para jerarquía. La barra móvil fija se separa del contenido con una línea de tinta de 1 px, no con sombra.

### Named Rules
**The Sin Sombra Rule.** Ninguna superficie se levanta con sombra. Si algo necesita separarse, recibe una línea o un cambio de tono.

## Shapes

**Esquinas.** 4 px en botones, campos, opciones, caja de vista previa y enlace de salto. El anillo de foco redondea 2 px. La foto y las secciones no tienen radio. En la lámina, los rectángulos rellenos llevan 1.5–3 de radio en unidades del viewBox.

**Líneas.** Tinta 1 px para el folio, la tabla de contacto y la barra móvil. Tinta 2 px para abrir secciones, la franja «¿No sabés qué insecto es?» y el preparador de mensaje. Filete 1 px (`rule`) entre bloques de servicio, filas y preguntas; `olive-rule` y `ink-rule` cumplen ese papel sobre oliva y tinta. Bordes de control de 1.5 px. Guiones de 24 × 1 px como marcador de nota (óxido) o de epígrafe (tinta).

**Iconografía.** Íconos propios de trazo en `graficos.tsx`: viewBox 24, trazo 1.75, puntas y uniones redondeadas, 1.25em, `currentColor`, siempre ocultos (`aria-hidden`) junto a texto: teléfono, correo, flecha (derecha y abajo), copiar. La única marca de terceros es WhatsApp, rellena, trazado de Simple Icons (CC0). El signo de las preguntas son dos barras de 2 px en CSS.

**Fotografía.** En móvil (<640 px), foto real original (900 × 855), con crédito «Foto: Colmenas del Río.», servida en AVIF y WebP (480, 600, 760, 900). Desde 640 px, ampliación panorámica con IA (1870 × 841) de esa misma foto, solicitada por el usuario el 2026-11-04, con epígrafe que aclara la ampliación. Versiones AVIF y WebP de 640, 960, 1200, 1600 y 1870 px. Ambas se muestran enteras, rectangulares, sin filtros ni texto superpuesto. Fuente y prompt en `docs/hero-panoramico.md`.

**Ilustración.** Solo la lámina de reubicación: tres paneles SVG de 320 × 200 (colonia en un muro, caja de traslado, apiario de destino), trazo papel 1.75 sobre oliva, volúmenes rellenos en oliva hondo. Comparten suelo en y = 182 y recorrido punteado en y = 22 (`olive-text`, 1.5, `2 7`); en md+ se unen en una sola lámina. En móvil el recorrido (y la flecha final) se ocultan porque los paneles están apilados. El epígrafe dice «Ilustración conceptual».

## Components

### Buttons
Rectángulos firmes con ícono a la izquierda, sin adorno.
- **Shape:** 4 px, alto mínimo 3rem, relleno 0.625rem × 1.25rem, separación de ícono 0.625rem, borde 1.5px.
- **Primario** (`.boton-primario`): oliva con texto papel. Una acción principal por bloque: WhatsApp.
- **Secundario** (`.boton-secundario`): transparente, borde y texto tinta. Llamar, copiar, ir a contacto.
- **Hover:** primario a oliva hondo; secundario a papel prensado (160 ms).
- **Active:** baja 1 px (`translateY(1px)`, 120 ms).
- **Focus-visible:** anillo de 2 px, separado 3 px, óxido (cera en fondos oscuros).
- **Botón del encabezado:** alto 44 px, relleno lateral 0.875rem / sm 1rem; dice «WhatsApp» en móvil (solo para lector por debajo de 360 px) y «Consultar por WhatsApp» desde md.
- **Par de acciones:** WhatsApp + «Llamar al …» en fila desde sm; en columna dentro de las columnas angostas del héroe, contacto y cierre.

### Links
- **Enlace** (`.enlace`): subrayado de 1 px en el color del texto, separado 0.22em. Hover: subrayado óxido de 2 px (160 ms). Mínimo 44 px de alto en listas y tablas.
- **Navegación:** peso 500, sin subrayado en reposo; hover subrayado óxido de 2 px separado 0.4em. No hay estado de página actual (es una sola página con anclas). En móvil, fila propia bajo un filete.
- **Enlace de salto:** oculto hasta recibir foco; entonces tinta con texto papel, fijo arriba a la izquierda.

### Inputs / Fields
- **Campo** (`.campo`): papel alzado, borde 1.5px `control`, 4 px, alto 3rem, relleno 0.625rem × 0.875rem. Etiqueta en 600 arriba y ayuda meta en gris debajo, vinculada con `aria-describedby`. Cursor óxido.
- **Hover:** borde tinta.
- **Focus-visible:** borde tinta y anillo óxido separado 1 px.
- **Error / deshabilitado:** no existen; todos los datos son opcionales y no se valida nada.

### Opciones (radios)
- **Estilo:** tres fichas en grilla de 3 columnas, separación 0.5rem, alto 3rem, papel alzado, borde 1.5px `control`, 4 px, radio nativo con `accent-color` papel.
- **Hover:** borde tinta.
- **Checked:** ficha completa en oliva, borde oliva, texto papel.
- **Focus-visible:** el anillo óxido (2 px, separado 2 px) lo dibuja la ficha, no el radio.

### Vista previa y estado de copia
- **Vista previa:** caja papel alzado, borde 1px `control`, 4 px, relleno 1rem × 1.25rem; rótulo meta 600 gris «Tu mensaje» y el texto a 1.125rem.
- **Estado** (`role="status"`): línea meta 500 en tinta, con alto reservado para que nada salte. Éxito: «Mensaje copiado.». Error: «No se pudo copiar automáticamente. El mensaje quedó seleccionado para que lo copies.» (el texto queda seleccionado). Sin color de estado: el mensaje dice lo que pasó.

### Preguntas (details / summary)
- **Cerrada:** fila de 56 px mínimo, pregunta en 600 a la izquierda, signo + de 20 px a la derecha, filete inferior.
- **Hover:** la pregunta se subraya en óxido de 2 px.
- **Abierta:** la barra vertical del signo gira 90° (200 ms) y queda como −; la respuesta en gris, hasta 60ch, se despliega en altura (220 ms) donde hay soporte.
- **Focus-visible:** anillo óxido sobre el `summary`.

### Barra de contacto móvil
Solo por debajo de md. Fija abajo, papel con línea de tinta superior, WhatsApp (primario) y Llamar (secundario) en dos columnas, respeta `safe-area-inset-bottom`. Arranca oculta; aparece solo cuando no hay en pantalla otro bloque con contacto (acciones del héroe, contacto, cierre, pie). Sin JavaScript nunca aparece.

### Lámina de reubicación (componente firma)
Tres pasos numerados en serif sobre la banda oliva, cada uno con su panel, título menor y texto `olive-text`, separados por filetes `olive-rule`, cerrados con el epígrafe serif. El trazo se dibuja una vez al entrar en vista.

### Movimiento
- **Duraciones:** 120 ms (presión del botón), 160 ms (colores, bordes, subrayados), 200 ms (signo de preguntas, barra móvil), 220 ms (altura de respuestas).
- **Curva:** `--ease-salida` = `cubic-bezier(0.22, 1, 0.36, 1)` en todas las transiciones propias.
- **Lámina:** `.lamina .trazo` se dibuja con `stroke-dasharray: 1` y `stroke-dashoffset` de 1 a 0, atado a `view-timeline` del bloque, `animation-range: entry 10% cover 40%`. Todo dentro de `@supports ((animation-timeline: view()) and (animation-range: entry))` y `prefers-reduced-motion: no-preference`; sin soporte, la lámina se ve completa.
- **Preguntas:** `interpolate-size: allow-keywords` y `::details-content` de altura 0 a `auto` con `content-visibility` discreto, solo bajo `@supports`; sin soporte abren de golpe.
- **Barra móvil:** `translate` y `visibility` en 200 ms; oculta = desplazada 100 % hacia abajo e invisible (no recibe foco).
- **Movimiento reducido:** sin desplazamiento suave, todas las transiciones y animaciones a 0.01 ms, la lámina estática y completa.

## Do's and Don'ts

### Do:
- **Do** usar solo los tokens de `@theme` en `globals.css`; un color nuevo entra primero ahí con su contraste medido en comentario.
- **Do** abrir cada sección nueva sobre papel con una línea de tinta de 2 px y separarla con 6rem / md 9rem.
- **Do** componer en la grilla de 12 columnas dentro de `.contenedor`, con h2 en 1–6 y lead en 8–12.
- **Do** poner títulos en Archivo 760 al 80% (h1, h2) o 700 al 80–85% (h3 y menores), con `text-wrap: balance`.
- **Do** marcar toda superficie oscura con `.sobre-oliva` o `.sobre-tinta` para que el foco sea cera.
- **Do** mantener 44 px mínimos en todo lo tocable y WhatsApp + llamada visibles en cada bloque de cierre.
- **Do** usar `--ease-salida` y las duraciones 120/160/200/220 ms; envolver toda animación nueva en `prefers-reduced-motion: no-preference` y dejar el estado final visible sin ella.
- **Do** rotular toda ilustración como conceptual y mantener sus trazos en papel sobre oliva, con suelo y recorrido compartidos si se agregan paneles.

### Don't:
- **Don't** volver a la demo anterior: nada de fondo verde petróleo, acentos amarillos, patrón de panal, hexágonos, foto recortada en forma, abejitas o apiarios ilustrados de adorno, ni bloques de servicio ilustrados.
- **Don't** usar el óxido como fondo, texto corrido o botón, ni como foco sobre oliva (1.52:1).
- **Don't** usar `rule` como único borde de un control.
- **Don't** agregar sombras, degradados, texturas ni radios mayores a 4 px.
- **Don't** usar Source Serif 4 fuera de la sección de reubicación ni itálica fuera de *Apis mellifera*.
- **Don't** agregar rótulos sobre los títulos (kickers), íconos en tarjetas ni emojis.
- **Don't** usar fotos de banco o de otro caso; ni recortar, filtrar o superponer texto a la foto real. La ampliación panorámica con IA del hero es una excepción pedida por el usuario y se identifica en el epígrafe.
- **Don't** condensar el texto corrido ni bajar el cuerpo de 1.0625rem.

### Contenido
Principios: contacto primero (WhatsApp y teléfono sin leer ni completar nada); «no sé qué insecto es» es una entrada válida; toda afirmación sale de palabras del cliente; abejas y avispas nunca se mezclan (la reubicación es solo de colonias rústicas de abejas y no toda colonia se reubica); voz rioplatense, profesional y directa, sin humor ni eslóganes. La zona de atención no se publica: «Consultanos por tu localidad»; el sur de Uruguay es solo el destino de las colonias reubicadas.

No agregar sin confirmación del cliente (ver `PRODUCT.md` y `docs/ENTREGA.md`): precios, presupuesto gratis o cobro de visita; zona de atención; atención 24 h, horarios o tiempos de respuesta; garantías, seguros, certificaciones o registros; «sin químicos»; reparación de obra o seguimiento posterior; qué significa «trazabilizados» más allá de la frase del cliente; cómo intervienen con avispas; trayectoria («9 años»); línea para empresas; testimonios, logos de clientes, cifras de retiros, calificaciones o premios; fotos de apiarios o del equipo; que ambos números tengan WhatsApp activo; la firma «Colmenas del Río» y el monograma «CR» como marca oficial; autoría y permiso de la foto.
