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
    altura: 1.68
};

var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Alvarez',
    altura: 1.68
};

var nicolas = {
    nombre: 'Nicolas',
    apellido: 'Suarez',
    altura: 1.68
};

var personas = [
    carlos, william, juan, dario, ricardo, nicolas
]

console.log(personas.length)
console.log(`En la lista hay ${personas.length} personas y cada una mide`)
for (var i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} mide ${personas[i].altura}`)
}


document.write(`En la lista hay ${personas.length} personas y cada una mide <hr>`)
for (var i = 0; i < personas.length; i++){
    document.write(`${personas[i].nombre} mide ${personas[i].altura} mt<br>`)
}

