export type Especie = "" | "abejas" | "avispas" | "no-se";

export interface DatosConsulta {
  especie: Especie;
  zona: string;
  lugar: string;
}

const OBSERVACION: Record<Exclude<Especie, "">, string> = {
  abejas: "Observé abejas.",
  avispas: "Observé avispas.",
  "no-se": "No sé si se trata de abejas o avispas.",
};

// Si la persona ya escribió la preposición («en el techo», «dentro de una pared»), no se agrega otra.
const EMPIEZA_CON_PREPOSICION = /^(en|dentro|debajo|bajo|sobre|entre|arriba|detrás|junto|cerca)(\s|$)/i;

const limpiar = (texto: string) =>
  texto
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[\s.,;:]+$/, "");

// Cierra la frase con punto salvo que la persona ya la cerró con «?» o «!».
const cerrar = (frase: string) => (/[?!]$/.test(frase) ? frase : `${frase}.`);

// «Techo» → «techo», pero «UTE» o «Ciudad Vieja» se respetan.
const minusculaInicial = (texto: string) =>
  /^\p{Lu}\p{Ll}/u.test(texto) && !/\s\p{Lu}/u.test(texto) ? texto[0].toLowerCase() + texto.slice(1) : texto;

export function armarMensaje({ especie, zona, lugar }: DatosConsulta): string {
  const partes = ["Hola, quisiera consultar por un retiro."];

  if (especie) partes.push(OBSERVACION[especie]);

  const zonaLimpia = limpiar(zona).replace(/^en\s+/i, "");
  if (zonaLimpia) partes.push(cerrar(`Estoy en ${zonaLimpia}`));

  const lugarLimpio = minusculaInicial(limpiar(lugar));
  if (lugarLimpio) {
    const conPreposicion = EMPIEZA_CON_PREPOSICION.test(lugarLimpio) ? lugarLimpio : `en ${lugarLimpio}`;
    partes.push(cerrar(`Se encuentra ${conPreposicion}`));
  }

  partes.push("¿Podemos conversar sobre el caso?");
  return partes.join(" ");
}
