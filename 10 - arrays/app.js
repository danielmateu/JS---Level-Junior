'use strict'

//ARRAYS -> Cuando creamos una variable, guardamos un dato dentro de ella, los arrays son objetos con los que podemos guardar muchos datos.

let objetos = [
    {
        nombre: 'Dani',
        edad: 35,
        casado: true,
        sexo: 'Hombre'
    },
    {
        nombre: 'Silvia',
        edad: 34,
        casado: true,
        sexo: 'Mujer'
    },
    {
        nombre: 'Nuk',
        edad: 7,
        casado: false,
        sexo: 'Perro'
    },
]

for(let objeto of objetos){
    let nombre = objeto.nombre;
    let edad = objeto.edad;
    let casado = objeto.casado;
    let sexo = objeto.sexo;
    console.log(`${nombre} tiene ${edad} años, está casad@? ${casado} y es ${sexo}`);
}