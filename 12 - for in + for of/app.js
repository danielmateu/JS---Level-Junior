'use strict'

let animales = ['perro','gato','cerdo','caballo','cebra'];

//for in -> Recorremos los indices de un array

console.log('recorremos el índice del array con el for in');
for(let animal in animales){
    console.log(animal);
}

console.log('recorremos el valor del objeto del array con el for of');
for(let animal of animales) {
    console.log(animal);
}