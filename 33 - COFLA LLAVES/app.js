'use strict'

//Crear SIstema que muestre 20 llaves posibles con sus imagenes para que se pueda seleccionar, debe aparecer la imagen, modelo, el precio... Una vez seleccionada, se deben enviar los datos al servidor

const contenedor = document.querySelector('.flex-container')
let contador = 0;

function crearLlave(img,nombre,modelo,precio){
    img ='<img src="./img/key-solid.svg" alt="">';
    nombre = `<h2>${nombre}<h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<h4>precio: <b>${precio}€</b></h4>`;
    return [img,nombre,modelo,precio];
}


let documentFragment =document.createDocumentFragment();

for(let i = 1; i<=20;i++){
    let precioRandom = Math.random().toFixed(2)*10 +30;
    let modeloRandom = Math.random().toFixed(2)*1000;
    let img = '<img src="./img/key-solid.svg" alt="">';

    let llave = crearLlave(`${img}`,`Llave ${i}`, `Modelo: ${modeloRandom}`,`${precioRandom}`);
    
    let div = document.createElement('div');
    div.addEventListener('click',()=>{
        document.querySelector('.key-data').value = modeloRandom;

    });

    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment)



// const llave = crearLlave('llave.png','llave 1','modelo 3', '44');

// contenedor.innerHTML += llave[0] + llave[1] + llave[2];


