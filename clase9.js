// Comparaciones
var x = 4, y = "4"

// Comparacion sin importar el tipo de dato
console.log(x == y);

// Comparación contando el tipo de dato si es string o numero 
console.log(x === y);

//Comparar Objetos

var william = {
    nombre: "William"

}

var otroWilliam = {
    nombre: "William"
}

var otroWilliam2 = {
    ...william
}

console.log(william == otroWilliam);
console.log(william === otroWilliam);


