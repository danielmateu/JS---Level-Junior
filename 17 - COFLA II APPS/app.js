'use strict'

//COFLA -> Crear sistema para mostrar las particularidades de las apps de la store. Se debe mostrar la información de cada app( descargas, puntuación y peso). Se debe poder instalar, desinstalar, abrir y cerrar

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.informacion =`${descargas}K, ${puntuacion} Estrellas, ${peso}mb`;
        this.instalar = false;
        this.encender = false;
    }

    verInformacion(){
        alert(`Información de la app -> ${this.informacion}`)
        if(this.instalar == false){
            let respuesta = prompt('¿Quieres instalar la app?').toLowerCase()
            if(respuesta === 'si'){
                //console.log(this.instalar);
                this.instalarApp();
            }if(respuesta === 'no' || respuesta === ''){
                console.log('Gracias por tu visita! 😊');
                alert('Gracias por tu visita! 😊')
            }
        }
    }
    instalarApp(){
        if(this.instalar == false){
        console.log('Instalando...');
        this.instalar = true;
        alert('App INSTALADA! 🥰');
        console.log('App Instalada! 🥰');
        this.opciones();
        }else if(this.instalar == true){
            alert('La app ya está instalada! 😁');
            this.opciones();
        }
    }
    desinstalar(){
        if(this.instalar == true){
            alert('Desinstalando la App... 😉')
            this.instalar = false
            console.log('App desinstalada... Fue un placer!');
        }
    }

    abrir(){
        if(this.instalar == false){
            alert('Antes de abrir, deberías instalar la App 🙃');
            let respuesta = prompt('Quieres instalar la app?').toLowerCase();
            if(respuesta === 'si'){
                this.instalar = true;
                alert('App instalada! 😁')
                this.opciones();
            }else if(respuesta === 'no') alert('Hasta luego! 🙂');
        }
        if(this.instalar == true && this.encender == false){
            this.encender = true;
            alert('Arrancando la App! 😊')
            this.opciones()
        }
        if(this.encender == true && this.instalar == true){
            alert('La app ya está encendida');
            this.opciones();
        }
    }
    cerrar(){
        if(this.encender == true){
            this.encender = false;
            alert('App cerrada... Hasta luego! 😊');
        }
    }
    opciones(){
        let respuesta = prompt(`
        ¿Qué quieres hacer?
        1: Abrir
        2: Cerrar
        3: Ver Información
        4: Instalar
        5: Desinstalar`)
        switch (respuesta){
            case '1':
                this.abrir();
            break;
            case '2':
                this.cerrar();
            break;
            case '3':
                this.verInformacion();
                this.opciones();
            break;
            case '4':
                this.instalarApp();
                this.opciones()
            break;
            case '5':
                this.desinstalar();
            break;
        }
    }
}

const whatsapp = new App (450,5,250);
const facebook = new App (1400,4,59);
const ilovepdf = new App (10,3,45)

whatsapp.verInformacion()
//facebook.instalarApp();
//ilovepdf.desinstalar();
