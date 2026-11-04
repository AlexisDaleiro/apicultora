# Verificación

Limpieza posterior (2026-11-04): eliminados rótulos de sección y de figuras, frases genéricas, folio de cabecera y cierre redundante. Foto de apicultores integrada al contacto; separaciones de 48/64 px y banda oliva más compacta. Build y tipos aprobados con la alternativa temporal ya documentada (configuración restaurada); lint aprobado. Navegador en 320, 375, 768 y 1440 px: sin desborde ni rótulos restantes, enlace a contacto correcto, consola sin errores. Capturas `limpieza-servicio-1440.jpg` y `limpieza-contacto-1440.jpg`. Las capturas `cuaderno-*` describen la versión anterior.

Ampliación creativa (2026-11-04): comparación fotográfica, mapa de destino, folios editoriales y bloque del oficio. Ver [docs/cuaderno-de-campo.md](docs/cuaderno-de-campo.md) para medios generados, fuentes, prompts y verificación en seis tamaños. Capturas nuevas con prefijo `cuaderno-` en `docs/capturas/`.

Actualización del hero (2026-11-04): imagen panorámica generada y foto a ancho completo. Pruebas, capturas y limitación local del build en [docs/hero-panoramico.md](docs/hero-panoramico.md). Las auditorías de rendimiento y las capturas descritas más abajo corresponden a la versión anterior del hero.

Fecha: 2026-11-03/04 (hora de Uruguay). Las pruebas de navegador corrieron sobre el **build de producción** (`npm run build`, exportación estática) servido en local con `serve@14.2.4` en `http://localhost:4173`. Estados: **aprobado**, **falló** (con corrección o desviación documentada) o **no ejecutado**.

## Herramientas usadas

| Herramienta | Uso | Estado |
| --- | --- | --- |
| MCP Playwright | Revisión de referencias, capturas, flujos, teclado, anclas, barra móvil, sin JS, zoom | Usado |
| MCP Unlighthouse (Lighthouse 13.5.0) | Auditoría móvil + escritorio | Usado. **Limitación:** corre sin throttling (`throttle: false` en `scan_meta`) y el MCP no permite activarlo; sus métricas de rendimiento no son representativas |
| Lighthouse CLI 13.5.0 vía `npx` (alternativa local) | Rendimiento con throttling simulado por defecto (móvil: 4G lenta + CPU 4×; escritorio: `--preset=desktop`), 3 corridas por dispositivo | Usado para las cifras de rendimiento |
| MCP Chrome DevTools `lighthouse_audit` | Descartado: no incluye rendimiento | No usado |
| `node --test` | Tests de `src/lib/mensaje.ts` | Usado |
| `tsc --noEmit`, `eslint` | Tipos y lint | Usado |
| Detector de Impeccable | Patrones de diseño genérico en los archivos de UI | Usado |
| Revisor de terminación de Impeccable (subagente sin contexto previo) | Revisión contra el brief y el contrato de dirección | Usado, dos rondas (ver al final) |

## Controles de código

| Control | Resultado |
| --- | --- |
| `npm run build` | Aprobado. Rutas estáticas `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`, `/icon.png`, `/apple-icon.png`. Aviso esperado: `metadataBase` sin definir (ver README) |
| `npm run typecheck` | Aprobado (exit 0) |
| `npm run lint` | Aprobado (exit 0, sin advertencias) |
| `npm test` | Aprobado: 4/4 |
| Detector Impeccable (`detect --json`) | Aprobado: `[]` |

## Tamaños revisados

| Vista | Tamaño | Qué se comprobó | Resultado |
| --- | --- | --- | --- |
| Móvil obligatorio | 375 × 812 | Primera pantalla, página completa, flujo de consulta, barra fija, anclas | Aprobado |
| Móvil estrecho | 320 × 740 | Reflow, cabecera, anclas | Aprobado tras corrección (Fallo 2) |
| Móvil amplio | 390 × 844 | Primera pantalla, página completa | Aprobado |
| Tablet | 768 × 1024 | Cambio de grilla, navegación | Aprobado tras corrección (Fallo 3) |
| Escritorio intermedio | 1024 × 768, 1280 × 800 | Hero de escritorio | Aprobado tras corrección (Fallo 6) |
| Escritorio obligatorio | 1440 × 900 | Composición completa, teclado, preguntas, láminas | Aprobado |
| Zoom 200 % (equivalente) | 640 × 450 (1280 px al 200 %) | Desborde y lectura | Aprobado |

Desborde horizontal (`scrollWidth − clientWidth`): 0 px en 320, 375, 390, 640, 768, 1024, 1280 y 1440.

## Flujos (numeración del brief)

| # | Prueba | Resultado |
| --- | --- | --- |
| 1 | Servicio y acción principal visibles a 375 | Aprobado. H1 termina en y = 277 px y el botón de WhatsApp en y = 464 px (viewport 812). A 320: botón en y = 549 px (viewport 740) |
| 2 | Anclas sin títulos tapados | Aprobado. Distancia del título al borde superior tras el salto, en 320/375/1440: Servicio 50 px; Reubicación 104 px (136 en 1440; incluye el relleno de la sección oliva); Contacto 24 px. Igual desde el pie, «Ver la reubicación» y «Contanos qué encontraste». No hay cabecera fija |
| 3 | WhatsApp directo sin datos | Aprobado. `https://wa.me/59899498294?text=…` y `https://wa.me/59899205608?text=…` con «Hola, quisiera consultar por un retiro. ¿Podemos conversar sobre el caso?». No se abrió WhatsApp ni se envió nada |
| 4 | Mensaje por opción | Aprobado. «Observé abejas.», «Observé avispas.», «No sé si se trata de abejas o avispas.» |
| 5 | Vacíos, tildes, ñ, signos, texto largo | Aprobado tras corrección (Fallo 1). «Peñarol & Sayago #2» se codifica y decodifica igual; `maxLength` 80/120; todo vacío da el mensaje general |
| 6 | Edición | Aprobado. Cambiar de «No sé» a «Avispas» reemplaza la frase sin duplicar; borrar la zona quita su frase; la vista previa coincide con el texto del enlace |
| 7 | Copiar: éxito y error | Aprobado. Éxito: «Mensaje copiado.» y el portapapeles coincide con la vista previa. Error (`writeText` rechazado a propósito): aviso en `role="status"` y el texto queda seleccionado (268 caracteres) |
| 8 | Preguntas con teclado y tacto | Aprobado. Enter abre, Espacio cierra, clic abre; las respuestas están en el HTML aunque estén cerradas |
| 9 | `tel:` y `mailto:` | Aprobado. `tel:+59899498294`, `tel:+59899205608`, `mailto:leomenoni14@gmail.com`. No se llamó ni se envió correo |
| 10 | Barra móvil | Aprobado. Oculta en la primera pantalla; visible en Servicio y Reubicación; oculta en Contacto (también al enfocar un campo), Preguntas/Cierre y pie. Con la barra visible, el foco en la última pregunta no queda tapado (`scroll-padding-bottom`) |
| 11 | Tab / Shift+Tab | Aprobado. Orden: saltar al contenido → marca → Servicio → Reubicación → Contacto → WhatsApp de cabecera → acciones del hero → «Ver la reubicación» → … Shift+Tab vuelve al anterior. Sin trampas de foco |
| 12 | Movimiento reducido, 200 %, sin JS | Aprobado. Con `prefers-reduced-motion: reduce` la lámina no anima (`animation-name: none`, trazo completo) y `scroll-behavior` es `auto`. Sin JS (CDP `Emulation.setScriptExecutionDisabled`): H1, 8 enlaces `tel:`, 7 de WhatsApp y 5 preguntas presentes; el preparador se oculta y la barra no aparece |
| 13 | Imágenes, consola, red | Aprobado. Imágenes cargadas; 0 errores de consola; 0 respuestas ≥ 400 |
| 14 | Desborde horizontal | Aprobado, sin `overflow: hidden` global |

Animación de la lámina con movimiento activo: a mitad de recorrido `stroke-dashoffset` midió 0.52 (`docs/capturas/reubicacion-trazo-en-curso-1440.png`). El recorrido punteado solo se dibuja cuando las tres láminas están lado a lado (≥ 768 px); en móvil se oculta.

## Auditorías

### Lighthouse CLI 13.5.0 con throttling (build final, 3 corridas, mediana)

| Dispositivo | Performance | Accessibility | Best Practices | SEO | LCP | FCP | TBT | CLS | Speed Index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Móvil, corridas | 93 / 94 / 93 | 100 ×3 | 100 ×3 | 66 ×3 | 3158 / 3009 / 3157 ms | 1358 / 1359 / 1357 ms | 107 / 50 / 71 ms | 0 ×3 | 1358 / 1359 / 2258 ms |
| **Móvil, mediana** | **93** | **100** | **100** | **66\*** | **3.16 s** | **1.36 s** | **71 ms** | **0** | **1.36 s** |
| Escritorio, corridas | 100 ×3 | 100 ×3 | 100 ×3 | 66 ×3 | 650 / 649 / 658 ms | 330 / 329 / 333 ms | 0 ×3 | 0 / 0 / 0.012 | 330 / 329 / 333 ms |
| **Escritorio, mediana** | **100** | **100** | **100** | **66\*** | **0.65 s** | **0.33 s** | **0 ms** | **0** | **0.33 s** |

Peso transferido en móvil: 378 KB. Fuentes 154 KB (Archivo variable 88 KB, Source Serif 4 50 KB, Archivo itálica 400 ~16 KB), JS 138 KB, imagen 41 KB (`apicultor-760.avif`), HTML 37 KB (con el CSS en línea).

\* **SEO 66 es deliberado**: el único control que falla es `is-crawlable`, por el `noindex` del modo demo. Un build temporal con `modoDemo: false` dio **SEO 100** sin fallos. Después se volvió a `modoDemo: true` y se verificó `noindex` en `out/index.html` y `Disallow: /` en `out/robots.txt`.

### Unlighthouse MCP (build final, escaneo `d8b9fb7e`, sin throttling)

Móvil y escritorio: Performance 100, Accessibility 100, Best Practices 100, SEO 66 (solo `is-crawlable`). LCP 204 / 211 ms, CLS 0. Las cifras de rendimiento de este escaneo **no** cuentan como resultado: corrió sin throttling. Este escaneo es anterior al último cambio (fuente itálica y láminas); Accessibility, Best Practices y SEO se confirmaron después con Lighthouse CLI.

### Objetivos del brief

| Objetivo | Resultado |
| --- | --- |
| Performance ≥ 90 móvil y escritorio | Aprobado: 93 / 100 |
| Accessibility 100 (automatizado) | Aprobado: 100 / 100. No equivale a certificar WCAG 2.2 AA |
| Best Practices ≥ 95 | Aprobado: 100 / 100 |
| SEO ≥ 95 en condiciones indexables | Aprobado: 100 con `modoDemo: false`; 66 en modo demo por el `noindex` deliberado |
| LCP ≤ 2.5 s (laboratorio) | **Falló en móvil: 3.16 s.** Escritorio 0.65 s, aprobado. Ver desviación |
| CLS ≤ 0.1 | Aprobado: 0 (máximo observado 0.012) |
| TBT bajo | Aprobado: 71 ms móvil, 0 ms escritorio |
| Imagen principal de pocos cientos de KB | Aprobado: 41 KB móvil, 29 KB escritorio |
| Fuentes < ~200 KB | Aprobado: 154 KB |
| INP ≤ 200 ms | **No ejecutado**: necesita datos de campo; Lighthouse no lo mide |

### Desviación de LCP móvil

En móvil el elemento LCP es la fotografía, que asoma debajo de las acciones. Se aplicó: CSS en línea (`experimental.inlineCss`), variante 760w de la foto (en DPR 1.75 se bajaba la de 900) y se quitó la itálica de Source Serif 4. Con eso el LCP bajó de 3.32 s a 3.01 s. Luego se agregó una itálica real de Archivo para *Apis mellifera* (la itálica sintética deformaba la letra): +16 KB, FCP de 1.06 s a 1.36 s y LCP 3.16 s. Se eligió la corrección tipográfica sobre esos 0.15 s.

Para aislar la causa se auditó una copia del mismo export **sin scripts**: LCP 2.11 s, Performance 99 (2 corridas). La diferencia de unos 0.9 s es el costo base de Next.js/React (≈138 KB de JS) con la CPU simulada a 4×. El JS propio de la página son dos islas pequeñas. Quitar ese costo implica dejar Next.js (por ejemplo, HTML estático con un script mínimo); es una decisión del equipo, no una excepción técnica. Son valores de laboratorio, no de usuarios reales.

## Fallos encontrados y corregidos

1. **Puntuación del mensaje**: «arriba de la ventana ¿será?» quedaba «¿será.». Ahora se respeta un «?» o «!» final; test agregado.
2. **Cabecera a 320 px**: la marca se partía y el botón de WhatsApp desbordaba (había scroll horizontal). La marca ya no se corta y, debajo de 360 px, el botón muestra solo el ícono (nombre accesible «WhatsApp»).
3. **Navegación a 768 px**: los enlaces se apilaban en la columna central. La cabecera de una sola fila empieza en `lg` (≥ 1024 px).
4. **Área táctil de la marca**: 37 px de alto; ahora 44 px.
5. **Barra móvil**: «Consultar por WhatsApp» se partía en dos líneas; ahora «WhatsApp» y «Llamar» en dos columnas iguales.
6. **Hero de escritorio** (revisor): no seguía el contrato. Rehecho para `lg+`: titular en 8 columnas, acciones a la derecha, foto debajo con el epígrafe colgado a la izquierda. Las columnas se alinean arriba para no dejar un hueco sobre el titular en 1024/1280.
7. **Lámina de reubicación** (revisor): eran tres viñetas sueltas en color cera. Ahora comparten suelo y recorrido (en escritorio se leen como una lámina continua), con trazo en papel y panales en contorno. En la segunda ronda se sacó un detalle de la caja que se leía como una cara, y se ocultaron en móvil los tramos de recorrido que quedaban sueltos.
8. **Folio móvil** (revisor): quedaba como etiqueta suelta sobre el H1; ahora tiene a la derecha «Abejas y avispas» en todas las anchuras.
9. **Alcance de la serif** (revisor): la vista previa del mensaje y *Apis mellifera* usaban Source Serif 4 fuera de la sección de reubicación. Ahora la vista previa va en Archivo y el nombre científico en itálica real de Archivo.
10. **`content-visibility: auto`** (probado para rendimiento): corría el ancla «Contacto» 420 px a 375 px por las alturas estimadas y no reducía la carga de fuentes. Se quitó y las anclas se verificaron de nuevo en 320, 375 y 1440.
11. **BOM en `package.json`** (al editarlo con PowerShell): rompía el build de Tailwind. Se reescribió sin BOM.

## Revisión de terminación (Impeccable)

- Ronda 1: disposición **fix**, 7 puntos (hero de escritorio, lámina continua, folio móvil, alcance de la serif, paleta de las láminas, línea de semilla del contrato, enlace de WhatsApp del número alternativo).
- Ronda 2 (veredicto sobre las recapturas): 5 resueltos; 2 parciales (lámina en móvil, *Apis mellifera* en serif) y 2 regresiones (caja con aspecto de cara, itálica sintética). Disposición **fix**.
- Los cuatro puntos de la ronda 2 se corrigieron (Fallos 7 y 9) y se verificaron con capturas propias (`docs/capturas/reubicacion-375.png`, `reubicacion-1440.png`, `folio-1440.png`). **El revisor no volvió a puntuarlos**: se alcanzó el límite de dos rondas.

## Pendientes

- **LCP móvil 3.16 s** frente al objetivo de 2.5 s (ver desviación).
- **INP**: no medible sin datos de campo.
- **Lectores de pantalla reales** (NVDA, VoiceOver, TalkBack): no ejecutado. Se revisaron semántica, nombres accesibles y la región `role="status"` con el árbol de accesibilidad, no con un lector.
- **Safari, Firefox y dispositivos reales**: no ejecutado; solo Chromium. En Firefox la lámina no se anima (no tiene `animation-timeline`) y la apertura animada de preguntas depende de `::details-content` e `interpolate-size`. En ambos casos el contenido se ve completo y estático.
- **WhatsApp de los dos números**: los enlaces se construyeron y decodificaron, pero no se comprobó que existan las cuentas (no se envió nada).
- **Zoom 200 %**: probado con un viewport equivalente de 640 px, no con el zoom del navegador.
- **Datos comerciales**: ver `docs/ENTREGA.md`.

## Evidencia

- Capturas finales: `docs/capturas/` (primeras pantallas en 320/375/390/768/1024/1280/1440, páginas completas en 375 y 1440, consulta completa y error de copia, preguntas abiertas con foco, barra móvil, láminas estáticas y en movimiento, folio, sin JS y zoom).
- Capturas usadas por el revisor: `.impeccable/review/`.
- Referencias inspeccionadas: `docs/referencias/sitio-actual-1440.png`, `docs/referencias/demo-anterior-1440.png`.
