'use strict'

//Métodos de Arrays -> De Acceso

let nombres = ['Dani','Silvia','Nuk','Grogu','Obi Wan','Ioda'];
console.log('Array Original',nombres);

//join() -> Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve. Podemos usar el separado que queramos

    let join = nombres.join(', ');
    console.log('join()->',join);

//slice() -> Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta el final, final no incluido. El array original no se modifica

    let slice = nombres.slice(0,4)
    console.log('Slice->', slice);
    console.log('Array Original -> ',nombres);

//Métodos ya vistos en los métodos de cadenas: toString(); indexOf(); lastIndexOf(); includes();