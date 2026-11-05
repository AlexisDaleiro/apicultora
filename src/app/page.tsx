import type { CSSProperties } from "react";
import { BarraContacto } from "@/components/BarraContacto";
import { CabeceraFija } from "@/components/CabeceraFija";
import { PreparadorMensaje } from "@/components/Consulta";
import { EsquemaReubicacion } from "@/components/EsquemaReubicacion";
import { FotoEditorial } from "@/components/FotoEditorial";
import { IconoCorreo, IconoFlecha, IconoTelefono, IconoWhatsApp } from "@/components/graficos";
import { sitio, telLink, whatsappLink } from "@/content/sitio";

const { principal, alternativo } = sitio.telefonos;

const NAVEGACION = [
  { href: "#servicio", texto: "Servicio" },
  { href: "#reubicacion", texto: "Reubicación" },
  { href: "#contacto", texto: "Contacto" },
];

const INSECTOS = [
  {
    nombre: "abeja",
    titulo: "Abejas",
    rasgos: "Tórax velloso · tonos ámbar y marrón",
    texto: "Retiramos la colmena y, cuando el caso lo permite, reubicamos la colonia.",
    enlace: { href: "#reubicacion", texto: "Ver reubicación", direccion: "abajo" },
    alt: "Referencia ilustrativa de una abeja melífera de perfil: tórax velloso y abdomen de tonos ámbar y marrón.",
    lado: "izquierda",
  },
  {
    nombre: "avispa",
    titulo: "Avispas",
    rasgos: "Cuerpo liso · cintura marcada",
    texto: "Evaluamos dónde está el nido para definir cómo intervenir.",
    enlace: { href: "#contacto", texto: "Consultar un nido", direccion: "derecha" },
    alt: "Referencia ilustrativa de una avispa amarilla y negra de perfil: cuerpo más liso y cintura estrecha.",
    lado: "derecha",
  },
] as const;

const PREGUNTAS = [
  {
    pregunta: "¿Qué pasa con las abejas que se reubican?",
    respuesta:
      "Las colonias rústicas de abejas que se reubican se trasladan a apiarios trazabilizados, en distintos predios del sur de Uruguay. Si un caso admite la reubicación se define al evaluarlo.",
  },
  {
    pregunta: "¿También atienden casos con avispas?",
    respuesta: "Sí. Atendemos situaciones con nidos de avispas. La forma de intervenir se define según cada caso.",
  },
  {
    pregunta: "¿Cómo sé si atienden mi zona?",
    respuesta: "Consultanos indicando tu localidad o barrio.",
  },
  {
    pregunta: "¿Cuánto cuesta el servicio?",
    respuesta: "Depende de cada situación. Consultanos por tu caso.",
  },
];

/** Variables de tiempo para la entrada del héroe (globals.css). */
const retardo = (valores: Record<string, string | number>) => valores as CSSProperties;

function Firma({ clase = "" }: { clase?: string }) {
  return (
    <span className={`whitespace-nowrap leading-none tracking-[-0.01em] ${clase}`}>
      <span className="font-extrabold [font-stretch:75%]">Colmenas</span>{" "}
      <span className="font-normal [font-stretch:75%]">del Río</span>
    </span>
  );
}

export default function Inicio() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-[4px] bg-paper px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>

      <CabeceraFija>
        <header className="contenedor entra flex flex-wrap items-center justify-between gap-x-6 pt-2 md:pt-3" style={retardo({ "--d": "0ms" })}>
          <a href="#inicio" className="inline-flex min-h-11 items-center text-[1.375rem] no-underline md:text-[1.5rem]">
            <Firma />
          </a>
          <nav aria-label="Principal" className="-mx-2.5 md:mx-0">
            <ul className="flex flex-wrap text-[0.9375rem] md:gap-1 md:text-base">
              {NAVEGACION.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-enlace flex min-h-11 items-center px-2.5 font-medium no-underline">
                    <span>{item.texto}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </CabeceraFija>

      <main id="contenido" tabIndex={-1} className="outline-none">
          <section id="inicio" aria-labelledby="titulo-principal" className="sobre-tinta bg-ink text-paper">
            <div className="contenedor pt-5 md:pt-8">
              <h1 id="titulo-principal" className="text-display font-extrabold [font-stretch:75%]">
                <span className="linea">
                  <span style={retardo({ "--i": 0 })}>Retiro de colmenas</span>
                </span>
                <span className="linea">
                  <span style={retardo({ "--i": 1 })}>
                    y nidos de avispas<span className="text-wax">.</span>
                  </span>
                </span>
              </h1>

              <div id="hero-acciones" className="mt-5 grid gap-5 md:mt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
                <p className="entra max-w-[38ch] text-lead text-ink-text" style={retardo({ "--d": "380ms" })}>
                  Contanos dónde están y consultanos por tu caso. <span className="text-paper">No necesitás saber si son abejas o avispas.</span>
                </p>
                <div className="entra flex flex-col gap-3 sm:flex-row" style={retardo({ "--d": "480ms" })}>
                  <a className="boton boton-claro" href={whatsappLink(principal.whatsapp)}>
                    <IconoWhatsApp />
                    Consultar por WhatsApp
                  </a>
                  <a className="boton boton-contorno-claro" href={telLink(principal.internacional)}>
                    <IconoTelefono />
                    Llamar al {principal.visible}
                  </a>
                </div>
              </div>
            </div>

            <figure className="mt-7 md:mt-9">
              <div className="hero-foto relative mx-auto aspect-[900/855] w-full max-w-[100rem] overflow-hidden bg-ink sm:aspect-[1870/841]">
                <picture className="contents">
                  <source
                    media="(max-width: 39.999rem)"
                    type="image/avif"
                    srcSet="/img/apicultor-480.avif 480w, /img/apicultor-600.avif 600w, /img/apicultor-760.avif 760w, /img/apicultor-900.avif 900w"
                    sizes="100vw"
                    width={900}
                    height={855}
                  />
                  <source
                    media="(max-width: 39.999rem)"
                    type="image/webp"
                    srcSet="/img/apicultor-480.webp 480w, /img/apicultor-600.webp 600w, /img/apicultor-760.webp 760w, /img/apicultor-900.webp 900w"
                    sizes="100vw"
                    width={900}
                    height={855}
                  />
                  <source
                    type="image/avif"
                    srcSet="/img/apicultor-panoramico-640.avif 640w, /img/apicultor-panoramico-960.avif 960w, /img/apicultor-panoramico-1200.avif 1200w, /img/apicultor-panoramico-1600.avif 1600w, /img/apicultor-panoramico-1870.avif 1870w"
                    sizes="(min-width: 100rem) 1600px, 100vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="/img/apicultor-panoramico-640.webp 640w, /img/apicultor-panoramico-960.webp 960w, /img/apicultor-panoramico-1200.webp 1200w, /img/apicultor-panoramico-1600.webp 1600w, /img/apicultor-panoramico-1870.webp 1870w"
                    sizes="(min-width: 100rem) 1600px, 100vw"
                  />
                  <img
                    src="/img/apicultor-panoramico-1870.webp"
                    width={1870}
                    height={841}
                    alt="Apicultor con traje de protección amarillo retirando panales de una abertura en una pared de ladrillo, bajo un alero."
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-x-0 -top-[6%] h-[112%] w-full object-cover"
                  />
                </picture>
                <span aria-hidden="true" className="cortina cortina-arriba" />
                <span aria-hidden="true" className="cortina cortina-abajo" />
              </div>
            </figure>
          </section>

        {/* Servicio */}
        <section id="servicio" aria-labelledby="titulo-servicio" className="contenedor py-7 md:py-11">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
            <h2 id="titulo-servicio" className="text-h2 font-extrabold [font-stretch:75%]">
              ¿Abejas o avispas?
            </h2>          </div>

          <div className="mt-5 grid gap-6 md:mt-7 md:grid-cols-2">
            {INSECTOS.map((insecto) => (
              <article key={insecto.nombre} className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-4 md:block">
                <div className={`barrido relative overflow-hidden ${insecto.lado === "derecha" ? "barrido-derecha" : ""}`}>
                  <FotoEditorial nombre={insecto.nombre} alt={insecto.alt} claseImg="aspect-[4/5] h-auto w-full md:aspect-[3/2]" />
                  <span aria-hidden="true" className="velo" />
                </div>
                <div className="md:mt-4 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-6">
                  <div>
                    <h3 className="text-h3 font-extrabold [font-stretch:75%]">{insecto.titulo}</h3>
                    <p className="mt-1 text-meta text-muted">{insecto.rasgos}</p>
                  </div>
                  <div className="mt-2 md:mt-0.5">
                    <p>{insecto.texto}</p>
                    <a href={insecto.enlace.href} className="enlace-flecha mt-1 inline-flex min-h-11 items-center gap-2 font-semibold">
                      <span>{insecto.enlace.texto}</span>
                      <IconoFlecha direccion={insecto.enlace.direccion} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Reubicación */}
        <section id="reubicacion" aria-labelledby="titulo-reubicacion" className="sobre-oliva bg-olive py-8 text-paper md:py-12">
          <div className="contenedor">
            <EsquemaReubicacion>
              <h2 id="titulo-reubicacion" className="text-h2 font-extrabold [font-stretch:75%]">
                Reubicación de abejas
              </h2>
              <p className="mt-3 max-w-[30ch] font-serif text-[clamp(1.25rem,1.05rem+0.7vw,1.625rem)] leading-[1.3]">
                Cuando el caso lo permite, las colonias se trasladan a apiarios trazabilizados del sur de Uruguay.
              </p>
            </EsquemaReubicacion>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" aria-labelledby="titulo-contacto" className="contenedor py-7 md:py-11">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-10">
            <div className="flex flex-col lg:col-span-5">
              <h2 id="titulo-contacto" className="text-h2 font-extrabold [font-stretch:75%]">
                Contanos qué encontraste
              </h2>
              <p className="mt-3 max-w-[36ch] text-lead text-muted">Y en qué localidad estás. Podés mandarnos una foto por WhatsApp.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a className="boton boton-primario" href={whatsappLink(principal.whatsapp)}>
                  <IconoWhatsApp />
                  Consultar por WhatsApp
                </a>
                <a className="boton boton-secundario" href={telLink(principal.internacional)}>
                  <IconoTelefono />
                  Llamar al {principal.visible}
                </a>
              </div>

              <dl className="mt-5 border-t border-ink text-[1rem]">
                <div className="flex flex-wrap items-center justify-between gap-x-6 border-b border-rule">
                  <dt className="text-muted">Teléfono alternativo</dt>
                  <dd className="flex items-center gap-4">
                    <a href={telLink(alternativo.internacional)} className="enlace inline-flex min-h-11 items-center font-semibold tabular-nums">
                      {alternativo.visible}
                    </a>
                    <a
                      href={whatsappLink(alternativo.whatsapp)}
                      className="enlace inline-flex min-h-11 items-center gap-1.5"
                      aria-label={`WhatsApp al ${alternativo.visible}`}
                    >
                      <IconoWhatsApp />
                      WhatsApp
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-6 border-b border-rule">
                  <dt className="text-muted">Correo</dt>
                  <dd className="min-w-0">
                    <a href={`mailto:${sitio.correo}`} className="enlace inline-flex min-h-11 items-center gap-2 break-all">
                      <IconoCorreo />
                      {sitio.correo}
                    </a>
                  </dd>
                </div>
              </dl>

              <figure className="mt-5 flex flex-1 flex-col">
                <div className="foto-deriva relative min-h-56 flex-1 overflow-hidden bg-paper-press">
                  <FotoEditorial
                    nombre="equipo"
                    alt="Escena generada con dos apicultores junto a una colmena cerrada."
                    sizes="(min-width: 64rem) 480px, (min-width: 40rem) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                    claseImg="absolute inset-x-0 -top-[6%] h-[112%] w-full"
                  />
                </div>              </figure>
            </div>

            <div className="requiere-js lg:col-span-7">
              <PreparadorMensaje />
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section id="preguntas" aria-labelledby="titulo-preguntas" className="contenedor pb-8 md:pb-12">
          <div className="grid gap-x-10 gap-y-3 border-t border-ink pt-6 lg:grid-cols-12">
            <h2 id="titulo-preguntas" className="text-h2 font-extrabold [font-stretch:75%] lg:col-span-4">
              Preguntas frecuentes
            </h2>
            <div className="lg:col-span-8">
              {PREGUNTAS.map(({ pregunta, respuesta }) => (
                <details key={pregunta} className="pregunta border-b border-rule">
                  <summary className="flex min-h-12 items-start justify-between gap-6 py-3.5">
                    <span className="pregunta-texto text-[1.125rem] leading-snug font-semibold md:text-[1.25rem]">{pregunta}</span>
                    <span aria-hidden="true" className="signo relative mt-1 size-5 shrink-0" />
                  </summary>
                  <p className="max-w-[60ch] pb-4 text-muted md:pr-12">{respuesta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="sobre-tinta bg-ink text-paper">
        <div className="contenedor flex flex-col gap-x-10 gap-y-4 py-7 md:flex-row md:items-center md:justify-between">
          <div>
            <Firma clase="text-[1.5rem]" />
            <p className="mt-2 text-meta text-ink-text">Retiro de colmenas de abejas y nidos de avispas · Uruguay</p>
            <p className="mt-1 text-meta text-ink-text">
              Diseñado por{" "}
              <a href="https://alexisdaleiroportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="enlace">
                Alexis Daleiro
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6">
            <li>
              <a href={telLink(principal.internacional)} className="enlace inline-flex min-h-11 items-center tabular-nums">
                {principal.visible}
              </a>
            </li>
            <li>
              <a href={telLink(alternativo.internacional)} className="enlace inline-flex min-h-11 items-center tabular-nums">
                {alternativo.visible}
              </a>
            </li>
            <li>
              <a href={`mailto:${sitio.correo}`} className="enlace inline-flex min-h-11 items-center break-all">
                {sitio.correo}
              </a>
            </li>
          </ul>
        </div>      </footer>

      <BarraContacto />
    </>
  );
}
