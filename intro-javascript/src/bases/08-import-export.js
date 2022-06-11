/*Importar archivos -> imp shortcut en vscode

    ************ PARA IMPORTAR EXPORTS DIFERENTES ************
    Para realizar esto, se debe usar desestructuracion:
    import valorDefault, {export1, export2} from 'path/file'
    **********************************************************

*/

import heroes, { owners }  from '../data/heroes' //utilizar la extension .js es opcional


console.log(heroes)

//Recordar para las arrow functions:
/*
    const func = () => {
        return 'HEllO'
    }

    const func = () => ( 'HEllO' )
    
    const func = () => 'HEllO'
    
    Son iguales
*/

const getHeroesByID = (idHeroe) => {
    return heroes.find( ( {id} ) => id === idHeroe )
}

console.log(getHeroesByID(2))



const getHeroesByOwner = (ownerHeroe) => (
    heroes.filter( ( {owner} ) => owner === ownerHeroe )
)

console.log(getHeroesByOwner('Marvel'))