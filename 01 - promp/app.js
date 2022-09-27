'use strict'

alert('Cómo te llamas');

let nombre = prompt('Introduce tu nombre');

//const nombre = promp('Cómo te llamas?');

const resultado = document.querySelector('.resultado');

resultado.innerText = `Hola ${nombre}`;

//Usamos el prompt para almacenar datos que introduce el usuario como variables. Es una de las Apis de JS. La funcion nos devuelve el valor que almacenamos en la variable.