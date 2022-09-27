'use strict'

//Métodos de cadenas -> 

let cadena = 'cadena de prueba, tocame los';
let cadena2 = ' cojones';
let num = 1234;

// concat() -> Junta dos o más cadenas y retorna una nueva
    let concatenacion = cadena.concat(cadena2);

    console.log('Concatenación ->', concatenacion);

//startsWith() -> Si una cadena comienza con los caracteres de otra, devuelve true, sino devuelve false. Es estricta

    let startWith = cadena.startsWith(cadena2);
    console.log('StartWith ->', startWith);

//endsWith() -> Si una cadena acaba con los caracteres de otra, devuelve true, sino devuelve false. Es estricta

    let endsWith = cadena.endsWith(cadena2);
    console.log('EndsWith ->', endsWith);

//includes() -> Si una cadena se encuentra dentro de otra cadena, devuelve true, sino devuelve false. Es estricta

    let includes = cadena.includes('prueba');
    console.log('Includes ->',includes);

//indexOf() -> Nos devuelve la posición en la que se encuentra la primera letra. Si no se encuentra, nos devuelve -1. Va de izquierda a derecha

    let indexOf = cadena.indexOf('prueba');
    console.log('IndexOf->',indexOf);

//lastIndexOf() -> Nos devuelve la posición en la que se encuentra la ultima letra. Si no se encuentra, nos devuelve -1. Va de derecha a izquierda

    let lastIndexOf = cadena.lastIndexOf('prueba');
    console.log('LastIndexOf -> ', lastIndexOf);

//padStart() -> Rellena desde la izquierda la cadena actual con una cadena dada, de modo que la cadena resultante alcance una longitud dada. Devuelve un String con la longitud especificada con la cadena de relleno.

    let padStart = cadena.padStart(45,'fuck');
    console.log('PadStart-> ', padStart);

//padEnd() -> Rellena desde la derecha la cadena actual con una cadena dada, de modo que la cadena resultante alcance una longitud dada. Devuelve un String con la longitud especificada con la cadena de relleno.

    let padEnd = cadena.padEnd(45,'fuck');
    console.log('PadStart-> ', padEnd);


//repeat() -> Repite la cadena la cantidad de veces que queramos

    let repeat = cadena.repeat(2);
    console.log('Repeat -> ',repeat);

//split() -> Divide la cadena como le pidamos, nos devuelve un array

    let split = cadena.concat(cadena2).split(',');
    console.log('Split ->', split);
    for(let i = 0; i < split.length; i++){
        console.log(split[i]);
    }

//substring() -> Nos retorna un pedazo de la cadena que seleccionamos. El primer parámetro es donde empieza y está incluido, el segundo es dónde acaba y no está incluido

    let substring = cadena.substring(0,10);
    console.log('Substring ->',substring);

//toLowerCase() -> Convierte una cadena en minúscula

    let toLowerCase = cadena.toLowerCase();
    console.log('toLowerCase->', toLowerCase);

//toUpperCase() -> Convierte una cadena en mayúscula

    let toUpperCase = cadena.toUpperCase();
    console.log('toUpperCase->', toUpperCase);

//toString() -> Nos devuelve una cadena que representa al objeto especificado

    let toString = num.toString();
    console.log('Original-> ', num);
    console.log('To String ->', toString);

//trim() -> Elimina los espacios en blanco al principio y al final de una cadena2

    let trim = cadena.concat(cadena2.trim());
    console.log('Trim ->',trim);

//trimStart() -> Elimina los espacios en blanco al principio de una cadena

//trimEnd() -> Elimina los espacios en blanco al final de una cadena

//valueOf() -> Retorna el valor primitivo de un objeto String.



