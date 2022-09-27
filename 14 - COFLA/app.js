'use strict'

//Dejar pasar a los mayores de edad, la primera persona que pase después de las 2AM, pasa gratix

let free = false;

const validarCliente = (hora) =>{

    let edad =parseInt(prompt('Qué edad tienes?'));
    hora = parseInt(prompt('Qué hora es?'));

    if(edad >= 18){
        if(hora >= 2 && hora < 7 && free == false){
            free = true;
            console.log('Pasas gratis!');
        } else {
            console.log('Puedes pasar pagando');
        }
    }else console.log('Get Out!');
}

// validarCliente();
// validarCliente();
// validarCliente();
// validarCliente();
// validarCliente();
// validarCliente();
// validarCliente();
// validarCliente();


//Crear mini sistema que permita registgrar los alumnos presentes y ausentes. Pasados 30 días, mostrar la situación final del alumno. Máximo 10% de Ausencias.

let cantidadAlumnos =parseInt(prompt('¿Cuantos alumnos hay?'));
let alumnos = [];

for(let i = 0; i < cantidadAlumnos; i++){
    alumnos[i] = [prompt(`Nombre del alumno ${i+1}`), 0];
}

const asistencia = (nombre, p) =>{
    let presencia = prompt(nombre);
    if(presencia ==='p'||presencia ==='P'){
        alumnos[p][1]++;
    }
}

for (let i = 0; i < 7; i++){ 
    for(let alumno in alumnos){
        let nombre = alumnos[alumno][0];
        asistencia(nombre,alumno)
    }
}

for(let alumno in alumnos){
    let nombre = alumnos[alumno][0];
    let asistencias = alumnos[alumno][1];
    let resultado = `
    ${nombre} 
    Asistencias: ${asistencias}
    Ausencias: ${7 - asistencias}
    `;
    console.log(resultado);
    if(asistencias < 3){
        console.log('Suspendido por inasistencia');
    }else console.log('Aprobado por asistencia!');
}

//Crear Calculadora

const suma =(num1,num2)=>{
    num1 = parseInt(prompt('Introduce un número'));
    num2 = parseInt(prompt('Introduce un número'));
    let resultado = num1 + num2;
    return `${num1} + ${num2} = ${resultado}`;
    
}

const resta =(num1,num2)=>{
    num1 = parseInt(prompt('Introduce un número'));
    num2 = parseInt(prompt('Introduce un número'));
    let resultado = num1 - num2;
    return `${num1} - ${num2} = ${resultado}` ;
}

const multiplicacion =(num1,num2)=>{
    num1 = parseInt(prompt('Introduce un número'));
    num2 = parseInt(prompt('Introduce un número'));
    let resultado = num1 * num2;
    return `${num1} x ${num2} = ${resultado}` ;
}

const division =(num1,num2)=>{
    num1 = parseInt(prompt('Introduce un número'));
    num2 = parseInt(prompt('Introduce un número'));
    let resultado = (num1 / num2).toFixed(2);
    return `${num1} / ${num2} = ${resultado}` ;
}

console.log(suma()); 


