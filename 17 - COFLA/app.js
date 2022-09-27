'use strict'

//COFLA -> Crear sistema para mostrar las particularidades de los 3 telefonos. Cada uno debe tener Color, Peso, Resolucón de Pantalla, Camara y RAM. Deben poder encenderse, reiniciar, hacer fotos y grabar.

class Telefono{
    constructor(color,peso,rdp,camara,ram,precio){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false
        this.precio = precio
        this.informacion = `${color} ${peso}gr ${rdp}HD ${camara} mega-píxeles ${ram}GB precio ${precio}€`
    }
    verInfo(){
        let respuesta = prompt('¿Quieres ver la información?').toLocaleLowerCase();
        if(respuesta === 'si'){
            alert(this.informacion);
            let respuestaEncendido = prompt('¿Quieres encender?');
            if(respuestaEncendido === 'si'){
                this.encendido = true;
                console.log(this.encendido);
                console.log('Encendiendo...');
                this.opciones()
            }
            
        }
        if(respuesta === 'no'){
            let respuestaEncendido = prompt('¿Quieres encender?');
            if(respuestaEncendido === 'si'){
                this.encendido = true;
                console.log(this.encendido);
                console.log('Encendiendo...');
                this.opciones()
            }else this.apagar();
        }else this.apagar();
    }
    opciones(){
        let respuesta = prompt('¿Qué quieres hacer? 1: Realizar Fotos; 2: Grabar Videos; 3:Reiniciar; 0:Apagar')

        switch(respuesta){
            case '1':
                this.fotos();
            break;
            case '2':
                this.grabar();
            break;
            case '3':
                this.reiniciar();
            break;
            case '0':
                this.apagar();
            break;
        }
    }
    
    encender(){
        let respuesta = prompt('Quieres encender?').toLowerCase();
        if(respuesta === 'si'){
            this.encendido = true;
            console.log(this.encendido);
            this.opciones();
        }
        if(respuesta === 'no'){
            this.apagar();
        }   
    }
    fotos(){
        let respuesta = prompt('Quieres realizar una foto?').toLocaleLowerCase();
        if(respuesta === 'si'){
            console.log('Di Quesooo!!! 😉');
            this.opciones();
        }else this.opciones();
    }
    grabar(){
        let respuesta = prompt('Quieres realizar un video?').toLocaleLowerCase();
        if(respuesta === 'si'){
            console.log('Luces, cámara... acción!!! 😉');
            this.opciones()
        }else this.opciones();
    }
    reiniciar(){
        let respuesta = prompt('Deseas Reiniciar?').toLowerCase();
        if(respuesta === 'si'){
            console.log('Reiniciando...');
            this.encender();
        }else if(respuesta === 'no'){
            this.opciones()
        }
    }
    apagar(){
        let respuesta = prompt('Quieres apagar?').toLowerCase();
        if(respuesta === 'si'){
            console.log('Apagando... Hasta luego! 😉');
            return;
        }
        if(respuesta === 'no'){
            this.opciones
        }
    }
}


const xaiomi = new Telefono('Blanco',250,1080,250,4,450.5);
// xaiomi.modificarModelo = 'MI 40';
// console.log(xaiomi.modelo);

//xaiomi.verInfo()

const huawei = new Telefono('Negro',150,750,250,4,560);
//huawei.verInfo();

huawei.verInfo()

const oppo = new Telefono('Azul',250,1080,250,8,350);
//oppo.verInfo();