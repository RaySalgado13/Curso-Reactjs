//Funciones//

//manera tradicional de crear funciones
//NO se recomienda utilizar esta manera ya que limita las posibilidades de callbacks y promesas en JS
function saludar(nombre){
    return `Hola, ${nombre}`
}

//saludar = 30

console.log(saludar('Ray'));
console.log(saludar); //Referencia a la funcion tradicional


//Algo un poco mejor es guardarla en una constante
const saludarVariable = function saludar(nombre){
    return `Hola, ${nombre}`
}

//saludarVariable = 20

console.log(saludar('Ray'));
console.log(saludarVariable); 


//La mejor opcion es utilizar Arrow Functions
const saludarArrow = (nombre) => {
    return `Hola, ${nombre}` 
}

console.log(saludarArrow('Ray'));
console.log(saludarArrow);


//Arrow functions con objetos

const getUser = () => { //Manera 1
    return {
        uid: 'ABC13',
        username: 'RaySalgado_13'
    }
}

console.log(getUser());

const getUser2 = () => ({ //Manera 2
    uid: 'ABD65',
    username: 'Karlos_Ramirez03'
})

console.log(getUser2());

const user = getUser2() //funcion como objeto
console.log(user); //funcion como objeto


const getUsuarioActivo = nombre => (
    {
        uid:'RSA22',
        username:nombre
    }
)

const usuarioActivo = getUsuarioActivo('Ray_Salgado')
console.log(usuarioActivo);
