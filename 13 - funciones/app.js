'use strict'

//Funciones -> Definiciones y usos. Son porciones de codigo, y las usamos para no tener que escribir y repetir más código del necesario

//Cómo se hacian antes...

function saludar(){
    let respuesta = prompt('Que pasa puto, cómo estás?').toLowerCase();
    if(respuesta === 'bien'){
        alert('Good to know')
    }else{
        alert('Bueno, qué esperabas?')
    }
    return 'Welcome to my place bitch'
}

const preguntarQuienEs = (nombre) =>{
    nombre = prompt('Quién eres?')
    console.log(`Hola ${nombre}, me alegro de verte!`); 
}

const cheers =()=>
saludar()
preguntarQuienEs();


cheers()
//let saludo = saludar();

//console.log(saludo);

// Las funciones tienen dos partes, una donde las declaramos y otra donde las llamamos, y cada funcion debe tener su utilidad.

//Return -> No devuelve un valor y le dice a la variable el tipo de dato que va a ser. El return finaliza la función.

//Parámetros -> Las funciones no son funciones sin los parámetros. 

let num1 = 32;
let num2 = 12;
let res = num1 + num2;
console.log(res);

function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado
}
console.log(suma(4,10));




