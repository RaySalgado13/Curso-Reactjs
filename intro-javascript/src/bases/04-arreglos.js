//Arreglos//

const arrayTradicional = new Array() //manera anterior de crear arreglo, NO se recomienda utilizar a menos que se necesite un espacio fijo new Array(100)
const array = []

array.push(1) //Coloca en la ultima posicion del arreglo el valor, no se recomienda mucho ya que modifica el obj principal
array.push(2)
array.push(3)
array.push(4)
console.log(array);

//sucede lo mismo como los objetos
let array2 = array
array2.push(5)
console.log(array,array2);

//Lo mejor es utilizar el operador spread
let array3 = [...array]
let array4 = [...array3, 10]//Se añade 10 en la ultima posicion
console.log(array3,array4);

//metodo map
//El metodo map() crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
let array5 = array2.map( function(numero) {
    return numero * 2
})
console.log(array5);


