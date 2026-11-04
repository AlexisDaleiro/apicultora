import assert from "node:assert/strict";
import { test } from "node:test";
import { MENSAJE_GENERAL, whatsappLink } from "../content/sitio.ts";
import { armarMensaje } from "./mensaje.ts";

const vacio = { especie: "", zona: "", lugar: "" } as const;

test("todo vacío da el mensaje general", () => {
  assert.equal(armarMensaje(vacio), MENSAJE_GENERAL);
  assert.equal(armarMensaje({ ...vacio, zona: "   ", lugar: " . " }), MENSAJE_GENERAL);
});

test("cada opción produce una frase natural", () => {
  assert.match(armarMensaje({ ...vacio, especie: "abejas" }), /Observé abejas\./);
  assert.match(armarMensaje({ ...vacio, especie: "avispas" }), /Observé avispas\./);
  const noSe = armarMensaje({ ...vacio, especie: "no-se" });
  assert.match(noSe, /No sé si se trata de abejas o avispas\./);
  assert.doesNotMatch(noSe, /Observé no/);
});

test("zona y lugar sin preposiciones duplicadas ni puntos dobles", () => {
  const m = armarMensaje({ especie: "abejas", zona: "en Malvín.", lugar: "En el techo del galpón. " });
  assert.equal(
    m,
    "Hola, quisiera consultar por un retiro. Observé abejas. Estoy en Malvín. Se encuentra en el techo del galpón. ¿Podemos conversar sobre el caso?",
  );
  // signos de pregunta o exclamación propios se respetan, sin punto extra
  assert.match(armarMensaje({ ...vacio, lugar: "arriba de la ventana ¿será?" }), /arriba de la ventana ¿será\? ¿Podemos/);
  assert.match(armarMensaje({ ...vacio, lugar: "en la puerta!" }), /en la puerta! ¿Podemos/);
  assert.match(armarMensaje({ ...vacio, lugar: "Pared" }), /Se encuentra en pared\./);
  assert.match(armarMensaje({ ...vacio, lugar: "dentro de una pared" }), /Se encuentra dentro de una pared\./);
  assert.match(armarMensaje({ ...vacio, zona: "Ciudad Vieja" }), /Estoy en Ciudad Vieja\./);
});

test("el enlace codifica tildes, ñ, signos y textos largos", () => {
  const texto = armarMensaje({ especie: "no-se", zona: "Peñarol & Sayago #2", lugar: "árbol ".repeat(40) });
  const url = whatsappLink("59899498294", texto);
  assert.ok(url.startsWith("https://wa.me/59899498294?text="));
  assert.ok(!/[\s&#ñáé¿]/.test(url.split("?text=")[1]));
  assert.equal(decodeURIComponent(url.split("?text=")[1]), texto);
});
