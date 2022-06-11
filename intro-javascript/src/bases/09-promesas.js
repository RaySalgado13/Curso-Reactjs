/*
    Las promesas por naturaleza son asíncronas.
    JS primero ejecuta todo los síncrono y al terminar ejecuta las promesas

    Estructura: 
    const promesa = new Promise( callback )

    en el callback se definen dos variables:
        * Resolve es otro callback que se ejecuta cuando la promesa es exitosa
        * Reject es otro callback que se ejecuta cuando la promesa falla

*/

import {getHeroesByID, } from './08-import-export'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroesByID(2)
//         resolve( heroe ) //ejecuta el .then
//         reject( 'No se pudo encontrar el héroe' ) //ejecuta el .catch
//     }, 2000);
// })

// // promesa.then( callback ) cuando la promesa se ejecutó satisfactoriamente
// // promesa.catch( callback ) cuando la promesa se ejecutó con errores
// // promesa.finally( callback ) cuando la promesa se ejecutó sin importar su estado

// promesa.then( (heroe) => console.log(`Then. Heroe`, heroe))
// promesa.catch( (err) => console.warn(err))

const getHeroesByIDAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroesByID(id)
            heroe ? resolve( heroe ) : reject( 'No se pudo encontrar el héroe' )
        }, 2000);
    })

}

getHeroesByIDAsync(3343)
    .then(heroe => console.log('heroe', heroe))
    // .then(console.log) recibe la referencia del resolve, funciona igual
    .catch(err => console.warn(err))
    // .catch(console.warn) recibe la referencia del reject, funciona igual