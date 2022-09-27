'use strict'

//COFLA -> Crear sistema para mostrar las particularidades de los 3 telefonos. Cada uno debe tener Color, Peso, Resolucón de Pantalla, Camara y RAM. Deben poder encenderse, reiniciar, hacer fotos y grabar.

class Telefono {
    constructor(marca, color, peso, rdp, camara, ram, precio) {
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
        this.precio = precio;
        this.informacion = `${marca} ${color} ${peso}gr ${rdp}HD ${camara} mega-píxeles ${ram}GB precio ${precio}€`
    }
    verInfo() {
        alert(this.informacion);
        console.log(this.informacion);
        this.opciones()
    }
    opciones() {
        let respuesta = prompt(`
        ¿Qué quieres hacer? 
        1: Realizar Fotos; 
        2: Grabar Videos; 
        3: Ver Información 
        4: Reiniciar; 
        0: Apagar`)

        switch (respuesta) {
            case '1':
                this.fotos();
                break;
            case '2':
                this.grabar();
                break;

            case '3':
                this.verInfo();
                break;
            case '4':
                this.reiniciar();
                break;
            case '0':
                this.botonEncender();
                break;
        }
    }

    botonEncender() {
        if (this.encendido == false) {
            //console.log(this.encendido);
            this.encendido = true;
            console.log(`Encendiendo ${this.marca}`);
            this.opciones();
        } else if (this.encendido = true) {
            //console.log(this.encendido);
            this.encendido = false;
            //console.log(this.encendido); 
            console.log('Apagando...');
            return;
        }
    }

    reiniciar() {
        if (this.encendido = true) {
            alert('Reiniciando...')
            this.opciones();
        } else alert('Telefono apagado')
    }
    fotos() {
        alert('Di Quesooo!!! 😉');
        this.opciones();
    }
    grabar() {
        alert('Luces, cámara... acción!!! 😉');
        this.opciones()

    }
}

const xaiomi = new Telefono('Xaiomi', 'Blanco', 250, 1080, 250, 4, 450.5);
const huawei = new Telefono('Huawei', 'Negro', 150, 750, 250, 4, 560);
const oppo = new Telefono('Oppo', 'Azul', 250, 1080, 250, 8, 350);

xaiomi.botonEncender();
huawei.botonEncender();
oppo.botonEncender();