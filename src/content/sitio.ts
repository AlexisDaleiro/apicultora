/**
 * Configuración editable de la demo.
 *
 * Contactos verificados en https://colmenasdelrio.com/ el 2026-11-03.
 * Que el principal sea 099 498 294 es una decisión de la demo, no una
 * preferencia declarada por el cliente.
 */

export const sitio = {
  nombre: "Colmenas del Río",

  /** Mientras sea `true`, la página se publica con `noindex` y robots.txt bloquea todo. */
  modoDemo: true,

  telefonos: {
    principal: { visible: "099 498 294", internacional: "+59899498294", whatsapp: "59899498294" },
    alternativo: { visible: "099 205 608", internacional: "+59899205608", whatsapp: "59899205608" },
  },

  correo: "leomenoni14@gmail.com",

  seo: {
    titulo: "Retiro de colmenas y avispas | Colmenas del Río",
    descripcion:
      "Retiro de colmenas de abejas y atención de situaciones con avispas. Reubicación de colonias de abejas en apiarios trazabilizados. Consultanos por tu caso.",
  },
} as const;

/** Mensaje de WhatsApp cuando la persona no completa ningún dato. */
export const MENSAJE_GENERAL = "Hola, quisiera consultar por un retiro. ¿Podemos conversar sobre el caso?";

export const telLink = (internacional: string) => `tel:${internacional}`;

export const whatsappLink = (numero: string, texto: string = MENSAJE_GENERAL) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
