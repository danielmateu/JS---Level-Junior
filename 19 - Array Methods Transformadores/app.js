'use strict'

//Métodos de Arrays -> TRANSFORMADORES

let nombres = ['Dani','Silvia','Nuk'];
console.log('Array Original',nombres);

//pop() -> Modifica el array. Nos muestra y elimina el último elemento.

    let pop = nombres.pop();
    console.log('pop()->', pop);
    

//shift() -> Modifica el array. Nos muestra y elimina el primer elemento.

    let shift = nombres.shift();
    console.log('shift()->', shift);

//push() -> Agrega un elemento al final del array.nos y nos devuelve la longitud del array.
    let push = nombres.push('Dotz','Pelut');
    console.log('push()->', push);
    console.log(nombres);

//reverse() -> Invierte el orden de los elementos de un array

    let reverse = nombres.reverse();
    console.log(reverse);

//unshift() -> Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array

    let unshift = nombres.unshift('Grogu','Luke','Mando');
    console.log('Unshift ->', unshift);
    console.log(nombres);

//sort() -> Ordena los elementos del array y devuelve

    let sort = nombres.sort();
    console.log('Sort()->', sort);

//splice() -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

    let splice = nombres.splice(1,2,'Darth Vader','Obi Wan', 'Ioda');
    console.log('Splice->', splice);
    console.log('Array con Splice->',nombres);