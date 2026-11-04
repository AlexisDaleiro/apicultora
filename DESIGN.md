---
name: Colmenas del Río
description: Retiro de colmenas de abejas y nidos de avispas en Uruguay. Página compacta y de alto contraste, con la fotografía como protagonista y un esquema animado de la reubicación.
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
    fontSize: "clamp(2.75rem, 0.5rem + 9.9vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 75"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 75"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1.2vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 75"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.45vw, 1.3125rem)"
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
    fontSize: "clamp(1.25rem, 1.05rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.3
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
  section-mobile: "1.75rem"
  section-desktop: "2.75rem"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.875rem"
    height: "3rem"
  option-tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 0.75rem"
    height: "3rem"
  option-tile-checked:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    hoverFill: "{colors.wax}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    borderColor: "{colors.ink-text}"
    hoverFill: "{colors.paper}"
  mobile-contact-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.75rem 1rem"
---

# Design System: Colmenas del Río

Preferencia vigente del usuario (2026-11-04, segunda ronda): página compacta, contemporánea y con carácter, fotografía protagonista y animaciones de calidad. Fuera del sistema: rótulos tipo «03 — El oficio», numeraciones decorativas (los pasos de la reubicación tampoco llevan número: la lista ordenada ya da la secuencia), epígrafes «Fig.», folio «Cuaderno de campo», frases genéricas y grandes espacios entre secciones. Tercera ronda (mismo día): sin avisos sobre la propia demo en la página (créditos de foto, «ampliada con IA», «generada para esta propuesta», «propuesta de rediseño»); el origen de las imágenes queda documentado en `docs/ENTREGA.md`.

## Overview

**Creative North Star: "Del muro al apiario"**

Un servicio de campo contado en tres superficies: tinta (el hecho: una colonia en una casa, foto a sangre), papel (la duda: ¿abejas o avispas?) y oliva (el destino: la colonia viaja a un apiario del sur). La tipografía condensada y muy pesada arma la página; la foto panorámica la abre; el esquema animado de la reubicación es su pieza firma. Sin sombras, sin tarjetas decorativas, sin texturas de panal.

Objetivos, en orden: escribir por WhatsApp o llamar sin bajar (las dos acciones están en la primera pantalla a 375, 768 y 1440 px); entender que no hace falta identificar el insecto; ver la diferencia entre abejas y avispas; saber adónde van las colonias reubicadas.

**Key Characteristics:**
- Héroe sobre tinta con titular gigante en dos líneas y la panorámica a sangre (hasta 1600 px) justo debajo.
- Cambios de superficie (tinta, papel, oliva, papel, tinta) en lugar de aire para separar secciones.
- Archivo condensada (75 %) y extrabold para títulos; Source Serif 4 solo en la declaración de reubicación.
- Cera como acento sobre oscuro, óxido como marca sobre papel.
- Dos animaciones protagonistas (entrada del héroe y esquema de reubicación) y un acompañamiento ligado al desplazamiento.

## Colors

Paleta de imprenta sobre papel: tinta verdosa casi negra, un oliva de campo para actuar y un óxido de sello para marcar.

### Primary
- **Oliva de campo** (olive): fondo del botón principal y de toda la sección de reubicación. Sobre papel 8.25:1; papel sobre oliva 8.25:1.
- **Oliva hondo** (olive-deep): hover del botón principal y relleno de los volúmenes en la lámina (cavidad, caja, colmenas). Papel sobre oliva hondo 10.47:1.

### Secondary
- **Óxido de sello** (oxide): solo marcas editoriales y foco. Subrayado al pasar en enlaces y preguntas, cursor de texto (`caret-color`) y anillo de foco sobre fondos claros. Sobre papel 5.44:1. Sobre oliva da 1.52:1: por eso nunca es el color de foco en superficies oscuras.
- **Cera** (wax): acento de las superficies oscuras. Punto final del h1, relleno de hover del botón claro, trazo de navegación, recorrido, cajón y llegada del esquema, barras de los pasos y anillo de foco dentro de `.sobre-oliva` y `.sobre-tinta`. Sobre oliva 5.96:1, sobre tinta 9.66:1. Nunca sobre papel.

### Neutral
- **Papel** (paper): fondo de página, `theme-color` y fondo de la barra móvil.
- **Papel alzado** (paper-raised): fondo de campos, opciones y vista previa del mensaje. Gris apagado sobre él 5.66:1.
- **Papel prensado** (paper-press): hover del botón secundario y fondo de reserva de la foto mientras carga. Tinta sobre él 11.99:1.
- **Tinta** (ink): texto, líneas estructurales de 1 y 2 px, borde del botón secundario y fondo del pie. Sobre papel 13.38:1.
- **Gris apagado** (muted): texto secundario, `dt`, respuestas de preguntas. Sobre papel 5.19:1.
- **Borde de control** (control): borde de campos, opciones y vista previa. Sobre papel 3.47:1 y sobre papel alzado 3.79:1 (cumple 3:1 de componentes no textuales).
- **Filete** (rule): divisores decorativos. Sobre papel 1.26:1.
- **Texto sobre oliva** (olive-text): texto secundario de la sección de reubicación, nota del mapa y contorno del país. Sobre oliva 5.79:1.
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
**The Sello Rule.** El óxido marca, no rellena: nunca es fondo, nunca es texto corrido, nunca botón. Vive solo sobre papel; sobre tinta y oliva ese papel lo cumple la cera.

**The Filete Rule.** El filete (`rule`, 1.26:1) nunca es el único límite de un control. Todo campo, opción o caja interactiva usa `control` o `ink`.

**The Foco Oscuro Rule.** Toda superficie oscura nueva lleva `.sobre-oliva` o `.sobre-tinta` para que el foco pase a cera; el óxido no se ve sobre oliva.

**The Cera Rule.** La cera solo aparece sobre tinta u oliva, como punto, trazo o relleno breve de hover. Nunca es fondo de sección ni texto corrido.

## Typography

**Display:** Archivo variable, eje `wdth` al 75 %, peso 800. **Texto:** Archivo a ancho normal. **Serif:** Source Serif 4, solo la declaración de reubicación. **Itálica:** Archivo itálica real, solo *Apis mellifera*.

### Hierarchy
- **Display** (800, 75 %, clamp 2.75rem → 9.5rem, 0.9, -0.03em): solo el h1, en dos líneas de código («Retiro de colmenas» / «y nidos de avispas.»), cada una en su máscara `.linea`. A 1440 px casi llena el contenedor. Punto final en cera.
- **Headline** (800, 75 %, clamp 2rem → 3.5rem, 0.98): h2.
- **Title** (800, 75 %, clamp 1.625rem → 2.25rem): «Abejas», «Avispas».
- **Título menor** (700–800, 78–85 %, 1.25rem a 2rem): pasos del esquema, título del preparador.
- **Lead** (400, clamp 1.125rem → 1.3125rem): apoyo del héroe y del contacto, 36–38ch.
- **Body** (400, clamp 1.0625rem → 1.1875rem, 1.6).
- **Meta** (0.875rem): rasgos de los insectos, ayudas de campo, nota del mapa.
- **Declaración serif** (Source Serif 4 400, clamp 1.25rem → 1.625rem, 1.3).
- **Firma** «Colmenas» 800 + «del Río» 400 al 75 %; 1.375rem / md 1.5rem.

### Named Rules
**The Serif Confinada Rule.** Source Serif 4 vive solo en la declaración de `#reubicacion`.

**The Ancho Rule.** Condensación solo en títulos y firma. El texto corrido va a ancho normal.

## Layout

Contenedor `.contenedor`: 80rem, márgenes 1.25rem / sm 2rem / lg 2.5rem. Puntos de corte de Tailwind (sm 40rem, md 48rem, lg 64rem, xl 80rem). Sin desborde horizontal a 320 px.

**Ritmo.** Relleno vertical de sección 1.75–2rem en móvil (`py-7`, `py-8`) y 2.75–3rem desde md (`py-11`, `py-12`). Entre títulos y contenido, 1.25–1.75rem. Las secciones se distinguen por superficie y composición, no por aire. La única línea de tinta que abre una sección es la de preguntas frecuentes, que comparte papel con contacto.

**Encabezado.** Sobre tinta, sin botón propio (las acciones del héroe están inmediatamente debajo). Firma a la izquierda, navegación a la derecha; en móvil la navegación baja a una segunda fila.

**Héroe.** h1 a todo el ancho. Debajo, lead y acciones: en una fila desde lg (lead a la izquierda, botones a la derecha), apilados por debajo. Luego la foto a sangre: original 900 × 855 por debajo de 640 px; panorámica 1870 × 841 desde 640 px, centrada hasta 1600 px, sin epígrafe: la foto cierra el bloque de tinta y da paso al papel.

**Servicio.** Cabecera: solo el h2. Dos artículos: en móvil, foto 4:5 a la izquierda (5/12) y texto a la derecha; desde md, dos columnas con foto 3:2 y, debajo, título y rasgos a la izquierda, texto y enlace a la derecha.

**Reubicación.** Banda oliva. Desde lg: declaración y pasos en columnas 1–4, esquema en 5–12. Por debajo: declaración, esquema y pasos (en tres columnas desde sm).

**Contacto.** Desde lg: columnas 1–5 con título, lead, acciones, teléfono alternativo, correo y la foto de equipo, que se estira (`flex-1`) hasta igualar el alto del formulario; columnas 6–12 con el preparador. Sin JavaScript el preparador se oculta.

**Preguntas.** h2 en 1–4, lista en 5–12.

**Pie.** Tinta, una fila desde md: firma y descripción, contactos.

**Móvil.** Objetivos táctiles de 44 px o más; botones de 48 px. `scroll-padding-bottom: 6rem` por la barra fija.

## Elevation & Depth

Plano: sin `box-shadow`. La profundidad la dan los cambios de superficie y el movimiento: la foto del héroe se desplaza más lento que la página y la foto de equipo deriva dentro de su marco.

**The Sin Sombra Rule.** Si algo necesita separarse, recibe una línea, un cambio de tono o una superficie.

## Shapes

Esquinas de 4 px en botones, campos, opciones, tarjeta del preparador y vista previa. Fotos y secciones rectas. Bordes de control 1.5 px. Tinta 1 px en la tabla de contacto y la barra móvil; 2 px sobre el preparador en móvil. La vista previa del mensaje lleva un filo oliva de 3 px a la izquierda.

**Íconos.** Trazo propio en `graficos.tsx` (24, trazo 1.75, `currentColor`, `aria-hidden`): teléfono, correo, flecha, copiar y tilde de copiado. WhatsApp es la única marca de terceros (Simple Icons, CC0).

**Fotografía.** Hero: foto real en móvil; panorámica ampliada con IA desde 640 px. Abeja, avispa y equipo son imágenes generadas. La página no lleva créditos ni avisos sobre su origen (decisión del usuario); el registro está en `docs/ENTREGA.md`. Nunca texto superpuesto. Las fotos se recortan con `object-fit: cover` dentro de marcos fijos; los efectos de profundidad solo trasladan o escalan la imagen dentro del marco, sin deformarla.

**Esquema de reubicación** (`EsquemaReubicacion.tsx`). Un solo SVG de 640 × 340: muro bajo un alero con la cavidad y sus panales (cera), recorrido punteado en cera y contorno de Uruguay (Natural Earth 1:110m, dominio público) con el sur sombreado y tres colmenas de destino. Su única nota aclara un dato del servicio, no de la demo: el sur es destino de las colonias, no zona de atención.

## Components

### Buttons
- **Base** (`.boton`): 4 px, alto 3rem, relleno 0.625rem × 1.25rem, ícono a la izquierda, sin corte de línea.
- **Primario** (`.boton-primario`): oliva, texto papel; hover barre oliva hondo.
- **Secundario** (`.boton-secundario`): borde y texto tinta; hover barre tinta y el texto pasa a papel.
- **Claro** (`.boton-claro`, sobre tinta): papel con texto tinta; hover barre cera.
- **Contorno claro** (`.boton-contorno-claro`, sobre tinta): borde `ink-text`, texto papel; hover barre papel y el texto pasa a tinta.
- Par de acciones (WhatsApp y «Llamar al …») en el héroe y en contacto; el preparador cierra con «Continuar en WhatsApp» y «Copiar mensaje».

### Links
- **Enlace** (`.enlace`): subrayado 1 px; hover óxido 2 px (cera sobre tinta).
- **Navegación** (`.nav-enlace`): texto `ink-text` que pasa a papel; trazo de cera de 2 px que crece desde la izquierda.
- **Enlace con flecha** (`.enlace-flecha`): la flecha avanza 4 px en su dirección (hacia abajo en «Ver reubicación»).

### Formulario
- **Tarjeta del preparador:** desde sm, papel alzado con borde `control`; en móvil, sin caja, abierta con una línea de tinta de 2 px para ganar ancho.
- **Campo** (`.campo`): papel, borde `control`; hover tinta; foco con borde tinta, fondo blanco y etiqueta en oliva.
- **Opciones** (`.opcion`): fichas en tres columnas; radio propio (`appearance: none`) con punto que aparece con rebote; al elegir, un círculo oliva se expande desde el radio y el texto pasa a papel. Por debajo de 30rem, radio arriba y texto abajo. Foco: anillo óxido en la ficha.
- **Copiar:** al copiar, el ícono pasa a un tilde que se dibuja y el botón dice «Copiado»; `role="status"` confirma o explica el error.

### Preguntas
`details` nativo; signo + que gira a −; respuesta que se despliega en altura donde hay soporte.

### Barra de contacto móvil
Por debajo de md, fija abajo con WhatsApp y Llamar. Aparece solo cuando no están en pantalla las acciones del héroe, el contacto ni el pie.

## Movimiento

Dos protagonistas y todo lo demás coordinado alrededor. Nada bloquea la lectura ni el contacto: no hay pantalla de carga, no se secuestra el desplazamiento y el contenido es visible sin JavaScript.

**Curvas.** `--ease-expo` (0.16, 1, 0.3, 1) para entradas y barridos; `--ease-salida` (0.22, 1, 0.36, 1) para colores y trazos; `--ease-vaiven` (0.65, 0, 0.35, 1) para el viaje del esquema; `--ease-rebote` (0.34, 1.56, 0.64, 1) solo para objetos pequeños (punto del radio, íconos, colmenas que brotan).

**Duraciones.** 140 ms presión · 180–240 ms colores y bordes · 320–420 ms barridos de hover y relleno de opciones · 800–1150 ms entradas · 1400 ms viaje.

1. **Entrada del héroe** (CSS, al cargar). El encabezado aparece (0 ms). Cada línea del h1 sube dentro de su máscara (1000 ms, escalonado 110 ms). Lead y botones entran a 380 y 480 ms. La foto se abre como un obturador: dos cortinas de tinta se recogen hacia arriba y hacia abajo (`scaleY`, 1150 ms desde 260 ms) mientras la imagen baja de escala 1.18 a 1 (1700 ms). Todo termina antes de 2 s; los botones se pueden usar desde el primer cuadro.
2. **Esquema de reubicación** (CSS y SMIL, una vez al entrar en vista). `IntersectionObserver` al 50 % pasa `data-estado` de `listo` a `activo`. Muro y alero se dibujan en cascada (0–900 ms), los panales en cera (450 ms), el contorno del país (450–1350 ms). A 1000 ms un cajón de traslado sale de la cavidad y recorre la ruta (`animateMotion`, 1400 ms, vaivén) mientras una máscara revela el punteado justo detrás. Al llegar (2350 ms) el sur se ilumina, dos pulsos se abren desde el punto de llegada y brotan las colmenas de destino. Las barras de los tres pasos se llenan sincronizadas con cada tramo.
3. **Acompañamiento ligado al desplazamiento** (`animation-timeline: view()`, solo donde hay soporte): la foto del héroe baja 5 % al salir; abeja y avispa se descubren desde lados opuestos (un velo de papel que se recoge con `scaleX`) mientras la imagen se asienta de 1.14 a 1; la foto de equipo deriva ±4 % dentro de su marco.
4. **Microinteracciones:** relleno que barre los botones y giro breve del ícono (solo con `hover: hover`); escala 0.97 al presionar botones y opciones; anillo de foco que se cierra de 8 a 3 px de separación; subrayados y flechas descritos arriba.

Todo es `transform` y `opacity`, salvo el trazo del esquema (`stroke-dashoffset`, una sola vez, en un SVG pequeño).

**Movimiento reducido.** Sin desplazamiento suave, sin entradas, sin cortinas ni velos, sin parallax; el esquema queda completo y quieto (el cajón no se muestra). Transiciones a 0.01 ms. **Sin JavaScript:** el héroe y el acompañamiento funcionan (son CSS), el esquema se ve completo y el preparador se oculta.

## Do's and Don'ts

### Do:
- **Do** usar solo los tokens de `@theme` en `globals.css`.
- **Do** separar secciones con superficie y composición, con 1.75–2rem / 2.75–3rem de relleno.
- **Do** mantener WhatsApp y llamada en la primera pantalla y en contacto.
- **Do** marcar toda superficie oscura con `.sobre-oliva` o `.sobre-tinta` (foco en cera).
- **Do** animar con `transform` y `opacity`; envolver todo en `prefers-reduced-motion: no-preference` y dejar el estado final visible sin animación.
- **Do** sumar un efecto nuevo solo si acompaña a una de las dos protagonistas, con una curva y una duración de la lista.

### Don't:
- **Don't** volver a rótulos numerados, «Fig.», folios, kickers ni frases genéricas.
- **Don't** repetir el mismo efecto de aparición en todos los bloques ni sumar llamadas a la acción redundantes.
- **Don't** usar el óxido sobre tinta u oliva, ni la cera sobre papel.
- **Don't** agregar sombras, degradados, texturas de panal, hexágonos ni radios mayores a 4 px.
- **Don't** superponer texto a las fotos ni deformarlas.
- **Don't** condensar el texto corrido ni bajar el cuerpo de 1.0625rem.

### Contenido
Principios: contacto primero (WhatsApp y teléfono sin leer ni completar nada); «no sé qué insecto es» es una entrada válida; toda afirmación sale de palabras del cliente; abejas y avispas nunca se mezclan (la reubicación es solo de colonias rústicas de abejas y no toda colonia se reubica); voz rioplatense, profesional y directa, sin humor ni eslóganes. La zona de atención no se publica: «Consultanos por tu localidad»; el sur de Uruguay es solo el destino de las colonias reubicadas.

No agregar sin confirmación del cliente (ver `PRODUCT.md` y `docs/ENTREGA.md`): precios, presupuesto gratis o cobro de visita; zona de atención; atención 24 h, horarios o tiempos de respuesta; garantías, seguros, certificaciones o registros; «sin químicos»; reparación de obra o seguimiento posterior; qué significa «trazabilizados» más allá de la frase del cliente; cómo intervienen con avispas; trayectoria («9 años»); línea para empresas; testimonios, logos de clientes, cifras de retiros, calificaciones o premios; fotos de apiarios o del equipo; que ambos números tengan WhatsApp activo; la firma «Colmenas del Río» y el monograma «CR» como marca oficial; autoría y permiso de la foto.
