var william = {
    nombre: 'William',
    apellido: 'Moreno',
    edad: 17,
    disenador: true,
    cocinero: false,
    cantante: false,
    dj: false,
    ciclista: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.disenador){
        console.log('Diseñador');
    }
    if (persona.cocinero){
        console.log('Cocinero');
    }
    if (persona.cantante){
        console.log('Cantante');
    }
    if (persona.dj){
        console.log('Dj');
    }
    if (persona.ciclista){
        console.log('Ciclista');
    }
}

imprimirProfesiones(william)

// Desafio Clase 10 Imprimir si es mayor de edad 
    // Sacha es Mayor de edad 
    // Sacha es Menor de edad 

function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`);
    }
    if (persona.edad <= 18) {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(william)


