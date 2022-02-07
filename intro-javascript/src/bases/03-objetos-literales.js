//Objetos literales//

const persona = {
    nombre: "Tony",
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: '664299',
        lat: '14.13004',
        lng: '34.0247'
    }
}

const nombreObjeto = persona.nombre
const zipCode = persona.direccion.zip

console.log(nombreObjeto, persona,zipCode);
console.log({persona});
console.log({objeto:persona});

//Mutaciones//

const persona2 = persona //De esta manera se copia la referencia (espacio de memoria) de persona a persona 2, NO el valor
persona2.nombre = 'Peter'
console.log(persona2)
console.log(persona) //o.o

//La mejor manera es utilizar el operador spread
const personaSpread = {...persona}
console.log(personaSpread)




