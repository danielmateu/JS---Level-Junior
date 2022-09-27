'use strict'

//*Obtencion y modificacion de los childs

const contenedor = document.querySelector('.contenedor')

//firstChild -> Obtenemos el primer hijo

const primerHijo = contenedor.firstChild;
console.log(primerHijo);

//lastChild -> Obtenemos el último hijo

const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo);

//firstElementChild -> Nos permite obtener el primer ELEMENTO hijo
const primerElementoHijo = contenedor.firstElementChild;
console.log(primerElementoHijo);

//lastElementChild ->  Nos permite obtener el último ELEMENTO hijo
const ultimoELementoHijo = contenedor.lastElementChild;
console.log(ultimoELementoHijo);

//childNodes -> Nos devuelve todos los nodos hijos, no es un array es un nodeList, pero si que se puede recorrer como un objeto

let hijos = contenedor.childNodes;

hijos.forEach(hijo => console.log(hijo))

//children -> Elementos hijos, no devuelve el nodos hijos, pero si que se puede recorrer con un for in

hijos = contenedor.children;

for(let hijo of hijos){
    console.log(hijo);
}