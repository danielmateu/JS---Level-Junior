'use strict'

//* ATRIBUTOS DE INPUTS

const input = document.querySelector('.input');



//className -> 

console.log(input.className);

//value

//input.value = 'Hola caracola';
console.log(input.value);

//type

input.type = 'text'
console.log(input.type);

//accept -> Tipo de archivo que acepta en un input tipo file

input.accept = 'image/png'

//form -> Nos permite ejecutar un input fuera de un formulario

//minLength -> Longitud mínima a introducir en un input

//placeholder ->

//required -> Nos permite decir si es requerido o no.

//* Atributos Style

let titulo = document.querySelector('.titulo')

//titulo.style.display = 'none';
titulo.style.background = 'black';
titulo.style.color = '#aaa'

//usos y ejemplos

//propiedades camelCase