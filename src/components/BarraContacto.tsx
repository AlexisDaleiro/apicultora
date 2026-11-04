"use client";

import { useEffect, useState } from "react";
import { sitio, telLink, whatsappLink } from "@/content/sitio";
import { IconoTelefono, IconoWhatsApp } from "./graficos";

// Mientras alguno de estos bloques con contacto propio está en pantalla, la barra se oculta.
const BLOQUES_CON_CONTACTO = ["#hero-acciones", "#contacto", "#cierre", "footer"];

/**
 * Barra fija solo en móvil. Arranca oculta: sin JavaScript no aparece
 * y el contacto sigue disponible en la página.
 */
export function BarraContacto() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enPantalla = new Set<Element>();
    const observador = new IntersectionObserver((entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) enPantalla.add(entrada.target);
        else enPantalla.delete(entrada.target);
      }
      setVisible(enPantalla.size === 0);
    });
    for (const selector of BLOQUES_CON_CONTACTO) {
      const bloque = document.querySelector(selector);
      if (bloque) observador.observe(bloque);
    }
    return () => observador.disconnect();
  }, []);

  const { principal } = sitio.telefonos;

  return (
    <aside
      aria-label="Contacto rápido"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-paper px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[translate,visibility] duration-200 ease-(--ease-salida) md:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a className="boton boton-primario" href={whatsappLink(principal.whatsapp)}>
          <IconoWhatsApp />
          WhatsApp
        </a>
        <a className="boton boton-secundario" href={telLink(principal.internacional)}>
          <IconoTelefono />
          Llamar
        </a>
      </div>
    </aside>
  );
}
