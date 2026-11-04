"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Secciones de fondo oscuro: sobre ellas la cabecera usa texto claro.
const FONDOS_OSCUROS = ".sobre-tinta, .sobre-oliva";

/**
 * Cabecera fija siempre visible: translúcida al bajar y con el tono
 * (oscuro o claro) de la sección que tiene debajo.
 * Sin JavaScript queda arriba como una cabecera normal.
 */
export function CabeceraFija({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [arriba, setArriba] = useState(true);
  const [oscuro, setOscuro] = useState(true);

  useEffect(() => {
    let pendiente = false;

    const actualizar = () => {
      pendiente = false;
      const y = window.scrollY;
      const alto = ref.current?.offsetHeight ?? 0;
      setArriba(y < 8);

      // Mira justo debajo del borde de la cabecera: ahí está la sección que asoma.
      const debajo = document.elementFromPoint(window.innerWidth / 2, alto + 1);
      setOscuro(Boolean(debajo?.closest(FONDOS_OSCUROS)));
    };

    const alDesplazar = () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(actualizar);
      }
    };

    actualizar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    window.addEventListener("resize", alDesplazar);
    return () => {
      window.removeEventListener("scroll", alDesplazar);
      window.removeEventListener("resize", alDesplazar);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`cabecera ${oscuro ? "sobre-tinta" : "cabecera-clara"}`}
      data-arriba={arriba || undefined}
    >
      {children}
    </div>
  );
}
