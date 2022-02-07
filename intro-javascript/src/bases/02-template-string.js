const nombre = "Ray"
const apellido = "Salgado"

console.log('Usando concatenacion tradicional: \n'+nombre+' '+apellido);
console.log(
`Usando template strings: 
${nombre} ${apellido}`
);

function getSaludo(nombre){
    return `Hola mundo, ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);