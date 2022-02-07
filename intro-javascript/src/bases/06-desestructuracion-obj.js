//Desestructuración de objetos o Asignación desestructurante//

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

console.log(persona.clave,persona.edad,persona.nombre); //Manera tradicional de acceder a los atributos de un objeto

const {nombre, edad, clave} = persona //Extrae los valores nombre, edad y clave del objeto persona y los declara como una variable

//const nombre = 'Supongamos que es una variable que se utiliza'

const {nombre:nombre2, edad:edadPersonaje, clave:key} = persona //En caso de tener una variable con el mismo nombre se utiliza esta manera

console.log(nombre,edad,clave);
console.log(nombre2,edadPersonaje,key);


//Desestructuración en funciones

const retornaPersona = ( usuario ) => {
    console.log(usuario);
    const {nombre, edad, clave} = usuario
    console.log(edad, nombre, clave);
}

retornaPersona(persona)

const retornaPersona2 = ( {nombre,edad,clave} ) => {
    console.log(edad, nombre, clave);
}

retornaPersona2(persona)

//Valores por defecto

const retornaPersona3 = ( {nombre,edad,clave, rango = 'capitán'} ) => { //Si no tiene el valor rango lo crea y utiliza el definido ('capitan')
    console.log(edad, nombre, clave, rango);
}

retornaPersona3(persona)

//---------------------//

const retornaPersona4 = ( {nombre,edad,clave, rango = 'capitán'} ) => {
    return{
        nombreClave: clave,
        anios: edad
    }
}

const avenger = retornaPersona4(persona)
console.log(avenger);

//---------------------//

const retornaPersona5 = ( {edad,clave, rango = 'capitán'} ) => (
    {
        nombreClave: clave,
        anios: edad,
        rango:rango,
        obj: {
           prop1: 13,
           prop2: 49 
        }
    }
)

const {nombreClave, anios, obj} = retornaPersona5(persona)
console.log(nombreClave, anios);
console.log(obj);

const {obj:{prop1, prop2}} = retornaPersona5(persona)
console.log(prop1,prop2);

//---------------------//