import type { SVGProps } from "react";

type IconoProps = SVGProps<SVGSVGElement>;

const base = {
  "aria-hidden": true,
  focusable: false,
  width: "1.25em",
  height: "1.25em",
} as const;

const trazoIcono = {
  ...base,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Marca de WhatsApp (trazado de Simple Icons, CC0). */
export function IconoWhatsApp(props: IconoProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function IconoTelefono(props: IconoProps) {
  return (
    <svg {...trazoIcono} {...props}>
      <path d="M21 16.4v2.9a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.1 4.4 1.9 1.9 0 0 1 4 2.3h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.7a1.9 1.9 0 0 1-.4 2L7.8 9.8a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.8Z" />
    </svg>
  );
}

export function IconoCorreo(props: IconoProps) {
  return (
    <svg {...trazoIcono} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

export function IconoFlecha({ direccion = "derecha", ...props }: IconoProps & { direccion?: "derecha" | "abajo" }) {
  return (
    <svg {...trazoIcono} {...props}>
      {direccion === "derecha" ? <path d="M4 12h15m-6-6 6 6-6 6" /> : <path d="M12 4v15m-6-6 6 6 6-6" />}
    </svg>
  );
}

export function IconoCopiar(props: IconoProps) {
  return (
    <svg {...trazoIcono} {...props}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="1.5" />
      <path d="M15.5 5V4.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H5" />
    </svg>
  );
}

/*
 * Láminas del esquema de reubicación. Son ilustraciones conceptuales:
 * no muestran un caso, una casa ni un predio reales.
 * Las tres comparten suelo (y = 182) y recorrido (y = 22): en escritorio,
 * sin separación entre columnas, se leen como una sola lámina continua.
 * Los trazos con clase `trazo` se dibujan al entrar en vista (globals.css);
 * sin soporte o con movimiento reducido se ven completos.
 */

const lamina = {
  "aria-hidden": true,
  focusable: false,
  viewBox: "0 0 320 200",
  fill: "none",
  stroke: "var(--color-paper)",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "lamina h-auto w-full overflow-visible",
} as const;

const recorrido = { className: "recorrido", stroke: "var(--color-olive-text)", strokeWidth: 1.5, strokeDasharray: "2 7" } as const;

export function LaminaColonia() {
  return (
    <svg {...lamina}>
      {/* cavidad con panales en contorno */}
      <rect x="122" y="74" width="76" height="74" rx="3" fill="var(--color-olive-deep)" stroke="none" />
      <path className="trazo" pathLength={1} d="M140 76v36a8 8 0 0 0 16 0V76M162 76v48a8 8 0 0 0 16 0V76M184 76v26a6 6 0 0 0 10 2V76" />
      {/* alero y muro */}
      <path className="trazo" pathLength={1} d="M18 62h284M28 50h264v12" />
      <path className="trazo" pathLength={1} d="M40 62v120M280 62v120" />
      <path className="trazo" pathLength={1} d="M40 100h82M198 100h82M40 128h82M198 128h82M40 156h240" />
      <path className="trazo" pathLength={1} d="M80 62v38M100 100v28M70 128v28M240 62v38M220 100v28M250 128v28M120 156v26M200 156v26" />
      <path className="trazo" pathLength={1} d="M122 74h76v74h-76z" />
      {/* recorrido: sale de la cavidad hacia la derecha */}
      <path {...recorrido} d="M188 70C204 26 250 22 320 22" />
      <path className="trazo" pathLength={1} d="M0 182h320" />
    </svg>
  );
}

export function LaminaTraslado() {
  return (
    <svg {...lamina}>
      {/* caja de traslado cerrada */}
      <rect x="100" y="92" width="120" height="70" rx="2" fill="var(--color-olive-deep)" stroke="none" />
      <path className="trazo" pathLength={1} d="M100 92h120v70H100z" />
      <path className="trazo" pathLength={1} d="M92 80h136v12H92z" />
      <path className="trazo" pathLength={1} d="M114 104h36v14h-36zM120 104v14M126 104v14M132 104v14M138 104v14M144 104v14" />
      <path className="trazo" pathLength={1} d="M112 162v20M208 162v20" />
      {/* recorrido continuo por arriba */}
      <path {...recorrido} d="M0 22h320" />
      <path className="trazo" pathLength={1} d="M0 182h320" />
    </svg>
  );
}

export function LaminaApiario() {
  return (
    <svg {...lamina}>
      {/* colmenas del apiario */}
      <rect x="132" y="112" width="44" height="40" rx="1.5" fill="var(--color-olive-deep)" stroke="none" />
      <rect x="196" y="112" width="44" height="40" rx="1.5" fill="var(--color-olive-deep)" stroke="none" />
      <rect x="260" y="112" width="44" height="40" rx="1.5" fill="var(--color-olive-deep)" stroke="none" />
      <path className="trazo" pathLength={1} d="M132 112h44v40h-44zM128 104h52v8h-52zM138 152v30M170 152v30" />
      <path className="trazo" pathLength={1} d="M196 112h44v40h-44zM192 104h52v8h-52zM202 152v30M234 152v30" />
      <path className="trazo" pathLength={1} d="M260 112h44v40h-44zM256 104h52v8h-52zM266 152v30M298 152v30" />
      {/* árbol */}
      <path className="trazo" pathLength={1} d="M66 182V104" />
      <path className="trazo" pathLength={1} d="M66 112c-30 0-44-20-38-42 6-22 26-34 38-34s32 12 38 34c6 22-8 42-38 42Z" />
      {/* recorrido: llega desde la izquierda y baja al apiario */}
      <path {...recorrido} d="M0 22C120 22 212 32 218 92" />
      <path className="trazo recorrido" pathLength={1} d="m211 86 7 8 6-9" />
      <path className="trazo" pathLength={1} d="M0 182h320" />
    </svg>
  );
}

/** Contorno Natural Earth 1:110m, dominio público. El sombreado representa el sur, no una cobertura de atención. */
export function MapaDestino() {
  const contorno = "M48.6 21.7 L67.7 18.0 L97.2 45.1 L108.2 44.1 L138.5 66.6 L161.6 86.0 L178.6 109.9 L165.6 126.5 L173.8 146.4 L161.0 168.5 L127.8 188.0 L106.0 181.0 L90.1 184.7 L62.9 169.7 L42.9 170.8 L25.0 151.4 L27.3 128.7 L33.7 120.9 L33.4 85.9 L41.3 49.8 L48.6 21.7 Z";

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 320 210" className="h-auto w-full" fill="none">
      <defs>
        <clipPath id="mapa-sur-uruguay"><path d={contorno} /></clipPath>
      </defs>
      <path d={contorno} fill="var(--color-olive-deep)" />
      <g clipPath="url(#mapa-sur-uruguay)">
        <rect x="20" y="148" width="165" height="50" fill="var(--color-paper)" fillOpacity="0.18" />
        <path d="M20 149h165" stroke="var(--color-olive-text)" strokeDasharray="2 5" />
      </g>
      <path d={contorno} stroke="var(--color-olive-text)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M115 166h87l13-13" stroke="var(--color-paper)" strokeWidth="1" />
      <text x="212" y="140" fill="var(--color-paper)" fontSize="13" fontFamily="var(--font-sans)">Sur del país</text>
      <text x="212" y="159" fill="var(--color-olive-text)" fontSize="11" fontFamily="var(--font-sans)">Apiarios de destino</text>
      <path d="M222 39V21m-4 5 4-5 4 5" stroke="var(--color-olive-text)" strokeWidth="1" />
      <text x="218" y="53" fill="var(--color-olive-text)" fontSize="10" fontFamily="var(--font-sans)">N</text>
    </svg>
  );
}
