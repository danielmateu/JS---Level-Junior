'use strict'



//*Creacion de elementos

// createElement() ->

const contenedor = document.querySelector('.contenedor')

//createTextNode() -> element

const textoContenedor = document.createTextNode('Soy un contenedor');

//appendChild() ->

contenedor.appendChild(textoContenedor);

//console.log(contenedor);

//createDocumentFragment() -> Si debemos agregar muchos elementos, usaremos el createDocumentFragment. 

const fragmento = document.createDocumentFragment()

for(let i = 1; i <= 20; i++){
    const item = document.createElement('li');
    item.innerHTML = `Esto es el item numero ${i} de la lista`;
    fragmento.appendChild(item);
}
console.log();

contenedor.appendChild(fragmento)