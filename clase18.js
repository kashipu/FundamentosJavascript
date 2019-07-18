var carlos = {
    nombre: 'Carlos',
    apellido: 'Lopez',
    altura: 1.76
};

var william = {
    nombre: 'William',
    apellido: 'Moreno',
    altura: 1.72
};

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    altura: 1.68
};

var dario = {
    nombre: 'Dario',
    apellido: 'Stivenson',
    altura: 1.74
};

var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Alvarez',
    altura: 1.72
};

var nicolas = {
    nombre: 'Nicolas',
    apellido: 'Suarez',
    altura: 1.68
};

var personas = [
    carlos, william, juan, dario, ricardo, nicolas
]

const esAlta = persona => persona.altura > 1.7
const esBaja = persona => persona.altura < 1.7

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)

