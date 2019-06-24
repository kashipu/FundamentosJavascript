var william = {
    nombre: 'William',
    apellido: 'Moreno',
    edad: 26
}

var dario = {
    nombre: 'Darío',
    apellido: 'Polanco',
    edad: 28
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'Cortez',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre 
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(william)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(carlos)


// Reto Clase 7 = Imprimrir Hola me llamo William y tengo 26 años con los 3 objetos que tengo 

function imprimirNombreyEdad(persona){
    // var nombre = persona.nombre 
    var { nombre } = persona
    var { apellido } = persona
    var { edad } = persona
    var muestra = `Hola soy ${nombre} ${apellido} y tengo ${edad} años `
    console.log(muestra.toUpperCase());
}

imprimirNombreyEdad(william)
imprimirNombreyEdad(dario)
imprimirNombreyEdad(carlos)

// Clase 8
function cumpleaños(persona){
persona.edad += 1
}