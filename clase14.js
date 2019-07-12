var william = {
    nombre: 'William',
    apellido: 'Moreno',
    edad: 26,
    peso: 75

}

console.log(`Al inicio del año ${william.nombre} ${william.apellido} pesa ${william.peso} kg`);


const INCREMENTO_PESO = 0.3
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const DIAS_DEL_ANO = 365
const KILOS_POR_BAJAR = 3
const META = william.peso - KILOS_POR_BAJAR;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

while (william.peso > META) {
    
    if (comeMucho()){
        aumentarDePeso(william)
    }
    if (realizaDeporte()){
        adelgazar(william)
    }
    dias++
}

console.log(`Pasaron ${dias} dias hasta que ${william.nombre} adelgazó 3kg `)

console.log(`Al Finalizar el año ${william.nombre} ${william.apellido} pesa ${william.peso.toFixed(1)} kg`);












