'use strict'

let num1;

const tablaMultiplicar = (num1)=>{
    num1 =parseInt(prompt('Escoge un número',0));

    if(isNaN(num1)){
        alert('Debes escoger un número, animal!')
    }else{
        console.log(`Tabla del ${num1}`);
    for (let num = 1; num <= 10; num++){
        console.log(`${num1} x ${num} = ${num1*num}` );
        } 
    }
};

const factorialNum = (num1) =>{
    num1 =parseInt(prompt('Escoge un número',0));
    if(isNaN(num1)){
        alert('Debes escoger un número, animal!')
    }else{
        let total = 1;
        for(let num = 1; num<=num1; num++){
            total *= num;
        }
        console.log(`Factorial de ${num1} = ${total}`);
    }
}

// tablaMultiplicar(num1);
// factorialNum(num1)

//Imprimir la suma de números impares entre 1 y 100

const sumaParesEntreDosNumeros = (i,num)=>{
    let suma = 0;
    
    for(let i = 1; i<=num;i++ ){
        if(i % 2 === 0){
            suma += i;
        }
        console.log(i);
    }
    console.log(`Suma de los números pares entre ${i} y ${num} = ${suma}`);
}

sumaParesEntreDosNumeros(4,6);



