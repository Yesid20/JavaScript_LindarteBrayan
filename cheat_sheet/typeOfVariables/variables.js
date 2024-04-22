/*Variables existen de 2 tipos: 
*Primitivo = Tipo de datos inmutable(que no cambian su valor) como son
String, number, boolean, null, undefined, bigint, symbol(valor único)
*Complejo = Tipo de datos mutable(puede cambiar su valor) como son
Objetos, arrays y function   */

//Inmutable
let numero = 23;
numero = numero + 12;
console.log(numero);

let esVerdad = true;
esVerdad = false;
console.log(esVerdad);

//Mutable 
let user = { nombre: 'Pepito', edad: 18 }
user.edad = 20;
console.log(user);

let fruits = ['apple', 'pear']
fruits[0] = 'banana';
console.log(fruits);

function changeName(objeto){
    objeto.nombre = 'Nuevo nombre';
}

let human = {
    nombre: 'Andres'
}
changeName(human);

console.log(human);