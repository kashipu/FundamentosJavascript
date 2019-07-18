function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function () {
    if(this.altura > 1.8){
        console.log(`${this.nombre} es Alto por que mide ${this.altura} mt`)
    }else{
        console.log(`${this.nombre} es Bajito por que mide ${this.altura} mt`)
    }
    
}


Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var william = new Persona('William', 'Moreno', 1.7)
var carlos = new Persona('Carlos', 'Ortiz', 1.9)
var arturo = new Persona('Arturo', 'Martinez',1.81)



