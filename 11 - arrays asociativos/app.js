'use strict'

//ARRAYS Asociativos -> Arrays con valores asociados 

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

    document.write(`${nombre} tiene ${edad} años, está casad@? ${casado} y es ${sexo}<br>`)
}
