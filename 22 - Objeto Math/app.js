'use strict'

//Objeto Math -> Math

//sqrt() -> Devuelve la raiz cuadrada de un número

let num = 25;
let numeros = (1,2,3,4,5,6,7,8,9);

//pow() -> Devuelve la potencia

let raizcuadrada =Math.sqrt(num);
console.log(`Raiz Cuadrada de ${num}->`,raizcuadrada);

//cbrt() -> Devuelve la raiz cubica de un número

let raizCubica = Math.cbrt(num);
console.log(`Raiz Cúbica de ${num}->`, raizCubica);

//max() -> Devuelve el mayor de cero o más números

let numeroMayor = Math.max(10,45);
console.log(numeroMayor);

//min() -> Devuelve el más pequeño de cero o más números

let numeroMenor = Math.min(10,45);
console.log(numeroMenor);

//random() -> Devuelve un número aleatorio entre 0 y 1 

let randomNum =parseInt((Math.random()*100).toFixed(2));
console.log(randomNum);

//fround() -> Devuelve la representacion flotante de precision simple más cercana de un número

let fround =Math.fround((Math.random()));
console.log(fround);

//floor() -> Devuelve el mayor entero menor que o igual a un número 

let floor = Math.floor(Math.random()*100);
console.log(floor);

//trunc() -> Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios
