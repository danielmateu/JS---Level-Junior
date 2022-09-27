'use strict'

const starwarsNames = ['Grogu','Obi Wan','Ioda','Darth Vader']

//Métodos de Arrays -> De repetición

let nombres = ['Dani','Silvia','Nuk','Grogu','Obi Wan','Ioda','Darth Vader'];
console.log('Array Original',nombres);

//filter()-> El metodo filter() crea un nuevo array con todos los elementos que cumplan con la condición implementada por la función dada. 

    const filter = nombres.filter(nombre => nombre.length <= 6);
    console.log('Array Filtrada -> ', filter);
    console.log(nombres);

//map() -> El método map() crea un nuevo array con los resultados de la llamada a la función indicada, aplicados a cada uno de sus elementos

    const numeros = [1,2,3,4,5,6];
    const porDos = numeros.map((num) => num*2)
    

    console.log(porDos);

//reduce() -> Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
    const init=0;
    const sumatorioTotal = numeros.reduce((prevval,currval)=>prevval+currval,init);

    console.log('Metodo reduce()->', sumatorioTotal);
    
//forEach() -> El método forEach() ejecuta la función indicada una vez por cada elemento del array del
    const forEach = starwarsNames.forEach(nombre => console.log(nombre));
    //console.log('ForEach ->', forEach);
