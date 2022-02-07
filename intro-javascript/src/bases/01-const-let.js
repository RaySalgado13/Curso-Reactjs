//variables y constantes//

//¡¡¡No utilizar var!!!
const constante = 'nunca cambia'
let variable = 'puede cambiar y mutar'

const nombre = 'Ray'
const apellido = 'Salgado'

let valorDado = 5
valorDado = 4

console.log(nombre,apellido,valorDado);

//Variables de scope
if(true) {
    let valorDado = 6
    console.log(valorDado);
}

console.log(valorDado);