//Tipos de export
/*
    El export mantiene el nombre de la variable que se define en el archivo
    export const variable = 2       ->  import { variable } from 'path/file'

    El export default permite asignarle cualquier nombre a la variable cuando se hace import
    export default [1,2,3]          -> import variable from 'path/file'

    Otra manera de hacer export default es la siguiente:
    const heroes = []
    export default heroes


    Para exportar multiples elementos en un solo export:
     export {
        heroes as default, 
        owners
    }


    ************ PARA IMPORTAR EXPORTS DIFERENTES ************
    Para realizar esto, se debe usar desestructuracion:
    import valorDefault, {export1, export2} from 'path/file'
    **********************************************************
*/


const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export default heroes

export const owners = ['DC', 'Marvel']
