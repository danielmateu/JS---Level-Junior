'use strict'

//Perfeccionar calculadora

//Hay que añadir calcular potencias, raiz cuadrada, raiz cúbica

class Calculadora {
    constructor(marca, modelo, color, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio

        this.informacion = `
        Marca: ${marca}
        Modelo: ${modelo}
        Color: ${color}
        Precio: ${precio}`
    }
    verInfo() {
        alert(this.informacion);
    }
    opciones() {
        let respuesta = prompt(`
        Que operación quieres realizar?
        1: Sumar
        2: Resta
        3: Multiplicación
        4: Division
        5: Raiz Cuadrada
        6: Raiz Cúbica
        7: Potencia
        0: Salir
        `).toLowerCase();

        if (isNaN(respuesta)) {
            console.log('Debes introducir una opción...');
        }

        switch (respuesta) {
            case '1':
                this.sumar()
                break;
            case '2':
                this.restar()
                break;
            case '3':
                this.multiplicar()
                break;
            case '4':
                this.dividir()
                break;
            case '5':
                this.raizCuadrada()
                break;
            case '6':
                this.raizCubica();
                break;
            case '7':
                this.potencia();
                break;
            case '0':
                this.salir();
                break;
            default:
                this.opciones()
                break;
        }
    }

    sumar(num1, num2) {
        num1 = parseInt(prompt('Introduce un número'));
        num2 = parseInt(prompt('Introduce el segundo número'));
        let resultado = `${num1} + ${num2} = ${num1 + num2}`;
        //console.log(resultado);
        return alert(resultado);

    }

    restar(num1, num2) {
        num1 = parseInt(prompt('Introduce un número'));
        num2 = parseInt(prompt('Introduce el segundo número'));
        let resultado = `${num1} - ${num2} = ${num1 - num2}`;
        //console.log(resultado);
        return alert(resultado);
    }

    multiplicar(num1, num2) {
        num1 = parseInt(prompt('Introduce un número'));
        num2 = parseInt(prompt('Introduce el segundo número'));
        let resultado = `${num1} * ${num2} = ${num1 * num2}`;
        //console.log(resultado);
        return alert(resultado);
    }

    dividir(num1, num2) {
        num1 = parseInt(prompt('Introduce un número'));
        num2 = parseInt(prompt('Introduce el segundo número'));
        let resultado = `${num1} / ${num2} = ${num1 / num2}`;
        //console.log(resultado);
        return alert(resultado);
    }

    raizCuadrada(num1) {
        num1 = parseInt(prompt('Introduce un número'));
        let raizCuadrada = Math.sqrt(num1);
        //console.log(raizCuadrada);
        return alert(`Raiz Cuadrada de ${num1} = ${raizCuadrada}`);
    }

    raizCubica(num1) {
        num1 = parseInt(prompt('Introduce un número'));
        let raizCubica = Math.cbrt(num1);
        //console.log(raizCubica);
        return alert(`Raiz Cúbica de ${num1} = ${raizCubica}`);
    }

    potencia(num1, num2) {
        num1 = parseInt(prompt('Introduce un número'));
        num2 = parseInt(prompt('Introduce la potencia'));
        let potencia = Math.pow(num1, num2);
        //console.log(potencia);
        return alert(`${num1} elevado a ${num2} = ${potencia}`);
    }

    salir() {
        console.log('Adiós!');
    }
}
const calculadora1 = new Calculadora('Casio', 'mod1', 'negro', 15);

//calculadora1.opciones()

//Crear Funcion que al pasarle como parámetro la materia nos devuelva el profesor asignado y el nombre de los alumnos
//console.log(asignaturas);

const materias = {
    fisica : ['Pedro','Juan','Silvia','Dani','Cofla'],
    programacion : ['Jose','Juan','Silvia','Dani','Cofla'],
    logica: ['Mario','Juan','Silvia','Dani','Cofla'],
    quimica: ['Pedro','Juan','Silvia','Dani']
}

const obtenerInformacion = (materia) =>{

    if(materias[materia] !== undefined){
        let profesor = materias[materia].shift();
        let alumnos = materias[materia]
        return (`
        Asignatura -> ${materia}
        Profesor -> ${profesor}
        Alumnos -> ${alumnos}`);
    }else return false;
}

let informacion = obtenerInformacion('fisica');

if(informacion !== false){
    console.log(informacion);
}



//Funcion que nos indique en cuantas clases está cofla

const enCuantasClasesEsta = (nombre) =>{
    let cantidad = 0;
    let clasesPresentes = []
    for(let materia in materias){
        if(materias[materia].includes(nombre)){
            cantidad++;
            //Nombre de esas clases y sus profesores.
            clasesPresentes.push(` ${materia}` );
        }
    }
    return `Está en ${cantidad} clases:${clasesPresentes}`;
}

let cuantasClases = enCuantasClasesEsta('Cofla')
console.log(cuantasClases);


//Preguntarle al alumno en qué materia se quiere inscribir

//Si ya hay 20 inscritos, negarle la inscrpción

//Si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos.

const inscribir = (nombre , materia) =>{
    let alumnos = materias[materia]
    if(alumnos.length >= 6){
        console.log(`${nombre} ya somos muchos...`);
    }else {
        alumnos.push(nombre)
        console.log(`
        Felicidades ${nombre}, te has inscrito correctamente 😉
        Materia - ${materia} 
        Alumnos -> ${alumnos}`);
    }
}

inscribir('Choco','fisica');
inscribir('Jordi','programacion');
