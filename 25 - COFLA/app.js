'use strict'

//Cofla terminó el primer semestre y no sabe si aprobará o no las materias. Necesitará: 90% de asistencias, media de al menos 7/10 debe tener el 75% de trabajos entregados

let materias = {
    fisica: [90,6,3],
    programacion: [95,8,4],
    diseño: [80,5,2],
    bbdd: [100,9,4],
    logica: [90,4,4],
    calculo: [45,2,1],
    biologia: [90,8,4]
}

//Debemos solicitar los datos y decir si aprueba o no se
const pedirDatos = ()=>{
    
    for(let materia in materias){
        let asistencia = materias[materia][0];
        let notaMedia =  materias[materia][1];
        let trabajosEntregado =  materias[materia][2];
        if(asistencia >= 90 && notaMedia > 7 && trabajosEntregado > 3){
            console.log(`${materia}%cAprobado `,"color:green;background:black; padding: 10px ");
        }else console.log(`${materia}%cSuspendido `,"color:red;background:black; padding: 10px ");
        
        
    }
}

pedirDatos()

//Mostrar todo con colores representativo


//Estructurarlo como una tabla.





