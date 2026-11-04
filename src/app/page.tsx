import { BarraContacto } from "@/components/BarraContacto";
import { PreparadorMensaje } from "@/components/Consulta";
import { FotoEditorial } from "@/components/FotoEditorial";
import {
  IconoCorreo,
  IconoFlecha,
  IconoTelefono,
  IconoWhatsApp,
  LaminaApiario,
  LaminaColonia,
  LaminaTraslado,
  MapaDestino,
} from "@/components/graficos";
import { sitio, telLink, whatsappLink } from "@/content/sitio";

const { principal, alternativo } = sitio.telefonos;

const NAVEGACION = [
  { href: "#servicio", texto: "Servicio" },
  { href: "#reubicacion", texto: "Reubicación" },
  { href: "#contacto", texto: "Contacto" },
];

const PASOS = [
  {
    titulo: "La colonia, donde se instaló",
    texto: "Una colonia rústica ocupa un hueco: un techo, una pared, un árbol.",
    Lamina: LaminaColonia,
  },
  {
    titulo: "Retiro y traslado",
    texto: "Cuando el caso admite la reubicación, se retira la colonia y se traslada.",
    Lamina: LaminaTraslado,
  },
  {
    titulo: "El apiario de destino",
    texto: "La colonia continúa en un apiario trazabilizado, en un predio del sur de Uruguay.",
    Lamina: LaminaApiario,
  },
];

const PREGUNTAS = [
  {
    pregunta: "¿Puedo consultar si no sé si son abejas o avispas?",
    respuesta:
      "Sí. Contanos qué ves y dónde está; con eso alcanza para empezar la consulta. No hace falta identificar el insecto.",
  },
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

/** Par de acciones directas: WhatsApp (principal) y llamada. */
function AccionesContacto({ claseExtra = "" }: { claseExtra?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${claseExtra}`}>
      <a className="boton boton-primario" href={whatsappLink(principal.whatsapp)}>
        <IconoWhatsApp />
        Consultar por WhatsApp
      </a>
      <a className="boton boton-secundario" href={telLink(principal.internacional)}>
        <IconoTelefono />
        Llamar al {principal.visible}
      </a>
    </div>
  );
}

export default function Inicio() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-[4px] bg-ink px-4 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>

      <header className="contenedor grid grid-cols-[1fr_auto] items-center gap-x-4 pt-4 lg:grid-cols-[auto_1fr_auto] lg:gap-x-6 lg:py-5">
        <a href="#inicio" className="inline-flex min-h-11 items-center gap-[0.25em] justify-self-start whitespace-nowrap text-[1.3125rem] leading-none tracking-[-0.01em] no-underline md:text-[1.4375rem]">
          <span className="font-extrabold [font-stretch:78%]">Colmenas</span>{" "}
          <span className="font-normal [font-stretch:78%]">del Río</span>
        </a>
        <nav aria-label="Principal" className="col-span-2 row-start-2 mt-3 border-t border-rule lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:border-0">
          <ul className="-mx-2.5 flex flex-wrap max-[359px]:text-base sm:-mx-3 lg:justify-end lg:gap-2">
            {NAVEGACION.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center px-2.5 font-medium decoration-oxide sm:px-3 decoration-2 underline-offset-[0.4em] hover:underline"
                >
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="boton boton-primario min-h-11 px-3.5 sm:px-4" href={whatsappLink(principal.whatsapp)}>
          <IconoWhatsApp />
          <span className="max-[359px]:sr-only md:hidden">WhatsApp</span>
          <span className="hidden md:inline">Consultar por WhatsApp</span>
        </a>
      </header>

      <main id="contenido" tabIndex={-1} className="outline-none">
        {/* Primera pantalla */}
        <section id="inicio" aria-labelledby="titulo-principal" className="contenedor">
          <div className="mt-6 border-t border-ink pt-6 md:grid md:grid-cols-12 md:gap-x-6 md:pt-8 lg:mt-0">
            <h1
              id="titulo-principal"
              className="text-display font-[760] [font-stretch:80%] md:col-span-12 lg:col-span-8 lg:row-start-1"
            >
              Retiro de colmenas y nidos de avispas<span className="text-oxide">.</span>
            </h1>

            <div
              id="hero-acciones"
              className="mt-8 md:col-span-12 md:row-start-2 md:mt-8 md:grid md:grid-cols-2 md:gap-x-8 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-3 lg:block"
            >
              <p className="max-w-[34ch] text-lead">
                Retiramos colmenas de abejas y nidos de avispas. Contanos dónde están y consultanos por tu caso.
              </p>
              <AccionesContacto claseExtra="mt-7 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:flex-col lg:mt-7" />
              <p className="mt-5 flex max-w-[34ch] gap-3 text-meta text-muted">
                <span aria-hidden="true" className="mt-[0.6em] h-px w-6 shrink-0 bg-oxide" />
                No necesitás saber si son abejas o avispas para consultar.
              </p>
            </div>

            <figure className="-mx-5 mt-8 sm:mx-0 md:col-span-12 md:row-start-3 lg:row-start-2">
              <picture>
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
                  sizes="(min-width: 80rem) 1200px, (min-width: 64rem) calc(100vw - 5rem), (min-width: 40rem) calc(100vw - 4rem), 100vw"
                />
                <source
                  type="image/webp"
                  srcSet="/img/apicultor-panoramico-640.webp 640w, /img/apicultor-panoramico-960.webp 960w, /img/apicultor-panoramico-1200.webp 1200w, /img/apicultor-panoramico-1600.webp 1600w, /img/apicultor-panoramico-1870.webp 1870w"
                  sizes="(min-width: 80rem) 1200px, (min-width: 64rem) calc(100vw - 5rem), (min-width: 40rem) calc(100vw - 4rem), 100vw"
                />
                <img
                  src="/img/apicultor-panoramico-1870.webp"
                  width={1870}
                  height={841}
                  alt="Apicultor con traje de protección amarillo retirando panales de una abertura en una pared de ladrillo, bajo un alero."
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[900/855] h-auto w-full bg-paper-press object-cover sm:aspect-[1870/841]"
                />
              </picture>
              <figcaption className="epigrafe mt-3 px-5 sm:px-0">
                <span>
                  Retiro de panales en una pared.{" "}
                  <span className="sm:hidden">Foto: Colmenas del Río.</span>
                  <span className="hidden sm:inline">Imagen ampliada con IA.</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Servicio */}
        <section id="servicio" aria-labelledby="titulo-servicio" className="contenedor mt-12 md:mt-16">
          <div className="grid gap-x-6 border-t border-ink pt-6 md:grid-cols-12">
            <h2 id="titulo-servicio" className="text-h2 font-[760] [font-stretch:80%] md:col-span-6">
              ¿Qué encontraste?
            </h2>
            <p className="mt-4 max-w-[38ch] text-lead md:col-span-5 md:col-start-8 md:mt-1">
              Si no sabés si son abejas o avispas, consultanos igual.
            </p>
          </div>

          <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-2 md:gap-10">
            <article className="border-t border-ink pt-4">
              <div className="space-y-1">
                <h3 className="text-h3 font-bold [font-stretch:80%]">Abejas</h3>
              </div>
              <figure className="mt-5">
                <FotoEditorial nombre="abeja" alt="Referencia ilustrativa de una abeja melífera de perfil: tórax velloso y abdomen de tonos ámbar y marrón." />
                <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-meta text-muted">
                  <span>Tórax velloso</span>
                  <span>Tonos ámbar y marrón</span>
                </figcaption>
              </figure>
              <p className="mt-6 max-w-[52ch]">
                Retiramos colmenas y reubicamos las colonias cuando el caso lo permite.
              </p>
              <a href="#reubicacion" className="enlace mt-5 inline-flex min-h-11 items-center gap-2 font-semibold">
                Ver la reubicación
                <IconoFlecha direccion="abajo" />
              </a>
            </article>
            <article className="border-t border-ink pt-4">
              <div className="space-y-1">
                <h3 className="text-h3 font-bold [font-stretch:80%]">Avispas</h3>
              </div>
              <figure className="mt-5">
                <FotoEditorial nombre="avispa" alt="Referencia ilustrativa de una avispa amarilla y negra de perfil: cuerpo más liso y cintura estrecha." />
                <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-meta text-muted">
                  <span>Cuerpo más liso</span>
                  <span>Cintura marcada</span>
                </figcaption>
              </figure>
              <p className="mt-6 max-w-[44ch]">
                Evaluamos la ubicación del nido para definir cómo intervenir.
              </p>
              <a href="#contacto" className="enlace mt-5 inline-flex min-h-11 items-center gap-2 font-semibold">
                Consultar por un nido
                <IconoFlecha />
              </a>
            </article>
          </div>

          <p className="epigrafe mt-5">
            Imágenes ilustrativas generadas con IA. El aspecto varía según la especie.
          </p>
        </section>

        {/* Reubicación */}
        <section id="reubicacion" aria-labelledby="titulo-reubicacion" className="sobre-oliva mt-12 bg-olive py-10 text-paper md:mt-16 md:py-14">
          <div className="contenedor">
            <div className="grid gap-x-6 md:grid-cols-12">
              <h2 id="titulo-reubicacion" className="text-h2 font-[760] [font-stretch:80%] md:col-span-6">
                Reubicación de abejas
              </h2>
              <p className="mt-6 max-w-[34ch] font-serif text-[clamp(1.25rem,1rem+0.9vw,1.75rem)] leading-[1.35] md:col-span-5 md:col-start-8 md:mt-1">
                Cuando el caso permite reubicarlas, las colonias se trasladan a apiarios trazabilizados del sur de Uruguay.
              </p>
            </div>

            <figure className="mt-8">
              <ol className="grid gap-y-6 md:grid-cols-3 md:gap-x-0">
                {PASOS.map(({ titulo, texto, Lamina }, indice) => (
                  <li key={titulo} className="border-t border-olive-rule pt-5 md:pr-8 lg:pr-12">
                    <div className="md:-mr-8 lg:-mr-12"><Lamina /></div>
                    <h3 className="mt-5 flex items-baseline gap-3 text-[1.375rem] leading-tight font-bold [font-stretch:85%]">
                      <span aria-hidden="true" className="font-serif text-[1.125rem] font-normal text-olive-text">
                        {indice + 1}
                      </span>
                      {titulo}
                    </h3>
                    <p className="mt-2 max-w-[36ch] text-olive-text">{texto}</p>
                  </li>
                ))}
              </ol>
              <figcaption className="mt-6 flex flex-col items-start gap-x-8 border-t border-olive-rule pt-3 text-meta text-olive-text sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[42ch]">El mapa muestra el destino de las colonias reubicadas. Consultanos por tu localidad para conocer la zona de atención.</p>
                <div className="w-52 shrink-0"><MapaDestino /></div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Consulta */}
        <section id="contacto" aria-labelledby="titulo-contacto" className="contenedor mt-12 md:mt-16">
          <div className="grid gap-x-6 gap-y-8 border-t border-ink pt-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="titulo-contacto" className="text-h2 font-[760] [font-stretch:80%]">
                Contacto
              </h2>
              <p className="mt-4 max-w-[36ch] text-lead">Contanos qué encontraste y en qué localidad estás.</p>
              <AccionesContacto claseExtra="mt-5 lg:max-w-sm lg:flex-col" />

              <figure className="mt-6 max-w-sm">
                <FotoEditorial
                  nombre="equipo"
                  alt="Escena generada con dos apicultores junto a una colmena cerrada."
                  sizes="(min-width: 40rem) 384px, calc(100vw - 2.5rem)"
                />
                <figcaption className="epigrafe mt-2">Escena generada para esta propuesta.</figcaption>
              </figure>

              <dl className="mt-5 border-t border-ink">
                <div className="flex flex-wrap items-center justify-between gap-x-6 border-b border-rule py-2">
                  <dt className="text-muted">Teléfono y WhatsApp</dt>
                  <dd>
                    <a href={telLink(principal.internacional)} className="enlace inline-flex min-h-11 items-center font-semibold tabular-nums">
                      {principal.visible}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-6 border-b border-rule py-2">
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
                <div className="flex flex-wrap items-center justify-between gap-x-6 border-b border-rule py-2">
                  <dt className="text-muted">Correo</dt>
                  <dd className="min-w-0">
                    <a href={`mailto:${sitio.correo}`} className="enlace inline-flex min-h-11 items-center gap-2 break-all">
                      <IconoCorreo />
                      {sitio.correo}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 max-w-[42ch] text-meta text-muted">Podés enviarnos una foto por WhatsApp.</p>
            </div>

            <div className="requiere-js lg:col-span-6 lg:col-start-7">
              <PreparadorMensaje />
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section id="preguntas" aria-labelledby="titulo-preguntas" className="contenedor my-12 md:my-16">
          <div className="grid gap-x-6 border-t border-ink pt-6 lg:grid-cols-12">
            <h2 id="titulo-preguntas" className="text-h2 font-[760] [font-stretch:80%] lg:col-span-4">
              Preguntas frecuentes
            </h2>
            <div className="mt-8 border-t border-rule lg:col-span-8 lg:mt-0 lg:border-t-0">
              {PREGUNTAS.map(({ pregunta, respuesta }) => (
                <details key={pregunta} className="pregunta border-b border-rule">
                  <summary className="flex min-h-14 items-start justify-between gap-6 py-5">
                    <span className="pregunta-texto text-[1.1875rem] leading-snug font-semibold decoration-2 underline-offset-4 md:text-[1.375rem]">
                      {pregunta}
                    </span>
                    <span
                      aria-hidden="true"
                      className="signo relative mt-1 size-5 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-current"
                    />
                  </summary>
                  <p className="max-w-[60ch] pb-6 text-muted md:pr-12">{respuesta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="sobre-tinta bg-ink text-paper">
        <div className="contenedor grid gap-x-6 gap-y-6 py-8 md:grid-cols-12 md:py-10">
          <div className="md:col-span-5">
            <p className="text-[1.5rem] leading-none tracking-[-0.01em]">
              <span className="font-extrabold [font-stretch:78%]">Colmenas</span> <span className="[font-stretch:78%]">del Río</span>
            </p>
            <p className="mt-4 max-w-[38ch] text-ink-text">Retiro de colmenas de abejas y resolución de situaciones con avispas. Uruguay.</p>
          </div>
          <div className="md:col-span-4">
            <h2 className="text-meta font-semibold text-ink-text">Contacto</h2>
            <ul className="mt-2">
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
          </div>
          <nav aria-label="Pie de página" className="md:col-span-3">
            <h2 className="text-meta font-semibold text-ink-text">En esta página</h2>
            <ul className="mt-2">
              {[...NAVEGACION, { href: "#preguntas", texto: "Preguntas frecuentes" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="enlace inline-flex min-h-11 items-center">
                    {item.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="border-t border-ink-rule pt-5 text-meta text-ink-text md:col-span-12">Propuesta de rediseño · versión de presentación.</p>
        </div>
      </footer>

      <BarraContacto />
    </>
  );
}
