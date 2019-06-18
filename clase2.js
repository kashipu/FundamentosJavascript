//Variables
var nombre = 'William ', apellido = 'Moreno'

//Cambiar a mayusculas y minusculas
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
// Seleccionar letras del nombre
var primeraLetraDelNombre = nombre.charAt(0);
// Contar cuantos caracteres tiene el nombre
var cantidadDeLetrasDelNombre = nombre.length;
// Concatenar variables y strings
var nombreCompleto = nombre + ' ' + apellido;
// Concatenar con interpolación 
var nombreCompletoInter = `${nombre} ${apellido.toLocaleLowerCase()}`
// Seleccionar un Caracter
var str = nombre.charAt(1) + nombre.charAt(2);
// Seleccionar cuantos caracteres quiero tomar, de donde a donde
var subStr = nombre.substr(0, 4) + nombre.charAt(6);

// Mostrar al usuario cual es la ultima letra del nombre 

var nombreEjercicio = 'Michelle'
var cantidadLetras = nombreEjercicio.length;
var ultimaLetra = `${nombreEjercicio.charAt(cantidadLetras - 1)}`
var primeraLetra = `${nombreEjercicio.charAt(cantidadLetras - cantidadLetras)}`
