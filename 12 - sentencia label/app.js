'use strict'

let array1 = ['Dani','Silvia','Jose','Teresa','Jordi'];

let array2 = ['Nuk','Busca','Goku',array1, 'Lea'];

forGetBucle:
for(let array in array2){
    if(array == 2){
        for(let array of array1){
            console.log(array);
            continue forGetBucle; 
        }
        
    }else console.log(array2[array]);
}