'use strict'

//*Obtencion y modificacion de elementos

const titulo = document.querySelector('.titulo');

//textContent -> No nos devuelve el HTML, nos deuvelve el texto de cualquier nodo

let resultado = titulo.textContent;

console.log(resultado);

//innerText -> Nos devuelve el texto visible de un node Element(Ya no se utiliza)

//innerHTML -> nos devuelve el contenido HTML de un elemmento

//outerHTML -> Nos devuelve el elemento HTML completo.