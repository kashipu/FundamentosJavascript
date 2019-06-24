var william = {
    nombre: 'William',
    apellido: 'Moreno',
    edad: '26'
}

var dario = {
    nombre: 'Darío',
    apellido: 'Polanco',
    edad: '28'
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'Cortez',
    edad: '27'
}

function imprimirNombreEnMayusculas(persona){
    persona = persona.nombre.toUpperCase()
    console.log(persona)
    document.write(`${persona} `)
}

function imprimirNombreEnMayusculas2({ apellido }){
    console.log(apellido.toUpperCase())
}

imprimirNombreEnMayusculas(william)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(carlos)

imprimirNombreEnMayusculas2(william)
imprimirNombreEnMayusculas2(dario)
imprimirNombreEnMayusculas2(carlos)

imprimirNombreEnMayusculas({nombre: 'Pepito'})

// Funciones con alcanze globar y unicamente en las funciones