'use strict'

const contenedor = document.querySelector('.contenedor');
const parrafo = document.createElement('p')
parrafo.innerHTML = 'Parrafo de mierda';
contenedor.appendChild(parrafo)
const h2_antiguo = document.querySelector('.antiguo')
const h2_nuevo = document.createElement('h2');
h2_nuevo.innerHTML = 'Titulo Nuevo';

//* Metodos de Childsqs

//replaceChild() -> Reemplaza el hijo

contenedor.replaceChild(h2_nuevo, h2_antiguo);

//removeChild() -> Elimina el elemento hijo

contenedor.removeChild(h2_nuevo);


//hasChildNodes() -> Sierve para verificar si tiene un elemento hijo, o no es el elemento hijo
let respuesta = h2_antiguo.hasChildNodes();

if(respuesta){
    console.log('El elemento tiene hijos');
}else console.log('El elemento no tiene hijos');


//* Propiedades de los parents

//parentELement -> Elige el padre elemento de un elemento

//parentNode


//* Propiedad de los siblings(Hermanos)

//nextSibling 

console.log(h2_antiguo.nextElementSibling);

//previousSibling
//nextElementSibling
//previousElementsSibling

//* Nodos
//closest.