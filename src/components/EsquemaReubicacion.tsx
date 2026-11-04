"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/*
 * Esquema conceptual de la reubicación: colonia en un muro, recorrido y
 * llegada a un apiario del sur de Uruguay. No muestra un caso ni un predio reales.
 *
 * Sin JavaScript o con movimiento reducido se ve completo y quieto.
 * Con JavaScript, `data-estado="listo"` congela la secuencia en su inicio y
 * `data-estado="activo"` la reproduce una vez, cuando el dibujo entra en vista.
 * Tiempos (ms): muro 0–900 · mapa 450–1350 · viaje 1000–2400 · llegada 2350–3000.
 */

const RUTA = "M136 112C160 30 300 6 380 40S492 150 505 262";

/** Contorno Natural Earth 1:110m (dominio público), en el sistema del grupo escalado. */
const CONTORNO =
  "M48.6 21.7 L67.7 18.0 L97.2 45.1 L108.2 44.1 L138.5 66.6 L161.6 86.0 L178.6 109.9 L165.6 126.5 L173.8 146.4 L161.0 168.5 L127.8 188.0 L106.0 181.0 L90.1 184.7 L62.9 169.7 L42.9 170.8 L25.0 151.4 L27.3 128.7 L33.7 120.9 L33.4 85.9 L41.3 49.8 L48.6 21.7 Z";

const MURO = [
  "M16 96h232M28 80h208v16",
  "M40 96v232M224 96v232",
  "M40 136h60M172 136h52M40 176h60M172 176h52M40 216h184M40 256h184M40 296h184",
  "M76 96v40M200 96v40M60 136v40M196 136v40M84 176v40M188 176v40M120 216v40M180 216v40M96 256v40M160 256v40M136 296v32M64 296v32M200 296v32",
  "M100 120h72v88h-72z",
  "M0 328h272",
];

const APIARIOS: [number, number][] = [
  [466, 258],
  [540, 274],
  [572, 250],
];

const PASOS = [
  { titulo: "Retiro de la colonia", texto: "Del techo, la pared o el árbol donde se instaló.", d: 0, dur: 900 },
  { titulo: "Traslado", texto: "Cuando el caso admite la reubicación.", d: 1000, dur: 1400, ease: "var(--ease-vaiven)" },
  { titulo: "Apiario de destino", texto: "Apiarios trazabilizados en predios del sur de Uruguay.", d: 2400, dur: 500 },
];

const t = (d: number, dur?: number, ease?: string) =>
  ({ "--d": `${d}ms`, ...(dur ? { "--dur": `${dur}ms` } : {}), ...(ease ? { "--ease": ease } : {}) }) as CSSProperties;

export function EsquemaReubicacion({ children }: { children: ReactNode }) {
  const raiz = useRef<HTMLDivElement>(null);
  const dibujo = useRef<HTMLElement>(null);
  const viaje = useRef<SVGAnimateMotionElement>(null);

  useEffect(() => {
    const nodo = raiz.current;
    const objetivo = dibujo.current;
    if (!nodo || !objetivo || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    nodo.dataset.estado = "listo";
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada?.isIntersecting) return;
        nodo.dataset.estado = "activo";
        viaje.current?.beginElementAt(1);
        observador.disconnect();
      },
      { threshold: 0.5 },
    );
    observador.observe(objetivo);
    return () => observador.disconnect();
  }, []);

  return (
    <div ref={raiz} className="esquema grid gap-6 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-4 lg:row-start-1">{children}</div>

      <figure ref={dibujo} className="lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:self-center">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 640 340"
          fill="none"
          stroke="var(--color-paper)"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-auto w-full overflow-visible"
        >
          <defs>
            <mask id="esquema-ruta" maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="340">
              <path className="trazo" style={t(1000, 1400, "var(--ease-vaiven)")} d={RUTA} pathLength={1} stroke="#fff" strokeWidth={12} />
            </mask>
            <clipPath id="esquema-uruguay">
              <path d={CONTORNO} />
            </clipPath>
          </defs>

          {/* Colonia instalada en un muro bajo el alero */}
          <rect className="surge" style={t(300, 500)} x="100" y="120" width="72" height="88" rx="3" fill="var(--color-olive-deep)" stroke="none" />
          {MURO.map((d, i) => (
            <path key={d} className="trazo" style={t(i * 70, 700)} d={d} pathLength={1} />
          ))}
          <path
            className="trazo"
            style={t(450, 500)}
            d="M114 122v44a8 8 0 0 0 16 0V122M136 122v58a8 8 0 0 0 16 0V122M158 122v30a6 6 0 0 0 10 2V122"
            pathLength={1}
            stroke="var(--color-wax)"
          />

          {/* Mapa del país: el sombreado marca el sur como destino, no una zona de atención */}
          <g transform="translate(342 13) scale(1.5)">
            <path className="surge" style={t(700, 600)} d={CONTORNO} fill="var(--color-olive-deep)" stroke="none" />
            <g clipPath="url(#esquema-uruguay)">
              <rect className="surge" style={t(2300, 600)} x="20" y="148" width="165" height="50" fill="var(--color-wax)" fillOpacity="0.22" stroke="none" />
              <path className="surge" style={t(2300, 600)} d="M20 149h165" stroke="var(--color-wax)" strokeWidth={1} strokeDasharray="2 5" />
            </g>
            <path className="trazo" style={t(450, 900)} d={CONTORNO} pathLength={1} stroke="var(--color-olive-text)" strokeWidth={1.5} />
          </g>

          {/* Recorrido punteado: se revela con una máscara que acompaña al cajón */}
          <path id="esquema-recorrido" d={RUTA} stroke="var(--color-wax)" strokeWidth={2.25} strokeDasharray="3 8" mask="url(#esquema-ruta)" />

          {APIARIOS.map(([x, y], i) => (
            <g key={x} transform={`translate(${x} ${y})`}>
              <g className="brota" style={t(2450 + i * 120)}>
                <rect x="-6.5" y="-7" width="13" height="2.5" fill="var(--color-paper)" stroke="none" />
                <rect x="-5" y="-4" width="10" height="8" fill="var(--color-paper)" stroke="none" />
              </g>
            </g>
          ))}

          <g transform="translate(505 262)">
            <circle className="pulso" style={t(2350)} r="9" stroke="var(--color-wax)" strokeWidth={1.5} />
            <circle className="pulso" style={t(2600)} r="9" stroke="var(--color-wax)" strokeWidth={1.5} />
            <circle className="brota" style={t(2350)} r="5.5" fill="var(--color-wax)" stroke="none" />
          </g>

          {/* Cajón de traslado: solo existe en la versión animada */}
          <g className="marcador">
            <animateMotion
              ref={viaje}
              begin="indefinite"
              dur="1.4s"
              fill="freeze"
              calcMode="spline"
              keyPoints="0;1"
              keyTimes="0;1"
              keySplines="0.65 0 0.35 1"
            >
              <mpath href="#esquema-recorrido" />
            </animateMotion>
            <rect x="-13" y="-12" width="26" height="4" rx="1" fill="var(--color-wax)" stroke="none" />
            <rect x="-11" y="-8" width="22" height="16" rx="1.5" fill="var(--color-wax)" stroke="none" />
            <path d="M-6 -2h12" stroke="var(--color-olive-deep)" strokeWidth={1.5} />
          </g>
        </svg>
        <figcaption className="mt-3 flex items-start gap-2.5 text-meta text-olive-text">
          <span aria-hidden="true" className="mt-[0.45em] size-2 shrink-0 rounded-full bg-wax" />
          El sur del país es el destino de las colonias reubicadas, no la zona de atención.
        </figcaption>
      </figure>

      <ol className="grid gap-x-6 gap-y-4 sm:grid-cols-3 lg:col-span-4 lg:row-start-2 lg:grid-cols-1 lg:self-start">
        {PASOS.map(({ titulo, texto, d, dur, ease }) => (
          <li key={titulo} className="paso" style={t(d, dur, ease)}>
            <span aria-hidden="true" className="relative block h-[3px] w-12 overflow-hidden bg-olive-rule">
              <span className="paso-barra absolute inset-0 origin-left bg-wax" />
            </span>
            <h3 className="mt-2.5 text-[1.25rem] leading-tight font-bold [font-stretch:85%]">{titulo}</h3>
            <p className="mt-0.5 text-olive-text">{texto}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
