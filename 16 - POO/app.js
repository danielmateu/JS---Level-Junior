'use strict'

//POO -> Es un paradigma de la programación que nos permite programar objetos como lo hariamos en la vida real

class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${color}`
    }
    verInfo(){ //No podemos usar funciones flecha para los métodos
        console.log(this.informacion);
    }
    
}

//Herencia ->

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    //Metodos estáticos -> No necesita que la clase se defina para poder ser creado
    static ladrar(){ 
        alert('Guau!')
    }

    set modificarRaza(nuevaRaza){
    this.raza = nuevaRaza
    }
    get obtenerRaza(){
        return this.raza
    }
}

const perro = new Perro('perro',10,'marron','Pataner');
perro.modificarRaza = 'Setter';
console.log(perro.raza);

const gato = new Animal('gato',5,'negro');
const pajaro = new Animal('pajaro',20,'amarillo')

Perro.ladrar();
perro.verInfo();
gato.verInfo();
//gato.ladrar();
pajaro.verInfo();

//Abstraccion ->  Resumimos lo que más podamos el objeto

//Modularidad -> Resolver el problema en pequeños pedazos

//Encapsulamiento -> Hacer que todos los datos, sean privados

//Polimorfismo -> Consiste en ver como un objeto se comporta de forma distinta ante el mísmo método, por sus propiedades.

//Metodos de acceso (Getters y Setters);

//Get -> Obtener valores

//Set -> Modificar Valor

