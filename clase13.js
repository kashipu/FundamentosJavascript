var william = {
    nombre: 'William',
    apellido: 'Moreno',
    edad: 26,
    peso: 75

}

console.log(`Al inicio del año ${william.nombre} ${william.apellido} pesa ${william.peso} kg`);


const INCREMENTO_PESO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++ ){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(william)
    } else if (random < 0.5)  {
        adelgazar(william)

    }
}

console.log(`Al Finalizar el año ${william.nombre} ${william.apellido} pesa ${william.peso.toFixed(1)} kg`);












