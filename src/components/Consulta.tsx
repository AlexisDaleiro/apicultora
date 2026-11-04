"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { sitio, whatsappLink } from "@/content/sitio";
import { armarMensaje, type DatosConsulta, type Especie } from "@/lib/mensaje";
import { IconoCheck, IconoCopiar, IconoWhatsApp } from "./graficos";

const OPCIONES: { valor: Exclude<Especie, "">; etiqueta: string }[] = [
  { valor: "abejas", etiqueta: "Abejas" },
  { valor: "avispas", etiqueta: "Avispas" },
  { valor: "no-se", etiqueta: "No sé" },
];

type EstadoCopia = "inicial" | "copiado" | "error";

/**
 * Prepara un primer mensaje opcional. No envía nada ni guarda datos:
 * solo arma el texto del enlace de WhatsApp que la persona decide abrir.
 */
export function PreparadorMensaje() {
  const [datos, setDatos] = useState<DatosConsulta>({ especie: "", zona: "", lugar: "" });
  const [copia, setCopia] = useState<EstadoCopia>("inicial");
  const vistaPrevia = useRef<HTMLParagraphElement>(null);

  const mensaje = armarMensaje(datos);

  const actualizar = (campo: keyof DatosConsulta) => (e: ChangeEvent<HTMLInputElement>) => {
    setDatos((previos) => ({ ...previos, [campo]: e.target.value }));
    setCopia("inicial");
  };

  async function copiar() {
    try {
      await navigator.clipboard.writeText(mensaje);
      setCopia("copiado");
    } catch {
      // Sin permiso o sin API: se deja el texto seleccionado para copiarlo a mano.
      const nodo = vistaPrevia.current;
      const seleccion = window.getSelection();
      if (nodo && seleccion) {
        const rango = document.createRange();
        rango.selectNodeContents(nodo);
        seleccion.removeAllRanges();
        seleccion.addRange(rango);
      }
      setCopia("error");
    }
  }

  return (
    <form aria-labelledby="titulo-preparador" onSubmit={(e) => e.preventDefault()} className="border-t-2 border-ink pt-5 sm:rounded-[4px] sm:border sm:border-control sm:bg-paper-raised sm:p-6 md:p-7">
      <h3 id="titulo-preparador" className="text-[1.625rem] leading-tight font-extrabold [font-stretch:78%] md:text-[2rem]">
        Prepará un primer mensaje
      </h3>
      <p className="mt-0.5 text-meta text-muted">Todos los datos son opcionales.</p>

      <fieldset className="mt-5">
        <legend className="font-semibold">¿Qué observás?</legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {OPCIONES.map((opcion) => (
            <label key={opcion.valor} className="opcion">
              <input
                type="radio"
                name="especie"
                value={opcion.valor}
                checked={datos.especie === opcion.valor}
                onChange={actualizar("especie")}
                className="opcion-radio"
              />
              <span className="font-medium">{opcion.etiqueta}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="campo-grupo mt-5">
        <label htmlFor="zona" className="font-semibold">
          Localidad o zona
        </label>
        <p id="zona-ayuda" className="text-meta text-muted">
          Alcanza con la localidad o el barrio.
        </p>
        <input
          id="zona"
          type="text"
          className="campo mt-2"
          value={datos.zona}
          onChange={actualizar("zona")}
          aria-describedby="zona-ayuda"
          autoComplete="address-level2"
          maxLength={80}
          enterKeyHint="next"
        />
      </div>

      <div className="campo-grupo mt-5">
        <label htmlFor="lugar" className="font-semibold">
          ¿Dónde se encuentra?
        </label>
        <p id="lugar-ayuda" className="text-meta text-muted">
          Por ejemplo: en el techo, en una pared, en un árbol o en un galpón.
        </p>
        <input
          id="lugar"
          type="text"
          className="campo mt-2"
          value={datos.lugar}
          onChange={actualizar("lugar")}
          aria-describedby="lugar-ayuda"
          autoComplete="off"
          maxLength={120}
          enterKeyHint="done"
        />
      </div>

      <div className="mt-6 rounded-[4px] border-l-[3px] border-olive bg-paper px-4 py-3">
        <p id="titulo-vista-previa" className="text-meta font-semibold text-muted">
          Tu mensaje
        </p>
        <p ref={vistaPrevia} aria-labelledby="titulo-vista-previa" className="mt-1 text-[1.125rem] leading-relaxed break-words">
          {mensaje}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a className="boton boton-primario" href={whatsappLink(sitio.telefonos.principal.whatsapp, mensaje)}>
          <IconoWhatsApp />
          Continuar en WhatsApp
        </a>
        <button type="button" className="boton boton-secundario" data-copiado={copia === "copiado" || undefined} onClick={copiar}>
          {copia === "copiado" ? <IconoCheck /> : <IconoCopiar />}
          {copia === "copiado" ? "Copiado" : "Copiar mensaje"}
        </button>
      </div>
      <p className="mt-3 text-meta text-muted">Se abrirá WhatsApp con tu mensaje preparado. Revisalo antes de enviarlo.</p>
      <p role="status" className="mt-1 min-h-[1.45em] text-meta font-medium">
        {copia === "copiado" && "Mensaje copiado."}
        {copia === "error" && "No se pudo copiar automáticamente. El mensaje quedó seleccionado para que lo copies."}
      </p>
    </form>
  );
}
