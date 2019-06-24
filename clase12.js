var william = {
    nombre: 'William',
    apellido: 'Moreno',
    edad: 26,
    disenador: true,
    cocinero: false,
    cantante: false,
    dj: false,
    ciclista: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Moreno',
    edad: 17,
}

const MAYORIA_DE_EDAD = 18

/* const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
} */

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log("Acceso Denegado");
    }
}

