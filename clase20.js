var carlos = {
    nombre: 'Carlos',
    apellido: 'Lopez',
    altura: 1.76,
    cantidadlibros: 45
};

var william = {
    nombre: 'William',
    apellido: 'Moreno',
    altura: 1.72,
    cantidadlibros: 45
};

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    altura: 1.68,
    cantidadlibros: 45
};

var dario = {
    nombre: 'Dario',
    apellido: 'Stivenson',
    altura: 1.74,
    cantidadlibros: 45
};

var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Alvarez',
    altura: 1.72,
    cantidadlibros: 45
};

var nicolas = {
    nombre: 'Nicolas',
    apellido: 'Suarez',
    altura: 1.68,
    cantidadlibros: 47
};

var personas = [
    carlos, william, juan, dario, ricardo, nicolas
]

/* var acum = 0

for(var i = 0; i < personas.length; i++ ){
    acum = acum + personas[i].cantidadlibros
}

console.log(`En total todas las personas tienen ${acum} libros`) */


const reducer = (acum, persona) => {
    return acum + persona.cantidadlibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todas las personas tienen ${totalDeLibros} libros`)

