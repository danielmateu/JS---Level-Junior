'use strict'

//POO -> Es un paradigma de la programación que nos permite programar objetos como lo hariamos en la vida real

//Clase -> Plantilla que usamos para crear objetos

class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${color}`
    }
    verInfo(){ //No podemos usar funciones flecha para los métodos
        console.log(this.informacion);
    }
}

//Objetos -> Resultado de las clases

//Atributo -> Particularidades del objeto

//Metodo -> Acciones que puede realizar el objeto

//Constructor -> Particularidad de nuestrar clases 

//Instanciacion -> 

let perro = new animal('perro',10,'marron');
let gato = new animal('gato',5,'negro');
let pajaro = new animal('pajaro',20,'amarillo')

// console.log(perro.informacion);
// console.log(gato.informacion);
// console.log(pajaro.informacion);

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

