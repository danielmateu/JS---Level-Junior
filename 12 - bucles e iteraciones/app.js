'use strict'

let numero = 0;

//Bucles e Iteraciones

    //if -> Si la condicion se cumple... ejecuta!

    if( numero < 10){
        numero++;
        console.log('Condicional if: ', numero);
    }

    //while -> Mientras sea verdadero... ejecuta!
    console.log('Bucle While: ');
    while( numero < 100){

        if(numero ==10){
        break; //Usamos el break para romper el bucle
        }
        numero++;
        console.log(numero);
    }

    //do while -> Ejecuta! miestras sea verdadero
    document.write(`Bucle Do While<br>`)
    do{
        numero++;
        document.write(`${numero}<br>`)
    }while(numero < 15);
    

    //for -> Bucle definido, nosotros definimos las vueltas que va a realizar. Declaramos, iniciamos e iteramos, incrementando o decrementando.

    console.log('Bucle for');

    for(let i=0; i<=10;i++){

        //Tambien podemos ignorar una o varias iteraciones con Continue
        if(i === 6){
            console.log('Continuamos ignorando el 6');
            continue;
        }
        //Podemos acabar la sentencia con Break para
        if(i=== 9){
            console.log('Paramos cuando i es igual a 9');
            break;
        }

        console.log(i);
        

    }

    //for in -> Bucle que recorre los indices
    //for of -> Bucle que recorre los objetos

    //sentencia break 
    //sentencia label 
    //sentencia continue