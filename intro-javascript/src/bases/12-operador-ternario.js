const activo = true

// let msg = ''

// if( activo ){
//     msg = 'Activo'
// }
// else{
//     msg = 'Inactivo'
// }

//Operador ternario
const msg = activo ? 'Activo' : 'Inactivo'
const msg2 = !activo ? 'Activo' : null
//Operador ternario simplificado
const msg3 = (activo) && 'Activo' //Si la expresion se cumple, se retorna el valor después de &&
console.log(msg3)