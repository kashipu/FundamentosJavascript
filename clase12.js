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
}
 */

/*  const esMayorDeEdad = function(persona){
     return persona.edad >= MAYORIA_DE_EDAD;
 } */

 // Como escribir lo de arriba como un arrow Function
/* const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD */

// desestructurar el parametro
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;



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

// Reto es menor de edad en arrow function
const esMenorDeEdad = persona => !esMayorDeEdad(persona)