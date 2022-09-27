'use strict'

//*DOM - Document Object Model

//node -> Un nodo en el DOM es cualquier etiqueta del cueroi

//Document -> El nodo document es el nodo raíz, a partir del cual, derivan el reste de nodos.

//Element -> Nodos definidos por etiquetas HTML

//Text -> El texto dentro de un nodo Element, se considera un nuevo hijo de tipo text

//Attribute: Los atributos de las etiquetas definen nodos 

//Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera

//*METODOS DE SELECCION DE ELEMENTOS

// getElementById() -> Selecciona un elemento por ID

let texto = document.getElementById('texto');
console.log(texto);

//getElementByTagName() -> Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada

texto = document.getElementsByTagName('p')
console.log(texto[1].textContent);

//querySelector() -> Devuelve el primer elemento que coincida con el grupo especificada de selectores

let parrafo = document.querySelector('.parrafo');
console.log(parrafo.textContent);

//querySelectorAll() -> Devuelve todos los elementos que coincidan con el grupo especificado de selectores. Nos devuelve una lista de nodos

//*METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS

const input = document.querySelector('.input')
console.log(input);

//setAttribute() -> Modifica el valor del atributo que seleccionemos en el primer parámetro. Tambien puede crear el atributo, en el caso que no lo tenga.

input.setAttribute('type','range')

//getAttribute() -> Obtiene el valor de un atributo

console.log(input.getAttribute('type'));

//removeAttribute() -> Elimina el valor de un atributo

input.removeAttribute('type');


//* ATRIBUTOS GLOBALES 

// class -> Lista de clases del elemento separadas por espacios

//contentditable -> indica si el elemento puede ser modificable por el usuario (booleano)

const titulo = document.getElementById('titulo');
titulo.setAttribute('contenteditable','false');

//dir -> Indica la direccionalidad del texto, tiene tres valores: Left To Right, Right To Left

titulo.setAttribute('dir','rtl')

//hidden -> Indica si el elemento aun no es, o ya no es, relevante

titulo.setAttribute('hidden','true')

titulo.removeAttribute('hidden')

//id -> Define un identificador único.

//style -> Contiene declaraciones de estilo CSS para ser aplicados al elementos

//tabindex -> Indica si el elemento puede obtener un focus de input

titulo.setAttribute('tabindex','0')

//title -> Contiene un texto con información relacionada al elemento al que pertenece.

titulo.setAttribute('title','titulo normal')

