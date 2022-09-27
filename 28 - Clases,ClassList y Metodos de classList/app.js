'use strict'

//* Clases, ClassList y Métodos de Classlist y Métodos

let titulo = document.querySelector('.titulo');

// add() -> Añade una clase

titulo.classList.add('grande');
titulo.classList.add('mas-grande');

// remove() -> Elimina una clases

titulo.classList.remove('grande');

// item() -> Devuelve la clase del indice especificado,, no afecta a las clases, tan solo nos devuelve el nombre de la clase.

let clase = titulo.classList.item(1);
console.log(clase);


// contains() -> Verifica si ese elemento posee o no la clase especificada.

let claseGrande = 'grande'
let valor = titulo.classList.contains(claseGrande);

if(valor){
    titulo.classList.remove(claseGrande);
}else{
    console.log(`La clase ${claseGrande} no existe`);
    //titulo.classList.add(claseGrande);
} 

console.log(titulo.classList.contains(claseGrande)); 

// replace() -> reemplaza una clase por otra

// toggle() -> Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina

titulo.classList.toggle(claseGrande,);