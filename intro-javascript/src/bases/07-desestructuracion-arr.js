// Manera tradicional de acceder a arrays
const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);

//Desestructuración de arrays
const [goku] = personajes; //acceder al primer elemento y asignarlo a la variable goku
const [, vegeta] = personajes; //acceder al segundo elemento y asignarlo a la variable vegeta

console.log(goku, vegeta);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Ejemplo con funciones

const useState = (valor, nombre) => {
  return [
    valor,
    () => {
      console.log(`Hello world ${nombre}`);
    },
  ];
};

const arr = useState('Goku')

//Si se desea acceder de la forma tradicional a la funcion del array que retorna useState se haría así:
arr[1]() //Ejecuta la función

//SIn embargo, con la desetructuracion de arrays, se puede optimizar la legibilidad del codigo

const [nombre, setNombre] = useState('nombre',' Ray')

console.log(nombre)
setNombre()//Ejecuta la función