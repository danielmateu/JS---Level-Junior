'use strict'

//PRoblema Cofla 1: Tenemos que pedirles que ingresen el dinero y mostrar el helado más caro. Si hay 2 o más, mostrar ambos. Indicar el sobrante.

const helados = [
    {
        nombre: 'Helado1',
        valor: 0.6
    },
    {
        nombre: 'Helado2',
        valor: 1
    },
    {
        nombre: 'Helado3',
        valor: 1.6
    },
    {
        nombre: 'Helado4',
        valor: 1.9
    },
]

const definirCompra = (nombre)=>{
    
    nombre = prompt('Dime tu nombre 😊');
    let dinero =parseInt(prompt(`Dinero de ${nombre}`));
    
    for(let helado of helados){
        const sobrante = dinero - helado.valor;
        console.log(helado.nombre);
        if(dinero >= 0.6 && dinero < 1) return (`${nombre}: Helado1 y te sobran ${sobrante}`);
        if(dinero >= 1 && dinero < 1.6) return (`${nombre}: Helado2 y te sobran ${sobrante}`);
        if(dinero >= 1.6 && dinero < 2.9) return (`${nombre}: Helado3 y te sobran ${sobrante}`)
        if(dinero >= 2.9){
        let sobrante = (dinero - 2.9).toFixed(2);
        return (`${nombre}: Helado4 y te sobran ${sobrante}€`)
        }
        else return (`${nombre}, me estás vacilando?`);
    }
}

//console.log(definirCompra());
//console.log(definirCompra());
//console.log(definirCompra());









